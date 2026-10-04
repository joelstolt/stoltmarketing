const title = "Tjänster: hemsida, SEO, annonsering och förfrågningar";
const description = "Välj hjälp efter ditt behov: hemsida, SEO-audit, Google Ads eller rutan för förfrågningar. Joel Stolt utgår från Hässleholm och avgränsar arbetet före start.";
const url = "https://www.stoltmarketing.se/tjanster";

export const metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "sv_SE" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }) {
  return children;
}
