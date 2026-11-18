const title = "Det jag gör: sajter, Google och ChatGPT, annonser och system med AI-agent";
const description = "Sajter och webbshoppar, synlighet i Google och ChatGPT, annonser och egna system med AI-agent. Joel Stolt i Hässleholm, fast pris innan jag börjar.";
const url = "https://www.stoltmarketing.se/tjanster";

export const metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }],  title, description, url, type: "website", locale: "sv_SE" },
  twitter: { images: ["/og-image.png"],  card: "summary_large_image", title, description },
};

export default function Layout({ children }) {
  return children;
}
