#!/usr/bin/env node

const BASE_URL = process.env.BASE_URL || 'https://nevercodealone.projects.nevercodealone.de';
const PAGES = ['de'];
const NU_API = 'https://validator.w3.org/nu/?out=json';

async function main() {
  let totalErrors = 0;

  for (const page of PAGES) {
    const url = `${BASE_URL}/${page}`;
    console.log(`Fetching ${url} ...`);
    const html = await (await fetch(url)).text();

    console.log(`Validating with Nu HTML Checker ...`);
    const result = await (await fetch(NU_API, {
      method: 'POST',
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: html,
    })).json();

    const isAlpine = m => /Attribute .[x:@-]/.test(m.message);
    const errors = (result.messages || []).filter(m => m.type === 'error' && !isAlpine(m));
    const infos = (result.messages || []).filter(m => m.type === 'info').length;
    const warnings = (result.messages || []).filter(m => m.type === 'warning').length;

    console.log(`\n--- ${page} ---`);
    console.log(`  errors:   ${errors.length}`);
    console.log(`  warnings: ${warnings}`);
    console.log(`  info:     ${infos}`);

    if (errors.length > 0) {
      console.log('');
      errors.slice(0, 20).forEach(e => {
        console.log(`  line ${e.lastLine}: ${e.message}`);
      });
    }

    totalErrors += errors.length;
  }

  console.log(`\nTotal errors: ${totalErrors}`);
  process.exit(totalErrors > 0 ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(1); });
