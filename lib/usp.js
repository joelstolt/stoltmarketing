/* Joels USP (2026-11-18): efter första samtalet visar han alltid en klickbar demo, helt
   riskfritt för kunden. Gäller CRM, affärssystem, webb och e-handel, alltså det som byggs.
   SEO och annonser får den inte. Skriv inte "gratis" om demon; Joels ord är "helt riskfritt". */

export const DEMO_KORT = "Klickbar demo efter första samtalet, helt riskfritt";

export const DEMO_MENING =
  "Efter första samtalet får ni en klickbar demo av det vi pratat om. Ni klickar runt i den innan ni bestämmer er, helt riskfritt för er.";

export const DEMO_FRAGA = {
  q: "Får vi se något innan vi bestämmer oss?",
  a: "Ja. Efter första samtalet visar jag en klickbar demo av det vi pratat om, oavsett om det är ett CRM, ett affärssystem, en sajt eller en webbshop. Ni klickar runt i den innan ni bestämmer er. Helt riskfritt för er.",
};

/* Tjänster (lib/services-extra.js och lib/local/data.js) där något byggs och demon gäller. */
export const DEMO_TJANSTER = new Set(["webbutveckling", "e-handel", "wordpress", "managed-hemsida", "hemsida", "ai-automation"]);
