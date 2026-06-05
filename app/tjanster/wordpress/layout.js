import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("wordpress");

export default function Layout({ children }) {
  return (
    <>
      <ExtraServiceSchema serviceKey="wordpress" />
      {children}
    </>
  );
}
