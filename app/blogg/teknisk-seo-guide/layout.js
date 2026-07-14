const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/teknisk-seo-guide",
  inLanguage: "sv-SE",
  headline: "Teknisk SEO: nybörjarguiden till en sajt Google älskar",
  description: "Teknisk SEO förklarat utan jargong: indexering, hastighet, mobil, struktur, sitemap och schema. Checklista för en sajt Google kan ranka.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Teknisk SEO", item: "https://www.stoltmarketing.se/blogg/teknisk-seo-guide" },
  ],
};

export const metadata = {
  title: "Teknisk SEO: nybörjarguide till en sajt Google älskar",
  description: "Teknisk SEO förklarat utan jargong: indexering, hastighet, mobil, struktur, sitemap och schema. Checklista för en sajt Google kan ranka.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/teknisk-seo-guide" },
  openGraph: {
    title: "Teknisk SEO: nybörjarguiden",
    description: "Grunderna i teknisk SEO utan jargong: indexering, hastighet, struktur och schema.",
    url: "https://www.stoltmarketing.se/blogg/teknisk-seo-guide",
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
