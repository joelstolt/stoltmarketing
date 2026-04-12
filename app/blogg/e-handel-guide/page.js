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
                <span className="text-heading font-500">E-handel 2026</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                E-handel
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Starta e-handel 2026 — Komplett guide för svenska företag
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 10 maj 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 10 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              E-handel är inte längre en fritidsaktivitet för tech-startups. Det är vanlig affär för småföretag i Hässleholm, Stockholm och Gävle. Men att starta en webshop är inte bara 'ladda upp bilder och vänta på pengarna'.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det finns juridiska regler, betalningsgatewayer som måste funktionera, logistik som måste planeras och teknik som måste hållas. Denna guide täcker allt — från plattformval till dina första försäljningar.
            </p>

            {/* Steg 1: Välja plattform */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 1: Välja rätt e-handelsplattform
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Du har huvudsakligen tre vägar: Shopify (SaaS), WooCommerce (WordPress) eller en custom-byggd lösning. Var passar du?
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  platform: "Shopify",
                  pros: ["Enkelt att börja", "Bra stöd för svenska betalmetoder", "Säkerhet är inbyggt", "Många templates och apps"],
                  cons: ["Månadskostnad 299-499 kr", "Begränsad anpassning", "Avgifter på varje transaktion"],
                  bestFor: "Små till medelstora webshops. Om du vill starta snabbt och säkert.",
                  cost: "299-499 kr/mån + transaktionsavgifter"
                },
                {
                  platform: "WooCommerce",
                  pros: ["Helt kostnadsfritt plugin", "Stor flexibilitet", "Du äger all data", "Många svenska plugins"],
                  cons: ["Kräver WordPress-kunskap", "Du är ansvarig för säkerhet", "Kräver god hosting", "Mer arbete dagligen"],
                  bestFor: "Tech-företagare eller de som redan använder WordPress.",
                  cost: "0 kr (plugin) + 200-500 kr/mån för bra hosting"
                },
                {
                  platform: "Custom-byggd",
                  pros: ["Perfekt för din affär", "Ingen begränsning", "Långsiktigt värde", "Din innovation"],
                  cons: ["Dyrt att bygga (50 000-200 000 kr)", "Kräver en utvecklare", "Långt innan lansering"],
                  bestFor: "Stora eller mycket specifika e-handelslösningar. När standard-lösningar inte räcker.",
                  cost: "50 000-200 000 kr build + hosting"
                },
              ].map((item) => (
                <div key={item.platform} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-3">{item.platform}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-[12px] text-muted uppercase tracking-wide font-600 mb-2">Fördelar</p>
                      <ul className="space-y-1">
                        {item.pros.map((pro) => (
                          <li key={pro} className="text-[13px] text-body flex gap-2">
                            <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[12px] text-muted uppercase tracking-wide font-600 mb-2">Nackdelar</p>
                      <ul className="space-y-1">
                        {item.cons.map((con) => (
                          <li key={con} className="text-[13px] text-body flex gap-2">
                            <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-[13px] text-muted mb-1"><span className="font-600 text-heading">Bäst för:</span> {item.bestFor}</p>
                    <p className="text-[13px] text-muted"><span className="font-600 text-heading">Kostnad:</span> {item.cost}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Steg 2: Betalmetoder */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 2: Ställa upp betalmetoder
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              I Sverige är detta kritiskt. Svenska kunder förväntar sig specifika betalmetoder. Missa detta och du förlorar försäljning.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { method: "Swish", desc: "För små betalningar. En av få rent svenska betalmetoder. Nästan alla har Swish. Gratis för kund." },
                { method: "Klarna", desc: "Köp nu, betala senare. Populäraste för e-handel i Sverige. Köpare uppskattar flexibiliteten. Du får pengarna direkt." },
                { method: "Stripe", desc: "Kort-betalningar (VISA, MC). Global standard. Fungerar bra för internationell försäljning. Någon procent i avgift." },
                { method: "PayPal", desc: "Klassiker. Inte lika populär i Sverige längre, men många använder det. Förväntat av vissa köpare." },
                { method: "Banköverföring", desc: "Inte populärt för e-handel (för långsamt). Men bra att ha för B2B-kunder som vill betala senare." },
              ].map((item) => (
                <div key={item.method} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.method}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8 flex gap-3">
              <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-[15px] text-body">
                <span className="font-600 text-heading">Rekommendation:</span> Starta med Klarna + kort (Stripe) + Swish. Det täcker 95% av svenska webshop-köpare. Lägg inte på PayPal direkt — det är en extra integrering utan mycket värde i Sverige.
              </p>
            </div>

            {/* Steg 3: Juridik och skatter */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 3: Juridik, GDPR och skatter — Det du måste veta
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Juridik är inte roligt. Men det är kritiskt. Här är det viktigaste för en webshop i Sverige:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { rule: "GDPR", what: "Du måste kunna förklara vad du gör med kundens data. En privacy policy på hemsidan är obligatorisk. Du kan inte sälja data till 3e part utan tillstånd.", law: "EU-lag, straffet är massivt" },
                { rule: "Ångerrätt", what: "Köpare kan ångra sitt köp i 14 dagar. Du måste ha en tydlig returprocess. Inte frivilligt — det är lag.", law: "EU-konsumenträttslagen" },
                { rule: "Konsumentköpslagen", what: "Varor måste vara som de presenteras. Ingen 'såld som den är' på e-handel för konsumenter. Du är ansvarig för fel.", law: "Svensk lag" },
                { rule: "Momsregistrering", what: "Om du säljer varor måste du vanligtvis registrera moms när försäljningen överstiger vissa gränser. Ungefär 40 000 kr i försäljning per månad.", law: "Skatteverket" },
                { rule: "Bokföring", what: "Varje försäljning måste bokföras. Vänd dig till en revisor eller använd ett bokföringsprogram.", law: "Bokföringslagen" },
              ].map((item) => (
                <div key={item.rule} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-2">{item.rule}</p>
                  <p className="text-[14px] text-body mb-3">{item.what}</p>
                  <p className="text-[12px] text-muted"><span className="font-600">Källa:</span> {item.law}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Min rekommendation: Prata med en revisor eller juridisk rådgivare innan du lanserar. Det kostar några tusen kronor — mycket billigare än böter senare.
            </p>

            {/* Steg 4: Logistik och frakt */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 4: Logistik — Från ditt lager till kundens dörr
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Frakt är ofta där småföretagare gör misstag. Antingen är det för dyrt för kunden att betala — eller för dyrt för dig att skicka.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { option: "Eget lager + egen frakt", pros: "Full kontroll. Bäst för höga volymer.", cons: "Kräver plats, tid och kunskap. Du måste packa och skicka. Inte bra till att börja med." },
                { option: "Eget lager + PostNord/DHL", pros: "Du lagrar, de skickar. Enkel integration. Priserna är rimliga.", cons: "Du måste packa själv. Om du växer blir detta en flaskhals." },
                { option: "Dropshipping", pros: "Du lagrar ingenting. Leverantör skickar direkt. Låg risk.", cons: "Svagare kontroll. Högre kostnader. Köpare kan bli besvikna på frakt/leveranstid." },
                { option: "Fulfilment-center", pros: "De lagrar och skickar åt dig. Skalbar. Professionell.", cons: "Dyrt för små volymer. 30-50 kr per order bara för lagring." },
              ].map((item) => (
                <div key={item.option} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-2">{item.option}</p>
                  <div className="grid grid-cols-2 gap-3 text-[13px]">
                    <div>
                      <p className="text-muted font-600 mb-1">Fördelar</p>
                      <p className="text-body">{item.pros}</p>
                    </div>
                    <div>
                      <p className="text-muted font-600 mb-1">Nackdelar</p>
                      <p className="text-body">{item.cons}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Min rekommendation: Börja med eget lager + PostNord. När du växer till 200+ beställningar per månad, byt till ett fulfilment-center. Det är rätt progression.
            </p>

            {/* Steg 5: Kostnader */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 5: Budget — Vad kostar det att starta en webshop?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Här är en realistisk budget för en liten webshop (under 100 produkter):
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-600 text-heading">Post</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">Kostnad</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">Återkommande?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-4 text-body">E-handelsplattform (Shopify)</td>
                    <td className="py-3 px-4 text-body">299 kr/mån</td>
                    <td className="py-3 px-4 text-body">Ja</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Domän + SSL</td>
                    <td className="py-3 px-4 text-body">200-500 kr/år</td>
                    <td className="py-3 px-4 text-body">Ja</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Design/tema</td>
                    <td className="py-3 px-4 text-body">500-2000 kr</td>
                    <td className="py-3 px-4 text-body">Nej (en gång)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Produktbilder (fotografi)</td>
                    <td className="py-3 px-4 text-body">2000-5000 kr</td>
                    <td className="py-3 px-4 text-body">Nej (per ny produkt)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Betalningsgateway-integration</td>
                    <td className="py-3 px-4 text-body">0 kr (Shopify gör det)</td>
                    <td className="py-3 px-4 text-body">Nej</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Juridisk review (revisor)</td>
                    <td className="py-3 px-4 text-body">3000-5000 kr</td>
                    <td className="py-3 px-4 text-body">Nej</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Marketing/SEO första 3 månader</td>
                    <td className="py-3 px-4 text-body">5000-10000 kr</td>
                    <td className="py-3 px-4 text-body">Variabel</td>
                  </tr>
                  <tr className="bg-primary-subtle">
                    <td className="py-3 px-4 text-body font-600">TOTALT setup</td>
                    <td className="py-3 px-4 text-body font-600">11 700-25 000 kr</td>
                    <td className="py-3 px-4 font-600 text-primary">-</td>
                  </tr>
                  <tr className="bg-primary-subtle">
                    <td className="py-3 px-4 text-body font-600">Månadskostnad (löpande)</td>
                    <td className="py-3 px-4 text-body font-600">299 + frakt</td>
                    <td className="py-3 px-4 font-600 text-primary">Ja</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sedan kommer transaktionsavgifter. Klarna tar cirka 3-5% av varje försäljning. Stripe tar 2,9% + 1,79 kr per transaktion. Räkna in det när du beräknar din lönsamhet.
            </p>

            {/* Steg 6: Lansering och marknadsföring */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 6: SEO och lansering — Få människor att faktiskt besöka
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Du har en vacker webshop. Men ingen vet att den existerar. Här är vad du måste göra:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { task: "SEO-grund", desc: "Produktsidor måste vara optimerade. Rätt keywords, bra metadata, snabb hemsida. Börja här innan du spenderar på annonsering." },
                { task: "Google Shopping", desc: "Ladda upp dina produkter till Google Merchant Center. Det är gratis och drar in mycket trafik för köp-intentioner." },
                { task: "Google Ads eller Facebook Ads", desc: "Betalt för att få snabb trafik. Börja litet — 5000 kr/månad för test — och skala vad som fungerar." },
                { task: "Email-lister", desc: "Samla mejl från besökare. Skicka erbjudanden, nyheter, kampanjer. Det är din billigaste kanal långsiktigt." },
                { task: "Sociala medier", desc: "Visa produkter på Instagram/TikTok. Det är gratis och kan generera enormt mycket trafik. Men det tar tid." },
              ].map((item) => (
                <div key={item.task} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.task}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Realistiska förväntningar */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Realistiska förväntningar — Din första år
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Med god planering och hårt arbete:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { period: "Månad 1-2", expect: "Nästan ingen försäljning. Du bygger, optimerar och lär dig. 0-2 beställningar per vecka kanske." },
                { period: "Månad 3-4", expect: "Försäljningen börjar stiga. Du har gjort SEO och testat annonsering. 5-10 beställningar per vecka." },
                { period: "Månad 5-6", expect: "Din bästa månad än så länge om du gjort jobbet. Månadlig omsättning på 20 000-50 000 kr." },
                { period: "År två", expect: "Du har lärt dig vad som funkar. Månadlig omsättning på 50 000-150 000 kr är realistisk om du har populära produkter." },
              ].map((item) => (
                <div key={item.period} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-1">{item.period}</p>
                  <p className="text-[14px] text-body">{item.expect}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8 flex gap-3">
              <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-[15px] text-body">
                <span className="font-600 text-heading">Verklig siffra:</span> De flesta webshops gör mindre än 20 000 kr i månadlig omsättning första året. Det är inte misslyckande — det är realt. Du måste växa långsamt och lära dig vad som funkar.
              </p>
            </div>

            {/* Checklista */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Din e-handel checklista
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Innan du lanserar, säkerställ att du har:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Plattform vald och konfigurerad",
                "Betalmetoder integrerade (minst 2)",
                "Privacy policy och användarvillkor skrivna",
                "Returpolicy utformad",
                "Produkter fotograferade och beskrivna",
                "SEO-optimering gjord på produktsidor",
                "Fraktmetoder konfigurerade",
                "Email-motionstjänst satt upp",
                "Google Analytics installerad",
                "Google Merchant Center konfigurerad",
                "Juridisk review genomförd",
                "Moms-registrering gjord (om behövs)",
                "Testbeställning gjord från start till slut",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-[15px]">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Relaterad läsning */}
            <div className="my-12 pt-8 border-t border-border">
              <p className="text-[13px] text-muted uppercase tracking-wide mb-4 font-600">Läs också</p>
              <div className="space-y-2">
                <a href="/tjanster/webbutveckling" className="flex items-center gap-2 text-[15px] text-primary hover:text-primary-dark transition-colors font-500">
                  E-handelslösningar <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[20px] sm:text-[24px] font-800 text-white font-heading mb-4">
                Redo att starta din webshop?
              </h3>
              <p className="text-[15px] text-white/80 mb-6 leading-relaxed">
                Vi hjälper hundratals e-handlare i Sverige att bygga, lansera och växa sina webshops. Från Shopify-setup till fullständig custom-lösning.
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
