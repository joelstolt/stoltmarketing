import { HubSchema } from "@/lib/local/hub-schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HassleholmContent from "./HassleholmContent";

export default function Page() {
  return (
    <>
      <HubSchema city="hassleholm" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HassleholmContent />
      </main>
      <Footer />
    </>
  );
}
