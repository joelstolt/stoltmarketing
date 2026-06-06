import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebbutvecklingContent from "./WebbutvecklingContent";
import ServiceExtra from "@/components/ServiceExtra";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <WebbutvecklingContent />
        <ServiceExtra service="webbutveckling" />
      </main>
      <Footer />
    </>
  );
}
