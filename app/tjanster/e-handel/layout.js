import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("e-handel");

export default function Layout({ children }) {
  return (
    <>
      <ExtraServiceSchema serviceKey="e-handel" />
      {children}
    </>
  );
}
