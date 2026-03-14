import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import AiSection from "@/components/AiSection";
import ManagedSection from "@/components/ManagedSection";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
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
        <SocialProof />
        <Services />
        <AiSection />
        <ManagedSection />
        <Cases />
        <Testimonials />
        <About />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
