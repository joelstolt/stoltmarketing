const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/valja-domannamn",
  inLanguage: "sv-SE",
  headline: "Välja domännamn till företaget: komplett guide (och vanliga misstag)",
  description: "Så väljer du rätt domännamn till företaget: .se eller .com, kort vs beskrivande, sökord, vanliga misstag och hur du säkrar ditt varumärke.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-22",
  dateModified: "2026-08-22",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Välja domännamn", item: "https://www.stoltmarketing.se/blogg/valja-domannamn" },
  ],
};

export const metadata = {
  title: "Välja domännamn till företaget: komplett guide 2026",
  description: "Så väljer du rätt domännamn till företaget: .se eller .com, kort vs beskrivande, sökord, vanliga misstag och hur du säkrar ditt varumärke.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/valja-domannamn" },
  openGraph: {
    title: "Välja domännamn till företaget",
    description: "Så väljer du rätt domän, .se eller .com, och undviker misstagen som kostar senare.",
    url: "https://www.stoltmarketing.se/blogg/valja-domannamn",
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
