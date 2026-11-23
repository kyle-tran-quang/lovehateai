#!/usr/bin/env node
// Daily candidate fetch. Prototype: reads feeds, filters, writes a review file. Does not touch the site.
//
//   node pipeline/fetch.mjs [--days 3] [--max 15] [--per-source 3] [--min-score 4]
//                           [--from-dir DIR] [--out DIR]
//
// --from-dir reads DIR/<source id>.xml instead of the network (for testing).
//
// What this script will and will not do:
//   - tier "link":    keeps title, author, source, date, URL. Never stores feed text.
//   - tier "excerpt": also keeps the first N characters of the publisher's own feed summary,
//                     only for sources whose entry in sources.json records a permission basis.
//   - Never stores full article text, and never downloads an image. For each candidate that
//     makes the cut it looks up the publisher's own thumbnail and keeps only its URL (see
//     lib/image.mjs). A candidate with no usable image is flagged, not hidden.
//   - Drops any item without a URL, a title, a date or a named author.
//   - Writes nothing to candidates when no item clears the score threshold.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalUrl, siteUrls } from './lib/entry.mjs';
import { feedImage, findImage } from './lib/image.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));

// ---------- args ----------
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const DAYS = Number(opt('days', 3));
const MAX = Number(opt('max', 15));
const PER_SOURCE = Number(opt('per-source', 3));
const MIN_SCORE = Number(opt('min-score', 4));
const FROM_DIR = opt('from-dir', null);
const OUT_DIR = opt('out', join(HERE, 'out'));
// A JSON array of URLs already offered, so a story is never shown twice.
const SKIP_FILE = opt('skip-file', null);
// Image lookups go to each story's page. Off with --no-images, and always off with --from-dir.
const IMAGES = !args.includes('--no-images') && !FROM_DIR;

// ---------- sources ----------
const PERMISSION_BASES = ['policy', 'written-permission', 'cc-license'];
const MAX_EXCERPT_CEILING = 300;

function validateSources(list) {
  const errors = [];
  const ids = new Set();
  for (const s of list) {
    const id = s.id ?? '(no id)';
    if (!s.id || !s.name || !s.homepage || !s.feedUrl) errors.push(`${id}: needs id, name, homepage, feedUrl`);
    if (ids.has(s.id)) errors.push(`${id}: duplicate id`);
    ids.add(s.id);
    if (!s.license?.checked) errors.push(`${id}: license.checked (date a human read the terms) is required`);
    if (!['link', 'excerpt'].includes(s.tier)) {
      errors.push(`${id}: tier must be "link" or "excerpt". Full text is not supported by this script.`);
    }
    if (s.tier === 'excerpt') {
      const p = s.permission;
      if (!p || !PERMISSION_BASES.includes(p.basis) || !p.evidence || !p.quote) {
        errors.push(`${id}: tier "excerpt" needs permission {basis: ${PERMISSION_BASES.join('|')}, evidence, quote}`);
      }
      if (!Number.isInteger(s.maxExcerptChars) || s.maxExcerptChars < 1 || s.maxExcerptChars > MAX_EXCERPT_CEILING) {
        errors.push(`${id}: maxExcerptChars must be an integer from 1 to ${MAX_EXCERPT_CEILING}`);
      }
    }
  }
  return errors;
}

// ---------- parsing (no dependencies; feeds are simple enough) ----------
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const cp = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(cp) && cp > 0 && cp < 0x110000 ? String.fromCodePoint(cp) : m;
    }
    return NAMED[e.toLowerCase()] ?? m;
  });
const unwrap = (s) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
const text = (s) =>
  decode(decode(unwrap(s)).replace(/<\/?[a-zA-Z][^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

function tag(block, ...names) {
  for (const n of names) {
    const m = block.match(new RegExp(`<${n}(?:\\s[^>]*)?>([\\s\\S]*?)</${n}>`, 'i'));
    if (m) return m[1];
  }
  return null;
}

function itemLink(block) {
  // Atom: <link rel="alternate" href="..."/>. RSS: <link>url</link>.
  for (const m of block.matchAll(/<link\b([^>]*?)\/?>/gi)) {
    const attrs = m[1];
    const href = attrs.match(/href\s*=\s*["']([^"']+)["']/i)?.[1];
    const rel = attrs.match(/rel\s*=\s*["']([^"']+)["']/i)?.[1];
    if (href && (!rel || rel === 'alternate')) return decode(href).trim();
  }
  const t = tag(block, 'link');
  return t ? text(t) : null;
}

function itemAuthor(block) {
  const raw = tag(block, 'dc:creator', 'author');
  if (!raw) return null;
  const inner = unwrap(raw);
  const name = inner.match(/<name>([\s\S]*?)<\/name>/i);
  let a = text(name ? name[1] : inner);
  const paren = a.match(/\(([^)]+)\)\s*$/); // RSS: "email (Name)"
  if (paren && a.includes('@')) a = paren[1].trim();
  if (a.includes('@')) return null; // a bare email address is not a credit
  return a || null;
}

function parseFeed(xml) {
  const blocks = [...xml.matchAll(/<(item|entry)[\s>][\s\S]*?<\/\1>/gi)].map((m) => m[0]);
  return blocks.map((b) => {
    const summary = tag(b, 'description', 'summary');
    const content = tag(b, 'content:encoded', 'content');
    const when = tag(b, 'pubDate', 'published', 'updated', 'dc:date');
    const link = itemLink(b);
    return {
      title: text(tag(b, 'title') ?? ''),
      link,
      // The picture the feed carries, a fallback for a page that blocks a plain request.
      image: feedImage(b, link ?? undefined),
      author: itemAuthor(b),
      date: when ? Date.parse(text(when)) : NaN,
      summary: summary ? text(summary) : '',
      // Used for scoring only. Never written to the output.
      scoringText: text(summary ?? content ?? '').slice(0, 1500),
    };
  });
}

// ---------- relevance (heuristic stand-in for the model-scoring step) ----------
const AI = /\b(ai|a\.i\.|llms?|gpt\S*|chatgpt|claude|gemini|copilot|generative|genai|machine learning|prompt(?:s|ing)?|agents?|agentic|neural|vibe[- ]cod\w*|midjourney|diffusion|chatbots?)\b/i;
const DESIGN = /\b(design\w*|ux|ui|interface\w*|typograph\w*|prototyp\w*|figma|usability|accessib\w*|user research|interaction\w*|visual\w*|layout|craft)\b/i;
const CONCRETE = /\b(case study|we tested|i tried|i built|experiment\w*|lessons|what (?:i|we) learned|workflow|critique|field notes)\b/i;
const PROMO = /\b(top|best) \d+|\b\d+ (?:\w+ ){0,2}(?:ways|tips|tools|prompts|tricks|hacks|apps|plugins)\b|\b\d+ (?:best|top|free)\b|roundup|webinar|giveaway|sponsored|we(?:'|’)re hiring|now available|introducing\b/i;

const distinct = (re, s) => new Set([...s.matchAll(new RegExp(re.source, 'gi'))].map((m) => m[0].toLowerCase())).size;

function score(item) {
  const t = item.title;
  const s = item.scoringText;
  const why = [];
  if (PROMO.test(t)) return { score: -1, why: ['promo or listicle title'], reject: 'promo or listicle' };
  // A single passing "design" or "UI" in a summary is not enough. Summary-only design needs two distinct terms.
  const aiT = AI.test(t), aiS = AI.test(s), dT = DESIGN.test(t), dS = distinct(DESIGN, s) >= 2;
  if (!(aiT || aiS) || !(dT || dS)) return { score: 0, why, reject: 'not about both AI and design' };
  let n = 0;
  if (aiT) { n += 3; why.push('AI in title'); } else { n += 1; why.push('AI in summary'); }
  if (dT) { n += 2; why.push('design in title'); } else { n += 1; why.push('design in summary'); }
  if (CONCRETE.test(t + ' ' + s)) { n += 1; why.push('signals a concrete example'); }
  return { score: n, why, reject: null };
}

// ---------- excerpt (tier "excerpt" only) ----------
function makeExcerpt(summary, max) {
  const clean = summary.replace(/\s+/g, ' ').trim();
  if (!clean) return null;
  if (clean.length <= max) return `[…] ${clean}`;
  const cut = clean.slice(0, max).replace(/\s+\S*$/, '').replace(/[\s,;:.\-–—]+$/, '');
  return `[…] ${cut}…`;
}

// ---------- build one record, enforcing credit ----------
function assertCredited(c) {
  for (const k of ['title', 'url', 'author', 'source', 'sourceUrl', 'date']) {
    if (!c[k]) throw new Error(`candidate missing ${k}: ${JSON.stringify(c)}`);
  }
}

function assertTier(c, src) {
  if (src.tier === 'link' && 'excerpt' in c) throw new Error(`link-tier source ${src.id} produced an excerpt`);
  if (src.tier === 'excerpt' && c.excerpt && c.excerpt.length > src.maxExcerptChars + 8) {
    throw new Error(`excerpt for ${src.id} exceeds its cap`);
  }
}

// ---------- main ----------
async function loadFeed(src) {
  if (FROM_DIR) return readFile(join(FROM_DIR, `${src.id}.xml`), 'utf8');
  const res = await fetch(src.feedUrl, {
    signal: AbortSignal.timeout(20000),
    redirect: 'follow',
    headers: {
      'user-agent': 'daily-feed-reader/0.1',
      accept: 'application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.5',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

const config = JSON.parse(await readFile(join(HERE, 'sources.json'), 'utf8'));
const problems = validateSources(config.sources);
if (problems.length) {
  console.error('sources.json is not valid:\n  ' + problems.join('\n  '));
  process.exit(1);
}

const now = Date.now();
const earliest = now - DAYS * 86400000;
const latest = now + 86400000;
const feedReport = [];
const rejectionCounts = {};
const rejectedForCredit = [];
const bump = (r) => (rejectionCounts[r] = (rejectionCounts[r] ?? 0) + 1);
const seen = new Set();
const pool = [];

// Stories already on the site, and any URL in --skip-file, are never candidates.
const skip = await siteUrls(join(HERE, '..', 'src', 'content', 'news'));
if (SKIP_FILE) {
  for (const u of JSON.parse(await readFile(SKIP_FILE, 'utf8'))) {
    const c = canonicalUrl(u, { forCompare: true });
    if (c) skip.add(c);
  }
}

await Promise.all(
  config.sources.map(async (src) => {
    let items;
    try {
      items = parseFeed(await loadFeed(src));
    } catch (e) {
      feedReport.push({ id: src.id, ok: false, error: String(e.message ?? e) });
      return;
    }
    feedReport.push({ id: src.id, ok: true, items: items.length });
    for (const it of items) {
      if (!Number.isFinite(it.date) || it.date < earliest || it.date > latest) { bump('outside date window'); continue; }
      const url = it.link && canonicalUrl(it.link);
      const author = it.author || src.defaultAuthor || null;
      if (!url || !it.title || !author) {
        bump('missing url, title or author');
        rejectedForCredit.push({ source: src.id, title: it.title || '(none)', url: it.link ?? null, author: it.author });
        continue;
      }
      if (skip.has(canonicalUrl(url, { forCompare: true }))) { bump('already on the site or offered'); continue; }
      if (seen.has(url)) { bump('duplicate url'); continue; }
      seen.add(url);
      const sc = score(it);
      if (sc.reject) { bump(sc.reject); continue; }
      if (sc.score < MIN_SCORE) { bump(`score below ${MIN_SCORE}`); continue; }
      const c = {
        id: createHash('sha1').update(url).digest('hex').slice(0, 12),
        sourceId: src.id,
        title: it.title,
        url,
        author,
        source: src.name,
        sourceUrl: src.homepage,
        date: new Date(it.date).toISOString().slice(0, 10),
        tier: src.tier,
        score: sc.score,
        why: sc.why,
      };
      if (src.tier === 'excerpt') {
        const ex = makeExcerpt(it.summary, src.maxExcerptChars);
        if (ex) c.excerpt = ex;
      }
      assertCredited(c);
      assertTier(c, src);
      pool.push({ c, sourceId: src.id, feed: it.image });
    }
  }),
);

// Rank, then cap per source so one prolific feed cannot fill the day.
pool.sort((a, b) => b.c.score - a.c.score || b.c.date.localeCompare(a.c.date));
const perSource = {};
const candidates = [];
const feedImages = new Map();
for (const { c, sourceId, feed } of pool) {
  if (candidates.length >= MAX) break;
  perSource[sourceId] = (perSource[sourceId] ?? 0) + 1;
  if (perSource[sourceId] > PER_SOURCE) { bump('per-source cap'); continue; }
  candidates.push(c);
  feedImages.set(c.id, feed);
}

// A thumbnail for each story that made the cut, one at a time. Every candidate ends up with an
// imageStatus: ok (imageUrl and alt are set), generic (only the site's default image exists) or
// none. Telegram shows the status, and Publish only writes an image when it is ok.
if (IMAGES) {
  for (const c of candidates) {
    const r = await findImage(c, feedImages.get(c.id)).catch((e) => ({ status: 'none', why: String(e.message ?? e) }));
    c.imageStatus = r.status;
    if (r.status === 'ok') { c.imageUrl = r.imageUrl; c.alt = r.alt; } else c.imageNote = r.why;
    await new Promise((res) => setTimeout(res, 300));
  }
  const missing = candidates.filter((c) => c.imageStatus !== 'ok').length;
  if (missing) console.log(`${missing} of ${candidates.length} stories have no usable image`);
}

const day = new Date(now).toISOString().slice(0, 10);
const result = {
  generatedAt: new Date(now).toISOString(),
  settings: { days: DAYS, max: MAX, perSource: PER_SOURCE, minScore: MIN_SCORE, fromDir: FROM_DIR },
  note: candidates.length
    ? 'Heuristic scoring only. A human (or the model-scoring step) picks from this list. The pipeline does not publish.'
    : 'No item cleared the threshold. Publish nothing today.',
  feeds: feedReport.sort((a, b) => a.id.localeCompare(b.id)),
  candidates,
  rejectionCounts,
  rejectedForCredit,
};

await mkdir(OUT_DIR, { recursive: true });
await writeFile(join(OUT_DIR, `candidates-${day}.json`), JSON.stringify(result, null, 2) + '\n');

const md = [
  `# Candidates for ${day}`,
  '',
  result.note,
  '',
  ...candidates.flatMap((c, i) => [
    `${String(i + 1).padStart(2, '0')}. ${c.title}`,
    `    ${c.author}, ${c.source}, ${c.date}  (tier: ${c.tier}, score ${c.score}: ${c.why.join(', ')})`,
    `    ${c.url}`,
    ...(c.imageStatus ? [`    image: ${c.imageStatus === 'ok' ? c.imageUrl : `${c.imageStatus} (${c.imageNote})`}`] : []),
    ...(c.excerpt ? [`    ${c.excerpt}`] : []),
    '',
  ]),
  '## Feeds',
  ...result.feeds.map((f) => `- ${f.id}: ${f.ok ? `${f.items} items` : `FAILED ${f.error}`}`),
  '',
  '## Rejected',
  ...Object.entries(rejectionCounts).map(([k, v]) => `- ${k}: ${v}`),
  ...(rejectedForCredit.length ? ['', `${rejectedForCredit.length} items dropped for missing credit, listed in the JSON.`] : []),
  '',
].join('\n');
await writeFile(join(OUT_DIR, `candidates-${day}.md`), md);

console.log(md);
console.log(`Wrote ${join(OUT_DIR, `candidates-${day}`)}.{json,md}`);
