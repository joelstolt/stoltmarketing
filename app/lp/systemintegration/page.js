import Landning from "@/components/ny/Landning";
import { LANDNINGAR, landningMetadata } from "@/lib/landningar";

/* Landningssida för Google Ads, noindex. Innehållet ligger i lib/landningar.js. */
export const metadata = landningMetadata("systemintegration");

export default function Page() {
  return <Landning d={LANDNINGAR["systemintegration"]} />;
}
