// A thin Telegram Bot API call. Used by the Node scripts and by the Worker route, so it
// only needs fetch. The token is part of the URL Telegram wants, so it is never put in an
// error message or a log line.
//
// TELEGRAM_DRY_RUN=1 prints the call instead of making it (Node scripts only).

export async function tg(method, body, { token, fetchFn = fetch } = {}) {
  if (typeof process !== 'undefined' && process.env?.TELEGRAM_DRY_RUN === '1') {
    console.log(`[telegram dry run] ${method} ${JSON.stringify(body, null, 2)}`);
    return { ok: true, result: {} };
  }
  if (!token) throw new Error(`Telegram ${method}: no bot token`);
  const res = await fetchFn(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.ok) throw new Error(`Telegram ${method}: ${json.description ?? `HTTP ${res.status}`}`);
  return json;
}
