// ============================================================
// PDF-generator för Insyn-rapporter — byggd med pdf-lib (ren JS).
// Ersätter @react-pdf/renderer, som kräver runtime-WASM (yoga-layout)
// och därför inte kan köra på Cloudflare Workers.
// Samma layout som tidigare: header, 4 statistikkort, 6 listsektioner, footer.
// Endast standardteckensnitt (Helvetica) — ingen fontinbäddning behövs.
// ============================================================

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// A4 i punkter
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const PAD = 48;

function hex(h) {
  const n = parseInt(h.slice(1), 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

const COLORS = {
  ink: hex("#0C0F1A"),
  gray: hex("#6B7280"),
  blue: hex("#1D4ED8"),
  border: hex("#E5E5E0"),
  bg: hex("#FAFAF8"),
  white: rgb(1, 1, 1),
  faint: hex("#9CA3AF"),
  key: hex("#3B3F4A"),
  rowline: hex("#F0F0EC"),
};

// pdf-lib:s standardfonter kodar text som WinAnsi (CP1252). Sanera bort tecken
// som inte kan kodas — annars kastar drawText. Normalisera särskilt sv-SE:s
// smala no-break space (U+202F), som Intl använder som tusentalsavgränsare.
function safe(s) {
  return String(s ?? "")
    .replace(/[    ]/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(
      /[^\x20-\x7EÅåÄäÖöÉéÜü·]/g,
      ""
    );
}

function fmt(n) {
  if (n === null || n === undefined) return "-";
  return new Intl.NumberFormat("sv-SE").format(Math.round(n));
}

function fmtDuration(seconds) {
  if (!seconds || seconds <= 0) return "-";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function countryName(code) {
  if (!code) return "Okänd";
  try {
    const dn = new Intl.DisplayNames(["sv"], { type: "region" });
    return dn.of(code.toUpperCase()) || code;
  } catch {
    return code;
  }
}

export async function buildReportPdf({ client, range, report }) {
  const doc = await PDFDocument.create();
  doc.setTitle(`Insyn — ${client.name}`);
  doc.setAuthor("Stolt Marketing");
  doc.setSubject(`Trafikrapport för ${client.domain}`);

  const page = doc.addPage([PAGE_W, PAGE_H]);
  const reg = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  // Bakgrund
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_W,
    height: PAGE_H,
    color: COLORS.bg,
  });

  const contentW = PAGE_W - PAD * 2;

  // Text top-ankrat: topY = avstånd från sidans överkant till radens topp.
  const text = (txt, x, topY, size, font, color) =>
    page.drawText(safe(txt), {
      x,
      y: PAGE_H - topY - size,
      size,
      font,
      color,
    });
  const widthOf = (txt, size, font) =>
    font.widthOfTextAtSize(safe(txt), size);
  const textRight = (txt, rightX, topY, size, font, color) =>
    text(txt, rightX - widthOf(txt, size, font), topY, size, font, color);
  const hline = (x1, x2, topY, thickness, color) =>
    page.drawLine({
      start: { x: x1, y: PAGE_H - topY },
      end: { x: x2, y: PAGE_H - topY },
      thickness,
      color,
    });

  let y = PAD; // avstånd från toppen

  // ---- Header ----
  text("INSYN · TRAFIKRAPPORT", PAD, y, 8, bold, COLORS.gray);
  y += 8 + 6;
  text(client.name, PAD, y, 24, bold, COLORS.ink);
  y += 24 + 4;
  text(client.domain, PAD, y, 11, reg, COLORS.gray);
  y += 11 + 8;
  text(range.label, PAD, y, 11, bold, COLORS.blue);
  y += 11 + 20;

  // ---- Divider ----
  hline(PAD, PAD + contentW, y, 1, COLORS.border);
  y += 24;

  // ---- Statistik ----
  const stats = report.stats || {};
  const visits = stats.visits || 0;
  const totaltime = stats.totaltime || 0;
  const bounceRate = visits > 0 ? (stats.bounces / visits) * 100 : 0;
  const avgSession = visits > 0 ? totaltime / visits : 0;

  const cards = [
    { label: "UNIKA BESÖKARE", value: fmt(stats.visitors), sub: null },
    {
      label: "SIDVISNINGAR",
      value: fmt(stats.pageviews),
      sub:
        visits > 0 ? `${(stats.pageviews / visits).toFixed(1)} per besök` : null,
    },
    {
      label: "BESÖK",
      value: fmt(stats.visits),
      sub: `Avvisning ${bounceRate.toFixed(0)}%`,
    },
    {
      label: "SNITT-SESSION",
      value: fmtDuration(avgSession),
      sub: `Total tid ${fmtDuration(totaltime)}`,
    },
  ];
  const gap = 12;
  const cardW = (contentW - gap * 3) / 4;
  const cardH = 62;
  cards.forEach((c, i) => {
    const x = PAD + i * (cardW + gap);
    page.drawRectangle({
      x,
      y: PAGE_H - y - cardH,
      width: cardW,
      height: cardH,
      color: COLORS.white,
      borderColor: COLORS.border,
      borderWidth: 1,
    });
    text(c.label, x + 12, y + 12, 7.5, bold, COLORS.gray);
    text(c.value, x + 12, y + 12 + 7.5 + 7, 18, bold, COLORS.ink);
    if (c.sub) text(c.sub, x + 12, y + 12 + 7.5 + 7 + 18 + 6, 7.5, reg, COLORS.faint);
  });
  y += cardH + 26;

  // ---- Två-kolumns listsektioner ----
  const colW = (contentW - 16) / 2;
  const colLX = PAD;
  const colRX = PAD + colW + 16;

  function drawList(colX, topY, title, items, formatKey) {
    let cy = topY;
    text(title, colX, cy, 13, bold, COLORS.ink);
    cy += 13 + 10;
    const list = (items || []).slice(0, 6);
    const rowH = 17;
    const boxPad = 10;
    const boxH = boxPad * 2 + Math.max(1, list.length) * rowH;
    page.drawRectangle({
      x: colX,
      y: PAGE_H - cy - boxH,
      width: colW,
      height: boxH,
      color: COLORS.white,
      borderColor: COLORS.border,
      borderWidth: 1,
    });
    let ry = cy + boxPad;
    if (list.length === 0) {
      text("Ingen data", colX + 12, ry + 4, 9, reg, COLORS.faint);
    } else {
      list.forEach((item, i) => {
        let key = formatKey ? formatKey(item.x) : item.x ?? "-";
        key = String(key);
        if (key.length > 34) key = key.slice(0, 34) + "...";
        text(key, colX + 12, ry + 4, 9, reg, COLORS.key);
        textRight(fmt(item.y), colX + colW - 12, ry + 4, 9, bold, COLORS.ink);
        if (i < list.length - 1) {
          hline(colX + 12, colX + colW - 12, ry + rowH, 0.5, COLORS.rowline);
        }
        ry += rowH;
      });
    }
    return cy + boxH; // botten (avstånd från topp)
  }

  const rows = [
    [
      {
        title: "Mest besökta sidor",
        items: report.pages,
        fk: (s) => (s === "/" ? "Startsida" : s),
      },
      {
        title: "Trafikkällor",
        items: report.referrers,
        fk: (s) => s || "Direkttrafik",
      },
    ],
    [
      { title: "Enheter", items: report.devices, fk: null },
      { title: "Länder", items: report.countries, fk: countryName },
    ],
    [
      { title: "Webbläsare", items: report.browsers, fk: null },
      { title: "Operativsystem", items: report.os, fk: null },
    ],
  ];
  for (const [left, right] of rows) {
    const bL = drawList(colLX, y, left.title, left.items, left.fk);
    const bR = drawList(colRX, y, right.title, right.items, right.fk);
    y = Math.max(bL, bR) + 16;
  }

  // ---- Footer (absolut nära botten) ----
  const generatedAt = new Date().toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Stockholm",
  });
  const footer = `Rapport genererad ${generatedAt} · Stolt Marketing · Data via Umami (GDPR-kompatibel, inga cookies)`;
  const fSize = 8;
  const fW = widthOf(footer, fSize, reg);
  page.drawLine({
    start: { x: PAD, y: 40 },
    end: { x: PAD + contentW, y: 40 },
    thickness: 0.5,
    color: COLORS.border,
  });
  page.drawText(safe(footer), {
    x: (PAGE_W - fW) / 2,
    y: 26,
    size: fSize,
    font: reg,
    color: COLORS.faint,
  });

  return await doc.save();
}
