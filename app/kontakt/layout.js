const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://stoltmarketing.se/kontakt" },
  ],
};

export const metadata = {
  title: "Kontakt — Boka kostnadsfri genomgång",
  description:
    "Ta kontakt med Joel Stolt för en kostnadsfri genomgång av ditt digitala behov. Webb, SEO, AI och drift. Mejla joel@stoltmarketing.se.",
  alternates: {
    canonical: "https://stoltmarketing.se/kontakt",
  },
  openGraph: {
    title: "Kontakt — Boka kostnadsfri genomgång | Stolt Marketing",
    description: "Kostnadsfri genomgång av ditt digitala behov. Webb, SEO, AI och drift.",
    url: "https://stoltmarketing.se/kontakt",
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
