export const metadata = {
  title: "Blogg: praktiska guider om hemsidor, SEO och AI",
  description: "32 guider av Joel Stolt med ämnesfilter, checklistor och konkreta exempel. Hitta hjälp med hemsidor, SEO, annonser, AI och e-handel.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg" },
  openGraph: {
    title: "Guider om hemsidor, SEO och AI | Stolt Marketing",
    description: "Välj ett problem och hitta en praktisk guide med exempel, källor och tydliga avgränsningar.",
    url: "https://www.stoltmarketing.se/blogg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guider om hemsidor, SEO och AI | Stolt Marketing",
    description: "Praktiska guider av Joel Stolt med ämnesfilter, checklistor och konkreta exempel.",
  },
};

// Each article emits its complete breadcrumb once from its own layout.
export default function BloggLayout({ children }) {
  return children;
}
