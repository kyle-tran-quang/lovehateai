---
title: "A stepper that moves like liquid"
url: "https://x.com/kaolti/status/2119797138276471067"
source: "X"
credit: "Zsolt Kacso"
type: "Interface"
date: 2026-11-09
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119796820926676992/img/Pkmhduam3FfPPqI1.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119796820926676992/vid/avc1/958x720/8sM-gVosh884Ycxv.mp4?tag=29"
alt: "Three dark pill buttons labelled Payment, Review and Confirm in a row over dark folds, a pink drop of colour sitting on the first and a cursor on it."
sample: false
---

### What happens
Three dark pill buttons (Payment, Review, Confirm) in a row, over a static dark ground. A cursor clicks through them and each pill fills with glossy colour, as if poured.

- 0.0-0.5s: cursor on Payment. Pink fill sweeps in from the left edge until the pill is full: hot pink, bright rim, label turns dark.
- 1.0-1.4s: the cursor moves toward Review. A pinched neck of pink stretches from Payment toward Review, thickest at Payment, thinning to a point. The Payment label cross-fades to a check mark.
- 1.5-2.5s: the neck flexes, thinning and thickening as the cursor passes over it, and at one point retracts into a clean rounded pill.
- 3.5-4.0s: Review fills with violet (about #b050ff) from its left, joined to Payment by a neck, so the two read as a peanut shape. Review's label turns dark.
- 4.5-5.0s: Review gets its check. A neck forms to Confirm.
- 6.0-6.5s: a step back. Review drains, with a violet streak leaving from the right, and returns to a dark pill. Payment stays pink with its check.
- 8.5-10.0s: Review fills again, then Confirm fills green (about #4be86a), the fill showing first at the right end and wiping across.
- 11.0-11.5s: Confirm check, then Confirm drains to dark.
- 14.5-15.5s: Confirm fills green again, ending full green.

### Timing and feel
A fill takes about 0.4-0.6s. Necks form and snap back in about 0.3s. Looks like a spring with some stretch and a little overshoot. The colour changes per step: pink, then violet, then green. Triggered by the cursor, which clicks the next pill or the previous one. The clip does not obviously loop, since it ends on the green state and starts empty.

### What it is made of
Near-black ground with a few large soft curved fins, lit faintly from the upper left, static. Pills about 3:1, dark translucent grey when empty. Filled pills have a light rim, an inner highlight along the top and a soft coloured halo. White labels, dark when filled. The neck between pills looks like a stretched meniscus with a darker, smoky tail. I can't tell from the frames how the effect is rendered.

### To recreate the look
Inferred from the footage, untested.
- Make three pills and fill each from one end, with a bright edge and an inner highlight so the fill looks wet.
- Between a completed pill and the next, draw a bridge that stretches and pinches like a drop pulling apart, and let it reach toward the cursor before the click.
- Swap the label for a check once a pill completes.
- Change hue per step and let the fill overshoot slightly before settling.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the pills filling as the cursor steps
- [svg-animation ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/svg-animation): the stretchy neck that joins them, as a morphing shape
