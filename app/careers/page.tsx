"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaChartLine,
  FaHeartbeat,
  FaArrowRight,
  FaBriefcase,
  FaCheck,
} from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CareersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: PRIMARY, backgroundColor: `${SHADE}30`, border: `1px solid ${SHADE}` }}
              >
                Now Hiring
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-5 leading-tight">
                Build Your Future. <em style={{ color: PRIMARY }}>Serve Your City.</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg mb-8">
                Join 500+ professionals making Port Laken a better place to live, work, and grow — every single day.
              </p>
              <a
                href={indeedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white transition-all"
                style={{ backgroundColor: PRIMARY }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
              >
                <FaBriefcase />
                View Openings on Indeed
                <FaArrowRight className="text-xs" />
              </a>
              <div className="mt-8 h-px" style={{ backgroundColor: SHADE }} />
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Port Laken City"
                fill
                className="object-cover object-center"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${SHADE}30 0%, transparent 60%)` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 bg-white" style={{ borderBottom: `1px solid ${SHADE}50` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {pageStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const } } }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY }}>{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-port-slate/55">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY PORT LAKEN ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: PRIMARY }}>Why Port Laken?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy">A City Worth Serving</h2>
            <div className="mt-4 w-10 h-0.5 rounded-full" style={{ backgroundColor: SHADE }} />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const } } }}
                  className="rounded-2xl p-6 border bg-white transition-all duration-300"
                  style={{ borderColor: `${SHADE}60` }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${PRIMARY}50`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${SHADE}60`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${SHADE}60`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon className="text-2xl mb-4" style={{ color: PRIMARY }} />
                  <h3 className="font-bold text-port-navy mb-2">{h.title}</h3>
                  <p className="text-port-slate/65 text-sm leading-relaxed">{h.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: PRIMARY }}>Your Role Matters</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6 leading-snug">
              Every Position <em>Shapes the City</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-8">
              From emergency response to community programs — your work has real, visible impact on Port Laken every single day.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {departments.map((dept, i) => (
                <motion.div
                  key={dept}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.3, delay: i * 0.06, ease: "easeOut" as const } } }}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-port-slate"
                  style={{ backgroundColor: `${SHADE}25`, border: `1px solid ${SHADE}60` }}
                >
                  {dept}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
              alt="City team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${SHADE}25 0%, transparent 50%)` }} />
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: PRIMARY }}>Benefits &amp; Support</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-8 leading-snug">
              We Take Care <em>of Our Own</em>
            </h3>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.3, delay: i * 0.08, ease: "easeOut" as const } } }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${SHADE}40`, border: `1px solid ${SHADE}` }}
                  >
                    <FaCheck className="text-[10px]" style={{ color: PRIMARY }} />
                  </div>
                  <span className="text-port-slate/75 text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: `${SHADE}20`, border: `1px solid ${SHADE}` }}
            >
              <div className="font-display text-7xl font-bold mb-2" style={{ color: PRIMARY }}>&lt;2%</div>
              <div className="text-xs uppercase tracking-widest text-port-slate/55">Annual Turnover</div>
            </div>
            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: `${SHADE}10`, border: `1px solid ${SHADE}80` }}
            >
              <div className="font-display text-7xl font-bold mb-2 text-port-navy">7yr</div>
              <div className="text-xs uppercase tracking-widest text-port-slate/55">Average Tenure</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: PRIMARY }}>Team Voices</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
              We Grow <em>Together</em>
            </h2>
            <p className="text-port-slate/65 text-lg max-w-xl mx-auto">
              Real stories from the people who make Port Laken work every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const } } }}
                className="rounded-2xl p-6 border bg-white flex flex-col"
                style={{ borderColor: `${SHADE}60` }}
              >
                <p className="text-base italic text-port-slate/75 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: `1px solid ${SHADE}50` }}>
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-port-navy text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: `${PRIMARY}90` }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white" style={{ borderTop: `1px solid ${SHADE}50` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
              Apply with <em>Confidence</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-10 max-w-xl mx-auto">
              All Port Laken positions are posted securely on Indeed. Browse, apply, and start your career in public service.
            </p>
            <a
              href={indeedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              <FaBriefcase />
              Find Us on Indeed
              <FaArrowRight className="text-xs" />
            </a>
            <p className="text-port-slate/35 text-xs mt-5 uppercase tracking-widest">
              Secure · Official · Free to Apply
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
