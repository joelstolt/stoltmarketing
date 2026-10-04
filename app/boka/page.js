import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BokaContent from "./BokaContent";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <BokaContent />
      </main>
      <Footer />
    </>
  );
}
