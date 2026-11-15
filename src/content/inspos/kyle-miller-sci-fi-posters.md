---
title: "A wall of sci-fi tech posters"
url: "https://x.com/kyleanthony/status/2119057547416211885"
source: "X"
credit: "Kyle Anthony Miller"
type: "Poster"
date: 2026-11-07
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119057384387592192/img/nUBTpHzxOXQB_oeL.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119057384387592192/vid/avc1/720x900/myztfCBtAQddzbYu.mp4?tag=29"
alt: "A grid of poster tiles in pink, black, green and orange with technical type, including “Intelligence Compute”, “CMD-1”, “Observation Corp NYC” and “Super Intelligence”."
sample: false
---

The poster's caption is "Design work lately". No method was given.

### What happens
A tour of nine posters, one after another, then back to the whole wall.
- 0.0-1.0s: a 3x3 grid of square posters fills the frame with no gaps. Row 1: a pink and yellow colour-block poster ("More Intelligence Less Compute"), a silver jacket seen from behind ("STARONE"), a pale poster with an "ace" logo. Row 2: "CMD-1", "SP-01", "AD-1". Row 3: a "Cyclops" eye emblem, "Observation Corp NYC", "Super Intelligence". The grid is still, apart from a faint downward drift of the top row.
- 1.0-2.3s: the top-left poster grows to fill the whole frame. The other eight scale out of view with it, so it reads as a camera push into one tile. Pink headline and colour blocks drift down a few pixels while this happens.
- 2.3-3.3s: the pink poster holds. Its text block and blocks shift slightly, a slow settle.
- Then each poster takes the frame in turn, about 1s each: jacket (about 3s), ace logo (about 4s), CMD-1 (about 4.7s), SP-01 (about 5.7s), AD-1 (about 6.7s), Cyclops (about 7.7s), Observation Corp (about 8.7s), Super Intelligence (about 10s).
- Changes between posters are a vertical push: the next poster slides up from the bottom while the current one leaves, and for a few frames the edge of each shows. They look like quick cuts with 0.1-0.3s of overlap, not a long dissolve.
- 11.7-12.8s: the frame pulls back out to the full 3x3 grid, which holds to the end. It matches the first frame, so it could loop.

Motion inside the posters, seen in the frames:
- Jacket: the black bar-graph shape on the back changes height from frame to frame, like an audio waveform expanding from the centre.
- ace: yellow dots around the logo change position between frames, as if circling it.
- CMD-1: two overlapping circles, one rust and one teal, slide horizontally against a scanline fill. A clock-style counter reads "T+ 004:18:32". It seems fixed in the frames I have.
- SP-01: a noisy grain ground with soft light beams moving behind green type.
- AD-1: a halftone dot field in green to yellow to orange shifts slowly under big red-orange letterforms.
- Cyclops: a red-orange eye emblem on black with small green corner brackets and yellow coordinate text.
- Super Intelligence: stacked red bars shift sideways and the word block moves on the grid.
I can't see how fast most of these internal movements are, at 3fps.

### Timing and feel
About 1s per poster, 12.8s in all. The push in and out at the ends looks like ease-in-out. Between posters it looks closer to ease-out, fast and sudden. No cursor and no scroll indicator appear, so it reads as a scripted sequence rather than an interaction.

### What it is made of
Static posters in different graphic languages: flat colour blocks with a serif headline (pink #f06ad8, yellow #f7e000, blue, green; approximate), photographic silver jacket on black, a pale grey logo card, dark green-black with a monospaced readout, halftone dot field, vector emblem, black and white pixel type, red-orange stripe type on near-black. Small technical type, registered marks and coordinates appear across most. The transitions are plain scales and slides. No 3D camera or blur is visible.

### To recreate the look
Inferred from the footage, untested.
1. Make nine square posters, each in its own palette, but sharing small technical type (codes, coordinates, ® marks).
2. Lay them in a 3x3 grid with no gutters and a black ground.
3. Scale the grid so that one tile fills the frame, hold about 1s, then push the next tile up from below. Repeat across all nine in reading order.
4. Add one small movement in each poster, such as a changing waveform, orbiting dots or sliding bars, so each one is alive while it is held.
5. End by scaling back to the full grid so the clip can loop.

### Skills to try

- [gsap-core ↗](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core): pushing into each tile and pulling back out
- [canvas-design ↗](https://github.com/anthropics/skills/tree/main/skills/canvas-design): the posters themselves
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): easing the one-second push and return
