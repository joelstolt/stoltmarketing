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
  title: "Webbutveckling Hässleholm — Moderna hemsidor för företag",
  description:
    "Webbutveckling i Hässleholm — moderna hemsidor och e-handelslösningar i Next.js, React, WordPress. Snabba, responsiva sajter. Från 3 900 kr. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/webbutveckling" },
  openGraph: {
    title: "Webbutveckling Hässleholm — Moderna hemsidor för företag",
    description: "Webbutveckling för företag i Hässleholm. Next.js, React, WordPress. Från 3 900 kr.",
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
