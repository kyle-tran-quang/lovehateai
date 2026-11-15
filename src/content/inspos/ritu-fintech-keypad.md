---
title: "A fintech app with a plain keypad"
url: "https://x.com/BThreeAgency/status/2118686469267341525"
source: "X"
credit: "Ritu"
type: "Interface"
date: 2026-11-06
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2118686444135006208/img/FYRxjmSLPep2HEjG.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2118686444135006208/vid/avc1/720x900/VTixU0qWQjlo-2zl.mp4?tag=29"
alt: "A dark phone screen showing a large $0 balance, an account labelled “Onyx •• 4821”, and a keypad of numbers 1 to 9, on a white ground."
tool: "Claude"
sample: false
---

### What happens
A phone mockup floats on a light grey ground (about #f0f0f0). The app is dark, near black with a faint blue tint.

- 0.0s. The "Add money" screen shows a dimmed grey "$0", an account line ("Onyx •• 4821"), a 3x4 keypad and a "Swipe to top up $0" bar at the bottom.
- 0.5-1.5s. Three taps. A grey touch circle lands on 1, then 0, then 0 again. The big amount goes $1, $10, $100 and turns from dim grey to white on the first tap. The swipe bar label updates with it. At a 0.5s sample I can't tell whether the digits roll or just swap.
- 2.0-3.0s. The account line scrolls like a wheel. "Onyx" slides up and out while "Travel •• 9910" slides in from below, with a neighbouring row faintly visible. It lands and sits still.
- About 3.2-3.5s. The white round thumb in the swipe bar is dragged to the right end. A dark green fill trails behind it and the label fades out. At the end the thumb turns bright green.
- About 3.9-4.5s. The whole screen blurs, including the amount and the keypad. A small square and the mono caps label "PROCESSING DEPOSIT" appear in the middle. From the bottom edge a blurred colour field rises: green on the left, cream in the middle, red on the right. It grows to cover about the bottom quarter.
- 4.5-6.0s. Hold. The colour field sits there with slight drift.
- About 6.0-6.3s. The colour field surges up to cover most of the screen, the label flips to a tick and "DEPOSIT CONFIRMED", then the colour drains to a dim red and green haze by 6.5s.
- 7.0-7.5s. A dark metal card ("vael", "ONYX") comes in blurred and slightly tilted, then sharpens and straightens. A green pill "DEPOSIT CONFIRMED" sits above it. The amount under the card counts up through random-looking values ($67.31, $29.77, $75.91, $95.51) and lands on $100.00 at about 8.0s. A "Balance $186.40" chip and a white "Done" button are there by then.
- 8.0-12.9s. Hold with idle motion. A grey touch circle moves over the card and the card tilts a few degrees toward it, with a soft light patch following the touch point. By about 12s the touch is gone and the card is flat. The clip ends there. It does not visibly loop.

### Timing and feel
Taps are about 0.5s apart. The account wheel takes about 0.5s and looks like ease-out. The swipe is quick, about 0.3s, and looks linear while the finger moves. The blur-in is about 0.4s. The colour field rises over about 1s, looks like ease-out, then bursts in about 0.3s. The card entrance looks like ease-out with no clear overshoot. The count-up runs about 0.5s. All of it is scripted: the touch circle is the only sign of input.

### What it is made of
Light grey ground, phone bezel in dark grey with a soft shadow. A sans-serif UI face for the numbers. A mono caps face for the status labels. White amount text. Green accent about #3dd68c, approximate. Red about #e8392c and cream about #f3dcc0 in the colour field, both approximate. The colour field is a large heavily blurred shape set against a blurred copy of the UI. The card has a faint grain and a lit patch that follows the touch. Whether the card is a 3D model or a flat image with a tilt is not clear from the frames.

### To recreate the look
Inferred from the footage, untested.
1. Build the keypad screen on near black and animate a grey translucent circle onto each key as a tap, 150ms in, 150ms out.
2. Make the account row a vertical wheel: old row slides up and fades, new row comes from below, about 400ms ease-out.
3. Drag a white thumb along a track, filling the track behind it with dark green. Change the thumb to green at the end.
4. On completion, blur the whole screen to about 20-30px and fade it down. Put a mono caps status label in the middle.
5. Under it, animate a large blurred green, cream and red shape rising from the bottom edge, then surging up and fading to a dim haze.
6. Bring the card in from a blur and a slight tilt, sharpen it over about 400ms, and count the amount up to the final figure.
7. For the idle state, tilt the card up to about 5 degrees toward a moving touch point and move a soft highlight with it.

The poster's only words on the post are "Designed and developed this Fintech app with Claude." They say nothing about how the motion was made.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): amount entry, the account wheel and the swipe
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): the green, cream and red colour field behind the blur
- [stageshow ↗](https://github.com/benjitaylor/skills/tree/main/stageshow): a faux app screen shown as a short demo
