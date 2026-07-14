const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/seo-tips-smaforetag",
  inLanguage: "sv-SE",
  headline: "17 SEO-tips för småföretag som faktiskt ger resultat 2026",
  description: "17 konkreta SEO-tips för småföretag: on-page, innehåll, teknik och lokalt. Enkla att börja med, sorterade efter effekt.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "17 SEO-tips", item: "https://www.stoltmarketing.se/blogg/seo-tips-smaforetag" },
  ],
};

export const metadata = {
  title: "17 SEO-tips för småföretag som ger resultat 2026",
  description: "17 konkreta SEO-tips för småföretag: on-page, innehåll, teknik och lokalt. Enkla att börja med, sorterade efter effekt.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/seo-tips-smaforetag" },
  openGraph: {
    title: "17 SEO-tips för småföretag (2026)",
    description: "Konkreta SEO-tips du kan börja med idag, sorterade från enklast till mest värdefulla.",
    url: "https://www.stoltmarketing.se/blogg/seo-tips-smaforetag",
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
