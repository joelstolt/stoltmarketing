import { cityServiceMetadata, CityServiceSchema } from "@/lib/local/seo";

export const metadata = cityServiceMetadata("google-ads", "malmo");

export default function Layout({ children }) {
  return (
    <>
      <CityServiceSchema service="google-ads" city="malmo" />
      {children}
    </>
  );
}
