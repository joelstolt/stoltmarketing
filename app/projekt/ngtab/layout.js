const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
    { "@type": "ListItem", position: 3, name: "Norrlands Gräv & Transport", item: "https://www.stoltmarketing.se/projekt/ngtab" },
  ],
};

export const metadata = {
  title: "Kundcase: Norrlands Gräv & Transport",
  description:
    "Hur en felplacerad canonical-tagg kan göra 69 sidor osynliga i Google, och hur vi byggde entreprenadsajten så att varenda sida räknas.",
  alternates: { canonical: "https://www.stoltmarketing.se/projekt/ngtab" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
