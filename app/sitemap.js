import { getBlogPosts } from "@/lib/blog-data";

export const dynamic = "force-dynamic";

export default function sitemap() {
  const baseUrl = "https://www.stoltmarketing.se";
  // Stabil lastmod för statiska sidor (ändras inte vid varje bygge).
  const LASTMOD = new Date("2026-10-04");

  /* ── Statiska sidor ── */
  const pages = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/forfragningar", changeFrequency: "monthly", priority: 0.95 },
    { url: "/tjanster", changeFrequency: "monthly", priority: 0.9 },
    { url: "/priser", changeFrequency: "monthly", priority: 0.9 },
    { url: "/tjanster/webbutveckling", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/managed-hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/e-handel", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/wordpress", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/facebook-annonsering", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/ai-synlighet", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tillganglighet", changeFrequency: "monthly", priority: 0.8 },
    { url: "/sajtkoll", changeFrequency: "monthly", priority: 0.8 },
    { url: "/guider", changeFrequency: "weekly", priority: 0.8 },
    { url: "/guider/fler-google-recensioner", changeFrequency: "monthly", priority: 0.7 },
    { url: "/guider/synas-i-ai-sok", changeFrequency: "monthly", priority: 0.7 },
    { url: "/guider/chatgpt-for-smaforetag", changeFrequency: "monthly", priority: 0.7 },
    { url: "/sokmotoroptimering", changeFrequency: "monthly", priority: 0.9 },
    { url: "/hemsida-foretag", changeFrequency: "monthly", priority: 0.9 },
    { url: "/vad-kostar-en-hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/vad-kostar-seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/projekt/batteriproffs", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/forskolan-harpan", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/pingstkyrkan", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/gardetshundtrim", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/edshare", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/linguista", changeFrequency: "monthly", priority: 0.7 },
    { url: "/hantverkssajter", changeFrequency: "yearly", priority: 0.8 },
    { url: "/projekt/niklassonsflytt", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/arkipel", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/ngtab", changeFrequency: "monthly", priority: 0.7 },
    { url: "/projekt/premiebygg", changeFrequency: "monthly", priority: 0.7 },
    { url: "/om", changeFrequency: "monthly", priority: 0.6 },
    { url: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
    { url: "/boka", changeFrequency: "monthly", priority: 0.8 },
    { url: "/integritet", changeFrequency: "yearly", priority: 0.3 },
    /* Platssidor */
    { url: "/hassleholm", changeFrequency: "monthly", priority: 0.8 },
    { url: "/hassleholm/hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/hassleholm/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/hassleholm/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/hassleholm/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/kristianstad", changeFrequency: "monthly", priority: 0.8 },
    { url: "/kristianstad/hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/kristianstad/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/kristianstad/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/kristianstad/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/helsingborg", changeFrequency: "monthly", priority: 0.8 },
    { url: "/helsingborg/hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/helsingborg/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/helsingborg/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/helsingborg/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/malmo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/malmo/hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/malmo/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/malmo/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/malmo/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/lund", changeFrequency: "monthly", priority: 0.8 },
    { url: "/lund/hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/lund/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/lund/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/lund/ai-automation", changeFrequency: "monthly", priority: 0.8 },
  ];

  /* ── Blogg ── */
  const blogPosts = getBlogPosts();

  const todayStr = new Date().toISOString().slice(0, 10);

  const blogPages = [
    { url: "/blogg", changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts
      .filter((post) => post.publishedDate <= todayStr)
      .map((post) => ({
      url: `/blogg/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: new Date(post.updatedDate || post.publishedDate),
      })),
  ];

  return [...pages, ...blogPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified || LASTMOD,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
