import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { getShare, UMAMI_BASE } from "@/lib/insyn/clients";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const share = getShare(slug);
  if (!share) return { title: "Rapport" };
  return {
    title: `Rapport — ${share.name}`,
    description: `Trafikrapport för ${share.domain}.`,
  };
}

export default async function RapportPage({ params }) {
  const { slug } = await params;
  const share = getShare(slug);
  if (!share) notFound();

  // Umami öppnar på senaste dygnet om ingen period anges. För en kund som
  // klickar in en gång i månaden ser det ut som att ingen besöker sajten.
  const src = share.defaultRange
    ? `${UMAMI_BASE}/share/${share.umamiSlug}?date=${share.defaultRange}`
    : `${UMAMI_BASE}/share/${share.umamiSlug}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EC]">
      {/* Minimal Stolt-banner */}
      <header className="border-b border-[#E6DEC9] bg-white shrink-0">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="text-xs uppercase tracking-[0.18em] text-[#7A7263] font-semibold">
              Rapport
            </div>
            <span className="text-[#E6DEC9]">·</span>
            <h1 className="text-base md:text-lg font-bold text-[#1A1611] tracking-tight">
              {share.name}
            </h1>
            <a
              href={`https://${share.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#7A7263] hover:text-[#9A7409] ml-1"
            >
              {share.domain}
              <ExternalLink size={12} />
            </a>
          </div>
          <a
            href="https://www.stoltmarketing.se"
            className="text-xs text-[#A89F8D] hover:text-[#9A7409]"
          >
            Levererad av Stolt Marketing
          </a>
        </div>
      </header>

      {/* Umami-vyn är på engelska och full av branschord. Utan den här raden
          är siffrorna obegripliga för kunden, och en rapport ingen förstår är
          en rapport ingen öppnar igen. Hopfälld som standard så den inte
          tränger undan innehållet. */}
      <details className="border-b border-[#E6DEC9] bg-white shrink-0">
        <summary className="mx-auto max-w-7xl px-6 py-2.5 text-sm text-[#7A7263] cursor-pointer select-none hover:text-[#9A7409]">
          Vad betyder siffrorna?
        </summary>
        <div className="mx-auto max-w-7xl px-6 pb-5 pt-1 text-[13.5px] leading-relaxed text-[#4A443B]">
          <p className="mb-3 text-[#7A7263]">
            Rutorna högst upp gäller den period som står i menyn uppe till höger.
            Ändra period där om du vill titta på en annan tid.
          </p>
          <dl className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {[
              ["Visitors", "Antal personer. Samma person som kommer tillbaka flera gånger räknas en gång."],
              ["Visits", "Antal besök. Kommer samma person tillbaka en annan dag blir det ett nytt besök."],
              ["Views", "Antal sidvisningar. Klickar någon runt på fem sidor blir det fem."],
              ["Bounce rate", "Andel besök där personen såg en enda sida. Högt är inte alltid dåligt: den som hittar telefonnumret direkt och ringer räknas som en studs."],
              ["Visit duration", "Hur länge ett besök varar i snitt."],
              ["Pages", "Vilka sidor som besöks. Entry page är sidan de kom in på, exit page den de lämnade från."],
              ["Referrers", "Var besökarna kom ifrån. Sökningar på Google syns som google."],
              ["Devices", "Mobil, dator eller surfplatta."],
            ].map(([term, forklaring]) => (
              <div key={term} className="sm:flex sm:gap-3">
                <dt className="font-semibold text-[#1A1611] sm:w-[104px] sm:shrink-0">{term}</dt>
                <dd className="sm:flex-1">{forklaring}</dd>
              </div>
            ))}
            {share.eventNamn ? (
              <div className="sm:flex sm:gap-3">
                <dt className="font-semibold text-[#1A1611] sm:w-[104px] sm:shrink-0">Events</dt>
                <dd className="sm:flex-1">
                  Saker vi mäter särskilt. <strong>{share.eventNamn}</strong> betyder att{" "}
                  {share.eventBetyder}. Det är den siffra som är värd mest av alla här.
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </details>

      {/* Fullscreen iframe. Inte lazy: den ÄR sidan. Lazy vinner ingenting när
          ramen fyller hela vyn, och lägger till ett läge där rapporten står tom
          om intersection-observern aldrig triggar. */}
      <iframe
        src={src}
        title={`Trafikrapport ${share.name}`}
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100vh - 104px)" }}
        loading="eager"
        allow="fullscreen"
      />
    </div>
  );
}
