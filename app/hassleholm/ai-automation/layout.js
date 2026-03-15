const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad kostar AI-automation för ett företag i Hässleholm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det varierar beroende på omfattning. En enkel chatbot kan ingå i ett webbprojekt. Större automationslösningar prissätts efter scope med fast pris.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver jag teknisk kunskap för AI-verktyg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Jag bygger och sätter upp allt. Du får enkla verktyg som fungerar utan att du behöver förstå tekniken bakom.",
      },
    },
  ],
};

export const metadata = {
  title: "AI & Automation Hässleholm — Spara tid med AI-verktyg",
  description:
    "AI-konsult i Hässleholm. Automatisera offerter, kundtjänst och arbetsflöden. Jag har byggt en egen AI-produkt och implementerar AI dagligen.",
  alternates: {
    canonical: "https://stoltmarketing.se/hassleholm/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Hässleholm — Spara tid med AI-verktyg",
    description:
      "Lokal AI-konsult i Hässleholm. Automatisera offerter, kundtjänst och arbetsflöden.",
    url: "https://stoltmarketing.se/hassleholm/ai-automation",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Hässleholm", item: "https://stoltmarketing.se/hassleholm" },
    { "@type": "ListItem", position: 3, name: "AI & Automation", item: "https://stoltmarketing.se/hassleholm/ai-automation" },
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
