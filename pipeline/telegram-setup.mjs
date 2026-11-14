#!/usr/bin/env node
// One-time Telegram setup, run on your own machine. Nothing here is stored: it prints.
//
//   TELEGRAM_BOT_TOKEN=... node pipeline/telegram-setup.mjs chat
//       Prints your chat id. Send your bot any message first (press Start).
//
//   TELEGRAM_BOT_TOKEN=... TELEGRAM_WEBHOOK_SECRET=... node pipeline/telegram-setup.mjs webhook https://YOUR-SITE/api/telegram
//       Points the bot's button taps at the Worker. Run it after the Worker is deployed.
//
//   TELEGRAM_BOT_TOKEN=... node pipeline/telegram-setup.mjs status
//       Shows what Telegram has registered, and any last error it saw.
//
// `chat` stops working once a webhook is set, because Telegram then delivers updates to the
// webhook and not to getUpdates. Run `chat` first.

import { tg } from './lib/telegram.mjs';

const [cmd, url] = process.argv.slice(2);
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error('TELEGRAM_BOT_TOKEN is not set.');
  process.exit(1);
}

if (cmd === 'chat') {
  const { result } = await tg('getUpdates', { limit: 20 }, { token });
  const ids = new Map();
  for (const u of result) {
    const from = u.message?.from ?? u.callback_query?.from;
    if (from) ids.set(from.id, [from.first_name, from.username && `@${from.username}`].filter(Boolean).join(' '));
  }
  if (!ids.size) {
    console.error('No messages yet. Open your bot in Telegram, press Start, then run this again.');
    process.exit(1);
  }
  for (const [id, who] of ids) console.log(`${id}  ${who}`);
} else if (cmd === 'webhook') {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!url || !/^https:\/\//.test(url)) throw new Error('Give the https URL of /api/telegram.');
  if (!secret || !/^[A-Za-z0-9_-]{16,256}$/.test(secret)) throw new Error('TELEGRAM_WEBHOOK_SECRET must be 16-256 characters from A-Z a-z 0-9 _ -');
  await tg('setWebhook', { url, secret_token: secret, allowed_updates: ['callback_query'], drop_pending_updates: true }, { token });
  console.log(`Webhook set to ${url}`);
} else if (cmd === 'status') {
  const { result } = await tg('getWebhookInfo', {}, { token });
  console.log(JSON.stringify({ url: result.url, pending: result.pending_update_count, last_error: result.last_error_message ?? null, last_error_date: result.last_error_date ? new Date(result.last_error_date * 1000).toISOString() : null }, null, 2));
} else {
  console.error('usage: node pipeline/telegram-setup.mjs chat | webhook URL | status');
  process.exit(1);
}
