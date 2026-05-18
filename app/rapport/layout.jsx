export const metadata = {
  title: "Rapport",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: undefined },
};

export default function RapportLayout({ children }) {
  return <>{children}</>;
}
