import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasePage from "@/components/CasePage";
import { CASES } from "@/lib/case-data";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CasePage data={CASES["gardetshundtrim"]} />
      </main>
      <Footer />
    </>
  );
}
