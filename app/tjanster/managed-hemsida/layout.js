import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("managed-hemsida");

export default function Layout({ children }) {
  return (<><ExtraServiceSchema serviceKey="managed-hemsida" />{children}</>);
}
