const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/sokordsanalys-nyborjare",
  inLanguage: "sv-SE",
  headline: "Sökordsanalys för nybörjare: hitta orden dina kunder googlar",
  description: "Lär dig göra en sökordsanalys från grunden: hitta sökord, förstå sökintention och volym, och välj ord ett litet företag kan ranka på.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Sökordsanalys", item: "https://www.stoltmarketing.se/blogg/sokordsanalys-nyborjare" },
  ],
};

export const metadata = {
  title: "Sökordsanalys för nybörjare: hitta rätt sökord",
  description: "Lär dig göra en sökordsanalys från grunden: hitta sökord, förstå sökintention och volym, och välj ord ett litet företag kan ranka på.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/sokordsanalys-nyborjare" },
  openGraph: {
    title: "Sökordsanalys för nybörjare",
    description: "Så hittar du orden dina kunder faktiskt googlar, och väljer de du kan ranka på.",
    url: "https://www.stoltmarketing.se/blogg/sokordsanalys-nyborjare",
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
