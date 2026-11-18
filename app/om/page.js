import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OmContent from "./OmContent";
import s from "@/components/ny/ny.module.css";
import { SITE } from "@/lib/local/data";

// Ersätter texterna i app/om/layout.js (nya inriktningen 2026-11-17). Brödsmulans JSON-LD ligger kvar i layouten.
const titel = "Om Joel Stolt";
const beskrivning =
  "Joel Stolt driver Stolt Marketing i Hässleholm och sköter sajter, system, mätning och annonser åt företag och organisationer utan egen utvecklare. Svar nästa arbetsdag.";

export const metadata = {
  title: titel,
  description: beskrivning,
  alternates: { canonical: "https://www.stoltmarketing.se/om" },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }],  title: `${titel} | Stolt Marketing`, description: beskrivning, url: "https://www.stoltmarketing.se/om" },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder,
  url: "https://www.stoltmarketing.se/om",
  image: SITE.image,
  email: SITE.email,
  telephone: SITE.phone,
  worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
  address: { "@type": "PostalAddress", addressLocality: SITE.baseCity, addressCountry: SITE.country },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
        <OmContent />
      </main>
      <Footer />
    </>
  );
}
