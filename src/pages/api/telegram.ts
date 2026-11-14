// The Telegram webhook. A tap on a button of the daily list arrives here as a POST.
// This is the only route besides /keystatic that runs the Worker. The logic is in
// pipeline/lib/handler.mjs so it can be tested without Astro.
import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";
import { handleUpdate } from "../../../pipeline/lib/handler.mjs";

export const prerender = false;

const REPO = "kyle-tran-quang/lovehateai";
const WORKFLOW = "publish.yml";

// Both strings are compared in full, whichever character differs first.
function same(a: string, b: string) {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return diff === 0;
}

export const POST: APIRoute = async ({ request }) => {
	const secret = getSecret("TELEGRAM_WEBHOOK_SECRET");
	const token = getSecret("TELEGRAM_BOT_TOKEN");
	const chatId = getSecret("TELEGRAM_CHAT_ID");
	const ghToken = getSecret("PUBLISH_GITHUB_TOKEN");
	if (!secret || !token || !chatId || !ghToken) return new Response("not set up", { status: 503 });

	// Telegram sends the secret it was given at setWebhook. Anything else is not Telegram.
	const sent = request.headers.get("x-telegram-bot-api-secret-token") ?? "";
	if (!same(sent, secret)) return new Response("no", { status: 401 });

	let update: unknown;
	try {
		update = await request.json();
	} catch {
		return new Response("bad request", { status: 400 });
	}

	const outcome = await handleUpdate(update, {
		token,
		chatId,
		log: (line: string) => console.error(`telegram: ${line}`),
		dispatch: async ({ issue, pick }: { issue: number; pick: string }) => {
			const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
				method: "POST",
				headers: {
					authorization: `Bearer ${ghToken}`,
					accept: "application/vnd.github+json",
					"x-github-api-version": "2022-11-28",
					"user-agent": "lovehateai-worker",
					"content-type": "application/json",
				},
				body: JSON.stringify({ ref: "main", inputs: { issue: String(issue), pick } }),
			});
			if (res.status !== 204) throw new Error(`GitHub answered ${res.status}`);
		},
	});

	// Always 200 once the secret checks out: Telegram retries anything else, and a retried
	// tap would flip a tick back.
	return new Response(outcome, { status: 200 });
};
