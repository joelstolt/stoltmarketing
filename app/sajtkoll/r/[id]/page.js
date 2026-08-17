import { getCloudflareContext } from "@opennextjs/cloudflare";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/** Delbart sajtkoll-resultat: läses ur D1, renderas server-side, read-only.
    Noindex: delade resultat är användardata, inte sajtinnehåll. */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: "Delat sajtkoll-resultat",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://www.stoltmarketing.se/sajtkoll" },
  };
}

const GUL = "#F2C230";
const LINE = "rgba(242,236,221,0.14)";

function Rad({ c }) {
  const state = c.pass ? "pass" : c.warn ? "warn" : "fail";
  const color = state === "pass" ? GUL : state === "warn" ? "#D9B96A" : "#C97B5E";
  const tecken = state === "pass" ? "✓" : state === "warn" ? "!" : "✗";
  return (
    <div className="py-4 flex items-start gap-4" style={{ borderBottom: `1px solid ${LINE}` }}>
      <span className="flex items-center justify-center flex-shrink-0 mt-0.5" style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(242,236,221,0.07)", color, fontWeight: 700 }}>{tecken}</span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <span className="text-[15px] font-500 text-heading">{c.label}</span>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", color }}>{c.value}</span>
        </div>
        <p className="text-[13.5px] text-muted mt-1 mb-0 leading-relaxed">{c.detail}</p>
      </div>
    </div>
  );
}

export default async function DelatResultat({ params }) {
  const { id } = await params;
  let resultat = null;
  try {
    const { env } = getCloudflareContext();
    const row = await env.DB.prepare("SELECT data, created_at FROM results WHERE id = ?1")
      .bind(String(id))
      .first();
    if (row) resultat = { ...JSON.parse(row.data), created_at: row.created_at };
  } catch {}

  return (
    <>
      <Header />
      <main>
        <section className="hero-dark field-glow relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-12">
            <span className="eyebrow">Delat resultat</span>
            {!resultat ? (
              <>
                <h1 className="mt-6 font-heading text-[clamp(32px,4.5vw,52px)] leading-[1.06] text-heading" style={{ fontWeight: 400 }}>
                  Resultatet finns inte längre.
                </h1>
                <p className="mt-5 text-[16px] text-body max-w-[520px]">
                  Delade resultat sparas i 90 dagar. Kör en ny mätning så får du en färsk rapport på tio sekunder.
                </p>
                <div className="mt-8">
                  <a href="/sajtkoll" className="premium-btn">Testa en sajt gratis <ArrowRight size={15} /></a>
                </div>
              </>
            ) : (
              <>
                <h1 className="mt-6 font-heading text-[clamp(28px,4vw,44px)] leading-[1.08] text-heading" style={{ fontWeight: 400 }}>
                  Sajtkoll för {resultat.url.replace(/^https?:\/\//, "")}
                </h1>
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="font-heading" style={{ fontSize: "clamp(52px,7vw,76px)", lineHeight: 1, fontWeight: 340, fontVariationSettings: '"opsz" 144', color: resultat.score >= 85 ? GUL : resultat.score >= 60 ? "#D9B96A" : "#C97B5E" }}>
                    {resultat.score}
                  </span>
                  <span className="text-[15px] text-muted">av 100</span>
                </div>
                <p className="font-heading text-[clamp(17px,2.2vw,22px)] text-heading mt-2 mb-0 max-w-[480px]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                  {resultat.verdict}
                </p>
              </>
            )}
          </div>
        </section>

        {resultat && (
          <section className="py-12 sm:py-16 px-5 sm:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-7 sm:p-9 rounded-[14px]" style={{ background: "#161309", border: `1px solid ${LINE}` }}>
                {resultat.ai && (
                  <div className="mb-6 p-5 rounded-[10px]" style={{ background: "rgba(242,194,48,0.07)", border: "1px solid rgba(242,194,48,0.2)" }}>
                    <p className="text-[15px] leading-relaxed text-body m-0">{resultat.ai}</p>
                    <p className="text-[11.5px] text-faint mt-2 mb-0" style={{ fontFamily: "var(--font-ui)" }}>Sammanfattning framtagen automatiskt ur mätvärdena.</p>
                  </div>
                )}
                <div>
                  {resultat.checks.map((c) => (
                    <Rad key={c.id} c={c} />
                  ))}
                </div>
                <div className="mt-8 p-6 rounded-[12px] flex flex-wrap items-center justify-between gap-5" style={{ background: "linear-gradient(135deg, rgba(242,194,48,0.13), rgba(242,194,48,0.04))", border: "1px solid rgba(242,194,48,0.28)" }}>
                  <p className="text-[15px] text-body m-0 max-w-[480px]">
                    Vill du se hur din egen sajt står sig? 14 kontroller på tio sekunder, gratis och utan registrering.
                  </p>
                  <a href="/sajtkoll" className="premium-btn">Testa din sajt <ArrowRight size={15} /></a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
