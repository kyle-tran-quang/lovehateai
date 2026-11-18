#!/usr/bin/env node
// Writes the URLs of every story already offered in a daily list, open or closed, to a file.
// fetch.mjs reads it with --skip-file, so a story you ignored never comes back.
//
//   node pipeline/offered.mjs OUT.json [--kind news|inspos]

import { writeFile } from 'node:fs/promises';
import { gh, repo, isOurs, kindOf } from './lib/github.mjs';
import { urlsIn } from './lib/issue.mjs';

const out = process.argv[2];
const ki = process.argv.indexOf('--kind');
const kind = ki === -1 ? 'news' : process.argv[ki + 1];
if (!['news', 'inspos'].includes(kind)) throw new Error('--kind is news or inspos');
if (!out) {
  console.error('usage: node pipeline/offered.mjs OUT.json');
  process.exit(1);
}

const urls = new Set();
// Three pages of 100 is a year of daily lists.
for (let page = 1; page <= 3; page++) {
  const issues = await gh(`/repos/${repo()}/issues?state=all&per_page=100&page=${page}&sort=created&direction=desc`);
  for (const issue of issues) if (isOurs(issue) && kindOf(issue) === kind) for (const u of urlsIn(issue.body)) urls.add(u);
  if (issues.length < 100) break;
}
await writeFile(out, JSON.stringify([...urls], null, 2));
console.log(`${urls.size} ${kind === 'inspos' ? 'posts' : 'stories'} already offered`);
