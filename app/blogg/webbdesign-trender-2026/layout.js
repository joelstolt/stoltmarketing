const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Webbdesign-trender 2026 — Vad som faktiskt spelar roll",
  description: "De viktigaste webbdesign-trenderna 2026. AI-genererat innehåll, bento grids, mikroanimationer, dark mode och varför prestanda slår estetik.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Webbdesign-trender 2026", item: "https://stoltmarketing.se/blogg/webbdesign-trender-2026" },
  ],
};

export const metadata = {
  title: "Webbdesign-trender 2026 — Vad som faktiskt spelar roll",
  description: "De viktigaste webbdesign-trenderna 2026 för företag. AI, bento grids, mikroanimationer, tillgänglighet och prestanda. Baserat på 150+ levererade projekt.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/webbdesign-trender-2026" },
  openGraph: {
    title: "Webbdesign-trender 2026 — Vad som faktiskt spelar roll",
    description: "De viktigaste webbdesign-trenderna 2026. AI, prestanda och tillgänglighet.",
    url: "https://stoltmarketing.se/blogg/webbdesign-trender-2026",
    type: "article",
  },
};

export default function ArticleLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
