export const dynamic = "force-dynamic";

export default function sitemap() {
  const baseUrl = "https://www.stoltmarketing.se";
  // Stabil lastmod för statiska sidor (ändras inte vid varje bygge).
  const LASTMOD = new Date("2026-06-05");

  /* ── Statiska sidor ── */
  const pages = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
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
    { url: "/serviceavtal", changeFrequency: "monthly", priority: 0.7 },
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
  const blogPosts = [
    // vad-kostar-en-hemsida flyttad till pillar-sidan /vad-kostar-en-hemsida (301 i middleware)
    { slug: "wordpress-vs-nextjs", date: "2026-03-15" },
    { slug: "seo-for-smaforetag", date: "2026-03-15" },
    { slug: "lokal-seo-guide", date: "2026-04-12" },
    { slug: "webbdesign-trender-2026", date: "2026-04-12" },
    { slug: "ai-for-foretag", date: "2026-04-12" },
    { slug: "google-ads-vs-seo", date: "2026-04-19" },
    { slug: "hemsida-som-saljer", date: "2026-04-26" },
    { slug: "wordpress-eller-webbyra", date: "2026-05-03" },
    { slug: "e-handel-guide", date: "2026-05-10" },
    { slug: "google-business-profile-guide", date: "2026-05-17" },
    { slug: "varfor-snabb-hemsida", date: "2026-05-24" },
    { slug: "content-strategi-smaforetag", date: "2026-05-31" },
    { slug: "valja-seo-byra", date: "2026-07-14" },
    { slug: "hemsida-inga-kunder", date: "2026-07-16" },
    { slug: "seo-tips-smaforetag", date: "2026-07-18" },
    { slug: "vad-kostar-google-ads", date: "2026-07-21" },
    { slug: "chatbot-for-foretag", date: "2026-07-23" },
    { slug: "seo-analys-sjalv", date: "2026-07-25" },
    { slug: "vad-kostar-webbutik", date: "2026-07-28" },
    { slug: "landningssida-som-konverterar", date: "2026-07-30" },
    { slug: "sokordsanalys-nyborjare", date: "2026-08-01" },
    { slug: "ai-verktyg-smaforetag", date: "2026-08-04" },
    { slug: "betallosningar-webbutik", date: "2026-08-06" },
    { slug: "google-ads-byra-eller-sjalv", date: "2026-08-08" },
    { slug: "teknisk-seo-guide", date: "2026-08-11" },
    { slug: "konverteringsoptimering-tips", date: "2026-08-13" },
    { slug: "marknadsforing-smaforetag", date: "2026-08-15" },
    { slug: "checklista-ny-hemsida", date: "2026-08-18" },
    { slug: "automatisera-med-ai", date: "2026-08-20" },
    { slug: "valja-domannamn", date: "2026-08-22" },
    { slug: "moms-regler-e-handel", date: "2026-08-25" },
    { slug: "e-postmarknadsforing-smaforetag", date: "2026-08-27" },
  ];

  const todayStr = new Date().toISOString().slice(0, 10);

  const blogPages = [
    { url: "/blogg", changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts
      .filter((post) => post.date <= todayStr)
      .map((post) => ({
      url: `/blogg/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: new Date(post.date),
      })),
  ];

  return [...pages, ...blogPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified || LASTMOD,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
