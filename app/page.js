import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AiSection from "@/components/AiSection";
import ManagedSection from "@/components/ManagedSection";
import Cases from "@/components/Cases";
import About from "@/components/About";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AiSection />
        <ManagedSection />
        <Cases />
        <About />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
