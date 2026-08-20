const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Boka genomgång", item: "https://www.stoltmarketing.se/boka" },
  ],
};

export const metadata = {
  title: "Boka kostnadsfri genomgång — Joel Stolt, Hässleholm",
  description:
    "Boka ett kostnadsfritt samtal med Joel Stolt. Vi går igenom din digitala strategi, webb, SEO, AI. Inga förpliktelser. 15–20 minuter.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/boka",
  },
  openGraph: {
    title: "Boka kostnadsfri genomgång | Stolt Marketing",
    description: "15–20 min gratis genomgång. Ingen försäljning. Fokus på ditt behov.",
    url: "https://www.stoltmarketing.se/boka",
  },
};

export default function Layout({ children }) {
  return (
    <>
      {/* Bara DNS och TLS i förväg. En prefetch av själva bokningssidan hämtar
          Googles dokument vid varje sidladdning och kan sätta kakor, och sajten
          är medvetet kakfri tills besökaren själv väljer kalenderfliken. */}
      <link rel="preconnect" href="https://calendar.google.com" />
      <link rel="dns-prefetch" href="https://calendar.google.com" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
