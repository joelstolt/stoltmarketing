const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.stoltmarketing.se/kontakt" },
  ],
};

export const metadata = {
  "title": "Kontakt med Joel Stolt",
  "description": "Skriv till Joel om förfrågningsrutan, hemsidor, SEO eller annonsering. Mejla, ring eller använd kontaktformuläret. Normalt svar samma arbetsdag.",
  "alternates": {
    "canonical": "https://www.stoltmarketing.se/kontakt"
  },
  "openGraph": {
    "title": "Kontakt med Joel Stolt",
    "description": "Skriv till Joel om förfrågningsrutan, hemsidor, SEO eller annonsering. Mejla, ring eller använd kontaktformuläret. Normalt svar samma arbetsdag.",
    "url": "https://www.stoltmarketing.se/kontakt",
    "images": [
      "/og-image.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Kontakt med Joel Stolt",
    "description": "Skriv till Joel om förfrågningsrutan, hemsidor, SEO eller annonsering. Mejla, ring eller använd kontaktformuläret. Normalt svar samma arbetsdag.",
    "images": [
      "/og-image.png"
    ]
  }
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
