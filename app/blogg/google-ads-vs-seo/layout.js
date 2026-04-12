const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads vs SEO — Vad ska du satsa på?",
  description: "Jämförelse mellan Google Ads och SEO. Vilket är bäst för ditt företag? Kostnader, tid till resultat, långsiktig ROI och hur du kombinerar båda för maximal effekt.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Google Ads vs SEO", item: "https://stoltmarketing.se/blogg/google-ads-vs-seo" },
  ],
};

export const metadata = {
  title: "Google Ads vs SEO — Vad ska du satsa på?",
  description: "Fullständig jämförelse mellan Google Ads och SEO för svenska företag. Kostnader, resultat, tidshorisont och den bästa strategin för din situation.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/google-ads-vs-seo" },
  openGraph: {
    title: "Google Ads vs SEO — Vad ska du satsa på?",
    description: "Betald vs organisk trafik — kostnader, tid och resultat jämförda för små och medelstora företag.",
    url: "https://stoltmarketing.se/blogg/google-ads-vs-seo",
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
