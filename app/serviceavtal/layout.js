export const metadata = {
  title: "Förvaltningsavtal: drift, säkerhet och utveckling",
  description: "Förvaltningsavtal, Drift, säkerhet och löpande utveckling av er e-handelsplattform.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/serviceavtal" },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }], 
    title: "Förvaltningsavtal för e-handel | Stolt Marketing",
    description: "Villkor för drift, säkerhet och löpande utveckling av en befintlig e-handelsplattform.",
    url: "https://www.stoltmarketing.se/serviceavtal",
  },
};

export default function Layout({ children }) {
  return children;
}
