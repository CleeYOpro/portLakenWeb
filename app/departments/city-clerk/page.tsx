"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaVoteYea, FaFileAlt, FaGavel, FaIdBadge,
  FaBullhorn, FaFolderOpen, FaArrowLeft,
} from "react-icons/fa";

const GOLD = "#fbbf24";

const services = [
  { icon: FaVoteYea,    title: "Elections & Voting",     description: "Administering fair and transparent municipal elections for all eligible Port Laken residents." },
  { icon: FaFileAlt,    title: "Public Records",          description: "Maintaining and providing access to official city documents, ordinances, and meeting minutes." },
  { icon: FaGavel,      title: "Legislative Support",     description: "Supporting City Council proceedings with agendas, minutes, and legislative tracking." },
  { icon: FaIdBadge,    title: "Business Licensing",      description: "Processing business licenses, permits, and registrations for local enterprises." },
  { icon: FaBullhorn,   title: "Public Notices",          description: "Publishing official city announcements, hearings, and legal notifications." },
  { icon: FaFolderOpen, title: "Records Management",      description: "Archiving and preserving historical city records for future generations." },
];

const stats = [
  { value: "50K+", label: "Records Managed" },
  { value: "12K",  label: "Registered Voters" },
  { value: "800+", label: "Business Licenses" },
  { value: "24hr", label: "Online Access" },
];

const bgDocs = [
  "Ordinance 2024-18","Resolution 112","Deed #4821","Minutes Jan 2024",
  "License A-204","Voter Reg. 2023","Certificate 8891","Ballot 2024",
  "Agreement 44B","Resolution 087","Hearing Notice","Contract 16",
  "Ordinance 2019-32","Minutes Oct 2023","License B-109","Deed #2209",
  "Resolution 094","Certificate 7712","Agreement 28C","Minutes Apr 2024",
  "License C-301","Deed #3144","Ordinance 2021-07","Minutes Jul 2022",
];

/* =====================
   ARCHIVE VAULT — 3D Document Fly-Through
   Scroll drives the camera forward through a z-axis tunnel of
   document cards. Each card enters from deep in the vault and
   lands at the viewer. Exit sends it flying to the far wall.
===================== */
function ArchiveVaultSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const N = services.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      setProgress(p);
      setActiveIndex(Math.min(Math.floor(p * N), N - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [N]);

  const ActiveIcon = services[activeIndex].icon;

  return (
    <div
      ref={containerRef}
      style={{ height: `${(N + 2) * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Radial atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,_rgba(30,58,95,0.4),_rgba(30,58,95,1))]" />

        {/* Floating background document labels – pure atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: "800px" }}>
          {bgDocs.map((doc, i) => {
            const angle = (i / bgDocs.length) * Math.PI * 2;
            const r = 38 + (i % 4) * 9; // % of viewport radius
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * (r * 0.5);
            const zDepth = -300 - (i % 6) * 150;
            const rot = (i * 17) % 360;
            return (
              <div
                key={doc}
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `rotate(${rot}deg) translateZ(${zDepth}px)`,
                  opacity: 0.07 + (i % 3) * 0.04,
                }}
                className="text-[10px] text-amber-300/80 border border-amber-400/20 bg-amber-900/10 rounded px-2 py-1 whitespace-nowrap font-mono"
              >
                {doc}
              </div>
            );
          })}
        </div>

        {/* Header */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <p className="text-[#b45309] text-xs font-bold uppercase tracking-[0.35em] mb-2">The Archive Vault</p>
          <h2 className="font-display text-3xl font-bold text-white">Clerk Services</h2>
          <div className="w-8 h-[2px] bg-[#b45309] mx-auto mt-3" />
        </div>

        {/* 3D Card Stage */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                z: -700,
                scale: 0.3,
                rotateX: 12,
              }}
              animate={{
                opacity: 1,
                z: -80,
                scale: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                z: 200,
                scale: 1.4,
                rotateX: -8,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-[min(560px,92vw)]"
            >
              {/* Wax-seal stamp decoration */}
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4, type: "spring", stiffness: 260 }}
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-[#b45309]/60 bg-[#0c0800] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(180,83,9,0.5)]"
              >
                <div className="w-8 h-8 rounded-full bg-[#b45309]/40 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#fbbf24]/60" />
                </div>
              </motion.div>

              {/* Card */}
              <div className="rounded-2xl border border-[#fbbf24]/30 bg-[#b45309]/10 shadow-[0_0_80px_rgba(180,83,9,0.3)] backdrop-blur-sm p-8">
                {/* Document number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#b45309]">
                    Document {String(activeIndex + 1).padStart(2, "0")} / 0{N}
                  </span>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    PORT LAKEN — OFFICIAL
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-[#b45309]/25 border border-[#b45309]/30 flex-shrink-0">
                    <ActiveIcon className="text-[#fbbf24] text-4xl" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {services[activeIndex].title}
                    </h3>
                    <p className="text-white/65 leading-relaxed text-sm">
                      {services[activeIndex].description}
                    </p>
                  </div>
                </div>

                {/* Bottom rule */}
                <div className="mt-6 pt-4 border-t border-[#fbbf24]/15 flex items-center gap-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-[#b45309]/40 to-transparent" />
                  <span className="text-[10px] text-[#fbbf24]/30 font-mono uppercase tracking-widest">
                    City Clerk — Port Laken
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-l from-[#b45309]/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {services.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === activeIndex ? "2rem" : "0.375rem",
                height: "0.375rem",
                backgroundColor: i === activeIndex ? GOLD : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.06 ? 1 : 0 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll through the vault</p>
          <motion.div
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="mt-2 w-px h-7 bg-gradient-to-b from-[#b45309] to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function CityClerkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1600"
          alt="City Clerk"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b45309] to-[#f59e0b]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#fbbf24] mb-5 border border-[#b45309]/60 bg-[#b45309]/20">
            Official Records & Elections
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            City<br /><em className="text-[#fbbf24]">Clerk</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            The official keeper of Port Laken&apos;s public record — ensuring transparency, accountability, and access for all residents.
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

      {/* ★ ARCHIVE VAULT — signature scroll effect */}
      <ArchiveVaultSection />

      {/* PHOTO + TEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=900"
              alt="Public records and democracy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#b45309]/20 to-transparent" />
          </div>
          <div>
            <p className="text-[#b45309] text-xs font-bold uppercase tracking-[0.25em] mb-4">Democracy in Action</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Keeping Government <em>Open &amp; Accessible</em>
            </h3>
            <p className="text-amber-900/70 leading-relaxed mb-4">
              The City Clerk&apos;s Office is the foundation of open government in Port Laken — maintaining records, administering elections, and ensuring residents can access the information they need.
            </p>
            <p className="text-amber-900/70 leading-relaxed">
              From business licensing to ballot counting, we work with precision and integrity every day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Need a Public <em>Record?</em>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Submit a public records request online or visit our office during business hours. Most requests fulfilled within 5 business days.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#b45309] text-white rounded-2xl font-bold hover:scale-105 transition-all border border-[#fbbf24]/30">
            Contact the Clerk&apos;s Office
          </Link>
        </div>
      </section>
    </>
  );
}
