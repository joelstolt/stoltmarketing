const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "SEO", item: "https://stoltmarketing.se/tjanster/seo" },
  ],
};

export const metadata = {
  title: "SEO — Synlighet som ger fler kunder",
  description: "Teknisk SEO, sökordsanalys och lokal optimering som gör att rätt kunder hittar dig på Google. Mätbara resultat, tydlig uppföljning.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/seo" },
  openGraph: {
    title: "SEO — Synlighet som ger fler kunder | Stolt Marketing",
    description: "Teknisk SEO, sökordsanalys och lokal optimering. Mätbara resultat.",
    url: "https://stoltmarketing.se/tjanster/seo",
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
