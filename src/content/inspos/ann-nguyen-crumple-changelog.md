---
title: "A changelog where each update is a poster you can crumple"
url: "https://x.com/ann_nnng/status/2112494977637126157"
source: "X"
credit: "Ann Nguyen"
type: "Web"
date: 2026-10-20
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2112494940400111616/img/TK3pLxuDcuj_qzmW.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2112494940400111616/vid/avc1/992x720/GMIwgWyGJB-pAP1k.mp4?tag=29"
alt: "A white page with a pink distressed poster in the centre reading “Memory for your team”, above a dated label and a scrubber of thin ticks with a play-all button."
sample: false
---

### What happens
A white page. Top left, "TypingMind changelog" in a condensed serif with "created by Ann Nguyen" below. In the middle, one poster at a time, with a soft grey drop shadow. Under it a black pill reading a date and tag ("Oct 14, 2026 · Improved"), an italic serif one-line summary, a scrubber made of thin vertical ticks labelled "OCT 14 ... 6 UPDATES ... OCT 9", a "Play all updates" button, and a line reading "Slide to crumple · click the poster for the next · Full changelog". Six posters, each in one flat colour with hand-lettered black type, a distressed edge texture and a barcode: pink "MEMORY For Your Team", lime "CACHE Across Shared Chats", blue "TWO More Models", orange "TOOLBOX", purple "FULL Screen Editor", cream "THREE New Models".

0.0-0.2s the pink poster lies flat; a circle handle sits at the left end of the scrubber.
0.3-1.0s it wrinkles at the middle, pinches, and shrinks into a small tight ball.
1.1-1.7s a lime ball appears in its place and opens up, still creased, then smooths flat as "CACHE". The pill and summary change to the new poster at the moment of the swap, and the scrubber handle has moved one step.
The same cycle repeats in about 1.5 to 2s steps, with a hold of 1 to 2s on each poster: Cache to Two (crumples about 3.0s, blue ball about 4.0s, flat by 4.5s), Two to Toolbox (crumples about 6.0s, orange opens by 7.0s), Toolbox to Full (about 8.5-9.5s), Full to Three (about 11.0-12.0s). Along the way the handle slides to the right along the ticks.
12.0s the button label has changed to "Play again" and the last poster sits flat.
13.0-17.5s a grab cursor appears beside the poster and the sequence runs backward quickly: Three crumples, Full, Toolbox, Two, Cache come back in turn, each held for about half a second, with the playhead tick moving left.
18.0-19.2s the pink poster is flat again, the cursor leaves to the right, the page is at rest.

### Timing and feel
A crumple takes about 0.7s down to a ball, and the unfold about 0.6s. The ball is the pivot between two posters. The crumple looks like it accelerates into the ball, and the unfold slows into flat (looks like ease-in, then ease-out). During autoplay the whole run is about 12s for six posters. The sequence is driven by the scrubber: a circle handle with two arrows rides the ticks, and a hand cursor appears when the poster itself is grabbed. Whether the backward run is a drag or a series of clicks isn't clear.

### What it is made of
White ground, a condensed serif, a small black pill, ticks in black. The posters are flat saturated colours (pink about #e8186f, lime about #b8f20d, blue about #2f3ff0, orange about #f2531a, purple about #8a2ef2, cream about #efe6cf, all approximate) with rough black brush lettering and a speckled worn-paper texture. During the crumple the poster looks like a real piece of creased paper: it has shading, highlights on the folds, and a shadow underneath that shrinks with it. It looks 3D, and the lettering is warped by the folds. I can't tell how it was rendered.

### To recreate the look
Inferred from the footage, untested.
1. Make a set of flat, loud, single-colour posters with rough lettering and a worn texture, shown one at a time on a white page.
2. Put a scrubber of thin ticks under it, with a labelled start and end and a count.
3. Tie the poster's crumple amount to the scrubber: moving the handle wrinkles the sheet into a ball, swaps the poster at the ball, then smooths the next one open.
4. Add a play-all button that moves the handle by itself, and make the label change to "Play again" at the end.
5. Give the paper real fold shading and a shadow that shrinks as it balls up.

### Skills to try

- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): the crumpled paper
- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the scrubber that drives it
