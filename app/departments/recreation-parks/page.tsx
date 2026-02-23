"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTree, FaFutbol, FaUsers, FaSwimmingPool, FaMusic, FaSeedling, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaTree,         title: "Park Maintenance",  description: "Keeping Port Laken's parks, trails, and green spaces clean, safe, and beautiful year-round.", season: 0 },
  { icon: FaFutbol,       title: "Sports Programs",   description: "Organized leagues, classes, and open recreation for all ages — from youth soccer to senior fitness.", season: 1 },
  { icon: FaUsers,        title: "Community Events",  description: "Festivals, outdoor movies, concerts, and seasonal celebrations in public spaces across the city.", season: 1 },
  { icon: FaSwimmingPool, title: "Aquatics",           description: "Swimming lessons, lap swim, and water safety programs at our community pool facilities.", season: 1 },
  { icon: FaMusic,        title: "Arts & Culture",    description: "Music, theater, and arts programming that bring creativity and connection to Port Laken.", season: 2 },
  { icon: FaSeedling,     title: "Nature Programs",   description: "Environmental education, community gardening, and stewardship of Port Laken's natural spaces.", season: 3 },
];

const stats = [
  { value: "28",    label: "Parks & Open Spaces" },
  { value: "14mi",  label: "Trail Network" },
  { value: "200+",  label: "Annual Programs" },
  { value: "85K+",  label: "Annual Participants" },
];

/* ── Season definitions ── */
const SEASONS = [
  {
    name: "Spring",
    bg: "from-port-navy via-port-slate to-[#1a3a2a]",
    accent: "#4ade80",
    text: "#86efac",
    particle: "🌸",
    particleColor: "#f9a8d4",
    tagline: "Bloom & Begin",
  },
  {
    name: "Summer",
    bg: "from-port-navy via-[#1e3a4f] to-port-slate",
    accent: "#fbbf24",
    text: "#fde68a",
    particle: "✦",
    particleColor: "#fde68a",
    tagline: "Thrive & Play",
  },
  {
    name: "Autumn",
    bg: "from-port-navy via-[#3d1a06] to-port-slate",
    accent: "#fb923c",
    text: "#fed7aa",
    particle: "🍂",
    particleColor: "#fb923c",
    tagline: "Gather & Glow",
  },
  {
    name: "Winter",
    bg: "from-port-navy via-port-navy to-[#1a2a3f]",
    accent: "#a8c5db",
    text: "#e0f2fe",
    particle: "❄",
    particleColor: "#bae6fd",
    tagline: "Rest & Restore",
  },
];

/* ── Particle component ── */
type Particle = { id: number; x: number; size: number; duration: number; delay: number; drift: number };

function useParticles(count: number): Particle[] {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 10 + Math.random() * 14,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 5,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count],
  );
}

/* =====================
   LIVING SEASONS CANVAS — Full palette morph
   The entire background, accent color, and particle system
   transform through Spring → Summer → Autumn → Winter
   as the user scrolls through the section.
   Each service card is assigned to a season.
===================== */
function SeasonsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [seasonIdx, setSeasonIdx] = useState(0);
  const particles = useParticles(20);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      setProgress(p);
      setSeasonIdx(Math.min(Math.floor(p * SEASONS.length), SEASONS.length - 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const season = SEASONS[seasonIdx];

  return (
    <div ref={containerRef} style={{ height: `${(SEASONS.length + 1) * 120}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Morphing seasonal gradient — transitions with AnimatePresence */}
        <AnimatePresence mode="sync">
          <motion.div
            key={seasonIdx}
            className={`absolute inset-0 bg-gradient-to-br ${season.bg}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Organic leaf/petal wipe transition */}
        <AnimatePresence>
          <motion.div
            key={`wipe-${seasonIdx}`}
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: season.accent }}
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(0% at 50% 50%)" }}
            exit={{ clipPath: "circle(150% at 50% 50%)" }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={`${seasonIdx}-${p.id}`}
              className="absolute select-none"
              style={{
                left: `${p.x}%`,
                top: "-2rem",
                fontSize: p.size,
                color: season.particleColor,
                filter: "drop-shadow(0 0 4px currentColor)",
              }}
              animate={{
                y: ["0vh", "110vh"],
                x: [0, p.drift],
                rotate: [0, seasonIdx === 2 ? 360 : 0],
                opacity: [0, 0.8, 0.6, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {season.particle}
            </motion.div>
          ))}
        </div>

        {/* Season selector rail */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          {SEASONS.map((s, i) => (
            <div key={s.name} className="flex items-center gap-2 flex-row-reverse">
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === seasonIdx ? "0.75rem" : "0.45rem",
                  height: i === seasonIdx ? "0.75rem" : "0.45rem",
                  backgroundColor: i === seasonIdx ? s.accent : "rgba(168,197,219,0.2)",
                }}
              />
              <span
                className="text-[9px] font-mono uppercase tracking-widest transition-all duration-300 text-right"
                style={{ color: s.accent, opacity: i === seasonIdx ? 0.9 : 0.2 }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-10 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={seasonIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Season tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: season.accent, boxShadow: `0 0 12px ${season.accent}` }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{ color: season.accent }}
                  >
                    {season.name} — {season.tagline}
                  </span>
                </div>

                <h2
                  className="font-display text-5xl md:text-6xl font-bold mb-4 transition-colors duration-700"
                  style={{ color: season.text }}
                >
                  Programs &amp; <em>Services</em>
                </h2>
                <div className="w-14 h-[3px] mb-10 transition-colors duration-700" style={{ backgroundColor: season.accent }} />

                {/* Service grid — highlight cards matching this season */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((svc, i) => {
                    const Icon = svc.icon;
                    const active = svc.season === seasonIdx;
                    return (
                      <motion.div
                        key={svc.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                        className="rounded-2xl p-5 border transition-all duration-500"
                        style={{
                          backgroundColor: active
                            ? `${season.accent}18`
                            : "rgba(30,58,95,0.4)",
                          borderColor: active
                            ? `${season.accent}50`
                            : "rgba(107,155,195,0.12)",
                          boxShadow: active ? `0 0 30px ${season.accent}15` : "none",
                        }}
                      >
                        <Icon
                          className="text-2xl mb-3 transition-colors duration-500"
                          style={{ color: active ? season.accent : "#4a6d8c" }}
                        />
                        <h3
                          className="font-bold text-sm mb-1.5 transition-colors duration-500"
                          style={{ color: active ? season.text : "#6b9bc3" }}
                        >
                          {svc.title}
                        </h3>
                        <p
                          className="text-xs leading-relaxed transition-colors duration-500"
                          style={{ color: active ? `${season.text}90` : "rgba(107,155,195,0.3)" }}
                        >
                          {svc.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.05 ? 1 : 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-port-sky/40 text-[10px] uppercase tracking-[0.3em]">Scroll through the seasons</p>
          <motion.div
            animate={{ scaleY: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-2 w-px h-7 bg-gradient-to-b from-green-400 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function RecreationParksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600"
          alt="Recreation & Parks" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/90 via-port-navy/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16a34a] to-[#4ade80]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#16a34a]/40 border border-[#4ade80]/50">
            Nature & Community
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Recreation<br />&amp; <em className="text-[#4ade80]">Parks</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Creating vibrant outdoor spaces, community programs, and recreational opportunities for every resident of Port Laken.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#4ade80] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ LIVING SEASONS CANVAS — signature scroll effect */}
      <SeasonsSection />

      {/* PARKS PHOTO GRID */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#16a34a] text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Green Spaces</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6">
              28 Parks, <em>Endless Possibilities</em>
            </h3>
            <p className="text-port-slate/80 leading-relaxed mb-4">
              From Harborview Park on the waterfront to the new Elm Street community park, Port Laken&apos;s parks are gathering places for families, athletes, artists, and everyone in between.
            </p>
            <p className="text-port-slate/80 leading-relaxed">
              With 14 miles of maintained trails and 200+ annual programs, there&apos;s always something to explore, learn, or celebrate outdoors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1472746729193-26ff3cbb4af7?auto=format&fit=crop&q=80&w=600" alt="Community recreation" fill className="object-cover" />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden mt-8">
              <Image src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&q=80&w=600" alt="Children playing in park" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Register for a <em>Program</em>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Browse our full catalog of parks, classes, and events — and register online today.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#16a34a] text-white rounded-2xl font-bold hover:scale-105 transition-all border border-[#4ade80]/30">
            View Programs &amp; Register
          </Link>
        </div>
      </section>
    </>
  );
}
