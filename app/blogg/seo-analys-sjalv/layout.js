const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/seo-analys-sjalv",
  inLanguage: "sv-SE",
  headline: "SEO-analys: så gör du en själv på 30 minuter (gratis checklista)",
  description: "Gör en SEO-analys av din egen sajt på 30 minuter: teknik, innehåll, sökord och konkurrenter. Gratis checklista, inga dyra verktyg.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "SEO-analys själv", item: "https://www.stoltmarketing.se/blogg/seo-analys-sjalv" },
  ],
};

export const metadata = {
  title: "SEO-analys: gör en själv på 30 min (gratis checklista)",
  description: "Gör en SEO-analys av din egen sajt på 30 minuter: teknik, innehåll, sökord och konkurrenter. Gratis checklista, inga dyra verktyg.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/seo-analys-sjalv" },
  openGraph: {
    title: "SEO-analys: gör en själv på 30 minuter",
    description: "En enkel steg-för-steg-checklista för att analysera din egen sajts SEO utan dyra verktyg.",
    url: "https://www.stoltmarketing.se/blogg/seo-analys-sjalv",
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
