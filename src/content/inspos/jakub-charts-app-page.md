---
title: "Charts on an app details page"
url: "https://x.com/jakubkrehel/status/2118030760800379386"
source: "X"
credit: "Jakub Krehel"
type: "Interface"
date: 2026-11-04
imageUrl: "https://pbs.twimg.com/amplify_video_thumb/2118030440749580290/img/CLyoT0YZZwKHLnY3.jpg"
videoUrls:
  - "https://video.twimg.com/amplify_video/2118030440749580290/vid/avc1/1152x720/U8jMKO1VG9RRTs8o.mp4?tag=29"
alt: "Interfere's page for the app jakub.kr: status and release details on the left, four sparkline totals and a layered area chart of events on the right, with two smaller line charts below."
sample: false
---

### What happens
The clip is a screen recording of an app details page for a monitoring product, a white page with a left sidebar. The poster's own words: "Been spending a decent amount of time on charts recently for our new app details page."

0-3s: the full page. On the left, status and release details, and a card for a latest release and active problems. On the right, a grid of charts: sessions and devices in blue and pink area charts, errors, failed requests in yellow, latency with three lines, and web-vitals line charts. The right panel scrolls down through them, and the charts redraw as they enter, as far as 1s sampling can show.

4-7s: the clip cuts to a zoomed-in line chart of response times, with a dotted row of points. A dark tooltip (date, duration, "compared to average") follows the cursor and snaps from point to point, with a thin vertical line through the active point. Towards the end the cursor reaches a red outlier point at 180ms, 2.6x average, and the tooltip changes with it.

8-11s: zoomed in on a stacked area chart of events, five series in blue, pink, green, purple and orange. The cursor sweeps over it and a tooltip lists each series' count for the hovered 10-minute slot, with a vertical dashed line. At about 11s the cursor moves to a "Series" toggle and a row of legend chips opens in the header.

12-15s: the cursor moves along the legend chips. Each chip hovered or selected turns that series saturated and turns the others light grey. At 15s "Status page" is selected and the chart redraws as that one series alone, with the y-axis rescaled to 0 to 24 and a peach fill.
16-18s: the selected series sits over the greyed stack, then everything returns to full colour, then the legend collapses back to the toggle.

19-23s: a different component: a horizontal bar split into four segments (HTTP requests 50%, Database 30%, Self 15%, Other 5%) with a list below. Hovering a row or a segment keeps that segment saturated and fades the others to pale tints, and the row's label goes dark while the others go grey. With nothing hovered, all four are saturated. A couple of samples catch it mid-change.

### Timing and feel
Hover feedback looks instant, with a short fade on the colours (looks like about 150-200ms, can't be measured at 1s sampling). The tooltip jumps point to point and doesn't glide, as far as I can see. The rescale of the chart on selecting a series reads as a quick redraw. No loop; it is a demo of cursor use.

### What it is made of
White ground, light grey rules, small grey sans labels, saturated line colours over pale fills of the same hue, a near-black tooltip with white text, a thin dashed vertical guide, small grey diamond markers along the top of the charts, a red dot for the outlier, and a segmented bar with rounded ends and a few-pixel gap between segments. Tooltips use tabular-looking figures. The footage does not say how any of this was built.

### To recreate the look
Inferred from the footage, untested.
1. Draw each chart as a thin line over a pale fill of the same colour, with very light grid and small grey axis labels.
2. On hover, show a vertical guide and a dark tooltip that lists every series for that slice, with right-aligned numbers.
3. Make the legend interactive: hovering or selecting a series saturates it and drops every other series to light grey. Selecting it can also rescale the chart to that series alone.
4. Colour a single outlier point red, and have the tooltip state it as a ratio to the average.
5. For a composition bar, keep all segments saturated at rest, and fade the non-hovered ones to tints on hover along with their labels.

### Skills to try

- [micro-interaction ↗](https://github.com/iart-ai/web-animation-skills/tree/main/skills/micro-interaction): hover tooltips and the fade on the segments you aren't hovering
- [ui-styling ↗](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/.claude/skills/ui-styling): building the page and its charts as accessible components
