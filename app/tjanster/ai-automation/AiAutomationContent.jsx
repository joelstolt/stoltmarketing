import ServicePage from "@/components/ServicePage";
import { EXTRA_SERVICES } from "@/lib/services-extra";

export default function AiAutomationContent() {
  return <ServicePage data={EXTRA_SERVICES["ai-automation"]} />;
}
