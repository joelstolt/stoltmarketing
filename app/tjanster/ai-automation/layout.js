import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("ai-automation");

export default function Layout({ children }) {
  return (<><ExtraServiceSchema serviceKey="ai-automation" />{children}</>);
}
