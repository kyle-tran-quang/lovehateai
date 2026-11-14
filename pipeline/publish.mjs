#!/usr/bin/env node
// Writes the ticked stories of one daily list into src/content/news/. It changes files and
// nothing else: the workflow commits them, and closes the issue after the push.
//
//   node pipeline/publish.mjs --issue 123 --pick 1,3,4 [--summary FILE]
//
// Reads the list from the issue. It refuses an issue the Actions bot did not open (the repo
// is public, so anyone can open one), and one that is already closed.

import { writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gh, repo, isOurs } from './lib/github.mjs';
import { parseIssueBody } from './lib/issue.mjs';
import { assertCandidate, canonicalUrl, entryText, fileBase, siteUrls } from './lib/entry.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const NEWS = join(HERE, '..', 'src', 'content', 'news');
const args = process.argv.slice(2);
const opt = (n) => {
  const i = args.indexOf(`--${n}`);
  return i === -1 ? null : args[i + 1];
};

const issueNo = Number(opt('issue'));
const pick = (opt('pick') ?? '').split(',').map((s) => Number(s.trim())).filter((n) => Number.isInteger(n) && n > 0);
if (!Number.isInteger(issueNo) || issueNo < 1 || !pick.length) {
  console.error('usage: node pipeline/publish.mjs --issue N --pick 1,3 [--summary FILE]');
  process.exit(1);
}

const issue = await gh(`/repos/${repo()}/issues/${issueNo}`);
if (!isOurs(issue)) throw new Error(`#${issueNo} is not a daily list from the bot`);
if (issue.state !== 'open') throw new Error(`#${issueNo} was already published`);

const list = parseIssueBody(issue.body);
const have = await siteUrls(NEWS);
const done = [];
const skipped = [];

for (const n of [...new Set(pick)]) {
  const c = list[n - 1];
  if (!c) {
    skipped.push(`#${n}: not in the list`);
    continue;
  }
  assertCandidate(c);
  const url = canonicalUrl(c.url);
  const same = canonicalUrl(c.url, { forCompare: true });
  if (have.has(same)) {
    skipped.push(`${c.title}: already on the site`);
    continue;
  }
  // Never overwrite a file, even one with the same name and another URL.
  let name = fileBase(c);
  for (let i = 2; await access(join(NEWS, `${name}.md`)).then(() => true, () => false); i++) name = `${fileBase(c)}-${i}`;
  await writeFile(join(NEWS, `${name}.md`), entryText({ ...c, url }));
  have.add(same);
  done.push({ file: `${name}.md`, title: c.title });
  console.log(`wrote src/content/news/${name}.md`);
}

for (const s of skipped) console.log(`skipped ${s}`);
const summary = opt('summary');
if (summary) await writeFile(summary, JSON.stringify({ done, skipped }, null, 2));
if (!done.length) process.exitCode = 3; // nothing to commit: the workflow stops here and says so
