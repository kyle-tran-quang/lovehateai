// robots.txt, as an endpoint, so its Sitemap line can follow `site` and never needs a second
// edit. Everything is open to crawlers except the admin and the API, which are not pages.
//
// The temporary pages are kept out with a noindex tag on the pages themselves, not here:
// a page blocked in robots.txt can't be crawled, so a crawler would never see its noindex.
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	const lines = ["User-agent: *", "Disallow: /keystatic", "Disallow: /api/", ""];
	if (site) lines.push(`Sitemap: ${new URL("/sitemap.xml", site).href}`, "");

	return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
