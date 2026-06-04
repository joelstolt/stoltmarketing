import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("ai-automation", "helsingborg");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="ai-automation" city="helsingborg" />
      {children}
    </>
  );
}
