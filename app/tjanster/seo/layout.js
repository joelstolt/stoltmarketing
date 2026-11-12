import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("seo");

export default function Layout({ children }) {
  return (<><ExtraServiceSchema serviceKey="seo" />{children}</>);
}
