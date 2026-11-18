"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import t from "./start.module.css";

/* Skrivfältet som leder till kontaktformuläret. Exemplen växlar så att både den som har
   ett problem och den som vill bygga något nytt känner igen sig. Utan rörelse står det första kvar. */
const EXEMPEL = [
  "Vår webbshop tar inte betalt",
  "Vi vill ha ett CRM som hänger ihop med sajten",
  "Vi syns inte när kunder frågar ChatGPT",
  "Vi lägger för mycket tid på offerter",
  "Vi behöver en ny sajt med bokning",
];

export default function Skrivfalt({ event, stor = false }) {
  const [i, setI] = useState(0);
  const [synlig, setSynlig] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setSynlig(false);
      setTimeout(() => {
        setI((n) => (n + 1) % EXEMPEL.length);
        setSynlig(true);
      }, 300);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <Link
      href="/kontakt"
      className={`${t.composer} ${stor ? t.composerStor : ""}`}
      data-umami-event={event}
      aria-label="Berätta vad ni behöver"
    >
      <span className={t.composerText} aria-hidden="true">
        <span className={t.composerHint}>Till exempel:</span>{" "}
        <span className={`${t.composerSwap} ${synlig ? "" : t.composerHide}`}>{EXEMPEL[i]}</span>
      </span>
      <span className={t.composerSend} aria-hidden="true">
        <ArrowUp size={16} strokeWidth={2.4} />
      </span>
    </Link>
  );
}
