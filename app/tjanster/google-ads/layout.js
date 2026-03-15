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
  title: "Google Ads — Fler kunder med riktad annonsering",
  description:
    "Google Ads-förvaltning som ger fler samtal, förfrågningar och kunder. Sökordsanalys, annonstext, löpande optimering och transparent rapportering.",
  alternates: {
    canonical: "https://stoltmarketing.se/tjanster/google-ads",
  },
  openGraph: {
    title: "Google Ads — Fler kunder med riktad annonsering | Stolt Marketing",
    description: "Google Ads-förvaltning med sökordsanalys, optimering och transparent rapportering.",
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
