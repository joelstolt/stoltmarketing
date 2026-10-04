import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NgtabCase from "./NgtabCase";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <NgtabCase />
      </main>
      <Footer />
    </>
  );
}
