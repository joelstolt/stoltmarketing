export const metadata = {
  title: "Hemsida Helsingborg — Professionell webbyrå nära dig",
  description:
    "Behöver du en hemsida i Helsingborg? Lokal webbutvecklare med 10+ års erfarenhet bygger moderna, snabba sajter som ger fler kunder. Från 3 900 kr.",
  alternates: {
    canonical: "https://stoltmarketing.se/helsingborg/hemsida",
  },
  openGraph: {
    title: "Hemsida Helsingborg — Professionell webbyrå",
    description:
      "Lokal webbutvecklare i Helsingborg. Moderna sajter som ger fler kunder. Från 3 900 kr.",
    url: "https://stoltmarketing.se/helsingborg/hemsida",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Varför välja en lokal webbyrå i Helsingborg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du får personlig kontakt med den som faktiskt bygger din sajt och förstår den lokala marknaden.",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Helsingborg", item: "https://stoltmarketing.se/helsingborg" },
    { "@type": "ListItem", position: 3, name: "Hemsida", item: "https://stoltmarketing.se/helsingborg/hemsida" },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
