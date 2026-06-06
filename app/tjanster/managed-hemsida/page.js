import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ManagedContent from "./ManagedContent";
import ServiceExtra from "@/components/ServiceExtra";

export default function Page() {
  return (<><Header /><main><ManagedContent /><ServiceExtra service="managed-hemsida" /></main><Footer /></>);
}
