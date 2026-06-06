import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiAutomationContent from "./AiAutomationContent";
import ServiceExtra from "@/components/ServiceExtra";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <AiAutomationContent />
        <ServiceExtra service="ai-automation" />
      </main>
      <Footer />
    </>
  );
}
