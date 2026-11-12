import { PageHero } from "@/components/ui";

const findings = [
  { value: "48,3 %", label: "Ingen Google Analytics- eller GTM-markör upptäckt", detail: "2 215 av 4 585 lyckade kontroller. Andra analysverktyg och serverbaserad mätning ingick inte i detekteringen." },
  { value: "45,5 %", label: "Ingen JSON-LD eller microdata upptäckt", detail: "2 102 av 4 621 lyckade teknikkontroller av startsidans HTML. Innehåll som laddas senare kan saknas i testet." },
  { value: "31,8 %", label: "Färre än tio URL:er i läst sitemap", detail: "623 av 1 961 företagsposter med positivt sitemapresultat. Det är inte en inventering av hela webbplatsen." },
  { value: "97,5 %", label: "Ingen känd chattmarkör upptäckt", detail: "4 471 av 4 585 lyckade kontroller. Det säger inget om telefontider, bemanning eller andra kontaktvägar." },
];
const pages = [
  { label: "Under 10 URL:er", count: 623, percent: 31.8 },
  { label: "10 till 30 URL:er", count: 585, percent: 29.8 },
  { label: "31 till 50 URL:er", count: 168, percent: 8.6 },
  { label: "Över 50 URL:er", count: 585, percent: 29.8 },
];
const technical = [
  { label: "WordPress-markörer upptäckta", value: "53,2 %", n: "2 458 av 4 621", definition: "Matchning av plattformsmarkörer i HTML och svarshuvuden." },
  { label: "Ingen känd cookiebanner upptäckt", value: "68,0 %", n: "3 116 av 4 585", definition: "Matchning av ett begränsat antal bannerleverantörer och ordet cookie i vissa HTML-attribut. Testet fastställer inte om samtycke behövs eller om lagen följs." },
  { label: "Ingen viewport-meta upptäckt", value: "6,2 %", n: "288 av 4 621", definition: "Kontroll av meta name=viewport. Det ersätter inte ett manuellt test av mobilanpassning." },
  { label: "Slutadressen använde inte HTTPS", value: "4,4 %", n: "203 av 4 621", definition: "Protokollet i slutadressen efter omdirigering. Ingen full säkerhetsgranskning utförd." },
];

export default function HantverkssajterContent() {
  return <>
    <PageHero breadcrumbs={[{ label: "Start", href: "/" }, { label: "Hantverkssajter 2026" }]} badge="Egen teknisk kartläggning"
      title="Vad jag kunde mäta på svenska hantverkssajter." compact cta={false}
      subtitle="4 864 företagsposter i ett eget prospekturval kontrollerades våren 2026. Här visas tekniska observationer, datatäckning och vad de inte säger om företagens resultat." />
    <section className="px-5 sm:px-8 py-10 sm:py-14"><div className="max-w-6xl mx-auto">
      <div className="max-w-3xl mb-9"><h2 className="font-heading text-[28px] text-heading">Läs resultatet med rätt nämnare</h2><p className="mt-4 text-[17px] leading-relaxed text-body">Urvalet består av företagsposter, inte lika många unika webbplatser. Alla kontroller lyckades inte. Varje andel nedan använder de poster där just det måttet kunde läsas. Det är ett bekvämlighetsurval för prospektering och representerar inte hela Sveriges hantverksbransch.</p></div>
      <div className="grid sm:grid-cols-2 gap-5">{findings.map(f => <article key={f.label} className="bg-surface border border-border rounded-xl p-6"><p className="font-heading text-[40px] text-primary">{f.value}</p><h3 className="mt-2 font-heading text-[22px] text-heading">{f.label}</h3><p className="mt-3 text-[16px] leading-relaxed text-body">{f.detail}</p></article>)}</div>
    </div></section>
    <section className="px-5 sm:px-8 py-12 bg-surface-muted"><div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-[30px] text-heading">URL:er i läsbara sitemaps</h2>
      <p className="mt-4 text-[17px] leading-relaxed text-body">Medianen var 17 URL:er bland 1 961 positiva sitemapresultat. 2 718 poster hade en sitemapkontroll; övriga poster saknade kontroll. Ett tomt resultat kan bero på saknad eller oläsbar sitemap, timeout eller begränsningar i testet.</p>
      <div className="mt-7 space-y-5">{pages.map(p => <div key={p.label}><div className="flex justify-between gap-4 text-[16px] text-heading"><span>{p.label}</span><span>{p.percent.toLocaleString("sv-SE")} % ({p.count})</span></div><div className="mt-2 h-3 bg-border rounded-full overflow-hidden" aria-hidden="true"><div className="h-full bg-primary rounded-full" style={{ width: `${p.percent}%` }} /></div></div>)}</div>
      <p className="mt-6 text-[15px] leading-relaxed text-body">Staplarna använder en skala från 0 till 100 procent. Sitemaps kan utelämna sidor, innehålla dubbletter eller gamla URL:er. Antalet visar varken indexering, kvalitet eller hur många kunder företaget får.</p>
    </div></section>
    <section className="px-5 sm:px-8 py-12"><div className="max-w-4xl mx-auto"><h2 className="font-heading text-[30px] text-heading">Övriga tekniska observationer</h2><dl className="mt-7 divide-y divide-border">{technical.map(t => <div key={t.label} className="py-5"><dt className="font-heading text-[22px] text-heading">{t.label}</dt><dd className="mt-2 text-[20px] text-primary">{t.value} ({t.n})</dd><dd className="mt-3 text-[16px] leading-relaxed text-body">{t.definition}</dd></div>)}</dl></div></section>
    <section className="px-5 sm:px-8 py-12 bg-surface-muted"><div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-[30px] text-heading">Urval, datum och metod</h2>
      <div className="mt-5 space-y-4 text-[17px] text-body leading-[1.8]">
        <p>Underlaget har rekonstruerats från min prospektdatabas vid redigeringen den 4 oktober 2026. Jag valde branscherna Elektriker, Hantverkare, Målare och Snickare och poster med teknikkontroll före 24 augusti 2026. Det gav 4 864 poster: 3 260 elektriker, 885 hantverkare, 376 målare och 343 snickare. Det finns ingen fryst originalexport som visar att detta är exakt samma urval som den tidigare publiceringen.</p>
        <p>De sparade teknikkontrollerna är daterade 22 april till 2 maj 2026. Sitemapkontrollerna gjordes 22 och 23 april. Kontroller av chatt, Google Analytics/GTM och cookiebanner är daterade 2 maj. En databasrad kan ha ändrats sedan mätningen; detta är ingen ny crawl av webbplatserna.</p>
        <p>Teknikmåtten bygger på 4 621 lyckade kontroller. 243 poster saknar användbara värden. Extra funktionskontroller har 4 585 användbara resultat och 279 saknade. Saknade värden räknas inte som att en funktion saknas. För sitemap används endast positiva URL-antal; inga estimat från interna länkar ingår.</p>
        <p>Kontrollen hämtade startsidans HTML efter omdirigering och matchade kända markörer. JavaScript-renderat innehåll, samtyckesstyrda skript, egna lösningar och serverbaserad mätning kan missas. En markör visar inte att en funktion fungerar. Sitemapläsningen följde index till högst två nivåers djup och högst 50 barnfiler per index; den deduplicerade inte URL:er.</p>
        <p>Företag i samma koncern eller med samma webbplats kan förekomma flera gånger. Google-profiler och prospekteringskategorier är källan till urvalet, inte ett slumpmässigt registerurval. Konfidensintervall skulle därför inte göra resultaten representativa. Jag publicerar bara sammanställda tal här.</p>
      </div>
      <h3 className="mt-8 font-heading text-[24px] text-heading">Det går att dra tekniska slutsatser, inte försäljningsslutsatser</h3>
      <p className="mt-4 text-[17px] text-body leading-relaxed">Ingen upptäckt chatt betyder inte att företaget bara svarar under kontorstid. Ingen Google Analytics-markör betyder inte att företaget saknar uppföljning. Få sitemap-URL:er betyder inte att företaget bara kan hittas på sitt namn. Studien mätte inte förfrågningar, affärer eller ett orsakssamband mellan sidantal och sökplacering.</p>
    </div></section>
    <section className="section-gul px-5 sm:px-8 py-12"><div className="max-w-3xl mx-auto"><h2 className="font-heading text-[32px] text-heading">Vill du börja med din egen sajt?</h2><p className="mt-4 text-[17px] leading-relaxed text-body">Sajtkollen ger en teknisk snabbkontroll av en sida. Den jämför inte din försäljning eller ditt sidantal med urvalet ovan. Jag kan också hjälpa dig välja vad du behöver följa upp.</p><div className="mt-6 flex flex-wrap gap-3"><a href="/sajtkoll" className="premium-btn">Kör en teknisk sajtkoll</a><a href="/kontakt" className="secondary-btn">Fråga om uppföljning</a></div></div></section>
  </>;
}
