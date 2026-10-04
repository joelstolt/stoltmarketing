import { packages, priceFaqs } from "@/lib/pricing-packages";

export const metadata = {
  title: "Priser: 0 kr i startavgift, fast månadspris",
  description:
    "Öppna priser. Rutan för förfrågningar 495 kr/mån, 30 dagar gratis, ingen bindning. Hemsida som abonnemang: Bas 1 190, Bredd 1 990, Spets 2 990 kr/mån, 0 kr i startavgift. Exkl moms.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/priser",
  },
  openGraph: {
    title: "Priser: 0 kr i startavgift, fast månadspris",
    description:
      "Rutan för förfrågningar 495 kr/mån. Hemsidor: Bas 1 190, Bredd 1 990, Spets 2 990 kr/mån, 0 kr i startavgift. Exkl moms.",
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
  offers: packages.map((item) => ({ "@type": "Offer", name: item.name, price: String(item.monthly), priceCurrency: "SEK", description: "Månadspris exkl moms. 0 kr start. 12 månader, därefter månadsvis." })),
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
  mainEntity: priceFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
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
