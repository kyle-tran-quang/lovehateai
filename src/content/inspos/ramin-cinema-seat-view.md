---
title: "A cinema app that shows the view from your seat"
url: "https://x.com/RaminNasibov/status/2119378104892211287"
source: "X"
credit: "Ramin Nasibov"
type: "Interface"
date: 2026-11-08
imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/2119378067571331072/pu/img/gEFqi5k5gTDDNj4x.jpg"
videoUrls:
  - "https://video.twimg.com/ext_tw_video/2119378067571331072/pu/vid/avc1/480x1040/mNMrF7UlmI4FVSwL.mp4?tag=12"
alt: "A grid of rounded seats on black, rows lettered B to G down the left edge, with some seats lit pale grey and the rest dim."
sample: false
---

### What happens
The clip shows a dark phone screen with no device frame. It is a seat picker for a screening ("Meridian, Hall 3 · Fri 14 Nov", time chips 17:30, 19:45 IMAX, 22:15) with a curved screen line at the top and rows A to I of small rounded seats. A legend (Available, Taken, Recliner, Selected) sits under the grid and a "Continue" button at the bottom. A person picks three seats in turn. Each pick plays the same sequence.

- 0.0s. Seat map at rest. Continue is greyed out and reads "Choose your seat".
- 0.75s. A grey touch circle lands on a seat in row B.
- 1.0-1.5s. The seat turns green and the bottom bar changes to "Row B · Seat 4, €12.50" with a green Continue button.
- About 2.0-3.0s. The seat map starts to turn. The curved screen line bends, the seats grow and turn from grey dots into red cinema seats, and the camera tips from looking straight down to looking along the rows, ending at the chosen green seat. The UI chrome fades out as this happens.
- 2.7-3.5s. We see a lit screen with a desert photograph, skewed by perspective, then it settles. A small pill reads "View from B4" and a round back button sits top left.
- About 3.5-4.5s. A bottom sheet slides up. It has a small green caps label ("UP CLOSE"), the seat name, then three figures (6.3 m to screen, 86° field of view, 2.2 m left of centre). It has two buttons: "Change seat" and a white "Book · €12.50". A mini seat plan sits top right.
- 5.25-6.75s. A touch on "Change seat". The sheet drops away and the camera lifts and pulls back to an overhead view of the red seats with the green one marked, then the grey seat map returns by about 7.5s.
- Same sequence for row F, seat 8 (tap at 8.25s, view 11-13s, label "SWEET SPOT", 9.8 m, 60°, 0.3 m) and for row I, seat 12 (tap at about 16.5s, view 18-21s, label "FULL PICTURE", 13.3 m, 45°, 3.3 m, €16.00). The camera view gets farther from the screen each time.
- 22.5-25.6s. After the last "Change seat" the map returns with I12 selected and the clip ends there. The start has no selection, so it is not a clean loop.

### Timing and feel
Tap to green seat is about 0.3s. The map to seat view move is about 1.3s and looks like one continuous ease-in-out camera move, not a cut. The sheet slide is about 0.4s, ease-out, with no clear overshoot. Each seat view is held for about 3s before the next tap. The user input is shown by the touch circle only.

### What it is made of
Near black UI, about #0e0e10. Seats in the plan are grey (about #3a3a3e), with taken seats dim red. Selected is a light green, about #6fe3a0, approximate. The 3D view has deep red velvet seats (about #a01820, approximate), a black hall, and a warm beige desert photo on the screen. Small white and green text with a mono caps style for the labels. The perspective seat view looks like a rendered 3D scene that matches the plan layout, but I can't tell whether it is a live 3D scene or pre-rendered frames.

### To recreate the look
Inferred from the footage, untested.
1. Draw the seat plan as a grid of rounded squares in dark grey with a single green accent for the selected seat.
2. On tap, change the seat to green and enable a green Continue button in the same 200-300ms.
3. Build a matching 3D hall with the same seat layout and one lit screen. Move a camera from top-down to the chosen seat at eye height in about 1.3s with ease-in-out, while the plan UI fades.
4. Bring in a bottom sheet with the seat name and three stats once the camera stops.
5. Reverse the camera move for "Change seat".

The poster's words are "Cinema app design that shows you the view from your seat before you book." They didn't say how the motion was made.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): the camera move from the seat plan to a seat's view
- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the bottom sheet that follows
