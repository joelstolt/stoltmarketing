import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Kalender-URL:en läst vid RUNTIME.
 *
 * NEXT_PUBLIC_CALENDAR_URL bakas normalt in i klientbundeln vid bygget från
 * .env.local. Byggs sajten någon gång utan den filen (CI, ny klon, tömd env)
 * blir den inbakade strängen tom och /boka faller tyst tillbaka till
 * tidsönskemål. Då hämtar klienten värdet härifrån i stället, och wrangler-
 * varen i wrangler.jsonc blir det skyddsnät den var tänkt att vara.
 */
export const dynamic = "force-dynamic";

const ALLOWED_PREFIX = "https://calendar.google.com/calendar/appointments/schedules/";

function readCalendarVar() {
  if (process.env.NEXT_PUBLIC_CALENDAR_URL) {
    return process.env.NEXT_PUBLIC_CALENDAR_URL;
  }
  try {
    const { env } = getCloudflareContext();
    return env?.NEXT_PUBLIC_CALENDAR_URL || "";
  } catch {
    return "";
  }
}

export async function GET() {
  const raw = readCalendarVar().trim();
  // Bara Googles bokningsschema får bli iframe-src. En felsatt var ska ge
  // tidsönskemålsformuläret, aldrig en godtycklig sida inbäddad på sajten.
  const url = raw.startsWith(ALLOWED_PREFIX) ? raw : "";
  return Response.json(
    { url },
    { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } },
  );
}
