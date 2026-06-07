(function () {
  "use strict";

  /* ======================================================
     DATA — Real Softr data (replaced with API calls in prod)
  ====================================================== */
  var COURSES = [
    {
      id: "ebr-esa-e1", title: "EBR ESA-E Elarbete",
      description: "Grundläggande säkerhetsutbildning för personer som utför elarbete. Täcker ESA-E riktlinjer och säkerhetsregler enligt EBR.",
      forWho: "Elektriker, elinstallatörer och andra som utför elarbete på eller nära spänningsförande anläggningsdelar.",
      content: "Genomgång av ESA-E Elarbete, skötsel av elanläggningar enligt EBR, riskbedömning, arbetsmetoder och skyddsutrustning. Avslutas med kunskapstest.",
      other: "Ingår: kursmaterial, intyg efter godkänt test samt fika. Giltig 3 år innan repetition krävs.",
      price: "4 900 kr", duration: "1 dag", supplier: "RBN Utbildning", category: "Elsäkerhet & Installation",
      sessions: [
        { id: "e1s1", city: "Stockholm", start: "2026-04-14T08:00:00.000Z", end: "2026-04-14T16:00:00.000Z", status: "Öppen", location: "Sonepar Stockholm", address: "Kungsgatan 32, 111 35 Stockholm", contact: "Erik Andersson", contactEmail: "erik.andersson@test-sonepar.se", contactPhone: "+46 8 123 45 67" },
        { id: "e1s2", city: "Göteborg", start: "2026-05-08T08:00:00.000Z", end: "2026-05-08T16:00:00.000Z", status: "Få platser kvar", location: "Sonepar Göteborg", address: "Kungsportsavenyen 10, 411 36 Göteborg", contact: "Maria Nilsson", contactEmail: "maria.nilsson@test-sonepar.se", contactPhone: "+46 31 987 65 43" },
      ],
    },
    {
      id: "ebr-esa-e2", title: "EBR ESA-E Icke Elarbete",
      description: "Säkerhetsutbildning för personer som utför arbete i närheten av elanläggningar utan att själva vara elarbetare.",
      forWho: "Stödpersonal, entreprenörer och andra yrkesgrupper som arbetar på eller i anslutning till elanläggningar.",
      content: "ESA-E regler för icke-elarbete, skyddsavstånd, kommunikation med elarbetsansvarig, allmänna säkerhetsrutiner på arbetsplatser med elinstallationer.",
      other: "Finns även som webbaserad repetitionskurs. Intyg utfärdas efter godkänt kunskapstest.",
      price: "3 500 kr", duration: "0,5 dag", supplier: "RBN Utbildning", category: "Elsäkerhet & Installation",
      sessions: [
        { id: "e2s1", city: "Malmö", start: "2026-04-22T08:00:00.000Z", end: "2026-04-22T12:00:00.000Z", status: "Öppen", location: "Sonepar Malmö", address: "Stortorget 5, 211 22 Malmö", contact: "Johan Lindgren", contactEmail: "johan.lindgren@test-sonepar.se", contactPhone: "+46 40 555 12 34" },
        { id: "e2s2", city: "Uppsala", start: "2026-05-15T12:00:00.000Z", end: "2026-05-15T16:00:00.000Z", status: "Öppen", location: "Sonepar Uppsala", address: "Dragarbrunnsgatan 15, 753 20 Uppsala", contact: "Sofia Berg", contactEmail: "sofia.berg@test-sonepar.se", contactPhone: "+46 18 222 33 44" },
      ],
    },
    {
      id: "ebr-kj41", title: "EBR Kabelförläggning KJ41:21.1",
      description: "Praktisk utbildning i kabelförläggning enligt EBR KJ41:21.1 — branschstandarden för förläggning av kraftkablar.",
      forWho: "Kabelförläggare, entreprenörer och montörer som arbetar med förläggning av kablar i mark och byggnader.",
      content: "Förläggningsmetoder, mekaniskt skydd, böjradier, termisk belastning, dokumentation och kontroll. Både teori och praktiska övningar.",
      other: "Innehåller praktiska moment utomhus — ta med arbetskläder. Diplom efter godkänd utbildning.",
      price: "5 900 kr", duration: "1 dag", supplier: "RBN Utbildning", category: "Elsäkerhet & Installation",
      sessions: [
        { id: "kjs1", city: "Linköping", start: "2026-04-17T08:00:00.000Z", end: "2026-04-17T16:30:00.000Z", status: "Öppen", location: "Sonepar Linköping", address: "Storgatan 8, 582 23 Linköping", contact: "Peter Sjögren", contactEmail: "peter.sjogren@test-sonepar.se", contactPhone: "+46 13 888 99 00" },
        { id: "kjs2", city: "Örebro", start: "2026-05-22T08:00:00.000Z", end: "2026-05-22T16:30:00.000Z", status: "Få platser kvar", location: "Sonepar Örebro", address: "Drottninggatan 12, 702 10 Örebro", contact: "Karin Björk", contactEmail: "karin.bjork@test-sonepar.se", contactPhone: "+46 19 666 77 88" },
      ],
    },
    {
      id: "ss-436-40-00", title: "Elinstallationsreglerna SS 436 40 00",
      description: "Fördjupad utbildning i svenska elinstallationsreglerna SS 436 40 00, utgåva 3. Aktuella regler för installation av lågspänningsanläggningar.",
      forWho: "Elinstallatörer, elprojektörer, kontrollansvariga och fastighetsägare.",
      content: "Genomgång av samtliga kapitel i SS 436 40 00, praktiska exempel, beräkningsövningar, skydd mot elchock, överströmsskydd och kontroll av anläggning.",
      other: "Deltagare rekommenderas ha grundläggande kunskap i eltekniska begrepp. Kursmaterial och handbok ingår.",
      price: "6 500 kr", duration: "1 dag", supplier: "RBN Utbildning", category: "Elsäkerhet & Installation",
      sessions: [
        { id: "ss1", city: "Stockholm", start: "2026-04-24T08:00:00.000Z", end: "2026-04-24T16:00:00.000Z", status: "Öppen", location: "Sonepar Stockholm", address: "Kungsgatan 32, 111 35 Stockholm", contact: "Erik Andersson", contactEmail: "erik.andersson@test-sonepar.se", contactPhone: "+46 8 123 45 67" },
        { id: "ss2", city: "Västerås", start: "2026-05-29T08:00:00.000Z", end: "2026-05-29T16:00:00.000Z", status: "Öppen", location: "Sonepar Västerås", address: "Vasagatan 2, 722 15 Västerås", contact: "Anders Holm", contactEmail: "anders.holm@test-sonepar.se", contactPhone: "+46 21 444 55 66" },
      ],
    },
    {
      id: "praktisk-elteknik", title: "Praktisk elteknik för fastighetspersonal",
      description: "Applicerad elkunskap för drift- och fastighetspersonal utan formell elektrikerutbildning. Fokus på säkerhet och vardagliga arbetsmoment.",
      forWho: "Fastighetsskötare, drifttekniker, vaktmästare och annan personal som behöver grundläggande elteknisk förståelse för sitt arbete.",
      content: "Grundläggande ellära, vanliga komponenter och hur de fungerar, felsökning på låg nivå, säkert arbetssätt, när elektriker måste kontaktas.",
      other: "Ingen förkunskap krävs. Praktiska demonstrationer och handson-övningar.",
      price: "4 200 kr", duration: "1 dag", supplier: "RBN Utbildning", category: "Elsäkerhet & Installation",
      sessions: [
        { id: "pes1", city: "Göteborg", start: "2026-05-06T08:00:00.000Z", end: "2026-05-06T16:00:00.000Z", status: "Öppen", location: "Sonepar Göteborg", address: "Kungsportsavenyen 10, 411 36 Göteborg", contact: "Maria Nilsson", contactEmail: "maria.nilsson@test-sonepar.se", contactPhone: "+46 31 987 65 43" },
        { id: "pes2", city: "Jönköping", start: "2026-06-02T08:00:00.000Z", end: "2026-06-02T16:00:00.000Z", status: "Öppen", location: "Sonepar Jönköping", address: "Hamngatan 4, 553 16 Jönköping", contact: "Lena Ek", contactEmail: "lena.ek@test-sonepar.se", contactPhone: "+46 36 111 22 33" },
      ],
    },
    {
      id: "fIDdLpGL9fmOuy", title: "Assa ABLOY ARX — Larm i ARX",
      description: "Lär dig integrera och konfigurera larmfunktioner i passersystemet Assa ABLOY ARX. Hur larm och passersystem samverkar för maximal säkerhet.",
      forWho: "Säkerhetstekniker, installatörer och administratörer som arbetar med passersystem och larm i Assa ABLOY ARX.",
      content: "Konfiguration av larmzoner, koppling mellan passage och larm, larmtillstånd, behörigheter, integration med externa larmcentraler samt felsökning.",
      other: "Förkunskap i ARX-systemet rekommenderas. Kursen inkluderar digitalt kursmaterial, diplom samt lunch och fika under båda dagarna.",
      price: "8 500 kr", duration: "2 dagar", supplier: "Assa ABLOY", category: "Produktutbildningar",
      sessions: [
        { id: "s1", city: "Stockholm", start: "2026-04-10T09:00:00.000Z", end: "2026-04-12T16:00:00.000Z", status: "Öppen", location: "Sonepar Stockholm", address: "Kungsgatan 32, 111 35 Stockholm", contact: "Erik Andersson", contactEmail: "erik.andersson@test-sonepar.se", contactPhone: "+46 8 123 45 67" },
        { id: "s2", city: "Västerås", start: "2026-04-28T08:00:00.000Z", end: "2026-04-28T17:00:00.000Z", status: "Öppen", location: "Sonepar Västerås", address: "Vasagatan 2, 722 15 Västerås", contact: "Anders Holm", contactEmail: "anders.holm@test-sonepar.se", contactPhone: "+46 21 444 55 66" },
      ],
    },
    {
      id: "DunxZUYmQ33X5z", title: "RCO M5 Mega",
      description: "Beskrivning RCO M5 Mega",
      forWho: "Målgrupp RCO M5 Mega",
      content: "Innehåll RCO M5 Mega",
      other: "Vi varvar teori med praktiska övningar baserade på verkliga case. Möjlighet till certifiering finns som tillval.",
      price: "12 900 kr", duration: "3 dagar", supplier: "RCO", category: "Produktutbildningar",
      sessions: [
        { id: "s3", city: "Göteborg", start: "2026-04-15T08:30:00.000Z", end: "2026-04-15T17:00:00.000Z", status: "Få platser kvar", location: "Sonepar Göteborg", address: "Kungsportsavenyen 10, 411 36 Göteborg", contact: "Maria Nilsson", contactEmail: "maria.nilsson@test-sonepar.se", contactPhone: "+46 31 987 65 43" },
        { id: "s4", city: "Linköping", start: "2026-05-05T09:00:00.000Z", end: "2026-05-05T17:00:00.000Z", status: "Öppen", location: "Sonepar Linköping", address: "Storgatan 8, 582 23 Linköping", contact: "Peter Sjögren", contactEmail: "peter.sjogren@test-sonepar.se", contactPhone: "+46 13 888 99 00" },
      ],
    },
    {
      id: "hprF1dn5XTAI68", title: "TP-Link Kamerakurs",
      description: "Beskrivning TP-Link Kamerakurs",
      forWho: "Målgrupp TP-Link Kamerakurs",
      content: "Innehåll TP-Link Kamerakurs",
      other: "Deltagare förväntas ha med egen dator. Förberedande övningsfiler skickas ut 1 vecka innan.",
      price: "4 900 kr", duration: "1 dag", supplier: "TP-Link", category: "Produktutbildningar",
      sessions: [
        { id: "s5", city: "Malmö", start: "2026-04-20T10:00:00.000Z", end: "2026-04-22T15:00:00.000Z", status: "Fullbokad", location: "Sonepar Malmö", address: "Stortorget 5, 211 22 Malmö", contact: "Johan Lindgren", contactEmail: "johan.lindgren@test-sonepar.se", contactPhone: "+46 40 555 12 34" },
        { id: "s6", city: "Jönköping", start: "2026-04-12T09:00:00.000Z", end: "2026-04-13T16:30:00.000Z", status: "Fullbokad", location: "Sonepar Jönköping", address: "Hamngatan 4, 553 16 Jönköping", contact: "Lena Ek", contactEmail: "lena.ek@test-sonepar.se", contactPhone: "+46 36 111 22 33" },
      ],
    },
    {
      id: "txxt64RcRPBT5s", title: "Excel Kat7A-certifiering",
      description: "Beskrivning Excel Kat7A-certifiering",
      forWho: "Målgrupp Excel Kat7A-certifiering",
      content: "Innehåll Excel Kat7A-certifiering",
      other: "Vi kan genomföra utbildningen på plats i era lokaler för grupper upp till 12 personer.",
      price: "1 800 kr", duration: "4 timmar", supplier: "Excel", category: "Produktutbildningar",
      sessions: [
        { id: "s7", city: "Uppsala", start: "2026-04-25T09:00:00.000Z", end: "2026-04-26T16:00:00.000Z", status: "Stängd", location: "Sonepar Uppsala", address: "Dragarbrunnsgatan 15, 753 20 Uppsala", contact: "Sofia Berg", contactEmail: "sofia.berg@test-sonepar.se", contactPhone: "+46 18 222 33 44" },
        { id: "s8", city: "Örebro", start: "2026-05-02T09:00:00.000Z", end: "2026-05-03T16:00:00.000Z", status: "Få platser kvar", location: "Sonepar Örebro", address: "Drottninggatan 12, 702 10 Örebro", contact: "Karin Björk", contactEmail: "karin.bjork@test-sonepar.se", contactPhone: "+46 19 666 77 88" },
      ],
    },
  ];

  /* ======================================================
     HELPERS
  ====================================================== */
  function fmtDate(d) {
    var dt = new Date(d);
    var m = ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"];
    return dt.getDate() + " " + m[dt.getMonth()] + " " + dt.getFullYear();
  }
  function fmtTime(d) {
    var dt = new Date(d);
    return (dt.getHours()<10?"0":"") + dt.getHours() + ":" + (dt.getMinutes()<10?"0":"") + dt.getMinutes();
  }
  function canBook(s) { return s === "Öppen" || s === "Få platser kvar"; }

  function el(tag, a, c) {
    var n = document.createElement(tag);
    if (a) Object.keys(a).forEach(function(k) {
      if (k === "style" && typeof a[k] === "object") Object.assign(n.style, a[k]);
      else if (k.indexOf("on") === 0) n.addEventListener(k.slice(2).toLowerCase(), a[k]);
      else if (k === "className") n.className = a[k];
      else if (k === "innerHTML") n.innerHTML = a[k];
      else n.setAttribute(k, a[k]);
    });
    if (c) {
      if (typeof c === "string") n.textContent = c;
      else if (Array.isArray(c)) c.forEach(function(ch) { if (ch) n.appendChild(typeof ch === "string" ? document.createTextNode(ch) : ch); });
      else n.appendChild(c);
    }
    return n;
  }

  /* ======================================================
     STYLES
  ====================================================== */
  var css = document.createElement("style");
  css.textContent = [
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');",
    ".sw{font-family:'Roboto',sans-serif;max-width:960px;margin:0 auto;background:#fff;border-radius:0;box-sizing:border-box;color:#333;line-height:1.6;font-size:15px}",
    ".sw *{box-sizing:border-box}",

    /* Header */
    ".sw-hdr{background:#27348B;padding:24px 32px;display:flex;align-items:center;justify-content:space-between}",
    ".sw-hdr-title{color:#fff;font-size:22px;font-weight:700;letter-spacing:-0.3px}",
    ".sw-hdr-powered{color:rgba(255,255,255,0.5);font-size:12px;text-decoration:none}",
    ".sw-hdr-powered:hover{color:rgba(255,255,255,0.8)}",

    /* Tabs */
    ".sw-tabs{background:#f5f6f8;border-bottom:2px solid #e0e3e8;display:flex;overflow-x:auto;scrollbar-width:none;padding:0 24px}",
    ".sw-tabs::-webkit-scrollbar{display:none}",
    ".sw-tab{padding:14px 20px;font-size:14px;font-weight:500;color:#666;cursor:pointer;border:none;background:none;border-bottom:3px solid transparent;margin-bottom:-2px;white-space:nowrap;font-family:inherit;transition:all .2s ease}",
    ".sw-tab:hover{color:#27348B}",
    ".sw-tab--active{color:#27348B;border-bottom-color:#009EE3;font-weight:700}",

    /* Body */
    ".sw-body{padding:0}",

    /* Breadcrumb */
    ".sw-bread{padding:16px 32px;font-size:13px;color:#888;border-bottom:1px solid #eee}",
    ".sw-bread a{color:#009EE3;text-decoration:none;cursor:pointer}",
    ".sw-bread a:hover{text-decoration:underline}",
    ".sw-bread span{color:#888}",

    /* Course list */
    ".sw-list{padding:24px 32px}",
    ".sw-card{border:1px solid #e0e3e8;border-radius:8px;padding:20px 24px;margin-bottom:12px;cursor:pointer;transition:all .2s ease;background:#fff}",
    ".sw-card:hover{border-color:#009EE3;box-shadow:0 2px 12px rgba(0,158,227,0.08)}",
    ".sw-card:last-child{margin-bottom:0}",
    ".sw-card-top{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}",
    ".sw-card-supplier{display:inline-block;font-size:11px;font-weight:700;color:#27348B;background:#EDF0F9;padding:3px 10px;border-radius:4px;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px}",
    ".sw-card-title{font-size:17px;font-weight:700;color:#27348B;margin-bottom:6px}",
    ".sw-card-meta{display:flex;gap:16px;flex-wrap:wrap;font-size:13px;color:#666;margin-top:8px}",
    ".sw-card-price{font-size:17px;font-weight:700;color:#27348B;text-align:right;white-space:nowrap}",
    ".sw-card-sessions-count{font-size:12px;color:#888;text-align:right;margin-top:4px}",

    /* Detail page */
    ".sw-detail{display:flex;gap:0;flex-wrap:wrap}",
    ".sw-detail-left{flex:1;min-width:300px;padding:32px;border-right:1px solid #eee}",
    ".sw-detail-right{width:340px;padding:32px;background:#fafbfc}",

    /* Detail header */
    ".sw-detail-supplier{display:inline-block;font-size:11px;font-weight:700;color:#fff;background:#27348B;padding:4px 12px;border-radius:4px;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px}",
    ".sw-detail-title{font-size:24px;font-weight:700;color:#27348B;margin:0 0 16px;line-height:1.3}",
    ".sw-detail-info{display:flex;gap:24px;flex-wrap:wrap;margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid #eee}",
    ".sw-detail-info-item{text-align:center}",
    ".sw-detail-info-label{font-size:12px;color:#888;font-weight:500;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px}",
    ".sw-detail-info-value{font-size:15px;font-weight:700;color:#27348B}",

    /* Accordion */
    ".sw-acc{border-bottom:1px solid #eee}",
    ".sw-acc-trigger{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 0;background:none;border:none;cursor:pointer;font-family:inherit;font-size:15px;font-weight:600;color:#27348B;text-align:left}",
    ".sw-acc-trigger:hover{color:#009EE3}",
    ".sw-acc-arrow{font-size:18px;color:#999;transition:transform .2s ease;font-weight:300}",
    ".sw-acc-arrow--open{transform:rotate(180deg)}",
    ".sw-acc-content{padding:0 0 16px;font-size:14px;color:#555;line-height:1.7;display:none}",
    ".sw-acc-content--open{display:block}",

    /* Sessions panel */
    ".sw-sessions-title{font-size:16px;font-weight:700;color:#27348B;margin:0 0 16px}",
    ".sw-session{border:1px solid #e0e3e8;border-radius:8px;padding:16px;margin-bottom:10px;background:#fff}",
    ".sw-session:last-of-type{margin-bottom:0}",
    ".sw-session-city{font-size:15px;font-weight:700;color:#333;margin-bottom:2px}",
    ".sw-session-address{font-size:12px;color:#888;margin-bottom:8px}",
    ".sw-session-row{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}",
    ".sw-session-date{font-size:13px;color:#555}",
    ".sw-session-time{font-size:13px;color:#888}",

    /* Status badges */
    ".sw-badge{display:inline-block;font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px}",
    ".sw-badge--open{background:#e8f5e9;color:#2e7d32}",
    ".sw-badge--few{background:#fff3e0;color:#e65100}",
    ".sw-badge--full{background:#fce4ec;color:#c62828}",
    ".sw-badge--closed{background:#f3e5f5;color:#7b1fa2}",

    /* Buttons */
    ".sw-btn{display:inline-block;padding:10px 24px;border:none;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;text-align:center;transition:all .15s ease;text-transform:uppercase;letter-spacing:0.5px}",
    ".sw-btn--primary{background:#009EE3;color:#fff}",
    ".sw-btn--primary:hover{background:#0080C0}",
    ".sw-btn--disabled{background:#ddd;color:#999;cursor:default}",
    ".sw-btn--disabled:hover{background:#ddd}",
    ".sw-btn--outline{background:#fff;color:#27348B;border:1px solid #27348B}",
    ".sw-btn--outline:hover{background:#EDF0F9}",
    ".sw-btn--full{width:100%}",
    ".sw-btn--book{margin-top:10px;width:100%}",

    /* Booking form */
    ".sw-form{padding:32px;border-top:1px solid #eee}",
    ".sw-form-title{font-size:20px;font-weight:700;color:#27348B;margin:0 0 4px}",
    ".sw-form-sub{font-size:14px;color:#666;margin-bottom:20px}",
    ".sw-form-contact{font-size:13px;color:#555;padding:14px 16px;background:#EDF0F9;border-radius:8px;margin-bottom:20px;border-left:4px solid #27348B}",
    ".sw-form-contact strong{display:block;margin-bottom:4px;color:#27348B}",
    ".sw-form-row{margin-bottom:14px}",
    ".sw-form-label{display:block;font-size:13px;color:#555;margin-bottom:4px;font-weight:500}",
    ".sw-form-input{width:100%;padding:11px 14px;border:1px solid #d0d5dd;border-radius:6px;font-size:14px;outline:none;font-family:inherit;transition:border-color .15s ease}",
    ".sw-form-input:focus{border-color:#009EE3;box-shadow:0 0 0 3px rgba(0,158,227,0.1)}",
    ".sw-form-actions{display:flex;gap:10px;margin-top:22px}",

    /* Success */
    ".sw-success{padding:48px 32px;text-align:center}",
    ".sw-success-icon{width:56px;height:56px;border-radius:50%;background:#e8f5e9;color:#2e7d32;font-size:28px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}",
    ".sw-success-title{font-size:18px;font-weight:700;color:#27348B;margin-bottom:8px}",
    ".sw-success-text{font-size:14px;color:#666;max-width:400px;margin:0 auto}",

    /* Empty */
    ".sw-empty{text-align:center;padding:48px 32px;color:#999;font-size:14px}",

    /* Responsive */
    "@media(max-width:768px){",
    "  .sw-detail{flex-direction:column}",
    "  .sw-detail-left{border-right:none;padding:24px 20px}",
    "  .sw-detail-right{width:100%;padding:24px 20px;border-top:1px solid #eee}",
    "  .sw-hdr{padding:20px}",
    "  .sw-list{padding:20px}",
    "  .sw-bread{padding:12px 20px}",
    "  .sw-card-top{flex-direction:column;gap:8px}",
    "  .sw-form{padding:24px 20px}",
    "  .sw-tabs{padding:0 12px}",
    "  .sw-tab{padding:12px 14px;font-size:13px}",
    "}",
  ].join("\n");
  document.head.appendChild(css);

  /* ======================================================
     STATE
  ====================================================== */
  var state = { tab: "Alla", courseId: null, bookingSession: null, sent: false, openAccordions: {} };
  var root = document.getElementById("rbn-kurser");
  if (!root) return;

  // Build categories
  var categories = ["Alla", "Elsäkerhet & Installation", "Produktutbildningar"];

  function getCoursesForTab(tab) {
    if (tab === "Alla") {
      // Blanda kategorier genom att interleava
      var byCat = {};
      COURSES.forEach(function(c) {
        if (!byCat[c.category]) byCat[c.category] = [];
        byCat[c.category].push(c);
      });
      var cats = Object.keys(byCat);
      var result = [];
      var maxLen = Math.max.apply(null, cats.map(function(k) { return byCat[k].length; }));
      for (var i = 0; i < maxLen; i++) {
        cats.forEach(function(cat) {
          if (byCat[cat][i]) result.push(byCat[cat][i]);
        });
      }
      return result;
    }
    return COURSES.filter(function(c) { return c.category === tab; });
  }

  function badgeClass(s) {
    if (s === "Öppen") return "sw-badge sw-badge--open";
    if (s === "Få platser kvar") return "sw-badge sw-badge--few";
    if (s === "Fullbokad") return "sw-badge sw-badge--full";
    return "sw-badge sw-badge--closed";
  }

  /* ======================================================
     RENDER
  ====================================================== */
  function render() {
    root.innerHTML = "";
    var w = el("div", { className: "sw" });
    var course = state.courseId ? COURSES.find(function(c) { return c.id === state.courseId; }) : null;

    /* === HEADER === */
    w.appendChild(el("div", { className: "sw-hdr" }, [
      el("span", { className: "sw-hdr-title" }, "Utbildningar"),
    ]));

    /* === TABS === */
    var tabs = el("div", { className: "sw-tabs" });
    categories.forEach(function(cat) {
      var active = cat === state.tab;
      tabs.appendChild(el("button", {
        className: "sw-tab" + (active ? " sw-tab--active" : ""),
        onClick: function() { state.tab = cat; state.courseId = null; state.bookingSession = null; state.sent = false; state.openAccordions = {}; render(); },
      }, cat === "Alla" ? "Alla utbildningar" : cat));
    });
    w.appendChild(tabs);

    /* === BREADCRUMB === */
    if (course) {
      var bread = el("div", { className: "sw-bread" });
      var bHome = el("a", { onClick: function() { state.courseId = null; state.bookingSession = null; state.sent = false; state.openAccordions = {}; render(); } }, "Utbildningar");
      bread.appendChild(bHome);
      bread.appendChild(el("span", null, "  /  "));
      bread.appendChild(el("span", null, course.title));
      w.appendChild(bread);
    }

    /* === COURSE LIST === */
    if (!course) {
      var body = el("div", { className: "sw-list" });
      var courses = getCoursesForTab(state.tab);

      if (courses.length === 0) {
        body.appendChild(el("div", { className: "sw-empty" }, "Inga utbildningar att visa."));
      }

      courses.forEach(function(c) {
        var openCount = c.sessions.filter(function(s) { return canBook(s.status); }).length;
        var card = el("div", { className: "sw-card", onClick: function() { state.courseId = c.id; state.bookingSession = null; state.sent = false; state.openAccordions = {}; render(); } }, [
          el("div", { className: "sw-card-top" }, [
            el("div", { style: { flex: "1", minWidth: "0" } }, [
              el("div", { className: "sw-card-supplier" }, c.supplier),
              el("div", { className: "sw-card-title" }, c.title),
              el("div", { className: "sw-card-meta" }, [
                el("span", null, "⏱ " + c.duration),
                el("span", null, "📍 " + c.sessions.length + " ort" + (c.sessions.length !== 1 ? "er" : "")),
                el("span", null, openCount + " öppna tillfällen"),
              ]),
            ]),
            el("div", null, [
              el("div", { className: "sw-card-price" }, c.price),
              el("div", { className: "sw-card-sessions-count" }, c.sessions.length + " tillfälle" + (c.sessions.length !== 1 ? "n" : "")),
            ]),
          ]),
        ]);
        body.appendChild(card);
      });
      w.appendChild(body);
    }

    /* === COURSE DETAIL === */
    if (course && state.bookingSession === null) {
      var detail = el("div", { className: "sw-detail" });

      /* LEFT SIDE */
      var left = el("div", { className: "sw-detail-left" });

      left.appendChild(el("div", { className: "sw-detail-supplier" }, course.supplier));
      left.appendChild(el("h1", { className: "sw-detail-title" }, course.title));

      /* Info bar */
      var infoBar = el("div", { className: "sw-detail-info" });
      [
        { label: "Pris", value: course.price },
        { label: "Längd", value: course.duration },
        { label: "Leverantör", value: course.supplier },
      ].forEach(function(item) {
        infoBar.appendChild(el("div", { className: "sw-detail-info-item" }, [
          el("div", { className: "sw-detail-info-label" }, item.label),
          el("div", { className: "sw-detail-info-value" }, item.value),
        ]));
      });
      left.appendChild(infoBar);

      /* Accordions */
      var sections = [
        { key: "desc", title: "Om utbildningen", text: course.description },
        { key: "content", title: "Innehåll", text: course.content },
        { key: "forwho", title: "För vem?", text: course.forWho },
        { key: "other", title: "Övrigt", text: course.other },
      ];

      sections.forEach(function(sec) {
        if (!sec.text) return;
        var isOpen = !!state.openAccordions[sec.key];
        var acc = el("div", { className: "sw-acc" });

        var trigger = el("button", { className: "sw-acc-trigger", onClick: function() {
          state.openAccordions[sec.key] = !state.openAccordions[sec.key];
          render();
        }}, [
          el("span", null, sec.title),
          el("span", { className: "sw-acc-arrow" + (isOpen ? " sw-acc-arrow--open" : "") }, "▾"),
        ]);
        acc.appendChild(trigger);

        var content = el("div", { className: "sw-acc-content" + (isOpen ? " sw-acc-content--open" : "") });
        content.appendChild(el("p", { style: { margin: "0" } }, sec.text));
        acc.appendChild(content);

        left.appendChild(acc);
      });

      detail.appendChild(left);

      /* RIGHT SIDE — Sessions */
      var right = el("div", { className: "sw-detail-right" });
      right.appendChild(el("h3", { className: "sw-sessions-title" }, "Öppna utbildningstillfällen"));

      course.sessions.forEach(function(s, i) {
        var bookable = canBook(s.status);
        var sess = el("div", { className: "sw-session" });

        sess.appendChild(el("div", { className: "sw-session-city" }, s.location));
        sess.appendChild(el("div", { className: "sw-session-address" }, s.address));

        var row = el("div", { className: "sw-session-row" });
        var dateCol = el("div");
        dateCol.appendChild(el("div", { className: "sw-session-date" }, "Start: " + fmtDate(s.start)));
        dateCol.appendChild(el("div", { className: "sw-session-time" }, fmtTime(s.start) + " – " + fmtTime(s.end)));
        row.appendChild(dateCol);
        row.appendChild(el("span", { className: badgeClass(s.status) }, s.status));
        sess.appendChild(row);

        if (bookable) {
          sess.appendChild(el("button", {
            className: "sw-btn sw-btn--primary sw-btn--book",
            onClick: function() { state.bookingSession = i; state.sent = false; render(); },
          }, "Boka plats"));
        } else {
          sess.appendChild(el("button", {
            className: "sw-btn sw-btn--disabled sw-btn--book",
          }, s.status));
        }

        right.appendChild(sess);
      });

      detail.appendChild(right);
      w.appendChild(detail);
    }

    /* === BOOKING FORM === */
    if (course && state.bookingSession !== null) {
      var session = course.sessions[state.bookingSession];

      if (state.sent) {
        w.appendChild(el("div", { className: "sw-success" }, [
          el("div", { className: "sw-success-icon" }, "✓"),
          el("div", { className: "sw-success-title" }, "Tack för din intresseanmälan!"),
          el("div", { className: "sw-success-text" }, "Bekräftelse skickas till dig från " + session.contact + " (" + session.contactEmail + ")."),
          el("button", {
            className: "sw-btn sw-btn--primary",
            style: { marginTop: "24px" },
            onClick: function() { state.courseId = null; state.bookingSession = null; state.sent = false; render(); },
          }, "Tillbaka till utbildningar"),
        ]));
      } else {
        var form = el("div", { className: "sw-form" });

        form.appendChild(el("div", { className: "sw-form-title" }, "Har du frågor eller vill boka plats?"));
        form.appendChild(el("div", { className: "sw-form-sub" }, course.title + " — " + fmtDate(session.start) + " — " + session.location));

        form.appendChild(el("div", { className: "sw-form-contact" }, [
          el("strong", null, "Kontaktperson"),
          document.createTextNode(session.contact),
          el("br"),
          document.createTextNode(session.contactEmail),
          el("br"),
          document.createTextNode(session.contactPhone),
        ]));

        [
          { label: "Ditt namn *", type: "text" },
          { label: "Din e-mail *", type: "email" },
          { label: "Telefonnummer", type: "tel" },
          { label: "Företag *", type: "text" },
          { label: "Antal platser", type: "number" },
        ].forEach(function(f) {
          form.appendChild(el("div", { className: "sw-form-row" }, [
            el("label", { className: "sw-form-label" }, f.label),
            el("input", { className: "sw-form-input", type: f.type, placeholder: f.label.replace(" *", "") + "..." }),
          ]));
        });

        // Message
        form.appendChild(el("div", { className: "sw-form-row" }, [
          el("label", { className: "sw-form-label" }, "Ditt meddelande"),
          el("textarea", { className: "sw-form-input", style: { minHeight: "80px", resize: "vertical" }, placeholder: "Skriv ditt meddelande här..." }),
        ]));

        form.appendChild(el("div", { className: "sw-form-actions" }, [
          el("button", {
            className: "sw-btn sw-btn--primary",
            style: { flex: "1" },
            onClick: function() { state.sent = true; render(); },
          }, "Skicka meddelande"),
          el("button", {
            className: "sw-btn sw-btn--outline",
            onClick: function() { state.bookingSession = null; render(); },
          }, "Avbryt"),
        ]));

        w.appendChild(form);
      }
    }

    root.appendChild(w);
  }

  render();
})();
