// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Adds the annotation toolbar under `npm run dev` only. The build never sees it.
/** @type {import('astro').AstroIntegration} */
const devAnnotate = {
	name: 'dev-annotate',
	hooks: {
		'astro:config:setup': ({ command, injectScript }) => {
			if (command !== 'dev') return;
			injectScript('page', 'import "/src/dev/annotate.ts";');
		},
	},
};

// https://astro.build/config
//
// Hosting is Cloudflare Workers. The site stays static: every page is built to a file
// and served from Cloudflare's asset store, which is free and unmetered. Only the two
// Keystatic routes (/keystatic and /api/keystatic) run as a Worker. Keystatic needs the
// React integration for its admin UI, and React reaches only those admin pages.
//
// The Cloudflare adapter loads for `astro build` only. Under `astro dev` it would run the
// server routes in workerd, which has no filesystem, and Keystatic's local storage (the
// dev editor, which saves straight to files) needs one. So dev runs on Node with
// storage `local`, and the build targets Workers with storage `github`.
const isBuild = process.argv.includes('build');

export default defineConfig({
	adapter: isBuild ? cloudflare({ imageService: 'compile' }) : undefined,
	// No sessions on this site. Without this the adapter adds a KV namespace to provision.
	session: false,
	// A recipe's prompt and settings sit in fenced blocks. The default highlighter paints a
	// dark fill and colored tokens on them, which the site doesn't allow. With it off they
	// are plain <pre> blocks, styled with rules on the recipe page.
	markdown: { syntaxHighlight: false },
	integrations: [react(), keystatic(), devAnnotate],
	// Keystatic reads these through astro:env. They are set in .env locally and as
	// secrets on Cloudflare. See CLAUDE.md.
	env: {
		schema: {
			KEYSTATIC_GITHUB_CLIENT_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
			KEYSTATIC_GITHUB_CLIENT_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
			KEYSTATIC_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
			PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: envField.string({ context: 'client', access: 'public', optional: true }),
			// The Telegram button handler, src/pages/api/telegram.ts. All four are secrets on the Worker.
			TELEGRAM_BOT_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
			TELEGRAM_CHAT_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
			TELEGRAM_WEBHOOK_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
			PUBLISH_GITHUB_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
		},
	},
});
