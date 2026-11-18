#!/usr/bin/env node
// Sends today's drafted inspos: opens the daily "Inspos" issue, posts the pictures to Telegram
// as an album with numbered captions, then a message with a number button for each and a
// Publish button. The buttons are the same ones the news list uses (pipeline/lib/keyboard.mjs),
// and the Worker needs no change: Publish starts publish.yml, which reads the issue.
//
//   node pipeline/send-inspos.mjs [--in FILE] [--dry]
//
// --dry opens no issue and sends nothing. It prints what would go out.
// Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID, and GITHUB_TOKEN and GITHUB_REPOSITORY unless --dry.

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildKeyboard } from './lib/keyboard.mjs';
import { inspoIssueBody } from './lib/issue.mjs';
import { INSPO_KEEP, assertInspo } from './lib/inspo.mjs';
import { tg } from './lib/telegram.mjs';
import { gh, repo } from './lib/github.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const day = new Date().toISOString().slice(0, 10);
const inIdx = args.indexOf('--in');
const file = inIdx === -1 ? join(HERE, 'out', `inspos-drafted-${day}.json`) : args[inIdx + 1];

const token = process.env.TELEGRAM_BOT_TOKEN;
const chat_id = process.env.TELEGRAM_CHAT_ID;
if (!DRY && (!token || !chat_id)) throw new Error('TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required');
const send = (method, body) => (DRY ? (console.log(`[dry] ${method}`, JSON.stringify(body, null, 1)), { result: {} }) : tg(method, body, { token }));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const short = (iso) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]}`;

const { candidates = [] } = JSON.parse(await readFile(file, 'utf8'));
for (const c of candidates) assertInspo(c);

if (!candidates.length) {
  // A quiet day and a broken run must not look the same.
  await send('sendMessage', { chat_id, text: 'No new inspos today. The run worked.', disable_notification: true });
  console.log('No candidates. Sent the quiet-day note.');
  process.exit(0);
}

let issue = 0;
if (!DRY) {
  const made = await gh(`/repos/${repo()}/issues`, {
    method: 'POST',
    body: { title: `Inspos ${day}`, body: inspoIssueBody(candidates, INSPO_KEEP) },
  });
  issue = made.number;
} else {
  console.log(inspoIssueBody(candidates, INSPO_KEEP));
}

// One line per work: number, linked title, then type, credit and date. Telegram caps a
// caption at 1024 characters, which this stays far under.
const caption = (c, i) =>
  `${i + 1}. <a href="${attr(c.url)}">${esc(c.title)}</a>\n${esc(c.type)}, ${esc(c.credit)}, ${short(c.date)}${c.videoUrls?.length ? ', video' : ''}`;

// The album first. If Telegram can't fetch an image (it fetches them itself), fall back to a
// plain list so the tick buttons still have something to point at.
let album = true;
try {
  await send('sendMediaGroup', {
    chat_id,
    media: candidates.map((c, i) => ({ type: 'photo', media: c.imageUrl, caption: caption(c, i), parse_mode: 'HTML' })),
  });
} catch (e) {
  album = false;
  console.error(`The album failed (${e.message}). Sending a text list instead.`);
}

const lines = candidates.map((c, i) => `${caption(c, i)}${album ? '' : `\n<a href="${attr(c.imageUrl)}">image</a>`}`);
const text = album
  ? 'Titles and alt text are drafts by Claude. Tick what you want, then Publish.'
  : `${lines.join('\n\n')}\n\nTitles and alt text are drafts by Claude. Tick what you want, then Publish.`;
if (text.length > 4000) throw new Error(`the list is ${text.length} characters, over Telegram's limit. Lower --max.`);

await send('sendMessage', {
  chat_id,
  text,
  parse_mode: 'HTML',
  link_preview_options: { is_disabled: true },
  reply_markup: buildKeyboard(issue, candidates.length),
});
console.log(`Sent ${candidates.length} inspos${DRY ? ' (dry run)' : `, issue #${issue}`}.`);
