export const metadata = {
  title: "Hemsida Malmö — Professionell webbyrå",
  description: "Moderna webbplatser för företag i Malmö. Från 3 900 kr. SEO-optimerad och mobilanpassad.",
  alternates: {
    canonical: "https://stoltmarketing.se/malmo/hemsida",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Malmö", item: "https://stoltmarketing.se/malmo" },
    { "@type": "ListItem", position: 3, name: "Hemsida", item: "https://stoltmarketing.se/malmo/hemsida" },
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
