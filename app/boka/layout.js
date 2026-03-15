const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Boka genomgång", item: "https://stoltmarketing.se/boka" },
  ],
};

export const metadata = {
  title: "Boka kostnadsfri genomgång",
  description:
    "Boka ett kort samtal så går vi igenom ditt nuläge och vad som ger mest effekt. Helt kostnadsfritt, inga förpliktelser.",
  alternates: {
    canonical: "https://stoltmarketing.se/boka",
  },
  openGraph: {
    title: "Boka kostnadsfri genomgång | Stolt Marketing",
    description: "Kort samtal om ditt nuläge och vad som ger mest effekt. Kostnadsfritt.",
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
