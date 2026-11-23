// Finds a thumbnail for a story. Used by fetch.mjs. Only a URL is kept: the picture is the
// publisher's own, hotlinked from their CDN, never downloaded into the repo.
//
// No crawl can promise an image for every story, so this returns one of three outcomes and
// never throws:
//   ok       a checked, story-specific image, with alt text
//   generic  the only image found is the site's default (its homepage uses the same one)
//   none     nothing usable was found, or nothing passed the check
// The caller flags generic and none instead of passing them off as a thumbnail.
//
// The ladder, first hit that passes the check wins:
//   1. the page's og:image, then twitter:image (the publisher's own share picture)
//   2. the picture the feed carries (media:content, enclosure, or the first <img>), for
//      publishers whose page blocks a plain request, like uxdesign.cc

const UA = 'daily-feed-reader/0.1';
const TYPES = /^image\/(png|jpe?g|gif|webp)\b/i;
const MIN_BYTES = 8_000; // under this it is an icon or a tracking pixel
const MAX_BYTES = 5_000_000; // Telegram's cap for a photo it fetches by link
const TRACKING = /\/_\/stat\b|pixel|beacon|tracking|gravatar|emoji/i;
// An alt that only names the site is not a description of the picture.
const EMPTY_ALT = /\blogo\b|^(image|photo|thumbnail|cover)$/i;

const decodeAttr = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#0*38;/g, '&').replace(/&quot;/g, '"').replace(/&#0*39;|&#x27;/gi, "'");

// https only: the site is served over https, and Telegram will not fetch plain http reliably.
function absolute(u, base) {
  try {
    const url = new URL(decodeAttr(String(u).trim()), base);
    return url.protocol === 'https:' ? url.toString() : null;
  } catch {
    return null;
  }
}

// Every <meta> as [name, content], whichever order its attributes come in.
function metas(html) {
  const out = [];
  for (const m of html.matchAll(/<meta\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi)) {
    const a = {};
    for (const p of m[1].matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) a[p[1].toLowerCase()] = p[2] ?? p[3];
    const key = (a.property ?? a.name)?.toLowerCase();
    if (key && a.content) out.push([key, decodeAttr(a.content)]);
  }
  return out;
}

const metaOf = (list, ...names) => names.map((n) => list.find(([k]) => k === n)?.[1]).find(Boolean) ?? null;

// The picture a feed item carries, from its raw XML block.
export function feedImage(block, base) {
  const xml = block.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  const attr = (tagRe, name) => xml.match(tagRe)?.[0].match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1];
  const direct =
    attr(/<media:content\b[^>]*(?:medium\s*=\s*["']image["']|type\s*=\s*["']image\/)[^>]*>/i, 'url') ??
    attr(/<media:thumbnail\b[^>]*>/i, 'url') ??
    attr(/<enclosure\b[^>]*type\s*=\s*["']image\/[^>]*>/i, 'url');
  if (direct) return absolute(direct, base);
  // Feed HTML is either inside CDATA or entity-escaped. Unescape it once to find <img>.
  const html = xml.includes('&lt;img') ? xml.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"') : xml;
  for (const m of html.matchAll(/<img\b[^>]*?\bsrc\s*=\s*["']([^"']+)["']/gi)) {
    const u = absolute(m[1], base);
    if (u && !TRACKING.test(u)) return u;
  }
  return null;
}

async function get(url, accept) {
  return fetch(url, { signal: AbortSignal.timeout(15000), redirect: 'follow', headers: { 'user-agent': UA, accept } });
}

// null when the image is usable, otherwise the reason it is not.
export async function checkImage(url) {
  try {
    const res = await get(url, 'image/*');
    if (!res.ok) return `HTTP ${res.status}`;
    const type = res.headers.get('content-type') ?? '';
    if (!TYPES.test(type)) return `not a photo (${type || 'no type'})`;
    let size = Number(res.headers.get('content-length'));
    if (size) await res.body?.cancel();
    else size = (await res.arrayBuffer()).byteLength;
    if (size < MIN_BYTES) return 'too small, probably an icon';
    if (size > MAX_BYTES) return 'over 5 MB, too big for Telegram to fetch';
    return null;
  } catch (e) {
    return String(e.cause?.code ?? e.message ?? e);
  }
}

async function pageMetas(url) {
  try {
    const res = await get(url, 'text/html');
    return res.ok ? metas((await res.text()).slice(0, 400_000)) : [];
  } catch {
    return [];
  }
}

// What a picture is called, ignoring the query (a cache-buster or a resize hint).
const same = (a, b) => a && b && new URL(a).origin + new URL(a).pathname === new URL(b).origin + new URL(b).pathname;

const homeImages = new Map();
// The share picture the site's own homepage uses. A story that shows the same one has none of its own.
async function homeImage(url) {
  const origin = new URL(url).origin;
  if (!homeImages.has(origin)) {
    homeImages.set(
      origin,
      pageMetas(`${origin}/`).then((m) => absolute(metaOf(m, 'og:image', 'twitter:image') ?? '', origin)),
    );
  }
  return homeImages.get(origin);
}

// { status, imageUrl?, alt?, why? }. `feed` is the picture from the feed item, if any.
export async function findImage({ url, title }, feed) {
  const m = await pageMetas(url);
  const page = absolute(metaOf(m, 'og:image', 'twitter:image') ?? '', url);
  const tried = [];
  let generic = false;

  if (page) {
    if (same(page, await homeImage(url))) {
      generic = true;
      tried.push("the site's default share image");
    } else {
      const bad = await checkImage(page);
      if (!bad) return { status: 'ok', imageUrl: page, alt: pickAlt(metaOf(m, 'og:image:alt', 'twitter:image:alt'), title) };
      tried.push(`page image: ${bad}`);
    }
  } else {
    tried.push('no share image on the page');
  }

  if (feed) {
    const bad = await checkImage(feed);
    if (!bad) return { status: 'ok', imageUrl: feed, alt: pickAlt(null, title) };
    tried.push(`feed image: ${bad}`);
  }
  return { status: generic ? 'generic' : 'none', why: tried.join('; ') };
}

// The page's own alt text when it describes the picture, else a plain label that names the
// story. The owner can write a real description in Keystatic.
function pickAlt(alt, title) {
  const a = alt?.trim();
  return a && !EMPTY_ALT.test(a) ? a : `Thumbnail for “${title}”`;
}
