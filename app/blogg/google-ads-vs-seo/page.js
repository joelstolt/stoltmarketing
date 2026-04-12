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
                <span className="text-heading font-500">Google Ads vs SEO</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Strategi
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Google Ads vs SEO — Vad ska du satsa på?
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 19 april 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 7 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Du sitter med en budget för digital marknadsföring. Den är begränsad. Och du måste välja — ska du spruta pengar på Google Ads eller bygga upp SEO långsiktigt?
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Jag får den här frågan varje vecka. Och svaret är aldrig enkelt. Men jag ska försöka göra det enkelt för dig ändå.
            </p>

            {/* Vad är skillnaden? */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad är skillnaden?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kort sagt: Google Ads är betald trafikmedling. Du betalar per klick för att visas längst upp på Google. SEO är organisk trafik — du bygger upp din hemsida så att Google gärna visar dig, utan att du behöver betala per besökare.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Båda får du att dyka upp när någon söker på din affär. Men vägen dit är helt olika.
            </p>

            {/* Google Ads */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Google Ads — Fördelar och nackdelar
            </h2>

            <div className="space-y-3 mb-8">
              {[
                { title: "Omedelbar synlighet", desc: "Du är synlig från dag ett. Inte dag 100. Det betyder trafik och potentiella kunder redan nästa vecka." },
                { title: "Kontroll över budget", desc: "Bestäm exakt hur mycket du spenderar per dag. Inga överraskningar. Du kan stänga av det när som helst." },
                { title: "Mätbar ROI", desc: "Varje klick, varje konvertering, spåras. Du vet exakt vad du spenderar och vad du får tillbaka." },
                { title: "Targeted traffic", desc: "Visa annonser endast för människor som faktiskt söker på dina tjänster. Ingen slöseri på fel målgrupp." },
                { title: "Testas snabbt", desc: "Vilka slogans fungerar? Vilka bilder? Testa på veckor istället för månader." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Men det finns också nackdelar:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "Du betalar för varje klick", desc: "I konkurrerade branscher kan det bli dyrt. 10-30 kr per klick är inte ovanligt för högkvalitativa leads. Multiplicera det med hundra klick per dag..." },
                { title: "Trafiken slutar när pengarna tar slut", desc: "Du stänger av kampanjen — trafiken försvinner nästa dag. Du bygger inget långsiktigt värde." },
                { title: "Kan vara svårt att skala", desc: "Om du är en lokal tjänsteman eller E-handel med tunna marginaler kan CPC bli för högt för att rentabel." },
                { title: "Kräver ständig justering", desc: "Dåligt utförda Google Ads kampanjer bränner pengar. Du behöver veta vad du gör — eller anlita någon som gör." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <X size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SEO */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              SEO — Fördelar och nackdelar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              SEO är långsiktigt tänkande. Du bygger upp din hemsida och ditt innehål så att Google älskar dig.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "Mycket billigare på lång sikt", desc: "En besökare från SEO kostar nästan inget när den väl rullar. Du betalar inte per klick — du betalar för innehål och optimering." },
                { title: "Ständigt värde", desc: "En bloggpost du skriver idag kan dra in trafik i åren framöver. Den arbetar för dig dygnet runt utan extra kostnad." },
                { title: "Högre trovärdighet", desc: "Människor klickar gärna på organiska resultat före annonser. De upplevs som mer relevanta och hederliga." },
                { title: "Skalbar försäljning", desc: "Ju bättre SEO du har, desto billigare blir varje lead. Du kan växa utan att kostnaden per kunskap blir absurd." },
                { title: "Konkurrensövertag", desc: "En gång när du är rankad, är du rankad. Det är svårare för konkurrenter att skjuta bort dig än att slå ur dig från Ads." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Men SEO har också fallgropar:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "Långt innan resultat syns", desc: "3-6 månader är realistisk tidshorisont innan du ser signifikant trafik. Kanske till och med 12 månader för konkurrerade ord." },
                { title: "Osäkerhet", desc: "Google ändrar sina algoritmer. En ranking du hade kan försvinna över en natt. Du har ingen garanterad trafik." },
                { title: "Kräver rätt kunskap", desc: "Dålig SEO är värre än ingen SEO. Du behöver veta vad du gör — eller betala någon som gör det rätt." },
                { title: "Inte för akut behov", desc: "Behöver du trafik nästa vecka? SEO hjälper dig inte. Du behöver något snabbare." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <X size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kostnadsjämförelse */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Kostnadsjämförelse — Ett konkret exempel
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Låt oss säga att du är en plöckföretag i Hässleholm. Du vill få trafik för sökningen "snöröjning Hässleholm". Du har en budget på 10 000 kr/månad att satsa på detta.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-600 text-heading">Mått</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">Google Ads</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-4 text-body">Månadlig budget</td>
                    <td className="py-3 px-4 text-body">10 000 kr</td>
                    <td className="py-3 px-4 text-body">10 000 kr</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Kostnad per klick</td>
                    <td className="py-3 px-4 text-body">15-25 kr</td>
                    <td className="py-3 px-4 text-body">0 kr</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Klick första månaden</td>
                    <td className="py-3 px-4 text-body">~400-600</td>
                    <td className="py-3 px-4 text-body">~10-50</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Klick månad 6</td>
                    <td className="py-3 px-4 text-body">~400-600</td>
                    <td className="py-3 px-4 text-body">~200-400</td>
                  </tr>
                  <tr className="bg-primary-subtle">
                    <td className="py-3 px-4 text-body font-600">Klick månad 12</td>
                    <td className="py-3 px-4 text-body font-600">~400-600</td>
                    <td className="py-3 px-4 text-body font-600">~600-900</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8 flex gap-3">
              <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-[15px] text-body">
                <span className="font-600 text-heading">Viktigt:</span> Efter månad 6 fortsätter du att betala 10 000 kr/månad för Ads. Men SEO kostar samma, och ger dig ännu mer trafik. Siffror är ungefärliga och varierar beroende på din bransch.
              </p>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ser du mönstret? Google Ads är dyrt från dag ett. Men stabilt. SEO är långsamt från början — men exponentiell växtpotential över tid.
            </p>

            {/* När ska du välja vad? */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              När ska du välja vad?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Det enkla svaret: det beror på din situation. Här är en guide.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { scenario: "Du behöver trafik direkt", choice: "Google Ads", why: "SEO tar tid. Om du startar en ny affär eller lanserar en kampanj och behöver resultat nu, betalar Ads för sig själv." },
                { scenario: "Du har begränsad budget och tid", choice: "Google Ads", why: "SEO är billigare långsiktigt men behöver investering både i pengar och tid. Om du inte kan vänta 3-6 månader, gå för Ads." },
                { scenario: "Du vill växa hållbart", choice: "SEO", why: "Om du planerar att verka i 3+ år, investeringen i SEO kommer ge bättre ROI. Du bygger ett värde som blir allt starkare." },
                { scenario: "Du är lokal (restaurang, advokat, klinik)", choice: "SEO", why: "Lokal SEO är ofta lika dyr som Ads att setup, men gives enormt värde. Människor söker 'tandläkare nära mig' dagligen." },
                { scenario: "Din bransch är extremt konkurrerad", choice: "Båda", why: "Starkt konkurrens på Ads? Start där för snabb trafik, samtidigt som du bygger SEO långsiktigt för framtidssäkerhet." },
              ].map((item) => (
                <div key={item.scenario} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[14px] text-muted mb-1 uppercase tracking-wide">{item.scenario}</p>
                  <p className="text-[15px] font-600 text-heading mb-2">{item.choice}</p>
                  <p className="text-[14px] text-body">{item.why}</p>
                </div>
              ))}
            </div>

            {/* Kombinerad strategi */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Bäst av båda världar — En kombinerad strategi
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Om du frågar mig: det bästa är att göra båda. Inte och-eller. Och-och.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Här är strategin jag rekommenderar för de flesta svenska småföretag:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { num: "1", title: "Månad 1-3: Google Ads", desc: "Börja med taktiska Ads kampanjer för att få omedelbar trafik och testa vad som fungerar. Skapa en testbudget på 5 000 kr/månad." },
                { num: "2", title: "Månad 1-3: SEO-grundläggande", desc: "Parallelt, börja bygga SEO-grunden. Teknisk SEO, on-page optimering, start av innehål. Du sätter inte pengar på betald trafik här än." },
                { num: "3", title: "Månad 4-9: Dubblering", desc: "Fortsätt Ads för att dra in leads. Öka SEO-investeringen — mera innehål, tydligare struktur, länkbygge. Börja se resultat från SEO runt månad 6." },
                { num: "4", title: "Månad 9+: Shift focus", desc: "SEO börjar nu dra in trafik på egen hand. Skala ner Ads-budget eller fokusera den på högkonvertierande ord. SEO är nu din tillgång." },
              ].map((item) => (
                <div key={item.num} className="bg-surface border border-border rounded-xl p-5 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-600 text-[14px]">{item.num}</div>
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Detta sätt får du det bästa från både världar: omedelbar trafik från Ads medan du bygger långsiktiga resultat via SEO. Och på ett år eller två? Du har ett företag som får in trafik från både Ads och organisk sökning. Du är inte beroende av bara ett.
            </p>

            {/* Relaterad läsning */}
            <div className="my-12 pt-8 border-t border-border">
              <p className="text-[13px] text-muted uppercase tracking-wide mb-4 font-600">Läs också</p>
              <div className="space-y-2">
                <a href="/tjanster/google-ads" className="flex items-center gap-2 text-[15px] text-primary hover:text-primary-dark transition-colors font-500">
                  Google Ads-tjänster <ArrowRight size={16} />
                </a>
                <a href="/tjanster/seo" className="flex items-center gap-2 text-[15px] text-primary hover:text-primary-dark transition-colors font-500">
                  SEO-tjänster <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[20px] sm:text-[24px] font-800 text-white font-heading mb-4">
                Osäker på vad som passar ditt företag?
              </h3>
              <p className="text-[15px] text-white/80 mb-6 leading-relaxed">
                Vi hjälper hundratals svenska företag att välja rätt strategi. En kostnadsfri konsultation tar en halvtimme och kan spara dig tusentals kronor.
              </p>
              <a href="/boka" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-600 text-[14px] hover:bg-primary-dark transition-colors">
                Boka konsultation <ArrowRight size={16} />
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
