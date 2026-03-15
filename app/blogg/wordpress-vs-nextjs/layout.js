const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WordPress vs Next.js — vilket passar ditt företag?",
  description: "Ärlig jämförelse mellan WordPress och Next.js. Prestanda, SEO, kostnad, underhåll och redigerbarhet. Baserad på 150+ levererade projekt.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-15",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "WordPress vs Next.js", item: "https://stoltmarketing.se/blogg/wordpress-vs-nextjs" },
  ],
};

export const metadata = {
  title: "WordPress vs Next.js 2026 — ärlig jämförelse för företag",
  description: "WordPress eller Next.js? Jämförelse av prestanda, SEO, kostnad och underhåll. Baserad på 150+ projekt. Ärlig guide utan agenda.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/wordpress-vs-nextjs" },
  openGraph: {
    title: "WordPress vs Next.js — vilket passar ditt företag?",
    description: "Ärlig jämförelse baserad på 150+ projekt. Prestanda, SEO, kostnad och underhåll.",
    url: "https://stoltmarketing.se/blogg/wordpress-vs-nextjs",
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
