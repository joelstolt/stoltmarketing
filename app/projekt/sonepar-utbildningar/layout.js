import { caseMetadata, caseBreadcrumb } from "@/lib/case-data";

export const metadata = caseMetadata("sonepar-utbildningar");

export default function Layout({ children }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseBreadcrumb("sonepar-utbildningar")).replace(/</g, "\\u003c") }} />
    {children}
  </>;
}
