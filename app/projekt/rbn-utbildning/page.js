import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasePage from "@/components/CasePage";
import { notFound } from "next/navigation";
import { CASES, synligtCase } from "@/lib/case-data";

export default function Page() {
  if (!synligtCase("rbn-utbildning")) notFound();
  return (
    <>
      <Header />
      <main id="main-content">
        <CasePage data={CASES["rbn-utbildning"]} />
      </main>
      <Footer />
    </>
  );
}
