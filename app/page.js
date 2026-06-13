import Header from "@/components/Header";
import BContent from "./b/BContent";

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
