import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("hemsida", "helsingborg");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="hemsida" city="helsingborg" />
      {children}
    </>
  );
}
