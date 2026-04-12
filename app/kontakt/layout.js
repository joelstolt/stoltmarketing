const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://stoltmarketing.se/kontakt" },
  ],
};

export const metadata = {
  title: "Kontakt Joel Stolt — Boka kostnadsfri genomgång",
  description:
    "Kontakta Joel Stolt i Hässleholm för kostnadsfri genomgång. Webb, SEO, AI, drift. Mejla joel@stoltmarketing.se eller boka direktsamtal.",
  alternates: {
    canonical: "https://stoltmarketing.se/kontakt",
  },
  openGraph: {
    title: "Kontakt — Boka kostnadsfri genomgång | Stolt Marketing",
    description: "Kostnadsfri genomgång av ditt digitala behov med Joel Stolt. Webb, SEO, AI.",
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
