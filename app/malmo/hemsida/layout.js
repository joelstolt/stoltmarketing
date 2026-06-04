import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("hemsida", "malmo");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="hemsida" city="malmo" />
      {children}
    </>
  );
}
