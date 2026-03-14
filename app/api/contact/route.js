// ============================================================
// POST /api/contact
// Sends chat contact form via Formspree
// ============================================================

export async function POST(req) {
  try {
    const { name, email, message, chatHistory } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const response = await fetch("https://formspree.io/f/xreylwen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `💬 Chattmeddelande från ${name}`,
        chatHistory: chatHistory || "",
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Formspree error:", err);
      return Response.json({ error: "Failed to send" }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
