export default function sitemap() {
  const baseUrl = "https://stoltmarketing.se";

  /* ── Statiska sidor ── */
  const pages = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/tjanster", changeFrequency: "monthly", priority: 0.9 },
    { url: "/tjanster/webbutveckling", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/managed-hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { url: "/projekt", changeFrequency: "monthly", priority: 0.7 },
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
    { slug: "vad-kostar-en-hemsida", date: "2026-03-15" },
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
  ];

  const blogPages = [
    { url: "/blogg", changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `/blogg/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: new Date(post.date),
    })),
  ];

  return [...pages, ...blogPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified || new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
