export const metadata = {
  title: "Insyn",
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

export default function InsynLayout({ children }) {
  return <>{children}</>;
}
