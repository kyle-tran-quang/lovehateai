# Love&Hate AI

A newsletter site: a collection of survival kits for designers in the age of AI.

Write the name exactly `Love&Hate AI` (no spaces around the ampersand), in copy and in the wordmark. The repo and slugs use `lovehateAI`.

## Status

The site is built with Astro (static output, npm) and hosted on Cloudflare Workers. The project is scaffolded from Astro's minimal template: one placeholder page, the typeface, both color themes, the three type sizes and the 12-column grid wired up in `src/styles/`, no content yet. There is no test command. Don't invent one, or any content.

Commands (Node >= 22.23.4):
- `npm install`
- `npm run dev`: dev server on Node. The CMS is at `/keystatic` and saves straight to files.
- `npm run build`: build for Cloudflare Workers into `dist/` (`client/` is the static site, `server/` the Worker)
- `npm run preview`: serve the built `dist/` in workerd with `wrangler dev`. Needs a `.dev.vars` file with the four Keystatic variables (any values, to see the admin load). `astro preview` doesn't work with the Cloudflare adapter.
- `npm run deploy`: build and `wrangler deploy` by hand. Pushes to `main` deploy by themselves once Workers Builds is connected (see Hosting).
- `npm run fonts`: rebuild `src/assets/fonts/Diatype.woff2` and `DiatypeCondensed.woff2` from `fonts/`. Needs `fonttools` and `brotli` (`pip install fonttools brotli`) on the PATH. Only rerun it if the source fonts or the character set changes. To rebuild one, run `bash scripts/build-fonts.sh main` or `condensed`.

Keep client JS close to zero. This is a reading site, so add an Astro integration (React, Tailwind, etc.) only after asking.

Open decisions. Ask before assuming any of these:
- Newsletter provider and the signup flow. None of the references contains a form, so the signup field has no visual precedent yet. Build it from the same vocabulary (text, 1px underline, no fill, no pill button).
- Content model for kits and articles: the kit/article structure is still undefined. The owner will define it. The homepage collections (news, inspos, skills, cheatsheets, quotes) are defined and have a Keystatic schema. Don't add kit or article collections until then.

Decided: the CMS is Keystatic, so content stays as files in the repo and the public site stays static. Hosting is Cloudflare Workers, on the free plan (see Hosting).
- Domain.
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
- **Display:** about 8x body, weight 800 or heavier, line-height 0.9-0.95, tracking -0.03em to -0.04em. The kit numeral, and any display type that isn't a page's h1.
- **H1:** every page's `h1`, styled on the element in `global.css` with no class. The owner set it from the homepage headline: 0.6x display (`--size-h1`), condensed face, weight 500, line-height 0.92, tracking -0.035em. This is a deliberate departure from the display spec above. Don't add `.display` to an `h1`. A page has one `h1`, and it is the visible title.

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

**Navigation.** Text only. The header has the wordmark in column 1, links starting at column 4 of six, and actions right-aligned in column 6. The owner moved the links on the homepage and the library pages to column 5 of twelve, so they line up with the section bodies below (`navStart` on `SiteHeader` and `SiteFooter`, default 5). The article pages keep column 4 of six (`navStart={7}`). Number things (`01`, `02`) and show position as `01 / 04`. Mark the current item by dimming the others (article index) or by inverting it, with text and ground swapped (photo viewer chips). Use `↗` for external links. The font has `↗`, `←`, `→` and `…`.

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
- `fonts/CargoDiatypeWidthsVariable.ttf` ("Cargo Diatype Widths Variable") is the condensed cut, added at the owner's request for the homepage headline, which is now the style of every page's `h1`. Its web copy is `DiatypeCondensed.woff2`, pinned to `wdth` 75, weight 400-700, upright, no `MONO`. Use it for each page's `h1`, and nowhere else unless asked. Text and captions stay in the main face. The font stack keeps the main face as its fallback (`--font-condensed`).

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
- The condensed copy is `src/assets/fonts/DiatypeCondensed.woff2`: the same character set and features, `wght` 400-700 only. 69 KB. `Base.astro` preloads it on every page.

## Voice

The name sets the stance: ambivalent. Not boosterish, not doomerist. Write plainly and specifically, like one designer talking to another. Take positions. Skip definitions of AI and promises about what the reader will "learn". Prefer a concrete example to a general claim.

## Content model (working assumption)

A **kit** is the unit of content: a self-contained, practical set of things a designer can use. Kits are numbered in publication order (01, 02, ...), and the number is a visual device (see Experimental moves). The site is an index of kits plus a way to subscribe.

An **article** is a single long-form piece, shown in the Article pattern. A kit holds one or more articles, and the article index lists them grouped by kit. Confirm this structure before building anything that depends on it.

## Hosting

Cloudflare Workers, free plan. Static files are served from Cloudflare's asset store, which is unmetered. Only requests to `/keystatic`, `/api/keystatic` and `/api/telegram` run the Worker, and those count toward the 100,000 requests a day. Workers Builds gives 3,000 build minutes a month and one build at a time.

How content gets edited and published:
1. Open `/keystatic` on the live site and sign in with GitHub. Anyone with write access to the repo can.
2. Every save is a commit to `main`. Saving an entry is the publish step.
3. The push triggers Workers Builds, which runs `npm run build` and deploys, so the site updates in about a minute.
4. Your local copy falls behind. Run `git pull` before working on code.

One-time setup. Only the owner can do these, because they need the Cloudflare and GitHub accounts. The order matters: the GitHub App needs the Worker's URL, and the Worker needs the App's secrets.
1. Connect the build. In the Cloudflare dashboard, go to Workers & Pages, Create application, pick GitHub and choose this repo. Name the Worker `lovehateai`, to match `wrangler.jsonc`. Set the git branch to `main`, the build command to `npm run build` and the deploy command to `npx wrangler deploy` (the default). Don't use `npm run deploy` as the deploy command: it builds a second time. Save and Deploy. The first deploy succeeds, but `/api/keystatic` returns a 500 (the browser says the site "is currently unable to handle this request") until the secrets exist. It gives you the Worker's URL. The build image's default Node satisfies the `engines` range, so there is nothing to pin.
2. Create the GitHub App. This can only be done locally, because Keystatic refuses to create it anywhere else. Temporarily set `storage` in `keystatic.config.ts` to `{ kind: "github", repo: "kyle-tran-quang/lovehateai" }`, run `npm run dev`, open `/keystatic`, and follow "Log in with GitHub". Enter the Worker's URL in the optional deployed-URL field. Keystatic writes four variables to `.env`. Then put the storage line back.
3. Add three of those as secrets on the Worker (Settings, Variables & Secrets): `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET` and `KEYSTATIC_SECRET`. Add the fourth, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`, as a **build** variable (Settings, Build, Build variables and secrets). Vite bakes it into the admin page when the site is built, so a runtime variable doesn't reach it, and the admin loses the GitHub App link without it. Then retry the build: a retried build uses the settings that exist at the time of the retry.
4. If GitHub reports an unassociated `redirect_uri` when you sign in, add the Worker's URL (or the custom domain) as a callback URL in the GitHub App's settings.

Confirmed on the live site (2026-11-14): the build deploys from a push, the first deploy succeeds before the secrets exist, the build ran on Node 24.18.0 without a pin, and signing in with GitHub works after the three secrets and the build variable are added.

Not confirmed yet. Check these and correct this section if one is wrong:
- That saving an entry in the live admin makes a commit to `main`, and that the commit triggers a deploy.
- That secrets added in the dashboard survive later deploys. Cloudflare's secrets page doesn't say.
- That the Worker's free-plan request count stays low. The admin makes several `/api/keystatic` calls per page, and nobody has measured how many.

## Accessibility

- Semantic HTML with a real heading outline and landmarks. Keep the DOM order the same as the reading order, even where the layout breaks the grid. In the article, the text comes before or after the index in the DOM by design choice, never because of where the grid puts it.
- Keep visible focus styles on every interactive element, such as a 1px outline with an offset. Don't remove them.
- Text must pass WCAG AA contrast in both themes.
- Layouts must work at phone width. Collapse the grid to one column and keep the display type scaled with `clamp()`.

## Repo layout

- `fonts/` holds the source TTFs. Treat it as read-only. The TTFs are gitignored, so a fresh clone has none: `npm run fonts` only works where the owner has copied them in. The build doesn't need them, because the generated WOFF2 files in `src/assets/fonts/` are tracked.
- `references/` holds the six visual-direction screenshots. Treat them as read-only.
- `src/pages/` holds the routes: `index.astro`, `skills.astro` (the AI skills library at `/skills/`, with search and a filter by type), `news.astro` (every story at `/news/`, titled "Articles" on the page and the homepage, with search and a filter by topic. The route, the `news` collection and the CMS entry keep the name News), `inspos.astro` (every inspo at `/inspos/`, newest first and grouped by month, with search and a filter by type) and the temporary `article-example.astro` and `dev-check.astro`. All three library pages are built on `src/components/Library.astro`, which holds the title, search, filter, layout and the one small inline script. A new library page supplies an intro, the filters and its rows, and marks each row with `data-item`, `data-filter` (the filter id) and `data-text` (lowercase text to search). Don't copy the controls or the script into a page. The homepage links to each one from the end of its section ("View skills library", "View more articles", "View all inspos"). A skill's `group` is its type: the filter on `/skills/` and the heading on the homepage. `home: true` puts a skill on the homepage, and every skill is on `/skills/`. A story's `topic` is the filter on `/news/`, so match the spelling of an existing one. An inspo's `type` is the filter on `/inspos/`: match the spelling of an existing one (3D, Brand, Illustration, Interface, Motion, Poster, Web). Its `url` is the poster's own post, and `imageUrl` is the poster's own image, hotlinked like the news thumbnails. `videoUrls` lists the poster's own clips (MP4), hotlinked the same way and never copied: the first loops muted on the thumbnail while the picture is on screen (`Pic` takes it as `video`; its file loads when the picture first comes within half a screen of the viewport, and it pauses when it scrolls away or for anyone with reduced motion), and every clip gets a player with controls in the recipe sheet, where the first one starts as the sheet opens. `imageUrl` stays as the poster frame. The video CDN returns 403 to a request that names another site as its referrer, and a `<video>` has no `referrerpolicy` of its own, so `Base.astro` sets `<meta name="referrer" content="no-referrer">` for every page. Take each URL from fxtwitter's `tweet.media.videos[].formats` (the largest MP4 up to 1280px wide) and keep the `?tag=` part. Its title and alt text are written by hand from the image. An inspo with a Markdown body gets a guide to the work: what is on screen, how it is timed and built, and how to recreate it (the body in Keystatic's Recipe field, plus an optional `tool` and `resultImage` with `resultAlt`, which no entry sets yet). 55 of the 68 inspos have one, written by another agent from the poster's own footage. The owner chose to keep them as they are. They are inference, so the sheet says "Inferred from the footage and untested", and a guide's own "To recreate" section says the same. A guide the owner has run and checked is the stronger kind: it needs a different note on the sheet, so add a field for it before publishing one. It opens as a sheet that slides in from the right over `/inspos/` (`src/components/RecipeSheet.astro`, a native `<dialog>`), not as a page of its own. Its title and picture on `/inspos/` link to `#recipe-<id>` instead of to the poster's post, which the sheet links to, and that address opens the sheet on load. Without JS the sheets are plain sections after the list. A picture whose entry has a guide carries a `guide` mark, top left, always visible (a mono-axis word in a plain rectangle: page ground, 1px rule, no radius). It is `aria-hidden`, since the caption already says "How to recreate it". The rows carry `data-flag` too, and `Library` takes an optional `toggle` prop that shows one "Has a guide" checkbox under the type filter. It narrows to the flagged rows, combines with the type and the search, and sits in the URL as `?guide=1`. Only `/inspos/` passes it. The guide's headings are `###` for a section and `####` for a run-in subheading, because the sheet's title is the `h2`. Never present a guess at how the poster made something as fact. A guide is not a kit or an article, so this doesn't settle the content model. The Astro syntax highlighter is off (`markdown.syntaxHighlight: false`) so a prompt in a fenced block is plain text between two rules, not a dark fill. Never copy another aggregator's titles or blurbs. Keep the type names short and match the spelling of an existing one, since the filter is built from them. The pages send one small inline script and no integration. Without JS they are plain lists and the controls stay hidden. The owner asked for no numbers on `/skills/`: no ordinals on the types or rows, no counts, and no visible result count (the count is read out to screen readers only). `/news/` follows the same rule. Don't add them back under the "number things" rule.
- Toolstack is removed: no collection, no CMS entry, no section. Cheat sheets are hidden, not removed: the collection, the CMS entry and the section's code stay, and `SHOW_SHEETS` in `index.astro` is the switch. Flip it to true to bring the section, its header and footer links and its row in the hero's list back.
- The homepage's header and footer links have no numbers, at the owner's request. Don't add them back under the "number things" rule. The header is sticky from 48rem up (`sticky` on `SiteHeader`), and `index.astro` sets `scroll-padding-top` to match its height, so a jump lands the section rule just under it. The hero's right-hand list is the newest entry of each section, not navigation. A picture in a news or cheat sheet row links to the same place as its title (`href` on `Pic`, skipped by keyboards), and the title underlines when either is hovered. The hero is drawn as a sheet, as the owner asked: a 1px rule under the headline, and from 64rem a vertical rule in the gap before column 9, down to the first section's rule. It is all the `--rule` color, with no background grid, and the vertical rule is `aria-hidden`. The owner tried column ticks along the headline rule and removed them. The hero carries a pull quote beside its picture, from the optional `pullQuote` field on the featured news entry. It is the story's own words, copied exactly from the story and checked against its page, not from a summary. The homepage has no Quotes section. The `quotes` collection and its CMS entry stay, unused, until the owner decides what to do with them. `Section` takes an optional `description`, a muted line under the title (the inspos section has one).
- `src/layouts/Base.astro` is the shared document shell. It preloads the font and sets the `description`, the Open Graph tags and a `twitter:card` of `summary`. Each page passes its own `description` (one or two plain sentences), and a page without one gets the site's line. `noindex` keeps a page out of search engines: `article-example` and `dev-check` set it, and so must any other temporary page. There is no `og:image` on purpose, because the site has no image of its own and one made up for it would be decoration. The canonical link, `og:url` and the sitemap need the site's own address, which is `site` in `astro.config.mjs`. It is not set yet, because no domain is decided. Until it is, those tags are left out, `sitemap.xml` is empty but valid and `robots.txt` doesn't mention it. Set `site` and the next build fills all of them in. Never guess an address.
- `/search/` (`src/pages/search.astro`) searches articles, inspos and AI skills together, filtered by section, on `Library` like the other three. An inspo's search text includes its alt text, its tool and its recipe, so a word that only appears in a recipe's prompt finds it. A result for an inspo with a recipe goes to `/inspos/#recipe-<id>`, which opens the sheet. The homepage has no search field. Its header has a magnifier icon at the top right (`search` on `SiteHeader`) that links to `/search/`, so it works without JS. `src/components/SearchField.astro` is the one search field, used by `Library`, so its styles live in one place. It can still be wrapped in a plain `<form action="/search/">`, which reaches `/search/` without JS and lists everything. `src/lib/nav.ts` is the header and footer link list for every page except the homepage, whose links jump to its sections. A new page goes there and in the `paths` list in `src/pages/sitemap.xml.ts`. `robots.txt` is `src/pages/robots.txt.ts`, so its Sitemap line follows `site`.
- `src/styles/` holds the CSS. `global.css` is the entry (reset, base elements including the `h1`, `.display`, `.title`, `.grid`), `tokens.css` the colors, sizes and grid variables, and `fonts.css` the `@font-face` rules. Colors use `light-dark()`, so both themes follow `prefers-color-scheme`.
- `pipeline/inspos.mjs` finds inspo candidates and writes a review file to `pipeline/out/`. It does not touch the site. recent.design's sitemap is used only as an index of what to look at, and its titles, blurbs and images are never used: recent.design asks that its content be used for reference only. Each candidate's link, credit, date and thumbnail come from the original X post (through fxtwitter's public API). Run it with `node pipeline/inspos.mjs --scan 220 --max 32`. It goes one request at a time with a pause, and names itself as a generic client. A person then looks at each image and writes the title, type and alt text. Posters sometimes decorate their display name with emoji or symbols: credit those by their plain name, since emoji as decoration is not allowed. The script strips them itself (`cleanCredit` in `pipeline/lib/inspo.mjs`), and also keeps each post's clips (`videoUrls`, the largest MP4 up to 1280px wide with `?tag=` kept). `--skip-file` takes the posts already offered, so a post you passed over never comes back.
- The daily news loop runs on GitHub Actions and Telegram, all free, with no laptop involved. `.github/workflows/daily.yml` runs `pipeline/fetch.mjs` each morning (skipping stories already on the site or already offered), opens a `Candidates YYYY-MM-DD` issue, and `pipeline/send.mjs` posts the list to the owner's Telegram with a numbered button per story and a Publish button. A tap on a number flips its tick, written on the button itself, so nothing is stored. Publish calls `src/pages/api/telegram.ts` (the Worker), which starts `.github/workflows/publish.yml`. That runs `pipeline/publish.mjs`, which writes the ticked stories to `src/content/news/` as link-tier entries (title, url, source, author, date, no excerpt, no image), commits once to `main` and closes the issue. The push makes Workers Builds deploy. Only the issue's owner-opened data is trusted: `publish.mjs` refuses any issue the Actions bot didn't open, since the repo is public. The handler logic is in `pipeline/lib/handler.mjs` and is plain code with no Astro. Set up with `pipeline/telegram-setup.mjs`. Secrets: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` on GitHub Actions and the Worker; `TELEGRAM_WEBHOOK_SECRET` and `PUBLISH_GITHUB_TOKEN` (a fine-grained token with only Actions: read and write on this repo) on the Worker. Inspos are NOT in the daily run right now: the `inspos` job was removed from `daily.yml` on 2026-11-18 because it needs an `ANTHROPIC_API_KEY` that isn't set up, and inspos are added by hand (crawl with `pipeline/inspos.mjs`, then look at each image and write the title, type and alt text). The job and its scripts are kept, and the job is in git history at commit `c4c3a25`. What it did, if it comes back: it ran as a second job of `daily.yml` (`inspos`, so one failing didn't stop the other): `pipeline/inspos.mjs` crawls, `pipeline/draft-inspos.mjs` sends each thumbnail to Claude (`claude-opus-5-5`, structured output, the server-side refusal fallback on) to draft the title, type and alt text, `pipeline/send-inspos.mjs` opens an `Inspos YYYY-MM-DD` issue and posts five pictures to Telegram as an album with numbered captions, then the same tick buttons. The drafts are Claude's, not the owner's: the issue and the Telegram message say so, and the owner reads each against its picture before ticking. A draft is dropped, never shown, if it breaks the site's rules (em dash, emoji, copy tells), if Claude says the picture isn't design work, or if its type isn't one already on the site. The same Publish button and Worker route handle both lists: `publish.mjs` reads the issue's title (`kindOf`) and writes `src/content/inspos/` entries with no body, so they link to the poster's post and have no recipe sheet. It refuses an image off `pbs.twimg.com` or a clip off `video.twimg.com`, since the issue data is untrusted. Needs an `ANTHROPIC_API_KEY` secret on GitHub Actions (not on the Worker). `pipeline/package.json` holds the one dependency (`@anthropic-ai/sdk`) apart from the site's, so the Cloudflare build never installs it. Quotes and the other sections are not in this loop: quotes need exact words checked by a person.
- `src/pages/dev-check.astro` is a temporary token test page. Delete it before launch.
- `src/assets/fonts/` holds the generated WOFF2. Don't edit it by hand.
- `scripts/build-fonts.sh` generates both WOFF2 files from `fonts/`.
- `keystatic.config.ts` is the CMS schema. It mirrors `src/content.config.ts` field for field. Keystatic rewrites an entry's frontmatter from its own schema, so a field missing there is deleted on the next save: add a field to both files or to neither. Images upload to `src/assets/<collection>/<slug>/`. Storage depends on where it runs: under `npm run dev` it is `local` (edits files in the working copy, no login), and in a build it is `github` (every save is a commit to `kyle-tran-quang/lovehateai` through a GitHub App). The public pages are still plain files with no JS. Only `/keystatic` and `/api/keystatic` reach the Worker, and React ships only on the admin page.
- `wrangler.jsonc` holds only the Worker name, which must match the Worker's name in the Cloudflare dashboard. The adapter generates the rest.
- `astro.config.mjs` loads the Cloudflare adapter for `astro build` only. Under `astro dev` it would run the routes in workerd, which has no filesystem, and Keystatic's local storage needs one.
- `public/` doesn't exist yet. `robots.txt` and `sitemap.xml` are endpoints in `src/pages/`, not files here, so they can follow `site`.
