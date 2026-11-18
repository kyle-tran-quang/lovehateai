#!/usr/bin/env node
// Writes the ticked items of one daily list into src/content/news/ (a "Candidates" issue) or
// src/content/inspos/ (an "Inspos" issue). It changes files and nothing else: the workflow
// commits them, and closes the issue after the push.
//
//   node pipeline/publish.mjs --issue 123 --pick 1,3,4 [--summary FILE]
//
// Reads the list from the issue. It refuses an issue the Actions bot did not open (the repo
// is public, so anyone can open one), and one that is already closed.

import { writeFile, access, readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gh, repo, isOurs, kindOf } from './lib/github.mjs';
import { parseIssueBody } from './lib/issue.mjs';
import { assertCandidate, canonicalUrl, entryText, fileBase, siteUrls, slugify } from './lib/entry.mjs';
import { assertInspo, inspoEntryText, inspoFileBase, postKey } from './lib/inspo.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(HERE, '..', 'src', 'content');
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

// Every post URL already in a content folder (inspo entries keep theirs in `url:`).
async function entryUrls(dir) {
  const urls = [];
  for (const f of await readdir(dir).catch(() => [])) {
    if (!f.endsWith('.md')) continue;
    const m = (await readFile(join(dir, f), 'utf8')).match(/^url:\s*["']?(\S+?)["']?\s*$/m);
    if (m) urls.push(m[1]);
  }
  return urls;
}

const issue = await gh(`/repos/${repo()}/issues/${issueNo}`);
if (!isOurs(issue)) throw new Error(`#${issueNo} is not a daily list from the bot`);
if (issue.state !== 'open') throw new Error(`#${issueNo} was already published`);

const inspos = kindOf(issue) === 'inspos';
const DIR = join(CONTENT, inspos ? 'inspos' : 'news');
const REL = `src/content/${inspos ? 'inspos' : 'news'}`;
// News compares canonical story links. Inspos compare the post, so x.com and twitter.com match.
const keyOf = inspos ? postKey : (u) => canonicalUrl(u, { forCompare: true });
const list = parseIssueBody(issue.body);
const have = inspos ? new Set() : await siteUrls(DIR);
if (inspos) for (const u of await entryUrls(DIR)) have.add(keyOf(u));
const done = [];
const skipped = [];

for (const n of [...new Set(pick)]) {
  const c = list[n - 1];
  if (!c) {
    skipped.push(`#${n}: not in the list`);
    continue;
  }
  if (inspos) assertInspo(c);
  else assertCandidate(c);
  const url = inspos ? c.url : canonicalUrl(c.url);
  const same = keyOf(c.url);
  if (have.has(same)) {
    skipped.push(`${c.title}: already on the site`);
    continue;
  }
  // Never overwrite a file, even one with the same name and another URL.
  const base = inspos ? inspoFileBase(c, slugify) : fileBase(c);
  let name = base;
  for (let i = 2; await access(join(DIR, `${name}.md`)).then(() => true, () => false); i++) name = `${base}-${i}`;
  await writeFile(join(DIR, `${name}.md`), inspos ? inspoEntryText(c) : entryText({ ...c, url }));
  have.add(same);
  done.push({ file: `${name}.md`, title: c.title });
  console.log(`wrote ${REL}/${name}.md`);
}

for (const s of skipped) console.log(`skipped ${s}`);
const summary = opt('summary');
if (summary) await writeFile(summary, JSON.stringify({ kind: inspos ? 'inspos' : 'news', done, skipped }, null, 2));
if (!done.length) process.exitCode = 3; // nothing to commit: the workflow stops here and says so
