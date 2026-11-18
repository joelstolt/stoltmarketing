import Link from "next/link";
import { Check } from "lucide-react";
import { OMRADEN } from "@/lib/nav";
import { SITE } from "@/lib/local/data";
import s from "@/components/ny/ny.module.css";
import o from "./om.module.css";

/* /om i nya profilen (2026-11-17). Underlag: positionering-2026-11-15/sajttext.md avsnitt 6
   och erbjudande-2026-11-17/RAPPORT.md (nej-listan; reservplan och org.nr läggs in när Joel har dem). Inga påhittade siffror. */

const SA_JOBBAR_JAG = [
  "Svar nästa arbetsdag, och akuta fel börjar jag felsöka samma arbetsdag.",
  "Fast pris innan jag börjar, skriftligt. Inga timmar som rinner iväg.",
  "Löpande hjälp har ett fast månadspris och en rapport första vardagen i månaden.",
  "Första samtalet kostar ingenting.",
  "Efter första samtalet får ni en klickbar demo, helt riskfritt.",
];

const STEG = [
  ["Samtal", "Ni berättar vad ni behöver eller vad som krånglar"],
  ["Klickbar demo", "Ni klickar i den innan ni bestämmer er, helt riskfritt"],
  ["Bygget", "Fast pris, skriftligt, innan jag börjar"],
  ["Löpande", "Drift eller reserverad tid varje månad"],
];

const NEJ = [
  {
    titel: "Sociala medier",
    text: "Jag sköter inte inlägg och konton i sociala medier som en egen tjänst. Annonser i Facebook och Instagram gör jag, med samma mätning som allt annat.",
  },
  {
    titel: "Grafisk profil",
    text: "Logotyp och grafisk profil säljer jag inte som en egen tjänst. Design ingår när jag bygger en sajt eller ett system åt er.",
  },
];

export default function OmContent() {
  return (
    <>
      {/* Toppen */}
      <section className={s.intro}>
        <div className={`${s.frame} ${s.introInner}`}>
          <nav className={s.crumbs} aria-label="Brödsmulor">
            <Link href="/">Start</Link>
            <span className={s.crumbSep} aria-hidden="true">/</span>
            <span aria-current="page">Om Joel</span>
          </nav>
          <div className={s.introGrid}>
            <div>
              <p className={s.kicker}>Om Joel</p>
              <h1 className={s.h1Sub}>Jag heter Joel Stolt.</h1>
              <p className={s.heroLead}>
                Jag driver Stolt Marketing från Hässleholm. Jag bygger och sköter sajter, system, mätning och annonser
                åt företag och organisationer som har någon som ansvarar för marknaden, men ingen egen utvecklare.
              </p>
              <div className={s.heroActions}>
                <Link href="/kontakt" className={s.btnPrimary} data-umami-event="om-hero-cta">
                  Berätta vad ni behöver
                </Link>
                <Link href="/projekt" className={s.btnGhost}>Se case</Link>
              </div>
            </div>
            <figure className={o.photo}>
              <img
                src="/joel-stolt.webp"
                alt="Joel Stolt"
                className={s.joelImg}
                width="400"
                height="500"
                fetchPriority="high"
              />
              <figcaption className={o.photoCaption}>Joel Stolt, Stolt Marketing i Hässleholm.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* En person */}
      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={s.split}>
            <div className={`${o.prose} ${s.reveal}`}>
              <h2 className={s.h2}>Det är jag som svarar.</h2>
              <p>
                Jag jobbar ensam. Det betyder att du alltid pratar med den som gör jobbet: det är jag som svarar, jag
                som bygger och jag som håller koll på att det fortsätter fungera.
              </p>
              <p>
                Många av mina kunder har hittat mig genom någon de litar på. Det säger något om hur jag vill jobba: jag
                svarar när jag har sagt att jag ska svara, jag förklarar så att du förstår, och jag säger till om något
                inte är värt pengarna.
              </p>
              <p>
                I över tio år har jag byggt webbplatser och digitala lösningar, bland annat för
                utbildningsverksamheter inom AcadeMedia. Kunderna finns i hela Sverige.
              </p>
            </div>
            <div className={s.reveal}>
              <dl className={s.facts} style={{ marginTop: 0, gridTemplateColumns: "1fr", gap: 24 }}>
                <div>
                  <dt>Svar</dt>
                  <dd>Nästa arbetsdag</dd>
                </div>
                <div>
                  <dt>Akuta fel</dt>
                  <dd>Felsökning börjar samma arbetsdag</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Vad jag gör */}
      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={`${s.blockHead} ${s.reveal}`}>
            <h2 className={s.h2}>Det här gör jag</h2>
            <p className={s.blockLead}>
              Bredden finns, men allt handlar om tre saker: att fler hittar er, att fler blir kunder och att ni slipper
              handarbete.
            </p>
          </div>
          <div className={`${s.cells} ${s.reveal}`}>
            {OMRADEN.map((om) => (
              <Link key={om.key} href={om.href} className={s.cell}>
                <h3 className={s.cellTitle}>{om.namn}</h3>
                <p className={s.cellText}>{om.kort}</p>
                <span className={s.cellLink}>Till {om.namn.toLowerCase()}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hur jag jobbar */}
      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={s.split}>
            <div className={`${s.splitText} ${s.reveal}`}>
              <h2 className={s.h2}>Så jobbar jag</h2>
              <p>Samma väg för alla, oavsett om det är en kassa som strular eller ett nytt system.</p>
              <ul className={s.checkList}>
                {SA_JOBBAR_JAG.map((punkt) => (
                  <li key={punkt}>
                    <Check size={16} strokeWidth={2.25} aria-hidden="true" className={s.checkIcon} />
                    {punkt}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${s.uiCard} ${s.reveal}`} style={{ margin: 0 }}>
              <div className={s.uiHead}>
                <span className={s.uiTitle}>Så funkar det</span>
                <span className={s.chip}>
                  <span className={s.dotAccent} />
                  Fast pris
                </span>
              </div>
              <div className={s.uiRows}>
                {STEG.map(([namn, besk]) => (
                  <div key={namn} className={s.uiRow}>
                    <span className={s.uiRowName}>{namn}</span>
                    <span className={s.uiRowDesc}>{besk}</span>
                  </div>
                ))}
              </div>
              <Link href="/sa-funkar-det" className={o.uiLink}>Läs hur det funkar</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nej-listan */}
      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={o.no}>
            <div className={s.reveal}>
              <h2 className={s.h2}>Det här gör jag inte</h2>
              <p className={s.blockLead}>Hellre färre saker som håller än en meny med allt.</p>
            </div>
            <div className={o.noList}>
              {NEJ.map((n) => (
                <div key={n.titel} className={o.noItem}>
                  <h3 className={o.noTitle}>{n.titel}</h3>
                  <p className={o.noText}>{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktuppgifter */}
      <section className={s.section} id="kontaktuppgifter">
        <div className={`${s.frame} ${s.block}`}>
          <div className={`${s.blockHead} ${s.reveal}`}>
            <h2 className={s.h2}>Kontaktuppgifter</h2>
            <p className={s.blockLead}>Ring, mejla eller skriv några rader i formuläret. Ni får svar nästa arbetsdag.</p>
          </div>
          <dl className={o.contact}>
            <div>
              <dt>Telefon</dt>
              <dd><a href={SITE.phoneHref}>{SITE.phone}</a></dd>
            </div>
            <div>
              <dt>E-post</dt>
              <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            </div>
            <div>
              <dt>Företag</dt>
              <dd>Stolt Marketing, Joel Stolt, Hässleholm</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Avslut */}
      <section className={`${s.section} ${s.cta}`}>
        <div className={`${s.frame} ${s.ctaInner}`}>
          <h2 className={`${s.ctaTitle} ${s.reveal}`}>Berätta vad ni behöver.</h2>
          <p className={s.ctaText}>Några rader räcker. Ni får svar nästa arbetsdag.</p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary} data-umami-event="om-avslut-cta">Skriv till mig</Link>
            <a href={SITE.phoneHref} className={s.btnGhost}>Ring {SITE.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
