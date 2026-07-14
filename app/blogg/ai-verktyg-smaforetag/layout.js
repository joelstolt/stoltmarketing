const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/ai-verktyg-smaforetag",
  inLanguage: "sv-SE",
  headline: "12 AI-verktyg varje småföretagare borde testa 2026",
  description: "12 praktiska AI-verktyg för småföretag: text, bild, kundservice, admin och marknadsföring. Vad de gör, vad de kostar och var du börjar.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "AI-verktyg", item: "https://www.stoltmarketing.se/blogg/ai-verktyg-smaforetag" },
  ],
};

export const metadata = {
  title: "12 AI-verktyg för småföretag att testa 2026",
  description: "12 praktiska AI-verktyg för småföretag: text, bild, kundservice, admin och marknadsföring. Vad de gör, vad de kostar och var du börjar.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/ai-verktyg-smaforetag" },
  openGraph: {
    title: "12 AI-verktyg för småföretag (2026)",
    description: "Praktiska AI-verktyg som sparar tid på riktigt, flera gratis att komma igång med.",
    url: "https://www.stoltmarketing.se/blogg/ai-verktyg-smaforetag",
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
