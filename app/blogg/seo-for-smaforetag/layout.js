const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SEO för småföretag — 7 steg som faktiskt fungerar",
  description: "Praktisk SEO-guide för småföretag. 7 steg du kan göra själv — från Google Business Profile till content-strategi. Ingen budget krävs.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-15",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "SEO för småföretag", item: "https://stoltmarketing.se/blogg/seo-for-smaforetag" },
  ],
};

export const metadata = {
  title: "SEO för småföretag 2026 — 7 steg som faktiskt fungerar",
  description: "Praktisk SEO-guide för småföretag. Google Business Profile, title tags, content-strategi och mer. 7 steg du kan göra själv utan budget.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/seo-for-smaforetag" },
  openGraph: {
    title: "SEO för småföretag — 7 steg som faktiskt fungerar",
    description: "Praktisk SEO-guide. 7 steg du kan göra själv utan budget.",
    url: "https://stoltmarketing.se/blogg/seo-for-smaforetag",
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
