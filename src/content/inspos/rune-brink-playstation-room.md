---
title: "A PlayStation on a glass table in a dim living room"
url: "https://x.com/spogelsemaskine/status/2107175855713619988"
source: "X"
credit: "Rune Brink / Spogel"
type: "3D"
date: 2026-10-05
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2107175775770206209/img/ppnh5q1S9zPqU1T4.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2107175775770206209/vid/avc1/960x720/TE1CMSKGyoPSzacX.mp4?tag=29"
alt: "A grainy low-resolution room: a grey PlayStation, controllers and an overflowing ashtray with a line of smoke on a glass coffee table, with a leather sofa and a plant behind."
sample: false
---

### What happens
The post's only text is "boot me up". The scene is a dim living room seen from above and to one side: a grey PlayStation on a black glass coffee table, two controllers, game discs, a full ashtray, a tan leather sofa, a monstera plant and a flat-screen TV. A thin white thread of smoke rises from the ashtray the whole time and wobbles as it goes.

0.0-1.8s the camera sits in front of the table with the TV screen black. It drifts slowly sideways and closer.
About 1.8-2.4s the screen goes grey, then flashes pure white.
2.4-4.8s the camera starts to swing round the table to the left. The TV screen is white with a small yellow and red diamond tumbling on it. The plant comes between the camera and the table and covers part of the view.
4.8-9.0s the camera keeps going round behind the TV. We see the black back of the set, with a glowing yellow box shape on the near side. The sofa and a power strip with a blue-purple light fill the background. Smoke still rises.
9.6-10.8s the camera swings back to the front. The screen is white again and now reads "SONY" with the diamond.
12.0-13.8s the screen cuts to black with the red and blue PlayStation logo, then the logo plus "PlayStation" and small licence text below it. The logo is also reflected, upside down, in the glass table top.
14.4-19.8s a second trip round the back of the TV, a bit faster, same views as the first.
19.8-23.9s the camera comes back to the front and settles close to where it started. The TV is black again.

### Timing and feel
It reads as one continuous camera move, a bit more than two laps of about 10s each, not a cut. Easing looks like a slow, steady glide with soft starts and stops (looks like ease-in-out), not a snap. The screen changes are hard cuts: black to grey to white happens in under a second, and white to black with the logo is an instant swap. The smoke is the only thing that moves while the camera is still. I can't tell from 0.6s samples whether the boot screens are in sync with the camera or just happen to line up. It ends near where it began, so it may loop, but I can't confirm that.

### What it is made of
Real-time-looking 3D with a deliberately cheap finish: jagged edges, visible dithering and noise in the shadows, and a low-resolution look even at 1920x1440. The mood is a late-90s console room. Most of the frame is near black. Colour comes from the sofa (warm tan, about #8a7766, approximate), dark green leaves, a blue-violet glow on the ashtray and sofa (about #4a3fd0, approximate) and the TV screen. The glass table reflects the screen and the console. The smoke is a thin white ribbon with a soft edge, drawn as a flat trail, not a cloud. The yellow box seen from behind the TV is unclear from the frames: it might be light from the screen or a part of the set.

### To recreate the look
Inferred from the footage, untested.
1. Build one small, dark room with a few strong props: a console, a glass table, a leather sofa, a plant, a full ashtray. Keep the black areas large.
2. Light it mostly with one blue-violet source low on the sofa and the TV, so the screen is the main light.
3. Render at low resolution or with visible dithering so edges stay rough. Don't smooth it.
4. Keep a thin, looping smoke ribbon rising from the ashtray the whole time. It carries the shot while the camera moves.
5. Move the camera in one slow orbit around the table, passing behind the TV and the plant, so objects slide in front of the view.
6. Cut the TV between black, white, the maker's name and the console logo with hard cuts, not fades.
7. Add a reflection of the screen in the table top.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): the slow orbit around the room
- [particle-system ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/particle-system): the smoke wisp
