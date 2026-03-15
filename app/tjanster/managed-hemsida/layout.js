const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Managed Hemsida", item: "https://stoltmarketing.se/tjanster/managed-hemsida" },
  ],
};

export const metadata = {
  title: "Managed Hemsida — Drift, underhåll & förbättringar",
  description: "Managed hemsida med uppdateringar, säkerhet, övervakning och innehållsändringar. Från 390 kr/mån. Ansvar efter lansering.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/managed-hemsida" },
  openGraph: {
    title: "Managed Hemsida — Drift, underhåll & förbättringar | Stolt Marketing",
    description: "Hosting, uppdateringar, säkerhet och innehållsändringar. Från 390 kr/mån.",
    url: "https://stoltmarketing.se/tjanster/managed-hemsida",
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
