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

  const src = `${UMAMI_BASE}/share/${share.umamiSlug}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      {/* Minimal Stolt-banner */}
      <header className="border-b border-[#E5E5E0] bg-white shrink-0">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="text-xs uppercase tracking-[0.18em] text-[#6B7280] font-semibold">
              Rapport
            </div>
            <span className="text-[#E5E5E0]">·</span>
            <h1 className="text-base md:text-lg font-bold text-[#0C0F1A] tracking-tight">
              {share.name}
            </h1>
            <a
              href={`https://${share.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#1D4ED8] ml-1"
            >
              {share.domain}
              <ExternalLink size={12} />
            </a>
          </div>
          <a
            href="https://stoltmarketing.se"
            className="text-xs text-[#9CA3AF] hover:text-[#1D4ED8]"
          >
            Levererad av Stolt Marketing
          </a>
        </div>
      </header>

      {/* Fullscreen iframe */}
      <iframe
        src={src}
        title={`Trafikrapport ${share.name}`}
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100vh - 56px)" }}
        loading="lazy"
        allow="fullscreen"
      />
    </div>
  );
}
