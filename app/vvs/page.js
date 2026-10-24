import Link from "next/link";
import { Check, ChevronRight, Phone, FileCheck2, Clock3, ListChecks, MessageCircle } from "lucide-react";
import { faqs } from "./content";
import WorkflowDemo from "./WorkflowDemo";
import s from "./vvs.module.css";

const title = "Snabbare offerter och bättre flyt i din VVS-firma";
const description = "Snabbare offerter, automatisk uppföljning, koll på jobben och en rutin för fler omdömen. Prova er egen webb, offert och jobböverblick före köp.";
export const metadata = {
  title, description, alternates: { canonical: "/vvs" },
  openGraph: { title: `${title} | Stolt Marketing`, description, url: "https://www.stoltmarketing.se/vvs", type: "website", locale: "sv_SE", siteName: "Stolt Marketing", images: [{ url: "/case-niklassonsflytt-1120.webp", width: 1120, height: 700, alt: "Niklassons Flytt, ett kundarbete av Stolt Marketing" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/case-niklassonsflytt-1120.webp"] },
};

function BookingLink({ children = "Prova ett upplägg för min firma", dark = false }) {
  return <Link href="/boka?amne=vvs" className={`${s.button} ${dark ? s.buttonDark : ""}`} data-umami-event="vvs-boka">{children}<ChevronRight size={18} aria-hidden="true" /></Link>;
}

function Brand() { return <Link href="/" className={s.brand} aria-label="Stolt Marketing, startsidan">stolt<span>.</span><small>MARKETING</small></Link>; }

export default function VvsPage() {
  return <div className={s.page}>
    <a href="#main-content" className={s.skipLink}>Hoppa till innehållet</a>
    <header className={s.header}><div className={s.navInner}><Brand /><nav className={s.nav} aria-label="VVS-sidans navigation"><a href="#prova">Så fungerar flödet</a><a href="#ert-upplagg">Prova före köp</a><a href="#kundcase">Riktiga kundcase</a></nav><Link className={s.navCta} href="/boka?amne=vvs">Prata med Joel<ChevronRight size={16} aria-hidden="true" /></Link></div></header>
    <main id="main-content" tabIndex={-1}>
      <section className={s.hero} aria-labelledby="vvs-title">
        <div className={s.wrap}>
          <div className={s.heroTopline}><p>MER FLYT I VARDAGEN FÖR VVS-FIRMOR</p><span>ERT ARBETSSÄTT. ANPASSAT AV JOEL.</span></div>
          <div className={s.heroHeading}><h1 id="vvs-title"><span>Snabbare offerter.</span><span>Mer <em>flyt i firman.</em></span></h1><div className={s.heroPitch}><p>Låt offerterna följas upp automatiskt. Ha koll på jobben och få en rutin för fler omdömen. Jag anpassar flödet efter hur er firma arbetar.</p><a href="#prova">Se hur hela flödet hänger ihop<ChevronRight size={16} aria-hidden="true" /></a></div></div>
          <div className={s.heroActionRow}><BookingLink /><p><strong>Prova ert eget upplägg före köp.</strong><br />{" "}Er webb. Era priser. Ett av era jobb.</p></div>
          <div className={s.workflowValue} aria-label="Det här hjälper vi er med">
            <div className={s.workflowLabel}><span>FRÅN FÖRFRÅGAN TILL NÄSTA OMDÖME</span><a href="#prova">Prova ett exempel<ChevronRight size={16} aria-hidden="true" /></a></div>
            <div className={s.workflowSteps}>
              <article><div><span>01 / SNABBARE OFFERTER</span><FileCheck2 size={23} aria-hidden="true" /></div><h2>Få iväg offerten.</h2><p>Era anteckningar, mallar och priser blir ett förslag att granska. Slipp börja från ett tomt dokument.</p></article>
              <article><div><span>02 / AUTOMATISK UPPFÖLJNING</span><Clock3 size={23} aria-hidden="true" /></div><h2>Slipp jaga svar.</h2><p>När ni godkänt text och tider följs offerten upp automatiskt. Ni slipper hålla varje påminnelse i huvudet.</p></article>
              <article><div><span>03 / KOLL PÅ JOBBEN</span><ListChecks size={23} aria-hidden="true" /></div><h2>Allt följer med.</h2><p>Planering, tid, material och tillägg samlas på jobbet. Underlaget finns kvar när det är dags att fakturera.</p></article>
              <article><div><span>04 / FLER OMDÖMEN</span><MessageCircle size={23} aria-hidden="true" /></div><h2>Fler får frågan.</h2><p>Gör omdömesfrågan till en rutin efter avslutat jobb. Färdig text att granska och skicka, utan att skriva om varje gång.</p></article>
            </div>
            <div className={s.workflowWeb}><strong>Och en webb som gör er rättvisa.</strong><p>Visa kvaliteten, få in förfrågningarna och ta hand om kunden hela vägen.</p></div>
          </div>
        </div>
      </section>

      <section id="prova" className={s.demoSection} aria-labelledby="prova-title"><div className={s.wrap}><div className={s.sectionHead}><div><p className={s.eyebrow}>SE VAD SOM BLIR ENKLARE</p><h2 id="prova-title">En offert är början.<br />{" "}<span>Resten hänger med.</span></h2></div><p>Prova offert, automatisk uppföljning, jobböverblick och omdömesfråga. Exemplet visar arbetssättet. Sedan får ni prova ett eget upplägg med era priser och jobb.</p></div><WorkflowDemo /></div></section>

      <section id="ert-upplagg" className={s.tailored} aria-labelledby="ert-title"><div className={s.wrap}><div className={s.tailoredHeader}><div><p className={s.eyebrow}>NI SKA VETA VAD NI KÖPER</p><h2 id="ert-title">Prova med era priser.<br />{" "}Följ ett av era jobb.<br />{" "}<span>Bestäm er efteråt.</span></h2></div><div className={s.testStamp}><span>FÖRST</span><strong>PROVA.</strong><span>SEDAN BESTÄMMER NI ER.</span></div></div><div className={s.proofSteps}>
        <article><span>01</span><h3>Välj ett riktigt jobb.</h3><p>Ta med en offert, era priser och ett vanligt jobb. Vi går igenom hur ni arbetar och vad som tar onödig tid idag.</p></article>
        <article><span>02</span><h3>Prova hela vägen.</h3><p>Se er egen webb, prova en offert med era uppgifter och följ jobbet i överblicken. Vi går igenom uppföljningen och omdömesrutinen tillsammans.</p></article>
        <article><span>03</span><h3>Känn efter. Bestäm sedan.</h3><p>Ni har sett och provat ert upplägg, och vet omfattning och pris. Först då bestämmer ni er för köp och uppstart.</p></article>
      </div><div className={s.tailoredBottom}><BookingLink dark>Jag vill prova med min firma</BookingLink><p>Första steget: 30 minuter med Joel.<br />{" "}Kostnadsfritt. Ingen beställning.</p></div></div></section>

      <section id="kundcase" className={s.casesSection} aria-labelledby="case-title"><div className={s.wrap}>
        <div className={s.sectionHead}><div><p className={s.eyebrow}>WEBBEN ÄR EN DEL AV HELHETEN</p><h2 id="case-title">Riktiga kundarbeten.<br />{" "}<span>Mätbara kontaktvägar.</span></h2></div><p>Webbresultat från företag jag har jobbat med. Er offert, uppföljning och jobböverblick får ni själva prova med egna uppgifter före köp.</p></div>
          <figure className={s.heroCase}>
            <div className={s.heroCaseNumbers}><p className={s.eyebrow}>ETT RIKTIGT KUNDARBETE</p><Link href="/projekt/niklassonsflytt" className={s.caseName}>Niklassons Flytt<ChevronRight size={18} aria-hidden="true" /></Link><strong className={s.hugeMetric}>30<span>offertinskick</span></strong><p className={s.metricExplain}>registrerade på 30 dagar</p><div className={s.secondaryMetric}><strong>12</strong><span>klick på telefonlänken<br />{" "}under samma period</span></div><a href="#matning" className={s.sourceLink}>5 sep till 5 okt 2026. Så är det mätt.</a></div>
            <Link className={s.heroCaseImage} href="/projekt/niklassonsflytt" aria-label="Se kundcaset Niklassons Flytt"><div className={s.caseImageLabel}><span>WEBB / LOKALA TJÄNSTER / OFFERTFLÖDE</span><span>01</span></div><img src="/case-niklassonsflytt-1120.webp" width="1120" height="700" alt="Den riktiga webbplatsen för Niklassons Flytt, med tjänster och offertformulär" loading="lazy" /><div className={s.caseImageFoot}><span>En tydlig väg från besök till offertförfrågan.</span><span>Se kundarbetet<ChevronRight size={16} aria-hidden="true" /></span></div></Link>
            <figcaption>Resultaten gäller ett flyttföretag. Registrerade aktiviteter, inte verifierade nya kunder eller ett löfte om ert resultat.</figcaption>
          </figure>
        <div className={s.caseGrid}>
          <article className={s.caseCard}><Link href="/projekt/ngtab" className={s.casePicture}><img src="/case-ngtab-1120.webp" width="1120" height="700" loading="lazy" alt="Norrlands Gräv & Transports webbplats" /><span>MARK & TRANSPORT / SUNDSVALL</span></Link><div className={s.caseCardBody}><div><h3>Norrlands Gräv<br />{" "}& Transport</h3><p>Tjänster och orter får egna sidor, med en tydlig väg till kontakt från varje relevant sida.</p><Link href="/projekt/ngtab" className={s.caseLink}>Se kundarbetet<ChevronRight size={16} aria-hidden="true" /></Link></div><div className={s.caseMetric}><strong>14</strong><span>telefonklick<br />{" "}på 30 dagar</span></div></div></article>
          <article className={s.caseCard}><Link href="/projekt/premiebygg" className={s.casePicture}><img src="/case-premiebygg-1120.webp" width="1120" height="700" loading="lazy" alt="Premie Byggs webbplats med riktiga byggprojekt" /><span>BYGG & RENOVERING / ÖREBRO</span></Link><div className={s.caseCardBody}><div><h3>Premie<br />{" "}Bygg</h3><p>Referensbilder, tydliga tjänster och ett offertformulär som för besökaren vidare till kontakt.</p><Link href="/projekt/premiebygg" className={s.caseLink}>Se kundarbetet<ChevronRight size={16} aria-hidden="true" /></Link></div><div className={s.caseMetric}><strong>9</strong><span>offertinskick<br />{" "}på 30 dagar</span></div></div></article>
        </div>
        <details id="matning" className={s.measurement}><summary>Var kommer siffrorna ifrån?<span aria-hidden="true">+</span></summary><div><p>Samtliga siffror ovan kommer från ett sparat Umami-utdrag för 5 september till 5 oktober 2026, kl. 00.27 svensk tid. Niklassons: 30 registrerade offertinskick och 12 telefonklick. Premie Bygg: 9 registrerade offertinskick. Norrlands Gräv & Transport: 14 telefonklick.</p><p>Formulärhändelser visar registrerade inskick, inte verifierade unika kunder eller vunna affärer. Telefonklick visar inte genomförda samtal. Det finns ingen fastställd före/efter-effekt i dessa tal. De enskilda casesidorna redovisar också äldre mätperioder.</p></div></details>
      </div></section>

      <section id="investering" className={s.investment} aria-labelledby="pris-title"><div className={`${s.wrap} ${s.investmentGrid}`}><div className={s.joelBlock}><p className={s.eyebrow}>EN PERSON ATT RINGA</p><img src="/joel-stolt.webp" alt="Joel Stolt" width="270" height="320" loading="lazy" /><h2 id="pris-title">Du jobbar<br />{" "}<span>direkt med mig.</span></h2><p>Jag heter Joel. Jag sätter upp offertmallar, uppföljning och jobbflöde i Kvota, och ser till att webben hänger ihop med resten. Vi provar med era jobb och jag hjälper er att komma igång. Ni har en person som känner er firma.</p><a href="tel:+46766867406" className={s.phone}><Phone size={18} aria-hidden="true" />076-686 74 06</a></div><div className={s.priceCard}><p className={s.eyebrow}>SYSTEMET + PERSONLIG HJÄLP</p><p className={s.price}>4 900<span>kr / mån</span></p><p className={s.priceNote}>Exklusive moms.<br />{" "}Webb och uppstart prissätts separat.</p><ul>{["Kvota för er firma, upp till tio användare", "Offerter, automatisk uppföljning och jobböverblick", "Tid, material, tillägg och fakturaunderlag", "En rutin för Google-omdömen", "Månadsavstämning och avgränsat personligt stöd"].map(item=><li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul><div className={s.setupNote}><strong>Vi räknar på ert upplägg före köp.</strong><p>Webb, införande, eventuella kopplingar och webbskötsel specificeras separat. Ni får omfattning och pris innan ni bestämmer er.</p></div><BookingLink /><a href="#fragor" className={s.priceDetails}>Läs exakt vad som ingår</a></div></div></section>

      <section id="fragor" className={s.faqSection} aria-labelledby="faq-title"><div className={`${s.wrap} ${s.faqGrid}`}><div><p className={s.eyebrow}>BRA ATT VETA</p><h2 id="faq-title">Raka frågor.<br />{" "}<span>Raka svar.</span></h2></div><div className={s.faqs}>{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className={s.finalCta} aria-labelledby="sista-title"><div className={s.wrap}><p className={s.eyebrow}>ERT EGET UPPLÄGG. FÖRE KÖP.</p><h2 id="sista-title">Ta med ett jobb.<br />{" "}<span>Prova hela flödet.</span></h2><div><BookingLink dark>Jag vill prova mitt eget upplägg</BookingLink><p>Webb, offert och överblick med era uppgifter.<br />{" "}Första steget är ett kostnadsfritt samtal.</p></div></div></section>
    </main>
    <footer className={s.footer}><div className={s.wrap}><Brand /><span>Joel Stolt. Webb, marknadsföring och arbetsflöden.</span><a href="mailto:joel@stoltmarketing.se">joel@stoltmarketing.se</a><Link href="/integritet">Integritet</Link></div></footer>
  </div>;
}
