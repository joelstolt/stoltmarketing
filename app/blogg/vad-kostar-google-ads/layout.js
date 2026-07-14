const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/vad-kostar-google-ads",
  inLanguage: "sv-SE",
  headline: "Vad kostar Google Ads i Sverige 2026? En ärlig prisguide",
  description: "Vad kostar Google Ads i Sverige? Klickpriser per bransch, rimlig månadsbudget, byråarvoden och vad som avgör om annonseringen lönar sig.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Vad kostar Google Ads", item: "https://www.stoltmarketing.se/blogg/vad-kostar-google-ads" },
  ],
};

export const metadata = {
  title: "Vad kostar Google Ads 2026? Prisguide för företag",
  description: "Vad kostar Google Ads i Sverige? Klickpriser per bransch, rimlig månadsbudget, byråarvoden och vad som avgör om annonseringen lönar sig.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/vad-kostar-google-ads" },
  openGraph: {
    title: "Vad kostar Google Ads i Sverige 2026?",
    description: "Klickpriser, budget och byråarvoden uppdelat, plus vad som avgör om det lönar sig.",
    url: "https://www.stoltmarketing.se/blogg/vad-kostar-google-ads",
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
