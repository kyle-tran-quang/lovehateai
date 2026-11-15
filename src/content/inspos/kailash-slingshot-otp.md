---
title: "A code field filled with a slingshot"
url: "https://x.com/kail_designs/status/2100675157115404344"
source: "X"
credit: "Kailash"
type: "Interface"
date: 2026-09-17
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2100675060667449344/img/rJeZDmGUtH9RuTWC.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2100675060667449344/vid/avc1/1256x720/S2rwPfTkRnJ0TedW.mp4?tag=29"
alt: "A white page with a row of six small boxes under “Enter your code”, and a black slingshot at the bottom with a number resting in it and loose digits scattered around its base."
sample: false
---

### What happens
A white page. At the top, the line "Enter your code" and a row of six small rounded boxes, each showing a faint grey 0. The first box has a thin amber outline (the active one). Low in the frame is a black Y-shaped slingshot, with a thin amber band between its prongs. A single digit sits in the pouch. On either side of the base are loose digits in dark and light grey, piled in a loose band, some large, some small, some faded. The post text is "OTP slingshot" with a link to a live page.

0.0-3.0s the cursor arrives. The pouch holds a "1". The cursor becomes a small hand, grabs the pouch and pulls it down the stem. The band stretches into a narrow V behind it.
About 3.5-4.0s the pouch is released. The digit shoots up, lands in the first box, and the box shows a "4". The amber outline moves to box two. So the digit in the pouch at launch is not the same as the one that ends up in the box, or it changes on the way. I can't tell which from 1s frames.
4.0-6.0s the pouch is empty and then refilled. A loose digit from the pile on the right lifts and arcs to the pouch, with the hand following it.
Roughly every 2-4s the same cycle repeats: pull back, release, digit arcs up over the page to the next box, box fills, amber outline moves right. Entered in order: 4, 6, 3, 2, 4, 6. At around 15s a small "2" hops up from the pile and the pouch fills with "2" before the shot.
About 22s the sixth box is filled. The label changes to "Wrong code, try again" in red, and all six boxes get a pink fill and red outline with red digits.
About 24-25s the boxes clear back to six grey 0s, the label returns to "Enter your code", the pouch has a "4" in it, and the cycle is ready to start again.

### Timing and feel
The pull-back is slow and under the cursor's control, roughly 0.5-1s. The release and flight take about 0.3-0.5s, and looks like it starts fast and settles on the box. The band snaps back. The error state shows as an instant colour change, then holds for about 2s before the reset. Nothing loops on its own. It is a screen recording of someone using the page with a mouse, and the mouse moves between the pile and the pouch between shots.

### What it is made of
A sparse white page with small black sans text. The boxes are light grey (about #eeeeee) rounded squares with a grey digit, the active one outlined in amber (about #e8a820, approximate). The slingshot is a thick dark brown-black Y with a round pouch (white disc, thin outline) and an amber elastic band. The loose digits at the base are set in a grey sans at different sizes and opacities, overlapping each other, in a horizontal band across the whole width. The error state uses a pink fill (about #fde3e8) and red (about #d6284c). The cursor is a small hand icon while holding.

### To recreate the look
Inferred from the footage, untested.
1. White page, one centred label and six empty boxes. Highlight the active box with a thin warm outline and move it on each entry.
2. Draw a large slingshot low on the page and make its pouch hold the next digit, drawn above the pile like loose numbers on a table.
3. Let the user drag the pouch down, show the band stretching with it, and on release send the digit in an arc up to the active box.
4. Show the digit land in the box with a quick settle, then move the highlight one box right.
5. After the sixth, turn the label red, tint all six boxes pink with red digits, hold about 2s, then clear.
6. Fill the ground band with loose digits at mixed sizes and greys so the pile reads as ammunition.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the drag, release and wrong-code states
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the pouch pulling back and letting go
