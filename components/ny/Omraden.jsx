"use client";

import { useRef, useState } from "react";
import { Check, Search, ShoppingCart, Workflow } from "lucide-react";
import s from "./ny.module.css";
import t from "./start.module.css";
import { IKONER } from "./verktyg";

/* Tre områden som flikar. Innehållet bygger på riktiga uppdrag (anonymiserade
   tills kunden sagt ja) och på erbjudande-2026-11-17/RAPPORT.md. Inga siffror
   eller resultat är påhittade; panelerna till höger visar hur arbetet ser ut. */
const OMRADEN = [
  {
    key: "hittar",
    tab: "Fler hittar er",
    ikon: Search,
    rubrik: "Rätt kunder hittar er, i Google och i ChatGPT.",
    text: "Sidor som svarar på det kunderna söker efter, annonser som ger förfrågningar och koll på vad ChatGPT säger om er. Allt mäts, och ni ser vad det gav.",
    punkter: [
      "Synas i Google på det ni säljer och där ni finns",
      "Google Ads med mätning av vilka annonser som ger förfrågningar",
      "Vara med när kunder frågar ChatGPT och liknande",
      "Rapport första vardagen varje månad",
    ],
    uppdrag: "Ett fasadföretag hittade mig via ChatGPT. I dag sköter jag deras två sajter, Google Ads och mätningen av vilka annonser som ger förfrågningar.",
    panel: {
      titel: "När en kund frågar ChatGPT efter det ni säljer",
      etikett: "Exempel",
      rader: [
        ["Google", "Vilka sökningar ni syns på och vad de ger"],
        ["Google Ads", "Förfrågningar per annons och vad de kostade"],
        ["AI-sök", "Hur fyra AI-assistenter beskriver er"],
        ["Nästa steg", "Det jag föreslår att vi testar"],
      ],
      fot: "Målet är att ni är med i svaret. Jag mäter varje månad vad fyra AI-assistenter svarar och ändrar det som gör att ni saknas.",
    },
  },
  {
    key: "kunder",
    tab: "Fler blir kunder",
    ikon: ShoppingCart,
    rubrik: "Från besök till beställning, utan att något faller mellan stolarna.",
    text: "Sajter, webbshoppar och bokning som är lätta att använda och hänger ihop med det ni redan har. Det kunden beställer hamnar rätt hos er, utan att någon skriver av det.",
    punkter: [
      "Hemsida och webbshop, på svenska och fler språk",
      "Kassa och betalningar som går igenom",
      "Bokning av kurser, tider och provningar",
      "Hänger ihop med de system ni redan har",
    ],
    uppdrag: "Åt en teknisk grossist samlade jag kurser från två system på en sajt. En bokning hamnar direkt i rätt system hos rätt person.",
    panel: {
      titel: "En bokning på sajten, hela vägen in i ert system",
      etikett: "Exempel",
      rader: [
        ["Besök", "Snabb sida som fungerar i mobilen"],
        ["Val", "Produkt, kurs eller tid, utan omvägar"],
        ["Kassa", "Betalningen går igenom, och ni ser det"],
        ["Bekräftelse", "Kunden får besked direkt, ni med"],
      ],
      fot: "Inget skrivs av för hand. Bokningen hamnar i rätt system hos rätt person, och kunden får besked direkt.",
    },
  },
  {
    key: "handarbete",
    tab: "Mindre handarbete",
    ikon: Workflow,
    rubrik: "Det ni gör för hand varje vecka, gjort av system.",
    text: "Ett kundregister (CRM), bokning och AI som tar bort det ni gör för hand. Jag börjar med en sak, visar att det sparar tid och tar sedan nästa.",
    punkter: [
      "Ett ställe för förfrågningar, offerter och kunder",
      "Bokning och kundportaler",
      "AI som skriver första utkastet till svar och påminnelser",
      "System som pratar med varandra",
    ],
    uppdragEtikett: "Från mitt eget system",
    uppdrag: "I mitt eget kundregister skriver AI utkasten till svar och påminnelser om offerter. Inget skickas utan att jag har läst det.",
    panel: {
      titel: "När en offert inte får svar",
      etikett: "Exempel",
      rader: [
        ["Förfrågan", "Kommer in via sajten"],
        ["CRM", "Blir ett kort med allt kunden skrivit"],
        ["Agent", "Skriver ett utkast till svar"],
        ["Du", "Läser, ändrar och skickar"],
      ],
      fot: "AI skriver första utkastet, ni bestämmer. Inget skickas i ert namn utan att ni har läst det.",
    },
  },
];

/* Låter inte AI-sök brytas vid bindestrecket. */
export function nb(text) {
  const delar = text.split("AI-sök");
  return delar.flatMap((del, i) =>
    i === 0 ? [del] : [<span key={i} className={s.nw}>AI-sök</span>, del]
  );
}

export default function Omraden() {
  const [aktiv, setAktiv] = useState(0);
  const flikar = useRef([]);

  function onKeyDown(e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const steg = e.key === "ArrowRight" ? 1 : -1;
    const nasta = (aktiv + steg + OMRADEN.length) % OMRADEN.length;
    setAktiv(nasta);
    flikar.current[nasta]?.focus();
  }

  return (
    <div>
      <div className={s.tabs} role="tablist" aria-label="Områden" onKeyDown={onKeyDown}>
        {OMRADEN.map((om, i) => (
          <button
            key={om.key}
            ref={(el) => (flikar.current[i] = el)}
            type="button"
            role="tab"
            id={`flik-${om.key}`}
            aria-selected={i === aktiv}
            aria-controls={`panel-${om.key}`}
            tabIndex={i === aktiv ? 0 : -1}
            className={`${s.tab} ${i === aktiv ? s.tabActive : ""}`}
            onClick={() => setAktiv(i)}
          >
            <om.ikon size={15} strokeWidth={1.9} aria-hidden="true" />
            {om.tab}
          </button>
        ))}
      </div>

      {/* Alla tre panelerna finns i HTML:en så att sökmotorer och AI-robotar läser allt;
          de som inte är valda döljs med hidden. */}
      {OMRADEN.map((om, i) => (
        <div
          key={om.key}
          className={s.areaPanel}
          role="tabpanel"
          id={`panel-${om.key}`}
          aria-labelledby={`flik-${om.key}`}
          hidden={i !== aktiv}
        >
          <div className={s.areaText}>
            <h3 className={s.areaTitle}>{nb(om.rubrik)}</h3>
            <p className={s.areaLead}>{nb(om.text)}</p>
            <ul className={s.checkList}>
              {om.punkter.map((p) => (
                <li key={p}>
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" className={s.checkIcon} />
                  {p}
                </li>
              ))}
            </ul>
            <div className={s.caseNote}>
              <span className={s.caseLabel}>{om.uppdragEtikett || "Från ett uppdrag"}</span>
              <p>{om.uppdrag}</p>
            </div>
          </div>

          <Demo k={om.key} panel={om.panel} />
        </div>
      ))}
    </div>
  );
}

const AI = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

/* Demo för ett område, används också av tjänste- och stadssidorna. */
export function OmradeDemo({ omrade }) {
  const o = OMRADEN.find((x) => x.key === omrade) || OMRADEN[0];
  return <Demo k={o.key} panel={o.panel} />;
}

/* Levande demo till höger. Visar hur arbetet ser ut, utan siffror eller resultat. */
function Demo({ k, panel }) {
  return (
    <div className={t.demo} aria-hidden="true">
      <div className={t.demoHead}>
        <span>{panel.titel}</span>
        <span className={t.demoChip}>
          <span className={s.dotAccent} />
          {panel.etikett}
        </span>
      </div>
      <div className={t.demoBody}>
        {k === "hittar" && (
          <>
            <div className={t.chatQ}>
              <span className={t.chatWho}>Kunden frågar ChatGPT</span>
              Vem kan utbilda våra elektriker i elsäkerhet i Skåne?
            </div>
            <div className={t.chatA}>
              <span className={t.chatWho}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d={IKONER.ChatGPT} /></svg>
                ChatGPT svarar
              </span>
              <span className={t.chatLine} style={{ "--i": 0 }}>Några som ofta rekommenderas:</span>
              <span className={`${t.chatLine} ${t.chatYou}`} style={{ "--i": 1 }}>
                Ert företag
                <span className={t.chatTag}>Här vill ni vara</span>
              </span>
              <span className={t.chatLine} style={{ "--i": 2 }}>En konkurrent</span>
              <span className={t.chatLine} style={{ "--i": 3 }}>En annan konkurrent</span>
            </div>
            <div className={t.aiBox}>
              <p className={t.aiLabel}>Jag mäter vad alla fyra svarar om er, varje månad</p>
              <div className={t.aiGrid}>
                {AI.map((namn, i) => (
                  <span key={namn} className={t.aiItem} style={{ "--i": i }}>
                    <svg viewBox="0 0 24 24"><path d={IKONER[namn]} /></svg>
                    {namn}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {k === "kunder" && (
          <div className={t.leadFlow}>
            <div className={t.leadStep} style={{ "--i": 0 }}>
              <span className={t.leadLabel}>Kunden bokar på er sajt</span>
              <span className={t.field}>Elsäkerhet grund, 12 mars, 2 platser</span>
            </div>
            <div className={t.leadStep} style={{ "--i": 1 }}>
              <span className={t.leadLabel}>Bokningen hamnar direkt i ert system</span>
              <span className={t.notice}>
                <span className={s.dotAccent} />
                Ny bokning i bokningslistan
                <span className={t.noticeWhere}>Kursansvarig har fått besked</span>
              </span>
            </div>
            <div className={t.leadStep} style={{ "--i": 2 }}>
              <span className={t.leadLabel}>Kunden får bekräftelse</span>
              <span className={t.confirmMini}>
                <span className={t.repCheck}><Check size={11} strokeWidth={3} /></span>
                Tack för bokningen. Lägg in den i kalendern.
              </span>
            </div>
          </div>
        )}

        {k === "handarbete" && (
          <div className={t.leadFlow}>
            <div className={t.leadStep} style={{ "--i": 0 }}>
              <span className={t.leadLabel}>Dag 0</span>
              <span className={t.notice}>Offerten skickas till kunden</span>
            </div>
            <div className={t.leadStep} style={{ "--i": 1 }}>
              <span className={t.leadLabel}>Dag 5, inget svar: AI skriver en påminnelse</span>
              <span className={t.draft}>Hej! Jag ville höra hur ni tänker kring offerten. Hör av er om något behöver ändras.</span>
            </div>
            <div className={t.leadStep} style={{ "--i": 2 }}>
              <span className={t.leadLabel}>Ni läser och skickar</span>
              <span className={t.confirmMini}>
                <span className={t.sendBtn}>Skicka</span>
                Inget går iväg innan ni klickar.
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={t.demoFoot}>{panel.fot}</div>
    </div>
  );
}
