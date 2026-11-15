---
title: "A masked figure on a red ground"
url: "https://x.com/baladasathar/status/2119106638997278781"
source: "X"
credit: "SATHAR"
type: "Illustration"
date: 2026-11-07
imageUrl: "https://pbs.twimg.com/tweet_video_thumb/HWiTrvrbIAASX7b.jpg"
videoUrls:
  - "https://video.twimg.com/tweet_video/HWiTrvrbIAASX7b.mp4"
alt: "A black-and-white ink figure with white hair and half a mask holds a red phone against a flat red background scattered with black dots."
sample: false
---

### What happens
A mostly static 1-bit illustration: a figure with white hair and half a black mask holds a red phone against flat red. A ring of black dots arcs across the top of the frame.

- Whole clip, 0.0-1.24s: the face, mask, hands, phone and red ground do not change.
- The arc of black dots shifts a few pixels in a short repeating wobble. Over about 5 frames (0.2s) the dots slide slightly right and down, then return. The dots at the far right, which are dithered, change texture as they move.
- The white pinpoint sparkles scattered across the black cloak appear and disappear at different spots from frame to frame, a few at a time.
- Thin white contour lines on the cloak and sleeves redraw slightly on alternate frames (frame differences show them changing every second frame, so about 12 changes a second).

### Timing and feel
Choppy on purpose: stepped changes on twos, no easing. About 1.2s long and it loops. The movement is very small and is read as shimmer more than motion. Whether the loop is seamless I could not tell with certainty; the first and last frames look near identical.

### What it is made of
Pure red ground (about #ff0000), black, off-white. Everything is high-contrast dither or stipple, no greys except dithering. Cloak texture is white speckle clusters. Dots on the arc are black balls with a small highlight, the right-hand ones faded by dither. Mask is black with a halftone gradient.

### To recreate the look
Inferred from the footage, untested.
- Make a hard 1-bit illustration on a flat saturated ground.
- Hold the main figure as a still frame.
- Animate only the margins of the image: jitter the ring of dots by a few pixels, move sparkles randomly, and nudge contour lines.
- Step the animation on twos, around 12 frames a second, and loop it at about a second.

### Skills to try

- [svg-animation ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/svg-animation): contour lines that redraw
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): stepping the motion on twos
