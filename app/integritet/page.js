import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegritetContent from "./IntegritetContent";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <IntegritetContent />
      </main>
      <Footer />
    </>
  );
}
