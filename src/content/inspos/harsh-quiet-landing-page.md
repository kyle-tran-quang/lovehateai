---
title: "A quiet landing page with one pull quote"
url: "https://x.com/imharshin/status/2118715905815519708"
source: "X"
credit: "Harsh Sharma"
type: "Web"
date: 2026-11-06
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2118715351097851904/img/asmTkKCFLON1pspa.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2118715351097851904/vid/avc1/1176x720/LUxkkFX3Mc4uGk-A.mp4?tag=29"
alt: "A cream landing page in a browser window, with a short pull quote in the middle, a line reading “Leave a mark.” at the bottom left and columns of footer links at the bottom right."
sample: false
---

### What happens
The page is a cream browser mockup with a short quote at the top, "Leave a mark." with a small line under it ("Drag anywhere down here to drop ink."), link columns at lower right and a huge black "Inkwell" wordmark at the bottom. The post's own line is "Studying color mixing lately".

0-3s: the lower band behind the wordmark is already coloured (yellow, magenta, blue-violet, fading upward into pale blue-grey with a ragged, torn-looking top edge). Over the first seconds that edge settles and the colours drift slightly. This reads as the page loading in, but I can't see it clearly at 1s sampling.

About 4s: the cursor sits in the empty middle of the page and a small magenta dot appears under it. By 5s it has grown into a roughly round splotch about a fifth of the page wide, with a feathered, spiky edge, darker rings and a small white hole off-centre.

About 6-7s: a second, indigo drop starts on the link columns. By 7s it has pulled a long tendril down and left, following the cursor as it was dragged, and by 8s it has joined the lower band and thrown up a jagged dark crest.

About 9s: a mustard-yellow drop starts at the left under "Leave a mark.", and by 11s it is as big as the magenta one, with the same spiky edge and radiating veins.

12-21s: the cursor drags from the right across the page to the lower left. A broad magenta and pink wash follows it, running over the yellow and into the lower-left corner. By about 18s it covers the lower left, partly over and partly behind the "Inkwell" letters (I can't tell which). The last seconds are close to still, with the cursor in the bottom-left corner.

### Timing and feel
Each drop grows over roughly 1-2s, fast at first and then slowing (looks like ease-out). Edges stay jagged and soft the whole time, so it looks like pigment wicking into paper, not a clean shape scaling up. Dragged marks lag a little behind the cursor. The footage doesn't loop. Interaction is cursor driven, press and drag, as the on-page line says. The clip stays on screen and there is no scroll.

### What it is made of
Flat cream ground (about #f5f2ea, approximate). Small dark grey sans text. A very large black grotesque wordmark. The ink is saturated magenta (about #d0307f), yellow (about #e3c340), indigo (about #3a3a8c) and a pale blue-violet, with darker rims, radial streaks and a visible grain. Colours darken where they overlap, so they look like mixing and not simple layers. The mockup has a soft drop shadow and traffic-light dots, which are the poster's framing and not part of the effect.

### To recreate the look
Inferred from the footage, untested.
1. Keep the page nearly empty: a quote, one short instruction line, a footer link grid and one oversized black wordmark.
2. Make the ink a paper-like texture: soft-edged blobs with a ragged, feathered rim and thin radial veins, a darker band just inside the edge, and fine grain over everything.
3. Pick three or four saturated hues and let them mix and darken where they meet.
4. Grow each blob from a dot over 1-2s with a decelerating curve, and stretch it along the drag direction when the cursor moves.
5. Let the ink sit over the wordmark so the big letters get partly eaten.
6. Tell the visitor what to do in one plain line, since the effect is hidden until they drag.

### Skills to try

- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): soft-edged ink that spreads and mixes as the cursor drags
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): mixing magenta, indigo and yellow without turning grey
