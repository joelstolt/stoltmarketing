import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BokaContent from "./BokaContent";
import s from "@/components/ny/ny.module.css";

// Ersätter texterna i app/boka/layout.js (nya inriktningen 2026-11-17). Preconnect och JSON-LD ligger kvar i layouten.
const titel = "Boka ett samtal med Joel Stolt";
const beskrivning =
  "Välj en tid i kalendern för ett kostnadsfritt samtal på 30 minuter. Vi går igenom vad som krånglar eller saknas och vad jag kan göra åt det.";

export const metadata = {
  title: titel,
  description: beskrivning,
  alternates: { canonical: "https://www.stoltmarketing.se/boka" },
  openGraph: {
    title: `${titel} | Stolt Marketing`,
    description: beskrivning,
    url: "https://www.stoltmarketing.se/boka",
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
        <BokaContent />
      </main>
      <Footer />
    </>
  );
}
