export const metadata = {
  title: "Hemsida Lund — Professionell webbyrå för startups",
  description: "Moderna webbplatser för företag i Lund och Ideon. Från 3 900 kr. SEO-optimerad och mobilanpassad.",
  alternates: {
    canonical: "https://stoltmarketing.se/lund/hemsida",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Lund", item: "https://stoltmarketing.se/lund" },
    { "@type": "ListItem", position: 3, name: "Hemsida", item: "https://stoltmarketing.se/lund/hemsida" },
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
