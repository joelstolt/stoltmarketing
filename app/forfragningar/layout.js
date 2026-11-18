const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Förfrågningar", item: "https://www.stoltmarketing.se/forfragningar" },
  ],
};

const beskrivning =
  "En ruta på din hemsida. Kunden skriver, du får ett SMS och ett förslag på svar som du skickar när du hinner. Fast pris skriftligt innan jag börjar, och första samtalet kostar ingenting.";

export const metadata = {
  title: "Förfrågningar via hemsidan, direkt till mobilen",
  robots: { index: false, follow: false },
  description: beskrivning,
  alternates: { canonical: "https://www.stoltmarketing.se/forfragningar" },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }], 
    title: "Förfrågningar via hemsidan, direkt till mobilen | Stolt Marketing",
    description: beskrivning,
    url: "https://www.stoltmarketing.se/forfragningar",
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
