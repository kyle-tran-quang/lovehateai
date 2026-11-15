---
title: "A round badge for an internet improvement department"
url: "https://x.com/willking/status/2114736247683916242"
source: "X"
credit: "Will King"
type: "Brand"
date: 2026-10-26
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2114735434517381120/img/ygMwMQZZZUuyzMo2.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2114735434517381120/vid/avc1/1280x720/zNz8fnWnV5p3vX_U.mp4?tag=29"
alt: "A blue grainy ground with a circular stamp in white and orange: “The Internet Improvement Department” and “Use it, break it, improve it” around a wireframe globe and a four-pointed star."
sample: false
---

### What happens
The post's text is "Day 1 → Internet Improvement Dept". Five scenes on a saturated cobalt blue ground (about #3540e8, approximate), cut at almost exactly 2.4s intervals.

0.0-2.4s a round stamp: a half globe drawn as a wireframe on the left, a four-pointed star on the right, both in orange-red (about #e8401c). White pixel-style text runs round it: "The Internet Improvement Department" and "Use it, break it, improve it, Cloudflare". It's still at first. From about 1.9s it starts to glitch: the star stretches vertically, the globe and the ring text shift in thin horizontal slices. Faint horizontal streaks cross the blue.
2.5-4.8s a hard cut to a large pixelated cloud in orange and cream stripes. The stripes slide diagonally between frames, the left part is full of speckled pixel noise and the right lobe breaks into blocks. It reads as a logo being scrambled.
4.9-7.2s a hard cut to a busy illustrated poster: a skeleton in a hooded robe with a scythe, a chunky retro mobile phone, a dark round object with an orange X, a beige retro computer whose screen reads "Internet Improvement Department", and heavy type: "Slashing your infra prices", "Your sites, your rule". Blue, orange and cream, with a pale blue offset behind the letters. It is nearly static, with small glitch slices.
7.3-9.6s a hard cut to red-orange tape bands crossing the frame diagonally, each carrying a row of small cloud icons and repeating text. A pixel-art computer with a smiling face sits behind them. The bands stay put.
9.7-19.5s a hard cut to a plastic ID badge hanging from a red lanyard with a metal clip, centred, on a grainy blue ground. The badge reads "Will King", "Internet Improvement" with a red "DEPT" block, and "Design" and "Engineer". It has red and blue blob shapes at the top. The badge stays in place for the remaining ten seconds. Every second or so a glitch hits it: a thin white horizontal line, a few rows of the artwork or the name shifting sideways, or the headline text wobbling for a few frames. Then it is clean again.

### Timing and feel
The scene cuts are hard, with no fades, on a 2.4s grid. That regularity may follow the music, since the audio is loud and has a clear mean level, but I haven't listened to it or analysed the beat. The glitches last two to four frames at 60fps, so they read as stutters, not slow distortions. The badge scene is the calm part: the badge doesn't swing or rotate that I can see. The last frames match the first badge frames, with no loop back to the stamp. Nothing here is triggered by a cursor.

### What it is made of
A strict three-colour-plus-cream palette: cobalt blue, orange-red, cream (about #f6efc8) and a lighter sky blue. Pixel type and mono type on the stamp. Tall condensed type on the badge and poster. Flat vector illustration with thick outlines on the poster. Pixel-art for the cloud and the smiling computer. The badge has a slightly photographic plastic sleeve with highlights, and the background carries visible grain. The glitch effect is slicing, offsetting and stretching, with a small colour offset on the poster type.

### To recreate the look
Inferred from the footage, untested.
1. Pick one saturated blue and one orange-red and use only those plus cream, from the first frame to the last.
2. Cut between scenes with no transitions, on an even beat of about 2.4s.
3. Start with a calm mark. After about two seconds, break it with a glitch: stretch one shape and shift thin horizontal slices of the artwork.
4. Show a logo or main object being scrambled into coarse pixels and stripes before the next scene.
5. Make one very dense scene, then one repeating pattern (tape bands crossing the frame), then end on a single clean object held for a long time.
6. On the final object, keep it still and fire short glitches every second or so: a thin line, a row shift, a wobble on the headline.
7. Put grain over the background so it doesn't sit flat.

### Skills to try

- [beat-sync-editing ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/beat-sync-editing): five hard cuts on a 2.4s grid
- [shader-glsl ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/shader-glsl): the glitch slicing on each cut
