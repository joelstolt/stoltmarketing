const URL = "https://www.stoltmarketing.se/sokmotoroptimering";

export const metadata = {
  title: "Sökmotoroptimering | Så fungerar SEO 2026, komplett guide",
  description:
    "Komplett guide till sökmotoroptimering 2026: så avgör Google vem som rankar, vad som faktiskt flyttar positioner enligt uppmätt data, vad SEO kostar och hur du kommer igång.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Sökmotoroptimering | Så fungerar SEO 2026, komplett guide",
    description:
      "Så avgör Google vem som rankar, vad som faktiskt flyttar positioner enligt uppmätt data, vad SEO kostar och hur du kommer igång.",
    url: URL,
    type: "article",
    locale: "sv_SE",
    siteName: "Stolt Marketing",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Sökmotoroptimering", item: URL },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sökmotoroptimering: så fungerar SEO 2026",
  description:
    "Komplett guide till sökmotoroptimering: rankingfaktorer, sidbredd, lokal SEO, AI-sök, kostnader och en konkret startchecklista.",
  inLanguage: "sv-SE",
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
  author: {
    "@type": "Organization",
    "@id": "https://www.stoltmarketing.se/#organization",
    name: "Stolt Marketing",
  },
  publisher: { "@id": "https://www.stoltmarketing.se/#organization" },
  mainEntityOfPage: URL,
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {children}
    </>
  );
}
