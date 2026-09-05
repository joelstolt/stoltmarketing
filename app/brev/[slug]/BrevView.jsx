"use client";

import { useEffect } from "react";
import { KONTAKT, PAKET } from "@/lib/brev/mottagare";

/* Sidan öppnas genom att någon skannar QR-koden i ett handskrivet brev.
   Den läses alltså på en telefon, stående, av en företagare som just
   fått posten. Därför: kort, inga animationer som fördröjer första
   intrycket, och siffrorna först eftersom det är dem brevet lovade. */

function Matning({ etikett, varde, kommentar }) {
  return (
    <div className="border border-[#E6DEC9] bg-white rounded-lg p-4">
      <div className="text-[0.7rem] uppercase tracking-[0.16em] text-[#7A7263] font-semibold">
        {etikett}
      </div>
      <div className="text-[clamp(1.6rem,6vw,2.1rem)] leading-tight font-semibold text-[#1A1611] mt-1">
        {varde}
      </div>
      {kommentar && (
        <div className="text-sm text-[#7A7263] mt-1 leading-snug">{kommentar}</div>
      )}
    </div>
  );
}

export default function BrevView({ m }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track("brev-scan", { slug: m.slug, bolag: m.namn });
    }
  }, [m.slug, m.namn]);

  const klick = (namn) => {
    if (typeof window !== "undefined" && window.umami) {
      window.umami.track(namn, { slug: m.slug });
    }
  };

  const psi = typeof m.psi === "number" ? m.psi : null;
  const domän = (m.sajt || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <main className="min-h-screen bg-[#FAF5EC] text-[#1A1611]">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">

        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[#9A7409] font-semibold">
          Genomgång av {domän}
        </p>

        <h1 className="text-[clamp(1.9rem,7vw,2.9rem)] leading-[1.1] font-semibold mt-3">
          Hej {m.fornamn || "där"}.
        </h1>

        <p className="text-[clamp(1rem,3.6vw,1.15rem)] leading-relaxed text-[#433D33] mt-4">
          Tack för att du skannade. Det här är vad jag faktiskt mätte på er sajt
          innan jag skrev brevet, och vad jag skulle göra åt det.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          {psi !== null && (
            <Matning
              etikett="Laddtid, Google PageSpeed"
              varde={`${psi} av 100`}
              kommentar={
                psi < 50
                  ? "Under 50. Många besökare hinner lämna innan sidan syns."
                  : psi < 70
                  ? "Godkänt men långsamt på mobil, där de flesta hittar er."
                  : "Farten är det inget större fel på."
              }
            />
          )}
          {typeof m.betyg === "number" && (
            <Matning
              etikett="Ert rykte"
              varde={`${m.betyg} av 5`}
              kommentar={`På ${m.recensioner} recensioner. Det är jobbet, inte sajten.`}
            />
          )}
          {m.tech && (
            <Matning
              etikett="Sajten är byggd i"
              varde={m.tech === "custom" ? "Egen kod" : m.tech}
            />
          )}
          {typeof m.tillganglighet === "number" && (
            <Matning
              etikett="Tillgänglighet"
              varde={`${m.tillganglighet} av 100`}
              kommentar="Krav sedan tillgänglighetsdirektivet."
            />
          )}
        </div>

        <h2 className="text-[clamp(1.3rem,4.5vw,1.6rem)] font-semibold mt-12">
          Vad jag skulle göra
        </h2>
        <ul className="mt-4 space-y-3 text-[#433D33] leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[#9A7409] font-semibold shrink-0">1.</span>
            <span>
              Bygga om sajten så den laddar direkt på mobil, där de flesta som
              söker efter {(m.bransch || "er tjänst").toLowerCase()} i {m.ort} hittar er.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#9A7409] font-semibold shrink-0">2.</span>
            <span>
              Ge er en sida per tjänst och ort, så att ni syns på det folk
              faktiskt söker på och inte bara på ert firmanamn.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#9A7409] font-semibold shrink-0">3.</span>
            <span>
              Sätta mätning på telefonknappen och formuläret, så ni ser vilka
              sidor som ger jobb i stället för att gissa.
            </span>
          </li>
        </ul>

        <div className="border border-[#E6DEC9] bg-white rounded-xl p-6 mt-10">
          <div className="text-[0.7rem] uppercase tracking-[0.16em] text-[#7A7263] font-semibold">
            Vad det kostar
          </div>
          <div className="text-[clamp(1.7rem,6vw,2.3rem)] font-semibold mt-2 leading-tight">
            {PAKET.pris}
          </div>
          <p className="text-[#433D33] mt-3 leading-relaxed">{PAKET.villkor}</p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          {KONTAKT.telefon && (
            <a
              href={`tel:${KONTAKT.telefon.replace(/\s/g, "")}`}
              onClick={() => klick("brev-ring")}
              className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-[#1A1611] text-[#FAF5EC] px-6 py-4 font-semibold hover:bg-[#433D33] transition-colors"
            >
              Ring {KONTAKT.telefon}
            </a>
          )}
          <a
            href={`mailto:${KONTAKT.epost}?subject=${encodeURIComponent(`Brevet om ${domän}`)}`}
            onClick={() => klick("brev-mejl")}
            className="cursor-pointer inline-flex items-center justify-center rounded-lg border border-[#1A1611] px-6 py-4 font-semibold hover:bg-[#E6DEC9] transition-colors"
          >
            Mejla mig i stället
          </a>
        </div>

        <p className="text-sm text-[#7A7263] mt-10 leading-relaxed">
          Vill du inte höra mer så säg bara till, då hör jag inte av mig igen.
        </p>

        <p className="text-sm text-[#A89F8D] mt-8 pt-6 border-t border-[#E6DEC9]">
          Joel Stolt, Stolt Marketing
        </p>
      </div>
    </main>
  );
}
