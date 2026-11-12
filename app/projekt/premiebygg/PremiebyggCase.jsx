import CasePage from "@/components/CasePage";
import { CASES } from "@/lib/case-data";

export default function PremiebyggCase() {
  return <CasePage data={CASES["premiebygg"]} />;
}
