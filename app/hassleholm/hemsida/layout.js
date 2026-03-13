export const metadata = {
  title: "Hemsida Hässleholm — Professionell webbyrå nära dig",
  description:
    "Behöver du en hemsida i Hässleholm? Lokal webbutvecklare med 10+ års erfarenhet bygger moderna, snabba sajter som ger fler kunder. Från 3 900 kr.",
  alternates: {
    canonical: "https://stoltmarketing.se/hassleholm/hemsida",
  },
  openGraph: {
    title: "Hemsida Hässleholm — Professionell webbyrå nära dig",
    description:
      "Lokal webbutvecklare i Hässleholm. Moderna sajter som ger fler kunder. Från 3 900 kr.",
    url: "https://stoltmarketing.se/hassleholm/hemsida",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Varför välja en lokal webbyrå i Hässleholm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du får personlig kontakt med den som faktiskt bygger din sajt. Vi kan ses på plats, jag förstår den lokala marknaden och du slipper mellanhänder. Resultatet? Snabbare leverans, bättre kommunikation och en sajt som faktiskt passar ditt företag.",
      },
    },
    {
      "@type": "Question",
      name: "Vad kostar det att bygga en hemsida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En företagssajt börjar från 3 900 kr med fast pris. Behöver du e-handel eller mer avancerade funktioner ligger det från 7 900 kr. Inga dolda kostnader.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar det?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En enklare företagssajt tar 2–4 veckor. Du får se en demo innan du betalar ett öre.",
      },
    },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
