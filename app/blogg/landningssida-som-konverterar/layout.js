const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/landningssida-som-konverterar",
  inLanguage: "sv-SE",
  headline: "Landningssida som konverterar: anatomin bakom en sida som säljer",
  description: "Så bygger du en landningssida som konverterar: rubrik, värdeerbjudande, social proof, CTA och de vanliga misstagen. Med konkret sektionsordning.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Landningssida", item: "https://www.stoltmarketing.se/blogg/landningssida-som-konverterar" },
  ],
};

export const metadata = {
  title: "Landningssida som konverterar: anatomin steg för steg",
  description: "Så bygger du en landningssida som konverterar: rubrik, värdeerbjudande, social proof, CTA och de vanliga misstagen. Med konkret sektionsordning.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/landningssida-som-konverterar" },
  openGraph: {
    title: "Landningssida som konverterar",
    description: "Sektionerna, i rätt ordning, som gör en landningssida som faktiskt får besökare att agera.",
    url: "https://www.stoltmarketing.se/blogg/landningssida-som-konverterar",
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
