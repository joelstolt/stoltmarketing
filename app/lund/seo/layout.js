export const metadata = {
  title: "Seo Lund",
  description: "Digital tjänst för företag i Lund",
  alternates: {
    canonical: "https://stoltmarketing.se/lund/seo",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Lund", item: "https://stoltmarketing.se/lund" },
    { "@type": "ListItem", position: 3, name: "Seo", item: "https://stoltmarketing.se/lund/seo" },
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
