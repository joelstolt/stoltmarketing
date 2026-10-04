import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NiklassonsCase from "./NiklassonsCase";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <NiklassonsCase />
      </main>
      <Footer />
    </>
  );
}
