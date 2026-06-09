const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/google-business-profile-guide",
  inLanguage: "sv-SE",
  headline: "Google Business Profile — Komplett guide för företagare 2026",
  description: "Steg-för-steg-guide till Google Business Profile. Så tar du kontroll över din profil, optimerar den, lägger till bilder, svarar på recensioner och rankar högre i Google Maps.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Google Business Profile — Komplett guide för företagare 2026", item: "https://www.stoltmarketing.se/blogg/google-business-profile-guide" },
  ],
};

export const metadata = {
  title: "Google Business Profile — Komplett guide för företagare 2026",
  description: "Steg-för-steg-guide till Google Business Profile: ta kontroll över din profil, lägg till bilder, svara på recensioner och få fler lokala kunder via Google Maps.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/google-business-profile-guide" },
  openGraph: {
    title: "Google Business Profile — Komplett guide för företagare 2026",
    description: "Lär dig hur du optimerar din Google Business Profile för att få fler lokala kunder.",
    url: "https://www.stoltmarketing.se/blogg/google-business-profile-guide",
    type: "article",
  },
};

export default function ArticleLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
