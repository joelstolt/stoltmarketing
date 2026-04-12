"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, X, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui";

export default function Article() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Hemsida som säljer</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Konvertering
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                5 saker som skiljer en hemsida som säljer från en som bara finns
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 26 april 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 8 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Du har en hemsida. Den är vacker. Den har rätt innehål. Färgerna är snygga. Men leads kommer det inte så mycket av.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Du är inte ensam. De flesta hemsidor är designade för att se ut bra — inte för att sälja något. Och det är problemet.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En hemsida som säljer är annorlunda. Det är inte huvudsakligen en design-fråga. Det är en strategi-fråga. Här är de 5 saker som skiljer dem.
            </p>

            {/* #1 Värdeerbjudandet */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              1. Ett kristallklart värdeerbjudande ovan folden
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Inom 3 sekunder ska en besökare förstå vad du gör och varför det spelar någon roll för just dem. Inte nästa vecka. Inte när de scrollat ner. Nu.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En hemsida som säljer börjar såhär:
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-600 text-heading mb-2">Bra värdeerbjudande:</p>
              <p className="text-[14px] text-body italic mb-4">"Webbutveckling som genererar leads — inte bara besökare. För svenska småföretag som är trötta på dåliga resultat."</p>
              <p className="text-[14px] text-muted mt-4">Du får direkt veta: Vad (webbutveckling), För vem (svenska småföretag), Varför (som genererar leads).</p>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En hemsida som bara finns börjar såhär:
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-600 text-heading mb-2">Svagt värdeerbjudande:</p>
              <p className="text-[14px] text-body italic mb-4">"Välkommen till vår webbyrå. Vi gör bra webbprojekt för företag. Ring oss!"</p>
              <p className="text-[14px] text-muted mt-4">Du vet inte vad som skiljer dem från tio andra byråer. Du vet inte om det är för dig. Du är redan distraherad.</p>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En hemsida som säljer är specifik, marknadsmässig och förklarar varför just detta är värt besökarens tid.
            </p>

            {/* #2 Social proof */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              2. Social proof — Testimonialer, case studies och logobar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Människor litar inte på vad du säger om dig själv. De litar på vad andra säger.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En hemsida som säljer innehåller:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { item: "Autentiska testimonialer", desc: "Från verkliga kunder. Gärna med namn, foto och företag. Genererad AI-text funkar inte här — det syns på en kilometer håll." },
                { item: "Case studies", desc: "Inte bara 'vi gjorde en hemsida åt dem'. Utan: 'Vi gjorde en hemsida åt dem och de fick 150% fler leads på 6 månader'." },
                { item: "Logotyper av kunder", desc: "Om du arbetat med kända varumärken, visa det. En logotyp är värd tusen ord. (Men bara om det är sant.)" },
                { item: "Siffror och resultat", desc: "Inte 'kunderna är nöjda'. Utan '98% av våra kunder ligger kvar efter år två'. Det är övertyg kraft." },
              ].map((item) => (
                <div key={item.item} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.item}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8 flex gap-3">
              <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-[15px] text-body">
                Testimonialer från generisk AI eller helt uppfunna? Det minskar trovärdighet massivt. Spara tiden. Använd riktiga siffror istället.
              </p>
            </div>

            {/* #3 Tydliga CTAs */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              3. Tydliga och placerade call-to-actions
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En hemsida utan CTA är som en försäljare som aldrig frågar efter ordern.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En hemsida som säljer har:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { point: "En primär CTA högst upp", desc: "'Boka konsultation' eller 'Skapa konto' — något som förflyttar besökaren mot nästa steg." },
                { point: "Flera CTAs nedför sidan", desc: "Inte bara en. Människor scrollar olika. Ge dem möjlighet att agera på olika ställen." },
                { point: "Tydlig knapptext", desc: "'Skicka' är uselt. 'Boka mitt gratis möte' är bra. Spara inte på orden — var spesifik." },
                { point: "Känsla av brådska när det passar", desc: "'Begränsade platser' eller 'Gratis under april' skapar incitament. Men använd bara om det är sant." },
              ].map((item) => (
                <div key={item.point} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.point}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En hemsida som bara finns har ofta en eller två små kontaktlänkar någonstans. En hemsida som säljer gör det lätt för besökare att ta nästa steg.
            </p>

            {/* #4 Hastighet och mobilupplevelse */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              4. Hastighet och en säker mobilupplevelse
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Detta är ingen design-fråga. Det är en affärsfråga.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Fakta:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { stat: "En sekund för långsam laddningstid", desc: "...kostar dig 7% av konverteringarna. Om du har 1000 besökare per månad och 5% konverterar — det är 35 förlorade leads per månad." },
                { stat: "50% av webbtrafiken är mobil", desc: "Om din hemsida inte fungerar på mobil, missade du redan hälften." },
                { stat: "Dålig mobilupplevelse = dubbel hoppa", desc: "Människor hoppar av långsamt mobila hemsidor två gånger snabbare än från snabba." },
              ].map((item) => (
                <div key={item.stat} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-2">{item.stat}</p>
                  <p className="text-[14px] text-body">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En hemsida som säljer laddar under 2 sekunder på 4G och fungerar perfekt på mobil. Inte godkänd på mobil. Perfekt.
            </p>

            {/* #5 SEO */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              5. En SEO-grund som drar in rätt trafik
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du kan ha världens vackraste och mest konverterande hemsida. Men om ingen hittar den, spelar det ingen roll.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En hemsida som säljer är byggd med SEO i åtanke:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { element: "Tydliga, sökmotoroptimerade titlar och rubrikstruktur", desc: "H1, H2, H3 — allt är strukturerat. Inte för Google, utan för att göra texten läsbar och skärmbar." },
                { element: "Fokuserat innehål om rätt ord", desc: "Du skriver inte bara om allt. Du fokuserar på de ord som din målgrupp faktiskt söker på. Med intention." },
                { element: "Intern länkning", desc: "Relevanta länkar inom din hemsida — 'Se även' eller 'Läs mer om' — som hjälper besökare att stanna längre och Google att förstå din struktur." },
                { element: "Metadata är ifylld", desc: "Varje sida har en description, unique title — de små grejer som gör enorm skillnad i klickfrekvensen från sökresultaten." },
              ].map((item) => (
                <div key={item.element} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.element}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En hemsida som säljer är inte bara snygg — den är byggd för att sökmotorer och människor förstår den lika väl.
            </p>

            {/* Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad är gemensamt för alla fem?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              De handlar inte om design. De handlar om att tänka långsiktigt och från kundens perspektiv. En hemsida som säljer frågade sig själv under bygget:
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <p className="text-[15px] text-body leading-relaxed">
                <span className="font-600 text-heading">Varför skulle någon vilja ha det här?</span> Vad är mitt verkliga värdeerbjudande? <span className="font-600 text-heading">Hur ska de kunna ta nästa steg?</span> Gör jag det lätt eller svårt? <span className="font-600 text-heading">Kan de faktiskt hitta mig?</span> Eller är jag dold på någon Google-sida 47?
              </p>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En hemsida som bara finns ställde sig aldrig dessa frågor. Det är skillnaden.
            </p>

            {/* Relaterad läsning */}
            <div className="my-12 pt-8 border-t border-border">
              <p className="text-[13px] text-muted uppercase tracking-wide mb-4 font-600">Läs också</p>
              <div className="space-y-2">
                <a href="/tjanster/webbutveckling" className="flex items-center gap-2 text-[15px] text-primary hover:text-primary-dark transition-colors font-500">
                  Webbutveckling <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[20px] sm:text-[24px] font-800 text-white font-heading mb-4">
                Är din hemsida en försäljare eller bara ett vackert projekt?
              </h3>
              <p className="text-[15px] text-white/80 mb-6 leading-relaxed">
                Vi granskar hundratals hemsidor. Vi vet vad som funkar och vad som inte gör det. Vi kan berätta hur din stackar sig upp och vad som skulle förändra spelet.
              </p>
              <a href="/boka" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-600 text-[14px] hover:bg-primary-dark transition-colors">
                Gratis konsultation <ArrowRight size={16} />
              </a>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <a href="/blogg" className="flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500">
                <ArrowLeft size={16} /> Tillbaka till blogg
              </a>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
