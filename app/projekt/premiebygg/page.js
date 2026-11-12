import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiebyggCase from "./PremiebyggCase";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PremiebyggCase />
      </main>
      <Footer />
    </>
  );
}
