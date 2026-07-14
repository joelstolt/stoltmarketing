const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/valja-seo-byra",
  inLanguage: "sv-SE",
  headline: "Så väljer du rätt SEO-byrå: 6 tecken på att du blir lurad",
  description: "Guide till att välja SEO-byrå för småföretag: rätt frågor att ställa, vad ett rimligt pris är, och 6 tecken på att du blir lurad.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Välja SEO-byrå", item: "https://www.stoltmarketing.se/blogg/valja-seo-byra" },
  ],
};

export const metadata = {
  title: "Så väljer du rätt SEO-byrå 2026 (6 varningstecken)",
  description: "Guide till att välja SEO-byrå för småföretag: rätt frågor att ställa, vad ett rimligt pris är, och 6 tecken på att du blir lurad.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/valja-seo-byra" },
  openGraph: {
    title: "Så väljer du rätt SEO-byrå (6 varningstecken)",
    description: "Rätt frågor, rimliga priser och de röda flaggorna att undvika när du anlitar en SEO-byrå.",
    url: "https://www.stoltmarketing.se/blogg/valja-seo-byra",
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
