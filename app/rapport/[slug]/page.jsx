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

      {/* Fullscreen iframe. Inte lazy: den ÄR sidan. Lazy vinner ingenting när
          ramen fyller hela vyn, och lägger till ett läge där rapporten står tom
          om intersection-observern aldrig triggar. */}
      <iframe
        src={src}
        title={`Trafikrapport ${share.name}`}
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100vh - 56px)" }}
        loading="eager"
        allow="fullscreen"
      />
    </div>
  );
}
