---
title: "Joby Sans, a custom typeface for an aviation company"
url: "https://x.com/BrunoArizio/status/2121250962505388133"
source: "X"
credit: "Bruno Arizio"
type: "Brand"
date: 2026-11-13
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2121226186080530432/img/kC90fVpSxwgdxers.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2121226186080530432/vid/avc1/1280x720/1xygGSnaLhIqVf7P.mp4?tag=29"
alt: "The words “Joby Sans” in a light humanist sans serif, white on black."
sample: false
---

### What happens
A type specimen film made of quick scenes, mostly hard cuts, with a few cut-in scenes where the type itself moves. The poster's whole post is "custom type for @jobyaviation", so everything below is what is on screen.

- 0.0-0.4s black, then "Joby Sans" appears in cream, centred. It scales up about 2x in under 0.2s.
- 0.5-2.0s alphabet blocks step through three sizes (Display large, Display medium, Text small), each held about 0.5s. A grey, dimmed state fades up to full cream as each one lands. A tiny label at the bottom names the cut.
- 2.5-4.0s "Let's Fly / Departures / Fast Travel" in oblique. The weight rotates between lines: first light, regular, bold, then bold, bold, light, and back. The line widths change with it. Small numbers at the right edge (300, 500, 700) name the weight.
- 4.5-5.5s a black grid with two white curve strokes that meet in a point, square handle nodes on them. It cuts to a blue field zoomed into the same curve, then to a full "B" outline with node dots, guides and a blue ground.
- 6.0-7.0s "b 3 G y" in a row with faint blue construction lines under them.
- 7.0-9.0s one huge glyph on the left (A, I, C, G, M, Y) against baseline, x-height and cap-height lines, with a glyph grid on the right. The grid cell for the current letter is inverted (cream fill, black text). The letter changes about every 0.5s.
- 9.5-10.0s a blue slide. "Flight", "Lift", "Altitude" and so on appear line by line, up to ten words by about 10.0s.
- 10.5-11.5s black. One enormous glyph ("4", "y", "2") flicks through over dense columns of tiny vocabulary words.
- 11.5-13.0s "Manhattan / OK→00:11! / In 7m". The digits change between frames (00:0, 00:8, 00:00?). A "Test Flight (56°F) 195 mph" block does the same and lands on 200 mph.
- 14.0-15.5s three cream slides, "JFK ⌒ Manhattan", "DXB ↷ Dubai Marina", "LAX ↷ Downtown LA". The curved arrow glyph differs from slide to slide.
- 15.5-17.5s black. "Traffic into Air" types in, with thin vertical lines marking each letter position.
- 17.5-20.5s cream. "Traffic into Air" repeats in a ladder of six lines that get larger and heavier going down. The ladder drifts upward.
- About 21s ends on black.

### Timing and feel
- Cuts are on a steady beat, about 0.5s per beat. Most look like hard cuts. Only the wordmark scale-up and the grey-to-cream fade have easing, and they look like ease-out.
- The weight rotation and the digit flicker run at a few steps per second, not smooth animation, and look stepped or chopped.
- No loop. No interaction.

### What it is made of
- Colours (approx.): black #000, warm cream #f0f2dc for type, a second slide ground of the same cream, and two blues, about #0a7be0 and #2f9cf5.
- One humanist sans in several weights, with an oblique set and a matching display cut. Tiny labels in the corners name the specimen, cut and section.
- Specimen furniture: guide lines for baseline, x-height and cap height, a glyph grid with an inverted active cell, a bezier close-up with square handle nodes, a blueprint-style blue slide.
- Whether the weight changes are a variable axis or separate cuts swapped per frame is not clear from the frames.

### To recreate the look
Inferred from the footage, untested.
1. Build a deck of slides on one beat of about 0.5s. Use hard cuts and keep the odd soft fade for contrast.
2. Alternate black and cream grounds with one saturated blue slide for the outlines and vocabulary.
3. For the glyph walk, show one large letter against guide lines. Invert its cell in a glyph grid and step to the next letter every beat.
4. For the weight lines, set three lines in the same oblique and rotate which line is lightest and which is boldest over three or four steps.
5. For the live-data slides, change digits in a few steps before settling on the final value.
6. End on a ladder of one line repeated in growing sizes and weights.

### Skills to try

- [kinetic-typography ↗](https://github.com/iart-ai/kinetic-typography-skills/tree/main/skills/kinetic-typography): weights rotating between lines, variable-weight animation
- [beat-sync-editing ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/beat-sync-editing): cutting a specimen on a steady beat
