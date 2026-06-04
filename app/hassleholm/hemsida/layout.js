import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("hemsida", "hassleholm");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="hemsida" city="hassleholm" />
      {children}
    </>
  );
}
