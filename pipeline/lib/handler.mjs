// What happens when a button on the daily list is tapped. Runs in the Worker
// (src/pages/api/telegram.ts), and in Node for testing. No Astro, no Node-only imports.
//
// A tap on a number flips its tick. A tap on Publish hands the ticked numbers to the
// publish workflow and removes the buttons, so the list can't be published twice.
// Nothing is stored: the ticks are the buttons themselves (see keyboard.mjs).

import { parseCallback, tickedFrom, toggle } from './keyboard.mjs';
import { tg } from './telegram.mjs';

// deps: { token, chatId, dispatch({ issue, pick }), fetchFn?, log? }
// Returns a short word for what it did, for logs and tests.
export async function handleUpdate(update, deps) {
  const q = update?.callback_query;
  if (!q) return 'ignored';

  const call = (method, body) => tg(method, body, { token: deps.token, fetchFn: deps.fetchFn });
  const log = deps.log ?? (() => {});

  // Only the owner. Anyone else's tap gets no answer at all.
  if (String(q.from?.id) !== String(deps.chatId)) return 'not the owner';

  let answer = {};
  let outcome = 'done';
  try {
    const cb = parseCallback(q.data);
    const m = q.message;
    // An inaccessible message has date 0 and no keyboard. Telegram does this to old messages.
    if (!cb || !m || !m.reply_markup || m.date === 0) {
      answer = { text: 'This list has expired. A new one comes tomorrow.', show_alert: true };
      outcome = 'expired';
    } else if (cb.kind === 't') {
      await call('editMessageReplyMarkup', {
        chat_id: m.chat.id,
        message_id: m.message_id,
        reply_markup: toggle(m.reply_markup, q.data),
      });
      outcome = 'toggled';
    } else {
      const picked = tickedFrom(m.reply_markup);
      if (!picked.length) {
        answer = { text: 'Tick at least one story first.', show_alert: true };
        outcome = 'nothing ticked';
      } else {
        try {
          // 1-based, the way the numbers read on screen.
          await deps.dispatch({ issue: cb.issue, pick: picked.map((i) => i + 1).join(',') });
        } catch (e) {
          log(`dispatch failed: ${e.message}`);
          answer = { text: 'Could not start the publish. Try again in a minute.', show_alert: true };
          return 'dispatch failed';
        }
        await call('editMessageReplyMarkup', { chat_id: m.chat.id, message_id: m.message_id, reply_markup: { inline_keyboard: [] } });
        answer = { text: `Publishing ${picked.length}. I'll message you when it's live.` };
        outcome = 'published';
      }
    }
  } catch (e) {
    log(`${e.message}`);
    outcome = 'error';
  } finally {
    // Telegram shows a spinner on the button until the tap is answered.
    try {
      await call('answerCallbackQuery', { callback_query_id: q.id, ...answer });
    } catch (e) {
      log(`answer failed: ${e.message}`);
    }
  }
  return outcome;
}
