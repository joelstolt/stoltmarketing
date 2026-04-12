const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://stoltmarketing.se/tjanster/google-ads" },
  ],
};

export const metadata = {
  title: "Google Ads Hässleholm — Fler kunder med annonsering",
  description:
    "Google Ads-förvaltning för företag i Hässleholm. Sökordsanalys, annonstext, optimering och rapportering. Fler samtal och förfrågningar. Boka kostnadsfri genomgång.",
  alternates: {
    canonical: "https://stoltmarketing.se/tjanster/google-ads",
  },
  openGraph: {
    title: "Google Ads Hässleholm — Fler kunder med annonsering",
    description: "Google Ads-förvaltning för företag i Hässleholm. Optimering, rapportering, resultat.",
    url: "https://stoltmarketing.se/tjanster/google-ads",
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
