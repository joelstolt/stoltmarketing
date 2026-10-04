import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundContent from "./NotFoundContent";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
