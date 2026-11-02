const html = /*HTML*/"";
const common = {
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'none'; form-action 'none'; base-uri 'none'; frame-ancestors 'none'",
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'Cache-Control': 'no-store',
};
export default {
  async fetch(request) {
    let status = 200;
    let body = html;
    const headers = { ...common, 'Content-Type': 'text/html; charset=utf-8' };
    const path = new URL(request.url).pathname;
    if (!['GET', 'HEAD'].includes(request.method)) {
      status = 405; body = 'Endast visning. Inget tas emot.'; headers.Allow = 'GET, HEAD';
    } else if (path === '/robots.txt') {
      body = 'User-agent: *\nDisallow: /\n'; headers['Content-Type'] = 'text/plain; charset=utf-8';
    } else if (path !== '/') { status = 404; body = 'Sidan finns inte.'; }
    return new Response(request.method === 'HEAD' ? null : body, { status, headers });
  }
};
