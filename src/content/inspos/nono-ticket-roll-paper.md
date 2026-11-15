---
title: "A roll of ticket paper printed with a pixel butterfly"
url: "https://x.com/nono_ai_archive/status/2120811339413402008"
source: "X"
credit: "노노아카이브"
type: "3D"
date: 2026-11-12
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2120807064012529664/img/k_Sb7xPvUcvWz4gd.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2120807064012529664/vid/avc1/720x960/pAS-uC2uZObCn6GT.mp4?tag=29"
  - "https://video.twimg.com/amplify_video/2120807117808693248/vid/avc1/720x960/GPEbNNETlZL4puef.mp4?tag=29"
  - "https://video.twimg.com/amplify_video/2120807091107758080/vid/avc1/720x960/Zk4lKWcFbyN2QbfN.mp4?tag=29"
alt: "A roll of perforated paper at the right edge of the frame, its printed face a pixel butterfly in pink, cyan and green, on a white ground."
tool: "Opus 5.5"
sample: false
---

The poster's caption (Korean) reads "ticket roll paper interaction & motion" and ends "(opus 5.5)". Nothing else about method was said.

### What happens
The three clips are one piece, shown in three states. Each has a small header at top left ("Graphic Ticket Roll Paper", "Graphic Ticket", "Graphic Ticket") and a counter at top right that changes word per clip: TORN, STACKED, TICKETS. The handle @nono_ai_archive sits bottom left. Ground is white throughout.

**Video 1 (29.3s), tearing tickets off a roll.** A roll of perforated paper sits in the upper right of the frame, with a cardboard core visible on its right end and a flat lavender-grey shadow behind it. A small pink dot with a dark outline is the cursor.
- 0.0-0.5s: the dot fades in at the bottom right, then drifts left and up to the printed ticket hanging from the roll.
- 0.5-1.3s: the dot sits on the ticket and drags it down. The ticket stays attached and slides further out of the roll.
- 1.3-1.7s: the ticket lets go. It tilts about 15-30 degrees, drops out of the frame towards the bottom left, and the counter goes from 00 to 01.
- Then it repeats with a new design hanging from the roll. A cycle is roughly 1.5s; the counter reaches 17 at about 26s.
- Some pulls end with a small "x" mark where the perforation was.
- 26-29s: the roll is gone and only the empty cardboard tube is left. The dot fades to a pale pink and sits still.
The ticket faces change each time: a pixel butterfly ("NEON GARDEN"), a pixel key, a blurred pink creature with a barcode, black pixel type ("PIXEL / SIGNAL NOISE") and a pink-blue gradient panel. Between pulls the roll also seems to change its angle slightly, but I can't say whether that is camera or object.

**Video 2 (6.4s), stacking.** Counter reads STACKED.
- 0.0-0.5s: empty white frame, then a heavily blurred ticket streaks in from the bottom right.
- 0.5-4.0s: a new ticket lands every 0.25-0.4s. Each arrives blurred and fast, then sharpens as it settles. Each lands on the pile slightly rotated and offset from the one below, with perforated edges showing. Counter goes 00 to 17.
- 4.0-6.4s: the stack of 17 holds still. A few frames repeat exactly, so there is no idle movement.

**Video 3 (11.5s), a wall of tickets.** Counter reads TICKETS 17.
- Three rows of small tickets fill the frame, each ticket a little rotated with a soft shadow.
- Rows 1 and 3 move left, row 2 moves right, all at an even pace. Over 2s a row travels roughly a quarter of the frame width.
- Tickets are cut off at both frame edges. The end looks close to the start, so it may loop, but the 0.5s sampling cannot confirm it is seamless.

### Timing and feel
- The pull in video 1 is pointer-driven: the dot leads and the paper follows. The release is fast with a tilt, looks like gravity with no bounce.
- Video 2 arrivals look like ease-out with strong motion blur at the start of each one. The blur is the main cue of speed.
- Video 3 looks linear.
- Whether video 1 is a recording of someone using it or a scripted sequence cannot be told from the frames. The cursor path is very regular, which hints at script, but that is a guess.

### What it is made of
- A 3D-looking paper roll with a cylindrical core, perforated edge cut into the paper, a flat offset shadow in pale lavender (about #d9dcea, approximate).
- Ticket art in pink (#ff5fb0 approx), cyan (#22c4ff approx), blue (#2a63ff approx), green, black, on near-white paper. Edges of the art are soft and slightly blurred, with a red-blue fringe on some pieces. Some have horizontal stripe or scanline-like distortion. Barcodes and small Korean and Latin pixel type appear on them.
- UI chrome is plain: small sans-serif header text, a large light-weight counter numeral at top right.
- Cursor: a ~15px pink dot with a dark ring.

### To recreate the look
Inferred from the footage, untested.
1. Build a white stage with a lavender flat shadow offset down and right of every object. No gradients on the ground.
2. Make a roll of perforated paper hanging from the top right, core visible on its right end. Give each ticket a stamp-style perforated edge.
3. Design 15 to 20 ticket faces in a shared palette (pink, cyan, blue, green, black), pixel type and barcodes, softened with blur and a slight RGB offset.
4. Pull: move a small cursor dot onto the ticket, drag down about one ticket-height, then release it with a 20-30 degree tilt and a fall off the bottom of the frame. Step the counter at the release.
5. When the last ticket is gone, show the bare core and let the cursor dot fade.
6. Stack: have each ticket fly in from the bottom right with heavy motion blur, 0.3s each, landing with a few degrees of random rotation and 10-20px of random offset.
7. Wall: tile the faces into three rows and slide them in alternating directions at constant speed.

### Skills to try

- [gsap-core ↗](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core): dragging a ticket off the roll and landing 17 into a stack
- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the pointer and the TORN counter
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the fast, blurred landing and the opposing row slides
