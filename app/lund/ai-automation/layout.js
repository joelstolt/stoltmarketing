import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("ai-automation", "lund");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="ai-automation" city="lund" />
      {children}
    </>
  );
}
