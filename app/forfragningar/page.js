import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForfragningarContent from "./ForfragningarContent";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ForfragningarContent />
      </main>
      <Footer />
    </>
  );
}
