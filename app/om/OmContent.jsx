import { Badge } from "@/components/ui";

const experience = [
  { title: "Hemsidor och WordPress", text: "Jag började med webbplatser åt lokala företag och arbetar med design, innehåll, drift och kundkontakt. WordPress kan vara rätt val när det passar redigering och funktioner." },
  { title: "E-handel", text: "Jag bygger och förvaltar butiker med betalning, produktinformation och integrationer. I min egen butik Batteriproffs följer jag också beställningar och hur köpflödet fungerar." },
  { title: "Publicering för redaktioner", text: "För Linguista och EdShare har jag arbetat med ombyggnad och innehållssystem. Redaktionen ska kunna ändra innehåll med ett arbetssätt som passar verksamheten." },
  { title: "AI och automation", text: "Jag använder AI som stöd för avgränsade uppgifter och bygger flöden där det behövs. Kunduppgifter, priser och utskick kräver rätt underlag och kontroll." },
];
const products = [
  { name: "Kvota", text: "Offertutkast för hantverkare med AI-stöd och användarens kontroll av pris och villkor.", href: "https://kvota.se" },
  { name: "Granska", text: "Automatiska kontroller av webbtillgänglighet. Resultatet är ett deltest, inte ett intyg om lagefterlevnad.", href: "https://granska.io" },
  { name: "Konforma", text: "Stöd för att arbeta med CE-dokumentation och underlag för maskiner.", href: "https://konforma.se" },
  { name: "Tryggadokument", text: "Digitalt arbetsflöde för dokument och framtidsfullmakter.", href: "https://tryggadokument.se" },
  { name: "Efterbo", text: "Digitalt stöd för arbetet med bouppteckning.", href: "https://efterbo.se" },
];
export default function OmContent() {
  return <>
    <section className="hero-dark px-5 sm:px-8 pt-24 sm:pt-28 pb-10 sm:pb-14"><div className="max-w-6xl mx-auto">
      <nav aria-label="Brödsmulor" className="text-[14px] text-muted mb-7"><a href="/" className="hover:text-heading">Start</a><span aria-hidden="true"> / </span><span aria-current="page">Om Joel</span></nav>
      <div className="grid md:grid-cols-[minmax(0,1fr)_300px] gap-8 sm:gap-12 items-start">
        <div><Badge>Om Joel</Badge><h1 className="mt-5 font-heading text-[clamp(38px,5vw,58px)] leading-[1.08] text-heading">Du pratar med den som bygger.</h1>
          <p className="mt-5 text-[18px] text-body leading-[1.7] max-w-[620px]">Jag heter Joel Stolt och utgår från Hässleholm. I över tio år har jag byggt webbplatser och digitala lösningar för lokala företag och utbildningsverksamheter, bland annat inom AcadeMedia.</p>
          <p className="mt-4 text-[17px] leading-relaxed text-body max-w-[620px]">I dag hjälper jag främst hantverksföretag med hemsidor och med att ta hand om förfrågningar. Jag bygger, sköter driften och är din kontakt när något behöver ändras.</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href="/kontakt" className="premium-btn">Skriv till mig</a><a href="/projekt" className="secondary-btn">Se vad jag har byggt</a></div>
        </div>
        <figure><img src="/joel-stolt.webp" alt="Joel Stolt" width="400" height="480" fetchPriority="high" className="w-full max-w-[300px] rounded-xl object-cover object-top"/><figcaption className="mt-3 text-[14px] text-body">Joel Stolt, Stolt Marketing i Hässleholm.</figcaption></figure>
      </div>
    </div></section>
    <section className="px-5 sm:px-8 py-12 sm:py-16"><div className="max-w-6xl mx-auto"><h2 className="font-heading text-[32px] text-heading">Vad jag arbetar med</h2><div className="mt-7 grid sm:grid-cols-2 gap-5">{experience.map(e => <article key={e.title} className="bg-surface border border-border rounded-xl p-6"><h3 className="font-heading text-[24px] text-heading">{e.title}</h3><p className="mt-3 text-[17px] leading-relaxed text-body">{e.text}</p></article>)}</div></div></section>
    <section className="px-5 sm:px-8 py-12 sm:py-16 bg-surface-muted"><div className="max-w-6xl mx-auto"><h2 className="font-heading text-[32px] text-heading">Så fungerar samarbetet</h2><div className="mt-5 max-w-3xl space-y-4 text-[17px] leading-[1.8] text-body"><p>Jag börjar med vad din besökare behöver göra: förstå tjänsten, hitta ett pris, boka eller skicka en fråga. Därefter föreslår jag struktur och teknik.</p><p>För en ny företagssajt kan du få ett gratis, klickbart förslag med startsida och en tjänstesida inom två arbetsdagar. Resten byggs efter ditt ja. Paket, omfattning och tidplan bestäms före arbetet.</p><p>Förfrågningsrutan är ett eget upplägg för att ta emot frågor och ge stöd till svar. Du kan läsa om den på <a href="/forfragningar" className="text-primary underline underline-offset-4">sidan om förfrågningar</a>. Behöver du en hemsida finns <a href="/hemsida-foretag" className="text-primary underline underline-offset-4">hemsideupplägget och villkoren här</a>.</p><p>Jag träffar företag i Skåne och samarbetar även på distans med kunder i andra delar av Sverige. Du får kontakt med mig via mejl, telefon eller ett bokat samtal.</p></div></div></section>
    <section className="px-5 sm:px-8 py-12 sm:py-16"><div className="max-w-6xl mx-auto"><h2 className="font-heading text-[32px] text-heading">Egna produkter jag har byggt</h2><p className="mt-4 text-[17px] leading-relaxed text-body max-w-3xl">Egna projekt ger mig fler tillfällen att arbeta med publicering, betalning och uppföljning. Varje produkt har sin egen omfattning och sina egna villkor.</p><div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{products.map(p => <article key={p.name} className="bg-surface border border-border rounded-xl p-6"><h3 className="font-heading text-[24px] text-heading">{p.name}</h3><p className="mt-3 text-[16px] text-body leading-relaxed">{p.text}</p><a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-primary underline underline-offset-4">Besök {p.name}<span className="sr-only"> (öppnas i ny flik)</span></a></article>)}</div></div></section>
    <section className="section-gul px-5 sm:px-8 py-12"><div className="max-w-3xl mx-auto"><h2 className="font-heading text-[32px] text-heading">Beskriv vad du behöver hjälp med</h2><p className="mt-4 text-[17px] leading-relaxed text-body">Berätta kort om verksamheten och det du vill få att fungera bättre. Jag föreslår nästa steg.</p><a href="/kontakt" className="premium-btn mt-6">Skriv till Joel</a></div></section>
  </>;
}
