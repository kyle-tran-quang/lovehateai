---
title: "A personal site with a name badge on a lanyard"
url: "https://x.com/samfcheng/status/2104993779510047203"
source: "X"
credit: "Sam Cheng"
type: "Web"
date: 2026-09-29
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2104993659833987072/img/8kwu2JDLLXtYvjUa.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2104993659833987072/vid/avc1/1036x720/TSkSi3y0u7K_DKbD.mp4?tag=29"
alt: "A white page with a large serif “Sam Cheng” cropped at the bottom, and a clear badge holder on a black lanyard hanging over it, holding a card with the name in blue and black."
sample: false
---

### What happens
A white page. Top left, two lines of small serif text ("I design products and the stories behind them." with an underlined "[more]"). Top right, right-aligned: "Currently studying Arts, Technology, & Business @ USC". Across the bottom, "Sam Cheng" in a very large black serif, cropped at the left and right edges. In the middle, a clear plastic badge holder hangs from a flat black lanyard that comes in from the top edge. The card inside reads "Sam" in black over "Cheng" in blue, with small "Currently / Previously" lines and three small pills (black, red, purple) near the bottom. The text on the page never moves. Only the badge does.

0.0-1.0s the badge hangs nearly upright, rocking slightly. An arrow cursor sits just below-right of it.
1.0-3.0s the cursor turns into a small circle (a grab cursor, as far as I can tell) and the badge is thrown round: it swings out to roughly sideways, pivoting from the clip, then swings back toward upright.
3.5-8.5s it is pulled and flung several times. It rides up toward the top edge, partly leaving the frame, then drops back. Around 6.0-7.5s it lies on its side with the clip on its right, so it has turned about 90 degrees or more. The lanyard bends and curves to follow it each time.
9.0-13.0s two more big swings, one up and to the top left (card cropped by the top edge at about 10.0s), one back down.
13.5-18.0s the swings get smaller. By about 17s it hangs almost upright with a slight sway. No loop is shown, the clip ends at rest.

### Timing and feel
Each big swing takes about 1 to 1.5s out and about the same to come back, with several smaller rocks afterwards. It looks like a pendulum with some damping, so each throw overshoots and settles over a few seconds. It is cursor-driven: the grab cursor appears on the card when it is moved. I can't tell from 2 frames a second whether a single click or a drag throws it, or how close to physics it really is.

### What it is made of
Plain white ground. A heavy black serif wordmark, cropped. A clear holder with two punched holes and a metal clip, a dark charcoal flat lanyard (about #2a2a2a, approximate), a soft grey drop shadow offset to the lower right of the card that moves with it. On the card, black and blue (about #1f2fe0, approximate) serif letters and tiny pills. When the card dips low it passes in front of the big name and covers part of the "C". Whether this is 3D or a flat image being rotated and skewed isn't clear from the frames, but the clip and strap read as three-dimensional.

### To recreate the look
Inferred from the footage, untested.
1. Lay out a quiet, text-only page and crop a huge wordmark off the bottom edge.
2. Hang one object near the centre from a thin strap that enters at the top edge. Give it a soft offset shadow.
3. Let the viewer grab the object and throw it. Make it rotate freely about the clip, up to sideways, and let the strap bend to follow.
4. Add damping so it overshoots and settles over about 5 seconds, not instantly.
5. Keep everything else on the page static so the swinging object is the only motion.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): the badge swinging on its lanyard
- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the grab and throw
