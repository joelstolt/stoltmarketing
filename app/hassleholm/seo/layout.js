import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("seo", "hassleholm");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="seo" city="hassleholm" />
      {children}
    </>
  );
}
