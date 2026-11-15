---
title: "An isometric basketball court in pixels"
url: "https://x.com/zzzzshawn/status/2111546123546661289"
source: "X"
credit: "shawn"
type: "Illustration"
date: 2026-10-17
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2111545992235659264/img/j09E0LAJeWRrEwYm.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2111545992235659264/vid/avc1/774x720/ICYSn1jmAowQj1KY.mp4?tag=29"
alt: "A small isometric pixel-art basketball court with a blue key and white lines, grass at the edges, a hoop at the back and three tiny players, on white."
sample: false
---

### What happens
The post's only text is "Small plays - Basketball". The frame is a fixed isometric view of a small pixel-art street court floating on a white page. Asphalt court with white lines and a blue key, a rim of grass and dirt with jagged pixel edges, a hoop and backboard at the back right on a dark pole, a wooden bench and a blue bin behind it. Three to four tiny players in yellow, red, white and green kits move on it the whole time.

0.0-18.8s the camera never moves. The players walk and run in loops around the key and the three-point arc, passing, dribbling and spreading out. They swap positions, and the ball is carried by whoever is nearest. Each has a cast shadow to the lower right that follows them.
About 4.5-5.5s a ball goes up to the hoop. It appears at the backboard, then at the rim.
About 9.5-11.0s a second shot. The ball is at the rim at 9.5s, lower down near the bench at 10.0s, up again above and left of the hoop at 10.5s, and back at the rim at 11.0s. I can't tell from the samples whether it goes in.
The clip ends mid-play, with the players in a different arrangement from the start. I see no seamless loop.

### Timing and feel
The players move smoothly at 60fps. Nearly every frame differs, so this is not stepped or low-frame-rate animation, even though the art is pixelated. The pace is a relaxed jog, with no sudden stops. The ball arcs look natural and take about a second. The court itself is still. The motion is the point: tiny figures, a lot of white space around them.

### What it is made of
Pixel art with large visible pixels, drawn in a limited palette. Court blue (about #2f5a6e), asphalt grey (about #4a4a4a), white line colour (about #e8e8d8), grass green (about #5a8a3a), brown bench, dark navy pole, and a white backboard with a red border. Edges of the grass are dithered. The asphalt has a speckled texture and the lines are slightly worn. The players are drawn finer than the court's pixels would suggest, so they read as small sprites with shading, not as blocks. Shadows are hard-edged, dark blue-grey. The background is plain white.

### To recreate the look
Inferred from the footage, untested.
1. Draw a small isometric court as one tile floating on white: a flat key colour, speckled asphalt, thin white lines and a ragged grass edge.
2. Add props at the back (hoop on a dark pole, a bench, a bin) so the court has a clear top and a point to aim at.
3. Make three or four small figures in distinct kit colours with a walk cycle and a dribble, each with a hard shadow in the same direction.
4. Fix the camera. Move only the players, on loose loops, and let a ball arc to the hoop every few seconds.
5. Keep all of it at one pixel scale and leave a wide white margin.

### Skills to try

- [isometric-animation ↗](https://github.com/iart-ai/explainer-video-skills/tree/main/skills/isometric-animation): the fixed isometric court
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the players' run loops and the ball arcs
