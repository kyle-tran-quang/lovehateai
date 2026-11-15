---
title: "A preference quiz over a field of objects"
url: "https://x.com/krispuckett/status/2120685647115792802"
source: "X"
credit: "Kris Puckett"
type: "Interface"
date: 2026-11-12
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2120685549723983872/img/68AFGszMKwit11PE.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2120685549723983872/vid/avc1/682x360/tnLqwdxX4fa65Fuh.mp4?tag=29"
alt: "A pale page of scattered chairs, vases and objects behind the questions “Plain or ornate? Geometric or freeform? Precise or handmade?”, with two small buttons underneath."
sample: false
---

### What happens
The poster said only "Wrapping up a little fun tool to help find our preferences." and gave no method. This is a screen recording of a small site called "Prefer", with a pointer visible.

- 0.0-5.0s: the start screen. A pale grey page, six stacked lines of large bold type ("Plain or ornate? Geometric or freeform? Precise or handmade? Warm or cool? Quiet or loud? Airy or dense?"), two buttons ("Find out in 42 picks", "Your result"). Around the type, a field of small photos of chairs, kettles, a radio, a camera and other objects, tilted at different angles, most of them blurred. Over the 5 seconds a few photos at a time snap sharp and others blur, and the set changes. In each line one word is dark and the other gray; the dark word changes line to line and looks as if it follows the pointer (the pointer sits on "Airy" and on "Quiet" in two frames).
- 5.0-5.5s: the pointer clicks the first button. The headline, photos and buttons fade out together.
- 5.5-6.5s: a pair of photos fades in (two vases) with "Which look do you like?" and "1 of 42" in small type at the top.
- 6.6-7.6s: the pointer clicks the left vase. It lifts a little and tilts, the other fades out, and the picked one shrinks and travels down to bottom centre, where it rests as a small thumbnail.
- 7.6-8.5s: a new pair fades in (two cars, wide pictures). Same pick, same shrink toward the thumbnail, and the thumbnail row grows by one.
- 9.0-15.5s: three more pairs (red/blue chair and black chair; a reading app card in two versions; a toast rack and a kettle; two brass kettles). One is a pair of text articles. The picks stack up at the bottom as a row of tiny cards.
- 15.0-17.5s: the pointer goes to the row. The cards fan out and a white label appears over each one on hover, such as "Berlin Chair" and "Lamborghini Miura".
- 18.0-20.6s: the picking screen fades out and the start screen returns. Lines of the headline come in one after another from blurred to sharp, photos fly in, and the buttons now read "Continue at 6 of 42", "Start over", "Your result".

### Timing and feel
Fades and moves of about 0.3-0.5s. The pick-to-tray move is about 0.8-1s and looks like ease-in-out, with no obvious overshoot. The stack fan and labels look quick, about 0.2s. The headline return is staggered by line, about 0.2s apart. The loop is not automatic: it ends on the start screen with progress kept. Triggered by pointer: hover darkens words, click picks.

### What it is made of
Near-white grey ground (about #F0EFED, approximate). Heavy grotesque sans for the headline, black and mid-gray (about #8A8A8A). Black pill button and a pale pill button. Object photos in rounded squares, soft shadows, varying blur, rotated a few degrees. Pair screens: two photos with rounded corners and a very light shadow, tiny sans captions. Tray of tiny rounded cards at bottom centre. Pill-shaped labels on hover. Source credit line in tiny gray text at the bottom of the start page.

### To recreate the look
Inferred from the footage, untested.
- Use a pale ground with one black type colour and one gray.
- Set the questions as a stack of large lines with the two options side by side in each line, one dark and one gray. Let the dark word change with the pointer.
- Scatter object photos around the type, tilted a few degrees, with most of them blurred and a few sharp, swapping slowly.
- Start the quiz with a full fade, then show two photos side by side.
- On a pick, lift the chosen one slightly, fade the other, shrink the chosen one down to a small stack at the bottom.
- Make the stack expand on hover with a name label per card.
- Bring the start screen back with lines arriving blurred to sharp, and change the button to "Continue".

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): a pick lifting into a tray that fans out on hover
- [kinetic-typography ↗](https://github.com/iart-ai/kinetic-typography-skills/tree/main/skills/kinetic-typography): the headline arriving line by line, blurred to sharp
- [gsap-core ↗](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core): sequencing the lift, shrink and fan
