import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjektContent from "./ProjektContent";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Start",
      "item": "https://www.stoltmarketing.se"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Kundprojekt",
      "item": "https://www.stoltmarketing.se/projekt"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <ProjektContent />
      </main>
      <Footer />
    </>
  );
}
