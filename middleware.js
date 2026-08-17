import { NextResponse } from "next/server";

// Tvinga apex -> www (canonical = www.stoltmarketing.se).
// Görs i koden eftersom CF-tokenen saknade Transform/Redirect-rättighet.
export function middleware(request) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  if (host === "stoltmarketing.se") {
    return NextResponse.redirect(
      `https://www.stoltmarketing.se${pathname}${search}`,
      301
    );
  }

  // Blogginlägget ersatt av pillar-prissidan 2026-08-07.
  if (pathname === "/blogg/vad-kostar-en-hemsida" || pathname === "/blogg/vad-kostar-en-hemsida/") {
    return NextResponse.redirect(
      "https://www.stoltmarketing.se/vad-kostar-en-hemsida",
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  // Kör på allt utom statiska assets och Next-interna filer.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
