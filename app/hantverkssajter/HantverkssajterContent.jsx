"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeader, PageHero } from "@/components/ui";

const huvudtal = [
  { value: "45", suffix: " %", label: "har inget analysverktyg alls", not: "vet inte om sajten ger jobb" },
  { value: "43", suffix: " %", label: "saknar strukturerad data", not: "syns sämre i Google och AI-svar" },
  { value: "31", suffix: " %", label: "har färre än 10 sidor", not: "kan bara ranka på firmanamnet" },
  { value: "97", suffix: " %", label: "har ingen chattfunktion", not: "svarar bara i kontorstid" },
];

const tekniskt = [
  { label: "Kör WordPress", varde: "50 %", kommentar: "Vanligast i branschen. Fungerar, men kräver underhåll och uppdateringar." },
  { label: "Saknar cookiebanner", varde: "64 %", kommentar: "De flesta av dem laddar ändå spårningsskript, vilket är en GDPR-risk." },
  { label: "Saknar strukturerad data", varde: "43 %", kommentar: "Google och AI-assistenter får då gissa vad företaget gör och var." },
  { label: "Saknar mobilanpassning", varde: "5 %", kommentar: "Sajten zoomas ut på en telefon. Färre än man tror, men de finns." },
  { label: "Saknar HTTPS", varde: "4 %", kommentar: "Chrome skriver Inte säker i adressfältet bredvid företagsnamnet." },
];

const sidbredd = [
  { spann: "Under 10 sidor", andel: 31, kommentar: "Kan i praktiken bara hittas av den som redan känner till firman." },
  { spann: "10 till 30 sidor", andel: 29, kommentar: "Täcker tjänsterna men sällan orterna runt omkring." },
  { spann: "31 till 50 sidor", andel: 11, kommentar: "Börjar fånga upp sökningar på tjänst plus ort." },
  { spann: "Över 50 sidor", andel: 29, kommentar: "Den fjärdedel som syns brett i sitt upptagningsområde." },
];

export default function HantverkssajterContent() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Hantverkssajter 2026" }]}
        badge="Egen mätning"
        title="Vi mätte 4 864 svenska hantverkssajter."
        subtitle="Elektriker, målare, snickare och hantverksföretag över hela landet. Vi tittade på vad sajterna faktiskt består av, inte vad de säger att de gör. Här är vad mätningen visade."
      />

      {/* Huvudtal */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="De fyra siffrorna"
            title="Det som förvånade mest var inte tekniken."
            subtitle="Nästan hälften av företagen har ingen aning om vad deras sajt levererar, för de mäter inte."
            maxWidth="680px"
          />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {huvudtal.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-surface rounded-[14px] border border-border p-8 text-center h-full">
                  <div className="font-heading font-600 leading-none text-heading" style={{ fontSize: 48 }}>
                    {s.value}
                    <span className="text-muted" style={{ fontSize: 20 }}>{s.suffix}</span>
                  </div>
                  <p className="mt-3 text-[15px] font-600 text-heading">{s.label}</p>
                  <p className="mt-1 text-[13px] text-muted">{s.not}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sidbredd */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "var(--color-surface-muted)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Sidbredd"
            title="Nästan var tredje sajt har färre än tio sidor."
            subtitle="Sidbredd är det som avgör hur många sökningar en lokal firma kan fånga upp. Medianen i vår mätning ligger på 17 sidor."
            maxWidth="680px"
          />
          <div className="mt-12 space-y-4">
            {sidbredd.map((s, i) => (
              <Reveal key={s.spann} delay={i * 0.06}>
                <div className="bg-surface rounded-[12px] border border-border p-6">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <span className="font-heading font-700 text-[17px] text-heading">{s.spann}</span>
                    <span className="font-heading font-700 text-[17px] text-heading">{s.andel} %</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border-light)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.andel * 3}%`, background: "var(--color-primary)" }}
                    />
                  </div>
                  <p className="mt-3 text-[14px] text-body">{s.kommentar}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[13px] text-muted">
              Underlag: 1 961 sajter där en sitemap kunde läsas. Andelarna är
              avrundade och summerar därför inte alltid till exakt 100.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Teknisk tabell */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Tekniken"
            title="Det mesta fungerar. Det som fattas kostar ändå jobb."
            maxWidth="680px"
          />
          <Reveal delay={0.1}>
            <div className="mt-10 bg-surface rounded-[14px] border border-border overflow-hidden">
              {tekniskt.map((t) => (
                <div
                  key={t.label}
                  className="grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1 px-6 sm:px-8 py-5 border-b border-border-light last:border-b-0"
                >
                  <div>
                    <p className="font-600 text-[15px] text-heading">{t.label}</p>
                    <p className="mt-1 text-[14px] text-body">{t.kommentar}</p>
                  </div>
                  <span className="font-heading font-700 text-[22px] text-heading sm:text-right sm:self-start">
                    {t.varde}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Slutsats */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "var(--color-surface-muted)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Slutsatsen" title="Den vanligaste bristen syns inte på sajten." />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-body">
              <p>
                Det är lätt att tro att en hantverkssajt behöver se snyggare ut.
                Mätningen säger något annat. De flesta sajter fungerar, laddar
                hyfsat och ser acceptabla ut. Två saker fattas i stället.
              </p>
              <p>
                Den första är sidbredd. En firma med åtta sidor kan bara hittas
                av den som redan vet vad den heter. Den som söker på tjänsten
                plus orten hamnar hos någon annan, oavsett vem som är bäst på
                jobbet.
              </p>
              <p>
                Den andra är mätning. 45 procent har inget analysverktyg
                installerat överhuvudtaget. Utan mätning går det inte att svara
                på om sajten drar in jobb, och då blir varje beslut om den en
                gissning.
              </p>
              <p>
                Ingen av de två sakerna kostar särskilt mycket att rätta till.
                Det är därför de är värda att titta på först.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 text-[13px] text-muted">
              Om mätningen: 4 864 svenska hantverks-, el-, måleri- och
              snickerisajter kontrollerades tekniskt under 2026. Sidbredden
              bygger på de 1 961 sajter där en sitemap kunde läsas.
              Prestandavärden är hämtade från Google PageSpeed. Uppgifterna om
              recensioner kommer från företagens Google-profiler. Vi publicerar
              inga enskilda företagsnamn ur mätningen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-[620px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Var ligger er sajt i jämförelsen?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Skicka er adress så kör vi samma mätning på er sajt och säger var
              ni står. Kostnadsfritt, och ni får siffrorna oavsett om vi gör
              något ihop eller inte.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/kontakt" className="premium-btn mt-8 mx-auto">
              <span>Få er sajt mätt</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
