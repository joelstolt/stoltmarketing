import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";
import { EXTRA_SERVICES } from "@/lib/services-extra";

export default function Page() {
  return (<><Header /><main id="main-content" tabIndex={-1}><ServicePage data={EXTRA_SERVICES["seo"]} /></main><Footer /></>);
}
