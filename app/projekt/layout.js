const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://stoltmarketing.se/projekt" },
  ],
};

export const metadata = {
  title: "Projekt — Case & resultat",
  description:
    "Se utvalda projekt inom webbutveckling, e-handel, AI och SEO. Från AcadeMedia och SMH till lokala småföretag i Hässleholm.",
  alternates: {
    canonical: "https://stoltmarketing.se/projekt",
  },
  openGraph: {
    title: "Projekt — Case & resultat | Stolt Marketing",
    description: "Utvalda projekt inom webbutveckling, e-handel, AI och SEO.",
    url: "https://stoltmarketing.se/projekt",
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
