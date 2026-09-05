import "./globals.css";
import Script from "next/script";
import { Fraunces, Archivo } from "next/font/google";

/* Självhostade typsnitt via next/font: ingen renderblockerande CSS från Google,
   bara de axlar som används (opsz + wght, kursiv på Fraunces). */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal"],
  display: "swap",
  variable: "--font-archivo",
});

/* Preview-byggen (NEXT_PUBLIC_PREVIEW=1): noindex i metadata och ingen Umami. */
const PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === "1";
// import ChatWidget from "@/components/ChatWidget"; // dold tills Anthropic-nyckeln fixats
import { KlickIdFangare } from "@/lib/klickid";
import { CITY_ORDER, CITIES, SERVICE_ORDER, SERVICES, SITE } from "@/lib/local/data";

export const metadata = {
  metadataBase: new URL("https://www.stoltmarketing.se"),
  title: {
    default: "Webbyrå Hässleholm, Hemsida, SEO & AI | Stolt Marketing",
    template: "%s | Stolt Marketing",
  },
  description:
    "Webbyrå i Hässleholm och Skåne. Hemsidor, SEO, Google Ads och AI som ger ditt företag fler kunder, du jobbar direkt med konsulten som bygger, utan byrå-overhead. Fast pris.",
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
    title: "Din nya hemsida, färdig innan du betalar ett öre | Stolt Marketing",
    description:
      "Webbyrå i Hässleholm och Skåne. Du jobbar direkt med konsulten som bygger, optimerar och tar ansvar, utan byrå-overhead. 10+ års erfarenhet, fast pris.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing, webbyrå i Skåne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Din nya hemsida, färdig innan du betalar ett öre | Stolt Marketing",
    description:
      "Webbyrå i Hässleholm och Skåne. Du jobbar direkt med konsulten som bygger, optimerar och tar ansvar, utan byrå-overhead. 10+ års erfarenhet, fast pris.",
    images: ["/og-image.png"],
  },
  // OBS: ingen alternates.canonical här — canonical i root-layouten ärvs av ALLA
  // sidor utan egen och pekar dem tyst mot startsidan. Sätts per sida (startsidans
  // ligger i app/page.js).
  robots: {
    index: !PREVIEW,
    follow: !PREVIEW,
  },
  verification: {
    google: "IhOfiR7S9Euz_4uL2iM2fUwa5iWetEwr1zVaZmBTrjE",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
    telephone: SITE.phone,
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
    <html lang="sv" className={`${fraunces.variable} ${archivo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skördeklockan: fältglöden följer besökarens dygn (ren CSS-styrning,
            attributet sätts före första målningen så inget blinkar om). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var h=new Date().getHours();document.documentElement.dataset.dygn=h<5?'natt':h<10?'gryning':h<17?'dag':h<22?'skymning':'natt'}catch(e){}",
          }}
        />
      </head>
      <body>
        <KlickIdFangare />
        {children}
        {/* Chatten dold 2026-06-26 tills Anthropic-nyckeln är giltig igen (backend 502:ar). Avkommentera för att återaktivera. */}
        {/* <ChatWidget /> */}
        {/* Umami analytics (self-hosted, GDPR-compliant, no cookies) */}
        {/* lazyOnload, inte afterInteractive: afterInteractive lägger en preload
            av tredjepartsskriptet i head, och den ensam kostade 10-15 poäng i
            mobil-Lighthouse (uppmätt 2026-09-06: 81-86 med, 96 utan). Umami
            laddar nu efter window.load och mäter ändå sidvisningen. */}
        {!PREVIEW && (
          <Script
            src="https://umami-analytics-tau-two.vercel.app/script.js"
            data-website-id="3adb02f8-448d-4b39-bc2a-76e9c9b8709e"
            strategy="lazyOnload"
          />
        )}
        {/* Google Ads-konvertering. Consent Mode v2 står på "denied" som default,
            så INGA kakor sätts och sajten är fortsatt kakfri utan samtyckesruta.
            Google modellerar konverteringarna i stället. Laddas bara när
            NEXT_PUBLIC_GOOGLE_ADS_ID finns satt vid bygget. */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <>
            <Script
              id="gtag-consent"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');`,
              }}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
          </>
        )}
      </body>
    </html>
  );
}
