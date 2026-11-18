import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { SITE } from "@/lib/local/data";
import s from "@/components/ny/ny.module.css";
import k from "./kontakt.module.css";

/* /kontakt i nya profilen (2026-11-17). Underlag: positionering-2026-11-15/sajttext.md avsnitt 8.
   Formuläret (InquiryForm) har samma fält, API-anrop, honeypot och spårning som tidigare. */

const VAGAR = [
  {
    icon: Phone,
    varde: SITE.phone,
    href: SITE.phoneHref,
    text: "Ring eller sms:a, vardagar 08:00 till 17:00",
  },
  {
    icon: Mail,
    varde: SITE.email,
    href: `mailto:${SITE.email}`,
    text: "Svar nästa arbetsdag",
  },
  {
    icon: MapPin,
    varde: "Hässleholm",
    href: null,
    text: "Kunder i hela Sverige",
  },
];

export default function KontaktContent() {
  return (
    <section className={s.intro}>
      <div className={`${s.frame} ${s.introInner}`}>
        <nav className={s.crumbs} aria-label="Brödsmulor">
          <Link href="/">Start</Link>
          <span className={s.crumbSep} aria-hidden="true">/</span>
          <span aria-current="page">Kontakt</span>
        </nav>
        <p className={s.kicker}>Kontakt</p>
        <h1 className={s.h1Sub}>Berätta vad ni behöver.</h1>
        <p className={s.heroLead}>Några rader räcker. Ni får svar nästa arbetsdag.</p>

        <div className={k.grid}>
          <div className={k.formCard}>
            <h2 className={k.formTitle}>Vad behöver ni hjälp med?</h2>
            <p className={k.formLead}>
              Du behöver inte veta vilken tjänst det handlar om. Vill du hellre prata kan du{" "}
              <Link href="/boka" className={k.inlineLink}>boka en tid i kalendern</Link>.
            </p>
            <InquiryForm />
          </div>

          <aside className={k.aside} aria-label="Andra sätt att nå Joel">
            <div className={k.person}>
              <img src="/joel-stolt-240.webp" alt="" width="56" height="56" className={k.personImg} />
              <div>
                <p className={k.personName}>Joel Stolt</p>
                <p className={k.personText}>Det är jag som svarar.</p>
              </div>
            </div>
            <ul className={k.ways}>
              {VAGAR.map((v) => (
                <li key={v.varde} className={k.way}>
                  <v.icon size={18} strokeWidth={2} aria-hidden="true" className={k.wayIcon} />
                  <div>
                    <p className={k.wayMain}>{v.href ? <a href={v.href}>{v.varde}</a> : v.varde}</p>
                    <p className={k.waySub}>{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={`${k.box} ${k.boxAkut}`}>
              <h2 className={k.boxTitle}>Har något slutat fungera?</h2>
              <p className={k.boxText}>
                Ring direkt, så börjar jag felsöka samma arbetsdag. Akut hjälp kostar{" "}
                <span className={k.price}>1 500 kr/h exkl moms</span>.
              </p>
              <a href={SITE.phoneHref} className={`${s.btnGhost} ${k.btnFull}`} data-umami-event="kontakt-akut-ring">
                <Phone size={16} strokeWidth={2} aria-hidden="true" />
                Ring {SITE.phone}
              </a>
            </div>

            <p className={k.small}>
              Första samtalet kostar ingenting. Efter samtalet får ni en klickbar demo, helt riskfritt, och ett fast pris skriftligt innan jag börjar.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
