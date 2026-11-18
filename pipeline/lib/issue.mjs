// The daily list is stored as a GitHub issue: readable on a phone, and the data
// Publish needs sits inside it as JSON. The issue number is what the buttons carry.

// Only these fields travel. Scores, excerpts and feed text stay out.
export const KEEP = ['id', 'sourceId', 'title', 'url', 'author', 'source', 'date'];
export const slim = (c) => Object.fromEntries(KEEP.filter((k) => c[k] != null).map((k) => [k, c[k]]));

// < > & and ` become \u escapes: still valid JSON, and nothing in a title can close the fence
// or open a tag.
const safeJson = (v) => JSON.stringify(v, null, 1).replace(/[<>&`]/g, (ch) => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'));

// The inspo list: the same issue, with the fields an inspo entry needs. The alt text is part
// of the data block, so what Publish writes is what was shown in Telegram.
export function inspoIssueBody(candidates, keep) {
  const list = candidates.map((c, i) => `${i + 1}. ${c.title} (${c.type})\n   ${c.credit}, ${c.date}\n   ${c.url}\n   Alt: ${c.alt}`);
  return [
    'The daily inspos. Titles, types and alt text are drafts written by Claude from each image. The buttons in Telegram publish from this issue. Closing it by hand does nothing else.',
    '',
    ...list,
    '',
    '<details><summary>Data used by the publish step. Do not edit.</summary>',
    '',
    '```json',
    safeJson(candidates.map((c) => Object.fromEntries(keep.filter((k) => c[k] != null).map((k) => [k, c[k]])))),
    '```',
    '',
    '</details>',
    '',
  ].join('\n');
}

export function issueBody(candidates) {
  const list = candidates.map((c, i) => `${i + 1}. ${c.title}\n   ${c.source}, ${c.author}, ${c.date}\n   ${c.url}`);
  return [
    'The daily list. The buttons in Telegram publish from this issue. Closing it by hand does nothing else.',
    '',
    ...list,
    '',
    '<details><summary>Data used by the publish step. Do not edit.</summary>',
    '',
    '```json',
    safeJson(candidates.map(slim)),
    '```',
    '',
    '</details>',
    '',
  ].join('\n');
}

export function parseIssueBody(body) {
  const m = /```json\n([\s\S]*?)\n```/.exec(body ?? '');
  if (!m) throw new Error('the issue has no data block');
  const list = JSON.parse(m[1]);
  if (!Array.isArray(list)) throw new Error('the issue data is not a list');
  return list;
}

// Every story URL in a candidates issue body, for the "already offered" list.
export const urlsIn = (body) => {
  try {
    return parseIssueBody(body).map((c) => c.url).filter(Boolean);
  } catch {
    return [];
  }
};
