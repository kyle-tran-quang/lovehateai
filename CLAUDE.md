# Love&Hate AI

A newsletter site: a collection of survival kits for designers in the age of AI.

Write the name exactly `Love&Hate AI` (no spaces around the ampersand), in copy and in the wordmark. The repo and slugs use `lovehateAI`.

## Status

The site is built with Astro (static output, npm). The project is scaffolded from Astro's minimal template: one placeholder page, the typeface, both color themes, the three type sizes and the 12-column grid wired up in `src/styles/`, no content yet. There is no test command. Don't invent one, or any content.

Commands (Node >= 22.23.4):
- `npm install`
- `npm run dev`: dev server
- `npm run build`: static build to `dist/`
- `npm run preview`: serve the built `dist/`
- `npm run fonts`: rebuild `src/assets/fonts/Diatype.woff2` and `DiatypeCondensed.woff2` from `fonts/`. Needs `fonttools` and `brotli` (`pip install fonttools brotli`) on the PATH. Only rerun it if the source fonts or the character set changes. To rebuild one, run `bash scripts/build-fonts.sh main` or `condensed`.

Keep client JS close to zero. This is a reading site, so add an Astro integration (React, Tailwind, etc.) only after asking.

Open decisions. Ask before assuming any of these:
- Newsletter provider and the signup flow. None of the references contains a form, so the signup field has no visual precedent yet. Build it from the same vocabulary (text, 1px underline, no fill, no pill button).
- Content model: the kit/article structure is undefined. The owner will define it. Don't build a Keystatic schema or content collections until then.

Decided: the CMS will be Keystatic, git-backed, so content stays as files in the repo and the public site stays static. It isn't installed yet. Check the Astro 7 setup before installing.
- Hosting and domain.
- Article title treatment (see the Article pattern).

## Hard rules

### No AI slop

The site is about AI, so it must not look or read like AI output. Never:
- Gradients (especially purple/blue), glow, glassmorphism, blurred blobs, aurora or mesh backgrounds, noise textures.
- Dot-grid or line-grid backgrounds on pages or sections. The one exception is the empty state inside an image placeholder (see Imagery).
- Gradient text, sparkle icons, emoji as icons or decoration, 3D blobs, floating device mockups.
- Rounded cards with soft shadows, bento grids, three-up icon feature rows, pill badges, centered hero with two CTAs.
- Fade-up-on-scroll applied to everything.
- Stock or AI-generated imagery used as decoration. AI-generated images appear only when they are the subject under discussion, and are labelled as such.
- Copy tells: "Welcome to", "Unlock", "Elevate", "Supercharge", "Dive in", "game-changer", "in the age of" as a hook, "Whether you're X or Y", tidy tricolons, and em-dash-heavy rhythm. The article reference's sample text leans on em dashes. Don't copy that.

The installed `glassmorphism`, `motion-background` and `transitions-ui-generation` skills produce exactly this look. Don't use them here.

### No eyebrow text

No small label, kicker, overline or category tag sits above a heading. That covers text like "NEWSLETTER", "Kit 04 / Typography", "New", or a date above a title.
- Metadata (kit number, date, reading time) goes beside the title in an adjacent column, or after it.
- No all-caps, letter-spaced labels anywhere. Use sentence case or lowercase.

Two things in the references look like eyebrows. Neither is allowed to become one here:
- **The row of tiny labels across the top of the masthead reference.** Build it as a running header of real navigation links. Never use it as captions describing the headline below.
- **The gray two-line block above each text column on the detail pages.** The first line is that column's title and the date follows it. A topic or category label is never the first line.

## Visual direction

Six screenshots in `references/` set the direction. They are direction only. Don't copy their layouts 1:1 or reuse their text ("Cargo", "Neue Grafik", lorem ipsum, placeholder labels).

| File (`Screenshot 2026-11-13 at ...png`) | Name used below | Shows |
|---|---|---|
| 22.21.15 | photo viewer (dark) | One large photo on black, text-only nav, numbered chips and thumbnails |
| 22.22.40 | masthead (light) | Huge stacked headline over a column grid, header row of labels, ruled label/value list at right |
| 22.29.14 | detail page (light) | Giant numeral, three text columns, wide image panel, numbered thumbnails, credits, long text |
| 22.29.46 | detail page (dark) | The same page in a dark theme |
| 22.31.06 | index list (light) | Ruled rows: title, gray companion, meta, bold lead plus text, one wide image and two small figures |
| 22.39.58 | article (dark) | Reading page: empty left half, grouped index in column 4, sectioned text in columns 5-6 |

What all six share:
- A plain ground, one ink color, one gray. No accent.
- One family. Size and weight carry the whole hierarchy.
- Structure is shown with 1px rules and exposed grid lines, never boxes, cards or shadows.
- Text sits in columns snapped to the grid: about 40-50 characters per line on the three-column pages, up to about 80 in the article. Display type and images take the space around them.
- Most things are numbered: `01 / 04`, `3`, `3.1`, `Project 01`, `Figure 1`. The article page is the exception.
- Large areas are left empty.

Leave out the browser-window frame in the photo viewer and the floating `Ask…` pill (photo viewer and article). They break the no-mockup and no-pill rules.

### Rules derived from them

**Grid.** The references don't share one grid. I measured the left edge of each text column against the page width:
- The masthead and the article fit six columns, within about 17px (the margin).
- The detail page fits four columns. Its text starts at 26%, 51% and 76% of the width.
- The index list fits neither cleanly. Twelve columns is closest, but its two small figures sit about 70px off.

Build on a 12-column grid and let each page span it as six or four columns. Twelve divides into both. That is my inference, since no screenshot shows a 12-column grid. Use one column on phones. The outer margin is about equal to the gutter (16-30px).

How each page uses it:
- **Masthead:** six columns. Text starts in column 2, and the label/value list takes columns 5-6.
- **Detail page:** four columns. Column 1 holds only the numeral and the credits, and the three text columns are columns 2-4.
- **Index list:** column 1 carries the row title and the lead text, and the image and figures snap to the nearest of the 12.
- **Article:** six columns. Columns 1-3 stay empty, column 4 holds the index and columns 5-6 hold the text.

Display type may break the grid. Body text never does.

**Scale.** Three sizes, and nothing in between. Never go below 12px (the references' tiny captions are too small).
- **Body:** 14-15px, line-height about 1.2, weight 400. A lead paragraph, or a section heading in an article, is the same size at weight 700.
- **Title:** about 1.7x body, weight 400, ink. Its companion text sits beside it at the same size in muted gray (`Project 01` and `Type 0-24-DK` in the index list).
- **Display:** about 8x body, weight 800 or heavier, line-height 0.9-0.95, tracking -0.03em to -0.04em. A headline or the kit numeral.

**Text conventions.**
- Emphasis in running text is oblique, not bold.
- Running prose indents the first line of the second and later paragraphs by 4em (measured: 78px at a 24px line pitch) and has no blank line between (detail page). Separate blocks, such as a lead followed by body, or paragraphs in an article, are split by one blank line (index list, article).
- Bulleted lists hang about 2em in, and wrapped lines align with the text, not the bullet.
- An excerpt opens with `[…]`.
- Short metadata stacks in lines: title, then date.
- Credits are `Key: value` lines in muted gray, bottom of column 1.
- Captions and figure numbers sit under the image in muted gray, numbered `3.1`, `3.2`, or `Figure 1`.

**Color.** No accent color. Links are underlined and keep the text color. Imagery supplies all the color. Ship both themes and follow `prefers-color-scheme` by default.

| Token | Light | Dark |
|---|---|---|
| page | `#ffffff` | `#191919` |
| inset (image ground) | `#efefef` | `#2d2d2d` |
| text | `#262626` | `#dddddd` |
| rules | `#262626` | `#373737` |
| muted text | `#6b6b6b` | `#9a9a9a` |
| lines inside an image placeholder | `#cccccc` | `#5f5f5f` |

Measured from the references: both page backgrounds, both insets, the light text and rules (`#262626`), the dark rule (`#373737`), the dark numeral and article text (`#dddddd`, measured as `#dcdcdc` in the article), and the light placeholder lines. The dark placeholder value is the peak brightness of the dots and is approximate.

The dark references use three different grounds: `#111111` (photo viewer), `#141414` (article) and `#191919` (detail page). This file uses `#191919`, the one the inset was measured against. If the ground moves to `#141414`, re-check the inset. Dark body text measures `#a3a3a3` on the detail page but `#dcdcdc` in the article. This file uses `#dddddd` throughout (12.94:1 on the page).

Muted text is chosen, not copied. The references' grays fail AA: the light `#999999` is 2.85:1 on white and 2.48:1 on the inset, the dark `#757575` is 3.82:1 on the page and 2.99:1 on the inset, and the article's `#727272` is 3.83:1 on its ground. The chosen values pass:

| Muted text | On page | On inset |
|---|---|---|
| light `#6b6b6b` | 5.33:1 | 4.63:1 |
| dark `#9a9a9a` | 6.25:1 | 4.89:1 |

The photo viewer's near-black (`#111111` page, `#000000` stage) is a separate image-first mode. Use it only if a gallery view gets built.

**Rules and borders.** Divide content with 1px rules in the rule color, running the full width of their column or columns. Never use boxes. Radius is 0, except small chips, which get 4px at most.

**Navigation.** Text only. The header has the wordmark in column 1, links starting at column 4, and actions right-aligned in column 6. Number things (`01`, `02`) and show position as `01 / 04`. Mark the current item by dimming the others (article index) or by inverting it, with text and ground swapped (photo viewer chips). Use `↗` for external links. The font has `↗`, `←`, `→` and `…`.

**Imagery.** Real photographs, screenshots and scans. One large image at a time, on the inset color, spanning the text columns above it and flush with their edges. Small numbered thumbnails sit beneath it. No frames, shadows or decorative captions. Always set width and height or an aspect ratio so nothing shifts as it loads.

An image's empty or loading state may show its construction: hairlines inset about 20px from the edge (light) or a dot grid (dark), with a tiny label bottom-left. This is the only place a line grid or dot grid is allowed.

**Experimental moves.** Use one per screen at most, so the site stays editorial and not noisy:
- A display headline that overhangs the grid while text stays on it.
- Exposed structure: visible column lines, hairline rules, an oversized kit numeral top-aligned with the first line of text.
- Variable-axis play with the typeface: weight contrast between lines, or `MONO` moving from 0 to 1 within a headline.
- Parallel stacked titles, like the masthead's three-language headline. A "Love" line over a "Hate" line works only where the content really has two sides.

**Motion.** Functional and sparse: 150-250ms, transform and opacity only, no scroll-reveals. Animating font axes reflows text, so do it only on short single-line strings in a fixed-size box, never on paragraphs. Honor `prefers-reduced-motion`.

### Page patterns (working, not final)

- **Masthead.** A display headline stacked on lines, at the left edge. Above it, a header row of real nav links aligned to the columns. Below it, short intro text in columns 2-4, and a ruled label/value list in the last two columns (about, contact, links).
- **Index.** One row per kit, each opened by a full-width 1px rule. Row: title and its gray companion, a three-line meta block, a bold lead plus text in column 1, one wide image, two small figures.
- **Kit page.** The kit numeral in column 1. Three text columns, each opening with its title and date. One wide image panel across them, then numbered thumbnails, credits at bottom left, and the long read in the last column.
- **Article.** The reading page.
  - Header: a 1px rule under the nav links, spanning columns 4-6.
  - Columns 1-3: empty at wide widths. Leave them empty.
  - Column 4, the index: a grouped list. A group name is in the text color, its entries below are muted, and the current entry is in the text color. One blank line between groups. No bullets, numbers, icons or chevrons. Groups are kits and entries are articles (working assumption, see Content model).
  - Columns 5-6, the text:
    - Each section opens with a one-line heading at body size, weight 700, then a blank line, then the text. Keep real `h2`/`h3` elements, styled this way.
    - A run-in subheading is a bold line followed directly by its paragraph, with no blank line.
    - A closing note may be a single oblique paragraph.
    - Sections are separated by a 1px rule, with about 5 line-heights of space above it and about 1.5 below, so a heading attaches to what follows it.
    - Keep the measure to about 80 characters at most. Images, if any, follow the Imagery rule and span columns 5-6.
  - Medium widths (my addition, not in the reference): drop the empty half. The index takes column 1 and the text takes columns 2-4.
  - Phones: one column, with the index collapsed into a `<details>` above the text.
  - Open: the reference has no title above the text, only the first section heading at body size. A display title in the empty columns 1-3 would be the page's one experimental move. Decide when the first article is designed.

## Typeface

One family, Cargo Diatype, in two files in `fonts/`. Don't edit or replace either file. Build web-optimized copies (WOFF2, subset) from them. The index list reference sets its figure captions in a serif and its image label in a mono caps face. Ignore both. Diatype only, and the `MONO` axis covers the mono need.

- `fonts/CargoDiatypePlusVariable.ttf` ("Cargo Diatype Plus Variable") is the main face. It does everything except condensed.
- `fonts/CargoDiatypeWidthsVariable.ttf` ("Cargo Diatype Widths Variable") is the condensed cut, added at the owner's request for the homepage headline. Its web copy is `DiatypeCondensed.woff2`, pinned to `wdth` 75, weight 400-700, upright, no `MONO`. Use it for display headlines the owner asks to be condensed, and nowhere else unless asked. Text and captions stay in the main face. The font stack keeps the main face as its fallback (`--font-condensed`).

Axes, read from the font's `fvar` table:

| Axis | Range | Notes |
|---|---|---|
| `wght` | 200-1000 | Thin to Ultra. Named instances: 200, 300, 400, 500, 700, 800, 900, 1000. |
| `MONO` | 0-1 | Proportional to monospaced. Set it with `font-variation-settings: "MONO" 1`. |
| `slnt` | -12 to 0 | Slant. Use `font-style: oblique`, not a faux italic. CSS oblique angles are the negative of `slnt`. |
| `wdth` | 100 only | Locked in this file. Don't use `font-stretch`. Condensed comes from the Widths file instead (below). |

The Widths file has `wght` 200-700, `wdth` 50-100 (named instances: Compressed 50, Condensed 75, Regular 100) and `slnt`, but its `MONO` axis is fixed at 0. The condensed web copy is pinned to `wdth` 75, so the site doesn't use the width axis directly.

Features include `tnum`, `pnum`, `zero`, `case`, `frac`, and stylistic sets `ss01`-`ss17`. Inspect the sets before choosing one. None is chosen yet.

```css
@font-face {
  font-family: "Diatype";
  src: url("../assets/fonts/Diatype.woff2") format("woff2"); /* src/styles/fonts.css; Vite hashes and bundles it */
  font-weight: 200 1000;
  font-style: oblique 0deg 12deg;
  font-display: swap;
}
```

- Font stack: `"Diatype", "Inter Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif`. Use `ui-monospace` for any mono fallback. "Inter Fallback" is Inter (OFL, from `@fontsource-variable/inter`), limited to Cyrillic, Greek, Vietnamese and extended Latin, scaled with `size-adjust: 92%`. It has no basic Latin face on purpose, so ordinary pages never download it. Email still falls back to Helvetica.
- Body is `wght` 400. Display is 800 or heavier, set tight. Don't use weights under 300 below display size.
- Use `MONO` 1 for small captions, figure numbers and image labels, set in lowercase, never all-caps.
- Use `tnum` for kit numbers, dates and any column of figures.
- Email clients rarely load web fonts. Email versions fall back to the stack above and follow the same layout rules.
- This is a commercial font. The license is confirmed for both files (web use, email use, public repo). Don't raise it again.
- The web copy is `src/assets/fonts/Diatype.woff2`: Latin through Extended-B, currency, fractions, super/subscripts, common math, arrows, `№ ™`, all four axes, every OpenType feature (`ss01`-`ss17` included). 337 KB against 1.3 MB for the TTF. Text outside that range falls back to the stack below.
- The condensed copy is `src/assets/fonts/DiatypeCondensed.woff2`: the same character set and features, `wght` 400-700 only. 69 KB. `Base.astro` preloads it when a page sets `condensed`.

## Voice

The name sets the stance: ambivalent. Not boosterish, not doomerist. Write plainly and specifically, like one designer talking to another. Take positions. Skip definitions of AI and promises about what the reader will "learn". Prefer a concrete example to a general claim.

## Content model (working assumption)

A **kit** is the unit of content: a self-contained, practical set of things a designer can use. Kits are numbered in publication order (01, 02, ...), and the number is a visual device (see Experimental moves). The site is an index of kits plus a way to subscribe.

An **article** is a single long-form piece, shown in the Article pattern. A kit holds one or more articles, and the article index lists them grouped by kit. Confirm this structure before building anything that depends on it.

## Accessibility

- Semantic HTML with a real heading outline and landmarks. Keep the DOM order the same as the reading order, even where the layout breaks the grid. In the article, the text comes before or after the index in the DOM by design choice, never because of where the grid puts it.
- Keep visible focus styles on every interactive element, such as a 1px outline with an offset. Don't remove them.
- Text must pass WCAG AA contrast in both themes.
- Layouts must work at phone width. Collapse the grid to one column and keep the display type scaled with `clamp()`.

## Repo layout

- `fonts/` holds the source TTFs. Treat it as read-only. The TTFs are gitignored, so a fresh clone has none: `npm run fonts` only works where the owner has copied them in. The build doesn't need them, because the generated WOFF2 files in `src/assets/fonts/` are tracked.
- `references/` holds the six visual-direction screenshots. Treat them as read-only.
- `src/pages/` holds the routes. Only `index.astro` exists so far.
- `src/layouts/Base.astro` is the shared document shell. It preloads the font.
- `src/styles/` holds the CSS. `global.css` is the entry (reset, base elements, `.display`, `.title`, `.grid`), `tokens.css` the colors, sizes and grid variables, and `fonts.css` the `@font-face` rules. Colors use `light-dark()`, so both themes follow `prefers-color-scheme`.
- `src/pages/dev-check.astro` is a temporary token test page. Delete it before launch.
- `src/assets/fonts/` holds the generated WOFF2. Don't edit it by hand.
- `scripts/build-fonts.sh` generates both WOFF2 files from `fonts/`.
- `public/` doesn't exist yet.
