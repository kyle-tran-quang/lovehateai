---
title: "A Minesweeper window spilling dice"
url: "https://x.com/PERFECTL00P/status/2095897533218451784"
source: "X"
credit: "perfectloop"
type: "3D"
date: 2026-09-04
imageUrl: "https://pbs.twimg.com/tweet_video_thumb/HRYfpSubMAANoJh.jpg"
videoUrls:
  - "https://video.twimg.com/tweet_video/HRYfpSubMAANoJh.mp4"
alt: "A small Windows-style Minesweeper window floating on a teal ground, with hundreds of tiny white and red dice pouring out of its bottom and piling up below."
sample: false
---

### What happens
A saturated teal ground (about #0f8082, lighter toward the middle) with a small Windows-95-style Minesweeper window hanging in the upper middle, slightly tilted back, with a white halo around its edge. The post text is the word "SPILL", set in spaced-out letter characters.

0.0-2.0s the whole time is one continuous pour. Hundreds of small white and red cubes fall inside the window against a dark grey grid, over its bottom edge, and out into the open. They fall in a narrowing stream of tumbling dice, widen on the way down, and land in a heap on the ground at the bottom of the frame. The heap stays about the same size throughout, with a few dice rolling outward at the edge. The window itself stays put, apart from a faint shift. Inside, the counters read 069 on both sides and the face button is yellow.

### Timing and feel
The stream never stops and the heap doesn't grow, so it reads as a steady loop. The first and last frame look the same at this size, which fits a looped clip, but I can't see the cut. Dice fall at what looks like a constant, gravity-like speed, with tumbling and some bouncing at the heap. The window is still, which puts all the action in the dice. The clip is 2s long, so each cube is on screen for roughly 1s.

### What it is made of
A 3D render. The cubes are light grey-white with small marks on their faces that look like Minesweeper numbers and mines, and about a quarter are bright red (about #e02020). The window is a flat 90s interface: blue title bar with "Minesweeper", grey body, red seven-segment counters, a yellow face button. It's lit from behind, so a glow shows around its outline. The floor is not drawn; the dice cast short soft shadows on the teal ground. The background shades slightly lighter around the window. Whether the dice are a physics simulation or a pre-set animation isn't visible, and the poster didn't say.

### To recreate the look
Inferred from the footage, untested.
1. Pick one flat saturated ground colour and one old software window to be the source.
2. Fill the window's inside with the same objects that will leave it, so the spill looks like it starts inside the window.
3. Make the objects small, numerous and few-coloured: mostly white, with about a quarter in one hot red.
4. Keep the source still and let the stream carry the movement. Let it narrow just below the window, then widen as it falls.
5. Keep the heap the same size, with a few loose dice rolling out, so the loop doesn't show a seam.
6. Put a thin bright halo around the window so it reads as a screen.

### Skills to try

- [particle-system ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/particle-system): hundreds of dice pouring out
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): a pour that settles into a heap and loops
