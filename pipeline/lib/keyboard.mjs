// The tick list, as Telegram inline keyboards. No imports, so the Worker can use it too.
//
// There is no database. Which stories are ticked is written on the buttons: a ticked
// button's label starts with "✓ ". Tapping one makes the Worker read the keyboard off the
// message, flip that button and write it back. The Publish button reads the ticks the same way.
//
// callback_data (Telegram allows 64 bytes):
//   t:<issue>:<index>   toggle story <index> (0-based) of candidates issue <issue>
//   p:<issue>           publish whatever is ticked

export const TICK = '✓ ';
const PER_ROW = 4;

const publishButton = (issue, n) => ({ text: n ? `Publish ${n}` : 'Publish', callback_data: `p:${issue}` });

export function buildKeyboard(issue, count, ticked = new Set()) {
  const rows = [];
  for (let i = 0; i < count; i += PER_ROW) {
    const row = [];
    for (let n = i; n < Math.min(i + PER_ROW, count); n++) {
      row.push({ text: `${ticked.has(n) ? TICK : ''}${n + 1}`, callback_data: `t:${issue}:${n}` });
    }
    rows.push(row);
  }
  rows.push([publishButton(issue, ticked.size)]);
  return { inline_keyboard: rows };
}

export function parseCallback(data) {
  const t = /^t:(\d+):(\d+)$/.exec(data ?? '');
  if (t) return { kind: 't', issue: Number(t[1]), index: Number(t[2]) };
  const p = /^p:(\d+)$/.exec(data ?? '');
  if (p) return { kind: 'p', issue: Number(p[1]) };
  return null;
}

// 0-based indexes of the ticked stories, in order.
export function tickedFrom(markup) {
  const out = [];
  for (const row of markup?.inline_keyboard ?? []) {
    for (const b of row) {
      const cb = parseCallback(b.callback_data);
      if (cb?.kind === 't' && b.text.startsWith(TICK)) out.push(cb.index);
    }
  }
  return out.sort((a, b) => a - b);
}

// A copy of the keyboard with one button flipped and the Publish count updated.
export function toggle(markup, data) {
  const target = parseCallback(data);
  const rows = markup.inline_keyboard.map((row) =>
    row.map((b) => {
      if (b.callback_data !== data) return { ...b };
      const on = b.text.startsWith(TICK);
      return { ...b, text: on ? b.text.slice(TICK.length) : `${TICK}${b.text}` };
    }),
  );
  const next = { inline_keyboard: rows };
  const n = tickedFrom(next).length;
  return {
    inline_keyboard: rows.map((row) => row.map((b) => (parseCallback(b.callback_data)?.kind === 'p' ? publishButton(target.issue, n) : b))),
  };
}
