---
title: "A progress bar with two pixel duellists"
url: "https://x.com/ozzyxs1a/status/2096799298243445098"
source: "X"
credit: "ozzy"
type: "Interface"
date: 2026-09-07
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2096799271743844353/img/vWD7QEk-CrRjXRWa.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2096799271743844353/vid/avc1/646x360/w02X-Y-1SPOnbECe.mp4?tag=29"
alt: "A pale progress bar on white with two pixel-art figures standing on it, one holding a blue lightsaber and one in black holding a red one, with “Loading” at the left and 12 at the right."
sample: false
---

### What happens
A white page with a pale grey, segmented progress bar. Two pixel-art figures stand on top of it: a tan-robed one with a blue lightsaber on the left and a black-armoured, helmeted one with a red saber on the right. Under the bar are two small pixel-font labels, a status word on the left and a percentage on the right. The post says "a new hope for progress bars".

0.0-2.0s the label reads LOADING and the percentage climbs, 3%, 9%, 14%, 19%, 23%. The bar fills with small blue-grey blocks from the left. The two figures swing: the sabers raise, drop and cross, and there is a clash pose about every 0.5-1s.
2.5s at 25% the black figure lands a hit. The tan figure drops to a crouch, the bar fill turns red, and the label turns red and reads FAILED.
3.0s the tan figure lies flat along the bar.
3.5-4.0s the label changes to RETRYING, still red, still at 25%.
4.5s the figures are back on their feet, the bar is empty and blue again, LOADING, 0%.
4.5-18.0s a second, longer run: 0%, 5%, 10%, 16%, 21%, 26% (passing the point where it failed before), 30%, 35%, 40%, then on to 44%, 48%, 53%, 57%, 61%, 64%, 69%, 72%, 75%, 78%, 82%, 85%, 87%, 90%, 92%, 94%, 96%, 98%, 99%. Throughout, the two keep fencing, with clashes about every 1-2s.
18.5s 100%: the bar turns green and the label turns green and reads SUCCESS.
19.0s the black figure falls to his knees, then slumps in a heap on the bar; the tan figure holds his blue saber straight up.

### Timing and feel
The percentage rises at about 10% per second in the first 8s of the second run, then slows to about 8% per second in the middle and about 5% per second near the end, so it feels like it is struggling at the finish. The fight cycles on a short repeating set of poses, a few frames each, so it reads as stepped, low-frame-rate animation, not smooth tweening. Status changes are instant and colour-coded: blue LOADING, red FAILED and RETRYING, green SUCCESS. The first run failing at 25% is a staged event (the fight loses), then it restarts from 0. No loop shown; it ends on the victory pose.

### What it is made of
Pixel art with hard, unblurred edges on a white ground. A segmented bar with a light grey track and a thin grey outline; its fill is made of small rectangular blocks, blue-grey (about #6b8fa3) for loading, red (about #c0405a) for failed, green (about #6a9a76) for success. Labels in a pixel capital font in the same colour as the bar state. The blue and red sabers are bright single-colour lines, about 1px wide in the pixel grid, with a pale core. The figures stand directly on top of the bar.

### To recreate the look
Inferred from the footage, untested.
1. Draw a segmented bar on a white ground, with a pixel font for the status and the percentage.
2. Put two small pixel figures on the bar, facing each other, each with a one-colour sword.
3. Cycle a short set of fight poses on a loop, a few frames each, with a clash pose every second or so.
4. Tie the status to the colour: blue while loading, red on failure, green on success, the bar fill and both labels together.
5. Stage a failure early at about 25%: one figure falls, the label reads FAILED then RETRYING, the bar resets to 0.
6. Let the second run slow down as it nears 100%, then end with the other figure falling.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): a progress bar with a fail and a retry state
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): red turning to green
