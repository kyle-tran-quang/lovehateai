import { collection, config, fields } from "@keystatic/core";

// The CMS mirrors src/content.config.ts. Keystatic rewrites a file's frontmatter
// from this schema, so a field missing here is deleted the next time that entry is
// saved. Add a field to both files, in the same order, or to neither.
//
// Storage depends on where the admin runs. See `storage` at the bottom.

const sample = fields.checkbox({
	label: "Sample",
	description: "A placeholder for judging layout. Shown under npm run dev, left out of the build. Off for real entries.",
	defaultValue: false,
});

const date = (label: string, description?: string) =>
	fields.date({ label, description, defaultValue: { kind: "today" }, validation: { isRequired: true } });

const link = (label: string, description?: string) =>
	fields.url({ label, description, validation: { isRequired: true } });

// Images live in src/assets/<collection>/<slug>/. The path written to the frontmatter
// is relative to the entry, which is what Astro's image() expects.
const image = (folder: string, description: string) =>
	fields.image({
		label: "Image",
		description,
		directory: `src/assets/${folder}`,
		publicPath: `../../assets/${folder}/`,
	});

const alt = fields.text({
	label: "Alt text",
	description: "Required when there is an image. The build fails without it.",
});

// Entries with no body stay `.md` files holding only frontmatter.
const noBody = {
	format: { contentField: "content" },
	entryLayout: "form",
} as const;
const noBodyField = { content: fields.emptyContent({ extension: "md" }) };

const news = collection({
	label: "News",
	path: "src/content/news/*",
	slugField: "title",
	format: { contentField: "note" },
	entryLayout: "content",
	columns: ["source", "date"],
	schema: {
		title: fields.slug({ name: { label: "Title", validation: { isRequired: true } } }),
		// fields.url only takes a full URL, so this is a text field with a pattern: a full
		// URL, or a path to a page on this site. Same rule as src/content.config.ts.
		url: fields.text({
			label: "Story URL",
			description: "A full URL, or a path to a page on this site, such as /article-example/.",
			validation: {
				isRequired: true,
				pattern: {
					regex: /^(https?:\/\/[^\s]+|\/[^\s]*)$/,
					message: "Use a full URL starting with https://, or a path starting with /",
				},
			},
		}),
		source: fields.text({ label: "Source", validation: { isRequired: true } }),
		author: fields.text({ label: "Author", validation: { isRequired: true } }),
		date: date("Date"),
		topic: fields.text({ label: "Topic" }),
		featured: fields.checkbox({
			label: "Featured",
			description: "The newest featured story is the hero. With none, the newest story is.",
			defaultValue: false,
		}),
		image: image("news", "Only an image you have the right to use, never the publisher's. Empty shows the placeholder."),
		alt,
		sample,
		note: fields.markdoc({
			label: "Note",
			description: "Your own comment on the story. Optional. Paragraphs, italic and links only.",
			extension: "md",
			// Keystatic turns on every option you leave out, so each one is off by name.
			// Emphasis is oblique on this site, so no bold, and a note has no headings.
			options: {
				bold: false,
				italic: true,
				strikethrough: false,
				code: false,
				heading: false,
				blockquote: false,
				orderedList: false,
				unorderedList: false,
				table: false,
				link: true,
				image: false,
				divider: false,
				codeBlock: false,
			},
		}),
	},
});

const inspos = collection({
	label: "Inspos",
	path: "src/content/inspos/*",
	slugField: "title",
	...noBody,
	columns: ["source", "date"],
	schema: {
		title: fields.slug({ name: { label: "Title", validation: { isRequired: true } } }),
		url: link("URL"),
		source: fields.text({ label: "Source", validation: { isRequired: true } }),
		credit: fields.text({ label: "Credit", validation: { isRequired: true } }),
		date: date("Date"),
		image: image("inspos", "Only an image you have the right to use. Empty shows the placeholder."),
		alt,
		sample,
		...noBodyField,
	},
});

const skills = collection({
	label: "AI skills",
	path: "src/content/skills/*",
	slugField: "name",
	...noBody,
	columns: ["group"],
	schema: {
		name: fields.slug({ name: { label: "Name", validation: { isRequired: true } } }),
		summary: fields.text({ label: "Summary", multiline: true, validation: { isRequired: true } }),
		// The key is `group`. The label is "Type": it is the filter on /skills/.
		group: fields.text({
			label: "Type",
			description: "The filter on the skills page and the heading on the homepage. Match the spelling of an existing type.",
			validation: { isRequired: true },
		}),
		url: link("URL"),
		home: fields.checkbox({
			label: "Homepage",
			description: "Also listed in the AI skills section on the homepage. Off: only on the skills page (/skills/).",
			defaultValue: false,
		}),
		sample,
		...noBodyField,
	},
});

const tools = collection({
	label: "Toolstack",
	path: "src/content/tools/*",
	slugField: "name",
	...noBody,
	columns: ["date"],
	schema: {
		name: fields.slug({ name: { label: "Name", validation: { isRequired: true } } }),
		use: fields.text({ label: "Use", validation: { isRequired: true } }),
		url: link("URL"),
		date: date("Date", "When it joined the stack."),
		sample,
		...noBodyField,
	},
});

const cheatsheets = collection({
	label: "Cheat sheets",
	path: "src/content/cheatsheets/*",
	slugField: "title",
	...noBody,
	columns: ["date"],
	schema: {
		title: fields.slug({ name: { label: "Title", validation: { isRequired: true } } }),
		summary: fields.text({ label: "Summary", multiline: true, validation: { isRequired: true } }),
		date: date("Date"),
		url: fields.text({
			label: "URL",
			description: "A full URL, or a path to a file in public/, such as /sheets/color.pdf.",
			validation: { isRequired: true },
		}),
		image: image("cheatsheets", "Only an image you have the right to use. Empty shows the placeholder."),
		alt,
		sample,
		...noBodyField,
	},
});

// A quote has no title, so the designer's name makes the file name. Two quotes from
// one designer collide: edit the slug on the second, such as jane-doe-2.
const quotes = collection({
	label: "Quotes",
	path: "src/content/quotes/*",
	slugField: "name",
	...noBody,
	columns: ["source"],
	schema: {
		quote: fields.text({
			label: "Quote",
			description: "A line or two. The words must be checkable at the URL below.",
			multiline: true,
			validation: { isRequired: true, length: { max: 280 } },
		}),
		name: fields.slug({ name: { label: "Designer", validation: { isRequired: true } } }),
		source: fields.text({ label: "Source", description: "The work the words come from.", validation: { isRequired: true } }),
		url: link("URL", "Where the words can be checked."),
		sample,
		...noBodyField,
	},
});

export default config({
	// Live site: every save is a commit to GitHub through the GitHub App, and the push
	// rebuilds the site. `npm run dev`: edits the files in the working copy, with no login.
	storage: import.meta.env.PROD
		? { kind: "github", repo: "kyle-tran-quang/lovehateai" }
		: { kind: "local" },
	ui: {
		brand: { name: "Love&Hate AI" },
		navigation: ["news", "inspos", "skills", "tools", "cheatsheets", "quotes"],
	},
	collections: { news, inspos, skills, tools, cheatsheets, quotes },
});
