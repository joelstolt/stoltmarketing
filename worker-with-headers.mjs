// Wrapper runt OpenNext-workern. Skarpa domänen (custom domain genom zonen)
// edge-cachar svar enligt s-maxage=31536000 som OpenNext sätter på prerendrad
// HTML - efter en deploy kan kanten då servera årsgammal HTML tills manuell
// purge. Hashade byggfiler och bilder får behålla långa cache-headers; allt
// annat (HTML, RSC-payloads, robots, sitemap) ska alltid revalideras mot
// workern.
import handler from "./.open-next/worker.js";
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";

const STATISK = /\.(css|js|mjs|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|otf|mp4|webm|pdf)$/i;

export default {
  async fetch(request, env, ctx) {
    const res = await handler.fetch(request, env, ctx);
    const { pathname } = new URL(request.url);
    if (pathname.startsWith("/_next/static/") || STATISK.test(pathname)) {
      return res;
    }
    const ut = new Response(res.body, res);
    ut.headers.set("cache-control", "public, max-age=0, must-revalidate");
    return ut;
  },
};
