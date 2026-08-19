"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal, PageHero } from "@/components/ui";

const categories = ["Alla", "Webb", "E-handel", "AI", "SEO", "Tillgänglighet"];

const projects = [
  {
    title: "Niklassons Flytt",
    category: ["Webb", "SEO"],
    type: "Next.js · Sanity · Cloudflare",
    tag: "Flytt · Helsingborg",
    tagColor: "green",
    desc: "Byggde en flyttfirmas sajt där varje offertförfrågan mäts. Senaste 30 dagarna: 32 förfrågningar, 38 sidor över Skåne och ett CMS som kunden sköter helt själv.",
    challenge: "Förfrågningar kom in via mejl och telefon utan att någon kunde säga vilka sidor som faktiskt gav jobb. Utan mätning går det inte att avgöra om sajten lönar sig.",
    solution: "Varje skickad offertförfrågan loggas som ett eget event. Innehållet ligger i Sanity med automatisk publicering, och tjänsterna korsades med orterna i Skåne till 38 sidor.",
    results: [
      { label: "Offertförfrågningar", value: "32 / 30 dgr" },
      { label: "Sidor", value: "38" },
      { label: "Publicering", value: "Automatisk" },
    ],
    tech: ["Next.js", "Sanity CMS", "Cloudflare", "Resend", "Umami"],
    caseUrl: "/projekt/niklassonsflytt",
    url: "https://www.niklassonsflytt.se",
    screenshot: "/case-niklassonsflytt.webp",
  },
  {
    title: "Arkipel Entreprenad",
    category: ["Webb", "SEO"],
    type: "Next.js · Cloudflare",
    tag: "Bygg · Norrköping",
    tagColor: "green",
    desc: "Byggde 61 sidor åt ett byggföretag i Norrköping, mot en branschmedian på 17. En sida per tjänst och ort, för det är så en byggfirma faktiskt hittas.",
    challenge: "Arkipel hade jobben och betygen men bara ett tiotal sidor. En sajt så smal kan bara ranka på företagsnamnet, och den som googlar företagsnamnet är redan kund.",
    solution: "Varje tjänst korsades med varje ort i upptagningsområdet och blev en egen sida med eget innehåll. Statisk leverans från Cloudflares edge ger 65 ms serversvar.",
    results: [
      { label: "Sidor", value: "61" },
      { label: "Serversvar", value: "65 ms" },
      { label: "Startsida", value: "80 kB" },
    ],
    tech: ["Next.js", "React", "Cloudflare", "Resend", "Umami"],
    caseUrl: "/projekt/arkipel",
    url: "https://www.arkipel.se",
    screenshot: "/case-arkipel.webp",
  },
  {
    title: "Premie Bygg",
    category: ["Webb", "SEO"],
    type: "Next.js · Cloudflare",
    tag: "Bygg · Örebro",
    tagColor: "green",
    desc: "47 sidor åt en byggfirma i Örebro, med lika mycket omsorg på att offertförfrågningarna kommer fram som på hur sajten ser ut.",
    challenge: "Det vanligaste allvarliga felet på hantverkssajter är inte designen, det är formuläret. Det postar till en adress ingen bevakar, och ett formulär som inte skickar ger inget felmeddelande.",
    solution: "Formulärkedjan verifieras i utskicksloggen efter varje ändring. Spamhärdning med honeypot, ursprungskontroll och heuristik, med fältnamn som autofyll inte triggar.",
    results: [
      { label: "Sidor", value: "47" },
      { label: "SEO-poäng", value: "100/100" },
      { label: "Serversvar", value: "88 ms" },
    ],
    tech: ["Next.js", "React", "Cloudflare", "Resend", "Umami"],
    caseUrl: "/projekt/premiebygg",
    url: "https://www.premiebygg.se",
    screenshot: "/case-premiebygg.webp",
  },
  {
    title: "Norrlands Gräv & Transport",
    category: ["Webb", "SEO"],
    type: "Next.js · Cloudflare",
    tag: "Entreprenad · Sundsvall",
    tagColor: "green",
    desc: "69 sidor åt ett entreprenadföretag i Sundsvall, och ett tekniskt fel undanröjt som annars gör hela sajten osynlig i Google utan att någon märker det.",
    challenge: "En canonical-tagg placerad i sajtens rotlayout ärvs av varje undersida, som då säger till Google att den egentligen är startsidan. Sidorna försvinner ur sökresultaten helt tyst.",
    solution: "Canonical sätts per sida och verifieras på den skarpa sajten efter varje publicering. Tjänsterna korsades med orterna i Medelpad till 69 sidor, med byggflagga som styr indexering.",
    results: [
      { label: "Sidor", value: "69" },
      { label: "Serversvar", value: "128 ms" },
      { label: "Canonical", value: "Per sida" },
    ],
    tech: ["Next.js", "React", "Cloudflare", "Resend"],
    caseUrl: "/projekt/ngtab",
    url: "https://www.ngtab.se",
    screenshot: "/case-ngtab.webp",
  },
  {
    title: "Linguista",
    category: ["Webb", "Tillgänglighet", "SEO"],
    type: "WordPress → Next.js · Cloudflare",
    tag: "AcadeMedia",
    tagColor: "green",
    desc: "Byggde om Linguistas webbplats från WordPress till en självuppdaterande Next.js-sajt på Cloudflares edge. 100 av 100 i prestanda, tillgänglighet, best practices och AI-läsbarhet, och redaktionen publicerar nu helt själva.",
    challenge: "En snabb men åldrande WordPress-sajt: tillgänglighet under EU-lagkravsnivå, halva innehållet oläsbart för AI-assistenter, och varje innehållsändring krävde en utvecklare.",
    solution: "Statisk Next.js på Cloudflares edge med eget CMS (Sanity) och automatisk publiceringspipeline, redaktören trycker publicera, sajten bygger om sig själv och är live på minuter. 70+ artiklar migrerade, kontraster på AAA-nivå.",
    results: [
      { label: "Prestanda · A11y · BP · AI", value: "100/100" },
      { label: "Laddtid (LCP)", value: "−46 %" },
      { label: "Publicering", value: "Automatisk" },
    ],
    tech: ["Next.js", "React", "Cloudflare", "Sanity CMS", "GitHub Actions", "WCAG 2.1"],
    caseUrl: "/projekt/linguista",
    screenshot: "/case-linguista.webp",
  },
  {
    title: "EdShare",
    category: ["Webb", "Tillgänglighet", "SEO"],
    type: "WordPress → Next.js · Cloudflare",
    tag: "AcadeMedia",
    tagColor: "green",
    desc: "Byggde om EdShares webbplats från WordPress till en statisk Next.js-sajt på Cloudflares edge. 10x snabbare serversvar, 86 % lättare och full pott i prestanda, tillgänglighet och AI-läsbarhet.",
    challenge: "En WordPress-sajt som nått sin gräns: tung att ladda, beroende av många plugins och tredjepartsskript, med ett växande underhålls- och säkerhetsansvar.",
    solution: "Statisk Next.js på Cloudflares edge, eget CMS (Sanity) för innehållet, self-hostade fonter och härdning för WCAG 2.1 AA, SEO och AI-läsbarhet.",
    results: [
      { label: "Serversvar", value: "10x snabbare" },
      { label: "Sidvikt", value: "−86 %" },
      { label: "Prestanda · A11y · AI", value: "100/100" },
    ],
    tech: ["Next.js", "React", "Cloudflare", "Sanity CMS", "WCAG 2.1 AA"],
    caseUrl: "/projekt/edshare",
    screenshot: "/case-edshare.webp",
  },
  {
    title: "LIA-platsbanken",
    category: ["Webb"],
    type: "Webbplattform · Next.js",
    tag: "AcadeMedia",
    tagColor: "green",
    desc: "Byggde en komplett mötesplattform för AcadeMedias YH-studenter och Sveriges arbetsgivare. Studenterna hittar LIA-platser, företagen rekryterar direkt från skolbänken.",
    challenge: "AcadeMedia behövde en digital plattform som kopplade ihop tusentals YH-studenter med arbetsgivare för LIA-praktik, med registrering, sök och matchning.",
    solution: "Modern Next.js-plattform med registreringsflöden för både studenter och företag, sökfunktion, matchningslogik och responsivt gränssnitt.",
    results: [
      { label: "Kund", value: "AcadeMedia" },
      { label: "Plattform", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    screenshot: "/case-lia.webp",
  },
  {
    title: "RBN Utbildning",
    category: ["Webb", "SEO"],
    type: "Webb · API · SEO · Grafisk profil",
    tag: "Utbildningsföretag",
    tagColor: "blue",
    desc: "Ny webbplats med komplett grafisk profil, sökmotoroptimering och API-integration mot befintliga system.",
    challenge: "Befintlig sajt var daterad, saknade SEO-grund och hade inget sammanhängande visuellt uttryck. Utbildningar, kunskapsbanken och kundportalen behövde samlas under en tydlig profil.",
    solution: "Helhetsleverans med ny grafisk profil, WordPress-sajt med API-integration för utbildningsdata, strukturerad SEO och snabb användarupplevelse.",
    results: [
      { label: "Omfattning", value: "Helhetsleverans" },
      { label: "Teknik", value: "WordPress + API" },
      { label: "Status", value: "Live" },
    ],
    tech: ["WordPress", "Bricks Builder", "REST API", "SEO"],
    url: "https://rbnutbildning.se",
    screenshot: "/case-rbn.webp",
  },
  {
    title: "Förskolan Harpan",
    category: ["Webb"],
    type: "Webb · Grafisk profil",
    tag: "Lokal kund",
    tagColor: "yellow",
    desc: "Ny grafisk profil och modern webbplats för en kristen förskola med musikprofil i Hässleholm.",
    challenge: "Förskolan saknade en sammanhängande grafisk identitet och webbplatsen var svår att navigera för föräldrar som ville söka plats eller hitta information.",
    solution: "Varm och inbjudande design som speglar verksamheten med musik och barn i fokus. Tydlig navigation, enkel platsansökan och responsiv design. Byggt i Next.js.",
    results: [
      { label: "Profil", value: "Ny identitet" },
      { label: "Teknik", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    caseUrl: "/projekt/forskolan-harpan",
    screenshot: "/case-harpan.webp",
  },
  {
    title: "Pingstkyrkan Hässleholm",
    category: ["Webb"],
    type: "Webb · Next.js · Cloudflare",
    tag: "Lokal kund",
    tagColor: "yellow",
    desc: "Ny webbplats för Pingstkyrkan i Hässleholm: lugn design, tydlig information om samlingar och verksamhet, och en sajt som i praktiken sköter sig själv.",
    challenge: "Församlingen behövde samla tider, verksamheter och kontaktvägar på ett ställe, med en sajt som är lika enkel för besökaren som för de som underhåller den.",
    solution: "Stillsam, tydlig design byggd som snabb statisk Next.js på Cloudflare. Struktur utifrån besökarnas faktiska frågor och formulär med säker leverans.",
    results: [
      { label: "Struktur", value: "Besökarens frågor" },
      { label: "Teknik", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "React", "Cloudflare Pages", "Resend"],
    caseUrl: "/projekt/pingstkyrkan",
    screenshot: "/case-pingstkyrkan.webp",
  },
  {
    title: "Ebbessonbygg",
    category: ["Webb", "SEO"],
    type: "Webb · Byggföretag",
    tag: "Ängelholm",
    tagColor: "yellow",
    desc: "Webbplats för byggföretaget Ebbessonbygg: förtroendebyggande design, tjänstesidor för byggservice och en kort väg till offert.",
    challenge: "För ett byggföretag avgörs affären ofta på webbplatsen innan första samtalet. Sajten behövde visa hantverket och göra offertsteget kort.",
    solution: "Ren, förtroendeingivande sajt med referensjobb, tjänstesidor byggda för lokala sökningar och offertformulär utan onödiga steg.",
    results: [
      { label: "Fokus", value: "Offertförfrågningar" },
      { label: "Struktur", value: "Tjänstesidor" },
      { label: "Status", value: "Live" },
    ],
    tech: ["WordPress", "SEO-struktur", "Responsiv design"],
    caseUrl: "/projekt/ebbessonbygg",
    screenshot: "/case-ebbessonbygg.webp",
  },
  {
    title: "Gärdets Hundtrim",
    category: ["Webb", "SEO"],
    type: "Webb · Lokal salong",
    tag: "Stockholm",
    tagColor: "yellow",
    desc: "Varm, personlig sajt för en hundtrimsalong på Gärdet: tjänster och priser tydligt, bokningsvägen självklar, byggd för lokala sökningar.",
    challenge: "En liten salong lever på närområdet. Sajtens enda jobb är att synas lokalt, kännas trygg och göra bokningen enkel.",
    solution: "Personlig design med tjänster, öppna priser och bokningsväg i centrum, strukturerad för lokala sökningar kring Gärdet och Östermalm.",
    results: [
      { label: "Fokus", value: "Lokala bokningar" },
      { label: "Priser", value: "Öppna på sajten" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Responsiv design", "Lokal SEO"],
    caseUrl: "/projekt/gardetshundtrim",
    screenshot: "/case-gardetshundtrim.webp",
  },
  {
    title: "Omniway",
    category: ["Webb", "Tillgänglighet"],
    type: "Webb · WCAG · Tillgänglighet",
    tag: "EdTech",
    tagColor: "purple",
    desc: "Modern webbplats för en lärplattform inom utbildningssektorn, byggd med tillgänglighet i fokus.",
    challenge: "Omniway behövde en ny sajt som uppfyllde WCAG 2.1 AA-krav och kommunicerade deras lärplattform på ett modernt och tillgängligt sätt.",
    solution: "Mörkt tema med hög kontrast, semantisk HTML, skärmläsarstöd och responsiv design. WCAG-anpassad från grunden utan att kompromissa på design.",
    results: [
      { label: "Fokus", value: "WCAG 2.1 AA" },
      { label: "Design", value: "Dark mode" },
      { label: "Status", value: "Live" },
    ],
    tech: ["WordPress", "WCAG 2.1", "Tillgänglighet", "SEO"],
    url: "https://omniway.se",
    screenshot: "/case-omniway.webp",
  },
  {
    title: "Kvota.se",
    category: ["Webb", "AI"],
    type: "SaaS-produkt · Next.js + AI",
    tag: "Eget projekt",
    tagColor: "blue",
    desc: "Byggde en AI-driven offertgenerator för svenska hantverkare, från idé till lanserad produkt på 3 veckor.",
    challenge: "Hantverkare lägger timmar på att skriva offerter manuellt. Behövde ett verktyg som kunde generera professionella offerter på sekunder.",
    solution: "Next.js-app med Claude AI-integration, röstinspelning via Web Speech API, PDF-generering med jsPDF och e-postutskick via Resend. Från röstinspelning till färdig offert på 45 sekunder.",
    results: [
      { label: "Tid till offert", value: "45 sek" },
      { label: "Tid till MVP", value: "3 veckor" },
      { label: "Status", value: "Lanserad" },
    ],
    tech: ["Next.js", "React", "Claude AI", "jsPDF", "Resend", "Vercel"],
    url: "https://kvota.se",
    screenshot: "/case-kvota.webp",
  },
  {
    title: "SMH / KYH / Hermods",
    category: ["Webb", "E-handel"],
    type: "E-handel · WordPress",
    tag: "AcadeMedia",
    tagColor: "green",
    desc: "Löpande förvaltning och utveckling av e-handelsplattformar för utbildningsföretag inom AcadeMedia-koncernen.",
    challenge: "Flera parallella webbshoppar med behov av prestandaoptimering, checkout-förbättringar och löpande underhåll.",
    solution: "WordPress/WooCommerce med Bricks Builder, Stripe-integration, dynamiska deltagarlösningar och prestandaoptimering som förbättrade PageSpeed-poäng avsevärt.",
    results: [
      { label: "Sajter", value: "3 st" },
      { label: "PageSpeed", value: "Förbättrad" },
      { label: "Drift", value: "Löpande" },
    ],
    tech: ["WordPress", "WooCommerce", "Bricks Builder", "Stripe"],
    screenshot: "/case-smh.webp",
  },
];

export default function ProjektContent() {
  const [filter, setFilter] = useState("Alla");

  const filtered =
    filter === "Alla"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Projekt" }]}
        badge="Projekt & Resultat"
        title="Uppdrag som talar för sig själva."
        subtitle="Från enterprise-plattformar åt AcadeMedia till lokala förskolor och AI-produkter, varje projekt får samma engagemang och kvalitet."
      />

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid",
                    transition: "all 0.2s",
                    background: filter === cat ? "#F2C230" : "#161309",
                    color: filter === cat ? "#191405" : "#CFC9B8",
                    borderColor: filter === cat ? "#F2C230" : "rgba(242,236,221,0.16)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project cards */}
          <div className="flex flex-col gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.06}>
                <div className="group bg-surface rounded-[10px] border border-border overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-400">
                  <div className="grid lg:grid-cols-[320px,1fr] gap-0">
                    {/* Screenshot */}
                    {project.screenshot ? (
                      <div className="relative h-[200px] lg:h-full overflow-hidden">
                        <img
                          src={project.screenshot}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div
                        className="hidden lg:flex h-full items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(242,194,48,0.10) 0%, rgba(242,194,48,0.18) 100%)",
                          minHeight: 200,
                        }}
                      >
                        <span className="text-[40px] font-600 font-heading text-primary/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-7 sm:p-9">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <h3 className="font-heading font-700 text-[22px] text-heading tracking-tight group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-hover transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] font-600 text-primary">
                            {project.type}
                          </span>
                          <span
                            className={`text-[11px] font-600 px-2.5 py-1 rounded-full ${
                              project.tagColor === "green"
                                ? "text-emerald-700 bg-emerald-500/8"
                                : project.tagColor === "blue"
                                ? "text-primary bg-primary/6"
                                : project.tagColor === "yellow"
                                ? "text-yellow-700 bg-yellow-500/8"
                                : project.tagColor === "purple"
                                ? "text-violet-700 bg-violet-500/8"
                                : "text-muted bg-heading/[0.04]"
                            }`}
                          >
                            {project.tag}
                          </span>
                        </div>
                      </div>

                      <p className="text-[15px] leading-relaxed text-body mb-5">
                        {project.desc}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-[12px] font-600 text-muted uppercase tracking-wider mb-2">
                            Utmaning
                          </p>
                          <p className="text-[14px] leading-relaxed text-body">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-[12px] font-600 text-muted uppercase tracking-wider mb-2">
                            Lösning
                          </p>
                          <p className="text-[14px] leading-relaxed text-body">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[12px] font-500 text-muted px-2.5 py-1 rounded-md bg-surface-muted border border-border-light"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="mt-5 pt-5 border-t border-border-light flex flex-wrap gap-8">
                        {project.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-[22px] font-600 font-heading text-heading tracking-tight">
                              {r.value}
                            </div>
                            <div className="text-[12px] text-muted mt-0.5">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {project.caseUrl && (
                        <a
                          href={project.caseUrl}
                          className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-600 text-primary hover:text-primary-hover transition-colors"
                        >
                          Se hela caset <ArrowRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "transparent",
          }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Vill du ha liknande resultat?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så pratar vi om hur jag kan hjälpa
              just ditt företag.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
