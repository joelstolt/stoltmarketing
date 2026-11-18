/* Stolt Marketings märke, ny profil 2026-11-17 (Noden, vald av Joel samma dag).
   Ett S ritat som ett flöde mellan två punkter, från förfrågan till leverans. */

export function Mark({ size = 24, className, title }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    role: title ? "img" : undefined,
    "aria-hidden": title ? undefined : true,
  };

  return (
    <svg {...common}>
      {title ? <title>{title}</title> : null}
      <path
        d="M18 5H8.6C7.16 5 6 6.16 6 7.6v1.8C6 10.84 7.16 12 8.6 12h6.8c1.44 0 2.6 1.16 2.6 2.6v1.8c0 1.44-1.16 2.6-2.6 2.6H6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="5" r="2.7" fill="var(--color-accent)" />
      <circle cx="6" cy="19" r="2.7" fill="currentColor" />
    </svg>
  );
}

export function Logo({ size = 22, className, showSub = true }) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap" }}>
      <Mark size={size} />
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontSize: 18.5, fontWeight: 700, letterSpacing: "-0.025em", color: "var(--color-heading)" }}>Stolt</span>
        {showSub ? (
          <span style={{ fontSize: 15, fontWeight: 450, letterSpacing: "-0.01em", color: "var(--color-muted)" }}>Marketing</span>
        ) : null}
      </span>
    </span>
  );
}
