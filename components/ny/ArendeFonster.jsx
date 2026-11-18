"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import Skrivfalt from "./Skrivfalt";
import t from "./start.module.css";

/* Startsidans ärende: ett riktigt uppdrag (augusti 2026, kunden anonymiserad) spelas upp.
   Stegen och tiderna är samma som i loggen från uppdraget, inget är tillagt. 1 h 29 min är
   tiden mellan kundens mejl 09:52 och klart 11:21. Utan rörelse visas slutläget direkt. */

const STEG = [
  "Letar efter felet mellan butiken och betaltjänsten.",
  "Hittar felet och rättar det.",
  "Gör ett testköp. Betalningen går igenom.",
];

/* fas 0: tomt, 1: kundens mejl, 2-4: stegen, 5: klart */
const SLUT = 5;
const TIDER = [500, 1400, 1900, 1600, 1600, 1200];

/* href och event används av landningssidorna, så att skrivfältet leder till sidans eget formulär. */
export default function ArendeFonster({ href = "/kontakt", event = "start-fonster-cta" }) {
  const [fas, setFas] = useState(0);
  const rot = useRef(null);
  const synlig = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFas(SLUT);
      return;
    }
    const obs = new IntersectionObserver(([e]) => {
      synlig.current = e.isIntersecting;
    }, { threshold: 0.25 });
    if (rot.current) obs.observe(rot.current);

    let timer;
    let nu = 0;
    const tick = () => {
      if (!synlig.current) {
        timer = setTimeout(tick, 400);
        return;
      }
      /* Börja om med kundens mejl synligt, så att fönstret aldrig står tomt. */
      nu = nu >= SLUT ? 1 : nu + 1;
      setFas(nu);
      timer = setTimeout(tick, nu === SLUT ? 8000 : TIDER[nu] || 1200);
    };
    timer = setTimeout(tick, 600);
    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  const klar = fas >= SLUT;

  return (
    <figure className={t.window} ref={rot}>
      <div className={t.mainHead}>
        <div className={t.headLeft}>
          <span className={t.headKicker}>Ett riktigt ärende, augusti 2026</span>
          <span className={t.mainTitle}>Webbutiken tar inte betalt</span>
        </div>
        <span className={`${t.status} ${klar ? t.statusOk : ""}`}>
          <span className={`${t.caseDot} ${klar ? t.dotOk : t.dotLive}`} />
          {klar ? "Löst på 1 h 29 min" : fas >= 2 ? "Jag felsöker" : "Akut"}
        </span>
      </div>

      <ol className={t.thread} aria-label="Ärendet steg för steg">
        <li className={`${t.msg} ${fas >= 1 ? t.in : ""}`}>
          <span className={t.msgMeta}>Kunden mejlar, 09:52</span>
          <p className={t.msgText}>Samtliga beställningar har misslyckats de senaste veckorna.</p>
        </li>

        {STEG.map((text, i) => {
          const start = 2 + i;
          const gjort = fas > start || klar;
          return (
            <li key={text} className={`${t.step} ${fas >= start ? t.in : ""}`}>
              <img src="/joel-stolt.webp" alt="" width="24" height="24" className={t.avatar} />
              <span className={t.stepText}>
                <span className={t.stepWho}>Joel</span>
                {text}
              </span>
              <span className={`${t.stepIcon} ${gjort ? t.stepDone : ""}`} aria-hidden="true">
                {gjort ? <Check size={12} strokeWidth={3} /> : <span className={t.spinner} />}
              </span>
            </li>
          );
        })}

        <li className={`${t.result} ${klar ? t.in : ""}`}>
          <div className={t.resultHead}>
            <span className={`${t.caseDot} ${t.dotOk}`} />
            Klart 11:21, samma förmiddag
          </div>
          <p className={t.resultText}>Beställningarna går igenom igen.</p>
        </li>
      </ol>

      <div className={t.composerWrap}>
        <Skrivfalt event={event} href={href} />
      </div>
    </figure>
  );
}
