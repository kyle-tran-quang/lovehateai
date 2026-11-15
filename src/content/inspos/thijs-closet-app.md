---
title: "A closet app that hangs clothes on rails"
url: "https://x.com/cdngdev/status/2098787400084320285"
source: "X"
credit: "thijs"
type: "Interface"
date: 2026-09-12
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2098787344380006400/img/0H41S6ibnoECP-fI.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2098787344380006400/vid/avc1/720x1220/wCCczITbu5U8JU47.mp4?tag=29"
alt: "A phone screen headed Closet, “78 pieces · 25 added”, with rows of tops and bottoms hanging on thin rails: T-shirts and a jumper above, trousers and jeans below."
sample: false
---

### What happens
A phone screen on an off-white ground. Header: a settings icon at the left, "Closet" centred, a blue plus at the right. Under it, "78 pieces · 25 added". Two rails follow, each with a title and chevron: "Tops" and "Bottoms". Each rail is a thin grey horizontal line with clothes hanging from it on wooden or metal hangers: a Ford Mustang tee, a striped tee and a brown jumper on the tops rail, brown trousers, striped shorts and light jeans on the bottoms rail. Only the clothes move, the header and titles stay put.

0.3-1.2s the tops rail is flicked: the clothes slide to the left in one fast pass, showing a navy shirt, a teal tee, a grey hoodie, a Charlie Brown tee, a light blue shirt, a black tour tee and a red one.
1.2-1.5s the pass reverses and the Ford tee comes back from the left edge.
1.5-2.5s the garments swing on their hangers and settle, tilting a few degrees one way, then the other.
2.2-3.5s the bottoms rail does the same: it slides to show tan, navy and pale jeans and a maroon pair of shorts at the edge, comes back, and the hangers swing to rest.
3.5-7.0s still, apart from small settling.
About 7.5s the tops rail is flicked again, a shorter pass (an olive tee shows), and comes back with a small swing.
About 9.0-10.3s the bottoms rail is flicked once more, a maroon pair at the right edge, and returns with a gap at the left that closes.

### Timing and feel
A fast flick of about 0.7 to 1s, then a swing of roughly 1s that damps out. It looks like a pendulum: the garments rotate about the hanger hook and overshoot a little. The rails move on their own, one at a time. No finger or cursor is visible, so I can't tell whether it is a scripted demo or touch input.

### What it is made of
Off-white page (about #fafafa, approximate), black sans labels, grey sans counts, a blue plus (about #0a7be8, approximate). Clothes look like cut-out product photos of real garments, each with a thin hanger and a slight shadow. One thin grey line per rail. Nothing in the frames shows how the sway is produced.

### To recreate the look
Inferred from the footage, untested.
1. Treat each category as a horizontal rail with a thin rule across it and cut-out photos hanging beneath it.
2. Let the rail scroll sideways, and have each item rotate about its hanger hook in proportion to the scroll speed and in the opposite direction.
3. When the scroll stops, let the swing overshoot and damp over about a second.
4. Keep headers, counts and titles fixed so only the clothes move.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the sliding rails and swinging hangers
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the settle after each swing
