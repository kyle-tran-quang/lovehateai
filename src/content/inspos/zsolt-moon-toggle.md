---
title: "A toggle with a glowing glass knob"
url: "https://x.com/kaolti/status/2119151022014894260"
source: "X"
credit: "Zsolt Kacso"
type: "Interface"
date: 2026-11-07
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119150610591207424/img/OgjiPFhxWywasuyL.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119150610591207424/vid/avc1/958x720/3Nqdkkcj_2jBsHO2.mp4?tag=29"
alt: "A dark rounded switch with a glassy square knob holding a crescent moon, edged with blue light, and a cursor beneath it."
sample: false
---

### What happens
A switch with a glassy square knob. The page and switch change between a dark state (moon, knob left) and a light state (sun, knob right). A mouse cursor sits on or near the knob and the switch is flipped about 7 times in the 14s.

First flip, in detail:
- 0.0-0.3s: dark state, knob left, white pixel-grid moon with a small plus-shaped sparkle, a blue-violet rim of light along the knob's left and bottom edges with a soft halo.
- 0.3s: the moon starts to break into square pixels, the background is a mid grey and the knob is moving right.
- 0.4s: light state, knob at right, pixels scattered where the icon was.
- 0.5-0.6s: the scattered pixels settle into a dark pixel-grid sun with dashed rays. The rim is now amber along the top and right edges, with a warm halo, on a pale warm-grey page.
- about 1.2-1.4s: back toward dark. Page greys, the knob crosses to the left, the sun scatters into white particles that form the moon again. Settled by about 1.7s.

The remaining flips repeat this, with dwells of about 1s in each state. The clip ends in the light state, while it starts dark, so the loop is not obviously seamless.

### Timing and feel
The switch itself takes about 0.2-0.3s. The icon rebuild is a little longer, about 0.4-0.5s, and slightly trails the knob. Looks like ease-in-out on the knob, with the pixels flying outward then settling. The background fades across the same window, passing through mid grey. Triggered by the cursor (a click or drag on the knob; I can't tell which from the frames). The poster's experiments page, per the notes file, says "Drag it and the pixels rebuild moon into sun".

### What it is made of
Dark state: near-black page (about #0d0d10), inset dark track, translucent knob with a lighter edge, blue-violet rim light (about #7b7bff). Light state: pale warm grey page (about #e6e4e0), light inset track, knob with warm white fill, amber rim (about #ffb020) and a faint orange halo above-right. Icons are made of about 10x10 square pixels. Knob corners about 30% radius. Soft drop shadow under the knob.

### To recreate the look
Inferred from the footage, untested.
- Build a track and square knob with a bevelled glass look, and give each state a coloured edge light on two sides only.
- Make the icon from a coarse pixel grid. On flip, send each pixel outward with a small random offset, then pull them into the new shape.
- Move the knob and cross-fade the page from dark to light through a mid grey over about 300ms.
- Switch rim colour and side with the state: cool on bottom-left, warm on top-right.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the toggle itself
- [particle-system ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/particle-system): the pixel moon scattering and rebuilding as a sun
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): dark to light, and the rim light from blue to amber
