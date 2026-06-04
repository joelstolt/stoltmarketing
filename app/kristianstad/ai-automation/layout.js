import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("ai-automation", "kristianstad");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="ai-automation" city="kristianstad" />
      {children}
    </>
  );
}
