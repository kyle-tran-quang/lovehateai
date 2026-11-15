---
title: "Looping rings and a cursor, for a research project on rare disease"
url: "https://x.com/nicforey/status/2119850582907535604"
source: "X"
credit: "nico frey"
type: "Interface"
date: 2026-11-09
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119850505857892352/img/H-t9UzSny02xIfqW.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119850505857892352/vid/avc1/960x720/JY2AuLoc23cqamZR.mp4?tag=29"
alt: "A white page with large looping outlines in soft grey and blue, a few small dark dots at the centre of each loop, and a black arrow cursor in the lower middle."
sample: false
---

The poster's caption reads "playing with interactive cursors in my research project about rare disease clusters". That is the only method detail given.

### What happens
A near-white page (#f5f5f5 approx) is covered in clusters of concentric grey outline rings, each with a small dark dot at its centre. Two clusters merge into a figure-8 outline at the top left. A black arrow cursor moves over them.
- 0.0-0.3s: the cursor sits just above a ring cluster at the bottom of the frame. Within 0.25s the cluster takes a blue-violet outline with a soft halo, the cursor turns blue, and a small pill appears beside it reading "SIM 0.25 SHARED 38".
- 1.0-1.5s: the cursor leaves. The blue clears from the ring and the pill fades out. The cluster goes back to grey.
- 1.5-2.7s: the cursor lands on the cluster at the left. It turns blue and the pill reads "SIM 0.19 SHARED 30".
- 2.7-3.5s: the cursor moves up to one lobe of the figure-8. The pill reads "SIM 0.11 SHARED 2". Only that lobe's rings turn blue. The other lobe stays grey.
- 3.5s: a click. The centre dot becomes a blue circle with a plus sign, and the pill changes to three parts: "ORPHA 2743", "0.11", "2". It holds for about 1.2s, then fades with its text cross-fading for a frame or two.
- 5.0-5.75s: the cursor moves to the other lobe. Pill reads "SIM 0.04 SHARED 10", then at the click "ORPHA 71212 / 0.04 / 10".
- 6.75-7.5s: back to the first lobe, "SIM 0.11 SHARED 2".
- 7.5-8.25s: to the left cluster, "SIM 0.19 SHARED 30", then a click and "ORPHA 529665 / 0.19 / 30".
- 9.0-9.85s: the pill returns to the hover form ("SIM 0.19 SHARED 30") and the clip ends.

### Timing and feel
Each hover reaction takes about 0.25s or less. Cursor moves between clusters take about 0.5s, and look like ease in and out of a human hand, not a linear path. The pill follows the cursor with a fixed offset down and right. Click state is held about 1s. No scroll or zoom happens, and the rings do not move. The first and last states are similar but not identical, so it is not a clean loop.

### What it is made of
- Concentric grey outlines (about #c8c8c8) in rounded blob shapes, with a faint red and blue fringe on the centre dots.
- A blue (about #2b6bff) used for the hover state: a ring outline, a thicker line, a soft outer halo.
- A pill label with a 1px blue outline, small caps text in grey and blue bold numbers, split into segments by thin dividers.
- A cursor arrow that changes from black to blue on hover.
- A plus-in-circle icon at the centre of a clicked cluster.

### To recreate the look
Inferred from the footage, untested.
1. Draw 6 to 10 clusters of 2 to 4 concentric organic outlines on a near-white page, each with a small dark dot. Merge two clusters into one figure-8 contour.
2. Keep everything grey and thin. Use blue only for hover and click.
3. On hover: recolour that cluster's rings blue, add a soft halo, turn the cursor blue and show a pill with two labelled values next to the cursor.
4. On click: replace the centre dot with a blue plus-in-circle and swap the pill for an ID plus the same two values. Cross-fade the text for about 0.1s.
5. Move away: fade everything back to grey within 0.25s.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): hover colour change, value pill and click response
- [svg-animation ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/svg-animation): ring clusters drawn and animated as SVG
