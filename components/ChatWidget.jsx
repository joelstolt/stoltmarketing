"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

// A contextual explanation of a completed site check, opened only by the user.
export default function ChatWidget() {
  const dialogRef = useRef(null), endRef = useRef(null), inputRef = useRef(null);
  const requestRef = useRef(null), generationRef = useRef(0);
  const [context, setContext] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const open = (event) => {
      requestRef.current?.abort();
      generationRef.current += 1;
      setLoading(false);
      setInput("");
      const data = event.detail || {};
      setContext(data.context || "");
      setMessages(data.intro ? [{ role: "assistant", content: data.intro }] : []);
      setError("");
      window.SvarslagretWidget?.close();
      dialogRef.current?.showModal();
      inputRef.current?.focus();
    };
    window.addEventListener("stolt-chat:open", open);
    return () => { window.removeEventListener("stolt-chat:open", open); requestRef.current?.abort(); };
  }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ block: "nearest" }); }, [messages]);
  async function send(event) {
    event.preventDefault();
    if (!input.trim() || loading) return;
    const next = [...messages, { role: "user", content: input.trim() }];
    const question = input.trim();
    const generation = ++generationRef.current;
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 60000);
    setMessages(next); setInput(""); setLoading(true); setError("");
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next, context }), signal: controller.signal });
      if (!response.ok || !response.body) throw new Error();
      const reader = response.body.getReader(), decoder = new TextDecoder();
      let content = "";
      while (true) {
        const { value, done } = await reader.read();
        if (generation !== generationRef.current) return;
        content += decoder.decode(value, { stream: !done });
        setMessages([...next, { role: "assistant", content }]);
        if (done) break;
      }
    } catch {
      if (generation === generationRef.current) {
        setError("AI-svaret kunde inte hämtas. Försök igen eller kontakta Joel för hjälp med resultatet.");
        setInput(question);
        setMessages(next.slice(0, -1));
      }
    } finally {
      clearTimeout(timeout);
      if (generation === generationRef.current) { setLoading(false); inputRef.current?.focus(); }
    }
  }
  return <dialog ref={dialogRef} onClose={() => { generationRef.current += 1; requestRef.current?.abort(); setLoading(false); }} aria-labelledby="sitecheck-chat-title" className="m-auto w-[min(560px,calc(100%_-_24px))] max-h-[85dvh] rounded-2xl border border-border bg-surface text-body p-0 backdrop:bg-black/70">
    <div className="flex justify-between items-start p-5 border-b border-border"><div><h2 id="sitecheck-chat-title" className="text-[24px]">Frågor om din sajtkoll</h2><p className="text-[13px] text-muted">AI-stöd. Kontrollera viktiga slutsatser med Joel.</p></div><button type="button" className="p-3" aria-label="Stäng frågor om sajtkollen" onClick={() => dialogRef.current?.close()}><X size={20} aria-hidden="true" /></button></div>
    <div role="log" aria-label="Samtal om din sajtkoll" aria-live="polite" aria-busy={loading} className="h-[40dvh] overflow-y-auto p-5 space-y-4">{messages.map((message, i) => <div key={i} className={`rounded-xl p-4 whitespace-pre-wrap text-[16px] ${message.role === "user" ? "bg-primary-light ml-8" : "bg-base mr-4"}`}><p className="text-[12px] text-muted mb-1">{message.role === "user" ? "Du" : "AI-assistent"}</p>{message.content}</div>)}<div ref={endRef} /></div>
    <div className="p-5 border-t border-border">{error && <p role="alert" className="text-red-200 mb-3">{error}</p>}<form onSubmit={send} className="flex gap-2 items-end"><label className="form-field flex-1" htmlFor="sitecheck-question">Din fråga<input ref={inputRef} id="sitecheck-question" maxLength={2000} required value={input} onChange={(e) => setInput(e.target.value)} /></label><button type="submit" disabled={loading} className="premium-btn !p-3">{loading ? "Svarar..." : "Skicka"}</button></form><a href="/kontakt" className="text-[14px] underline inline-block mt-4">Fråga Joel om resultatet</a></div>
  </dialog>;
}
