export const metadata = {
  title: "Google-ads Malmö",
  description: "Digital tjänst för företag i Malmö",
  alternates: {
    canonical: "https://stoltmarketing.se/malmo/google-ads",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Malmö", item: "https://stoltmarketing.se/malmo" },
    { "@type": "ListItem", position: 3, name: "Google-ads", item: "https://stoltmarketing.se/malmo/google-ads" },
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
