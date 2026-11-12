const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Boka genomgång", item: "https://www.stoltmarketing.se/boka" },
  ],
};

export const metadata = {
  "title": "Boka en kostnadsfri genomgång med Joel Stolt",
  "description": "Välj en tid i kalendern för ett kostnadsfritt samtal på 30 minuter. Gå igenom ditt behov av hemsida, förfrågningar eller marknadsföring.",
  "alternates": {
    "canonical": "https://www.stoltmarketing.se/boka"
  },
  "openGraph": {
    "title": "Boka en kostnadsfri genomgång med Joel Stolt",
    "description": "Välj en tid i kalendern för ett kostnadsfritt samtal på 30 minuter. Gå igenom ditt behov av hemsida, förfrågningar eller marknadsföring.",
    "url": "https://www.stoltmarketing.se/boka",
    "images": [
      "/og-image.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Boka en kostnadsfri genomgång med Joel Stolt",
    "description": "Välj en tid i kalendern för ett kostnadsfritt samtal på 30 minuter. Gå igenom ditt behov av hemsida, förfrågningar eller marknadsföring.",
    "images": [
      "/og-image.png"
    ]
  }
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
