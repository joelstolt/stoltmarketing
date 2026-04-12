export const metadata = {
  title: "Ai-automation Helsingborg",
  description: "Digital tjänst för företag i Helsingborg",
  alternates: {
    canonical: "https://stoltmarketing.se/helsingborg/ai-automation",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Helsingborg", item: "https://stoltmarketing.se/helsingborg" },
    { "@type": "ListItem", position: 3, name: "Ai-automation", item: "https://stoltmarketing.se/helsingborg/ai-automation" },
  ],
};

export default function Layout({ children }) {
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
