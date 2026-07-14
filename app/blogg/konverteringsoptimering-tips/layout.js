const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/konverteringsoptimering-tips",
  inLanguage: "sv-SE",
  headline: "Konverteringsoptimering: 10 ändringar som ger fler förfrågningar",
  description: "10 konkreta konverteringstips som ger fler förfrågningar från samma trafik: CTA, formulär, social proof, hastighet och tydlighet. Sorterat efter effekt.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Konverteringsoptimering", item: "https://www.stoltmarketing.se/blogg/konverteringsoptimering-tips" },
  ],
};

export const metadata = {
  title: "Konverteringsoptimering: 10 ändringar för fler leads",
  description: "10 konkreta konverteringstips som ger fler förfrågningar från samma trafik: CTA, formulär, social proof, hastighet och tydlighet. Sorterat efter effekt.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/konverteringsoptimering-tips" },
  openGraph: {
    title: "Konverteringsoptimering: 10 ändringar",
    description: "Samma trafik, fler kunder. 10 konkreta ändringar sorterade efter effekt.",
    url: "https://www.stoltmarketing.se/blogg/konverteringsoptimering-tips",
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
