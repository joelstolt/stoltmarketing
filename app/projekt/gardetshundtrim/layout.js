import { caseMetadata, caseBreadcrumb } from "@/lib/case-data";

export const metadata = caseMetadata("gardetshundtrim");

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseBreadcrumb("gardetshundtrim")) }}
      />
      {children}
    </>
  );
}
