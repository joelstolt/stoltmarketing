import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("hemsida", "kristianstad");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="hemsida" city="kristianstad" />
      {children}
    </>
  );
}
