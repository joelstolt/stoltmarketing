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
        <section className="hero-dark relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Teknisk SEO</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                SEO
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Teknisk SEO: nybörjarguiden till en sajt Google älskar
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 11 augusti 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 10 min läsning
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Du har lagt pengar på en snygg sajt. Bilderna sitter, texten är genomtänkt, och ändå ligger du på sidan tre i Google. Innan du skyller på innehållet är det värt att kolla en sak: kan Google ens läsa din sajt ordentligt? Det är precis vad teknisk SEO handlar om. Inte magi, inte hemliga knep, utan att sökmotorn kan hitta, läsa och lita på det du har byggt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Teknisk SEO har ett oförtjänt rykte om sig att vara krångligt. Det mesta är i själva verket ganska enkelt när någon förklarar det utan jargong. Efter tio år och 150+ webbprojekt kan jag säga att samma handfull tekniska fel återkommer om och om igen, och att de flesta går att fixa på en eftermiddag. Här är grunderna, i den ordning de faktiskt spelar roll.
            </p>

            {/* Section: Vad teknisk SEO är */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad teknisk SEO faktiskt är
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Tänk dig Google som en väldigt snabb men lite fyrkantig besökare. Innan din sida kan ranka måste tre saker stämma, och de bygger på varandra i den här ordningen:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "1. Crawla (hitta)", desc: "Googles robot följer länkar och läser dina sidor. Kan den inte ta sig in, finns du inte för Google. Punkt." },
                { title: "2. Indexera (spara)", desc: "Sidan läggs in i Googles enorma register. Utan indexering kan du aldrig visas i sökresultatet, hur bra innehållet än är." },
                { title: "3. Förstå och ranka", desc: "Google tolkar vad sidan handlar om och väger den mot allt annat. Ren struktur och tydliga signaler hjälper den att förstå rätt." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Teknisk SEO handlar om att röja undan hindren i de tre stegen. Innehåll och länkar är motorn, men tekniken är vägen. Det spelar ingen roll hur stark motorn är om vägen är avstängd. När vi tar in en ny sajt är det nästan alltid här problemet sitter, inte i texten.
            </p>

            {/* Section: Indexering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Indexering: syns du ens i Google?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Innan du finslipar något annat: kontrollera att dina sidor faktiskt finns i Googles register. Det låter självklart, men jag har sett fullt fungerande sajter som varit helt osynliga i månader utan att någon märkt det. Det tar två minuter att kolla.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Så kollar du om du är indexerad:</p>
              <div className="space-y-2">
                {[
                  "Sök site:dindoman.se i Google. Ser du dina viktiga sidor i listan?",
                  "Skapa ett gratis konto i Google Search Console och koppla din sajt.",
                  "Öppna rapporten Sidor: den visar vad som är indexerat, vad som är exkluderat och varför.",
                  "Använd URL-inspektion på en enskild sida för att se exakt vad Google ser.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Två filer styr det mesta här. Din robots.txt säger till robotarna vart de får gå, och en noindex-tagg säger till Google att inte spara en viss sida. Båda är nyttiga, och båda är farliga när de hamnar fel.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det absolut vanligaste misstaget jag ser: en noindex som glömts kvar från test- eller utvecklingsversionen och följt med ut i skarp drift. Då faller hela sajten tyst ur Google, ofta veckor innan någon undrar varför telefonen slutat ringa. Kolla det först. Se också till att robots.txt inte blockerar din CSS och dina skript, annars ser Google en trasig sida.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sista pusselbiten för indexering är en sitemap.xml, en enkel lista över alla sidor du vill att Google ska känna till. Den ersätter inte bra intern länkning, men den är en genväg som hjälper Google att hitta nya och djupt liggande sidor snabbare. De flesta CMS genererar den åt dig. Ditt jobb är att skicka in adressen i Search Console och se till att den bara innehåller sidor som ska indexeras, inte borttagna eller noindex-märkta sidor.
            </p>

            {/* Section: Hastighet och Core Web Vitals */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Hastighet och Core Web Vitals: mobil först
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google indexerar mobilversionen av din sajt, inte datorversionen. Ser sidan bra ut på en stor skärm men laddar segt och hoppar runt på mobilen, är det mobilupplevelsen som räknas. Snabbhet är dessutom en direkt rankingfaktor, mätt genom tre värden som kallas Core Web Vitals.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { label: "LCP (laddning)", text: "Hur snabbt det största elementet syns. Sikta under 2,5 sekunder." },
                { label: "INP (respons)", text: "Hur snabbt sidan svarar när någon klickar. Sikta under 200 ms." },
                { label: "CLS (stabilitet)", text: "Hur mycket layouten hoppar medan sidan laddar. Sikta under 0,1." },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4 py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading flex-shrink-0">{row.label}</span>
                  <span className="text-[14px] text-body text-right">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              De andra två värdena är oftast enklare att rätta till. Layouthopp (CLS) beror nästan alltid på bilder eller annonser utan reserverad plats, så ange höjd och bredd så att inget knuffas runt när sidan laddar. Trög respons (INP) kommer ofta av tunga skript som laddas i onödan. Rensa bort det du inte använder, så svarar sidan snabbare på klick.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Tips: börja med bilderna</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Kör din sajt genom Googles PageSpeed Insights, gratis, och läs den röda listan. I nio fall av tio är den enskilt största bromsen tunga, okomprimerade bilder som laddas i full storlek på mobilen. Komprimera dem och servera rätt storlek, så lyfter LCP direkt. Det är den billigaste hastighetsvinsten som finns.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Struktur och interna länkar */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Sajtstruktur och interna länkar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En logisk struktur hjälper både Google och dina besökare att hitta rätt. Tänk dig sajten som ett träd: startsidan är stammen, tjänsterna är grenar, och detaljsidorna är löven. Ju rörigare trädet är, desto svårare har Google att förstå vad som är viktigt.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Håll viktiga sidor nära startsidan, gärna högst tre klick bort. Djupt begravda sidor crawlas mer sällan.",
                "Länka internt mellan sidor som hör ihop. Det sprider styrka och pekar ut vad som är centralt.",
                "Använd rena URL:er: dindoman.se/tjanster/seo, inte dindoman.se/?p=482. En URL ska gå att gissa innehållet av.",
                "Ge varje sida ett eget jobb. Två sidor om nästan samma sak konkurrerar med varandra i stället för att hjälpas åt.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Section: Strukturerad data */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Strukturerad data: hjälp Google förstå
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Strukturerad data, ofta kallat schema, är en osynlig etikett i koden som talar om exakt vad något är: att en text är en artikel, att 4,8 är ett snittbetyg, att 249 kr är ett pris. Utan den gissar Google. Med den slipper den gissa, och du kan få snyggare träffar i sökresultatet med stjärnor, priser eller frågor som drar fler klick.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "LocalBusiness", desc: "Namn, adress, telefon och öppettider. Grunden för lokala företag och en tydligare plats i Google Maps." },
                { title: "Article och BlogPosting", desc: "Talar om att sidan är en artikel, med författare och datum. Den här bloggen använder det." },
                { title: "FAQPage", desc: "Vanliga frågor och svar som kan visas direkt i sökresultatet och ta mer plats på skärmen." },
                { title: "Product och Review", desc: "Pris, lagerstatus och betyg för produkter, ofta med stjärnor som syns i träffen." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Du behöver inte skriva det för hand. De flesta CMS har plugins som lägger till schema, och en utvecklare fixar det på någon timme. Testa alltid resultatet i Googles Rich Results Test efteråt, så du vet att det tolkas rätt.
            </p>

            {/* Section: Vanliga fel */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Tekniska fel som tyst dödar din ranking
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det lömska med tekniska fel är att de är just tysta. Sajten ser fin ut, besökaren märker inget, det kommer inga felmeddelanden. Men Google tappar förtroendet och positionerna glider nedåt utan att något syns. Här är de vanligaste, och vad du gör i stället.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Vanliga fel</p>
                <div className="space-y-2">
                  {["Samma innehåll på www och utan www", "Canonical som pekar alla sidor till startsidan", "Trasiga länkar och 404-sidor", "noindex kvar från testversionen", "Sidan beter sig olika på mobil och dator"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Så gör du rätt</p>
                <div className="space-y-2">
                  {["Välj en version, helst https med www, och 301-omdirigera resten", "Sätt canonical per sida, till sidan själv", "Kolla länkar regelbundet och 301:a det som flyttat", "Dubbelkolla att inga viktiga sidor har noindex", "Testa på en riktig mobil, inte bara i datorns läge"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den lömskaste av dem är fel canonical. En canonical-tagg talar om för Google vilken adress som är originalet. Läggs den i sajtens rot-layout ärver varje undersida samma tagg, och då säger alla sidor att startsidan är originalet. Google drar slutsatsen att undersidorna är kopior och slutar ranka dem. Sajten fungerar felfritt för besökaren hela tiden. Sätt alltid canonical per sida, pekande på sidan själv.
            </p>

            {/* Section: Checklista */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Teknisk SEO-checklista att gå igenom
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Skriv ut den här och bocka av. Klarar din sajt alla punkter har du en teknisk grund som de flesta konkurrenter saknar.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "☐ Sajten är indexerad (site:-sökning visar dina viktiga sidor)",
                "☐ Google Search Console är kopplat och rapporten Sidor genomläst",
                "☐ sitemap.xml finns och är inskickad i Search Console",
                "☐ robots.txt blockerar inte sidor du vill ha indexerade",
                "☐ Ingen kvarglömd noindex på viktiga sidor",
                "☐ En vald domänversion, resten 301-omdirigerad",
                "☐ Canonical satt per sida, till sidan själv",
                "☐ Mobilversionen fungerar och laddar snabbt",
                "☐ LCP under 2,5 s och CLS under 0,1 (mät i PageSpeed Insights)",
                "☐ Bilder komprimerade och i rätt storlek",
                "☐ Interna länkar mellan sidor som hör ihop",
                "☐ Rena, läsbara URL:er utan frågetecken och siffror",
                "☐ Strukturerad data för företag, artiklar och produkter",
                "☐ Inga trasiga länkar eller 404:or på viktiga sidor",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Teknisk SEO är inte något du gör en gång och glömmer. Sidor flyttas, plugins uppdateras, någon lägger till en ny sektion. Gå igenom listan varje kvartal, så fångar du de tysta felen innan de hinner kosta dig kunder.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "SEO-analys: gör en själv på 30 minuter", href: "/blogg/seo-analys-sjalv" },
                { title: "Varför en snabb hemsida ger fler kunder", href: "/blogg/varfor-snabb-hemsida" },
                { title: "SEO-tjänster", href: "/tjanster/seo" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-white font-heading tracking-tight mb-3">
                Vill du veta vad som tekniskt håller tillbaka din sajt?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi gör en teknisk SEO-genomgång och ger dig en prioriterad fixlista. Boka en kostnadsfri första titt.
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
