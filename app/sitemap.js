export default function sitemap() {
  const baseUrl = "https://stoltmarketing.se";

  const pages = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/tjanster", changeFrequency: "monthly", priority: 0.9 },
    { url: "/tjanster/webbutveckling", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/seo", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tjanster/managed-hemsida", changeFrequency: "monthly", priority: 0.8 },
    { url: "/projekt", changeFrequency: "monthly", priority: 0.7 },
    { url: "/om", changeFrequency: "monthly", priority: 0.6 },
    { url: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
    { url: "/boka", changeFrequency: "monthly", priority: 0.8 },
    { url: "/integritet", changeFrequency: "yearly", priority: 0.3 },
    { url: "/hassleholm/hemsida", changeFrequency: "monthly", priority: 0.8 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
