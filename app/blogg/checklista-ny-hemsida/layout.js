const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/checklista-ny-hemsida",
  inLanguage: "sv-SE",
  headline: "Lansera ny hemsida: 25-punkters checklista innan du går live",
  description: "Komplett checklista innan du lanserar en ny hemsida: SEO, redirects, spårning, formulär, prestanda och säkerhet. Missa inget som tappar kunder tyst.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-18",
  dateModified: "2026-08-18",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Checklista go-live", item: "https://www.stoltmarketing.se/blogg/checklista-ny-hemsida" },
  ],
};

export const metadata = {
  title: "Lansera hemsida: 25-punkters checklista före go-live",
  description: "Komplett checklista innan du lanserar en ny hemsida: SEO, redirects, spårning, formulär, prestanda och säkerhet. Missa inget som tappar kunder tyst.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/checklista-ny-hemsida" },
  openGraph: {
    title: "25-punkters checklista innan du lanserar hemsidan",
    description: "Bocka av SEO, spårning, formulär och prestanda innan du går live.",
    url: "https://www.stoltmarketing.se/blogg/checklista-ny-hemsida",
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
