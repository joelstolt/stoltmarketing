import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("google-ads");

export default function Layout({ children }) {
  return (<><ExtraServiceSchema serviceKey="google-ads" />{children}</>);
}
