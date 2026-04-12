const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Boka genomgång", item: "https://stoltmarketing.se/boka" },
  ],
};

export const metadata = {
  title: "Boka kostnadsfri genomgång — Joel Stolt, Hässleholm",
  description:
    "Boka ett kostnadsfritt samtal med Joel Stolt. Vi går igenom din digitala strategi — webb, SEO, AI. Inga förpliktelser. 30 minuter.",
  alternates: {
    canonical: "https://stoltmarketing.se/boka",
  },
  openGraph: {
    title: "Boka kostnadsfri genomgång | Stolt Marketing",
    description: "30 min gratis strategi-samtal. Ingen försäljning. Fokus på ditt behov.",
    url: "https://stoltmarketing.se/boka",
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
