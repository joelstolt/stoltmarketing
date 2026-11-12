"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContactWidget() {
  const pathname = usePathname();
  useEffect(() => {
    if (document.getElementById("stolt-contact-widget")) return;
    const script = document.createElement("script");
    script.id = "stolt-contact-widget";
    script.src = "https://widget.stoltmarketing.se/widget.js";
    script.defer = true;
    script.setAttribute("data-client", "stoltmarketing");
    script.setAttribute("data-load", "click");
    script.setAttribute("data-open-policy", "manual");
    document.body.appendChild(script);
  }, []);
  useEffect(() => {
    const suppressed = ["/kontakt", "/boka", "/integritet", "/serviceavtal"].includes(pathname) || pathname.startsWith("/analys/");
    let menuOpen = document.querySelector('[aria-controls="mobile-navigation"]')?.getAttribute("aria-expanded") === "true";
    const apply = (close = false) => {
      const widget = document.querySelector("svarslagret-widget");
      if (!widget) return false;
      if (close) widget.close?.();
      const hidden = suppressed || menuOpen;
      widget.hidden = hidden;
      widget.inert = hidden;
      widget.style.display = hidden ? "none" : "";
      return true;
    };
    // Observe only until the asynchronously loaded custom element exists.
    const observer = new MutationObserver(() => { if (apply(true)) observer.disconnect(); });
    if (!apply(true)) observer.observe(document.body, { childList: true });
    const onMenu = (event) => { menuOpen = Boolean(event.detail?.open); apply(menuOpen); };
    window.addEventListener("stolt-menu:change", onMenu);
    return () => { observer.disconnect(); window.removeEventListener("stolt-menu:change", onMenu); };
  }, [pathname]);
  return null;
}
