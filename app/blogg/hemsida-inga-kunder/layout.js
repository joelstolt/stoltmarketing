const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/hemsida-inga-kunder",
  inLanguage: "sv-SE",
  headline: "Därför får din hemsida inga kunder: 7 orsaker (och hur du fixar dem)",
  description: "Snygg hemsida men inga förfrågningar? De 7 vanligaste orsakerna till att en sajt inte konverterar, och konkreta fixar för varje.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Hemsida utan kunder", item: "https://www.stoltmarketing.se/blogg/hemsida-inga-kunder" },
  ],
};

export const metadata = {
  title: "Hemsidan får inga kunder? 7 orsaker och fixar",
  description: "Snygg hemsida men inga förfrågningar? De 7 vanligaste orsakerna till att en sajt inte konverterar, och konkreta fixar för varje.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/hemsida-inga-kunder" },
  openGraph: {
    title: "Därför får din hemsida inga kunder (7 orsaker)",
    description: "De 7 vanligaste orsakerna till att en hemsida inte drar in förfrågningar, och hur du fixar varje.",
    url: "https://www.stoltmarketing.se/blogg/hemsida-inga-kunder",
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
