import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("google-ads", "lund");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="google-ads" city="lund" />
      {children}
    </>
  );
}
