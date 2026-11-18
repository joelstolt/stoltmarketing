import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktContent from "./KontaktContent";
import s from "@/components/ny/ny.module.css";

// Ersätter texterna i app/kontakt/layout.js (nya inriktningen 2026-11-17). Brödsmulans JSON-LD ligger kvar i layouten.
const titel = "Kontakt";
const beskrivning =
  "Berätta vad ni behöver eller vad som krånglar. Några rader räcker, och ni får svar nästa arbetsdag. Ring, mejla eller skriv i formuläret.";

export const metadata = {
  title: titel,
  description: beskrivning,
  alternates: { canonical: "https://www.stoltmarketing.se/kontakt" },
  openGraph: {
    title: `${titel} | Stolt Marketing`,
    description: beskrivning,
    url: "https://www.stoltmarketing.se/kontakt",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${titel} | Stolt Marketing`,
    description: beskrivning,
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className={s.scope}>
        <KontaktContent />
      </main>
      <Footer />
    </>
  );
}
