#!/usr/bin/env node
// Sends today's candidates: opens the daily issue, then posts the list to Telegram with
// a number button for each story and a Publish button.
//
//   node pipeline/send.mjs [--in FILE] [--dry]
//
// --dry opens no issue and sends nothing. It prints what would go out.
// Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID, and GITHUB_TOKEN and GITHUB_REPOSITORY unless --dry.

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildKeyboard } from './lib/keyboard.mjs';
import { issueBody } from './lib/issue.mjs';
import { tg } from './lib/telegram.mjs';
import { gh, repo } from './lib/github.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const day = new Date().toISOString().slice(0, 10);
const inIdx = args.indexOf('--in');
const file = inIdx === -1 ? join(HERE, 'out', `candidates-${day}.json`) : args[inIdx + 1];

const token = process.env.TELEGRAM_BOT_TOKEN;
const chat_id = process.env.TELEGRAM_CHAT_ID;
if (!DRY && (!token || !chat_id)) throw new Error('TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required');
const send = (method, body) => (DRY ? (console.log(`[dry] ${method}`, JSON.stringify(body, null, 1)), { result: {} }) : tg(method, body, { token }));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const shorten = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const short = (iso) => `${Number(iso.slice(8, 10))} ${MONTHS[Number(iso.slice(5, 7)) - 1]}`;

const { candidates = [] } = JSON.parse(await readFile(file, 'utf8'));

if (!candidates.length) {
  // A quiet day and a broken run must not look the same.
  await send('sendMessage', { chat_id, text: 'Nothing new today. The run worked.', disable_notification: true });
  console.log('No candidates. Sent the quiet-day note.');
  process.exit(0);
}

let issue = 0;
if (!DRY) {
  const made = await gh(`/repos/${repo()}/issues`, {
    method: 'POST',
    body: { title: `Candidates ${day}`, body: issueBody(candidates) },
  });
  issue = made.number;
} else {
  console.log(issueBody(candidates));
}

const lines = candidates.map(
  (c, i) => `${i + 1}. <a href="${esc(c.url).replace(/"/g, '&quot;')}">${esc(shorten(c.title, 140))}</a>\n${esc(c.source)}, ${esc(c.author)}, ${short(c.date)}`,
);
const text = `${lines.join('\n\n')}\n\nTick what you want, then Publish.`;
if (text.length > 4000) throw new Error(`the list is ${text.length} characters, over Telegram's limit. Lower --max.`);

await send('sendMessage', {
  chat_id,
  text,
  parse_mode: 'HTML',
  link_preview_options: { is_disabled: true },
  reply_markup: buildKeyboard(issue, candidates.length),
});
console.log(`Sent ${candidates.length} stories${DRY ? ' (dry run)' : `, issue #${issue}`}.`);
