import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("seo", "helsingborg");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="seo" city="helsingborg" />
      {children}
    </>
  );
}
