const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.stoltmarketing.se/kontakt" },
  ],
};

export const metadata = {
  title: "Kontakt Joel Stolt — Boka kostnadsfri genomgång",
  description:
    "Kontakta Joel Stolt i Hässleholm för kostnadsfri genomgång. Webb, SEO, AI, drift. Mejla joel@stoltmarketing.se eller boka direktsamtal.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/kontakt",
  },
  openGraph: {
    title: "Kontakt — Boka kostnadsfri genomgång | Stolt Marketing",
    description: "Kostnadsfri genomgång av ditt digitala behov med Joel Stolt. Webb, SEO, AI.",
    url: "https://www.stoltmarketing.se/kontakt",
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
