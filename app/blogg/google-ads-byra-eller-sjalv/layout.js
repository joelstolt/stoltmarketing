const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/google-ads-byra-eller-sjalv",
  inLanguage: "sv-SE",
  headline: "Google Ads-byrå eller sköta det själv? Så avgör du",
  description: "Ska du sköta Google Ads själv eller anlita en byrå? Vad var och en kostar i tid och pengar, och när det lönar sig att lämna över.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Byrå eller själv", item: "https://www.stoltmarketing.se/blogg/google-ads-byra-eller-sjalv" },
  ],
};

export const metadata = {
  title: "Google Ads: byrå eller sköta själv? Så avgör du",
  description: "Ska du sköta Google Ads själv eller anlita en byrå? Vad var och en kostar i tid och pengar, och när det lönar sig att lämna över.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/google-ads-byra-eller-sjalv" },
  openGraph: {
    title: "Google Ads-byrå eller sköta det själv?",
    description: "Vad var och en kostar i tid och pengar, och när det lönar sig att lämna över.",
    url: "https://www.stoltmarketing.se/blogg/google-ads-byra-eller-sjalv",
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
