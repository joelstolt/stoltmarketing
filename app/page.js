import Header from "@/components/Header";
import BContent from "./b/BContent";

// Canonical sätts här (inte i root-layouten) — se kommentar i app/layout.js.
// Övrig metadata (title, description, OG) ärvs oförändrad från layouten.
export const metadata = {
  alternates: {
    canonical: "https://www.stoltmarketing.se",
  },
};

// Startsidan = "Rapsfält"-upplevelsen (tidigare /b): levande canvas-fält med geting,
// GSAP-scrollberättelse. Global Header ger full meny + mobilmeny.
// Indexerbar (ärver metadata + JSON-LD från layout.js).
export default function Home() {
  return (
    <>
      <Header />
      <BContent />
    </>
  );
}
