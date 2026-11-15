// The sitemap, as a plain endpoint: no integration, so no client code and no new dependency.
// It is built with the site, so it lists exactly the pages that exist.
//
// The addresses must be absolute, so it needs `site` in astro.config.mjs. Until that is set
// it lists nothing: an empty, valid sitemap. Two other ways were tried and both are worse.
// A "Not found" body is served as a 200, so crawlers would read it as a sitemap. Leaving
// the route out with getStaticPaths isn't honored for a static endpoint, and the build
// crashes instead. An empty list is true ("no pages listed yet") and keeps the build up.
// robots.txt only points at this file once `site` is set.
//
// Not listed: the two temporary pages (article-example, dev-check), the admin, and the API.
// A recipe is a sheet on /inspos/, not a page of its own, so it has no address to list.
import type { APIRoute } from "astro";

// Every public page the site builds. A new page is added here.
const paths = ["/", "/news/", "/inspos/", "/skills/", "/search/"];

export const GET: APIRoute = ({ site }) => {
	const urls = site ? paths.map((p) => `\t<url><loc>${new URL(p, site).href}</loc></url>\n`).join("") : "";
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}</urlset>\n`;

	return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
