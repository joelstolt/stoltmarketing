"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { chatConfig } from "@/lib/chat-config";

// ============================================================
// STOLT CHAT WIDGET
// Drop-in chat component for any Next.js + Tailwind site
// ============================================================

function generateId() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId] = useState(() => generateId());
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = useCallback(
    async (e) => {
      e?.preventDefault();
      const text = input.trim();
      if (!text || loading) return;

      const isFirst = !hasInteracted;
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
          body: JSON.stringify({
            messages: newMessages,
            conversationId,
            isFirstMessage: isFirst,
          }),
        });

        if (!res.ok) throw new Error("API error");

        // Stream the response
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = "";

        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          assistantText += decoder.decode(value, { stream: true });
          const currentText = assistantText;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "assistant",
              content: currentText,
            };
            return updated;
          });
        }
      } catch (err) {
        console.error("Chat error:", err);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Tyvärr kunde jag inte svara just nu. Kontakta Joel direkt via stoltmarketing.se/kontakt",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, messages, loading, conversationId, hasInteracted]
  );

  // Inject theme CSS variables
  const themeStyle = chatConfig.theme || {};

  return (
    <>
      {/* ---- Chat Panel ---- */}
      <div
        style={{
          ...themeStyle,
          position: "fixed",
          bottom: open ? "24px" : "-100%",
          right: "24px",
          width: "min(400px, calc(100vw - 32px))",
          height: "min(600px, calc(100dvh - 100px))",
          zIndex: 99998,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: open ? "auto" : "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: "var(--chat-radius, 16px)",
          background: "var(--chat-bg, #fff)",
          border: "1px solid var(--chat-border, #e5e5e0)",
          boxShadow:
            "0 24px 48px -12px rgba(0,0,0,0.15), 0 8px 16px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 20px",
            background: "var(--chat-primary, #1D4ED8)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              {chatConfig.assistantName?.[0] || "S"}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "15px", lineHeight: 1.2 }}>
                {chatConfig.siteName}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  opacity: 0.8,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                  }}
                />
                Online — svarar direkt
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Stäng chatt"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              fontSize: "18px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Welcome message */}
          {messages.length === 0 && (
            <div style={{ padding: "8px 0" }}>
              <MessageBubble
                role="assistant"
                content={chatConfig.welcomeMessage}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginTop: "12px",
                  paddingLeft: "4px",
                }}
              >
                {[
                  "Vilka tjänster erbjuder ni?",
                  "Vad kostar en hemsida?",
                  "Berätta om era kundcase",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => {
                        const form = document.getElementById("stolt-chat-form");
                        form?.requestSubmit();
                      }, 50);
                    }}
                    style={{
                      padding: "6px 12px",
                      fontSize: "13px",
                      borderRadius: "20px",
                      border: "1px solid var(--chat-border, #e5e5e0)",
                      background: "var(--chat-bg, #fff)",
                      color: "var(--chat-primary, #1D4ED8)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--chat-primary, #1D4ED8)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor =
                        "var(--chat-primary, #1D4ED8)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "var(--chat-bg, #fff)";
                      e.currentTarget.style.color =
                        "var(--chat-primary, #1D4ED8)";
                      e.currentTarget.style.borderColor =
                        "var(--chat-border, #e5e5e0)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} content={msg.content} />
          ))}

          {loading && messages[messages.length - 1]?.role === "user" && (
            <TypingIndicator />
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          id="stolt-chat-form"
          onSubmit={sendMessage}
          style={{
            padding: "12px 16px",
            borderTop: "1px solid var(--chat-border, #e5e5e0)",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexShrink: 0,
            background: "var(--chat-bg, #fff)",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={chatConfig.placeholder}
            disabled={loading}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: "12px",
              border: "1px solid var(--chat-border, #e5e5e0)",
              background: "var(--chat-surface, #f4f4f5)",
              color: "var(--chat-text, #0c0f1a)",
              fontSize: "14px",
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--chat-primary, #1D4ED8)";
              e.target.style.boxShadow =
                "0 0 0 3px rgba(29, 78, 216, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--chat-border, #e5e5e0)";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Skicka"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              border: "none",
              background:
                loading || !input.trim()
                  ? "var(--chat-surface, #f4f4f5)"
                  : "var(--chat-primary, #1D4ED8)",
              color:
                loading || !input.trim()
                  ? "var(--chat-text-muted, #6B7280)"
                  : "#fff",
              cursor: loading || !input.trim() ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Footer */}
        <div
          style={{
            padding: "6px 16px 10px",
            textAlign: "center",
            fontSize: "11px",
            color: "var(--chat-text-muted, #6B7280)",
            flexShrink: 0,
          }}
        >
          Powered by {chatConfig.poweredBy}
        </div>
      </div>

      {/* ---- Floating Button ---- */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Stäng chatt" : "Öppna chatt"}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "18px",
          border: "none",
          background: "var(--chat-primary, #1D4ED8)",
          color: "#fff",
          cursor: "pointer",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 8px 24px -4px rgba(29, 78, 216, 0.4), 0 4px 8px -2px rgba(0,0,0,0.1)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: open ? "scale(0.9) rotate(90deg)" : "scale(1)",
          ...themeStyle,
        }}
        onMouseEnter={(e) => {
          if (!open) e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = open
            ? "scale(0.9) rotate(90deg)"
            : "scale(1)";
        }}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* ---- Pulse ring animation (only when closed) ---- */}
      {!open && !hasInteracted && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "60px",
            height: "60px",
            borderRadius: "18px",
            zIndex: 99997,
            pointerEvents: "none",
            animation: "stolt-chat-pulse 2.5s ease-in-out infinite",
          }}
        />
      )}

      <style>{`
        @keyframes stolt-chat-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(29, 78, 216, 0.3); }
          50% { box-shadow: 0 0 0 12px rgba(29, 78, 216, 0); }
        }
        @keyframes stolt-chat-dot {
          0%, 80%, 100% { transform: scale(0.4); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}

// ============================================================
// Sub-components
// ============================================================

function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "85%",
          padding: "10px 14px",
          borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
          background: isUser
            ? "var(--chat-bubble-user, #1D4ED8)"
            : "var(--chat-bubble-ai, #f4f4f5)",
          color: isUser
            ? "var(--chat-bubble-user-text, #fff)"
            : "var(--chat-bubble-ai-text, #0c0f1a)",
          fontSize: "14px",
          lineHeight: "1.5",
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div
        style={{
          display: "flex",
          gap: "5px",
          padding: "12px 16px",
          borderRadius: "14px 14px 14px 4px",
          background: "var(--chat-bubble-ai, #f4f4f5)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--chat-text-muted, #6B7280)",
              animation: `stolt-chat-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
