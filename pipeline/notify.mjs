#!/usr/bin/env node
// Sends one plain message to the owner on Telegram. Used by the workflows to say a run
// failed, or that a publish is live.
//
//   node pipeline/notify.mjs "text" [--silent]

import { tg } from './lib/telegram.mjs';

const text = process.argv[2];
if (!text) {
  console.error('usage: node pipeline/notify.mjs "text" [--silent]');
  process.exit(1);
}
await tg(
  'sendMessage',
  {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text,
    link_preview_options: { is_disabled: true },
    ...(process.argv.includes('--silent') ? { disable_notification: true } : {}),
  },
  { token: process.env.TELEGRAM_BOT_TOKEN },
);
