import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAdsContent from "./GoogleAdsContent";
import ServiceExtra from "@/components/ServiceExtra";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <GoogleAdsContent />
        <ServiceExtra service="google-ads" />
      </main>
      <Footer />
    </>
  );
}
