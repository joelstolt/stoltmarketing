import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("webbutveckling");

export default function Layout({ children }) {
  return (<><ExtraServiceSchema serviceKey="webbutveckling" />{children}</>);
}
