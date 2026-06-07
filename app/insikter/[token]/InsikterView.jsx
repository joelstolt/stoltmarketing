"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, AlertCircle, Mail, ExternalLink } from "lucide-react";

function CopyButton({ value, label, variant = "primary" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      alert("Kunde inte kopiera: " + e.message);
    }
  };

  const baseStyle =
    "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-[#0C0F1A] text-white hover:bg-[#1D4ED8]"
      : "bg-white text-[#0C0F1A] border border-[#E5E5E0] hover:border-[#0C0F1A]";

  return (
    <button type="button" onClick={handleCopy} className={`${baseStyle} ${styles}`}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Kopierat!" : label}
    </button>
  );
}

async function copyHTMLToClipboard(html, plainText) {
  // Skriver både HTML och plain till clipboard så Gmail kan klistra in rikt
  if (navigator.clipboard && window.ClipboardItem) {
    const blobHtml = new Blob([html], { type: "text/html" });
    const blobText = new Blob([plainText || html.replace(/<[^>]+>/g, " ")], {
      type: "text/plain",
    });
    await navigator.clipboard.write([
      new ClipboardItem({ "text/html": blobHtml, "text/plain": blobText }),
    ]);
  } else {
    await navigator.clipboard.writeText(html);
  }
}

function CopyHTMLButton({ html }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await copyHTMLToClipboard(html);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (e) {
          alert("Kunde inte kopiera: " + e.message);
        }
      }}
      className="premium-btn !py-3 !px-5 !text-sm"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Kopierat — klistra in i Gmail" : "Kopiera mejl-HTML"}
    </button>
  );
}

export default function InsikterView({
  token,
  rangeKey,
  months,
  result,
  error,
}) {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="border-b border-[#E5E5E0] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#6B7280] font-semibold mb-1">
              Internt · AI-Insikter
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0C0F1A] tracking-tight">
              Månadsrapport — alla kunder
            </h1>
            <div className="text-sm text-[#6B7280] mt-1">
              Generera AI-genererade insikter, granska och mejla manuellt.
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Period-väljare */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <span className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold mr-1">
            Månad:
          </span>
          {months.map((m) => {
            const active = m.key === rangeKey;
            return (
              <Link
                key={m.key}
                href={`/insikter/${token}?range=${m.key}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-[#0C0F1A] text-white"
                    : "bg-white text-[#3B3F4A] border border-[#E5E5E0] hover:border-[#0C0F1A]"
                }`}
              >
                {m.label}
              </Link>
            );
          })}
        </div>

        {error || !result?.ok ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <div className="flex items-center gap-2 text-red-900 font-semibold mb-1">
              <AlertCircle size={18} />
              Kunde inte generera rapport
            </div>
            <div className="text-sm text-red-700">{error || "Okänt fel"}</div>
          </div>
        ) : (
          <>
            {/* Sammanfattning */}
            <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold mb-1">
                    Rapportperiod
                  </div>
                  <div className="text-xl font-bold text-[#0C0F1A]">
                    {result.range.label}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold mb-1">
                    Kunder med data
                  </div>
                  <div className="text-xl font-bold text-[#0C0F1A]">
                    {result.reports.filter((r) => r.ok).length} / {result.reports.length}
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#3B3F4A] mb-4">
                <span className="font-semibold">Ämne:</span> {result.subject}
              </div>

              <ul className="space-y-1 text-sm mb-4">
                {result.reports.map((r) => (
                  <li
                    key={r.slug}
                    className={`flex items-center gap-2 ${
                      r.ok ? "text-[#3B3F4A]" : "text-red-700"
                    }`}
                  >
                    <span>{r.ok ? "✓" : "✗"}</span>
                    <span className="font-medium">{r.name}</span>
                    <span className="text-[#9CA3AF]">{r.domain}</span>
                    {r.error && (
                      <span className="text-red-600 text-xs">— {r.error}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Copy-knappar */}
              <div className="flex gap-3 flex-wrap pt-4 border-t border-[#E5E5E0]">
                <CopyHTMLButton html={result.html} />
                <CopyButton
                  value={result.subject}
                  label="Kopiera ämnesrad"
                  variant="secondary"
                />
                <a
                  href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=joel@stoltmarketing.se&su=${encodeURIComponent(result.subject)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#0C0F1A] border border-[#E5E5E0] hover:border-[#0C0F1A]"
                >
                  <Mail size={16} />
                  Öppna Gmail compose
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="mt-4 text-xs text-[#6B7280] leading-relaxed">
                <strong>Så här gör du:</strong> 1) Klicka "Kopiera mejl-HTML" 2) Öppna Gmail (eller använd knappen ovan) 3) Klistra in i compose-fönstret (Cmd+V — Gmail renderar HTML automatiskt) 4) Klistra in ämnesraden 5) Lägg till mottagare och skicka.
              </div>
            </div>

            {/* Förhandsvisning */}
            <div className="rounded-2xl border border-[#E5E5E0] bg-white overflow-hidden">
              <div className="px-6 py-3 border-b border-[#E5E5E0] flex items-center justify-between">
                <div className="text-sm font-semibold text-[#0C0F1A]">
                  Mejl-förhandsvisning
                </div>
                <div className="text-xs text-[#9CA3AF]">
                  Så här ser mejlet ut för mottagaren
                </div>
              </div>
              <iframe
                srcDoc={result.html}
                title="Mejl-förhandsvisning"
                className="w-full border-0"
                style={{ height: "900px" }}
                sandbox="allow-same-origin"
              />
            </div>
          </>
        )}

        <footer className="mt-10 pt-6 border-t border-[#E5E5E0] text-xs text-[#9CA3AF] flex justify-between flex-wrap gap-3">
          <span>
            Genererad live · Cachat 6h per (kund, period) ·{" "}
            <code className="bg-[#F4F4F1] px-1 py-0.5 rounded">/insikter/{token}</code>
          </span>
          <span>Inte indexerad · Endast du som har länken kommer åt</span>
        </footer>
      </main>
    </div>
  );
}
