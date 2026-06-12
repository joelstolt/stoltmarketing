import BContent from "./BContent";

export const metadata = {
  title: "Webbyrå Hässleholm — Hemsida, SEO & AI | Stolt Marketing",
  description:
    "Webbyrå i Hässleholm och Skåne. Moderna hemsidor, e-handel, SEO, Google Ads och AI-automation för företag. 10+ års erfarenhet, fast pris, personlig service.",
  // Splittest-variant: ska aldrig indexeras separat — kanonisk är startsidan
  alternates: { canonical: "https://www.stoltmarketing.se" },
  robots: { index: false, follow: true },
};

export default function BPage() {
  return <BContent />;
}
