---
title: "Mantras on a tilted strip of cards"
url: "https://x.com/raunofreiberg/status/2119856840003797178"
source: "X"
credit: "Rauno Freiberg"
type: "Interface"
date: 2026-11-09
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119856686261260288/img/VIU4rrLMKJN5CUnv.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119856686261260288/vid/avc1/1238x720/hTjVCYBZZ-h2l7A3.mp4?tag=29"
alt: "A long strip of white cards running diagonally across a light grey page in perspective, each card carrying a short stack of black letters, with one card lifted out and labelled “Mantras” and an orange dot on another."
sample: false
---

### What happens
A light grey page (about #e9e9e9, approximate) fills with one long white strip that runs diagonally from the upper left to the lower right, tipped in perspective. Looking closely, it is a stack of white cards seen from the edge. Each card shows only a couple of black letters along the edge, so the strip reads as stepped rows of letters. A soft grey shadow falls under it. A header bar at the top has "00 • Mantras" at the left and "some things you perhaps needed to hear" with a small info mark at the right. A small orange dot also moves around the page. I can't tell from the frames whether it is the pointer.

- 0.0s. One card is pulled out of the strip towards the viewer, tilted flat and reading "Mantras". Everything else is a closed strip.
- 0.2-1.0s. The strip around that card dips and fans open. Neighbouring cards slide against each other and splay, so a few phrases overlap ("no more to be done", "better than before", "in hindsight"). The strip's edge is a stepped sawtooth.
- 1.0-1.5s. The fan closes up and a new card sits in front: "Output over process". It holds until about 2.5s.
- 3.0-4.0s. Dip and fan again, with "of necessary changes / it's the best thing over consistency" visible mid-move, then "Focus means saying no" settles at about 4.0s and holds to about 4.5s.
- 5.0-6.0s. Fan again, then "The best solution is obvious only in hindsight" settles at 6.5-7.0s.
- 7.5-8.5s. Fan again with "something unexpected / and take it seriously" and "better than before / no more to be done" visible mid-move.
- 9.0-10.0s. "Favour nuance over consistency" holds.
- 10.5-12.4s. "Mantras" is back. The clip ends on the first frame state, so it loops.

The orange dot sits in a different place each time (near the card, top left, top right, near the front card), so it moves between settles.

### Timing and feel
Each cycle is about 1.5 to 2s: a fast fan of about 0.5s, then a 1s hold. The fan looks like ease-in-out and the strip moves as one body, with cards offset by small delays so it ripples. The shape settles without a visible bounce. The cards slide along the strip. The camera and strip do not move. I can't tell what triggers each step, because the dot may be the pointer or a marker.

### What it is made of
White cards, plain light grey ground and a soft shadow, no colour apart from the orange dot (about #e8420c, approximate). Black grotesque sans-serif type in small sizes. The strip is shown in 3D perspective with a strong tilt. Text turns with the card in the front card and shows as stacked letter fragments in the strip behind. Whether the cards are a real 3D scene or CSS transforms is not clear from the frames.

### To recreate the look
Inferred from the footage, untested.
1. Stack 20 to 30 white cards edge to edge on a grey ground and tip the whole stack in strong perspective along a diagonal.
2. Print each mantra in black type on its card, so only the first letters show at the edge.
3. For one card, move it out of the strip towards the viewer, flat and readable.
4. To change cards, open a gap in the stack around the current card, fan its neighbours by small offsets with short stagger, and bring the next card forward.
5. Hold for about a second between moves, and finish on the first card.
6. Keep one small orange dot as the only colour.

The poster's words are "Some things you perhaps needed to hear", with a link. They don't say how the motion was made.

### Skills to try

- [gsap-core ↗](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-core): fanning the stack open and settling on a card
- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the card states
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): timing a new card about every two seconds
