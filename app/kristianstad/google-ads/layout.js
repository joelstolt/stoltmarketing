const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad kostar Google Ads i Kristianstad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Förvaltning börjar från 3 900 kr/mån plus annonsbudget. Du bestämmer själv hur mycket du vill lägga på klick.",
      },
    },
    {
      "@type": "Question",
      name: "Hur snabbt ger Google Ads resultat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du kan börja få samtal och förfrågningar redan samma vecka som kampanjen startar.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver jag en bra hemsida för Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, landsidan är avgörande. En snabb och tydlig sida ger lägre klickpris och fler konverteringar.",
      },
    },
  ],
};

export const metadata = {
  title: "Google Ads Kristianstad — Fler kunder med annonsering",
  description:
    "Google Ads-byrå i Kristianstad. Riktad annonsering som ger fler samtal, förfrågningar och kunder. Lokal konsult, transparent rapportering.",
  alternates: {
    canonical: "https://stoltmarketing.se/kristianstad/google-ads",
  },
  openGraph: {
    title: "Google Ads Kristianstad — Fler kunder med annonsering",
    description:
      "Lokal Google Ads-konsult i Kristianstad. Riktad annonsering som ger resultat.",
    url: "https://stoltmarketing.se/kristianstad/google-ads",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kristianstad", item: "https://stoltmarketing.se/kristianstad" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://stoltmarketing.se/kristianstad/google-ads" },
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
