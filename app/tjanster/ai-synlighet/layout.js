import { extraServiceMetadata, ExtraServiceSchema } from "@/lib/services-extra";

export const metadata = extraServiceMetadata("ai-synlighet");

export default function Layout({ children }) {
  return (
    <>
      <ExtraServiceSchema serviceKey="ai-synlighet" />
      {children}
    </>
  );
}
