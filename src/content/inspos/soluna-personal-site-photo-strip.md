---
title: "A personal site with a curved strip of photos"
url: "https://x.com/soluna_stensale/status/2120207360173941180"
source: "X"
credit: "Soluna Stensale"
type: "Web"
date: 2026-11-10
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2120144242597388289/img/tOoj6IG5C4Mu2a_L.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2120144242597388289/vid/avc1/1276x720/GNnC7mofqO89dhGV.mp4?tag=29"
alt: "A near-white page with a small logo and a few lines of text in the middle, and a curved strip of overlapping photos rising from the bottom edge."
sample: false
---

### What happens
A screen recording of a pitch page on a warm off-white ground (about #faf8f4, approximate). The page is a single narrow column of small grey text, and the rest of the window is empty. A small mouse pointer drifts in the empty area and a thin scrollbar appears at the right when the page scrolls.

- 0.0s. A small logo mark and word at the top, a two-line heading ("On your upcoming brand") and a short paragraph. Nothing else.
- 0.3-1.3s. A strip of photo cards rises from the bottom edge of the view. At first it is a flat, thin row of small photos and it curves up and widens into the top of a sphere, then fills out into a full ball made of overlapping photo tiles (pink and green food, flowers, matcha, a person). The tiles are slightly tilted and overlap like scattered prints.
- 1.5-4s. The sphere settles in the column under the paragraph.
- About 4-9s. The page scrolls. The sphere moves up with the page and the photos on its face change as it goes, which reads as the ball turning while the page moves. A scrollbar shows on the right. A second paragraph and a bold line ("A creator-led brand only works when it feels bigger than merch.") scroll into view below it.
- About 9-14s. A wide band of project screenshots comes up (a clothing store page, then t-shirts). A pointer hovers over it and a "View project" label appears. The band slides sideways and the next item (a pale card in someone's hand, then a grey photo with large white pattern letters) arrives with horizontal motion blur, while the earlier items blur out at the edge.
- About 15-24s. A click opens a case page for "Nothing" (a status bar with a link address shows at the bottom left for a moment). The page loads as a fresh page with the same logo at the top, a heading, text, then an image panel. As it scrolls, panels follow: product grid, a dark portrait, a row of tall colour stripes (black, red, yellow, navy, grey) with rotated labels, a pale card.
- About 25-37s. A second case page, "Body by Raven Tracy". A photo in a locker room, then a long mosaic of tiles in lilac and green: bodies, a logo, a circled B, a dotted chart, a screenshot of a store. The tiles are flush and of several sizes.
- About 40-45s. A "← On your upcoming brand" link at the foot of the case page. Click, and the first page comes back at its top.
- 45-48.6s. The strip of photos rises again and becomes the sphere. The clip ends where it started, so it works as a loop.

### Timing and feel
The sphere build takes about 1s and looks like ease-out. The face of the sphere changes at the pace of the scrolling. The side-sliding band has quick motion blur and looks like ease-out. Page changes between the home page and the case pages look like a straight swap, with a short blank moment on one frame. With 1.25s steps I can't tell if there is a fade. All interaction in the clip is the pointer and scroll. Nothing autoplays except the sphere's first build.

### What it is made of
Off-white ground, small grey sans-serif body text, black headings. The photo sphere is a ball made of many overlapping rectangular photos with soft white edges. The case pages are mostly full-bleed image tiles. No gradient or glow is visible. Whether the sphere is a true 3D object or flat tiles warped to look round is not clear from the frames.

### To recreate the look
Inferred from the footage, untested.
1. Keep the page almost bare: logo, a two-line heading, a short paragraph on off-white.
2. For the first screen, bring a row of 40 to 60 small photo cards up from the bottom edge, curving them onto a ball over about a second.
3. Tie the ball's rotation to scroll position, so the faces change as the page moves.
4. Show projects as a wide horizontal band. Slide neighbours in with horizontal blur and show a small "View project" label on hover.
5. Make each case page a column of text and full-width image tiles, with a back link at the foot that returns to the top of the first page.
6. End the recording on the start state, so it loops.

The poster describes it as "the interactive globe represents her world and vision". They don't say how it was built.

### Skills to try

- [threejs-animation ↗](https://github.com/iart-ai/webgl-animation-skills/tree/main/skills/threejs-animation): a photo strip curling into a sphere
- [gsap-scrolltrigger ↗](https://github.com/greensock/gsap-skills/tree/main/skills/gsap-scrolltrigger): turning the sphere as the page scrolls
- [vercel-react-view-transitions ↗](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions): swapping case pages
