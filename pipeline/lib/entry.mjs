// Shared by fetch.mjs, send.mjs and publish.mjs. Node only (it reads files).
// Turns a candidate into a news entry and answers "is this already on the site".

import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

// The link to store: tracking parameters and the fragment removed, the host kept as the
// publisher spells it.
export function canonicalUrl(u, { forCompare = false } = {}) {
  try {
    const url = new URL(u);
    url.hash = '';
    url.hostname = url.hostname.toLowerCase();
    // Comparing only: "www.x.com" and "x.com" are the same story. Never stored this way.
    if (forCompare) url.hostname = url.hostname.replace(/^www\./, '');
    for (const k of [...url.searchParams.keys()]) {
      const rssSource = k === 'source' && /^rss/i.test(url.searchParams.get(k) ?? '');
      if (/^(utm_|mc_)/i.test(k) || ['fbclid', 'gclid', 'ref', 'ref_src'].includes(k) || rssSource) url.searchParams.delete(k);
    }
    if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/+$/, '');
    return url.toString();
  } catch {
    return null;
  }
}

// Every external story URL already in a content folder, in canonical form.
export async function siteUrls(dir) {
  const urls = new Set();
  let files = [];
  try {
    files = await readdir(dir);
  } catch {
    return urls;
  }
  for (const f of files) {
    if (!f.endsWith('.md')) continue;
    const m = (await readFile(join(dir, f), 'utf8')).match(/^url:\s*["']?(\S+?)["']?\s*$/m);
    const c = m && m[1].startsWith('http') ? canonicalUrl(m[1], { forCompare: true }) : null;
    if (c) urls.add(c);
  }
  return urls;
}

export const slugify = (s) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// "smashing-should-you-actually-add-ai-to": the source, then as many title words as fit in 48 characters.
export function fileBase(c) {
  let slug = '';
  for (const w of slugify(c.title).split('-').filter(Boolean)) {
    const next = slug ? `${slug}-${w}` : w;
    if (next.length > 48) break;
    slug = next;
  }
  return `${c.sourceId || slugify(c.source)}-${slug || 'story'}`;
}

// Throws when a record is not safe to turn into an entry. The record comes from a GitHub
// issue, so check it rather than trust it.
export function assertCandidate(c) {
  for (const k of ['title', 'url', 'source', 'author', 'date']) {
    if (typeof c?.[k] !== 'string' || !c[k].trim()) throw new Error(`candidate is missing ${k}`);
  }
  if (!/^https?:$/.test(new URL(c.url).protocol)) throw new Error(`candidate url is not http(s): ${c.url}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(c.date)) throw new Error(`candidate date is not YYYY-MM-DD: ${c.date}`);
}

// A news entry in the shape src/content.config.ts and keystatic.config.ts expect.
// Link tier only: no excerpt, no image, no topic. The owner can add a topic in Keystatic.
// Strings go through JSON.stringify, which is a valid YAML double-quoted string.
export function entryText(c) {
  const q = JSON.stringify;
  return [
    '---',
    `title: ${q(c.title)}`,
    `url: ${q(c.url)}`,
    `source: ${q(c.source)}`,
    `author: ${q(c.author)}`,
    `date: ${c.date}`,
    'sample: false',
    '---',
    '',
  ].join('\n');
}
