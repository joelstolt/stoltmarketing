const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/content-strategi-smaforetag",
  inLanguage: "sv-SE",
  headline: "Content-strategi för småföretag — Så skapar du innehåll som rankar",
  description: "Lär dig hur du skapar en content-strategi som rankar på Google. Keyword research för småföretag, vilka content-typer som fungerar, och hur du mäter resultat.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Content-strategi för småföretag", item: "https://www.stoltmarketing.se/blogg/content-strategi-smaforetag" },
  ],
};

export const metadata = {
  title: "Content-strategi för småföretag — Så skapar du innehåll som rankar",
  description: "Lär dig hur du skapar en content-strategi som rankar på Google. Keyword research, content-typer, och hur du mäter resultat utan dyr verktyg.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/content-strategi-smaforetag" },
  openGraph: {
    title: "Content-strategi för småföretag — Så skapar du innehåll som rankar",
    description: "Så skapar du innehåll som rankar på Google. Pratisk guide för små företag.",
    url: "https://www.stoltmarketing.se/blogg/content-strategi-smaforetag",
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
