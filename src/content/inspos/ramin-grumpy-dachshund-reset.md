---
title: "A password reset screen with a grumpy dachshund"
url: "https://x.com/RaminNasibov/status/2111194691303596460"
source: "X"
credit: "Ramin Nasibov"
type: "Interface"
date: 2026-10-16
imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/2111194680645824512/pu/img/Vj6A6-tKesa1-YoF.jpg"
videoUrls:
  - "https://video.twimg.com/ext_tw_video/2111194680645824512/pu/vid/avc1/720x720/NXPq4EaXdojYKGsu.mp4?tag=12"
alt: "A white panel headed “Reset password”, with an orange dachshund frowning above a green-outlined field, the red line “Password strength: pathetic”, and a black Reset button over Cancel."
sample: false
---

### What happens
A white rounded card on a light grey ground. It says "Reset password", with "Make it long, you weakling" under it, a cartoon dachshund above a password field with a green outline, a small line of strength text under the field, a black "Reset" button and a grey "Cancel". The dog and the strength text react to how many characters are in the field.

- 0.0s: one dot in the field and a text caret. The dog is short and round, brows low in a frown, eyes narrowed. The text is red: "Password strength: pathetic".
- 0.5 to 1.5s: dots are added one by one (2, 3, 5). The dog stays grumpy at first, then by 1.5s its eyes widen and its mouth opens in surprise. The body is already a little longer and the tail flicks up and down between frames.
- 2.0s: 6 dots. The dog is stretching, the body now clearly longer, and it still looks startled. The text reads "still weak".
- 2.5 to 3.0s: 8 to 10 dots, "meh, longer". The body keeps extending left and right.
- 3.5 to 4.0s: 12 to 13 dots, "ok for a noob". The dog is now wider than the card, with its head and tail poking out past both edges.
- 4.5 to 5.0s: "not bad, weakling" and the dog begins to smile.
- 5.5s: text turns green, "damn, solid". The dog's eyes go half-lidded and it smirks.
- 6.0 to 6.5s: the same, with the tongue out.
- 7.0 to 7.5s: "Password strength: finally good enough" in green, back to the long label form. The dog is at its longest.
- 8.0 to 8.5s: eyes closed, a content smile.
- About 9.0s: the field empties in a single frame, and the dog squashes back to its short round shape within about 0.25 to 0.4s while still smiling with closed eyes.
- 9.3 to 10.0s: a caret blinks in the empty field, the text is red again ("Password strength: pathetic"), and the face goes back to a smirk and then a frown. This leads straight into the start, so it is a loop.

### Timing and feel
Each typed character lands about every 0.25 to 0.4s, evenly spaced, with the dog's body growing alongside, roughly one stretch step per character, and no pause. Expression changes happen at the same points as the text changes, in hard swaps rather than blends. The stretch looks smooth and linear-ish, and the contraction at the end is quick, with a small squash. The tail changes angle between frames the whole time, a light wag. The input border stays green throughout, even when the message is red. No cursor or click is visible, so the typing is scripted or recorded, and I don't know which.

### What it is made of
A flat vector-style sticker dog, orange-brown (about #d9772b) with a darker brown ear (#6b3a1f) and a thin dark outline, with a soft grey shadow under it. The card is white with large corner radii, about 24px at this size (approximate), on a light grey ground (#efefef, approximate). A black full-width button with a rounded rectangle, grey text link, and a 2px green outline (about #22c55e) on the field. A rounded geometric sans for all UI text. The body of the dog is drawn so it can lengthen in the middle while head, legs and tail keep their shape; the footage doesn't show how that is done.

### To recreate the look
Inferred from the footage, untested.
1. Draw the dog as head, tail, legs and a long body that can be lengthened in the middle. Make several faces: frown, startled, smile, smirk, tongue out, eyes closed.
2. Tie the body length to the number of characters, so each keystroke lengthens it a little. Overflow the card on purpose.
3. Change the face and the one-line message at fixed counts of characters (about 5, 6, 8, 12, 13, then at the final length).
4. When the field is cleared, snap the dots away and shorten the dog in about a third of a second.
5. Keep the card plain and let the dog be the only colour.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): each typed character stretching the dog
- [animation-principles ↗](https://github.com/iart-ai/motion-design-skills/tree/main/skills/animation-principles): the snap back and loop
