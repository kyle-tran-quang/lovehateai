// GitHub REST calls for the Node scripts. Reads GITHUB_TOKEN and GITHUB_REPOSITORY, which
// Actions provides. The token is never logged.

const API = 'https://api.github.com';

export function repo() {
  const r = process.env.GITHUB_REPOSITORY;
  if (!r) throw new Error('GITHUB_REPOSITORY is not set');
  return r;
}

export async function gh(path, { method = 'GET', body } = {}) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is not set');
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      authorization: `Bearer ${token}`,
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      'user-agent': 'lovehateai-pipeline',
      ...(body ? { 'content-type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`GitHub ${method} ${path}: ${json.message ?? res.status}`);
  return json;
}

// A candidates issue is one the Actions bot opened with this title. The repo is public,
// so anyone can open an issue. Only the bot's count.
export const BOT = 'github-actions[bot]';
export const TITLE = /^Candidates \d{4}-\d{2}-\d{2}$/;
export const isOurs = (issue) => !issue.pull_request && issue.user?.login === BOT && TITLE.test(issue.title ?? '');
