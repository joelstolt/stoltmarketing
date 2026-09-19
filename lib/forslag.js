import { klickId } from "@/lib/klickid";

/*
 * Förslagsbegäran: samma väg från startsidans fält och från sajtkollens
 * resultat. Går till /api/contact så leadet landar där alla andra leads
 * landar. utanSajt = besökaren skrev ett företagsnamn i stället för en
 * adress, då finns ingen mätning att skicka med.
 */
export async function skickaForslag({ doman, email, score, brister = [], plats, loadedAt, utanSajt = false }) {
  const message = utanSajt
    ? [
        `Vill se ett färdigt förslag för ${doman}.`,
        "Har ingen hemsida idag, skrev företagsnamnet i fältet.",
        `Skickat från ${plats}.`,
      ].join("\n")
    : [
        `Vill se ett färdigt förslag för ${doman}.`,
        `Sajtkoll: ${score} av 100.`,
        `Brister: ${brister.map((b) => `${b.label} (${b.value})`).join("; ") || "inga allvarliga"}.`,
        `Skickat från ${plats}.`,
      ].join("\n");

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: doman,
      email,
      company: doman,
      message,
      _subject: utanSajt ? `Förslag: ${doman} (ingen hemsida)` : `Förslag: ${doman} (${score}/100)`,
      hp_field: "",
      _elapsedMs: Date.now() - loadedAt,
      klickId: klickId(),
    }),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && Boolean(data.ok || data.success);
}

/* De tre värsta bristerna: rena fel först, varningar sedan. */
export function varstaBrister(checks = [], antal = 3) {
  return [...checks.filter((c) => !c.pass && !c.warn), ...checks.filter((c) => !c.pass && c.warn)].slice(0, antal);
}
