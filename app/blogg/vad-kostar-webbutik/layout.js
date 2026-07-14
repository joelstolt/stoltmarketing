const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/vad-kostar-webbutik",
  inLanguage: "sv-SE",
  headline: "Vad kostar en webbutik 2026? Komplett prisguide för e-handel",
  description: "Vad kostar det att starta en webbutik? Plattformar, bygge, betalning, frakt och löpande drift uppdelat, med realistiska prisintervall.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Vad kostar en webbutik", item: "https://www.stoltmarketing.se/blogg/vad-kostar-webbutik" },
  ],
};

export const metadata = {
  title: "Vad kostar en webbutik 2026? Prisguide e-handel",
  description: "Vad kostar det att starta en webbutik? Plattformar, bygge, betalning, frakt och löpande drift uppdelat, med realistiska prisintervall.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/vad-kostar-webbutik" },
  openGraph: {
    title: "Vad kostar en webbutik 2026?",
    description: "Plattform, bygge, betalning och drift uppdelat, med realistiska prisintervall för svensk e-handel.",
    url: "https://www.stoltmarketing.se/blogg/vad-kostar-webbutik",
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
