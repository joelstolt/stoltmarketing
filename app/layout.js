import "./globals.css";

/* ─── Homepage FAQ items (used in JSON-LD + passed to component) ─── */

const homepageFaqItems = [
  {
    q: "Vad kostar ett offertprogram för hantverkare?",
    a: "Med Kvota kan du testa gratis i 14 dagar utan att lämna kortuppgifter. Därefter kostar Offert-paketet 299 kr/mån med obegränsade AI-offerter. Pro med uppföljning, content och CRM kommer snart för 699 kr/mån.",
  },
  {
    q: "Hur fungerar AI-genererade offerter?",
    a: "Du talar in eller skriver dina anteckningar efter ett platsbesök. Kvotas AI analyserar informationen och skapar en komplett offert med materialposter, tidsuppskattning, ROT-avdrag och moms — strukturerad och klar att skicka som PDF på 2 minuter.",
  },
  {
    q: "Kan jag testa Kvota gratis?",
    a: "Ja. Du får 14 dagars gratis trial med upp till 10 offerter. Inget kort krävs. Registrera dig, ladda upp din logga och skapa din första offert på under 2 minuter.",
  },
  {
    q: "Fungerar Kvota för alla typer av hantverkare?",
    a: "Ja. Kvota är byggt för VVS, el, tak, bygg, måleri, golv, kök/bad, snickeri och liknande branscher. AI:n anpassar poster, material och priskalkyler efter din bransch automatiskt.",
  },
  {
    q: "Hur beräknas ROT-avdraget i offerten?",
    a: "Du anger arbetskostnaden och Kvota beräknar automatiskt ROT-avdraget (30% av arbetskostnaden, max 50 000 kr per person och år) och visar det tydligt i offerten så kunden direkt ser vad de betalar.",
  },
  {
    q: "Behöver jag installera något?",
    a: "Nej. Kvota körs direkt i webbläsaren på din dator, surfplatta eller mobil. Inget att ladda ner, inget att installera.",
  },
];

export const metadata = {
  title: "Kvota — Sluta tappa jobb. Skicka proffsiga offerter på 2 minuter.",
  description:
    "AI-offertgeneratorn för svenska hantverkare. Tala in dina anteckningar, få en proffsig PDF-offert på 2 minuter. Testa gratis i 14 dagar.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "https://kvota.se",
  },
  verification: {
    google: "UNqMw_1kxwvDh4kGwarNWSaKXEO9U8GFk9MTfU2ZtVU",
  },
  openGraph: {
    title: "Kvota — Proffsiga offerter på 2 minuter med AI",
    description:
      "AI-offertgeneratorn för svenska hantverkare. Tala in anteckningar, få en PDF-offert med materialkalkyler, ROT-avdrag och din logga.",
    url: "https://kvota.se",
    siteName: "Kvota",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "https://kvota.se/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kvota — AI-offertgenerator för hantverkare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kvota — Proffsiga offerter på 2 minuter med AI",
    description:
      "AI-offertgeneratorn för svenska hantverkare. Testa gratis i 14 dagar.",
    images: ["https://kvota.se/og-image.png"],
  },
};

/* ─── Structured Data (JSON-LD) ─── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kvota",
  url: "https://kvota.se",
  logo: "https://kvota.se/favicon.svg",
  description:
    "AI-driven offertgenerator och digital partner för svenska hantverkare.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+46735546968",
    email: "hej@kvota.se",
    contactType: "customer service",
    availableLanguage: "Swedish",
  },
  sameAs: [],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kvota",
  url: "https://app.kvota.se",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-offertgenerator för svenska hantverkare. Skapa proffsiga PDF-offerter med materiallistor, ROT-avdrag och din logga på 2 minuter.",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SEK",
      name: "Gratis Trial",
      description: "14 dagars gratis test med 10 offerter. Inget kort krävs.",
    },
    {
      "@type": "Offer",
      price: "299",
      priceCurrency: "SEK",
      name: "Offert",
      description:
        "Obegränsade AI-offerter med din logga, ROT-avdrag och röstinmatning.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "299",
        priceCurrency: "SEK",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      price: "699",
      priceCurrency: "SEK",
      name: "Pro",
      description:
        "Allt i Offert plus smart uppföljning, content och mini-CRM. Kommer snart.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "699",
        priceCurrency: "SEK",
        unitText: "MONTH",
      },
    },
  ],
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export { homepageFaqItems };

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageFaqSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
