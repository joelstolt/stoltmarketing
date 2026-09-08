import { getCloudflareContext } from "@opennextjs/cloudflare";
import { lasUtkast, signatur } from "@/lib/svarsmotor";
import SvarForm from "./SvarForm";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Svarsutkast",
  robots: { index: false, follow: false, nocache: true },
};

const fmt = (iso) =>
  iso ? new Date(iso).toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" }) : "";

export default async function SvarSida({ params }) {
  const { id } = await params;
  const { env } = await getCloudflareContext({ async: true });
  const post = await lasUtkast(env, id);

  if (!post) {
    return (
      <main className="svar-sida">
        <h1>Utkastet finns inte</h1>
        <p>Länken är fel eller äldre än 30 dagar. Leadmejlet i inkorgen har allt du behöver.</p>
      </main>
    );
  }

  const { lead, ai } = post;
  const forslag = `${ai.svar}\n\n${signatur(ai.hantverkare)}`;

  return (
    <main className="svar-sida">
      <p className="svar-eyebrow">
        <span className={`svar-prio svar-prio-${ai.prioritet}`}>{ai.prioritet}</span> {ai.prioritet_motivering}
      </p>
      <h1>{ai.sammanfattning}</h1>

      <section className="svar-lead">
        <div><span>Från</span><strong>{lead.name}</strong>{lead.company ? `, ${lead.company}` : ""}</div>
        <div><span>E-post</span><a href={`mailto:${lead.email}`}>{lead.email}</a></div>
        {lead.service ? <div><span>Tjänst</span>{lead.service}</div> : null}
        <div><span>Inkom</span>{fmt(post.skapad)} via {lead.kalla}</div>
        <details>
          <summary>Hela meddelandet</summary>
          <pre>{lead.message}{lead.chatHistory ? `\n\nChatt:\n${lead.chatHistory}` : ""}</pre>
        </details>
      </section>

      <section className="svar-kolumner">
        <div>
          <h2>Vill ha</h2>
          <ul>{(ai.vill || []).map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        <div>
          <h2>Saknas för ett bra svar</h2>
          {ai.saknas?.length ? <ul>{ai.saknas.map((x, i) => <li key={i}>{x}</li>)}</ul> : <p>Inget, allt finns.</p>}
        </div>
      </section>

      <SvarForm id={post.id} status={post.status} amne={ai.amne} text={post.skickat_text || forslag} till={lead.email} skickatAt={post.skickat_at} />

      <style>{`
        .svar-sida{max-width:720px;margin:0 auto;padding:40px 20px 80px;color:#1A1611;font-size:16px;line-height:1.55}
        .svar-sida h1{font-size:clamp(22px,3vw,30px);line-height:1.2;margin:8px 0 20px}
        .svar-sida h2{font-size:14px;text-transform:uppercase;letter-spacing:.04em;color:#6b6b6b;margin:0 0 6px}
        .svar-eyebrow{color:#6b6b6b;margin:0}
        .svar-prio{display:inline-block;padding:2px 10px;border-radius:999px;border:1px solid #E6DEC9;background:#FAF5EC;font-weight:600;text-transform:capitalize}
        .svar-prio-het{color:#B45309}
        .svar-lead{background:#FAF7EE;border:1px solid #E6DEC9;border-radius:12px;padding:14px 16px;display:grid;gap:6px;margin-bottom:24px}
        .svar-lead span{display:inline-block;width:70px;color:#6b6b6b}
        .svar-lead pre{white-space:pre-wrap;font:inherit;margin:8px 0 0}
        .svar-lead summary{cursor:pointer;color:#6b6b6b}
        .svar-kolumner{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:28px}
        .svar-kolumner ul{margin:0;padding-left:18px}
        @media (max-width:600px){.svar-kolumner{grid-template-columns:1fr}}
        .svar-form label{display:block;font-size:14px;color:#6b6b6b;margin:14px 0 4px}
        .svar-form input,.svar-form textarea{width:100%;box-sizing:border-box;font:inherit;padding:10px 12px;border:1px solid #CFC6B0;border-radius:8px;background:#fff;color:#1A1611}
        .svar-form textarea{min-height:360px;resize:vertical}
        .svar-knappar{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}
        .svar-knappar button{font:inherit;font-weight:600;border-radius:999px;padding:12px 20px;border:1px solid #1A1611;cursor:pointer}
        .svar-primar{background:#1A1611;color:#F2BC1B}
        .svar-sekundar{background:transparent;color:#1A1611}
        .svar-knappar button:disabled{opacity:.5;cursor:default}
        .svar-status{padding:12px 14px;border-radius:8px;background:#FAF5EC;border:1px solid #E6DEC9}
        .svar-fel{color:#9A1B1B}
      `}</style>
    </main>
  );
}
