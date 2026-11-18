/* Navigering för nya profilen (2026-11-17). En källa för header, sidfot och områdessidor.
   Tjänstesidorna ligger kvar på sina gamla adresser under /tjanster (Google-trafik). */

export const OMRADEN = [
  {
    key: "hittar",
    namn: "Fler hittar er",
    href: "/fler-hittar-er",
    kort: "Google, ChatGPT, annonser och mätning av vad det ger.",
    tjanster: [
      { namn: "SEO", href: "/tjanster/seo" },
      { namn: "Synlighet i ChatGPT och AI-sök", href: "/tjanster/ai-synlighet" },
      { namn: "Google Ads", href: "/tjanster/google-ads" },
      { namn: "Meta-annonser", href: "/tjanster/facebook-annonsering" },
    ],
  },
  {
    key: "kunder",
    namn: "Fler blir kunder",
    href: "/fler-blir-kunder",
    kort: "Hemsidor, webbshoppar, kassa och bokning.",
    tjanster: [
      { namn: "Hemsidor", href: "/tjanster/webbutveckling" },
      { namn: "Webbshoppar", href: "/tjanster/e-handel" },
      { namn: "WordPress", href: "/tjanster/wordpress" },
      { namn: "Tillgänglighet", href: "/tillganglighet" },
      { namn: "Drift och support", href: "/tjanster/managed-hemsida" },
    ],
  },
  {
    key: "handarbete",
    namn: "Mindre handarbete",
    href: "/mindre-handarbete",
    kort: "Kundregister, bokning, AI och system som pratar med varandra.",
    tjanster: [
      { namn: "System med egen AI-agent", href: "/#agent" },
      { namn: "AI och automation", href: "/tjanster/ai-automation" },
      { namn: "Kundregister (CRM)", href: "/mindre-handarbete#crm" },
      { namn: "System som pratar med varandra", href: "/mindre-handarbete#kopplingar" },
    ],
  },
];

export const HUVUDMENY = [
  { namn: "Så funkar det", href: "/sa-funkar-det" },
  { namn: "Case", href: "/projekt" },
  { namn: "Om Joel", href: "/om" },
];

export const FORETAGET = [
  { namn: "Så funkar det", href: "/sa-funkar-det" },
  { namn: "Akut hjälp", href: "/akut" },
  { namn: "Case", href: "/projekt" },
  { namn: "Om Joel", href: "/om" },
  { namn: "Gratis sajtkoll", href: "/sajtkoll" },
  { namn: "Guider", href: "/guider" },
  { namn: "Blogg", href: "/blogg" },
  { namn: "Kontakt", href: "/kontakt" },
  { namn: "Boka ett samtal", href: "/boka" },
];
