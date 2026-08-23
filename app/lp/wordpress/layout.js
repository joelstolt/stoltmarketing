/* Annonslandningssida. NOINDEX med flit:
   den ska aldrig konkurrera med /tjanster/wordpress i organiskt sök,
   och Google behöver inte indexera en sida som bara annonser når.
   Ingen canonical här, en noindex-sida ska inte peka rankingsignaler någonstans. */
export const metadata = {
  title: "Hjälp med WordPress",
  description:
    "Långsam, hackad eller övergiven WordPress? Jag tar över även sajter jag inte byggt. Drift, säkerhet, uppdateringar och support till fast pris, 1 190 kr/mån. Svar inom 24 timmar.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LpWordpressLayout({ children }) {
  return children;
}
