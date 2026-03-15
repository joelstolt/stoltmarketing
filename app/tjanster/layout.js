const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
  ],
};

export const metadata = {
  title: "Tjänster — Webb, SEO, AI & Drift | Stolt Marketing",
  description:
    "Webbutveckling, SEO, AI-automation, Google Ads och managed hemsida. Allt du behöver för att växa digitalt — från en konsult i Hässleholm.",
  alternates: {
    canonical: "https://stoltmarketing.se/tjanster",
  },
  openGraph: {
    title: "Tjänster — Webb, SEO, AI & Drift | Stolt Marketing",
    description:
      "Webbutveckling, SEO, AI-automation och managed hemsida. En konsult, hela leveransen.",
    url: "https://stoltmarketing.se/tjanster",
  },
};

export default function TjansterLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
