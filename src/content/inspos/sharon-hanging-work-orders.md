---
title: "A personal site with work orders hung on a ring"
url: "https://x.com/yungudon/status/2119076735182602494"
source: "X"
credit: "sharon"
type: "Web"
date: 2026-11-07
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119076683185520641/img/ltEmHhZBtTUAU5Ip.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119076683185520641/vid/avc1/1200x1080/_BTMx9DAX7obhEGm.mp4?tag=29"
alt: "A white room with a circular rail from which paper work-order slips hang on hangers, in pastel colours, each stamped with a project number and words such as “On hold” and “Rush”."
sample: false
---

### What happens
A white 3D room. A round steel rail hangs from rods above and from it hang paper work-order slips on wire hangers in clear sleeves. Slips are pastel (yellow, lilac, blue, green, peach). Each has a red "P 1008" style number, "PROJECT 008", a client line, a date, a ticked grid and a big handwritten status stamp: "ON HOLD", "RUSH!", "DONE!", "47% DONE", "88% DONE". A faint shadow of the ring and a floor grid shows on the floor. The camera is slightly above the ring and looking down.

- 0.0-9.0s. The ring turns steadily. The front slip steps through 1008, 1007, 1006, 1005, 1004, 1003, 1002, then 1001 at about 9s, about 0.75s per slip. Slips swing a little on their hangers, and the ones at the sides turn edge-on and look thin. The nearest slip is large and readable and the ones behind are small.
- 9.0-14.0s. The turning goes on past 1012, 1011 and 1010. 1010 ("88% DONE") is at the front at about 12-13.5s and the rotation slows there.
- 14.0-15.5s. The camera drops from above the ring down to eye level and a little to the side, moving towards the rail. The ring flattens into a straight line of slips, the floor grid and shadow come into view and the slips get small.
- 15.5-18.0s. Low, wide view. The row of slips drifts sideways, and some slips swing.
- 18.0-19.5s. The camera comes back up and swings around, close to the rail again. A pointer arrives over slip 1002, which is on its own at the front. A small dark tooltip appears under it with "PRJ-1002 Project 002 · Project".
- 19.5-24.9s. The camera sits above the ring again and the ring turns, going from 1002 and 1003 to 1001 and 1012 at the end. The clip does not return to the very first frame, so it is not a clean loop.

### Timing and feel
Ring turn is about 0.75s per slip, ease-in-out with a slight slow-down near each front slip, and it looks continuous. Camera dive and return are about 1.5s each and look like ease-in-out. Hanging slips swing and trail like a damped pendulum, with a little overshoot. The hover tooltip appears in about 0.2s. A pointer in the frames shows a hover, and there is a small ring cursor at the lower left of the screen.

### What it is made of
Near-white ground (about #fdfcf8, approximate). Brushed steel rail and rods with soft reflections. Wire hangers. Paper slips with clear plastic sleeves that look slightly glossy. The slip print is a small mix of blue and red print, a thin grid and a heavy brush-script black stamp. The floor has a pale grey shadow of the ring and grid. Soft contact shadows. It looks like a real-time 3D scene, but the frames don't prove it.

### To recreate the look
Inferred from the footage, untested.
1. Design 12 slips in a pastel set, with a red number, a project name, a form grid and one big handwritten status per slip.
2. Hang them from a ring on hangers, each in a clear sleeve, and rotate the ring about one slip per 0.75s.
3. Let each slip swing with a damped pendulum as the ring turns.
4. Move the camera from a high three-quarter view to a low, side-on view along the rail in about 1.5s, and back.
5. On hover over a front slip, show a small tooltip with the project code.
6. Add a pale shadow of the ring and a grid on the floor.

The poster's only words are "not me working on another personal website". They don't say how it was made.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): a ring of hanging slips and the camera drop
- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the hover tooltip
