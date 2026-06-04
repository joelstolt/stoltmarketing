import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("seo", "malmo");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="seo" city="malmo" />
      {children}
    </>
  );
}
