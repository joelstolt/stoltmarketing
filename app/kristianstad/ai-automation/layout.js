const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad kostar AI-automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det beror på vad du vill automatisera. Enklare automationer börjar från 5 000 kr. Vi analyserar först och ger dig ett fast pris.",
      },
    },
    {
      "@type": "Question",
      name: "Hur långt är det innan vi ser resultat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De flesta automationer är igång inom 2–4 veckor. Resultat syns ofta redan första veckan.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver min personals IT-kunskap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Vi sätter upp allt och tränar din personal. De behöver bara kunna använda systemet, inte förstå tekniken.",
      },
    },
  ],
};

export const metadata = {
  title: "AI & Automation Kristianstad — Spara timmar med automation",
  description:
    "AI och automation för företag i Kristianstad. Automatisera offerter, kundtjänst och rapportering. Spara 5–10 timmar per vecka.",
  alternates: {
    canonical: "https://stoltmarketing.se/kristianstad/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Kristianstad — Spara timmar",
    description:
      "Automatisera offertgenerering, kundtjänst och rapportering med AI. Spara tid och pengar.",
    url: "https://stoltmarketing.se/kristianstad/ai-automation",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kristianstad", item: "https://stoltmarketing.se/kristianstad" },
    { "@type": "ListItem", position: 3, name: "AI & Automation", item: "https://stoltmarketing.se/kristianstad/ai-automation" },
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
