const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
    { "@type": "ListItem", position: 3, name: "Niklassons Flytt", item: "https://www.stoltmarketing.se/projekt/niklassonsflytt" },
  ],
};

export const metadata = {
  title: "Kundcase: Niklassons Flytt",
  description:
    "Hur vi byggde en flyttfirmas sajt med mätbar konvertering. 32 offertförfrågningar på 30 dagar, 38 sidor och ett CMS kunden sköter själv.",
  alternates: { canonical: "https://www.stoltmarketing.se/projekt/niklassonsflytt" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
