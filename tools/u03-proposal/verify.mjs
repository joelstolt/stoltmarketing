import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import vm from 'node:vm';

const [input, output] = process.argv.slice(2);
const items = JSON.parse(await readFile(input, 'utf8'));
let count = 0;
for (const item of items) {
  const root = resolve(output, item.worker);
  const { default: worker } = await import(pathToFileURL(resolve(root, 'worker.mjs')));
  const get = await worker.fetch(new Request('https://example.test/'));
  assert.equal(get.status, 200);
  assert.match(get.headers.get('X-Robots-Tag'), /noindex/);
  const html = await get.text();
  assert.match(html, /<meta name="robots" content="noindex,nofollow,noarchive">/);
  assert.ok(html.includes(item.brand.replaceAll('&', '&amp;')));
  assert.match(get.headers.get('Content-Security-Policy'), /connect-src 'none'/);
  assert.ok(!/<form\b|fetch\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|https?:\/\//i.test(html));
  const robots = await worker.fetch(new Request('https://example.test/robots.txt'));
  assert.equal(await robots.text(), 'User-agent: *\nDisallow: /\n');
  const post = await worker.fetch(new Request('https://example.test/', { method: 'POST', body: 'test' }));
  assert.equal(post.status, 405);
  const missing = await worker.fetch(new Request('https://example.test/missing'));
  assert.equal(missing.status, 404);
  assert.match(missing.headers.get('X-Robots-Tag'), /noindex/);
  const head = await worker.fetch(new Request('https://example.test/', { method: 'HEAD' }));
  assert.equal(await head.text(), '');
  const elements = new Map();
  let focused = '';
  const el = id => {
    if (!elements.has(id)) elements.set(id, { hidden: false, handlers: {},
      addEventListener(event, handler) { this.handlers[event] = handler; },
      focus() { focused = id; }, value: '', textContent: '', selectedIndex: 1 });
    return elements.get(id);
  };
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  vm.runInNewContext(script, { document: { getElementById: el } });
  el('job').value = item.jobs[1]; el('timing').value = 'Inom en månad';
  el('show-summary').handlers.click();
  assert.equal(el('chosen-job').textContent, item.jobs[1]);
  assert.equal(el('chosen-time').textContent, 'Inom en månad');
  assert.equal(el('intake').hidden, true); assert.equal(el('summary').hidden, false);
  assert.equal(focused, 'summary-heading');
  el('show-followup').handlers.click();
  assert.equal(el('followup').hidden, false); assert.equal(focused, 'followup-heading');
  el('reset').handlers.click();
  assert.equal(el('intake').hidden, false); assert.equal(el('summary').hidden, true);
  assert.equal(el('followup').hidden, true); assert.equal(el('job').selectedIndex, 0);
  assert.equal(focused, 'job');
  console.log(`PASS ${item.worker}: HTTP, noindex, write rejection, no network/storage, local interaction`);
  count++;
}
console.log(`PASS ${count}/${items.length} proposals. No browser or external form submissions used.`);
