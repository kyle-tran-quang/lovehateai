---
title: "A four-pointed logo mark made of grain"
url: "https://x.com/VadimCarazan/status/2120806555579044315"
source: "X"
credit: "Vadim Carazan"
type: "Brand"
date: 2026-11-12
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2120627898847531010/img/NXvOPnQhLCcnUum5.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2120627898847531010/vid/avc1/960x720/C2ebNKLxUx79XEXH.mp4?tag=29"
alt: "A rounded four-pointed mark in white stippled grain on black."
sample: false
---

### What happens
A white four-lobed mark on black dissolves into grain, turns into a rotating form, and reforms.

- 0.0-0.4s: the solid white mark holds. It has a square body with four rounded notches and four teardrop holes.
- 0.5s: grain starts at the edges, the white edge goes slightly speckled.
- 0.75s: the mark has become a soft cloud of white grain, smaller and blurrier, with a dark centre.
- 1.0-2.0s: the grain cloud opens up into what reads as two tall rounded slabs, set at an angle, like panels swinging apart in perspective. They grow larger and turn.
- 2.25s: the slabs collapse back to a flat square ring in grain, face on.
- 2.5-3.75s: the notches and a four-pointed star-shaped hole form in the middle. The mark is back to its shape, still grainy and slightly swollen at the edges.
- 4.0-4.5s: grain tightens and the edge sharpens.
- 4.5-5.65s: crisp solid white mark again, matching the first frame.

### Timing and feel
About 4s from solid to solid. Dissolve is quick (about 0.5s), the rotating stage lasts about 1.5s with steady easing, the rebuild is slower (about 1.5s) and settles with ease-out. Loops cleanly. No cursor or trigger shown.

### What it is made of
Pure black ground, white only. The mark is drawn as stippled grain with a fuzzy outer edge, density higher at edges and lower in the faces so the faces look semi-transparent. The tilted slabs look 3D, but I can't tell from the frames whether it is real 3D or a 2D warp.

### To recreate the look
Inferred from the footage, untested.
- Fill the mark with thousands of tiny white points and let the point density, not opacity, make the shading.
- Animate the points from the flat mark into a rotated arrangement of the same shapes, rotate, then return.
- Keep the stage short, around 1.5s, and finish on the crisp vector mark so the animation ends where the logo starts.

### Skills to try

- [particle-system ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/particle-system): a solid mark dissolving to grain
- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): the grain and the rotation as a shader effect
