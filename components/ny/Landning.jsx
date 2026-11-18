import { Check, Phone } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import ArendeFonster from "./ArendeFonster";
import { Mark } from "./Logo";
import { OmradeDemo } from "./Omraden";
import { Sida, Sektion, Celler, Delad, Text, Fragor, sidaStil as k } from "./Sida";
import { SITE } from "@/lib/local/data";
import { synligtCase } from "@/lib/case-data";
import s from "./ny.module.css";
import t from "./start.module.css";
import l from "./landning.module.css";

/* Landningssidor för Google Ads (2026-11-18). En sida per annonsgrupp, ett mål per sida:
   en förfrågan via formuläret eller ett samtal. Ingen huvudmeny, formuläret högt upp och
   igen efter bevisen. Underlag: _underlag/arbetsmappar/google-ads-2026-11-18/RESEARCH-landningssidor.md.
   Inga påhittade siffror: bevisen kommer ur lib/case-data.js och case-fakta-*.md. */

/* Bevis som delas mellan sidorna. Siffrorna står i caset eget-crm (lib/case-data.js). */
export const BEVIS = {
  crm: {
    etikett: "Mitt eget system, i drift sedan 14 november 2026",
    titel: "Mitt eget CRM med AI-agent",
    text: "Förfrågningar, offerter, uppföljning och fakturor på ett ställe. Agenten gick igenom 30 dagars mejl och skrev 22 svarsutkast för 0,63 USD i AI-kostnad. Inget skickas utan mitt klick.",
    href: "/projekt/eget-crm",
    lank: "Läs hela caset",
  },
  /* Anonymt tills kunden sagt ok. Länken till caset visas bara på förhandsadressen. */
  grossist: {
    etikett: "Från ett uppdrag",
    titel: "Kurser från två system på en sajt",
    text: "Åt en teknisk grossist samlade jag kurser från två olika system på en sajt. En bokning hamnar direkt i rätt system hos rätt person, och en ändring i kurssystemet syns på sajten inom 15 minuter. Ingen skriver av något.",
    caseSlug: "sonepar-utbildningar",
  },
};

export const STEG = [
  { titel: "1. Samtal", text: "Ni berättar vad som tar tid eller vad som ska hänga ihop. Första samtalet kostar ingenting." },
  { titel: "2. Klickbar demo", text: "Efter samtalet visar jag en klickbar demo av det vi pratat om. Ni klickar runt i den innan ni bestämmer er. Helt riskfritt för er." },
  { titel: "3. Fast pris och bygget", text: "Ni får ett fast pris skriftligt innan jag börjar. Sedan bygger jag, ett flöde i taget, och ni äger det som byggs." },
  { titel: "4. Drift", text: "Vill ni kan jag sköta det efteråt till fast månadspris, med svar nästa arbetsdag." },
];

/* Joels USP (2026-11-18): efter första samtalet får kunden alltid en klickbar demo,
   helt riskfritt. Gäller CRM, affärssystem, sajt och webbshop. */
export const FRAGA_DEMO = {
  q: "Får vi se något innan vi bestämmer oss?",
  a: "Ja. Efter första samtalet visar jag en klickbar demo av det vi pratat om, oavsett om det är ett CRM, ett affärssystem, en sajt eller en webbshop. Ni klickar runt i den innan ni bestämmer er. Helt riskfritt för er.",
};

function FlodesDemo({ titel, steg, fot }) {
  return (
    <div className={t.demo}>
      <div className={t.demoHead}>
        <span>{titel}</span>
        <span className={t.demoChip}>
          <span className={s.dotAccent} aria-hidden="true" />
          Exempel
        </span>
      </div>
      <div className={t.demoBody}>
        <ol className={t.leadFlow}>
          {steg.map((st, i) => (
            <li key={st.label} className={t.leadStep} style={{ "--i": i }}>
              <span className={t.leadLabel}>{st.label}</span>
              {st.typ === "falt" && <span className={t.field}>{st.text}</span>}
              {st.typ === "utkast" && <span className={t.draft}>{st.text}</span>}
              {st.typ === "notis" && (
                <span className={t.notice}>
                  <span className={s.dotAccent} aria-hidden="true" />
                  {st.text}
                  {st.var && <span className={t.noticeWhere}>{st.var}</span>}
                </span>
              )}
              {st.typ === "klart" && (
                <span className={t.confirmMini}>
                  <span className={t.repCheck} aria-hidden="true">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {st.text}
                </span>
              )}
              {st.typ === "skicka" && (
                <span className={t.confirmMini}>
                  <span className={t.sendBtn} aria-hidden="true">Skicka</span>
                  {st.text}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
      {fot && <div className={t.demoFoot}>{fot}</div>}
    </div>
  );
}

function Demo({ demo, ev }) {
  if (demo.typ === "omrade") return <OmradeDemo omrade={demo.omrade} />;
  if (demo.typ === "arende") return <ArendeFonster href="#forfragan" event={`${ev}-fonster-cta`} />;
  return <FlodesDemo titel={demo.titel} steg={demo.steg} fot={demo.fot} />;
}

function Formular({ d, ev, rubrik, text, id }) {
  return (
    <div className={l.formCard} id={id}>
      <h2 className={l.formTitle}>{rubrik}</h2>
      <p className={l.formLead}>{text}</p>
      <InquiryForm
        service={d.service}
        eventName={`lead-${ev}`}
        messageLabel={d.form.label}
        placeholder={d.form.placeholder}
        submitLabel="Skicka, jag svarar nästa arbetsdag"
        rows={4}
      />
    </div>
  );
}

function BevisRuta({ b, ev }) {
  const href = b.caseSlug ? (synligtCase(b.caseSlug) ? `/projekt/${b.caseSlug}` : null) : b.href;
  return (
    <div className={k.proof}>
      <div>
        <p className={k.proofLabel}>
          <span className={k.dot} aria-hidden="true" />
          {b.etikett}
        </p>
        <h3 className={k.proofTitle}>{b.titel}</h3>
        <p className={k.proofText}>{b.text}</p>
      </div>
      {href && (
        <a href={href} className={k.btnDark} data-umami-event={`${ev}-case`}>
          {b.lank || "Läs caset"}
        </a>
      )}
    </div>
  );
}

export default function Landning({ d }) {
  const ev = `lp-${d.slug}`;
  const tel = (plats) => ({ href: SITE.phoneHref, "data-umami-event": `${ev}-ring-${plats}` });

  return (
    <Sida>
      <header className={l.top}>
        <div className={`${k.frame} ${l.topInner}`}>
          <span className={l.brand} aria-label="Stolt Marketing">
            <Mark size={22} />
            <span className={l.brandName}>Stolt</span>
            <span className={l.brandSub}>Marketing</span>
          </span>
          <div className={l.topActions}>
            <a {...tel("topp")} className={`${k.btnDark} ${l.topBtn}`}>
              <Phone size={15} strokeWidth={2} aria-hidden="true" />
              <span className={l.topPhone}>{SITE.phone}</span>
              <span className={l.topPhoneShort}>Ring</span>
            </a>
            <a href="#forfragan" className={`${k.btn} ${l.topBtn} ${l.topCta}`} data-umami-event={`${ev}-topp-cta`}>
              Skicka förfrågan
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Toppen: rubriken speglar sökordet och annonsen, formuläret direkt bredvid. */}
        <section className={k.hero}>
          <div className={`${k.frame} ${l.heroGrid}`}>
            <div>
              <p className={k.kicker}>{d.kicker}</p>
              <h1 className={`${k.h1} ${l.h1}`}>{d.h1}</h1>
              <p className={k.lead}>{d.lead}</p>
              <ul className={k.points}>
                {["Klickbar demo innan ni bestämmer er", "Fast pris skriftligt innan jag börjar", "Svar nästa arbetsdag", "Första samtalet kostar ingenting"].map((p) => (
                  <li key={p}>
                    <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className={l.person}>
                <img src="/joel-stolt-240.webp" alt="Joel Stolt" width="48" height="48" className={l.personImg} />
                <p className={l.personText}>
                  <strong>Joel Stolt, Stolt Marketing i Hässleholm.</strong> Det är jag som svarar, bygger och sköter det efteråt. Kunder i hela Sverige.
                </p>
              </div>
            </div>
            <Formular d={d} ev={ev} id="forfragan" rubrik={d.form.titel} text={d.form.text} />
          </div>
        </section>

        <Sektion pad={false}>
          <div className={l.proofPad}>
            <BevisRuta b={BEVIS[d.bevis[0]]} ev={ev} />
          </div>
        </Sektion>

        <Sektion>
          <div className={l.demoSplit}>
            <div>
              <h2 className={k.h2}>{d.demoRubrik}</h2>
              <div className={l.demoText}>
                <Text stycken={d.demoText} />
              </div>
            </div>
            <div className={l.demoBox}>
              <Demo demo={d.demo} ev={ev} />
            </div>
          </div>
        </Sektion>

        <Sektion rubrik={d.gor.rubrik} ingress={d.gor.ingress}>
          <Celler kolumner={d.gor.items.length === 4 ? 2 : 3} items={d.gor.items} />
        </Sektion>

        {d.bevis.length > 1 && (
          <Sektion pad={false}>
            <div className={l.proofPad}>
              <div className={l.proofStack}>
                {d.bevis.slice(1).map((b) => (
                  <BevisRuta key={b} b={BEVIS[b]} ev={ev} />
                ))}
              </div>
            </div>
          </Sektion>
        )}

        <Sektion rubrik="Så går det till" ingress="Ni ser en klickbar demo och vet priset innan jag börjar. Inga timmar som rinner iväg.">
          <Celler kolumner={4} items={STEG} />
        </Sektion>

        <Sektion rubrik="Vad som avgör priset" ingress="Jag visar inga priser här, eftersom inga två uppdrag är lika. Det här är det som påverkar, och ni får ett fast pris skriftligt innan jag börjar.">
          <Celler kolumner={4} items={d.pris} />
        </Sektion>

        <Sektion>
          <Delad rubrik="Vanliga frågor">
            <Fragor faqs={[FRAGA_DEMO, ...d.faq]} />
          </Delad>
        </Sektion>

        {/* Formuläret igen, efter bevisen. */}
        <section className={`${k.section} ${l.final}`}>
          <div className={`${k.frame} ${l.finalGrid}`}>
            <div>
              <h2 className={k.h2}>{d.avslut.rubrik}</h2>
              <p className={k.h2Lead}>{d.avslut.text}</p>
              <div className={l.finalActions}>
                <a {...tel("avslut")} className={`${k.btnDark} ${l.bigBtn}`}>
                  <Phone size={16} strokeWidth={2} aria-hidden="true" />
                  Ring {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className={l.mail} data-umami-event={`${ev}-mejl`}>
                  {SITE.email}
                </a>
              </div>
            </div>
            <Formular d={d} ev={ev} id="forfragan-2" rubrik={d.form.titel} text="Några rader räcker. Jag svarar nästa arbetsdag." />
          </div>
        </section>
      </main>

      <footer className={l.foot}>
        <div className={`${k.frame} ${l.footInner}`}>
          <span>Stolt Marketing, Joel Stolt, Hässleholm</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href="/integritet">Integritet</a>
        </div>
      </footer>
    </Sida>
  );
}
