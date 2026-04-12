const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI för företag 2026 — Praktiska användningsområden som ger resultat",
  description: "Så använder svenska företag AI i vardagen 2026. Chatbots, automatisering, content och kundservice. Konkreta exempel och var du börjar.",
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
    { "@type": "ListItem", position: 3, name: "AI för företag", item: "https://stoltmarketing.se/blogg/ai-for-foretag" },
  ],
};

export const metadata = {
  title: "AI för företag 2026 — Praktiska användningsområden som ger resultat",
  description: "Så använder svenska småföretag AI i vardagen. Chatbots, automatisering, content-skapande och kundservice. Konkreta exempel utan hype.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/ai-for-foretag" },
  openGraph: {
    title: "AI för företag 2026 — Praktiska användningsområden",
    description: "Konkreta AI-användningsområden för svenska företag. Chatbots, automatisering och content.",
    url: "https://stoltmarketing.se/blogg/ai-for-foretag",
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
