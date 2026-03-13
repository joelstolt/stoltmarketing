"use client";

import { Reveal, PageHero } from "@/components/ui";

const sections = [
  {
    title: "1. Personuppgiftsansvarig",
    content: `Stolt Marketing, med säte i Hässleholm, Sverige, är personuppgiftsansvarig för behandlingen av dina personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR).

Kontaktuppgifter:
Joel Stolt
E-post: joel@stoltmarketing.se
Ort: Hässleholm, Sverige`,
  },
  {
    title: "2. Vilka uppgifter samlar vi in?",
    content: `Vi kan komma att samla in följande personuppgifter:

• Kontaktuppgifter — namn, e-postadress, telefonnummer och företagsnamn som du lämnar via vårt kontaktformulär.
• Teknisk data — IP-adress, webbläsartyp, enhet och operativsystem vid besök på webbplatsen.
• Användningsdata — information om hur du interagerar med webbplatsen, vilka sidor du besöker och hur länge du stannar.`,
  },
  {
    title: "3. Hur använder vi dina uppgifter?",
    content: `Vi behandlar dina personuppgifter för följande ändamål:

• Kontakt och kommunikation — för att besvara förfrågningar du skickar via kontaktformuläret eller e-post.
• Förbättring av tjänsten — för att analysera och förbättra webbplatsens innehåll och prestanda.
• Statistik och analys — för att förstå hur besökare använder webbplatsen (via anonymiserad data).

Rättslig grund: Berättigat intresse (webbplatsanalys) och samtycke (kontaktformulär).`,
  },
  {
    title: "4. Cookies",
    content: `Webbplatsen kan använda cookies för att förbättra din upplevelse. Cookies är små textfiler som lagras på din enhet.

Vi kan använda:
• Nödvändiga cookies — som krävs för att webbplatsen ska fungera korrekt.
• Analyscookies — för att samla in anonymiserad statistik om besökare (t.ex. Google Analytics).

Du kan när som helst ändra dina cookie-inställningar i din webbläsare. Observera att detta kan påverka webbplatsens funktionalitet.`,
  },
  {
    title: "5. Tredjeparter",
    content: `Vi kan komma att dela data med följande tredjeparter:

• Vercel — hosting och leverans av webbplatsen.
• Google Analytics — anonymiserad besöksstatistik (om aktiverat).

Vi säljer aldrig dina personuppgifter till tredje part.`,
  },
  {
    title: "6. Lagring och säkerhet",
    content: `Dina personuppgifter lagras så länge det är nödvändigt för att uppfylla de ändamål som beskrivs i denna policy. Kontaktuppgifter som lämnas via formuläret sparas tills ärendet är avslutat, om inte annat avtalats.

Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller missbruk.`,
  },
  {
    title: "7. Dina rättigheter",
    content: `Enligt GDPR har du rätt att:

• Begära tillgång — få veta vilka personuppgifter vi behandlar om dig.
• Begära rättelse — korrigera felaktiga eller ofullständiga uppgifter.
• Begära radering — be oss radera dina personuppgifter ("rätten att bli glömd").
• Begära begränsning — begränsa behandlingen av dina uppgifter.
• Invända — invända mot behandling baserad på berättigat intresse.
• Dataportabilitet — få ut dina uppgifter i ett maskinläsbart format.

Kontakta joel@stoltmarketing.se för att utöva dina rättigheter. Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).`,
  },
  {
    title: "8. Ändringar i denna policy",
    content: `Vi kan komma att uppdatera denna integritetspolicy. Vid väsentliga ändringar informerar vi om detta på webbplatsen. Senast uppdaterad: mars 2026.`,
  },
];

export default function IntegritetContent() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Integritetspolicy" },
        ]}
        badge="Juridiskt"
        title="Integritetspolicy"
        subtitle="Så hanterar Stolt Marketing dina personuppgifter. Vi värnar om din integritet och följer GDPR."
      />

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          {sections.map((section, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="mb-10">
                <h2 className="font-heading font-700 text-[20px] text-heading tracking-tight mb-4">
                  {section.title}
                </h2>
                <div className="text-[15px] leading-relaxed text-body whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-[14px] text-muted">
                Har du frågor om hur vi hanterar dina personuppgifter?
                Kontakta oss på{" "}
                <a
                  href="mailto:joel@stoltmarketing.se"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  joel@stoltmarketing.se
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
