const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/automatisera-med-ai",
  inLanguage: "sv-SE",
  headline: "Automatisera det tråkiga: 8 AI-exempel som sparar tid för småföretag",
  description: "8 konkreta exempel på hur småföretag automatiserar med AI: kundservice, offerter, bokning, uppföljning och admin. Var du börjar och vad det ger.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Automatisera med AI", item: "https://www.stoltmarketing.se/blogg/automatisera-med-ai" },
  ],
};

export const metadata = {
  title: "Automatisera med AI: 8 exempel som sparar tid",
  description: "8 konkreta exempel på hur småföretag automatiserar med AI: kundservice, offerter, bokning, uppföljning och admin. Var du börjar och vad det ger.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/automatisera-med-ai" },
  openGraph: {
    title: "Automatisera det tråkiga: 8 AI-exempel",
    description: "8 konkreta sätt att låta AI ta hand om repetitivt arbete i ett litet företag.",
    url: "https://www.stoltmarketing.se/blogg/automatisera-med-ai",
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
