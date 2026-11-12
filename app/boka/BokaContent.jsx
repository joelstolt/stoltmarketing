"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui";
import InquiryForm from "@/components/InquiryForm";

function calendarEmbedUrl(raw) {
  const url = (raw || "").trim();
  if (!url) return "";
  try {
    const u = new URL(url);
    if (!u.searchParams.has("gv")) u.searchParams.set("gv", "true");
    return u.toString();
  } catch {
    return url;
  }
}

const CALENDAR_URL = calendarEmbedUrl(process.env.NEXT_PUBLIC_CALENDAR_URL || "");

function CalendarPanel({ url }) {
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    if (ready) return undefined;
    const timer = setTimeout(() => setSlow(true), 7000);
    return () => clearTimeout(timer);
  }, [ready]);

  return (
    <div className="boka-cal">
      <div className="boka-cal-bar">
        <img src="/joel-stolt.webp" alt="" width={40} height={40} className="boka-cal-avatar" />
        <div style={{ minWidth: 0 }}>
          <div className="text-[14px] font-600 text-heading" style={{ lineHeight: 1.35 }}>
            Joel Stolt
          </div>
          <div
            className="text-[12.5px] text-muted"
            style={{ fontFamily: "var(--font-ui)", lineHeight: 1.4 }}
          >
            30 min · video eller telefon<span className="boka-cal-tz"> · svensk tid</span>
          </div>
        </div>
        <a className="boka-cal-open" href={url} target="_blank" rel="noopener noreferrer">
          Öppna i eget fönster
          <ExternalLink aria-hidden="true" size={13} />
        </a>
      </div>

      <div className="boka-cal-sheet" aria-busy={!ready}>
        {!ready ? (
          <div className="boka-cal-skeleton" aria-hidden="true">
            <span style={{ height: 18, width: "44%" }} />
            <span style={{ height: 12, width: "28%" }} />
            <span style={{ height: 250, width: "100%", marginTop: 4 }} />
            <span style={{ height: 12, width: "34%" }} />
            <span style={{ height: 88, width: "100%" }} />
          </div>
        ) : null}
        <iframe
          title="Välj en tid i Joels kalender"
          src={url}
          className="boka-cal-iframe"
          loading="lazy"
          onLoad={() => setReady(true)}
        />
      </div>

      {!ready && slow ? (
        <p className="boka-cal-note">
          Kalendern tar ovanligt lång tid att ladda.{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            Öppna bokningssidan i eget fönster
          </a>{" "}
          om den inte dyker upp, eller byt till Skicka ett meddelande.
        </p>
      ) : null}
    </div>
  );
}

export default function BokaContent() {
  const [path, setPath] = useState("tid");
  const [calendarUrl, setCalendarUrl] = useState(CALENDAR_URL);
  const [message, setMessage] = useState("");
  const [calendarChecked, setCalendarChecked] = useState(Boolean(CALENDAR_URL));
  const timeRef = useRef(null), messageRef = useRef(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("amne") === "pris") {
      setPath("meddelande");
      setMessage(`Jag vill ha upplägg och pris för ${params.get("paket") || "en ny hemsida"}.`);
    } else if (params.get("flik") === "meddelande" || window.location.hash === "#meddelande") setPath("meddelande");
    if (CALENDAR_URL) return;
    let alive = true;
    fetch("/api/calendar-url").then((res) => res.ok ? res.json() : null).then((data) => { if (alive && data?.url) setCalendarUrl(calendarEmbedUrl(data.url)); }).catch(() => {}).finally(() => { if (alive) setCalendarChecked(true); });
    return () => { alive = false; };
  }, []);
  function select(next, focus = false) {
    setPath(next);
    if (next === "tid") window.umami?.track("boka-kalender-oppnad");
    if (focus) (next === "tid" ? timeRef : messageRef).current?.focus();
  }
  function tabKeys(event) {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      select(event.key === "Home" ? "tid" : event.key === "End" ? "meddelande" : path === "tid" ? "meddelande" : "tid", true);
    }
  }
  return <>
    <PageHero compact cta={false} breadcrumbs={[{label:"Start",href:"/"},{label:"Boka"}]} badge="30 minuter med Joel" title="Välj en tid som passar dig" subtitle="Vi går igenom ditt behov och vad jag kan hjälpa till med. Samtalet är kostnadsfritt och du förbinder dig inte till något." />
    <section className="px-5 sm:px-8 py-10 sm:py-14"><div className="max-w-4xl mx-auto">
      <div role="tablist" aria-label="Välj hur du vill ta kontakt" onKeyDown={tabKeys} className="grid sm:grid-cols-2 gap-3 mb-8">
        {[{id:"tid",label:"Välj tid i kalendern",ref:timeRef},{id:"meddelande",label:"Skicka ett meddelande",ref:messageRef}].map((tab) => <button key={tab.id} ref={tab.ref} type="button" role="tab" id={`tab-${tab.id}`} aria-controls={`panel-${tab.id}`} aria-selected={path === tab.id} tabIndex={path === tab.id ? 0 : -1} onClick={() => select(tab.id)} className={`rounded-xl p-4 border font-[family-name:var(--font-ui)] text-[15px] ${path === tab.id ? "border-primary bg-primary-light text-primary" : "border-border bg-surface text-body"}`}>{tab.label}</button>)}
      </div>
      <div role="tabpanel" id="panel-tid" aria-labelledby="tab-tid" hidden={path !== "tid"}>
        {calendarUrl ? <><p className="text-[14px] text-muted mb-4">Kalendern tillhandahålls av Google. När du bokar får du en bekräftelse och uppgifter om mötet via e-post. <a href="/integritet" className="underline">Om personuppgifter</a>.</p><CalendarPanel url={calendarUrl} /></> : !calendarChecked ? <p role="status">Hämtar kalendern...</p> : <><h2 className="text-[26px] mb-3">Föreslå en tid</h2><p className="mb-6">Kalendern kunde inte visas. Skriv när du kan prata så bekräftar jag tiden via mejl.</p><InquiryForm service="Tidsönskemål" initialMessage="Jag vill boka ett samtal. Jag kan följande tider: " eventName="lead-boka-tid" /></>}
      </div>
      <div role="tabpanel" id="panel-meddelande" aria-labelledby="tab-meddelande" hidden={path !== "meddelande"}><div className="bg-surface border border-border rounded-xl p-5 sm:p-8"><h2 className="text-[26px] mb-3">Skriv det du funderar på</h2><p className="mb-6">Jag återkommer normalt samma arbetsdag. Ett meddelande bokar ingen tid automatiskt.</p><InquiryForm service={message ? "Prisförfrågan" : "Bokningsförfrågan"} initialMessage={message} eventName="lead-boka" /></div></div>
    </div></section>
  </>;
}
