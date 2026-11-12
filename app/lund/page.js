import { HubSchema } from "@/lib/local/hub-schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LundContent from "./LundContent";

export default function Page() {
  return (
    <>
      <HubSchema city="lund" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <LundContent />
      </main>
      <Footer />
    </>
  );
}
