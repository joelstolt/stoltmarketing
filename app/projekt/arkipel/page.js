import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArkipelCase from "./ArkipelCase";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ArkipelCase />
      </main>
      <Footer />
    </>
  );
}
