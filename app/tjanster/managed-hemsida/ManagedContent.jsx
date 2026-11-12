import ServicePage from "@/components/ServicePage";
import { EXTRA_SERVICES } from "@/lib/services-extra";

export default function ManagedContent() {
  return <ServicePage data={EXTRA_SERVICES["managed-hemsida"]} />;
}
