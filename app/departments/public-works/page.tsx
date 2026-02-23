"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWrench, FaTint, FaTrashAlt, FaTree, FaLightbulb, FaWater, FaArrowLeft } from "react-icons/fa";

const ORANGE = "#ea580c";

const stats = [
  { value: "280mi", label: "Roads Maintained" },
  { value: "4,500", label: "Storm Drains" },
  { value: "12K+",  label: "Street Lights" },
  { value: "7 days",label: "Weekly Operations" },
];

/* ── Layer definitions ── */
const LAYERS = [
  {
    id: "aerial",
    label: "Layer 1 — Aerial View",
    title: "Urban Tree Canopy & Lighting",
    sub: "12,000+ LED street lights and a growing urban forest improve safety and environmental quality from above.",
    services: [
      { icon: FaTree,      title: "Urban Forestry",  desc: "Planting, pruning, and protecting the city's tree canopy for environmental and community benefit." },
      { icon: FaLightbulb, title: "Street Lighting", desc: "Installing and maintaining LED street lights to improve safety and energy efficiency citywide." },
    ],
    bg: "from-port-sky/20 to-port-navy",
    accent: "#6b9bc3",
    svgFill: "#a8c5db",
  },
  {
    id: "surface",
    label: "Layer 2 — Street Level",
    title: "Roads, Waste & Storm Drains",
    sub: "280 miles of city roads, daily waste collection, and 4,500 storm drains managed by dedicated crews.",
    services: [
      { icon: FaWrench,   title: "Road Maintenance", desc: "Repaving, pothole repair, and infrastructure upkeep across hundreds of miles of city streets." },
      { icon: FaTrashAlt, title: "Solid Waste",      desc: "Residential and commercial waste collection, recycling programs, and hazardous material disposal." },
      { icon: FaWater,    title: "Stormwater",       desc: "Managing drainage systems and green infrastructure to prevent flooding and protect the harbor." },
    ],
    bg: "from-port-navy to-port-slate/60",
    accent: ORANGE,
    svgFill: "#fb923c",
  },
  {
    id: "underground",
    label: "Layer 3 — Underground",
    title: "Water, Sewer & Utilities",
    sub: "The invisible infrastructure beneath your feet — clean water in, wastewater out, and power flowing 24/7.",
    services: [
      { icon: FaTint, title: "Water & Sewer", desc: "Operating and maintaining Port Laken's water treatment, distribution, and wastewater systems." },
    ],
    bg: "from-[#1a0a00] to-port-navy",
    accent: "#fb923c",
    svgFill: ORANGE,
  },
];

/* ── SVG scenes per layer ── */
function AerialSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full opacity-60">
      {/* Roads from above */}
      <rect x={0} y={0} width={400} height={220} fill="rgba(30,58,95,0.3)" rx={8}/>
      <rect x={180} y={0} width={40} height={220} fill="rgba(45,74,111,0.6)"/>
      <rect x={0} y={90} width={400} height={40} fill="rgba(45,74,111,0.6)"/>
      {/* Tree dots */}
      {[[60,40],[100,160],[320,40],[350,160],[50,120],[300,120],[200,40],[200,170]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={14} fill="rgba(107,155,195,0.25)" stroke="#6b9bc3" strokeWidth={0.8}/>
      ))}
      {/* Street lights */}
      {[60,160,260,360].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1={90} x2={x} y2={70} stroke="#a8c5db" strokeWidth={1.5}/>
          <circle cx={x} cy={68} r={4} fill="#fbbf24" opacity={0.7}/>
          <circle cx={x} cy={68} r={10} fill="rgba(251,191,36,0.15)"/>
        </g>
      ))}
      <text x={200} y={215} textAnchor="middle" fill="#6b9bc3" fontSize={7} fontFamily="monospace" opacity={0.4}>AERIAL VIEW — PORT LAKEN</text>
    </svg>
  );
}

function SurfaceSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full opacity-70">
      <rect x={0} y={0} width={400} height={220} fill="rgba(15,23,42,0.5)" rx={8}/>
      {/* Road surface */}
      <rect x={0} y={80} width={400} height={60} fill="rgba(30,41,59,0.8)"/>
      <line x1={0} y1={110} x2={400} y2={110} stroke="rgba(251,191,36,0.3)" strokeWidth={2} strokeDasharray="20,15"/>
      {/* Sidewalks */}
      <rect x={0} y={140} width={400} height={20} fill="rgba(45,74,111,0.4)"/>
      <rect x={0} y={60}  width={400} height={20} fill="rgba(45,74,111,0.4)"/>
      {/* Pothole / crack */}
      <ellipse cx={120} cy={110} rx={8} ry={4} fill="rgba(234,88,12,0.5)" stroke="#fb923c" strokeWidth={0.5}/>
      {/* Trash cans */}
      {[80,200,320].map((x,i)=>(
        <g key={i}>
          <rect x={x-6} y={145} width={12} height={16} fill="#ea580c" rx={2} opacity={0.7}/>
          <rect x={x-7} y={143} width={14} height={4} fill="#fb923c" rx={1} opacity={0.7}/>
        </g>
      ))}
      {/* Storm drain grids */}
      {[60,180,300].map((x,i)=>(
        <g key={i}>
          <rect x={x-10} y={138} width={20} height={4} fill="none" stroke="#ea580c" strokeWidth={0.8} opacity={0.5}/>
          {[0,4,8,12,16].map(dx=>(
            <line key={dx} x1={x-10+dx} y1={138} x2={x-10+dx} y2={142} stroke="#ea580c" strokeWidth={0.5} opacity={0.4}/>
          ))}
        </g>
      ))}
      <text x={200} y={215} textAnchor="middle" fill="#fb923c" fontSize={7} fontFamily="monospace" opacity={0.4}>STREET LEVEL — PORT LAKEN</text>
    </svg>
  );
}

function UndergroundSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full opacity-75">
      <rect x={0} y={0} width={400} height={220} fill="rgba(10,5,0,0.7)" rx={8}/>
      {/* Earth layers */}
      <rect x={0} y={0}   width={400} height={30}  fill="rgba(30,20,5,0.6)"/>
      <rect x={0} y={30}  width={400} height={40}  fill="rgba(20,12,3,0.7)"/>
      <rect x={0} y={70}  width={400} height={150} fill="rgba(10,6,2,0.8)"/>
      {/* Water main — glowing */}
      <line x1={0} y1={55} x2={400} y2={55} stroke="#6b9bc3" strokeWidth={8} opacity={0.6}/>
      <line x1={0} y1={55} x2={400} y2={55} stroke="#a8c5db" strokeWidth={3} opacity={0.8}/>
      <line x1={0} y1={55} x2={400} y2={55} stroke="white"   strokeWidth={1} opacity={0.5}/>
      {/* Sewer pipe */}
      <line x1={0} y1={110} x2={400} y2={110} stroke="#78350f" strokeWidth={12} opacity={0.5}/>
      <line x1={0} y1={110} x2={400} y2={110} stroke="#ea580c" strokeWidth={4} opacity={0.6}/>
      <line x1={0} y1={110} x2={400} y2={110} stroke="#fb923c" strokeWidth={1.5} opacity={0.6}/>
      {/* Electric conduit */}
      <line x1={0} y1={155} x2={400} y2={155} stroke="#854d0e" strokeWidth={6} opacity={0.5}/>
      <line x1={0} y1={155} x2={400} y2={155} stroke="#fbbf24" strokeWidth={2} opacity={0.7}/>
      {/* Vertical junction lines */}
      {[80,200,320].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1={45} x2={x} y2={165} stroke="#fb923c" strokeWidth={1} strokeDasharray="3,4" opacity={0.3}/>
          <circle cx={x} cy={55} r={5} fill="#6b9bc3" opacity={0.8}/>
          <circle cx={x} cy={110} r={5} fill="#ea580c" opacity={0.8}/>
          <circle cx={x} cy={155} r={4} fill="#fbbf24" opacity={0.7}/>
        </g>
      ))}
      {/* Legend */}
      <text x={10} y={52}  fill="#a8c5db" fontSize={6.5} fontFamily="monospace">WATER MAIN</text>
      <text x={10} y={108} fill="#fb923c" fontSize={6.5} fontFamily="monospace">SEWER LINE</text>
      <text x={10} y={153} fill="#fbbf24" fontSize={6.5} fontFamily="monospace">ELECTRICAL</text>
      <text x={200} y={215} textAnchor="middle" fill="#ea580c" fontSize={7} fontFamily="monospace" opacity={0.4}>UNDERGROUND — PORT LAKEN</text>
    </svg>
  );
}

/* =====================
   UNDERGROUND JOURNEY — Multi-layer depth transitions
   Three visually distinct geological layers (aerial/surface/underground).
   Scroll drives which layer is active.
   The layer transition uses a horizontal clip-path wipe.
===================== */
function UndergroundJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const layerIdx = Math.min(Math.floor(progress * LAYERS.length), LAYERS.length - 1);
  const layer = LAYERS[layerIdx];
  const svgMap = [<AerialSVG key="a"/>, <SurfaceSVG key="s"/>, <UndergroundSVG key="u"/>];

  return (
    <div ref={containerRef} style={{ height: `${(LAYERS.length + 1) * 120}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Depth indicator — left rail */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {LAYERS.map((l, i) => (
            <div key={l.id} className="flex items-center gap-2">
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === layerIdx ? "0.75rem" : "0.5rem",
                  height: i === layerIdx ? "0.75rem" : "0.5rem",
                  backgroundColor: i === layerIdx ? l.accent : "rgba(107,155,195,0.2)",
                }}
              />
              <span
                className="text-[9px] font-mono uppercase tracking-widest transition-opacity duration-300"
                style={{ color: l.accent, opacity: i === layerIdx ? 0.8 : 0.2 }}
              >
                {["↑ Aerial","▶ Surface","↓ Ground"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Animated layer content */}
        <motion.div
          key={layerIdx}
          className={`absolute inset-0 bg-gradient-to-b ${layer.bg}`}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Depth overlay texture */}
        {layerIdx === 2 && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,_rgba(234,88,12,0.08)_0%,_transparent_70%)] pointer-events-none" />
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-16 grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text */}
            <motion.div
              key={`text-${layerIdx}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border"
                style={{ color: layer.accent, borderColor: `${layer.accent}40`, backgroundColor: `${layer.accent}15` }}
              >
                {layer.label}
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-port-cream mb-4">
                {layer.title}
              </h3>
              <p className="text-port-ice/65 leading-relaxed mb-6">{layer.sub}</p>
              <div className="flex flex-col gap-4">
                {layer.services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div key={svc.title} className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${layer.accent}20`, border: `1px solid ${layer.accent}30` }}
                      >
                        <Icon style={{ color: layer.accent }} className="text-sm" />
                      </div>
                      <div>
                        <div className="font-semibold text-port-cream text-sm mb-0.5">{svc.title}</div>
                        <div className="text-port-ice/55 text-xs leading-relaxed">{svc.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* SVG visual */}
            <motion.div
              key={`svg-${layerIdx}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: `${layer.accent}20` }}
            >
              {svgMap[layerIdx]}
            </motion.div>
          </div>
        </div>

        {/* Depth label watermark */}
        <div className="absolute bottom-6 right-8 z-10 pointer-events-none">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.3em] transition-colors duration-500"
            style={{ color: layer.accent, opacity: 0.3 }}
          >
            {["00 — SURFACE","01 — STREET","02 — UNDERGROUND"][layerIdx]}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.05 ? 1 : 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-port-sky/40 text-[10px] uppercase tracking-[0.3em]">Scroll to go underground</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="mt-2 text-orange-400/50 text-xl mx-auto w-fit"
          >↓</motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function PublicWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600"
          alt="Public Works" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/55 to-transparent" />
        <div className="absolute inset-0 opacity-15 bg-[#ea580c]" style={{ mixBlendMode:"color" }} />
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#ea580c]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-6 rounded bg-[#ea580c] flex items-center justify-center">
              <FaWrench className="text-white text-xs" />
            </div>
            <span className="text-[#fb923c] text-sm font-bold uppercase tracking-widest">Infrastructure & Operations</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Public<br /><em className="text-[#fb923c]">Works</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            The backbone of Port Laken — keeping roads safe, water clean, and the city running around the clock.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#fb923c] mb-1">{s.value}</div>
              <div className="text-port-ice/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ UNDERGROUND JOURNEY — signature scroll effect */}
      <UndergroundJourneySection />

      {/* PHOTO + TEXT */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&q=80&w=900" alt="Infrastructure workers" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#ea580c]/20 to-transparent" />
          </div>
          <div>
            <p className="text-[#fb923c] text-xs font-bold uppercase tracking-[0.25em] mb-4">Built to Last</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6">
              The Crew Behind <em>Every Road</em>
            </h3>
            <p className="text-port-slate/80 leading-relaxed mb-4">
              Our Public Works crew works days, nights, and weekends to ensure that Port Laken&apos;s infrastructure never stops. From emergency water main breaks to routine pothole patching, we&apos;re there.
            </p>
            <p className="text-port-slate/80 leading-relaxed">
              Long-term investments in green infrastructure and sustainable systems ensure the city is built to last for generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Report an <em>Issue</em>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Pothole? Broken streetlight? Report infrastructure issues and our team will respond promptly.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ea580c] text-white rounded-2xl font-bold hover:scale-105 transition-all border border-[#fb923c]/30">
            Submit a Report
          </Link>
        </div>
      </section>
    </>
  );
}
