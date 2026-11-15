---
title: "A turntable on a steel shelf with a glitching reflection"
url: "https://x.com/gasphedde/status/2100549328368521343"
source: "X"
credit: "Gaspard"
type: "3D"
date: 2026-09-17
imageUrl: "https://pbs.twimg.com/media/HSamZqhXwAA4H2d.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2100549236093833216/vid/avc1/720x1128/ME-bVCZnLKEKxjIq.mp4?tag=29"
alt: "A turntable on top of a grey steel shelf holding records, on a pale ground, its reflection broken into jagged black and coloured streaks, with a hand cursor over one record."
sample: false
---

### What happens
A pale grey page (about #e6e6e6, darker in the corners) with one object in the middle: a turntable sitting on a bent brushed-steel shelf, records standing inside it, and a glossy black "floor reflection" underneath. A small track line sits at the bottom of the frame, "Mairo neophron - LOUP D'MER" at the start. The post says: "vinyls are too expensive, so i dev a solution #threejs".

0.0-2.0s the whole object starts small and far away, then grows to fill most of the width. A mouse arrow appears. The reflection underneath is a ragged black shape with a jagged outline and a few coloured streaks.
3.0-7.0s the cursor turns into a hand over the left end of the stack. One record sleeve (pink and white cover in a black sleeve) comes forward out of the row and is dragged out to the left. At the same time the whole shelf turns, so by 7s we are looking at it from the side and the sleeve hangs out of the front.
8.0-11.0s a black vinyl disc lifts out of the stack and floats up beside and above the turntable, tilting as it goes. The shelf turns to show its back side, where the covers are different (one reads "IN RAINBOWS"). The disc drifts down to the right, then swings across in front of the shelf.
11.0-15.0s the view tips to look down on the turntable. The pink sleeve's cover is now the label on the platter. The camera pushes in until the platter, the tonearm and the speed slider fill the frame. Bright white glints run along the steel edges and flare in the floor reflection.
16.0-20.0s the camera pulls back and slides along the front of the shelf, close enough that the record spines are blurred at the edges. The track line at the bottom fades and comes back as "naomi watts - abel31". The covers shown on the shelf change from the pink one to the colourful In Rainbows one.
20.0-26.5s it eases back out to the opening distance, the cursor drifts to the lower middle, and the object ends in nearly the pose it started in, with the pink sleeve still pulled forward.

### Timing and feel
Camera moves take about 1-2s each and look like ease-in-out with a little inertia. The disc lift and the sleeve pull are quick, under 1s. The reflection never stops wobbling. The ending lands close to the start, but a small difference (the sleeve) means it is not a perfect loop as far as I can tell. The clip is a screen recording of an interactive page: there is a visible cursor and a grab hand, but I can't see whether the cursor drives the camera or the sleeve and disc, or whether the sequence is scripted.

### What it is made of
A 3D scene: a bent steel shelf with a soft brushed finish and sharp specular glints, a black turntable with a visible tonearm, platter dots and slider, vinyl sleeves with real-looking cover art, a flat disc with a label. The floor reflection is the odd part: it is a black, mirror-like copy of the object with a hard, jagged, noisy edge, vertical colour smears in place of the record spines, and a rippled look, as if a mirror were being shaken. There is no ground plane visible apart from that. The background is flat pale grey with a light vignette. The track name is small black sans text, centred at the bottom. The post says "#threejs"; nothing else is said about how it was made.

### To recreate the look
Inferred from the footage, untested.
1. Put one polished object on a very pale grey ground with a faint vignette.
2. Add a mirrored copy below it, in black, with the outline broken up into hard-edged jagged pieces and the colours stretched into vertical streaks. Keep it moving slowly so it reads as liquid.
3. Make the object grabbable: sleeves slide forward, the disc lifts and floats, and the whole piece turns so the back is as worked-out as the front.
4. Move the camera between three distances: whole object, top-down on the turntable, and close along the shelf. Keep each move 1-2s with soft ends.
5. Put a tiny one-line track title at the bottom and change it when the record changes.
6. Add a few bright specular flashes on the metal at the moments the camera moves, not all the time.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): the shelf, turntable and camera moves
- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): the rippling, breaking reflection
