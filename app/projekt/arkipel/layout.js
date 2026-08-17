const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
    { "@type": "ListItem", position: 3, name: "Arkipel Entreprenad", item: "https://www.stoltmarketing.se/projekt/arkipel" },
  ],
};

export const metadata = {
  title: "Kundcase: Arkipel Entreprenad",
  description:
    "Hur vi byggde en byggfirmas sajt med 61 sidor i stället för branschmedianens 17, och varför sidbredd är det som avgör om ett lokalt hantverksföretag syns i Google.",
  alternates: { canonical: "https://www.stoltmarketing.se/projekt/arkipel" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
