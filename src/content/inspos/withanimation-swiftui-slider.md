---
title: "A slider with a numbered black tag"
url: "https://x.com/withAnimationUI/status/2118682546951360730"
source: "X"
credit: "withAnimation"
type: "Interface"
date: 2026-11-06
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2118682265857499136/img/qTs0C2PN4bZIcaNI.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2118682265857499136/vid/avc1/960x960/sN7CiwlAXYoPhnWs.mp4?tag=29"
alt: "A white page with a black rounded tag reading 01 on a vertical stem, beside a row of thin grey bars that shorten to the right, and a cursor below."
sample: false
---

### What happens
A black rounded tag reading 01 sits on top of a thin black vertical stem. Beside the stem is a row of thin grey vertical ticks. A mouse cursor drives it.

- 0.0-0.4s: value 01. Ticks exist only to the right of the stem, tall near the stem and shorter and fainter toward the right edge. The cursor sits among them and drifts left.
- 0.4-0.6s: the cursor passes the stem. Ticks appear to the left as well, each side fading out toward the edges, so the row becomes a mirrored hill peaking at the stem. The number in the tag blurs vertically and rolls through values (19, then 17).
- 0.75-1.4s: the cursor rests far to the left. The tag holds 17, the ticks stay on both sides.
- 1.5-1.75s: the cursor goes to lower right. The tag blurs to 00, then settles on 01. The left ticks vanish and the row is right-only again.
- 1.75-2.6s: held at 01 while the cursor wanders under the ticks.
- 2.75-4.0s: the same gesture again, cursor to the left, left ticks return, number rolls up to 17, then 18, then a blurred 1x.
- 4.0-6.4s: two more short swings (02 on the way, then 18 again), ending back at 01 with ticks right-only, matching the first frame.

### Timing and feel
Number changes take roughly 0.1-0.2s each and show motion blur on the digits, like a counter rolling. Tick growth and shrink looks like ease-out over about 0.2-0.3s. The stem and tag do not move sideways; only the number and the ticks change. Loops cleanly by returning to the opening state. The trigger is cursor position (the cursor is drawn in the video). Which cursor position maps to which number I could not pin down from the frames: far left read as 17-19, near or right of the stem as 00-02.

### What it is made of
Near-white page (about #fafafa). Black pill-shaped tag with white bold numerals, a soft grey drop shadow under the tag and stem. Stem about 3px wide, black, round-capped. About 25 grey ticks (about #d5d5d5), fading by distance. Digit blur is a vertical smear. The poster's line says the fluidity comes from SwiftUI; the frames show nothing about method.

### To recreate the look
Inferred from the footage, untested.
- Draw a fixed stem with a black pill on top and a soft, low-contrast shadow.
- Lay out a row of thin ticks whose height and opacity fall off with distance from the stem, and let the row's extent on each side grow and shrink as the pointer moves.
- Roll the number vertically with blur between values instead of cross-fading, around 150ms per change.
- Keep the stem still so only the numeral and ticks carry the motion.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the tag's number rolling with blur as you drag
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): easing and stagger for the ticks (the web version of the idea, since the original is SwiftUI)
