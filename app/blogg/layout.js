const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
  ],
};

export const metadata = {
  title: "Blogg — Guider om webb, SEO och AI | Stolt Marketing",
  description:
    "Praktiska guider och tips om webbutveckling, SEO, AI-automation och digital strategi för småföretag. Skrivet av Joel Stolt, digital konsult i Hässleholm.",
  alternates: {
    canonical: "https://stoltmarketing.se/blogg",
  },
  openGraph: {
    title: "Blogg — Guider om webb, SEO och AI | Stolt Marketing",
    description:
      "Praktiska artiklar om webbutveckling, SEO och AI för småföretag.",
    url: "https://stoltmarketing.se/blogg",
  },
};

export default function BloggLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
