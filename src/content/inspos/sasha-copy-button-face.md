---
title: "A Copy button with a small face"
url: "https://x.com/aleksksaa/status/2112919472533344552"
source: "X"
credit: "Sasha"
type: "Interface"
date: 2026-10-21
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2112919303045386240/img/UxR_nEaKZjCAfEpq.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2112919303045386240/vid/avc1/1214x720/OT7vx7bmKlMhCbqJ.mp4?tag=29"
alt: "A white page with a pale rounded button reading “Copy”, with two dots and a curved mouth at its left, and a cursor just below."
sample: false
---

### What happens
The post's only text is "buttons with feelings". A white page with one small rounded button in the middle. A small face (two dot eyes, a small smile) sits at the left of the button label. Seven buttons play one after another, each about 3.5s, with the same pattern:

Copy to Copied, Send to Sent, Save to Saved, Like to Liked, Thanks to Thanks (changes colour only), Mute to Muted, Publish to Published.

Detail of the first one:
0.0s the white "Copy" button rests with a faint grey outline and a soft shadow.
0.2s a normal arrow cursor appears just below the button.
0.4s the cursor becomes a pointing hand and sits under the face. The outline gets a bit darker (hover).
0.8-1.0s the face starts to change. The eyes and mouth cross-fade and pink cheeks appear. The label is slightly blurred.
1.2s the button is filled pale lavender (about #e6ddf5, approximate). The label reads "Copied" in dark purple. The face is now one dot eye, one arched "winking" eye, an open pink mouth and pink cheeks.
1.2-2.3s it holds.
2.4-2.6s face and label blur and go back to the neutral face while the lavender is still there.
2.8s the button is white "Copy" again.
3.0s the whole button blurs and fades out. The next button fades in over about 0.3s, in the same spot.

The others follow the same beat with different colour and face:
- Send, grey (about #e4e4e4), to Sent in pale blue with a calm dot-eyed face. The hand cursor moves about, above and below the button, before the click.
- Save, grey, to Saved in pale green. Both eyes are closed arcs, the mouth a small smile, with pink cheeks.
- Like, white outline, to Liked in pink. The eyes become small hearts.
- Thanks, grey, to Thanks in peach. Dot eyes, a round mouth, red cheeks. The cursor sits above the button here.
- Mute, white outline, to Muted in lavender. Closed, sleepy eyes.
- Publish, dark (about #3a2f35) with white text, to Published in pale green.

### Timing and feel
Each state change takes about 0.2-0.4s and is a cross-fade with a little blur on the text and face, not a slide. Looks like ease-out. Whether there is overshoot or a squash on press can't be told from 5 frames per second. The button keeps the same width before and after, so nothing around it shifts. The cursor is a separate hand icon that only appears for the click. Nothing loops back to the start in the footage: it ends on Published. It looks scripted to play on its own, since the cursor jumps to different spots between buttons. I can't tell whether the eyes follow the cursor.

### What it is made of
A white ground (about #fcfcfc), one pill button at about 150px wide in the video, a sans label in the same style as the button text, and a small face drawn from dots and short curved lines, with soft pink ellipses for cheeks. The faces change shape, they don't just fade. The filled states are pastel (lavender, blue, green, pink, peach) with text in a dark tone of the same hue. There's a faint shadow under the filled buttons. The font is not identifiable.

### To recreate the look
Inferred from the footage, untested.
1. Make a pill button with a fixed width, a thin grey outline and a very soft shadow. Put a small face at its left, built from two dots and one curve.
2. On press, change four things together over about 0.3s: fill colour, label text, label colour, and the face.
3. Pair each action with its own expression: a wink for copied, closed arcs for saved, hearts for liked, sleepy eyes for muted. Add cheeks to every confirmed state.
4. Add a short blur on the text and face while they swap, so the change reads as one move.
5. Hold the confirmed state for about a second, reset to the plain button, then fade the whole button out and the next one in.
6. Keep each fill pale and the text dark, in the same hue.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the hover, click and face change
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): the fill colour changing with each button
