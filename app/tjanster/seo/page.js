import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoContent from "./SeoContent";
import ServiceExtra from "@/components/ServiceExtra";

export default function Page() {
  return (<><Header /><main><SeoContent /><ServiceExtra service="seo" /></main><Footer /></>);
}
