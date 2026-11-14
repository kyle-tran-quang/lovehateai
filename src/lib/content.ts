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
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const pad = (n: number) => String(n).padStart(2, "0");
export const isExternal = (url: string) => /^https?:\/\//.test(url);
