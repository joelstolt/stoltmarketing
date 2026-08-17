export const metadata = {
  title: "Tillgänglighet & EAA: granskning och åtgärder till fast pris",
  description:
    "Tillgänglighetskraven är lag sedan juni 2025 (lag 2023:254). Vi granskar din sajt mot WCAG 2.1 AA, åtgärdar bristerna till fast pris och bygger nytt när det är rätt väg. Fast pris, inga överraskningar.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/tillganglighet",
  },
  openGraph: {
    title: "Tillgänglighet & EAA: granskning och åtgärder till fast pris",
    description:
      "Lag 2023:254 gäller sedan 28 juni 2025. Vi granskar, åtgärdar och bygger rätt från grunden. Fast pris.",
    url: "https://www.stoltmarketing.se/tillganglighet",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tillgänglighetsgranskning och EAA-åtgärder",
  serviceType: "Webbtillgänglighet (WCAG 2.1 AA, lag 2023:254)",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.stoltmarketing.se/#organization",
    name: "Stolt Marketing",
  },
  areaServed: "SE",
  url: "https://www.stoltmarketing.se/tillganglighet",
  offers: [
    {
      "@type": "Offer",
      name: "Tillgänglighetsgranskning med rapport",
      price: "4900",
      priceCurrency: "SEK",
    },
    {
      "@type": "Offer",
      name: "Åtgärdspaket: genomförda fixar med dokumentation",
      price: "24500",
      priceCurrency: "SEK",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Tillgänglighet & EAA", item: "https://www.stoltmarketing.se/tillganglighet" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Måste mitt företag följa tillgänglighetslagen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lag 2023:254 gäller företag som säljer produkter och tjänster till konsumenter digitalt, till exempel e-handel. Tjänsteföretag med färre än 10 anställda och under 2 miljoner euro i omsättning är undantagna. Men även för undantagna företag lönar sig en tillgänglig sajt: den fungerar för fler kunder och rankar bättre.",
      },
    },
    {
      "@type": "Question",
      name: "Vad kostar det?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Granskning med prioriterad rapport kostar 4 900 kr. Åtgärdspaket där vi genomför fixarna kostar från 24 500 kr, alltid fast pris efter granskningen. Är sajten gammal är det ofta bättre att bygga rätt från grunden: 0 kr i start och 1 190 kr per månad.",
      },
    },
    {
      "@type": "Question",
      name: "Räcker det med en tillgänglighetswidget eller ett plugin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Overlays och widgets ändrar inte koden där bristerna sitter, och de har kritiserats hårt av både tillgänglighetsexperter och användare. Kraven gäller själva sajten. Det som hjälper är att åtgärda grundproblemen i kod, struktur och innehåll.",
      },
    },
    {
      "@type": "Question",
      name: "Hittar en automatisk skanning alla fel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej, och var skeptisk mot den som påstår det. Automatiserad skanning fångar ungefär 30 till 40 procent av WCAG-bristerna. Resten kräver manuell genomgång: tangentbordsnavigering, läsordning, formulärflöden och begriplighet. Vår granskning kombinerar båda.",
      },
    },
    {
      "@type": "Question",
      name: "Vem kontrollerar att lagen följs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post- och telestyrelsen (PTS) är huvudansvarig tillsynsmyndighet för de digitala tjänsterna, med Myndigheten för delaktighet (MFD) i en stödjande roll. Tillsynen kan leda till förelägganden och viten för den som inte åtgärdar brister.",
      },
    },
  ],
};

export default function TillganglighetLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
