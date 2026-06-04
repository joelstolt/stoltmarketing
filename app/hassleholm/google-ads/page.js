import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityServicePage from "@/components/CityServicePage";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CityServicePage service="google-ads" city="hassleholm" />
      </main>
      <Footer />
    </>
  );
}
