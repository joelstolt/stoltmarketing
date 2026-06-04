import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("google-ads", "helsingborg");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="google-ads" city="helsingborg" />
      {children}
    </>
  );
}
