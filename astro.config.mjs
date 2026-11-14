// @ts-check
import { defineConfig } from 'astro/config';

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
export default defineConfig({
	integrations: [devAnnotate],
});
