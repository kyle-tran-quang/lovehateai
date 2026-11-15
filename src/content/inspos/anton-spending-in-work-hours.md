---
title: "A banking app that shows spending as hours worked"
url: "https://x.com/uxuisavitskiy/status/2119720404960903540"
source: "X"
credit: "Anton Savitskiy"
type: "Interface"
date: 2026-11-09
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2119720012554383360/img/Jshk8CQkN28M8ly-.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2119720012554383360/vid/avc1/720x1280/HjKvIeqmiT_IAH6-.mp4?tag=29"
alt: "A phone held in one hand, its dark screen showing “155h, work hours spent” inside a ring of blue and white dots, with a blue “Rent” card beneath it reading 52 h."
sample: false
---

### What happens
This is a handheld shot of a phone screen, one thumb working the app. The camera drifts and the phone tilts a little the whole way through. The screen shows a dark app with a ring of dots at the top ("155h, Work hours spent"), a row of rounded category cards under it, and a pill with the top transaction at the bottom.

- 0.0-1.0s Rent card in front, "52 h / €950.00". About a third of the ring is lit: larger blue-white dots along the right-hand arc, the rest small grey dots. The thumb comes in from the right.
- 1.0-1.5s the thumb presses the middle of the ring. The ring starts to thin out and by about 1.5s the screen is black with only a few dots left.
- 2.0-3.0s the ring comes back. Small dots show first, then the lit arc, then "155h" fades in from dim grey to white, then the card and the bottom pill.
- 3.5-4.0s a fast swipe on the card row. The page dots jump from the first position to the last, and the card in front is now Books ("8 h / €152.00"). The lit arc has shrunk to a small yellow-green cluster at the top of the ring.
- 4.0-8.0s swipes through Books, Taxis ("9 h", violet) and Subscriptions ("9 h", pink). The cluster at the top changes colour with each card, and the glow at the bottom of the card matches: yellow-orange, violet, magenta. The bottom pill swaps its merchant and time. The cards slide with the thumb, and the neighbour is cropped at the edge.
- 8.0-9.0s the thumb drags the Subscriptions card up. The card rises to the top, the ring shrinks out the top, and a list of rows (Yoga studio, Gym, Adobe, Netflix, YouTube Premium, iCloud+, Spotify, each with minutes and euros) comes in below. The nav label changes from "September" to "155 h spent". The row text is doubled and smeared while it moves.
- 9.0-10.5s the list scrolls under the thumb, and the card shrinks to a header strip.
- 10.5-11.5s the card is pulled back down. The list collapses into the bottom pill, the ring returns and the label goes back to "September".
- 12.0-16.0s more swipes: Subscriptions, Coffee (orange cluster, coral glow), Delivery (teal cluster, cyan glow).
- 16.0-17.5s back on Rent, with the lit arc large and the dots looking like they are filling in. I can't see how it got from Delivery to Rent between 15.5s and 16.0s. It is either a fast swipe back or an edit.
- 17.5-19.5s the thumb presses the ring again and the same thin-out, black and rebuild from 1.0-3.0s plays. The clip ends on a rebuilt Rent screen, so it is set up to loop.

### Timing and feel
- Black-out and rebuild: about 0.5s from press to nearly black, about 1s to come back. Looks like ease-in-out with the elements staggered: ring, then number, then card.
- Card swipes follow the thumb, so the speed is the user's. The settle looks like ease-out with a very small overshoot.
- Colour change on the ring cluster and card glow lands as the swipe settles, about 0.2-0.3s. It looks like a cross-fade, not a cut.
- Card to list expansion: about 0.4s, tied to the drag. The row text looks motion-blurred while it moves.
- Everything is touch-triggered. Taps and drags on the ring, swipes on the cards, a drag up on a card.

### What it is made of
- Near-black ground (approx. #050505), white sans type, small "h" after the number.
- The ring is about 150 dots in staggered rows, roughly six dots deep, so it reads as a band of scatter, not a clean circle. Lit dots are bigger and brighter. The lit part is proportionally a share of the total: about a third at 52 of 155h, a small cluster at 8-9h.
- Cards: rounded rectangles, black at the top fading to a saturated colour at the bottom edge, with a faint translucent border and a small icon and label at top left. Big numbers are bold, euro amount below in smaller type.
- Dot colours (approx.): blue-white #8fa0ff, yellow-green #c8e060, violet #8060ff, pink #ff60d0, orange #ff8040, teal #50e0c0.
- Real-world background is a blurred desk and monitor. The glass-like glow on the card may be the camera's exposure of a bright OLED, so I wouldn't read it as an effect.
- Whether the black-out is an app transition or the screen sleeping or refreshing is not clear from the frames.

### To recreate the look
Inferred from the footage, untested.
1. Draw a ring of about 150 small grey dots in staggered rows around a circle, with the headline number centred. Light a proportional arc of the ring in larger, brighter dots.
2. Give each category one hue. Use it for the lit dots and for the bottom glow on its card (black to colour, bottom edge only).
3. Keep one card in front and its neighbours cropped at the edges. When the card changes, slide the cards with the finger, cross-fade the dot colour and re-size the lit arc.
4. For the detail view, drag the card to the top and bring the ring out of the way. Fade or blur the list text in as it comes up. Swap the nav label.
5. For the entry, fade from black. Dots first, then the number, then the card, about 1.5s in total.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): the press, swipe and card-drag states
- [color-motion ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/color-motion): the ring and card glow changing colour per category
- [stageshow ↗](https://github.com/benjitaylor/skills/tree/main/stageshow): a faux phone UI shown as a short demo
