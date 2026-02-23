"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFireExtinguisher, FaAmbulance, FaSearch, FaShieldAlt, FaGraduationCap, FaRadiation, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaFireExtinguisher, title: "Fire Suppression",    description: "Rapid response to structural fires, wildfires, and hazardous material incidents across Port Laken." },
  { icon: FaAmbulance,        title: "Emergency Medical",   description: "Paramedic and EMT teams delivering critical pre-hospital care 24 hours a day, 7 days a week." },
  { icon: FaSearch,           title: "Search & Rescue",     description: "Specialized teams trained for water rescue, confined space, and wilderness operations." },
  { icon: FaShieldAlt,        title: "Fire Prevention",     description: "Inspections, code enforcement, and public education to prevent fires before they start." },
  { icon: FaGraduationCap,    title: "Community Education", description: "Fire safety programs for schools, businesses, and community organizations citywide." },
  { icon: FaRadiation,        title: "Hazmat Response",     description: "Certified hazardous materials team handling chemical spills and environmental emergencies." },
];

const stats = [
  { value: "3,200+", label: "Annual Responses"  },
  { value: "<4 min", label: "Avg. Response Time" },
  { value: "85",     label: "Firefighters"       },
  { value: "3",      label: "Fire Stations"      },
];

/* ── Ember particle hook ── */
type Ember = { id: number; x: number; size: number; duration: number; delay: number };

function useEmbers(count: number): Ember[] {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 3 + Math.random() * 5,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 4,
      })),
    [count],
  );
}

/* =====================
   LIVE 911 DISPATCH BOARD — Scroll-driven command center
   As the user scrolls, each service unit is "called in" live.
   Left panel: dispatch log builds up one unit at a time.
   Right panel: active unit showcase with radial pulse burst.
   Red embers rise continuously in the background.
===================== */
function LiveDispatchSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const embers = useEmbers(24);

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

  const activeIdx = Math.min(Math.floor(progress * services.length), services.length - 1);
  const svc = services[activeIdx];
  const Icon = svc.icon;

  return (
    <div ref={containerRef} style={{ height: "420vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Rising ember particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {embers.map((e) => (
            <motion.div
              key={e.id}
              className="absolute rounded-full"
              style={{
                left: `${e.x}%`,
                bottom: "-8px",
                width: e.size,
                height: e.size,
                backgroundColor: "#dc2626",
                filter: "blur(1px)",
              }}
              animate={{ y: [0, -900], opacity: [0, 0.7, 0], scale: [1, 0.3] }}
              transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Bottom-up red ambient glow */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "60%",
            background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(220,38,38,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Top header bar */}
        <div className="absolute top-0 left-0 right-0 h-11 border-b border-[#dc2626]/20 flex items-center px-6 lg:px-10 gap-3 z-20 bg-port-navy/80">
          <motion.span
            className="w-2 h-2 rounded-full bg-[#dc2626] flex-shrink-0"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-400">
            PLFD  •  Live Dispatch Board
          </span>
          <div className="flex-1" />
          <span className="text-[10px] text-red-400/50 font-mono">
            UNIT {String(activeIdx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main split layout */}
        <div className="absolute inset-0 top-11 flex">

          {/* LEFT — Dispatch log */}
          <div className="hidden md:flex w-64 lg:w-72 flex-shrink-0 border-r border-[#dc2626]/10 flex-col gap-2 p-5 pt-6 overflow-hidden">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-400/40 mb-1">
              Dispatch Log
            </p>
            {services.map((s, i) => {
              const SIcon = s.icon;
              const status = i < activeIdx ? "cleared" : i === activeIdx ? "active" : "pending";
              return (
                <motion.div
                  key={s.title}
                  animate={{
                    opacity: i <= activeIdx ? 1 : 0.15,
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl border transition-colors duration-300"
                  style={{
                    backgroundColor:
                      status === "active"
                        ? "rgba(220,38,38,0.10)"
                        : status === "cleared"
                        ? "rgba(30,58,95,0.4)"
                        : "transparent",
                    borderColor:
                      status === "active"
                        ? "rgba(220,38,38,0.30)"
                        : status === "cleared"
                        ? "rgba(107,155,195,0.10)"
                        : "transparent",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor:
                        status === "active" ? "#dc2626" : status === "cleared" ? "#4a6d8c" : "#1e3a5f",
                    }}
                  />
                  <SIcon
                    style={{
                      color: status === "active" ? "#ef4444" : status === "cleared" ? "#4a6d8c" : "#1e3a5f",
                      fontSize: 11,
                    }}
                    className="flex-shrink-0"
                  />
                  <span
                    className="text-[11px] truncate"
                    style={{
                      color: status === "active" ? "#fca5a5" : status === "cleared" ? "#4a6d8c" : "#1e3a5f",
                    }}
                  >
                    {s.title}
                  </span>
                  {status === "cleared" && (
                    <span className="ml-auto text-[9px] text-[#4a6d8c] flex-shrink-0">CLR</span>
                  )}
                  {status === "active" && (
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="ml-auto text-[9px] text-red-400 flex-shrink-0"
                    >
                      ●
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT — Active dispatch showcase */}
          <div className="flex-1 relative flex items-center justify-center p-8 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                className="max-w-xl w-full"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.06, y: -30 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Dispatch tag */}
                <div className="flex items-center gap-3 mb-8">
                  <motion.span
                    className="w-3 h-3 rounded-full bg-[#dc2626]"
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
                    Unit {String(activeIdx + 1).padStart(2, "0")} — Now Responding
                  </span>
                </div>

                {/* Icon with double radial pulse */}
                <div className="relative mb-8" style={{ width: 96, height: 96 }}>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(220,38,38,0.30) 0%, transparent 70%)" }}
                    animate={{ scale: [1, 3.2, 1], opacity: [0.9, 0, 0.9] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)" }}
                    animate={{ scale: [1, 5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2.5, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
                  />
                  <Icon
                    className="text-red-400 relative z-10"
                    style={{
                      fontSize: 64,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>

                {/* Service info */}
                <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-3 leading-none">
                  {svc.title}
                </h2>
                <div className="w-12 h-[3px] bg-[#dc2626] mb-6" />
                <p className="text-port-ice/60 text-lg leading-relaxed max-w-md">
                  {svc.description}
                </p>

                {/* Progress dots */}
                <div className="flex gap-2 mt-10">
                  {services.map((_, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full"
                      animate={{
                        width: i === activeIdx ? "2rem" : "0.5rem",
                        backgroundColor: i <= activeIdx ? "#dc2626" : "#1e3a5f",
                      }}
                      style={{ height: "0.5rem" }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.05 ? 1 : 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-red-400/40 text-[10px] uppercase tracking-[0.3em]">Scroll to dispatch</p>
          <motion.div
            animate={{ scaleY: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-2 w-px h-7 bg-gradient-to-b from-[#dc2626] to-transparent mx-auto"
          />
        </motion.div>

      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function FireDepartmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1600"
          alt="Fire Department" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/50 to-black/10" />
        <div className="absolute inset-0 opacity-25 bg-[#dc2626]" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#dc2626]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 border border-[#dc2626]" style={{ backgroundColor: "rgba(220,38,38,0.25)" }}>
            <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
            Emergency Services
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Fire<br /><em className="text-[#dc2626]">Department</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Protecting lives, property, and the environment through rapid emergency response, prevention, and community service.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#dc2626] mb-1">{s.value}</div>
              <div className="text-port-ice/50 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ LIVE 911 DISPATCH BOARD — signature scroll effect */}
      <LiveDispatchSection />

      {/* PHOTO + MISSION */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1582655432879-67d4fedc6f57?auto=format&fit=crop&q=80&w=900"
              alt="Firefighters in action" fill className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-port-navy/60 to-transparent" />
          </div>
          <div>
            <p className="text-red-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Mission</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-cream mb-6">
              Courage, Service,<br /><em>Community</em>
            </h3>
            <p className="text-port-ice/65 leading-relaxed mb-4">
              Every call we answer is a promise kept — a promise to the residents of Port Laken that trained, dedicated professionals stand ready around the clock.
            </p>
            <p className="text-port-ice/65 leading-relaxed">
              From kitchen fires to major emergencies, our crews respond with speed, skill, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            In an Emergency, <em>Call 911</em>
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            For non-emergency inquiries, contact our administrative office during business hours.
          </p>
          <div className="text-7xl font-bold text-[#dc2626] mb-10 tracking-tight">911</div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] text-white rounded-2xl font-bold hover:scale-105 transition-all text-sm uppercase tracking-wider border border-red-400/30">
            Non-Emergency Contact
          </Link>
        </div>
      </section>
    </>
  );
}
