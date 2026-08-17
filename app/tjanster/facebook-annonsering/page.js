import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";
import ServiceExtra from "@/components/ServiceExtra";
import { EXTRA_SERVICES } from "@/lib/services-extra";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePage data={EXTRA_SERVICES["facebook-annonsering"]} />
        <ServiceExtra service="facebook-annonsering" />
      </main>
      <Footer />
    </>
  );
}
