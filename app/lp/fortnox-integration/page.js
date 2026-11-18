import Landning from "@/components/ny/Landning";
import { LANDNINGAR, landningMetadata } from "@/lib/landningar";

/* Landningssida för Google Ads, noindex. Innehållet ligger i lib/landningar.js. */
export const metadata = landningMetadata("fortnox-integration");

export default function Page() {
  return <Landning d={LANDNINGAR["fortnox-integration"]} />;
}
