import { HubSchema } from "@/lib/local/hub-schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MalmoContent from "./MalmoContent";

export default function Page() {
  return (
    <>
      <HubSchema city="malmo" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <MalmoContent />
      </main>
      <Footer />
    </>
  );
}
