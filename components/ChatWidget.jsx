"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { chatConfig } from "@/lib/chat-config";

// ============================================================
// STOLT CHAT WIDGET v3 — Premium
// AI chat + email fallback + animations + dark theme
// ============================================================

function generateId() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function playNotification() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
  } catch {}
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [emailData, setEmailData] = useState({ name: "", email: "", message: "" });
  const [newMsgFlash, setNewMsgFlash] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageCountRef = useRef(0);

  const isDark = chatConfig.darkMode ?? false;
  const pc = chatConfig.primaryColor || "#1D4ED8";
  const pcd = chatConfig.primaryColorDark || "#1E3A8A";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, showEmailForm]);

  useEffect(() => {
    if (open && !showEmailForm) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open, showEmailForm]);

  // Re-focus input after AI finishes responding
  useEffect(() => {
    if (!loading && open && !showEmailForm) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [loading, open, showEmailForm]);

  useEffect(() => {
    const aiMsgs = messages.filter((m) => m.role === "assistant" && m.content);
    if (aiMsgs.length > messageCountRef.current) {
      messageCountRef.current = aiMsgs.length;
      if (!open) {
        setNewMsgFlash(true);
        setTimeout(() => setNewMsgFlash(false), 2000);
      }
      playNotification();
    }
  }, [messages, open]);

  const sendMessage = useCallback(
    async (e) => {
      e?.preventDefault();
      const text = input.trim();
      if (!text || loading) return;

      setHasInteracted(true);
      setInput("");

      const userMsg = { role: "user", content: text };
      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        });
        if (!res.ok) throw new Error("API error");

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = "";
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantText += decoder.decode(value, { stream: true });
          const t = assistantText;
          setMessages((prev) => {
            const u = [...prev];
            u[u.length - 1] = { role: "assistant", content: t };
            return u;
          });
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Tyvärr kunde jag inte svara just nu. Testa att mejla via knappen nedan." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, messages, loading]
  );

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = emailData;
    if (!name.trim() || !email.trim() || !message.trim() || emailSending) return;
    setEmailSending(true);

    const chatHistory = messages
      .map((m) => `${m.role === "user" ? "Besökare" : "AI"}: ${m.content}`)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, chatHistory }),
      });
      if (!res.ok) throw new Error("Send failed");
      setEmailSent(true);
      setTimeout(() => {
        setShowEmailForm(false);
        setEmailSent(false);
        setEmailData({ name: "", email: "", message: "" });
      }, 3000);
    } catch {
      alert("Kunde inte skicka. Testa mejla direkt istället.");
    } finally {
      setEmailSending(false);
    }
  };

  return (
    <>
      {/* ---- Chat Panel ---- */}
      <div
        style={{
          position: "fixed",
          bottom: open ? "24px" : "-100%",
          right: "24px",
          width: "min(400px, calc(100vw - 32px))",
          height: "min(620px, calc(100dvh - 100px))",
          zIndex: 99998,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: open ? "auto" : "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          background: isDark ? "#111113" : "#FFFFFF",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
          boxShadow: isDark
            ? "0 24px 80px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)"
            : "0 24px 80px -12px rgba(0,0,0,0.15), 0 8px 24px -8px rgba(0,0,0,0.08)",
          overflow: "hidden",
          fontFamily: "inherit",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 18px",
            background: chatConfig.headerGradient || `linear-gradient(135deg, ${pc} 0%, ${pcd} 100%)`,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M9 13v2" /><path d="M15 13v2" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "15px", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{chatConfig.siteName}</div>
              <div style={{ fontSize: "11.5px", opacity: 0.85, display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px rgba(74,222,128,0.5)", animation: "stolt-chat-online 2s ease-in-out infinite" }} />
                AI-assistent — svarar direkt
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Stäng chatt"
            style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "8px", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(255,255,255,0.7)", transition: "all 0.2s", position: "relative" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", background: isDark ? "#111113" : "#FFFFFF" }}>
          {showEmailForm ? (
            <EmailForm emailData={emailData} setEmailData={setEmailData} onSubmit={handleEmailSubmit} onBack={() => setShowEmailForm(false)} emailSent={emailSent} emailSending={emailSending} isDark={isDark} primaryColor={pc} />
          ) : (
            <>
              {messages.length === 0 && (
                <div style={{ padding: "4px 0" }}>
                  <MessageBubble role="assistant" content={chatConfig.welcomeMessage} isDark={isDark} primaryColor={pc} isNew />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px", paddingLeft: "42px" }}>
                    {(chatConfig.quickQuestions || ["Vilka tjänster erbjuder ni?", "Vad kostar en hemsida?", "Berätta om era kundcase"]).map((q, i) => (
                      <button
                        key={q}
                        onClick={() => { setInput(q); setTimeout(() => document.getElementById("stolt-chat-form")?.requestSubmit(), 50); }}
                        style={{ padding: "7px 14px", fontSize: "12.5px", borderRadius: "20px", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "rgba(255,255,255,0.05)" : "#fff", color: pc, cursor: "pointer", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)", whiteSpace: "nowrap", fontWeight: 500, animation: `stolt-chat-fadeUp 0.4s ease-out ${0.5 + i * 0.1}s both` }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = pc; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = pc; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.05)" : "#fff"; e.currentTarget.style.color = pc; e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
                      >{q}</button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <MessageBubble key={i} role={msg.role} content={msg.content} isDark={isDark} primaryColor={pc} isNew={i >= messages.length - 2} />
              ))}
              {loading && messages[messages.length - 1]?.role === "user" && <TypingIndicator isDark={isDark} />}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input */}
        {!showEmailForm && (
          <>
            {hasInteracted && (
              <div style={{ padding: "0 14px 4px", flexShrink: 0 }}>
                <button
                  onClick={() => setShowEmailForm(true)}
                  style={{ width: "100%", padding: "8px", fontSize: "12.5px", color: isDark ? "rgba(255,255,255,0.5)" : "#6B7280", background: "transparent", border: `1px dashed ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, borderRadius: "10px", cursor: "pointer", transition: "all 0.25s", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontWeight: 500 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.05)" : "#f9fafb"; e.currentTarget.style.borderColor = pc; e.currentTarget.style.color = pc; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"; e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.5)" : "#6B7280"; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  {chatConfig.emailButtonText || "Fick du inte svar? Mejla oss"}
                </button>
              </div>
            )}
            <div style={{ padding: "10px 14px 12px", borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}`, display: "flex", gap: "8px", alignItems: "center", flexShrink: 0, background: isDark ? "#111113" : "#FFFFFF" }}>
              <form id="stolt-chat-form" onSubmit={sendMessage} style={{ display: "flex", gap: "8px", alignItems: "center", width: "100%" }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={chatConfig.placeholder || "Skriv ett meddelande..."}
                  disabled={loading}
                  style={{ flex: 1, padding: "10px 14px", borderRadius: "12px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "rgba(255,255,255,0.05)" : "#f4f4f5", color: isDark ? "#fff" : "#0c0f1a", fontSize: "16px", outline: "none", transition: "all 0.2s", fontFamily: "inherit" }}
                  onFocus={(e) => { e.target.style.borderColor = pc; e.target.style.boxShadow = `0 0 0 3px ${pc}18`; }}
                  onBlur={(e) => { e.target.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"; e.target.style.boxShadow = "none"; }}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Skicka"
                  style={{ width: "40px", height: "40px", borderRadius: "12px", border: "none", background: loading || !input.trim() ? (isDark ? "rgba(255,255,255,0.05)" : "#f0f0f0") : pc, color: loading || !input.trim() ? (isDark ? "rgba(255,255,255,0.2)" : "#aaa") : "#fff", cursor: loading || !input.trim() ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
              </form>
            </div>
          </>
        )}

        {/* Footer */}
        <div style={{ padding: "3px 14px 8px", textAlign: "center", fontSize: "10px", color: isDark ? "rgba(255,255,255,0.2)" : "#c0c0c0", flexShrink: 0 }}>
          <a href="https://stoltmarketing.se/tjanster/ai-automation" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = pc)} onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.2)" : "#c0c0c0")}>
            Powered by Stolt Chat ⚡
          </a>
        </div>
      </div>

      {/* ---- Floating Button ---- */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Stäng chatt" : "Öppna chatt"}
        style={{ position: "fixed", bottom: "24px", right: "24px", width: "56px", height: "56px", borderRadius: "16px", border: "none", background: chatConfig.headerGradient || `linear-gradient(135deg, ${pc} 0%, ${pcd} 100%)`, color: "#fff", cursor: "pointer", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 32px -4px ${pc}66, 0 4px 12px -2px rgba(0,0,0,0.12)`, transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)", transform: open ? "scale(0.9) rotate(90deg)" : "scale(1)" }}
        onMouseEnter={(e) => { if (!open) e.currentTarget.style.transform = "scale(1.08)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = open ? "scale(0.9) rotate(90deg)" : "scale(1)"; }}
      >
        {newMsgFlash && !open && (
          <span style={{ position: "absolute", top: "-4px", right: "-4px", width: "14px", height: "14px", borderRadius: "50%", background: "#ef4444", border: `2px solid ${isDark ? "#111" : "#fff"}`, animation: "stolt-chat-bounce 0.5s ease-out" }} />
        )}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </button>

      {!open && !hasInteracted && (
        <div style={{ position: "fixed", bottom: "24px", right: "24px", width: "56px", height: "56px", borderRadius: "16px", zIndex: 99997, pointerEvents: "none", animation: "stolt-chat-pulse 2.5s ease-in-out infinite" }} />
      )}

      <style>{`
        @keyframes stolt-chat-pulse { 0%, 100% { box-shadow: 0 0 0 0 ${pc}44; } 50% { box-shadow: 0 0 0 14px ${pc}00; } }
        @keyframes stolt-chat-dot { 0%, 80%, 100% { transform: scale(0.4); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }
        @keyframes stolt-chat-fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes stolt-chat-slideIn { from { opacity: 0; transform: translateY(6px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes stolt-chat-bounce { 0% { transform: scale(0); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
        @keyframes stolt-chat-online { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </>
  );
}

// ============================================================
// Sub-components
// ============================================================

function MessageBubble({ role, content, isDark, primaryColor, isNew }) {
  const isUser = role === "user";
  return (
    <div style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", alignItems: "flex-end", gap: "8px", animation: isNew ? "stolt-chat-slideIn 0.3s ease-out" : "none" }}>
      {!isUser && (
        <div style={{ width: "28px", height: "28px", borderRadius: "9px", background: isDark ? "rgba(255,255,255,0.06)" : `${primaryColor}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M9 13v2" /><path d="M15 13v2" /></svg>
        </div>
      )}
      <div style={{ maxWidth: "80%", padding: "10px 14px", borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: isUser ? primaryColor : isDark ? "rgba(255,255,255,0.06)" : "#f2f2f3", color: isUser ? "#fff" : isDark ? "rgba(255,255,255,0.88)" : "#1a1a1a", fontSize: "13.5px", lineHeight: "1.55", wordBreak: "break-word", whiteSpace: "pre-wrap", letterSpacing: "-0.005em" }}>
        {content}
      </div>
    </div>
  );
}

function TypingIndicator({ isDark }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "8px" }}>
      <div style={{ width: "28px", height: "28px", borderRadius: "9px", background: isDark ? "rgba(255,255,255,0.06)" : "#f2f2f3", flexShrink: 0 }} />
      <div style={{ display: "flex", gap: "5px", padding: "14px 18px", borderRadius: "16px 16px 16px 4px", background: isDark ? "rgba(255,255,255,0.06)" : "#f2f2f3", animation: "stolt-chat-slideIn 0.3s ease-out" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: isDark ? "rgba(255,255,255,0.3)" : "#999", animation: `stolt-chat-dot 1.4s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </div>
    </div>
  );
}

function EmailForm({ emailData, setEmailData, onSubmit, onBack, emailSent, emailSending, isDark, primaryColor }) {
  if (emailSent) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "12px", textAlign: "center", padding: "20px", animation: "stolt-chat-fadeUp 0.4s ease-out" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: isDark ? "rgba(74,222,128,0.1)" : "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div style={{ fontSize: "15px", fontWeight: 600, color: isDark ? "#fff" : "#0c0f1a" }}>Meddelandet skickat!</div>
        <div style={{ fontSize: "13px", color: isDark ? "rgba(255,255,255,0.5)" : "#6B7280" }}>Vi återkommer så snart som möjligt.</div>
      </div>
    );
  }

  const inputStyle = { width: "100%", padding: "10px 12px", borderRadius: "10px", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "rgba(255,255,255,0.05)" : "#f4f4f5", color: isDark ? "#fff" : "#0c0f1a", fontSize: "16px", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box", fontFamily: "inherit" };
  const isDisabled = !emailData.name.trim() || !emailData.email.trim() || !emailData.message.trim() || emailSending;

  return (
    <div style={{ padding: "4px 0", display: "flex", flexDirection: "column", gap: "16px", animation: "stolt-chat-fadeUp 0.3s ease-out" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: primaryColor, fontSize: "13px", cursor: "pointer", padding: "0", display: "flex", alignItems: "center", gap: "4px", fontWeight: 500, fontFamily: "inherit" }}>← Tillbaka till chatten</button>
      <div>
        <div style={{ fontSize: "16px", fontWeight: 700, color: isDark ? "#fff" : "#0c0f1a", marginBottom: "4px", letterSpacing: "-0.01em" }}>Skriv till oss</div>
        <div style={{ fontSize: "13px", color: isDark ? "rgba(255,255,255,0.5)" : "#6B7280" }}>Beskriv vad du behöver hjälp med så hör vi av oss.</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" placeholder="Ditt namn" value={emailData.name} onChange={(e) => setEmailData({ ...emailData, name: e.target.value })} style={inputStyle} onFocus={(e) => { e.target.style.borderColor = primaryColor; e.target.style.boxShadow = `0 0 0 3px ${primaryColor}18`; }} onBlur={(e) => { e.target.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"; e.target.style.boxShadow = "none"; }} />
        <input type="email" placeholder="Din e-post" value={emailData.email} onChange={(e) => setEmailData({ ...emailData, email: e.target.value })} style={inputStyle} onFocus={(e) => { e.target.style.borderColor = primaryColor; e.target.style.boxShadow = `0 0 0 3px ${primaryColor}18`; }} onBlur={(e) => { e.target.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"; e.target.style.boxShadow = "none"; }} />
        <textarea placeholder="Ditt meddelande..." value={emailData.message} onChange={(e) => setEmailData({ ...emailData, message: e.target.value })} rows={4} style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }} onFocus={(e) => { e.target.style.borderColor = primaryColor; e.target.style.boxShadow = `0 0 0 3px ${primaryColor}18`; }} onBlur={(e) => { e.target.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"; e.target.style.boxShadow = "none"; }} />
        <button onClick={onSubmit} disabled={isDisabled} style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "none", background: isDisabled ? (isDark ? "rgba(255,255,255,0.05)" : "#f0f0f0") : primaryColor, color: isDisabled ? (isDark ? "rgba(255,255,255,0.2)" : "#aaa") : "#fff", fontSize: "14px", fontWeight: 600, cursor: isDisabled ? "default" : "pointer", transition: "all 0.25s", fontFamily: "inherit" }}>
          {emailSending ? "Skickar..." : "Skicka meddelande"}
        </button>
      </div>
    </div>
  );
}
