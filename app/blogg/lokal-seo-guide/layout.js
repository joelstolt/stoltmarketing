const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/lokal-seo-guide",
  inLanguage: "sv-SE",
  headline: "Lokal SEO — Så syns ditt företag i Google Maps och lokala sökningar",
  description: "Komplett guide till lokal SEO för svenska företag. Google Business Profile, lokala sökord, recensioner och NAP-konsistens. Steg-för-steg.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Lokal SEO-guide", item: "https://www.stoltmarketing.se/blogg/lokal-seo-guide" },
  ],
};

export const metadata = {
  title: "Lokal SEO — Så syns ditt företag på Google Maps 2026",
  description: "Komplett guide till lokal SEO för svenska företag. Google Business Profile, lokala sökord, recensioner och NAP-konsistens. Steg-för-steg utan budget.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/lokal-seo-guide" },
  openGraph: {
    title: "Lokal SEO — Så syns ditt företag på Google Maps",
    description: "Steg-för-steg guide till lokal SEO. Google Business Profile, recensioner, NAP och mer.",
    url: "https://www.stoltmarketing.se/blogg/lokal-seo-guide",
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
