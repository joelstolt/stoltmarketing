// ============================================================
// POST /api/svar  { id, action: "skicka" | "avfarda", amne, text }
// Skickar Joels godkända svar till leadet via Resend (från joel@, kopia till
// Joel) och låser utkastet. Behörighet = det 40 tecken långa id:t från mejlet.
// ============================================================

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { rateLimited, clientIp } from "@/lib/rate-limit";
import { lasUtkast, sparaUtkast, stada, FROM_SVAR, TILL_JOEL } from "@/lib/svarsmotor";

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function POST(req) {
  try {
    if (await rateLimited("CONTACT_LIMIT", `svar:${clientIp(req)}`)) {
      return Response.json({ error: "För många försök. Vänta en minut." }, { status: 429 });
    }

    const { id, action, amne, text } = await req.json();
    const { env } = getCloudflareContext();
    const post = await lasUtkast(env, id);
    if (!post) return Response.json({ error: "Utkastet finns inte" }, { status: 404 });
    if (post.status !== "utkast") {
      return Response.json({ error: `Redan ${post.status}` }, { status: 409 });
    }

    if (action === "avfarda") {
      post.status = "avfardat";
      post.avfardat_at = new Date().toISOString();
      await sparaUtkast(env, post);
      return Response.json({ ok: true });
    }
    if (action !== "skicka") return Response.json({ error: "Okänd åtgärd" }, { status: 400 });

    const amneR = stada(amne).slice(0, 200);
    const textR = stada(text).slice(0, 8000);
    if (!amneR || !textR) return Response.json({ error: "Ämne och text krävs" }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return Response.json({ error: "RESEND_API_KEY saknas" }, { status: 500 });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_SVAR,
        to: post.lead.email,
        bcc: TILL_JOEL,
        reply_to: TILL_JOEL,
        subject: amneR,
        text: textR,
        html: `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.55;color:#1A1611;white-space:pre-wrap;">${esc(textR)}</div>`,
      }),
    });
    if (!res.ok) {
      console.error("Resend (svar):", await res.text());
      return Response.json({ error: "Mejlet gick inte att skicka" }, { status: 502 });
    }
    const { id: resendId } = await res.json().catch(() => ({}));

    post.status = "skickat";
    post.skickat_at = new Date().toISOString();
    post.skickat_amne = amneR;
    post.skickat_text = textR;
    post.resend_id = resendId || null;
    await sparaUtkast(env, post);

    return Response.json({ ok: true, skickat_at: post.skickat_at });
  } catch (e) {
    console.error("/api/svar:", e);
    return Response.json({ error: "Internt fel" }, { status: 500 });
  }
}
