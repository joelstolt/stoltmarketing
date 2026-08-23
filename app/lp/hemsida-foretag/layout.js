/* Annonslandningssida för hemsida-, pris- och webbyråorden.
   NOINDEX med flit: den ska aldrig konkurrera med /tjanster/webbutveckling
   eller ortssidorna i organiskt sök, och Google behöver inte indexera en sida
   som bara annonser når. Ingen canonical, en noindex-sida ska inte peka
   rankingsignaler någonstans. */
export const metadata = {
  title: "Ny hemsida till ditt företag",
  description:
    "Se din nya sajt färdig innan du betalar ett öre. Fast pris från 1 190 kr/mån, 0 kr i startavgift, allt ingår. Gratis designförslag inom 2 arbetsdagar.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LpHemsidaLayout({ children }) {
  return children;
}
