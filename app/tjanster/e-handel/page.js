import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";
import { EXTRA_SERVICES } from "@/lib/services-extra";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePage data={EXTRA_SERVICES["e-handel"]} />
      </main>
      <Footer />
    </>
  );
}
