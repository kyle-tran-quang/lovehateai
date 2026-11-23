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

// One entry per story: number, linked title, then source, author and date. A story with no
// usable image says so, so a missing thumbnail is never silent.
const caption = (c, i) =>
  `${i + 1}. <a href="${esc(c.url).replace(/"/g, '&quot;')}">${esc(shorten(c.title, 140))}</a>\n${esc(c.source)}, ${esc(c.author)}, ${short(c.date)}${c.imageUrl ? '' : '\nNo image found'}`;

// The pictures go first, as albums of up to ten (Telegram's limit), each captioned with its
// number. Telegram fetches the images itself, so a picture it can't load must not stop the
// run: fall back to the plain list, which still carries the tick buttons.
const withImage = candidates.map((c, i) => ({ c, i })).filter(({ c }) => c.imageUrl);
let album = withImage.length > 0;
if (album) {
  try {
    for (let n = 0; n < withImage.length; n += 10) {
      const media = withImage.slice(n, n + 10).map(({ c, i }) => ({ type: 'photo', media: c.imageUrl, caption: caption(c, i), parse_mode: 'HTML' }));
      // A single photo can't be sent as a group.
      if (media.length === 1) await send('sendPhoto', { chat_id, photo: media[0].media, caption: media[0].caption, parse_mode: 'HTML' });
      else await send('sendMediaGroup', { chat_id, media });
    }
  } catch (e) {
    album = false;
    console.error(`The album failed (${e.message}). Sending a text list instead.`);
  }
}

// What the album did not show: every story if there was no album, else only the ones with no image.
const rest = candidates.map((c, i) => ({ c, i })).filter(({ c }) => !album || !c.imageUrl);
const lines = rest.map(({ c, i }) => caption(c, i) + (album || !c.imageUrl ? '' : `\n<a href="${esc(c.imageUrl).replace(/"/g, '&quot;')}">image</a>`));
const footer = 'Tick what you want, then Publish.';
const text = lines.length ? `${lines.join('\n\n')}\n\n${footer}` : footer;
if (text.length > 4000) throw new Error(`the list is ${text.length} characters, over Telegram's limit. Lower --max.`);

await send('sendMessage', {
  chat_id,
  text,
  parse_mode: 'HTML',
  link_preview_options: { is_disabled: true },
  reply_markup: buildKeyboard(issue, candidates.length),
});
console.log(`Sent ${candidates.length} stories${DRY ? ' (dry run)' : `, issue #${issue}`}.`);
