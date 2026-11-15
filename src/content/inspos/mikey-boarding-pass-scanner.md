---
title: "A boarding pass you swipe through an old scanner"
url: "https://x.com/mjbarton_/status/2098082543966867524"
source: "X"
credit: "mikey"
type: "Interface"
date: 2026-09-10
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2098082297576837121/img/yIOEAXx2D5CiKdtG.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2098082297576837121/vid/avc1/880x720/Pxc00hQBBLyaJCB8.mp4?tag=14"
alt: "A pale page with a boarding pass in grey and blue above a beige scanner with a small screen reading “Ready”, and the line “Swipe boarding pass to enter” beneath."
sample: false
---

### What happens
A pale pinkish-white page. A boarding pass (grey and lavender, name "MIKE BARTON", MAN to REM, a barcode strip) floats above a beige, aged-plastic scanner with a dark window reading "READY" and a round lamp on the right. A small line under it reads "Swipe boarding pass to enter". The post says "having fun updating the scanner, lovely aged plastic".

0.0-1.75s the pass hangs above the scanner and tilts and drifts left and right a few degrees as a small round cursor moves around on the pass. It follows the cursor loosely. The caption beneath shimmers, with the bold weight passing along it through "boarding", "pass" and "enter".
1.75-2.25s the pass is pulled down and across the top of the scanner, and its lower-left corner slips behind the front edge. The window changes to amber "READING" and the lamp turns amber and glows.
2.5-3.25s the window shows red "ERROR" and the lamp goes red. The pass lifts back up and wobbles above the scanner. It looks like a failed swipe.
3.5-4.0s a second pass at the scanner: "READING" again, amber lamp.
4.25-4.75s back to "ERROR", red lamp, pass dragged to the left.
5.0-5.25s a third attempt, "READING" with the lamp amber.
5.5s the window turns green "SUCCESS" and the lamp goes green. The pass tips and flies off to the right, and the caption now reads "Access granted".
5.75-6.4s the scanner, the pass and the caption all fade out, leaving the empty page.

### Timing and feel
Each state change (READY, READING, ERROR, SUCCESS) is instant, with lamp and window changing together. The pass moves with a little lag behind the cursor, like a loose thing on a string. The exit is a quick throw to the right plus a 0.5s fade. Three tries before it works. Not a loop. What counts as a good swipe isn't stated; the footage doesn't show whether it is speed, position or something random.

### What it is made of
A soft 3D-looking scanner in cream plastic (about #d9cfb4, approximate), with vent slits at the top, a dark recessed window with dot-matrix amber, red or green letters, and a round lamp that glows in the state colour. The boarding pass is a flat, pale ticket with small mono type, a faint map pattern, a barcode, and rounded corners, with a subtle shadow. The caption is small grey sans text on an off-white page. The cursor is a small hollow circle, not an arrow.

### To recreate the look
Inferred from the footage, untested.
1. Pale, warm page with a single object in the middle: a beige scanner with a dark dot-matrix window and one lamp.
2. Let the pass hang loose above it and follow the cursor with a slight delay and a few degrees of tilt.
3. Give the scanner four states, each set by the window text and the lamp colour together: READY (grey), READING (amber), ERROR (red), SUCCESS (green).
4. Let the first tries fail. Make the user lift out and swipe again.
5. On success, throw the pass off to one side and fade everything out over half a second.
6. Run a slow bold-weight shimmer through the caption while waiting.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the pass following the cursor and the reading, error and success states
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the throw at the end
