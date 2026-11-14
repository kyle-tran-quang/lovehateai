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
const needsAlt = (d: { image?: unknown; alt?: string }) => !d.image || Boolean(d.alt);
const altMessage = { message: "alt is required when image is set", path: ["alt"] };

// Curated news is a link-out: title, author, source, date, URL. The Markdown body
// is the owner's own note on the story, and is optional. The thumbnail is optional
// too, and must be an image the owner has the right to use. Never a publisher's
// image pulled from a feed. Without one, the row shows the placeholder.
const news = defineCollection({
	loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				url: z.url(),
				source: z.string(),
				author: z.string(),
				date: z.coerce.date(),
				topic: z.string().optional(),
				featured: z.boolean().default(false),
				image: image().optional(),
				alt: z.string().optional(),
				sample,
			})
			.refine(needsAlt, altMessage),
});

const inspos = defineCollection({
	loader: glob({ base: "./src/content/inspos", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				url: z.url(),
				source: z.string(),
				credit: z.string(),
				date: z.coerce.date(),
				image: image().optional(),
				alt: z.string().optional(),
				sample,
			})
			.refine(needsAlt, altMessage),
});

// Agent skills, listed under a group name.
const skills = defineCollection({
	loader: glob({ base: "./src/content/skills", pattern: "**/*.md" }),
	schema: z.object({
		name: z.string(),
		summary: z.string(),
		group: z.string(),
		url: z.url(),
		sample,
	}),
});

const tools = defineCollection({
	loader: glob({ base: "./src/content/tools", pattern: "**/*.md" }),
	schema: z.object({
		name: z.string(),
		use: z.string(),
		url: z.url(),
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

export const collections = { news, inspos, skills, tools, cheatsheets, quotes };
