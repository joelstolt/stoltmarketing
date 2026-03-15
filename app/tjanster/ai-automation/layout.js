const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "AI & Automation", item: "https://stoltmarketing.se/tjanster/ai-automation" },
  ],
};

export const metadata = {
  title: "AI & Automation — Smarta verktyg som sparar tid",
  description: "AI-chatbotar, automatiserade arbetsflöden och smarta verktyg för småföretag. Konkreta lösningar som faktiskt sparar tid och pengar.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/ai-automation" },
  openGraph: {
    title: "AI & Automation — Smarta verktyg som sparar tid | Stolt Marketing",
    description: "AI-chatbotar, automatiserade arbetsflöden och smarta verktyg för småföretag.",
    url: "https://stoltmarketing.se/tjanster/ai-automation",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
