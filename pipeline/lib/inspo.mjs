// Shared by the inspo scripts: crawl (inspos.mjs), draft (draft-inspos.mjs), send
// (send-inspos.mjs) and publish (publish.mjs). Plain code, no dependencies.

// The fields that travel inside the daily issue. Nothing else from a candidate is kept.
export const INSPO_KEEP = ['title', 'url', 'source', 'credit', 'type', 'date', 'imageUrl', 'videoUrls', 'alt'];

// "x.com/<handle>/status/<id>" for any spelling of a post's link, or the URL itself.
// Lets "twitter.com" and "x.com" links, and a trailing slash or query, match each other.
export function postKey(u) {
  try {
    const url = new URL(u);
    const host = url.hostname.toLowerCase().replace(/^(www|mobile)\./, '').replace(/^twitter\.com$/, 'x.com');
    const m = /^\/([^/]+)\/status\/(\d+)/.exec(url.pathname);
    return m ? `https://${host}/${m[1].toLowerCase()}/status/${m[2]}` : `${url.origin.toLowerCase()}${url.pathname.replace(/\/+$/, '')}`;
  } catch {
    return String(u);
  }
}

// Posters decorate their display names with emoji and symbols. CLAUDE.md: credit them by
// their plain name, because emoji as decoration is not allowed on the site.
export function cleanCredit(name) {
  const clean = String(name)
    .replace(/[\p{Extended_Pictographic}\p{Emoji_Modifier}\uFE0F\u200D\u20E3]/gu, '')
    .replace(/[\p{So}\p{Sk}\p{Cs}\p{Co}]/gu, '')
    // Kaomoji such as "ʕ•ᴥ•ʔ" are made of letters. Keep a word only if it has a real letter
    // or digit of a script a name is written in.
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u06FF\u3040-\u9FFF\uAC00-\uD7AF]/.test(w))
    .join(' ')
    .trim();
  return clean || String(name).trim();
}

// The largest MP4 of one fxtwitter video, up to 1280px wide, with `?tag=` kept (the video
// CDN wants it). Null when the post gives no MP4 at all.
export function pickMp4(video) {
  const found = [];
  for (const f of video?.formats ?? []) if (f?.container === 'mp4' && f.url) found.push(f.url);
  if (video?.url && /\.mp4(\?|$)/.test(video.url) && !found.includes(video.url)) found.push(video.url);
  const sized = found
    .map((url) => ({ url, w: Number(/\/(\d+)x\d+\//.exec(url)?.[1] ?? 0) }))
    .filter((v) => v.w > 0 && v.w <= 1280)
    .sort((a, b) => b.w - a.w);
  return sized[0]?.url ?? found[0] ?? null;
}

// ---------- entries ----------

const IMAGE_HOSTS = new Set(['pbs.twimg.com']);
const VIDEO_HOSTS = new Set(['video.twimg.com']);
const TYPES_NOTE = 'one of the existing types';

// Throws when a record is not safe to turn into an entry. The record comes from a GitHub
// issue, so check it rather than trust it.
export function assertInspo(c) {
  for (const k of ['title', 'url', 'source', 'credit', 'type', 'date', 'imageUrl', 'alt']) {
    if (typeof c?.[k] !== 'string' || !c[k].trim()) throw new Error(`inspo is missing ${k}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(c.date)) throw new Error(`inspo date is not YYYY-MM-DD: ${c.date}`);
  const post = new URL(c.url);
  if (post.protocol !== 'https:' || !['x.com', 'twitter.com'].includes(post.hostname.replace(/^www\./, ''))) {
    throw new Error(`inspo url is not an X post: ${c.url}`);
  }
  const img = new URL(c.imageUrl);
  if (img.protocol !== 'https:' || !IMAGE_HOSTS.has(img.hostname)) throw new Error(`inspo imageUrl is not on pbs.twimg.com: ${c.imageUrl}`);
  if (c.videoUrls != null && !Array.isArray(c.videoUrls)) throw new Error('inspo videoUrls is not a list');
  for (const v of c.videoUrls ?? []) {
    const u = new URL(v);
    if (u.protocol !== 'https:' || !VIDEO_HOSTS.has(u.hostname)) throw new Error(`inspo video is not on video.twimg.com: ${v}`);
  }
}

// "ana-howard-pro-skater": the poster, then as many title words as fit in 48 characters.
export function inspoFileBase(c, slugify) {
  const who = slugify(c.credit).split('-').filter(Boolean).slice(0, 3).join('-');
  let slug = '';
  for (const w of slugify(c.title).split('-').filter(Boolean)) {
    const next = slug ? `${slug}-${w}` : w;
    if (next.length > 40) break;
    slug = next;
  }
  return [who, slug].filter(Boolean).join('-') || 'inspo';
}

// An inspo entry in the shape src/content.config.ts and keystatic.config.ts expect. No body,
// so it links to the poster's post and has no recipe sheet. Strings go through JSON.stringify,
// which is a valid YAML double-quoted string.
export function inspoEntryText(c) {
  const q = JSON.stringify;
  return [
    '---',
    `title: ${q(c.title)}`,
    `url: ${q(c.url)}`,
    `source: ${q(c.source)}`,
    `credit: ${q(c.credit)}`,
    `type: ${q(c.type)}`,
    `date: ${c.date}`,
    `imageUrl: ${q(c.imageUrl)}`,
    ...(c.videoUrls?.length ? ['videoUrls:', ...c.videoUrls.map((v) => `  - ${q(v)}`)] : []),
    `alt: ${q(c.alt)}`,
    'sample: false',
    '---',
    '',
  ].join('\n');
}

export { TYPES_NOTE };
