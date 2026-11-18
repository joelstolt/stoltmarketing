import { caseMetadata, caseBreadcrumb } from "@/lib/case-data";

export const metadata = caseMetadata("eget-crm");

export default function Layout({ children }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseBreadcrumb("eget-crm")).replace(/</g, "\\u003c") }} />
    {children}
  </>;
}
