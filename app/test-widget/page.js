import Script from "next/script";

export default function TestWidgetPage() {
  return (
    <div style={{ padding: 40 }}>
      <div id="rbn-kurser"></div>
      <Script src="/rbn-widget.js" strategy="afterInteractive" />
    </div>
  );
}
