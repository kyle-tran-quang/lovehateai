---
title: "A portfolio page piled with Sony cassettes"
url: "https://x.com/LuisBizarro/status/2106604530766889414"
source: "X"
credit: "Luis Bizarro"
type: "Web"
date: 2026-10-04
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2106580555546415105/img/_VzkBK0RXR2kw6mx.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2106580555546415105/vid/avc1/1280x720/DQM8mN1OqSgKKoPO.mp4?tag=29"
alt: "A black page filled with scattered black-and-white cassette tapes in sharp light, the Sony label visible on a few, with a short line of text at the bottom left."
sample: false
---

### What happens
The poster says "I wanted to make the full list of projects from my portfolio more interactive than just a spreadsheet, so I just made a new WebGL experiment with Three.js." (his words). The footage is a black page full of grey-scale 3D cassette tapes, many with a Sony label, tumbling in space. The camera sits close to them and drifts and tilts.

Fixed text: a small stylised wordmark top left, "luis@bizar.ro" top right, and bottom left "Luis Bizarro is a Creative Technologist. His work includes Apple, Airbnb, Active Theory, National Design Studio, UNIT9 and independent studios." On the left, a list of project names with years, mostly dim, with one underlined and bright.

Timestamps are approximate (within about a second).
0-2s: only cassettes, fast glancing views with bright white glints on edges, then a fast whip with heavy blur at about 2s.
3-4s: the view settles on one cassette. A thin rectangular frame appears around it with a title ("TAROT WITH YOUTUBE / Active Theory · 2022 · x.com ↗"), small x/y coordinate labels at its corners, dashed orbit circles around the cassette, and many pixel blocks of lavender and white scattered over it, like a low-resolution mosaic of the project image. The list entry for the project is underlined.
4-8s: the blocks shift between frames, moving and re-sizing, as a small cluster of rectangles flickers and re-forms. Then another whip, and the next project, "AMBUSH SILVER FCTRY", lands with grey and white blocks, a dotted halftone texture and one red patch.
8-11s: Dreamwave 3D Demo with purple, magenta and blue blocks, a few blocks resolving into a sharper image (a blue stage) before the next whip.
Roughly 11-36s: the same cycle for Xbox Museum (greens), Trolli Deliciously Dark Escape (navy, purple), Inbound 2020 (warm browns and oranges), Adventure Time Distant Lands (dark blue), RediscConf20 (white and tan), MacBook Pro M4 (dark blocks with a coloured bar), iPhone 16 Pro (pastel pink, teal and blue), and Apple Vision Pro. Each shot lasts about 2-3s with a blurred cassette whip between them.
About 38-45s: the frame and the list go away. Cassettes alone fill the screen, drifting past with bright glints. The text corners stay.

### Timing and feel
Camera moves between cassettes look like fast ease-in-out whips with strong motion blur and depth blur; the settled shots drift slowly. The mosaic blocks update at a few steps a second, so they flicker and don't glide. No cursor is visible, so I can't tell whether the cycle is on a timer, a scroll, a drag, or the poster performing it. No clear loop in 45s.

### What it is made of
A true 3D scene (real perspective, depth of field, motion blur, specular glints) with monochrome cassette models on black. Over it, a 2D HUD layer: thin white rectangle with handles, tiny coordinate captions, dashed circles, and colour pixel blocks sampled from each project's imagery, so colour only appears in the project shot. Type is a small sans. How the colour blocks are produced can't be told from the footage.

### To recreate the look
Inferred from the footage, untested.
1. Build a pile of one repeated object in greyscale, lit with hard highlights on black.
2. Let the camera whip from one object to the next with heavy motion blur, then settle slowly.
3. For each project, lay a thin rectangle with a title, year and coordinate labels over the settled object.
4. Fill it with coarse blocks of the project's colours that re-shuffle a few times a second and sharpen towards the end.
5. Keep colour out of everything else, and dim the rest of the project list while one name is underlined.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): the cassette pile and whip pans
- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): the flickering pixel-block overlay
