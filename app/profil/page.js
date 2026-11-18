import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mark } from "@/components/ny/Logo";
import s from "@/components/ny/ny.module.css";
import p from "./profil.module.css";

export const metadata = {
  title: "Grafisk profil",
  description: "Stolt Marketings grafiska profil: märke, färger, typsnitt och komponenter.",
  robots: { index: false, follow: false },
};

/* Grafisk profil 2026-11-17. Märket Noden valt samma dag. Ingen indexering. */

const MARKET = [
  {
    titel: "Vad det betyder",
    text: "Ett S ritat som ett flöde mellan två punkter, från förfrågan till leverans. Den färgade punkten är där det börjar.",
  },
  {
    titel: "Så används det",
    text: "Märket står alltid före ordbilden, Stolt i fet stil och Marketing dämpat. Ensamt används det bara som favicon och appikon.",
  },
];

const FARGER = [
  { namn: "Bakgrund", varde: "#0A0A0B", var: "--color-base" },
  { namn: "Yta", varde: "#111113", var: "--color-surface" },
  { namn: "Yta, upphöjd", varde: "#17171A", var: "--color-surface-muted" },
  { namn: "Text", varde: "#EDEDEE", var: "--color-heading" },
  { namn: "Brödtext", varde: "#C4C4C9", var: "--color-body" },
  { namn: "Dämpad", varde: "#8D8D94", var: "--color-muted" },
  { namn: "Signal", varde: "#3DD68C", var: "--color-accent" },
  { namn: "Linje", varde: "vitt 8 och 14 %", var: "--color-border" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        <section className={s.intro}>
          <div className={`${s.frame} ${s.introInner}`}>
            <p className={s.kicker}>Grafisk profil</p>
            <h1 className={s.h1Sub}>Stolt Marketing, ny profil</h1>
            <p className={s.heroLead}>
              Mörkt, hårfina linjer, ett typsnitt, vit knapp och en signalfärg som används sparsamt. Märket heter Noden.
            </p>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.blockHead}>
              <h2 className={s.h2}>Märket</h2>
              <p className={s.blockLead}>Noden, med ordbilden Stolt i fet stil och Marketing dämpat.</p>
            </div>
            <div className={p.marks}>
              <div className={p.markCard}>
                <div className={p.markStage}>
                  <span className={p.lockup}>
                    <Mark size={34} />
                    <span className={p.word}>Stolt</span>
                    <span className={p.wordSub}>Marketing</span>
                  </span>
                </div>
                <div className={p.markRow}>
                  <span className={p.favDark}><Mark size={22} /></span>
                  <span className={p.favLight}><Mark size={22} /></span>
                  <span className={p.favBig}><Mark size={56} /></span>
                </div>
              </div>
              {MARKET.map((m) => (
                <div key={m.titel} className={p.markCard}>
                  <h3 className={s.cellTitle}>{m.titel}</h3>
                  <p className={s.cellText}>{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.blockHead}>
              <h2 className={s.h2}>Färger</h2>
              <p className={s.blockLead}>Signalfärgen används bara för status och små markeringar, aldrig som hel yta. Knappen är vit.</p>
            </div>
            <div className={p.swatches}>
              {FARGER.map((f) => (
                <div key={f.namn} className={p.swatch}>
                  <span className={p.chipColor} style={{ background: `var(${f.var})` }} />
                  <span className={p.swName}>{f.namn}</span>
                  <span className={p.swVal}>{f.varde}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.blockHead}>
              <h2 className={s.h2}>Typsnitt</h2>
              <p className={s.blockLead}>Schibsted Grotesk för allt, självhostat. Rubriker i normal skiftläge, tät spärrning.</p>
            </div>
            <div className={p.type}>
              <p className={p.t1}>Utvecklaren ni inte har.</p>
              <p className={p.t2}>Det digitala som tar in kunder och sparar tid.</p>
              <p className={p.t3}>
                Jag löser det som krånglar och bygger det som saknas, med svar nästa arbetsdag. Brödtexten är lugn och
                lätt att läsa, i grått på svart.
              </p>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.blockHead}>
              <h2 className={s.h2}>Komponenter</h2>
            </div>
            <div className={s.heroActions} style={{ marginTop: 0 }}>
              <Link href="/kontakt" className={s.btnPrimary}>Primär knapp</Link>
              <Link href="/sa-funkar-det" className={s.btnGhost}>Sekundär knapp</Link>
              <span className={s.chip}><span className={s.dotAccent} />I drift</span>
              <span className={s.chip}><span className={s.dotMuted} />I test</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
