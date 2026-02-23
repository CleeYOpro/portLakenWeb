"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaSearch, FaCar, FaHandshake, FaGraduationCap, FaHeadset, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaShieldAlt,    title: "Patrol Services",            description: "24/7 patrol officers maintaining a visible, responsive presence in every Port Laken neighborhood." },
  { icon: FaSearch,       title: "Criminal Investigations",    description: "Dedicated detectives handling property crimes, violent offenses, and specialized investigations." },
  { icon: FaCar,          title: "Traffic Enforcement",        description: "Keeping streets safe through traffic management, DUI enforcement, and accident investigation." },
  { icon: FaHandshake,    title: "Community Policing",         description: "Building trust through neighborhood liaisons, youth outreach, and resident partnership programs." },
  { icon: FaGraduationCap, title: "Youth Programs",            description: "Mentorship and after-school initiatives connecting officers with the next generation." },
  { icon: FaHeadset,      title: "Dispatch & Communications",  description: "Around-the-clock dispatch center coordinating emergency response across the city." },
];

const stats = [
  { value: "120+",   label: "Officers" },
  { value: "< 6 min",label: "Response Time" },
  { value: "92%",    label: "Case Resolution" },
  { value: "1",      label: "Precinct" },
];

/* =====================
   PRECINCT SPOTLIGHT — Scroll-tracked light beam
   As user scrolls through the section, a radial "spotlight"
   descends and illuminates each service card.
   The rest of the page stays in near-darkness.
   Blue/red police light accents pulse in the corners.
===================== */
function SpotlightSection() {
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

  // Spotlight Y position: 0% → 100% of the section height
  // Maps to which row of cards is illuminated
  const spotY = 8 + progress * 84; // % from top

  return (
    <div ref={containerRef} style={{ height: "360vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Blue police light — top left */}
        <motion.div
          className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(29,78,216,0.35) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Red police light — top right */}
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(220,38,38,0.25) 0%, transparent 70%)",
          }}
          animate={{ opacity: [1, 0.3, 1], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Spotlight overlay — punches a hole of light downward */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(ellipse 55% 28% at 50% ${spotY}%, transparent 0%, rgba(6,13,23,0.88) 60%, rgba(6,13,23,0.97) 100%)`,
          }}
        />

        {/* Subtle blue ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_50%_at_50%_0%,_rgba(29,78,216,0.06)_0%,_transparent_70%)] pointer-events-none" />

        {/* Header */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <p className="text-[#93c5fd] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">Precinct Spotlight</p>
          <h2 className="font-display text-3xl font-bold text-white">Department Services</h2>
          <div className="w-8 h-[2px] bg-[#1d4ed8] mx-auto mt-3" />
        </div>

        {/* Cards grid */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pt-20">
          <div className="max-w-5xl w-full px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              // Each card has a rough Y position in the section (0–100%)
              // Row 0 (cards 0–2): top row; Row 1 (cards 3–5): bottom row
              const row = Math.floor(i / 3);
              const cardY = 30 + row * 40; // % Y in section
              const dist = Math.abs(spotY - cardY);
              const lit = Math.max(0, 1 - dist / 22);

              return (
                <div
                  key={svc.title}
                  className="relative rounded-2xl p-7 border transition-all duration-200"
                  style={{
                    backgroundColor: `rgba(${30 + lit * 20}, ${58 + lit * 30}, ${95 + lit * 30}, ${0.4 + lit * 0.5})`,
                    borderColor: lit > 0.4 ? "rgba(147,197,253,0.35)" : "rgba(107,155,195,0.08)",
                    boxShadow: lit > 0.3 ? `0 0 ${40 * lit}px rgba(29,78,216,0.2)` : "none",
                  }}
                >
                  {/* Badge shine when lit */}
                  {lit > 0.5 && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#1d4ed8]/30 border border-[#93c5fd]/30 flex items-center justify-center">
                      <FaShieldAlt className="text-[#93c5fd] text-[8px]" />
                    </div>
                  )}
                  <Icon
                    className="text-3xl mb-5 transition-colors duration-200"
                    style={{ color: lit > 0.3 ? "#93c5fd" : "#2d4a6f" }}
                  />
                  <h3
                    className="font-bold text-lg mb-2 transition-colors duration-200"
                    style={{ color: lit > 0.3 ? "white" : "rgba(107,155,195,0.3)" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed transition-colors duration-200"
                    style={{ color: lit > 0.3 ? "rgba(168,197,219,0.7)" : "rgba(107,155,195,0.15)" }}
                  >
                    {svc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badge watermark */}
        <motion.div
          className="absolute bottom-8 right-8 z-20 opacity-[0.04] pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <FaShieldAlt className="text-[180px] text-white" />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.05 ? 1 : 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-[#93c5fd]/30 text-[10px] uppercase tracking-[0.3em]">Scroll to illuminate</p>
          <motion.div
            animate={{ scaleY: [1,1.4,1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-2 w-px h-7 bg-gradient-to-b from-[#1d4ed8] to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function PoliceDepartmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1600"
          alt="Police Department" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1d4ed8]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center">
              <FaShieldAlt className="text-white text-lg" />
            </div>
            <span className="text-[#93c5fd] text-sm font-bold uppercase tracking-widest">Port Laken Police</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Police<br /><em className="text-[#93c5fd]">Department</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Dedicated to keeping Port Laken safe through professional law enforcement and meaningful community partnerships.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#93c5fd] mb-1">{s.value}</div>
              <div className="text-port-ice/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ PRECINCT SPOTLIGHT — signature scroll effect */}
      <SpotlightSection />

      {/* PHOTO + MISSION */}
      <section className="bg-port-navy py-20 border-t border-port-sky/10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#93c5fd] text-xs font-bold uppercase tracking-[0.25em] mb-4">Community First</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-cream mb-6">
              Protecting &amp; <em>Serving Together</em>
            </h3>
            <p className="text-port-ice/60 leading-relaxed mb-4">
              Our officers are more than law enforcement — they are neighbors. Through community policing programs, Port Laken PD builds lasting relationships that make our streets safer for everyone.
            </p>
            <p className="text-port-ice/60 leading-relaxed">
              From school resource officers to neighborhood watches, we work alongside residents every day.
            </p>
          </div>
          <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=900" alt="Community policing" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Need Assistance?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            For emergencies call 911. For non-emergency assistance, reach our station directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-[#1d4ed8]/20 border border-[#93c5fd]/25 rounded-2xl px-8 py-5 text-center">
              <div className="text-port-ice/60 text-xs uppercase tracking-widest mb-1">Emergency</div>
              <div className="text-4xl font-bold text-[#93c5fd]">911</div>
            </div>
            <div className="bg-port-slate/40 border border-port-sky/15 rounded-2xl px-8 py-5 text-center">
              <div className="text-port-ice/60 text-xs uppercase tracking-widest mb-1">Non-Emergency</div>
              <div className="text-2xl font-bold text-white">(555) 400-5000</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
