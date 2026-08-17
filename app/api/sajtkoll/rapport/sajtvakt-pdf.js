// ============================================================
// PDF-generator för Sajtvakten-rapporter. pdf-lib (ren JS, Workers-säker,
// samma väg som insyn-rapporten: ALDRIG react-pdf på Workers).
// Layout: mörk header med varumärket, stor poäng, bedömning, "Börja här",
// alla kontroller med statusfärg, footer med kontakt. Flödar till sida 2
// vid behov.
// ============================================================

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const PAD = 52;

function hex(h) {
  const n = parseInt(h.slice(1), 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

const C = {
  natt: hex("#0F0D08"),
  papper: hex("#F7F3E8"),
  vit: rgb(1, 1, 1),
  ink: hex("#1A1611"),
  gra: hex("#6B6B63"),
  faint: hex("#9B958A"),
  gul: hex("#DFA616"),
  gulLjus: hex("#F2C230"),
  gron: hex("#1A7F37"),
  amber: hex("#B58900"),
  rod: hex("#C0392B"),
  rad: hex("#EFEBDF"),
};

// WinAnsi-sanering (samma regler som insyn-pdf:en)
function safe(s) {
  return String(s ?? "")
    .replace(/[   ]/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/[^\x20-\x7EÅåÄäÖöÉéÜü·]/g, "");
}

function wrap(text, font, size, maxW) {
  const words = safe(text).split(/\s+/);
  const lines = [];
  let rad = "";
  for (const w of words) {
    const test = rad ? rad + " " + w : w;
    if (font.widthOfTextAtSize(test, size) > maxW && rad) {
      lines.push(rad);
      rad = w;
    } else {
      rad = test;
    }
  }
  if (rad) lines.push(rad);
  return lines;
}

export async function buildSajtvaktPdf({ resultat, name, diff, datum }) {
  const doc = await PDFDocument.create();
  const host = resultat.url.replace(/^https?:\/\//, "");
  doc.setTitle(`Sajtvakten - ${host}`);
  doc.setAuthor("Stolt Marketing");
  doc.setSubject(`Sajtrapport för ${host}`);

  const reg = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H;

  const nySida = () => {
    page = doc.addPage([PAGE_W, PAGE_H]);
    y = PAGE_H - PAD;
  };
  const behov = (h) => {
    if (y - h < PAD + 40) nySida();
  };

  /* ── Mörk header ── */
  const HEAD_H = 150;
  page.drawRectangle({ x: 0, y: PAGE_H - HEAD_H, width: PAGE_W, height: HEAD_H, color: C.natt });
  page.drawText("stolt.", { x: PAD, y: PAGE_H - 44, size: 22, font: bold, color: C.gulLjus });
  page.drawText("S A J T V A K T E N", { x: PAD + 62, y: PAGE_H - 42, size: 9, font: reg, color: hex("#A19A87") });
  page.drawText(safe(datum), { x: PAGE_W - PAD - reg.widthOfTextAtSize(safe(datum), 9), y: PAGE_H - 42, size: 9, font: reg, color: hex("#A19A87") });

  page.drawText(safe(`Rapport för ${host}`), { x: PAD, y: PAGE_H - 76, size: 17, font: bold, color: C.papper });

  // Poängen: stor siffra + färgkodning
  const scoreFärg = resultat.score >= 85 ? C.gron : resultat.score >= 60 ? C.amber : C.rod;
  page.drawText(String(resultat.score), { x: PAD, y: PAGE_H - 128, size: 44, font: bold, color: C.gulLjus });
  const scoreW = bold.widthOfTextAtSize(String(resultat.score), 44);
  page.drawText("av 100", { x: PAD + scoreW + 8, y: PAGE_H - 118, size: 11, font: reg, color: hex("#A19A87") });

  const verdictLines = wrap(resultat.verdict, italic, 11, 250);
  verdictLines.forEach((l, i) => {
    page.drawText(l, { x: PAGE_W - PAD - 250, y: PAGE_H - 104 - i * 14, size: 11, font: italic, color: C.papper });
  });

  y = PAGE_H - HEAD_H - 30;

  /* ── AI-sammanfattning om den finns ── */
  if (resultat.ai) {
    const lines = wrap(resultat.ai, reg, 10, PAGE_W - PAD * 2 - 24);
    const boxH = lines.length * 13 + 24;
    behov(boxH + 10);
    page.drawRectangle({ x: PAD, y: y - boxH, width: PAGE_W - PAD * 2, height: boxH, color: C.papper });
    lines.forEach((l, i) => {
      page.drawText(l, { x: PAD + 12, y: y - 20 - i * 13, size: 10, font: reg, color: C.ink });
    });
    y -= boxH + 24;
  }

  /* ── Börja här ── */
  const attGora = resultat.checks.filter((c) => !c.pass).slice(0, 3);
  if (attGora.length) {
    behov(30 + attGora.length * 30);
    page.drawText("BÖRJA HÄR", { x: PAD, y, size: 10, font: bold, color: C.gul });
    y -= 20;
    attGora.forEach((c, i) => {
      const lines = wrap(c.detail, reg, 10, PAGE_W - PAD * 2 - 20);
      behov(lines.length * 13 + 8);
      page.drawText(`${i + 1}.`, { x: PAD, y, size: 10, font: bold, color: C.ink });
      lines.forEach((l, j) => {
        page.drawText(l, { x: PAD + 16, y: y - j * 13, size: 10, font: reg, color: C.ink });
      });
      y -= lines.length * 13 + 8;
    });
    y -= 12;
  }

  /* ── Förändringar (månadsrapport) ── */
  if (diff && diff.length) {
    behov(30 + diff.length * 16);
    page.drawText("FÖRÄNDRINGAR SEDAN FÖRRA RAPPORTEN", { x: PAD, y, size: 10, font: bold, color: C.gul });
    y -= 18;
    diff.forEach((d) => {
      const lines = wrap(d.replace(/&ouml;/g, "ö").replace(/&auml;/g, "ä").replace(/&aring;/g, "å"), reg, 10, PAGE_W - PAD * 2 - 14);
      behov(lines.length * 13 + 4);
      page.drawText("·", { x: PAD, y, size: 10, font: bold, color: C.ink });
      lines.forEach((l, j) => page.drawText(l, { x: PAD + 12, y: y - j * 13, size: 10, font: reg, color: C.ink }));
      y -= lines.length * 13 + 4;
    });
    y -= 12;
  }

  /* ── Alla kontroller ── */
  behov(30);
  page.drawText(`ALLA ${resultat.total} KONTROLLER`, { x: PAD, y, size: 10, font: bold, color: C.gul });
  y -= 20;

  for (const c of resultat.checks) {
    const färg = c.pass ? C.gron : c.warn ? C.amber : C.rod;
    const detLines = wrap(c.detail, reg, 8.5, PAGE_W - PAD * 2 - 30);
    const radH = 16 + detLines.length * 11 + 8;
    behov(radH);

    // statusruta
    page.drawRectangle({ x: PAD, y: y - 8, width: 8, height: 8, color: färg });
    page.drawText(safe(c.label), { x: PAD + 16, y: y - 7, size: 10, font: bold, color: C.ink });
    const vTxt = safe(c.value);
    page.drawText(vTxt, { x: PAGE_W - PAD - reg.widthOfTextAtSize(vTxt, 9.5), y: y - 7, size: 9.5, font: bold, color: färg });
    detLines.forEach((l, j) => {
      page.drawText(l, { x: PAD + 16, y: y - 21 - j * 11, size: 8.5, font: reg, color: C.gra });
    });
    y -= radH;
    page.drawLine({ start: { x: PAD, y: y + 4 }, end: { x: PAGE_W - PAD, y: y + 4 }, thickness: 0.5, color: C.rad });
  }

  /* ── Footer på varje sida ── */
  for (const p of doc.getPages()) {
    p.drawLine({ start: { x: PAD, y: 44 }, end: { x: PAGE_W - PAD, y: 44 }, thickness: 0.5, color: C.rad });
    p.drawText("Det vi hittar kan vi fixa. Stolt Marketing · 076-686 74 06 · joel@stoltmarketing.se · stoltmarketing.se/sajtkoll", {
      x: PAD,
      y: 30,
      size: 8,
      font: reg,
      color: C.faint,
    });
  }

  const bytes = await doc.save();
  // Chunkad konvertering: spread på stora arrayer spränger anropsstacken.
  const u8 = new Uint8Array(bytes);
  let bin = "";
  for (let i = 0; i < u8.length; i += 8192) {
    bin += String.fromCharCode.apply(null, u8.subarray(i, i + 8192));
  }
  return btoa(bin);
}
