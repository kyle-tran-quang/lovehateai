#!/usr/bin/env node
// Inspo candidates. Finds recent design posts and writes a review file. Does not touch the site.
//
//   node pipeline/inspos.mjs [--scan 120] [--max 40] [--section Design] [--delay 450] [--out DIR]
//
// Where the candidates come from: recent.design's sitemap is the index of what to look at,
// newest first. Its detail pages are read for four facts only: the link to the original post,
// the section and category it files the post under, and the post's date. Nothing else is kept,
// and none of its titles, blurbs or images are used.
//
// Where the rest comes from: the original post. The credit (the poster's display name), the
// post date and the thumbnail come from the post itself, through fxtwitter's public API, so the
// image is the poster's own `pbs.twimg.com` file. It is linked, never downloaded into the repo,
// the same as the entries already in src/content/inspos/.
//
// What this script will and will not do:
//   - Keeps only posts from X that carry a photo or a video, and whose poster flagged nothing sensitive.
//   - Skips any post already in src/content/inspos/ (matched on its URL).
//   - Never writes titles or alt text. A person looks at the image and writes both.
//   - Goes one request at a time with a pause between them, and names itself as a generic client.

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = join(HERE, '..', 'src', 'content', 'inspos');
const INDEX = 'https://recent.design';
const TWEET_API = 'https://api.fxtwitter.com';
const UA = 'inspo-reader/0.1';

// ---------- args ----------
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const SCAN = Number(opt('scan', 120));
const MAX = Number(opt('max', 40));
const SECTION = opt('section', 'Design');
const DELAY = Number(opt('delay', 450));
const OUT_DIR = opt('out', join(HERE, 'out'));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, as = 'text') {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(20000),
    redirect: 'follow',
    headers: { 'user-agent': UA, accept: as === 'json' ? 'application/json' : 'text/html,application/xml;q=0.9,*/*;q=0.5' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return as === 'json' ? res.json() : res.text();
}

// ---------- reading a detail page ----------
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const cp = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(cp) && cp > 0 && cp < 0x110000 ? String.fromCodePoint(cp) : m;
    }
    return NAMED[e.toLowerCase()] ?? m;
  });

function readDetail(html) {
  const lines = decode(
    html
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, '\n'),
  )
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const after = (label) => {
    const i = lines.indexOf(label);
    return i === -1 ? null : (lines[i + 1] ?? null);
  };

  // The section is the breadcrumb line just above the item's own title.
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').replace(/\s+[—-]\s+Recent$/, '');
  const at = lines.indexOf(title, 14);
  const section = at > 0 ? lines[at - 1] : null;

  const post = html.match(/https:\/\/(?:x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/(\d+)/);
  return {
    section,
    category: after('Category'),
    handle: post?.[1] ?? null,
    postId: post?.[2] ?? null,
  };
}

// ---------- reading the post ----------
function readPost(json) {
  const t = json.tweet;
  if (!t) return null;
  const m = t.media ?? {};
  const photo = m.photos?.[0];
  const video = m.videos?.[0];
  let image = null;
  let kind = null;
  if (photo?.url) {
    // The API hands back `?name=orig`, which is the full-size file (thousands of pixels
    // wide). Ask for the medium size instead, set once: a second `name` returns a 404.
    const u = new URL(photo.url);
    u.searchParams.set('name', 'medium');
    image = u.toString();
    kind = 'photo';
  } else if (video?.thumbnail_url) {
    image = video.thumbnail_url;
    kind = 'video';
  }
  const created = t.created_timestamp ? new Date(t.created_timestamp * 1000) : new Date(t.created_at);
  return {
    url: t.url,
    credit: t.author?.name ?? null,
    handle: t.author?.screen_name ?? null,
    date: Number.isFinite(created.getTime()) ? created.toISOString().slice(0, 10) : null,
    image,
    kind,
    sensitive: Boolean(t.possibly_sensitive),
    // Kept for the reviewer only, to help recognise the post. Never written to an entry.
    text: (t.text ?? '').replace(/\s+/g, ' ').trim().slice(0, 140),
  };
}

// ---------- main ----------
const known = new Set();
for (const f of await readdir(SITE).catch(() => [])) {
  const body = await readFile(join(SITE, f), 'utf8');
  const m = body.match(/^url:\s*"?([^"\n]+)"?/m);
  if (m) known.add(m[1].replace(/^https:\/\/twitter\.com\//, 'https://x.com/'));
}

const sitemap = await get(`${INDEX}/sitemap.xml`);
const items = [...sitemap.matchAll(/<loc>(https:\/\/recent\.design\/i\/[^<]+)<\/loc>/g)].map((m) => m[1]).slice(0, SCAN);
console.error(`${items.length} items to look at, section "${SECTION}", ${known.size} already on the site`);

const candidates = [];
const skipped = {};
const skip = (why) => (skipped[why] = (skipped[why] ?? 0) + 1);

for (const page of items) {
  if (candidates.length >= MAX) break;
  let d;
  try {
    d = readDetail(await get(page));
  } catch (e) {
    skip('detail page failed');
    await sleep(DELAY);
    continue;
  }
  await sleep(DELAY);
  if (d.section !== SECTION) { skip(`not in ${SECTION}`); continue; }
  if (!d.postId) { skip('not an X post'); continue; }
  if (known.has(`https://x.com/${d.handle}/status/${d.postId}`)) { skip('already on the site'); continue; }

  let post;
  try {
    post = readPost(await get(`${TWEET_API}/${d.handle}/status/${d.postId}`, 'json'));
  } catch (e) {
    skip('post lookup failed');
    await sleep(DELAY);
    continue;
  }
  await sleep(DELAY);
  if (!post) { skip('post lookup failed'); continue; }
  if (!post.image) { skip('no photo or video'); continue; }
  if (post.sensitive) { skip('flagged sensitive'); continue; }
  if (!post.credit || !post.date) { skip('missing credit or date'); continue; }

  candidates.push({
    url: post.url,
    source: 'X',
    credit: post.credit,
    handle: post.handle,
    date: post.date,
    category: d.category,
    imageUrl: post.image,
    media: post.kind,
    postText: post.text,
  });
}

candidates.sort((a, b) => b.date.localeCompare(a.date));

const day = new Date().toISOString().slice(0, 10);
const result = {
  generatedAt: new Date().toISOString(),
  settings: { scan: SCAN, max: MAX, section: SECTION },
  note: 'Links, credit, date and thumbnail only. A person writes each title and alt text from the image.',
  candidates,
  skipped,
};

await mkdir(OUT_DIR, { recursive: true });
const file = join(OUT_DIR, `inspos-${day}.json`);
await writeFile(file, JSON.stringify(result, null, 2) + '\n');
console.log(`${candidates.length} candidates. Skipped: ${JSON.stringify(skipped)}`);
console.log(`Wrote ${file}`);
