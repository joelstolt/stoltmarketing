const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Webbutveckling", item: "https://stoltmarketing.se/tjanster/webbutveckling" },
  ],
};

export const metadata = {
  title: "Webbutveckling — Moderna sajter som konverterar",
  description:
    "Moderna webbplatser och e-handelslösningar i Next.js, React och WordPress/WooCommerce. Snabba, responsiva sajter som ger fler kunder. Från 3 900 kr.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/webbutveckling" },
  openGraph: {
    title: "Webbutveckling — Moderna sajter som konverterar | Stolt Marketing",
    description: "Webbplatser och e-handel i Next.js, React och WordPress. Från 3 900 kr.",
    url: "https://stoltmarketing.se/tjanster/webbutveckling",
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
