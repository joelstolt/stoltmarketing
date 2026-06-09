const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/hemsida-som-saljer",
  inLanguage: "sv-SE",
  headline: "5 saker som skiljer en hemsida som säljer från en som bara finns",
  description: "Vad gör en hemsida verkligen framgångsrik? 5 konkreta faktorer som skiljer hemsidor som genererar leads från de som bara existerar.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Hemsida som säljer", item: "https://www.stoltmarketing.se/blogg/hemsida-som-saljer" },
  ],
};

export const metadata = {
  title: "5 saker som skiljer en hemsida som säljer från en som bara finns",
  description: "Vad gör en hemsida verkligen generera leads? Värdeerbjudande, social proof, CTAs, hastighet och SEO. 5 faktorer som skiljer framgångsrika från svaga hemsidor.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/hemsida-som-saljer" },
  openGraph: {
    title: "5 saker som skiljer en hemsida som säljer från en som bara finns",
    description: "De 5 viktigaste faktorerna för en konverterande hemsida. Från värdeerbjudande till SEO.",
    url: "https://www.stoltmarketing.se/blogg/hemsida-som-saljer",
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
