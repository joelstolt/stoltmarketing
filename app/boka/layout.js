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
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL || "";
  return (
    <>
      {calendarUrl ? <link rel="prefetch" href={calendarUrl} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
