#!/usr/bin/env python3
"""Adversarial testbänk för sajtkollen: kör API:t mot 20 sajter med känt/verifierbart
facit och försöker MOTBEVISA varje deterministisk check med en oberoende metod
(html.parser i stället för motorns regex, full CSS-probe i stället för sampling)."""
import json, time, ssl, sys, re
import urllib.request, urllib.error
from html.parser import HTMLParser
from urllib.parse import urljoin

API = "https://stolt-nydesign.joel-d77.workers.dev/api/sajtkoll"
ORIGIN = "https://stolt-nydesign.joel-d77.workers.dev"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
CTX = ssl.create_default_context()

SITES = [
    # egna byggen, facit känt
    "www.stoltmarketing.se", "stoltmarketing.se", "premiebygg.se",
    "www.niklassonsflytt.se", "www.ngtab.se", "www.arkipel.se",
    "www.linguista.se", "efterbo.se", "konforma.se", "rustade.se",
    "www.welovemarketing.se", "kvota.se",
    # konkurrenter fran researchen
    "hjaltebyran.se", "sunbird.se", "regemedia.se", "webbess.se", "seosdesign.se",
    # kanda felfall + tung jatte
    "markarbete-hassleholm.se", "casablancahassleholm.se", "www.ica.se",
]

def api_call(site):
    body = json.dumps({"url": site}).encode()
    req = urllib.request.Request(API, data=body, method="POST", headers={
        "Content-Type": "application/json", "Origin": ORIGIN,
        "User-Agent": UA, "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60, context=CTX) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        try: return {"_apifel": e.code, **json.load(e)}
        except Exception: return {"_apifel": e.code}
    except Exception as e:
        return {"_apifel": type(e).__name__}

class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""; self._in_title = False; self._svg = 0; self._title_done = False
        self.desc = None; self.viewport = False; self.schema = False
        self.tel = False; self.mailto = False
        self.styles = []; self.forms = []; self._form = None
        self._in_script_type = None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "svg": self._svg += 1
        if tag == "title" and self._svg == 0 and not self._title_done: self._in_title = True
        elif tag == "meta":
            n = (a.get("name") or "").lower()
            if n == "viewport": self.viewport = True
            if n == "description": self.desc = (a.get("content") or "").strip()
        elif tag == "script" and (a.get("type") or "").lower() == "application/ld+json":
            self.schema = True
        elif tag == "a":
            href = (a.get("href") or "").lower()
            if href.startswith("tel:"): self.tel = True
            if href.startswith("mailto:"): self.mailto = True
        elif tag == "link":
            rel = (a.get("rel") or "").lower()
            if "stylesheet" in rel and a.get("href"): self.styles.append(a["href"])
        elif tag == "form":
            self._form = {"attrs": " ".join(f'{k}={v}' for k, v in attrs if v), "fields": 0,
                          "textarea": False, "email": False, "inner": ""}
        elif self._form is not None and tag in ("input", "textarea", "select"):
            self._form["fields"] += 1
            if tag == "textarea": self._form["textarea"] = True
            t = (a.get("type") or "").lower(); nm = (a.get("name") or "").lower()
            if t == "email" or "email" in nm or "epost" in nm or "e-post" in nm:
                self._form["email"] = True
    def handle_endtag(self, tag):
        if tag == "svg": self._svg = max(0, self._svg - 1)
        if tag == "title" and self._in_title: self._in_title = False; self._title_done = True
        if tag == "form" and self._form is not None:
            self.forms.append(self._form); self._form = None
    def handle_data(self, d):
        if self._in_title: self.title += d

INTE_KONTAKT = re.compile(r"search|sok\b|login|logga-?in|cart|varukorg|checkout|newsletter|prenumer|comment|jp-carousel|password", re.I)
MARKOR = re.compile(r"wpcf7|gform|elementor-form|formidable|ninja-form|hs-form|fluentform", re.I)

def independent(site):
    """Oberoende facit med riktig HTML-parser + FULL css-probe (ingen sampling)."""
    url = "https://" + site if not site.startswith("http") else site
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "sv-SE"})
    try:
        with urllib.request.urlopen(req, timeout=25, context=CTX) as r:
            final = r.url; enc = r.headers.get("Content-Encoding", "")
            raw = r.read()
    except Exception as e:
        return {"_fel": type(e).__name__}
    try:
        import gzip, io
        html = gzip.decompress(raw).decode("utf-8", "ignore") if enc == "gzip" else raw.decode("utf-8", "ignore")
    except Exception:
        html = raw.decode("utf-8", "ignore")
    p = Parser()
    try: p.feed(html)
    except Exception: pass
    kontaktform = False
    for f in p.forms:
        blob = f["attrs"]
        if INTE_KONTAKT.search(blob): continue
        if MARKOR.search(html) and MARKOR.search(blob):  # markor i attributen
            kontaktform = True; break
        if (f["textarea"] and f["fields"] >= 2) or (f["email"] and f["fields"] >= 3):
            kontaktform = True; break
    # full CSS-probe: ALLA stilmallar, verifierade HTTP-fel
    broken_css = []
    for href in dict.fromkeys(p.styles):
        u = urljoin(final, href)
        try:
            rq = urllib.request.Request(u, method="HEAD", headers={"User-Agent": UA})
            urllib.request.urlopen(rq, timeout=10, context=CTX)
        except urllib.error.HTTPError as e:
            if e.code >= 400:
                # dubbelkolla med GET
                try:
                    rq2 = urllib.request.Request(u, headers={"User-Agent": UA})
                    urllib.request.urlopen(rq2, timeout=10, context=CTX)
                except urllib.error.HTTPError as e2:
                    if e2.code >= 400: broken_css.append((u.split("/")[-1].split("?")[0], e2.code))
                except Exception: pass
        except Exception:
            pass
    return {
        "https": final.startswith("https:"), "viewport": p.viewport, "schema": p.schema,
        "tel": p.tel, "mailto": p.mailto, "kontaktform": kontaktform,
        "title_len": len(re.sub(r"\s+", " ", p.title).strip()),
        "desc_len": len(p.desc) if p.desc is not None else 0,
        "css_count": len(set(p.styles)), "broken_css": broken_css,
        "final": final,
    }

def diff(site, api, ind):
    """Jamfor API-svar mot oberoende facit. Returnerar lista av avvikelser."""
    if "_apifel" in api: return [f"API-FEL {api['_apifel']}"]
    if "_fel" in ind: return [f"(facit-hamtning föll: {ind['_fel']}, hoppar jämförelse)"]
    out = []
    C = {c["id"]: c for c in api.get("checks", [])}
    def val(cid): return C.get(cid, {}).get("value", "?")
    def passed(cid): return C.get(cid, {}).get("pass")
    # https
    if passed("https") != ind["https"]: out.append(f"https: API={val('https')} facit={ind['https']}")
    # viewport
    if passed("mobile") != ind["viewport"]: out.append(f"mobile: API={val('mobile')} facit viewport={ind['viewport']}")
    # schema
    if passed("schema") != ind["schema"]: out.append(f"schema: API={val('schema')} facit={ind['schema']}")
    # title/desc längd (tillåt ±2 tecken för whitespace-normalisering)
    m = re.search(r"(\d+)", val("title") or "")
    if m and abs(int(m.group(1)) - ind["title_len"]) > 2:
        out.append(f"title: API={val('title')} facit={ind['title_len']} tecken")
    m = re.search(r"(\d+)", val("description") or "")
    if ind["desc_len"] and m and abs(int(m.group(1)) - ind["desc_len"]) > 2:
        out.append(f"desc: API={val('description')} facit={ind['desc_len']} tecken")
    if not ind["desc_len"] and C.get("description", {}).get("value") not in ("Saknas",) and "Saknas" not in val("description"):
        out.append(f"desc: API={val('description')} facit=SAKNAS")
    # kontakt
    v = val("contact")
    api_tel = "Telefon" in v; api_form = "Formulär" in v; api_mail = "Mejl-länk" in v
    if api_tel != ind["tel"]: out.append(f"contact tel: API={v} facit tel={ind['tel']}")
    if api_form != ind["kontaktform"]: out.append(f"contact formulär: API={v} facit kontaktform={ind['kontaktform']}")
    if api_mail != ind["mailto"]: out.append(f"contact mejl: API={v} facit mailto={ind['mailto']}")
    # trasiga CSS: API får inte missa någon som facit hittade, och tvärtom
    api_broken = C.get("broken", {})
    api_says_broken = not api_broken.get("pass", True)
    if ind["broken_css"] and not api_says_broken:
        out.append(f"broken: API={api_broken.get('value')} facit trasig CSS={ind['broken_css']}")
    if not ind["broken_css"] and api_says_broken and "stilmall" in api_broken.get("detail", ""):
        out.append(f"broken: API säger trasig stilmall, facit hittar ingen ({api_broken.get('detail','')[:80]})")
    return out

def main():
    results = []
    for i, site in enumerate(SITES):
        t0 = time.time()
        api = api_call(site)
        ind = independent(site)
        d = diff(site, api, ind)
        row = {"site": site, "score": api.get("score"), "verdict": api.get("verdict", "")[:60],
               "avvikelser": d, "sekunder": round(time.time() - t0, 1)}
        results.append(row)
        status = "OK" if not d else ("INFO" if d and d[0].startswith("(") else "AVVIKELSE")
        print(f"[{i+1:02d}/20] {site:32} score={api.get('score','-'):>3} {status}", flush=True)
        for a in d: print("        -", a, flush=True)
        time.sleep(13)  # respektera rate limiten 5/min
    with open("/private/tmp/claude-501/-Users-joelstolt-Desktop-Dev/36f6dc3e-28bb-4219-8204-b97dcbabc65c/scratchpad/sajtkoll-testresultat.json", "w") as f:
        json.dump(results, f, ensure_ascii=False, indent=1)
    n_avv = sum(1 for r in results if r["avvikelser"] and not r["avvikelser"][0].startswith("("))
    print(f"\nKLART: {len(results)} sajter, {n_avv} med avvikelser", flush=True)

    # robusthetstester av API-kontraktet
    print("\n== ROBUSTHET ==", flush=True)
    for probe in ("finns-absolut-inte-99182.se", "localhost", "192.168.1.1", "hejsan"):
        r = api_call(probe)
        ok = "error" in r or "_apifel" in r
        print(f"  {probe:32} -> {'rent fel: ' + str(r.get('error', r.get('_apifel')))[:60] if ok else 'PROBLEM: fick svar!'}", flush=True)
        time.sleep(13)

if __name__ == "__main__":
    main()
