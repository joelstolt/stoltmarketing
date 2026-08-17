import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("facebook-annonsering");

export default function Layout({ children }) {
  return (
    <>
      <ExtraServiceSchema serviceKey="facebook-annonsering" />
      {children}
    </>
  );
}
