import Link from "next/link";
import { Check, Plus, ChevronRight } from "lucide-react";
import { OmradeDemo } from "./Omraden";
import { SITE } from "@/lib/local/data";
import k from "./sida.module.css";

/* Sidkit för tjänste- och stadssidorna (2026-11-17 kväll). Samma uttryck som startsidan:
   vänsterställd topp med levande demo, celler med hårfina linjer, vit primärknapp. */

/* Vilket områdes demo som visas i toppen för en tjänst. */
export const TJANST_OMRADE = {
  seo: "hittar",
  "ai-synlighet": "hittar",
  "google-ads": "hittar",
  "facebook-annonsering": "hittar",
  webbutveckling: "kunder",
  "e-handel": "kunder",
  wordpress: "kunder",
  "managed-hemsida": "kunder",
  hemsida: "kunder",
  "ai-automation": "handarbete",
};

export function Sida({ children }) {
  return <div className={k.page}>{children}</div>;
}

export function SidHero({ crumbs, kicker, title, lead, punkter, cta, sekundar, omrade }) {
  return (
    <section className={k.hero}>
      <div className={`${k.frame} ${k.heroGrid}`}>
        <div>
          {crumbs && (
            <nav className={k.crumbs} aria-label="Brödsmulor">
              {crumbs.map((c, i) => (
                <span key={c.label} style={{ display: "contents" }}>
                  {i > 0 && <span className={k.crumbSep} aria-hidden="true">/</span>}
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          {kicker && <p className={k.kicker}>{kicker}</p>}
          <h1 className={k.h1}>{title}</h1>
          {lead && <p className={k.lead}>{lead}</p>}
          {punkter?.length > 0 && (
            <ul className={k.points}>
              {punkter.map((p) => (
                <li key={p}>
                  <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          )}
          <div className={k.actions}>
            {cta && (
              <Link href={cta.href} className={k.btn}>
                {cta.label}
              </Link>
            )}
            {sekundar && (
              <Link href={sekundar.href} className={k.btnDark}>
                {sekundar.label}
              </Link>
            )}
          </div>
        </div>
        {omrade && (
          <div className={k.heroDemo}>
            <OmradeDemo omrade={omrade} />
          </div>
        )}
      </div>
    </section>
  );
}

export function Sektion({ id, rubrik, ingress, children, pad = true }) {
  return (
    <section className={k.section} id={id}>
      <div className={`${k.frame} ${pad ? k.pad : ""}`}>
        {rubrik && (
          <div className={k.head}>
            <h2 className={k.h2}>{rubrik}</h2>
            {ingress && <p className={k.h2Lead}>{ingress}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Celler({ items, kolumner = 3 }) {
  const klass = kolumner === 1 ? k.cells1 : kolumner === 2 ? k.cells2 : kolumner === 4 ? k.cells4 : "";
  return (
    <ul className={`${k.cells} ${klass}`}>
      {items.map((it) => {
        const inner = (
          <>
            {it.ikon && (
              <span className={k.cellIcon} aria-hidden="true">
                <it.ikon size={17} strokeWidth={1.8} />
              </span>
            )}
            <h3 className={k.cellTitle}>{it.titel}</h3>
            {it.text && <p className={k.cellText}>{it.text}</p>}
            {it.lank && (
              <span className={k.cellLink}>
                <span>{it.lank}</span>
              </span>
            )}
          </>
        );
        return it.href ? (
          <li key={it.titel} style={{ display: "contents" }}>
            <Link href={it.href} className={k.cell}>
              {inner}
            </Link>
          </li>
        ) : (
          <li key={it.titel} className={k.cell}>
            {inner}
          </li>
        );
      })}
    </ul>
  );
}

export function Erbjudanden({ offers, fallback }) {
  return (
    <div className={`${k.offers} ${offers.length === 3 ? k.offers3 : ""}`}>
      {offers.map((o) => (
        <article key={o.name} className={k.offer}>
          <h3 className={k.offerName}>{o.name}</h3>
          {o.price && (
            <span className={k.offerPrice}>
              <span className={k.dot} aria-hidden="true" />
              {o.price}
            </span>
          )}
          {o.desc && <p className={k.offerDesc}>{o.desc}</p>}
          {o.features?.length > 0 && (
            <ul className={k.checks}>
              {o.features.map((f) => (
                <li key={f}>
                  <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          {o.terms && <p className={k.offerTerms}>{o.terms}</p>}
          {(o.href || fallback) && (
            <Link href={o.href || fallback.href} className={k.link}>
              {o.label || fallback.label}
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

export function Bevis({ etikett, titel, text, href, lank }) {
  return (
    <div className={k.proof}>
      <div>
        {etikett && (
          <p className={k.proofLabel}>
            <span className={k.dot} aria-hidden="true" />
            {etikett}
          </p>
        )}
        <h3 className={k.proofTitle}>{titel}</h3>
        <p className={k.proofText}>{text}</p>
      </div>
      {href && (
        <Link href={href} className={k.btnDark}>
          {lank}
        </Link>
      )}
    </div>
  );
}

export function Delad({ rubrik, ingress, children }) {
  return (
    <div className={k.split}>
      <div>
        <h2 className={k.h2}>{rubrik}</h2>
        {ingress && <p className={k.h2Lead}>{ingress}</p>}
      </div>
      <div>{children}</div>
    </div>
  );
}

export function Text({ stycken }) {
  return (
    <div className={k.prose}>
      {stycken.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export function Ruta({ titel, text }) {
  return (
    <aside className={k.aside}>
      <h3 className={k.asideTitle}>{titel}</h3>
      <p className={k.asideText}>{text}</p>
    </aside>
  );
}

export function Fragor({ faqs }) {
  return (
    <div className={k.faqList}>
      {faqs.map((f) => (
        <details key={f.q} className={k.faqItem}>
          <summary>
            {f.q}
            <Plus size={18} strokeWidth={1.8} className={k.faqIcon} aria-hidden="true" />
          </summary>
          <p className={k.faqA}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Lankkolumner({ kolumner }) {
  return (
    <div className={k.linkCols}>
      {kolumner.map((kol) => (
        <div key={kol.titel} className={k.linkCol}>
          <h3 className={k.linkColTitle}>{kol.titel}</h3>
          <div className={k.linkList}>
            {kol.lankar.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
                <ChevronRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Avslut({ rubrik, text, cta, extra }) {
  return (
    <section className={`${k.section} ${k.final}`}>
      <div className={k.frame}>
        <h2 className={k.finalTitle}>{rubrik}</h2>
        {text && <p className={k.finalText}>{text}</p>}
        <div className={k.finalActions}>
          <Link href={cta.href} className={k.btn}>
            {cta.label}
          </Link>
          <a href={SITE.phoneHref} className={k.btnDark}>
            Ring {SITE.phone}
          </a>
        </div>
        {extra && <p className={k.finalAlt}>{extra}</p>}
      </div>
    </section>
  );
}

export { k as sidaStil };
