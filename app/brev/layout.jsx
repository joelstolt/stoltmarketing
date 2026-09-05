export const metadata = {
  title: "Brev",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: { canonical: undefined },
};

export default function BrevLayout({ children }) {
  return <>{children}</>;
}
