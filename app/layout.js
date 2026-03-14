import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata = {
  metadataBase: new URL("https://stoltmarketing.se"),
  title: {
    default: "Joel Stolt — Digital konsult, AI & Webb | Stolt Marketing",
    template: "%s | Stolt Marketing",
  },
  description:
    "Digital konsult med 10+ års erfarenhet. Moderna webbplatser, e-handel, AI-lösningar och SEO för företag i hela Sverige. Enterprise-kvalitet, personlig leverans.",
  keywords: [
    "digital konsult",
    "webbyrå hässleholm",
    "AI konsult",
    "webbutvecklare",
    "SEO",
    "WooCommerce",
    "Next.js",
    "webbplats företag",
    "managed hemsida",
    "AI automation",
  ],
  authors: [{ name: "Joel Stolt" }],
  creator: "Joel Stolt",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://stoltmarketing.se",
    siteName: "Stolt Marketing",
    title: "Joel Stolt — Digital konsult, AI & Webb",
    description:
      "Moderna webbplatser, e-handel, AI-lösningar och SEO. Enterprise-kvalitet, personlig leverans.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://stoltmarketing.se",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Stolt Marketing",
    url: "https://stoltmarketing.se",
    description:
      "Digital konsult med 10+ års erfarenhet. Moderna webbplatser, e-handel, AI-lösningar och SEO.",
    founder: {
      "@type": "Person",
      name: "Joel Stolt",
      jobTitle: "Digital konsult & AI-specialist",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hässleholm",
      addressRegion: "Skåne",
      addressCountry: "SE",
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    serviceType: [
      "Webbutveckling",
      "E-handel",
      "SEO",
      "AI-automation",
      "Digital strategi",
      "Managed hemsida",
    ],
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}<ChatWidget /></body>
    </html>
  );
}
