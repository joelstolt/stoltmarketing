import "./globals.css";
import Script from "next/script";
import ChatWidget from "@/components/ChatWidget";
import { CITY_ORDER, CITIES, SERVICE_ORDER, SERVICES, SITE } from "@/lib/local/data";

export const metadata = {
  metadataBase: new URL("https://www.stoltmarketing.se"),
  title: {
    default: "Webbyrå Hässleholm — Hemsida, SEO & AI | Stolt Marketing",
    template: "%s | Stolt Marketing",
  },
  description:
    "Webbyrå i Hässleholm och Skåne. Moderna hemsidor, e-handel, SEO, Google Ads och AI-automation för företag. 10+ års erfarenhet, fast pris, personlig service.",
  keywords: [
    "webbyrå hässleholm",
    "webbyrå skåne",
    "seo skåne",
    "google ads skåne",
    "webbutvecklare",
    "SEO",
    "AI automation",
    "hemsida företag",
    "managed hemsida",
    "digital byrå skåne",
  ],
  authors: [{ name: "Joel Stolt" }],
  creator: "Joel Stolt",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.stoltmarketing.se",
    siteName: "Stolt Marketing",
    title: "Webbyrå i Skåne — Hemsida, SEO, Google Ads & AI",
    description:
      "Moderna hemsidor, e-handel, SEO, Google Ads och AI-automation för företag i Skåne och hela Sverige.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing — webbyrå i Skåne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbyrå i Skåne — Hemsida, SEO, Google Ads & AI",
    description:
      "Moderna hemsidor, SEO, Google Ads och AI-automation för företag i Skåne. 10+ års erfarenhet, fast pris.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.stoltmarketing.se",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "IhOfiR7S9Euz_4uL2iM2fUwa5iWetEwr1zVaZmBTrjE",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  const orgId = `${SITE.url}/#organization`;

  const organization = {
    "@type": ["ProfessionalService", "Organization"],
    "@id": orgId,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    image: `${SITE.url}/og-image.png`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/og-image.png`,
      width: 1200,
      height: 630,
    },
    description:
      "Digital byrå i Hässleholm och Skåne med 10+ års erfarenhet. Moderna hemsidor, e-handel, SEO, Google Ads och AI-automation för företag.",
    priceRange: SITE.priceRange,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Digital konsult & AI-specialist",
      image: `${SITE.url}/joel-stolt.png`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.baseCity,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CITIES.hassleholm.lat,
      longitude: CITIES.hassleholm.lng,
    },
    areaServed: [
      ...CITY_ORDER.map((c) => ({ "@type": "City", name: CITIES[c].name })),
      { "@type": "AdministrativeArea", name: "Skåne" },
      { "@type": "Country", name: "Sverige" },
    ],
    knowsAbout: SERVICE_ORDER.map((s) => SERVICES[s].serviceType),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    slogan: "Enterprise-kvalitet till småföretag.",
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "sv-SE",
    publisher: { "@id": orgId },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ChatWidget />
        {/* Umami analytics (self-hosted, GDPR-compliant, no cookies) */}
        <Script
          src="https://umami-analytics-tau-two.vercel.app/script.js"
          data-website-id="3adb02f8-448d-4b39-bc2a-76e9c9b8709e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
