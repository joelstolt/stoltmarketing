import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OmContent from "./OmContent";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <OmContent />
      </main>
      <Footer />
    </>
  );
}
