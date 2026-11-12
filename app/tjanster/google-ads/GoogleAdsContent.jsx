import ServicePage from "@/components/ServicePage";
import { EXTRA_SERVICES } from "@/lib/services-extra";

export default function GoogleAdsContent() {
  return <ServicePage data={EXTRA_SERVICES["google-ads"]} />;
}
