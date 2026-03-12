const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Projekt", href: "#case" },
  { label: "Om mig", href: "#om" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="font-heading text-[15px] font-700 text-heading">
            Stolt Marketing
          </span>
          <span className="text-[13px] text-muted">
            © {new Date().getFullYear()} Alla rättigheter förbehållna.
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted hover:text-heading transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
