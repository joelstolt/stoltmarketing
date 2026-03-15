const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vad kostar en hemsida 2026? Komplett prisguide för företag",
  description: "Komplett prisguide för hemsidor 2026. Från gratis-verktyg till skräddarsydda lösningar — vad du betalar för och vad som är värt pengarna.",
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
    { "@type": "ListItem", position: 3, name: "Vad kostar en hemsida?", item: "https://stoltmarketing.se/blogg/vad-kostar-en-hemsida" },
  ],
};

export const metadata = {
  title: "Vad kostar en hemsida 2026? Komplett prisguide för företag",
  description: "Komplett prisguide för hemsidor 2026. Från gratis-verktyg till skräddarsydd utveckling. Vad du faktiskt betalar för och vad som är värt pengarna.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/vad-kostar-en-hemsida" },
  openGraph: {
    title: "Vad kostar en hemsida 2026? Komplett prisguide",
    description: "Allt du behöver veta om priser för hemsidor. Från DIY till skräddarsytt.",
    url: "https://stoltmarketing.se/blogg/vad-kostar-en-hemsida",
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
