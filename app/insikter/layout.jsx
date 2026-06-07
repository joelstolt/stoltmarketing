export const metadata = {
  title: "Insikter — internt",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: undefined },
};

export default function InsikterLayout({ children }) {
  return <>{children}</>;
}
