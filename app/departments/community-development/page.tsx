"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaHardHat, FaMap, FaHome, FaLeaf, FaCity, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaBuilding, title: "Zoning & Land Use",     description: "Managing zoning applications, variances, and land use decisions to shape how Port Laken grows." },
  { icon: FaHardHat, title: "Building Permits",       description: "Streamlined permitting for residential and commercial construction projects across the city." },
  { icon: FaMap,     title: "Urban Planning",          description: "Long-range planning for neighborhoods, transportation corridors, and community development." },
  { icon: FaHome,    title: "Housing Programs",        description: "Affordable housing initiatives and homeowner assistance programs for Port Laken residents." },
  { icon: FaLeaf,    title: "Environmental Review",    description: "Ensuring all development projects meet environmental standards and sustainability goals." },
  { icon: FaCity,    title: "Economic Development",    description: "Attracting investment and supporting local businesses to drive sustainable economic growth." },
];

const stats = [
  { value: "1,400+", label: "Permits Issued" },
  { value: "48hr",   label: "Permit Review" },
  { value: "24",     label: "Active Projects" },
  { value: "15yr",   label: "General Plan Horizon" },
];

/* ── Blueprint SVG path data ── */
const PATHS = [
  "M 60 300 L 740 300",
  "M 60 500 L 740 500",
  "M 220 80 L 220 720",
  "M 530 80 L 530 720",
  "M 70 100 L 210 100 L 210 280 L 70 280 Z",
  "M 240 100 L 520 100 L 520 280 L 240 280 Z",
  "M 550 100 L 730 100 L 730 280 L 550 280 Z",
  "M 70 320 L 210 320 L 210 480 L 70 480 Z",
  "M 240 320 L 520 320 L 520 480 L 240 480 Z",
  "M 550 320 L 730 320 L 730 480 L 550 480 Z",
  "M 70 520 L 520 520 L 520 700 L 70 700 Z",
  "M 550 520 L 730 520 L 730 700 L 550 700 Z",
  "M 100 150 L 180 150","M 100 190 L 180 190","M 100 230 L 180 230",
  "M 270 150 L 490 150","M 270 190 L 490 190","M 270 230 L 490 230",
  "M 570 150 L 710 150","M 570 190 L 710 190",
  "M 60 60 L 740 60","M 50 70 L 50 730",
];

/* ── Isometric buildings ── */
const BUILDINGS = [
  { x:70,  y:100, w:140, h:180, d:50, delay:0.00 },
  { x:240, y:100, w:280, h:180, d:65, delay:0.08 },
  { x:550, y:100, w:180, h:180, d:45, delay:0.16 },
  { x:70,  y:320, w:140, h:160, d:60, delay:0.10 },
  { x:240, y:320, w:280, h:160, d:38, delay:0.22 },
  { x:550, y:320, w:180, h:160, d:55, delay:0.05 },
  { x:70,  y:520, w:450, h:180, d:75, delay:0.28 },
  { x:550, y:520, w:180, h:180, d:50, delay:0.18 },
];

/* =====================
   BLUEPRINT CONSTRUCTION — signature effect
   Phase 1 (scroll 0–50 %): SVG plan lines draw themselves
   Phase 2 (scroll 50–100 %): buildings extrude isometrically
===================== */
function BlueprintSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [drawP,  setDrawP]  = useState(0);
  const [riseP,  setRiseP]  = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      setDrawP(Math.min(1, p * 2));
      setRiseP(Math.max(0, (p - 0.45) * 2.2));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathProgress = (i: number) => {
    const per = 1 / PATHS.length;
    const s = i * per;
    const e = s + per * 1.8;
    return Math.max(0, Math.min(1, (drawP - s) / (e - s)));
  };

  return (
    <div ref={containerRef} style={{ height: "480vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Blueprint grid — port-sky lines, subtle */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(107,155,195,0.25) 39px,rgba(107,155,195,0.25) 40px),
              repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(107,155,195,0.25) 39px,rgba(107,155,195,0.25) 40px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Outer frame lines */}
        <div className="absolute inset-4 border border-port-sky/20 pointer-events-none" />
        <div className="absolute inset-7 border border-port-sky/10 pointer-events-none" />

        {/* Title */}
        <div className="absolute top-7 left-8 z-20 pointer-events-none">
          <p className="text-[#d97706] text-[10px] font-bold uppercase tracking-[0.35em] mb-1">Drawing No. PL-2024</p>
          <h2 className="font-display text-3xl font-bold text-port-cream">Blueprint Construction</h2>
          <div className="w-8 h-[2px] bg-[#d97706] mt-2" />
        </div>

        {/* Phase label + progress bar */}
        <div className="absolute top-7 right-8 z-20 text-right pointer-events-none">
          <div className="text-[10px] font-mono text-port-sky/60 uppercase tracking-widest">
            {riseP > 0.05 ? "Phase 2 — 3D Extrude" : drawP > 0.05 ? "Phase 1 — Drawing" : "Stand by…"}
          </div>
          <div className="mt-1 w-36 h-1 bg-port-sky/10 rounded-full ml-auto overflow-hidden">
            <div
              className="h-full rounded-full bg-[#d97706] transition-all duration-200"
              style={{ width: `${Math.min(100, (drawP * 50 + riseP * 50))}%` }}
            />
          </div>
        </div>

        {/* SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 800 800" className="w-full h-full max-w-3xl max-h-[86vh] px-6">

            {/* Dot grid */}
            {Array.from({ length: 20 }, (_, r) =>
              Array.from({ length: 20 }, (_, c) => (
                <circle key={`${r}-${c}`} cx={c*40+10} cy={r*40+10} r={1} fill="rgba(107,155,195,0.18)" />
              ))
            )}

            {/* Animated plan paths — port-sky for structure, amber for roads */}
            {PATHS.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={i < 4 ? "#d97706" : "#6b9bc3"}
                strokeWidth={i < 4 ? 2 : i < 12 ? 1.5 : 0.8}
                strokeDasharray="2000"
                strokeDashoffset={2000 - pathProgress(i) * 2000}
                opacity={i < 12 ? 0.85 : 0.55}
              />
            ))}

            {/* Isometric buildings — port-navy / port-slate tones */}
            {BUILDINGS.map((b, i) => {
              const rise = Math.max(0, Math.min(1, (riseP - b.delay) / 0.55));
              const depth = b.d * rise;
              const topY = b.y - depth;
              if (rise < 0.01) return null;
              return (
                <g key={i}>
                  {/* Front face */}
                  <rect x={b.x} y={topY} width={b.w} height={b.h}
                    fill="#1e3a5f" stroke="#6b9bc3" strokeWidth={0.8} opacity={0.9 * rise} />
                  {/* Right side */}
                  <polygon
                    points={`${b.x+b.w},${topY} ${b.x+b.w+depth*0.5},${topY+depth*0.4} ${b.x+b.w+depth*0.5},${b.y+depth*0.4} ${b.x+b.w},${b.y}`}
                    fill="#152c49" stroke="#6b9bc3" strokeWidth={0.6} opacity={0.9 * rise}
                  />
                  {/* Bottom */}
                  <polygon
                    points={`${b.x},${b.y} ${b.x+b.w},${b.y} ${b.x+b.w+depth*0.5},${b.y+depth*0.4} ${b.x+depth*0.5},${b.y+depth*0.4}`}
                    fill="#0f1e30" stroke="#6b9bc3" strokeWidth={0.6} opacity={0.9 * rise}
                  />
                  {/* Windows */}
                  {rise > 0.55 && Array.from({ length: Math.floor(b.w / 38) }, (_, wi) => (
                    <rect key={wi} x={b.x+10+wi*34} y={topY+18} width={14} height={20}
                      fill="#a8c5db" opacity={0.22 * rise} />
                  ))}
                </g>
              );
            })}

            {/* Annotation labels */}
            {drawP > 0.45 && services.map((svc, i) => {
              const pos = [[110,190],[330,190],[620,190],[110,400],[340,400],[620,400]];
              const [px,py] = pos[i] || [100,100];
              return (
                <g key={svc.title} style={{ opacity: Math.min(1,(drawP-0.45)*2.5) }}>
                  <line x1={px} y1={py+8} x2={px+28} y2={py-28} stroke="#d97706" strokeWidth={0.8} strokeDasharray="3,2"/>
                  <rect x={px+26} y={py-50} width={108} height={24} fill="#1e3a5f" stroke="#d97706" strokeWidth={0.6} rx={2}/>
                  <text x={px+80} y={py-33} textAnchor="middle" fill="#fbbf24" fontSize={6.5} fontFamily="monospace" fontWeight="bold">
                    {svc.title.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: drawP < 0.04 ? 1 : 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-port-sky/50 text-[10px] uppercase tracking-[0.3em]">Scroll to draw the city plan</p>
          <motion.div
            animate={{ scaleY: [1,1.4,1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-2 w-px h-7 bg-gradient-to-b from-[#d97706] to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function CommunityDevelopmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
          alt="Community Development"
          fill className="object-cover object-bottom" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/50 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[#d97706]" style={{ mixBlendMode:"multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d97706] to-[#f59e0b]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#d97706]/40 border border-[#d97706]/60">
            Planning & Growth
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Community<br /><em className="text-[#fbbf24]">Development</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Shaping the future of Port Laken through thoughtful planning, smart zoning, and vibrant economic development.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#fbbf24] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ BLUEPRINT CONSTRUCTION — signature scroll effect */}
      <BlueprintSection />

      {/* PHOTO + TEXT */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=900" alt="Urban planning" fill className="object-cover" />
          </div>
          <div>
            <p className="text-[#d97706] text-xs font-bold uppercase tracking-[0.25em] mb-4">Building Tomorrow</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6">
              A City That <em>Grows With Purpose</em>
            </h3>
            <p className="text-port-slate/80 leading-relaxed mb-4">
              Every permit issued, every zoning decision made, and every neighborhood plan adopted is a step toward the Port Laken we want to be.
            </p>
            <p className="text-port-slate/80 leading-relaxed">
              We engage residents at every stage — from early planning to final approval — to ensure development reflects the community&apos;s vision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your <em>Project</em>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Apply for permits, check zoning requirements, or schedule a pre-application meeting with our planning team.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#d97706] text-white rounded-2xl font-bold hover:scale-105 transition-all border border-[#fbbf24]/30">
            Contact Planning Division
          </Link>
        </div>
      </section>
    </>
  );
}
