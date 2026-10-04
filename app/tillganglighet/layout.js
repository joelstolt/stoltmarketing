import { accessFaqs } from "./data";
const title = "Tillgänglighet: granskning och åtgärder med tydlig omfattning";
const description = "Jag granskar webbtillgänglighet från 4 900 kr exkl. moms och åtgärdar från 24 500 kr. Manuella tester, rapport och rätt avgränsning av lagkrav.";
const url = "https://www.stoltmarketing.se/tillganglighet";
export const metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url },
  twitter: { card: "summary_large_image", title, description },
};
const service = {
  "@context": "https://schema.org", "@type": "Service", name: "Webbtillgänglighet: granskning och åtgärder", serviceType: "Webbtillgänglighet",
  provider: { "@type": "ProfessionalService", "@id": "https://www.stoltmarketing.se/#organization", name: "Stolt Marketing" }, areaServed: "SE", url,
  offers: [
    { "@type": "Offer", name: "Avgränsad tillgänglighetsgranskning", price: "4900", priceCurrency: "SEK", priceSpecification: { "@type": "PriceSpecification", price: "4900", priceCurrency: "SEK", valueAddedTaxIncluded: false } },
    { "@type": "Offer", name: "Åtgärdspaket, frånpris efter granskning", priceSpecification: { "@type": "PriceSpecification", minPrice: "24500", priceCurrency: "SEK", valueAddedTaxIncluded: false } },
  ],
};
const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Start", item: "https://www.stoltmarketing.se" },
  { "@type": "ListItem", position: 2, name: "Tillgänglighet", item: url },
] };
const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: accessFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
export default function Layout({ children }) {
  return <>{[service,breadcrumb,faq].map((schema,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}{children}</>;
}
