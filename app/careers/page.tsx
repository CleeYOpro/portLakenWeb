"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaChartLine,
  FaHeartbeat,
  FaArrowRight,
  FaBriefcase,
  FaCheck,
} from "react-icons/fa";

const indeedLink = "https://www.indeed.com/jobs?q=Port+Laken+City";

const highlights = [
  { icon: FaGlobe,     title: "Community Impact",     description: "Shape the future of our city through public service and community-driven projects." },
  { icon: FaChartLine, title: "Career Growth",        description: "Access professional development, training, and opportunities for advancement." },
  { icon: FaHeartbeat, title: "Stability & Benefits", description: "Enjoy comprehensive health coverage, pension plans, and job stability." },
];

const benefits = [
  "Comprehensive Health, Dental & Vision",
  "Generous Retirement & Pension Plans",
  "Paid Time Off & Holidays",
  "Long-term Job Stability",
  "Professional Development Fund",
  "Flexible Work Arrangements",
];

const departments = [
  "Police Department",
  "Fire Department",
  "Public Works",
  "Finance",
  "Recreation & Parks",
  "City Clerk",
  "Human Resources",
  "Community Development",
];

const pageStats = [
  { value: "500+", label: "City Employees" },
  { value: "8",    label: "Departments"    },
  { value: "28+",  label: "Open Positions" },
  { value: "<2%",  label: "Turnover Rate"  },
];

const testimonials = [
  {
    quote: "More than a job — I learned and grew every day making a difference here.",
    name: "Almas Rivera",
    role: "Civil Engineer",
    avatar: "https://i.pravatar.cc/96?u=almas",
  },
  {
    quote: "Every day is a journey of learning and growth while serving our neighbors.",
    name: "Arsalan Khan",
    role: "Recreation Coordinator",
    avatar: "https://i.pravatar.cc/96?u=arsalan",
  },
  {
    quote: "An opportunity every day for growth, connection, and meaningful impact.",
    name: "John Patel",
    role: "IT Support Specialist",
    avatar: "https://i.pravatar.cc/96?u=john",
  },
];

const CHAPTERS = [
  { id: "discover", num: "01", label: "Discover", tagline: "Why Port Laken?" },
  { id: "serve",    num: "02", label: "Serve",    tagline: "Your Role Matters" },
  { id: "grow",     num: "03", label: "Grow",     tagline: "Benefits & Support" },
  { id: "apply",    num: "04", label: "Apply",    tagline: "Start Your Journey" },
];

/* =====================
   CAREER JOURNEY — Scroll-driven 4-chapter story
   Each chapter of a career at Port Laken unfolds as the user scrolls.
   Chapters: Discover → Serve → Grow → Apply
   Right-side rail tracks chapter progress.
   AnimatePresence slides each chapter's unique layout in/out.
===================== */
function CareerJourneySection() {
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

  const chapterIdx = Math.min(Math.floor(progress * CHAPTERS.length), CHAPTERS.length - 1);
  const chapter = CHAPTERS[chapterIdx];

  return (
    <div ref={containerRef} style={{ height: "500vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-port-navy">

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#6b9bc3 1px, transparent 1px), linear-gradient(90deg, #6b9bc3 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top ambient glow */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "50%",
            background: "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(107,155,195,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Chapter rail — right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5 items-end">
          {CHAPTERS.map((ch, i) => (
            <div key={ch.id} className="flex items-center gap-3">
              <span
                className="text-[9px] font-mono uppercase tracking-widest transition-all duration-500"
                style={{ color: "#6b9bc3", opacity: i === chapterIdx ? 0.9 : 0.2 }}
              >
                {ch.label}
              </span>
              <div
                className="rounded-full transition-all duration-500 flex-shrink-0"
                style={{
                  width:  i === chapterIdx ? "0.7rem" : "0.35rem",
                  height: i === chapterIdx ? "0.7rem" : "0.35rem",
                  backgroundColor: i === chapterIdx ? "#6b9bc3" : "rgba(107,155,195,0.18)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Chapter label — top left */}
        <div className="absolute top-8 left-8 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={chapterIdx}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-port-sky/40 text-[10px] font-mono uppercase tracking-[0.3em]">
                {chapter.num} / {String(CHAPTERS.length).padStart(2, "0")}
              </div>
              <div className="text-port-sky/65 text-[11px] uppercase tracking-[0.25em] font-bold mt-0.5">
                {chapter.tagline}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-port-sky/10 z-20">
          <div
            className="h-full bg-port-sky/50 transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Main chapter content */}
        <div className="absolute inset-0 flex items-center justify-center px-8 lg:px-20">
          <AnimatePresence mode="wait">

            {/* Chapter 1: DISCOVER */}
            {chapterIdx === 0 && (
              <motion.div
                key="discover"
                className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <p className="text-port-sky text-[10px] font-bold uppercase tracking-[0.35em] mb-5">
                    Why Port Laken?
                  </p>
                  <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-none">
                    A City Worth<br /><em className="text-port-ice">Serving</em>
                  </h2>
                  <p className="text-port-ice/60 text-lg leading-relaxed mb-8">
                    Port Laken is more than a city — it&apos;s a community. When you join our team, you join 500+ professionals committed to making every neighborhood better.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {[{ v: "500+", l: "Employees" }, { v: "8", l: "Departments" }, { v: "<2%", l: "Turnover" }].map((s) => (
                      <div key={s.l} className="text-center">
                        <div className="text-3xl font-bold text-port-sky mb-1">{s.v}</div>
                        <div className="text-port-ice/40 text-[10px] uppercase tracking-wider">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {highlights.map((h, i) => {
                    const Icon = h.icon;
                    return (
                      <motion.div
                        key={h.title}
                        className="flex gap-4 bg-port-slate/30 border border-port-sky/10 rounded-2xl p-4 items-start"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                      >
                        <Icon className="text-port-sky text-lg mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-white text-sm mb-1">{h.title}</div>
                          <div className="text-port-ice/50 text-xs leading-relaxed">{h.description}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Chapter 2: SERVE */}
            {chapterIdx === 1 && (
              <motion.div
                key="serve"
                className="w-full max-w-3xl text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-port-sky text-[10px] font-bold uppercase tracking-[0.35em] mb-5">
                  Your Role Matters
                </p>
                <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4 leading-none">
                  Every Position<br /><em className="text-port-ice">Shapes the City</em>
                </h2>
                <p className="text-port-ice/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  From emergency response to community programs — your work has real, visible impact on Port Laken every single day.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {departments.map((dept, i) => (
                    <motion.div
                      key={dept}
                      className="bg-port-slate/35 border border-port-sky/12 rounded-xl px-4 py-3 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    >
                      <span className="text-port-ice/65 text-xs font-medium">{dept}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Chapter 3: GROW */}
            {chapterIdx === 2 && (
              <motion.div
                key="grow"
                className="w-full max-w-5xl grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <p className="text-port-sky text-[10px] font-bold uppercase tracking-[0.35em] mb-5">
                    Benefits & Support
                  </p>
                  <h2 className="font-display text-5xl font-bold text-white mb-8 leading-none">
                    We Take Care<br /><em className="text-port-ice">of Our Own</em>
                  </h2>
                  <div className="space-y-3.5">
                    {benefits.map((b, i) => (
                      <motion.div
                        key={b}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-port-sky/20 flex items-center justify-center flex-shrink-0">
                          <FaCheck className="text-port-sky text-[10px]" />
                        </div>
                        <span className="text-port-ice/70 text-sm">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="font-display text-8xl font-bold text-port-sky mb-2">&lt;2%</div>
                    <div className="text-port-ice/45 text-xs uppercase tracking-widest">Annual Turnover</div>
                  </motion.div>
                  <div className="w-24 h-px bg-port-sky/20" />
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="font-display text-8xl font-bold text-port-ice mb-2">7yr</div>
                    <div className="text-port-ice/45 text-xs uppercase tracking-widest">Average Tenure</div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Chapter 4: APPLY */}
            {chapterIdx === 3 && (
              <motion.div
                key="apply"
                className="w-full max-w-2xl text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-port-sky text-[10px] font-bold uppercase tracking-[0.35em] mb-5">
                  Start Your Journey
                </p>
                <h2 className="font-display text-6xl lg:text-7xl font-bold text-white mb-6 leading-none">
                  Ready to<br /><em className="text-port-ice">Serve?</em>
                </h2>
                <p className="text-port-ice/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Browse all open positions and apply securely through Indeed. Your future with Port Laken starts here.
                </p>
                <motion.a
                  href={indeedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-port-sky/15 border border-port-sky/35 rounded-2xl text-white font-bold hover:bg-port-sky/25 transition-all duration-300 text-base group"
                  whileHover={{ scale: 1.04 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaBriefcase className="text-port-sky text-lg flex-shrink-0" />
                  View Open Positions on Indeed
                  <FaArrowRight className="text-port-sky text-sm group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <p className="text-port-ice/30 text-[10px] mt-5 uppercase tracking-widest">
                  28+ Positions Available
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: progress < 0.04 ? 1 : 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
        >
          <p className="text-port-sky/35 text-[10px] uppercase tracking-[0.3em]">Scroll to explore</p>
          <motion.div
            animate={{ scaleY: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="mt-2 w-px h-7 bg-gradient-to-b from-port-sky to-transparent mx-auto"
          />
        </motion.div>

      </div>
    </div>
  );
}

/* =====================
   PAGE
===================== */
export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
          alt="Port Laken City" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/55 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-port-sky/60 to-port-ice/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-port-sky/25 border border-port-sky/40">
            Now Hiring
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Build Your Future.<br /><em className="text-port-ice">Serve Your City.</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-8">
            Join 500+ professionals making Port Laken a better place to live, work, and grow — every single day.
          </p>
          <a
            href={indeedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white font-bold hover:bg-white/20 transition-all text-sm"
          >
            <FaBriefcase className="text-port-ice" />
            View Openings on Indeed
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {pageStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-port-sky mb-1">{s.value}</div>
              <div className="text-port-ice/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ CAREER JOURNEY — signature scroll effect */}
      <CareerJourneySection />

      {/* TESTIMONIALS */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-port-sky text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Team Voices</p>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              We Grow <em>Together</em>
            </h2>
            <p className="text-port-ice/55 text-lg max-w-xl mx-auto">
              Real stories from the people who make Port Laken work every day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-port-slate/30 border border-port-sky/12 rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xl italic text-white/80 leading-snug mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-port-sky/60 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Apply with <em>Confidence</em>
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
            All Port Laken positions are posted securely on Indeed. Browse, apply, and start your career in public service.
          </p>
          <a
            href={indeedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-port-sky/20 border border-port-sky/35 rounded-2xl text-white font-bold hover:bg-port-sky/30 hover:scale-105 transition-all duration-300 text-base"
          >
            <FaBriefcase className="text-port-sky text-xl" />
            Find Us on Indeed
            <FaArrowRight className="text-port-sky" />
          </a>
          <p className="text-port-ice/30 text-xs mt-5 uppercase tracking-widest">
            Secure · Official · Free to Apply
          </p>
        </div>
      </section>
    </>
  );
}
