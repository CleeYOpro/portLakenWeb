"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLandmark, FaReceipt, FaChartBar, FaMoneyCheckAlt, FaPiggyBank, FaFileInvoiceDollar, FaArrowLeft } from "react-icons/fa";

const TEAL = "#0f766e";
const TEAL_LIGHT = "#2dd4bf";

const stats = [
  { value: "$82M",  label: "Annual Budget" },
  { value: "AAA",   label: "Credit Rating" },
  { value: "99.8%", label: "Collection Rate" },
  { value: "30+",   label: "Active Grants" },
];

/* ── Budget bar chart data ── */
const BUDGET_BARS = [
  { label: "Public Safety", pct: 82, color: "#2dd4bf" },
  { label: "Infrastructure", pct: 67, color: "#6b9bc3" },
  { label: "Parks & Rec",    pct: 48, color: "#a8c5db" },
  { label: "Admin",          pct: 38, color: "#2dd4bf" },
  { label: "Health Svcs",    pct: 55, color: "#6b9bc3" },
  { label: "Education",      pct: 73, color: "#a8c5db" },
];

/* ── Pie chart slices ── */
const PIE_SLICES = [
  { label: "Operations",  pct: 42, color: "#2dd4bf" },
  { label: "Capital",     pct: 28, color: "#6b9bc3" },
  { label: "Debt Svc",    pct: 18, color: "#a8c5db" },
  { label: "Reserves",    pct: 12, color: "#d4e4ed" },
];

/* ── Services for the panels ── */
const PANELS = [
  {
    id: "budget",
    tag: "Fiscal Planning",
    title: "Budget & Appropriations",
    sub: "Developing and managing the city's annual operating and capital improvement budgets.",
    type: "bar",
  },
  {
    id: "revenue",
    tag: "Collections",
    title: "Revenue & Treasury",
    sub: "Processing taxes, fees, and investments that fund every essential city service.",
    type: "pie",
  },
  {
    id: "reporting",
    tag: "Transparency",
    title: "Financial Reporting",
    sub: "Accurate financial statements and audits keeping Port Laken accountable to residents.",
    type: "numbers",
  },
  {
    id: "grants",
    tag: "Funding",
    title: "Grants Management",
    sub: "Securing and administering state and federal grants across all city departments.",
    type: "ticker",
  },
];

/* ── Ticker labels ── */
const TICKER_ITEMS = [
  "BUDGET 2024 ▲ $82M","CREDIT RATING ▲ AAA","COLLECTION RATE ▲ 99.8%","GRANTS ACTIVE ▲ 30+",
  "RESERVES ▲ $14.2M","DEBT SERVICE ▲ ON TRACK","AUDIT STATUS ▲ CLEAN","INVESTMENTS ▲ $28M",
];

/* ── Animated bar chart ── */
function BarChart({ animate }: { animate: boolean }) {
  return (
    <div className="flex items-end gap-3 h-44 w-full px-4">
      {BUDGET_BARS.map((b, i) => (
        <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: animate ? `${b.pct}%` : 0 }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
            style={{ backgroundColor: b.color, borderRadius: "4px 4px 0 0", width: "100%" }}
          />
          <span className="text-[9px] text-port-ice/50 text-center leading-tight">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Animated pie chart (SVG arcs) ── */
function PieChart({ animate }: { animate: boolean }) {
  const r = 80;
  const cx = 110, cy = 110;
  let cumulative = 0;
  const arcs = PIE_SLICES.map((s) => {
    const startAngle = cumulative * 3.6 * (Math.PI / 180);
    cumulative += s.pct;
    const endAngle = cumulative * 3.6 * (Math.PI / 180);
    const x1 = cx + r * Math.cos(startAngle - Math.PI / 2);
    const y1 = cy + r * Math.sin(startAngle - Math.PI / 2);
    const x2 = cx + r * Math.cos(endAngle - Math.PI / 2);
    const y2 = cy + r * Math.sin(endAngle - Math.PI / 2);
    const large = s.pct > 50 ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    return { ...s, d };
  });
  const circumference = 2 * Math.PI * r;
  return (
    <div className="relative flex items-center gap-6">
      <svg width={220} height={220} className="flex-shrink-0">
        {arcs.map((arc, i) => (
          <motion.path
            key={arc.label}
            d={arc.d}
            fill={arc.color}
            opacity={0.85}
            initial={{ scale: 0 }}
            animate={{ scale: animate ? 1 : 0 }}
            transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 200 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
        <circle cx={cx} cy={cy} r={40} fill="#0f172a" />
        <text x={cx} y={cy+5} textAnchor="middle" fill="#2dd4bf" fontSize={11} fontWeight="bold" fontFamily="monospace">$82M</text>
      </svg>
      <div className="flex flex-col gap-2">
        {PIE_SLICES.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: s.color }} />
            <span className="text-[11px] text-port-ice/70">{s.label} <span className="text-white/60">{s.pct}%</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Rolling numbers ── */
function RollingNumbers({ animate }: { animate: boolean }) {
  const items = [
    { value: "$82M",  label: "Annual Budget" },
    { value: "AAA",   label: "Bond Rating" },
    { value: "99.8%", label: "Collection" },
    { value: "30+",   label: "Grants" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: animate ? 1 : 0, scale: animate ? 1 : 0.7 }}
          transition={{ delay: i * 0.12, duration: 0.5, type: "spring" }}
          className="bg-port-navy/60 border border-port-sky/20 rounded-xl p-4 text-center"
        >
          <div className="text-2xl font-bold text-teal-300 font-mono">{item.value}</div>
          <div className="text-[10px] text-port-ice/50 uppercase tracking-widest mt-1">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Ticker tape ── */
function TickerTape() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="w-full overflow-hidden bg-port-navy/40 border border-port-sky/10 rounded-xl py-3">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-xs font-mono text-teal-300/80 flex-shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* =====================
   THE TRADING FLOOR — Horizontal cinematic pan
   Scroll drives translateX across 4 financial dashboard panels
===================== */
function TradingFloorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visiblePanel, setVisiblePanel] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      setProgress(p);
      setVisiblePanel(Math.min(Math.floor(p * PANELS.length), PANELS.length - 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translateX = -(progress * (PANELS.length - 1) * 100);

  return (
    <div ref={containerRef} style={{ height: `${(PANELS.length + 1) * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Static grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(107,155,195,0.3) 24px,rgba(107,155,195,0.3) 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(107,155,195,0.3) 24px,rgba(107,155,195,0.3) 25px)",
          }}
        />

        {/* Ticker tape at top */}
        <div className="absolute top-0 left-0 right-0 z-30 bg-port-navy/95 border-b border-port-sky/10 py-2 px-4">
          <TickerTape />
        </div>

        {/* Header */}
        <div className="absolute top-14 left-8 z-20 pointer-events-none">
          <p className="text-[#2dd4bf] text-[10px] font-bold uppercase tracking-[0.35em] mb-1">The Trading Floor</p>
          <h2 className="font-display text-2xl font-bold text-port-cream">Financial Services</h2>
        </div>

        {/* Panel counter */}
        <div className="absolute top-16 right-8 z-20 flex items-center gap-2 pointer-events-none">
          {PANELS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === visiblePanel ? "2rem" : "0.375rem",
                height: "0.375rem",
                backgroundColor: i === visiblePanel ? TEAL_LIGHT : "rgba(107,155,195,0.3)",
              }}
            />
          ))}
        </div>

        {/* Horizontal sliding track */}
        <div
          className="absolute top-0 left-0 flex h-full"
          style={{
            width: `${PANELS.length * 100}vw`,
            transform: `translateX(${translateX}vw)`,
            transition: "transform 0.08s linear",
          }}
        >
          {PANELS.map((panel, i) => {
            const isVisible = visiblePanel === i;
            return (
              <div
                key={panel.id}
                className="relative h-full flex-shrink-0 flex items-center justify-center px-8 pt-28 pb-12"
                style={{ width: "100vw" }}
              >
                <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
                  {/* Text side */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
                    transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
                  >
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-teal-300 border border-teal-500/30 bg-teal-900/20 mb-4">
                      {panel.tag}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-port-cream mb-4">
                      {panel.title}
                    </h3>
                    <p className="text-port-ice/70 leading-relaxed text-base mb-6">{panel.sub}</p>
                    <div className="w-12 h-[2px] bg-[#2dd4bf]" />
                  </motion.div>

                  {/* Visual side */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16,1,0.3,1] }}
                    className="bg-port-slate/30 border border-port-sky/15 rounded-2xl p-6"
                  >
                    <div className="text-[10px] text-teal-400/60 font-mono uppercase tracking-widest mb-4">
                      — Live Data Dashboard —
                    </div>
                    {panel.type === "bar"     && <BarChart animate={isVisible} />}
                    {panel.type === "pie"     && <PieChart animate={isVisible} />}
                    {panel.type === "numbers" && <RollingNumbers animate={isVisible} />}
                    {panel.type === "ticker"  && (
                      <div className="flex flex-col gap-3">
                        {["State Grant — $4.2M","Federal Infrastructure — $12M","EPA Clean Water — $2.8M","HUD Housing — $6.1M"].map((g, gi) => (
                          <motion.div
                            key={g}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                            transition={{ delay: 0.2 + gi * 0.12, duration: 0.4 }}
                            className="flex items-center justify-between bg-port-navy/50 border border-port-sky/10 rounded-xl px-4 py-3"
                          >
                            <span className="text-port-ice/80 text-sm">{g.split("—")[0]}</span>
                            <span className="text-teal-300 font-bold text-sm font-mono">{g.split("—")[1]}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Panel number watermark */}
                <div className="absolute bottom-6 right-8 text-[80px] font-bold text-port-sky/5 font-mono pointer-events-none select-none leading-none">
                  0{i + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.05 ? 1 : 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-port-sky/40 text-[10px] uppercase tracking-[0.3em]">Scroll across the trading floor</p>
          <motion.div
            animate={{ x: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="mt-2 text-teal-400/50 text-xl mx-auto w-fit"
          >→</motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function FinancePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600"
          alt="Finance Department" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/55 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[#0f766e]" style={{ mixBlendMode:"multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#0f766e]/40 border border-[#14b8a6]/50">
            Fiscal Stewardship
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Finance<br /><em className="text-[#2dd4bf]">Department</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Managing Port Laken&apos;s financial health with transparency, discipline, and a commitment to responsible stewardship.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#2dd4bf] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ TRADING FLOOR — signature scroll effect */}
      <TradingFloorSection />

      {/* TRANSPARENCY */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=900" alt="Financial management" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f766e]/20 to-transparent" />
          </div>
          <div>
            <p className="text-[#0f766e] text-xs font-bold uppercase tracking-[0.25em] mb-4">Open Books</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6">
              Accountability You Can <em>Count On</em>
            </h3>
            <p className="text-port-slate/80 leading-relaxed mb-4">
              Port Laken Finance maintains the city&apos;s AAA credit rating through disciplined budgeting, proactive planning, and transparent reporting.
            </p>
            <p className="text-port-slate/80 leading-relaxed">
              All financial reports, audits, and budget documents are publicly available — because an informed community is a stronger community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Pay Bills &amp; View <em>Reports</em>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Pay utility bills, access financial documents, or contact our team for budget and tax inquiries.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f766e] text-white rounded-2xl font-bold hover:scale-105 transition-all border border-[#2dd4bf]/30">
            Contact Finance Office
          </Link>
        </div>
      </section>
    </>
  );
}
