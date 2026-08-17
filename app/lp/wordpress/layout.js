/* Annonslandningssida. NOINDEX med flit:
   den ska aldrig konkurrera med /tjanster/wordpress i organiskt sök,
   och Google behöver inte indexera en sida som bara annonser når.
   Ingen canonical här, en noindex-sida ska inte peka rankingsignaler någonstans. */
export const metadata = {
  title: "WordPress som laddar direkt | Stolt Marketing",
  description:
    "Långsam WordPress? Skicka adressen så mäter jag sajten och skickar en video på två minuter. Kostnadsfritt, svar inom 24 timmar. Migrering 4 900 kr, drift 1 190 kr/mån.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LpWordpressLayout({ children }) {
  return children;
}
