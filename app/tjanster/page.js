import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TjansterContent from "./TjansterContent";

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.stoltmarketing.se/tjanster" },
  ],
};

export default function Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><Header /><main id="main-content" tabIndex={-1}><TjansterContent /></main><Footer /></>);
}
