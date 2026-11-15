---
title: "An embossed holographic brand for Axiomai"
url: "https://x.com/DmitryKurash/status/2119523315207352663"
source: "X"
credit: "Dmitry Kurash"
type: "Brand"
date: 2026-11-08
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119523244180996096/img/Iv_gI1IXltkOmzka.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119523244180996096/vid/avc1/1080x1080/ic7Z_2BTTorIms-Y.mp4?tag=29"
alt: "A dark embossed panel with an orange globe mark, the name AXIOMAI in red-orange lettering, and three outlined pills labelled Intent, Prove and Settle, with a cursor below."
sample: false
---

### What happens
A close shot of a black card with a foil-stamped, embossed mark: a globe in outline, "AXIOMAI" in a dashed, striped lettering, a small line "SOLVITUR IN SILENTIO MXXIV" with "AXM" at the right, and three joined pills labelled INTENT, PROVE, SETTLE. The post says only "Embossed holo". A mouse cursor sits just below the card the whole time. Nothing else on the screen moves except the card and the light on the foil.

- 0.0-1.0s the card is dim. The foil shows muted purple and blue. The card is tilted, with its lower edge slanting.
- 1.0-2.5s the foil warms up to orange, then yellow-green across the globe and wordmark.
- 2.5-4.0s the foil goes yellow, then cyan along the pills, with the card's tilt shifting slightly.
- 4.0-5.0s a bright white glint runs along the right-hand rim of the globe and the wordmark, with the whole mark shifting to pink and lilac.
- 5.0-7.0s the foil runs through blue, then orange-pink, then back down to a dim grey-teal.
- 7.0-9.0s dim, with bits of colour in the SETTLE pill and the wordmark, then it brightens through orange, yellow and green.
- 9.0-11.0s cyan and blue-violet on the globe, with the wordmark yellow-green, then a hot white glint on SETTLE.
- 11.0-13.0s the whole mark goes pale silver-white, with only the pills picking up colour.
- 13.0-15.0s back to saturated: blue, cyan, then orange.
- 15.0-16.9s the colour drains through red to a dim, dark red, as the card's tilt settles.

### Timing and feel
- A slow tilt with a continuous drift of colour, about 1-2 seconds per hue change. It does not loop cleanly. It starts dim purple and ends dim red.
- The colour does not change all at once. The globe, the wordmark and the pills often show different hues at the same moment, and bright glints travel along edges. That is what makes it read as foil catching the light.
- The cursor barely moves (a shift of a few pixels in the later frames). The tilt could be driven by the cursor or by a camera, but I can't tell which.

### What it is made of
- A near-black card (approx. #121212) with a fine paper grain and a few light specks.
- Embossing: a raised edge on every stroke with a darker inner edge, which looks like a real deboss or stamped foil. The globe lines show the paper grain through them.
- Foil colour is a full spectrum (purple, blue, cyan, green, yellow, orange, pink, red), sampled differently across the mark. Highlights are near-white.
- Lettering: a wide bold sans with horizontal slices cut through each letter, a small grotesque for the tagline, and a rounded caps for the pills.
- Whether this is a video of a real object, a 3D render or a shader is not clear from the frames. The embossing and grain look physical, but I can't tell.

### To recreate the look
Inferred from the footage, untested.
1. Put a flat mark on a black card with a visible paper grain, with a raised edge and a slightly darker inner edge on every stroke.
2. Fill the strokes with a spectral foil. The colour should depend on the angle between the surface and the light, and it should differ from one part of the mark to another.
3. Tilt the card slowly through a few degrees over about 15 seconds, so the colour passes through the full range in each part at different times.
4. Add one or two brief white glints that travel along the edges, and let the mark drop almost to black at the quiet moments.
5. Keep the camera locked off. Only the card and the light move.

### Skills to try

- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): colour that drifts across a surface, with glints along the edges
- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): the slow tilt of a card in 3D
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): moving through the spectrum without muddy greys
