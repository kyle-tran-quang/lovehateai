// The links in the header and footer of every page except the homepage, whose own links
// jump to its sections. One list, so a new page is added in one place. The homepage's
// order is Articles, Inspos, AI skills, so this one follows it. The news pages are
// called Articles on the site now: the address stays /news/.
export const siteNav = [
	{ href: "/", label: "Home" },
	{ href: "/news/", label: "Articles" },
	{ href: "/inspos/", label: "Inspos" },
	{ href: "/skills/", label: "AI skills" },
	{ href: "/search/", label: "Search" },
];
