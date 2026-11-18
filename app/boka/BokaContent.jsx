"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import s from "@/components/ny/ny.module.css";
import b from "./boka.module.css";

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
  return (
    <section className={s.intro}>
      <div className={`${s.frame} ${s.introInner}`}>
        <nav className={s.crumbs} aria-label="Brödsmulor">
          <Link href="/">Start</Link>
          <span className={s.crumbSep} aria-hidden="true">/</span>
          <span aria-current="page">Boka</span>
        </nav>
        <p className={s.kicker}>30 minuter med Joel</p>
        <h1 className={s.h1Sub}>Välj en tid som passar.</h1>
        <p className={s.heroLead}>
          Vi går igenom vad som krånglar eller saknas och vad jag kan göra åt det. Samtalet kostar ingenting och du
          förbinder dig inte till något.
        </p>

        <div className={b.wrap}>
          <div role="tablist" aria-label="Välj hur du vill ta kontakt" onKeyDown={tabKeys} className={b.tabs}>
            {[{id:"tid",label:"Välj tid i kalendern",ref:timeRef},{id:"meddelande",label:"Skicka ett meddelande",ref:messageRef}].map((tab) => <button key={tab.id} ref={tab.ref} type="button" role="tab" id={`tab-${tab.id}`} aria-controls={`panel-${tab.id}`} aria-selected={path === tab.id} tabIndex={path === tab.id ? 0 : -1} onClick={() => select(tab.id)} className={`${b.tab} ${path === tab.id ? b.tabActive : ""}`}>{tab.label}</button>)}
          </div>
          <div role="tabpanel" id="panel-tid" aria-labelledby="tab-tid" hidden={path !== "tid"}>
            {calendarUrl ? <><p className={b.note}>Kalendern tillhandahålls av Google. När du bokar får du en bekräftelse och uppgifter om mötet via e-post. <a href="/integritet">Om personuppgifter</a>.</p><div className={b.cal}><CalendarPanel url={calendarUrl} /></div></> : !calendarChecked ? <p role="status" className={b.status}>Hämtar kalendern...</p> : <div className={b.card}><h2 className={b.cardTitle}>Föreslå en tid</h2><p className={b.cardLead}>Kalendern kunde inte visas. Skriv när du kan prata så bekräftar jag tiden via mejl.</p><InquiryForm service="Tidsönskemål" initialMessage="Jag vill boka ett samtal. Jag kan följande tider: " eventName="lead-boka-tid" /></div>}
          </div>
          <div role="tabpanel" id="panel-meddelande" aria-labelledby="tab-meddelande" hidden={path !== "meddelande"}><div className={b.card}><h2 className={b.cardTitle}>Skriv det du funderar på</h2><p className={b.cardLead}>Du får svar nästa arbetsdag. Ett meddelande bokar ingen tid automatiskt.</p><InquiryForm service={message ? "Prisförfrågan" : "Bokningsförfrågan"} initialMessage={message} eventName="lead-boka" /></div></div>
        </div>
      </div>
    </section>
  );
}
