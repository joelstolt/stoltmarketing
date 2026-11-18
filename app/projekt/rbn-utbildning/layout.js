import { caseMetadata, caseBreadcrumb } from "@/lib/case-data";

export const metadata = caseMetadata("rbn-utbildning");

export default function Layout({ children }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseBreadcrumb("rbn-utbildning")).replace(/</g, "\\u003c") }} />
    {children}
  </>;
}
