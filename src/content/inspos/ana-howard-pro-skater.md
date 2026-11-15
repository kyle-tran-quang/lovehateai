---
title: "A pixel-art skateboarding game"
url: "https://x.com/AnaArsonist/status/2104900327812010370"
source: "X"
credit: "ana howard"
type: "Web"
date: 2026-09-29
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2104900029374738432/img/n8fI0No3GYo-CuSd.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2104900029374738432/vid/avc1/1228x720/lUdQxMnjdmXX9YoT.mp4?tag=29"
alt: "A pixel-art street at dusk with a small white bird on a skateboard, a purple oval sign reading “Ronnie's Pro Skater” above it and the line “Press space to skate”."
sample: false
---

### What happens
The poster's own words: "hand-drawn pixel art, a labour of love", plus "post your high scores for a chance to get a ghost pass". So this is a playable browser game, and the clip is someone playing it.

0.0-0.75s a title card sits over a dusk scene: an oval purple badge reading "Ronnie's Pro Skater", then "Press space to skate" and a smaller muted line, "Today's course · 29 Sept". A small white ghost in a purple cap stands on a skateboard on a promenade.
About 1.0s the title is gone and the scene starts scrolling right to left. The ghost stays at the same spot, roughly 39% across the frame, and the world moves past it.
1-28s the ghost rolls and jumps over what comes at it: red and white barriers, orange traffic cones, grey rubble. In the air it tilts and the board turns under it. Landing is back on the same line, with no visible squash.
After a clean jump a small white "+10" appears just above the ghost and fades out within about a second. Later pop-ups read "x2 +20" and "x3 +30", so the score is a combo. They also sit above the ghost.
Other things come across: purple coin discs that look like they turn (some frames show them edge-on, thin) from about 3s, a yellow bird flying through the middle of the frame (around 13-14s and again later), and from about 12s a white arch of cloud puffs with two dots, high in the sky.
In the last second or so (about 28s on) the whole picture dims toward a dark purple, which looks like a fade-out at the end of the clip.

### Timing and feel
A jump takes roughly 0.5 to 0.8s from take-off to landing, with a rounded arc that looks like simple gravity (fast up, hang, fast down). Pop-up scores last about 0.7s. The scroll is steady, with no visible speed-up. No loop. Triggered by input we can't see: the keyboard isn't shown, so we only see the ghost react.

### What it is made of
Pixel art at a fixed pixel size. Sky of flat periwinkle (about #7684e6, approximate) a little lighter toward the horizon, a pale sun with a faint halo, small pixel clouds, a far hill silhouette, a skyline in slightly darker purple, water with the skyline reflected in it, a railing with green bushes, a paved path in lilac, a dark purple road. The layers scroll at different speeds (sky and skyline slower, path faster), which gives depth. The sun and clouds drift a little between frames. UI type is a plain, thin sans in white at small size, quite faint. The title badge is drawn in the same pixel style, with banded purples and a white highlight on the right.

### To recreate the look
Inferred from the footage, untested.
1. Draw a single-lane side view at a fixed pixel size: sky, far hills, skyline, water, railing, path, road, in a narrow range of blue and purple.
2. Scroll the layers at different speeds so the far ones lag.
3. Keep the player at a fixed x and move only the world.
4. Make the jump a clean arc of about 0.5 to 0.8s and let the board rotate in the air.
5. Give each success a tiny number that rises and fades over under a second, and a combo label that grows from x2 to x3.
6. Keep the extra elements sparse: a coin now and then, one bird, an odd sky shape.
7. Start with a title card that disappears on the first input, and fade to dark at the end.

Unclear from the frames: whether the clip is captured live or edited, how the score is kept (no counter is visible), and what the coins do when the ghost reaches them.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the combo pop-ups and score feedback
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the jump arcs and their timing
