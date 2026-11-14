// Sample entries (`sample: true`) are placeholders for judging layout.
// They show under `npm run dev` and are dropped from `npm run build`.
export const keep = ({ data }: { data: { sample: boolean } }) =>
	import.meta.env.DEV || !data.sample;

export const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
	b.data.date.getTime() - a.data.date.getTime();

// Dates in frontmatter are plain days, parsed as UTC midnight.
const dayFormat = new Intl.DateTimeFormat("en-GB", {
	day: "numeric",
	month: "short",
	year: "numeric",
	timeZone: "UTC",
});

export const formatDate = (d: Date) => dayFormat.format(d);
// dd/mm, for rows in a list. The year stays in the <time datetime>.
export const formatDayMonth = (d: Date) =>
	`${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const pad = (n: number) => String(n).padStart(2, "0");
export const isExternal = (url: string) => /^https?:\/\//.test(url);

// "3D and shaders" becomes "3d-and-shaders", for ids and URL parameters.
export const slug = (s: string) =>
	s
		.toLowerCase()
		.replace(/&/g, "and")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

// Where a link lives, for the gray text beside a title: owner/repo on GitHub, else the host.
export const sourceOf = (url: string) => {
	const u = new URL(url);
	const [owner, repo] = u.pathname.split("/").filter(Boolean);
	return u.hostname === "github.com" && repo ? `${owner}/${repo}` : u.hostname.replace(/^www\./, "");
};
