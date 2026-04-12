const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Business Profile — Komplett guide för företagare 2026",
  description: "Steg-för-steg-guide till Google Business Profile. Hur du gör krav på din listing, optimerar profilen, lägger till bilder, svarar på recensioner och rankar högre i Google Maps.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Google Business Profile — Komplett guide för företagare 2026", item: "https://stoltmarketing.se/blogg/google-business-profile-guide" },
  ],
};

export const metadata = {
  title: "Google Business Profile — Komplett guide för företagare 2026",
  description: "Steg-för-steg-guide till Google Business Profile. Sådan gör krav på din listing, lägger till bilder, svarar på recensioner och får fler lokala kunder via Google Maps.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/google-business-profile-guide" },
  openGraph: {
    title: "Google Business Profile — Komplett guide för företagare 2026",
    description: "Lär dig hur du optimerar din Google Business Profile för att få fler lokala kunder.",
    url: "https://stoltmarketing.se/blogg/google-business-profile-guide",
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
