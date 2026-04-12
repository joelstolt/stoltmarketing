const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Varför en snabb hemsida ger dig fler kunder (och bättre SEO)",
  description: "Lär dig varför hemsidans hastighet är kritisk för konvertering och Google-ranking. Core Web Vitals förklarade enkelt. Praktiska tips för att göra din sajt snabbare.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-05-24",
  dateModified: "2026-05-24",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Varför en snabb hemsida ger dig fler kunder", item: "https://stoltmarketing.se/blogg/varfor-snabb-hemsida" },
  ],
};

export const metadata = {
  title: "Varför en snabb hemsida ger dig fler kunder (och bättre SEO)",
  description: "Hemsidans hastighet påverkar både konvertering och Google-ranking. Core Web Vitals förklarade enkelt. Praktiska tips för en snabbare sajt.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/varfor-snabb-hemsida" },
  openGraph: {
    title: "Varför en snabb hemsida ger dig fler kunder (och bättre SEO)",
    description: "Varje sekund av fördröjning kostar dig kunder. Här är vad du behöver veta om hemsidans hastighet.",
    url: "https://stoltmarketing.se/blogg/varfor-snabb-hemsida",
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
