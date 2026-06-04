import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("ai-automation", "malmo");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="ai-automation" city="malmo" />
      {children}
    </>
  );
}
