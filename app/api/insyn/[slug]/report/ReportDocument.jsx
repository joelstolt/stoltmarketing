import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: "Helvetica",
    color: "#0C0F1A",
    fontSize: 10,
    backgroundColor: "#FAFAF8",
  },
  // Header
  eyebrow: {
    fontSize: 8,
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
    fontFamily: "Helvetica-Bold",
  },
  title: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#0C0F1A",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 11,
    color: "#6B7280",
    marginBottom: 4,
  },
  rangeLabel: {
    fontSize: 11,
    color: "#1D4ED8",
    fontFamily: "Helvetica-Bold",
    marginTop: 6,
  },
  divider: {
    borderBottom: "1pt solid #E5E5E0",
    marginVertical: 24,
  },
  // Stats grid
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    border: "1pt solid #E5E5E0",
    borderRadius: 8,
    padding: 14,
  },
  statLabel: {
    fontSize: 8,
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 6,
    fontFamily: "Helvetica-Bold",
  },
  statValue: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#0C0F1A",
  },
  statSub: {
    fontSize: 8,
    color: "#9CA3AF",
    marginTop: 4,
  },
  // Sections
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "#0C0F1A",
    marginBottom: 10,
  },
  twoCol: {
    flexDirection: "row",
    gap: 16,
  },
  col: {
    flex: 1,
  },
  listBox: {
    backgroundColor: "#FFFFFF",
    border: "1pt solid #E5E5E0",
    borderRadius: 8,
    padding: 12,
  },
  listRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottom: "0.5pt solid #F0F0EC",
  },
  listRowLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  listKey: {
    fontSize: 9,
    color: "#3B3F4A",
    flex: 1,
  },
  listVal: {
    fontSize: 9,
    color: "#0C0F1A",
    fontFamily: "Helvetica-Bold",
  },
  empty: {
    fontSize: 9,
    color: "#9CA3AF",
    fontStyle: "italic",
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 8,
    color: "#9CA3AF",
    textAlign: "center",
    paddingTop: 8,
    borderTop: "0.5pt solid #E5E5E0",
  },
});

function fmt(n) {
  if (n === null || n === undefined) return "—";
  return new Intl.NumberFormat("sv-SE").format(Math.round(n));
}

function fmtDuration(seconds) {
  if (!seconds || seconds <= 0) return "—";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function countryName(code) {
  if (!code) return "Okänd";
  try {
    const dn = new Intl.DisplayNames(["sv"], { type: "region" });
    return dn.of(code.toUpperCase()) || code;
  } catch {
    return code;
  }
}

function Stat({ label, value, sub }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      {sub ? <Text style={styles.statSub}>{sub}</Text> : null}
    </View>
  );
}

function ListSection({ title, items, formatKey, limit = 6 }) {
  const list = (items || []).slice(0, limit);
  return (
    <View style={styles.col}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.listBox}>
        {list.length === 0 ? (
          <Text style={styles.empty}>Ingen data</Text>
        ) : (
          list.map((item, i) => {
            const key = formatKey ? formatKey(item.x) : item.x || "—";
            const last = i === list.length - 1;
            return (
              <View
                key={`${item.x}-${i}`}
                style={last ? styles.listRowLast : styles.listRow}
              >
                <Text style={styles.listKey}>
                  {String(key).length > 38
                    ? String(key).slice(0, 38) + "…"
                    : key}
                </Text>
                <Text style={styles.listVal}>{fmt(item.y)}</Text>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
}

export function ReportDocument({ client, range, report }) {
  const stats = report.stats;
  const visits = stats.visits || 0;
  const totaltime = stats.totaltime || 0;
  const bounceRate = visits > 0 ? (stats.bounces / visits) * 100 : 0;
  const avgSession = visits > 0 ? totaltime / visits : 0;
  const generatedAt = new Date().toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Stockholm",
  });

  return (
    <Document
      title={`Insyn — ${client.name}`}
      author="Stolt Marketing"
      subject={`Trafikrapport för ${client.domain}`}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.eyebrow}>Insyn · Trafikrapport</Text>
          <Text style={styles.title}>{client.name}</Text>
          <Text style={styles.subtitle}>{client.domain}</Text>
          <Text style={styles.rangeLabel}>{range.label}</Text>
        </View>

        <View style={styles.divider} />

        {/* Stats */}
        <View style={styles.statsRow}>
          <Stat label="Unika besökare" value={fmt(stats.visitors)} />
          <Stat
            label="Sidvisningar"
            value={fmt(stats.pageviews)}
            sub={
              visits > 0
                ? `${(stats.pageviews / visits).toFixed(1)} per besök`
                : null
            }
          />
          <Stat
            label="Besök"
            value={fmt(stats.visits)}
            sub={`Avvisning ${bounceRate.toFixed(0)}%`}
          />
          <Stat
            label="Snitt-session"
            value={fmtDuration(avgSession)}
            sub={`Total tid ${fmtDuration(totaltime)}`}
          />
        </View>

        {/* Pages + Referrers */}
        <View style={styles.twoCol}>
          <ListSection
            title="Mest besökta sidor"
            items={report.pages}
            formatKey={(s) => (s === "/" ? "Startsida" : s)}
          />
          <ListSection
            title="Trafikkällor"
            items={report.referrers}
            formatKey={(s) => s || "Direkttrafik"}
          />
        </View>

        <View style={{ height: 16 }} />

        {/* Devices + Countries */}
        <View style={styles.twoCol}>
          <ListSection title="Enheter" items={report.devices} />
          <ListSection
            title="Länder"
            items={report.countries}
            formatKey={countryName}
          />
        </View>

        <View style={{ height: 16 }} />

        {/* Browsers + OS */}
        <View style={styles.twoCol}>
          <ListSection title="Webbläsare" items={report.browsers} />
          <ListSection title="Operativsystem" items={report.os} />
        </View>

        <Text style={styles.footer}>
          Rapport genererad {generatedAt} · Stolt Marketing · Data via Umami
          (GDPR-kompatibel, inga cookies)
        </Text>
      </Page>
    </Document>
  );
}
