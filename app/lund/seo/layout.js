import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("seo", "lund");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="seo" city="lund" />
      {children}
    </>
  );
}
