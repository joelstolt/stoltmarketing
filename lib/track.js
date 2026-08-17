/* ============================================================
   Konverteringsmätning.

   Umami är kvar som den var (GDPR-vänlig, ingen kaka). Ovanpå det
   skickas en värdesatt konvertering till Google Ads, så att budgivningen
   kan optimera mot affärsvärde i stället för mot antal formulär.

   Värdena speglar hur nära pengar händelsen ligger:
     sajtkoll   200 kr   volymsignalen, det är den budgivningen lär sig på
     lead     1 000 kr   någon lämnat kontaktuppgifter
     avtal   15 000 kr   sanningen

   Etiketterna skapas som konverteringsåtgärder i Google Ads och läggs
   in som env-variabler vid bygget. Saknas de sker ingenting, sidan
   fungerar precis som förut.
   ============================================================ */

export const CONVERSION_VALUES = {
  sajtkoll: 200,
  lead: 1000,
  avtal: 15000,
};

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const LABELS = {
  sajtkoll: process.env.NEXT_PUBLIC_ADS_LABEL_SAJTKOLL,
  lead: process.env.NEXT_PUBLIC_ADS_LABEL_LEAD,
  avtal: process.env.NEXT_PUBLIC_ADS_LABEL_AVTAL,
};

/**
 * Rapporterar en konvertering till både Umami och Google Ads.
 *
 * @param {string} umamiEvent  Eventnamnet i Umami, t.ex. "lead-boka".
 * @param {"sajtkoll"|"lead"|"avtal"} typ  Styr värde och Ads-etikett.
 */
export function trackConversion(umamiEvent, typ = "lead") {
  if (typeof window === "undefined") return;

  if (window.umami) {
    window.umami.track(umamiEvent);
  }

  const label = LABELS[typ];
  if (window.gtag && ADS_ID && label) {
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${label}`,
      value: CONVERSION_VALUES[typ],
      currency: "SEK",
    });
  }
}
