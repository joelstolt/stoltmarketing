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
  title: "AI-automation Hässleholm — Smartare processer för företag",
  description:
    "AI-automation för företag i Hässleholm — chatbotar, automatiserade arbetsflöden, smarta verktyg. Spara tid och pengar. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/ai-automation" },
  openGraph: {
    title: "AI-automation Hässleholm — Smartare processer för företag",
    description: "AI-automation för företag i Hässleholm. Chatbotar, arbetsflöden, effektivisering.",
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
