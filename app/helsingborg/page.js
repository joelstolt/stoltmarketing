import { HubSchema } from "@/lib/local/hub-schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelsingborgContent from "./HelsingborgContent";

export default function Page() {
  return (
    <>
      <HubSchema city="helsingborg" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HelsingborgContent />
      </main>
      <Footer />
    </>
  );
}
