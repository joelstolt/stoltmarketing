export const metadata = {
  title: "Priser: 0 kr i startavgift, fast månadspris",
  description:
    "Öppna priser på hemsida som abonnemang: Bas 1 190 kr/mån, Bredd 1 990 kr/mån, Spets 2 990 kr/mån. 0 kr i startavgift, du ser sajten färdig innan du betalar. Hosting, drift och ändringar ingår alltid.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/priser",
  },
  openGraph: {
    title: "Priser: 0 kr i startavgift, fast månadspris",
    description:
      "Bas 1 190, Bredd 1 990, Spets 2 990 kr/mån. Sajten byggs färdig innan du betalar, och hosting, drift och ändringar ingår alltid.",
    url: "https://www.stoltmarketing.se/priser",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hemsida som abonnemang",
  serviceType: "Webbutveckling med drift, fast månadspris",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.stoltmarketing.se/#organization",
    name: "Stolt Marketing",
  },
  areaServed: "SE",
  url: "https://www.stoltmarketing.se/priser",
  offers: [
    {
      "@type": "Offer",
      name: "Bas, 1 190 kr per månad, 0 kr i startavgift",
      price: "1190",
      priceCurrency: "SEK",
    },
    {
      "@type": "Offer",
      name: "Bredd, 1 990 kr per månad, 0 kr i startavgift",
      price: "1990",
      priceCurrency: "SEK",
    },
    {
      "@type": "Offer",
      name: "Spets, 2 990 kr per månad, 0 kr i startavgift",
      price: "2990",
      priceCurrency: "SEK",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Priser", item: "https://www.stoltmarketing.se/priser" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Varför 0 kr i startavgift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du ska inte behöva ta risken. Sajten byggs färdig först, du tittar och klickar runt i den, och betalar först när du bestämt dig. Månadspriset täcker bygget, hostingen, driften och ändringarna.",
      },
    },
    {
      "@type": "Question",
      name: "Vem äger sajten om vi avslutar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du. Sajten, innehållet och domänen är dina, och vill du flytta någon annanstans hjälper jag till med flytten. Ingen inlåsning: poängen med månadsmodellen är att jag ska förtjäna nästa månad, inte att avtalet ska hålla dig kvar.",
      },
    },
    {
      "@type": "Question",
      name: "Vad händer efter de första 12 månaderna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allt löper vidare månadsvis till samma pris och avslutas när som helst till nästa månadsskifte. Ett mejl räcker, och du behåller sajten.",
      },
    },
    {
      "@type": "Question",
      name: "Finns det dolda kostnader?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Det enda som tillkommer är sådant du väljer själv: e-handel för 800 kr per månad och din annonsbudget till Google om du kör Spets. Engångstjänsterna har fasta priser som står här på sidan.",
      },
    },
  ],
};

export default function PriserLayout({ children }) {
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
