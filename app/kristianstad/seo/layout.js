import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("seo", "kristianstad");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="seo" city="kristianstad" />
      {children}
    </>
  );
}
