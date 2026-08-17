const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
    { "@type": "ListItem", position: 3, name: "Premie Bygg", item: "https://www.stoltmarketing.se/projekt/premiebygg" },
  ],
};

export const metadata = {
  title: "Kundcase: Premie Bygg",
  description:
    "Hur vi byggde en byggfirmas sajt i Örebro med 47 sidor och ett spamhärdat offertformulär som är verifierat hela vägen till inkorgen.",
  alternates: { canonical: "https://www.stoltmarketing.se/projekt/premiebygg" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
