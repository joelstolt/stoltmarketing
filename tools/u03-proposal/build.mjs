import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

// A small standalone adaptation of app/vvs/WorkflowDemo.jsx and vvs.module.css.
// Prospect records are supplied from a private folder, never committed here.
const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error('Usage: node build.mjs private-input.json output-directory');
const template = await readFile(new URL('./page.html', import.meta.url), 'utf8');
const client = await readFile(new URL('./interaction.js', import.meta.url), 'utf8');
const worker = await readFile(new URL('./worker.mjs', import.meta.url), 'utf8');
const entries = JSON.parse(await readFile(input, 'utf8'));
const escape = text => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
for (const item of entries) {
  if (!/^[a-z0-9-]+-forslag$/.test(item.worker)) throw new Error('Proposal Worker names must end in -forslag');
  const dest = resolve(output, item.worker);
  await mkdir(dest, { recursive: true });
  const html = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (key === 'client') return client;
    if (key === 'options') return item.jobs.map(j => `<option>${escape(j)}</option>`).join('');
    if (!(key in item)) throw new Error(`Missing template value: ${key}`);
    return escape(item[key]);
  });
  await writeFile(resolve(dest, 'index.html'), html);
  await writeFile(resolve(dest, 'worker.mjs'), worker.replace('/*HTML*/""', JSON.stringify(html)));
  await writeFile(resolve(dest, 'wrangler.json'), JSON.stringify({
    name: item.worker, main: 'worker.mjs', compatibility_date: '2026-10-01',
    workers_dev: true, routes: [], observability: { enabled: false }
  }, null, 2) + '\n');
  console.log(`BUILT ${item.worker}: ${Buffer.byteLength(html)} bytes`);
}
