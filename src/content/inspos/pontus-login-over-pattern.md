---
title: "A login screen over a dark ornamental pattern"
url: "https://x.com/pontusab/status/2119865335990141433"
source: "X"
credit: "Pontus Abrahamsson"
type: "Interface"
date: 2026-11-09
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119865149884641280/img/ZS5qJrBoM9Oa-RvX.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119865149884641280/vid/avc1/1108x720/J2ZSM7aLpSgAkAk4.mp4?tag=16"
alt: "A dark window with a faint grain pattern of looping ornament, and a small centred panel reading “The AI workspace where knowledge compounds” above a sign-in button."
sample: false
---

The poster's caption is "first impressions matter." No method was given.

### What happens
A desktop-style window (traffic-light dots at top left, soft shadow, white page around it) shows a sign-in screen. A small centred panel holds an app icon, the line "The AI workspace where knowledge compounds", a light button that reads "Sign in with Ramp" and two lines of legal small print. The panel itself looks fixed for the whole clip. All the movement is in the background, which is a field of fine light grains on near-black.
- 0.0-2.0s: the grains sit along a few thick curved lines in a lantern shape, with the outline running around the panel.
- 2.0-2.5s: the lines break up. Grains scatter into a soft swirl and the shape is gone for roughly 0.5s.
- 3.0-14.0s: the grains regroup into a denser pattern of looped, bulbous shapes that repeats across the window like ornamental tile, mirrored left and right. It then stays that way for about 11s. Looking closely, line positions shift a little between frames, so it seems to breathe. Individual grains sparkle at the edges.
- 14.0-14.5s: another break-up, with grains scattering across the window.
- 15.0-16.1s: a third pattern forms, with large ovals and wide lens shapes at left and right, much sparser than the second one.
The area around the panel is darker, like a circular shadow that stays in place, so the pattern fades out as it nears the text.

### Timing and feel
Dissolves take about 0.5s. Formation looks like a quick settle, with the grains rushing into place and then slowing. Hold times vary from about 2s to about 11s. No cursor or input is shown. I can't tell whether the pattern is following sound, time or a hidden mouse. It could be a loop, but I only see three patterns in 16s, so I can't say where it would repeat.

### What it is made of
- A near-black ground (about #151513) with a slight warm tint.
- Light grey grains (about #cfcfc8 approx), thousands of them, forming outlines about 8-14px wide at this resolution.
- A dark circular vignette around the centre panel.
- A rounded light button (#d9d7d2 approx) with dark text, white heading text, an app icon with a pale rounded square.
- A window frame with three coloured dots and a drop shadow, around the whole screen.

### To recreate the look
Inferred from the footage, untested.
1. Fill a dark window with a fine light particle field. Let particles sit on the lines of a symmetric pattern, like sand on a vibrating plate.
2. Build three or more patterns: a lantern shape, a dense looping lattice, and a sparse oval layout. Mirror each across both axes.
3. To change patterns, scatter the particles into noise for about 0.5s, then pull them to the new lines over about 0.5s.
4. Hold the dense pattern much longer than the others and add a very slow drift to it so it stays alive.
5. Darken a soft circle behind the panel so type stays readable. Keep the panel static.

### Skills to try

- [particle-system ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/particle-system): grains that scatter and re-form into patterns
- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): doing it on the GPU with many grains
