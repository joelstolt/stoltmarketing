import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjektContent from "./ProjektContent";
import s from "@/components/ny/ny.module.css";

// Ersätter texterna i app/projekt/layout.js (nya inriktningen 2026-11-17).
const titel = "Case: sajter, system och eget CRM med AI-agent";
const beskrivning =
  "Uppdrag som Joel Stolt har byggt och sköter: sajter, webbshoppar, system som pratar med varandra och ett eget kundregister med AI-agent. Med källor och begränsningar.";

export const metadata = {
  title: titel,
  description: beskrivning,
  alternates: { canonical: "https://www.stoltmarketing.se/projekt" },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }],  title: titel, description: beskrivning, url: "https://www.stoltmarketing.se/projekt" },
  twitter: { images: ["/og-image.png"],  card: "summary_large_image", title: titel, description: beskrivning },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Case", item: "https://www.stoltmarketing.se/projekt" },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <ProjektContent />
      </main>
      <Footer />
    </>
  );
}
