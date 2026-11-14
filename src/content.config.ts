import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Homepage collections. Provisional: they mirror the sections on the homepage,
// not the kit/article model, which the owner hasn't defined yet.
//
// `sample: true` marks placeholder entries used to judge layout. The homepage
// shows them under `npm run dev` only and drops them from `npm run build`.

const sample = z.boolean().default(false);

// An image needs alt text. Entries without an image show the placeholder.
const needsAlt = (d: { image?: unknown; imageUrl?: unknown; alt?: string }) =>
	!(d.image || d.imageUrl) || Boolean(d.alt);
const altMessage = { message: "alt is required when image is set", path: ["alt"] };

// Curated news is a link-out: title, author, source, date, URL. The Markdown body
// is the owner's own note on the story, and is optional. The thumbnail is optional
// too. `image` is a file the owner has the right to use, kept in the repo.
// `imageUrl` is the publisher's own image, linked from their CDN and never copied
// into the repo or downloaded at build, so it can change or disappear on their side.
// If both are set, `image` wins. Without either, the row shows the placeholder.
//
// `url` is a full URL, or a path to a page on this site (such as /article-example/),
// for a story the owner wrote here. A path shows as a plain link, not a ↗ link-out.
const sitePath = z.string().regex(/^\/[^\s]*$/, "a full URL, or a path starting with /");
const news = defineCollection({
	loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				url: z.union([z.url(), sitePath]),
				source: z.string(),
				author: z.string(),
				date: z.coerce.date(),
				// The homepage hero's own headline. `title` stays the publisher's, for the
				// link and the lists. Without a headline the hero shows the title.
				headline: z.string().optional(),
				topic: z.string().optional(),
				featured: z.boolean().default(false),
				image: image().optional(),
				imageUrl: z.url().optional(),
				alt: z.string().optional(),
				sample,
			})
			.refine(needsAlt, altMessage),
});

// Inspos work like news images: `image` is a file in the repo, `imageUrl` is the poster's
// own image, linked and never downloaded. `image` wins if both are set.
//
// `type` is what the work is: the filter on /inspos/. Keep the names short and match the
// spelling of an existing one, since the filter is built from them. `url` is the poster's
// own post, the page the thumbnail and title link to.
const inspos = defineCollection({
	loader: glob({ base: "./src/content/inspos", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				url: z.url(),
				source: z.string(),
				credit: z.string(),
				type: z.string(),
				date: z.coerce.date(),
				image: image().optional(),
				imageUrl: z.url().optional(),
				alt: z.string().optional(),
				sample,
			})
			.refine(needsAlt, altMessage),
});

// Agent skills. `group` is the skill's type: the homepage lists skills under it, and
// /skills/ filters by it. `home` puts a skill on the homepage. Every skill is on /skills/.
const skills = defineCollection({
	loader: glob({ base: "./src/content/skills", pattern: "**/*.md" }),
	schema: z.object({
		name: z.string(),
		summary: z.string(),
		group: z.string(),
		url: z.url(),
		home: z.boolean().default(false),
		sample,
	}),
});

// `url` may be a site-relative path to a file in public/.
const cheatsheets = defineCollection({
	loader: glob({ base: "./src/content/cheatsheets", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				summary: z.string(),
				date: z.coerce.date(),
				url: z.string(),
				image: image().optional(),
				alt: z.string().optional(),
				sample,
			})
			.refine(needsAlt, altMessage),
});

// Quotes from designers. `url` is where the words can be checked, and is required.
// Keep them to a line or two: the cap enforces that, in line with the news pipeline's
// rule that only a few words or lines are taken from anyone else's writing.
const quotes = defineCollection({
	loader: glob({ base: "./src/content/quotes", pattern: "**/*.md" }),
	schema: z.object({
		quote: z.string().max(280, "keep quotes to a line or two (280 characters)"),
		name: z.string(),
		source: z.string(),
		url: z.url(),
		sample,
	}),
});

export const collections = { news, inspos, skills, cheatsheets, quotes };
