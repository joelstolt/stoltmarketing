import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityServicePage from "@/components/CityServicePage";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <CityServicePage service="google-ads" city="kristianstad" />
      </main>
      <Footer />
    </>
  );
}
