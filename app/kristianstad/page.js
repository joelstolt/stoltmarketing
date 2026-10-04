import { HubSchema } from "@/lib/local/hub-schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KristianstadContent from "./KristianstadContent";

export default function Page() {
  return (
    <>
      <HubSchema city="kristianstad" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <KristianstadContent />
      </main>
      <Footer />
    </>
  );
}
