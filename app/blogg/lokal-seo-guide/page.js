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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Lokal SEO-guide</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Guide
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Lokal SEO — Så syns ditt företag i Google Maps och lokala sökningar
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 12 april 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 11 min läsning
                </span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              &ldquo;Jag är en frisör i Malmö. Min hemsida visar upp överallt när folk söker på Google. Men varför får jag inte några bokningar?&rdquo; Det är en fråga jag hör ofta. Problemet är inte att hemsidan är dålig — problemet är att folk söker efter &ldquo;frisör malmö&rdquo; på mobilen, och då visas inte hemsidan. Google Maps visas. Och det är där lokal SEO spelar roll.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den här guiden handlar om hur du får ditt företag att synas när folk i din stad söker efter det du säljer. Baserat på 150+ projekt och tio år av erfarenhet — utan buzzwords, bara det som faktiskt fungerar 2026.
            </p>

            {/* Section: Varför lokal SEO */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför lokal SEO spelar roll — Google Maps är större än Google Search
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är reality: 80%+ av alla Google-sökningar från mobiler är lokala. Någon söker på &ldquo;elektriker växjö&rdquo;, inte &ldquo;elektriker Sverige&rdquo;. Och när de gör det visas Google Maps före den organiska sökresultatlistan.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det betyder att folk letar aktivt efter företag i sin närhet — precis nu. De vill ha ett nummer att ringa, se var du ligger på kartan, läsa recensioner och se när du öppet. Om du inte är där — om ditt Google Business Profile är kass eller inte ens satt upp — förlorar du affärer till konkurrenten som är.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Lokal SEO handlar om att synas i det här sökresultatet. Och det är mycket enklare än du tror.
            </p>

            {/* Section: Google Business Profile */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 1: Skapa och optimera din Google Business Profile
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det här är det viktigaste. Utan ett Google Business Profile är du osynlig på Google Maps och i lokala sökningar. Med ett bra uppsat profil kan du komma på första sidan utan att ens behöva betala för annonser.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Vad du behöver göra:</p>
              <div className="space-y-2">
                {[
                  "Gå till google.com/business och skapa profilen (gratis)",
                  "Verifiera att du är företagsägare — Google skickar ett brev till din adress",
                  "Fyll i allt: företagsnamn, kategori, telefon, webbadress, öppettider, beskrivning",
                  "Ladda upp minst 10 högkvalitativa bilder från din butik/kontor",
                  "Lägg till tjänster eller produkter med beskrivningar",
                  "Sätt rätt öppettider — inkludera helger om du är öppen",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Tips: Välj rätt kategori</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Google har hundra kategorier. Välj den som bäst matchar vad du gör — inte den som låter viktig. En frisör ska välja &ldquo;Frisörsalong&rdquo;, inte &ldquo;Skönhetssalong&rdquo;. Du kan välja upp till tre kategorier.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Bilderna är viktiga. De första tre bilderna är de folk ser innan de klickar in. Visa din butik, ditt team, dina produkter. Inte stockfoton. Google Maps användare vill se vad de möter.
            </p>

            {/* Section: NAP */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 2: NAP-konsistens — Namnet måste vara identiskt överallt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              NAP står för Name, Address, Phone. Google använder detta för att förstå att alla dina online-närvaron (Google Business Profile, hemsida, Eniro, HitTA, andra kataloger) är samma företag — och inte tre olika konkurrenter.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om Google ser:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Din hemsida:", text: "Stolt Marketing AB" },
                { label: "Google Business:", text: "Stolt Marketing" },
                { label: "Eniro:", text: "STOLT MARKETING AB" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              ...då tror Google att det är tre olika företag. Det slår ned din lokal ranking. Så först: bestäm dig för ett format (med eller utan AB, mellanslag eller inte) och stick till det överallt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Andra detaljer som måste matchas: telefonnummer (med samma landsnummer), fullständig adress (gata, nummer, postnummer, stad), och webbadress (med eller utan www — men samma överallt).
            </p>

            {/* Section: Lokala sökord */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 3: Lokala sökord — Hitta vad folk söker efter i din stad
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Lokal SEO handlar inte om &ldquo;elektriker&rdquo; — det handlar om &ldquo;elektriker malmö&rdquo;, &ldquo;VVS växjö&rdquo;, &ldquo;revisionsbyrå hässleholm&rdquo;. Så hur hittar du de sökord som folk faktiskt använder i din stad?
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Två enkla metoder:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[14px] font-600 text-heading mb-1">1. Google Search Console</p>
                  <p className="text-[14px] text-body leading-relaxed">Anslut din hemsida till Google Search Console och se vilka sökord folk använder för att hitta dig. Filterera på ord som innehåller din stad. Det här är guldvärd data.</p>
                </div>
                <div>
                  <p className="text-[14px] font-600 text-heading mb-1">2. Google Auto-complete</p>
                  <p className="text-[14px] text-body leading-relaxed">Skriv &ldquo;frisör malmö&rdquo; i Google-sökrutan. Se vad som dyker upp. Det är sökord som faktiska människor skriver in.</p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Använd sedan dessa sökord i din Google Business Profile-beskrivning, på din hemsida (speciellt i h1 och introparagrafen) och i lokala kataloger. Det hjälper Google förstå vad du erbjuder och var.
            </p>

            {/* Section: Recensioner */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 4: Recensioner — Google bryr sig, och det gör dina kunder också
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google rankar företag med fler och bättre recensioner högre i Maps-resultaten. Men det är inte bara algoritmen — 72% av konsumenterna läser recensioner innan de ringer. En 4,8-stjärnig firma med 50 recensioner slår en 5,0-stjärnig firma med två recensioner.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Så hur får du fler recensioner?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör det lätt</p>
                <div className="space-y-2">
                  {["Ge en direktlänk", "Fråga efter review", "SMS eller email", "Gör det på 10 sekunder"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Undvik</p>
                <div className="space-y-2">
                  {["Betala för fake-recensioner", "Skriva falska reviews själv", "Tvinga eller pressa", "Ignorera negativ feedback"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Svar på alla recensioner — både positiva och negativa. Det visar att du bryr dig och ger Google signal att profilen är aktiv. Negativa recensioner är inte dåliga — om du svarar snällt och löser problemet, visar det goda omdömen om dig.
            </p>

            {/* Section: On-page SEO */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 5: On-page lokal SEO — Din hemsida måste prata om plats
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google Maps är en del av bilden, men din hemsida spelar också roll för lokal SEO. Om Google söker på &ldquo;frisör malmö&rdquo; kommer Google att favoritisera hemsidor som tydligt handlar om frisörtjänster i Malmö.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är vad du bör göra:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Title tag och meta description", desc: "Включи stad och tjänst. Ex: &ldquo;Frisör i Malmö — Helt nya klipp och färgning | Stolt Salons&rdquo;" },
                { title: "H1-rubrik", desc: "Första rubriken på sidan bör innehålla både tjänst och plats. &ldquo;Frisörtjänster i Malmö&rdquo; eller liknande." },
                { title: "Lokal schema markup", desc: "Lägg till LocalBusiness schema (JSON-LD) med din NAP och öppettider. Det talar om för Google exakt vad du är och var." },
                { title: "En &ldquo;Om oss&rdquo;-sektion", desc: "Skriv naturligt om varför du finns i just denna stad. &ldquo;Vi är en lokal byrå i Hässleholm som arbetat med småföretag i regionen sedan...&rdquo;" },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section: Lokala kataloger */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 6: Lokala kataloger och backlinks
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google ser också var du är listad på nätet. En länk från Eniro.se eller HitTA.se — två av Sveriges största företagskataloger — säger &ldquo;detta är ett verkligt, lokalt företag&rdquo;.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De här katalogerna är viktiga för lokal SEO:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Eniro.se — Sveriges största företagskatalog",
                "HitTA.se — Många lokala sökningar landar här",
                "Google Maps — redan gjort",
                "LinkedIn Company Page — bekräftar att du är ett verkligt företag",
                "Facebook — massa användare söker på Facebook Local",
                "Branschspecifika kataloger (t.ex. Tripadvisor för restauranger, Hitta en advokat för juridiska tjänster)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Se till att din NAP är identisk överallt här också. Och uppdatera profilerna — gamla, inaktiva profiler ser spam-aktiga ut.
            </p>

            {/* Section: Mät resultat */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 7: Mät dina resultat — Du behöver veta om det fungerar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du kan inte optimera det du inte mäter. Så här spårar du lokal SEO-resultat:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { tool: "Google Business Profile Insights", what: "Vilka sökningar ledde till att folk såg dina annons? Hur många visningar? Klick? Samtal?" },
                { tool: "Google Search Console", what: "Vilka lokala sökord rankar du för? Vad är din genomsnittliga position?" },
                { tool: "Google Maps", what: "Sök själv på &ldquo;[tjänst] [stad]&rdquo; och se var du ligger. Samma position varje vecka?" },
                { tool: "Google Analytics", what: "Från vilka källor kommer besökarna? Hur många Google Maps-klick? Konverterar de till samtal/formulär?" },
              ].map((item) => (
                <div key={item.tool} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.tool}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.what}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om du inte ser rörelse efter två-tre månader betyder det att något inte fungerar — antingen är din Google Business Profile inte komplett, din NAP inte konsistent, eller folk söker inte på de ord du optimerar för. Då behöver du justera.
            </p>

            {/* Section: Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Den praktiska checklistan
            </h2>

            <div className="space-y-2 mb-8">
              {[
                "☐ Google Business Profile skapad, verifierad och helt fylld",
                "☐ Minst 10 bra bilder uppladdade",
                "☐ NAP (namn, adress, telefon) identisk överallt: hemsida, Google, Eniro, HitTA, LinkedIn",
                "☐ Rätt kategori vald i Google Business",
                "☐ Lokala sökord identifierade och använda på hemsida (title, h1, beskrivning)",
                "☐ LocalBusiness schema markup tillagt på hemsida",
                "☐ Profiler skapad på lokala kataloger (Eniro, HitTA, Facebook, LinkedIn)",
                "☐ System på plats för att be om recensioner (SMS, email, QR-kod)",
                "☐ Svar på alla recensioner",
                "☐ Google Business Insights och Google Search Console övervakad",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "SEO för småföretag — 7 steg som faktiskt fungerar", href: "/blogg/seo-for-smaforetag" },
                { title: "Google Business Profile — den kompletta guiden", href: "/tjanster/seo" },
                { title: "Webbutveckling & design för lokala företag", href: "/tjanster/webbutveckling" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors"
                >
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">
                    {link.title} →
                  </span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Behöver du hjälp med lokal SEO?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi sätter upp, optimerar och övervakar din Google Business Profile och lokala SEO-strategi. Många företag ökar sina lokala bokningar med 40–100% inom tre månader med rätt strategi på plats.
              </p>
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </div>

            {/* Back */}
            <div className="mt-10 pt-6 border-t border-border">
              <a href="/blogg" className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500">
                <ArrowLeft size={16} /> Alla artiklar
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
