"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "person_search",     title: "Recruitment & Hiring",   description: "Attracting and selecting top talent to serve the Port Laken community across all city departments." },
  { icon: "school",            title: "Training & Development", description: "Professional growth programs, leadership development, and skills training for all city employees." },
  { icon: "health_and_safety", title: "Benefits Administration",description: "Health, dental, vision, and retirement benefits for Port Laken's dedicated municipal workforce." },
  { icon: "groups",            title: "Employee Relations",     description: "Fostering a positive, equitable workplace where every employee is heard, respected, and supported." },
  { icon: "handshake",         title: "Labor Relations",        description: "Negotiating and administering collective bargaining agreements with city employee organizations." },
  { icon: "verified_user",     title: "Workplace Safety",       description: "Compliance, risk management, and safety programs that protect every member of our team." },
];

const stats = [
  { value: "650+", label: "City Employees" },
  { value: "12",   label: "Departments Served" },
  { value: "96%",  label: "Retention Rate" },
  { value: "40+",  label: "Benefits Programs" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HumanResourcesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm transition-colors mb-10"
            style={{ color: `${PRIMARY}80` }}
            onMouseEnter={e => (e.currentTarget.style.color = PRIMARY)}
            onMouseLeave={e => (e.currentTarget.style.color = `${PRIMARY}80`)}
          >
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: PRIMARY, backgroundColor: `${SHADE}30`, border: `1px solid ${SHADE}` }}
              >
                People &amp; Culture
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-5 leading-tight">
                Human <em style={{ color: PRIMARY }}>Resources</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                Empowering Port Laken&apos;s workforce — recruiting great people, investing in their growth, and building a city team to be proud of.
              </p>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Human Resources"
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
          {stats.map((s, i) => (
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

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: PRIMARY }}>What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy">Our Services</h2>
            <div className="mt-4 w-10 h-0.5 rounded-full" style={{ backgroundColor: SHADE }} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" as const } } }}
                className="group rounded-2xl p-6 border bg-white transition-all duration-300"
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
                <span
                  className="material-symbols-outlined mb-4 block"
                  style={{ fontSize: "1.75rem", color: PRIMARY }}
                >
                  {svc.icon}
                </span>
                <h3 className="font-bold text-port-navy mb-2 text-sm">{svc.title}</h3>
                <p className="text-port-slate/65 text-sm leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900"
              alt="City employees"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${SHADE}25 0%, transparent 50%)` }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: PRIMARY }}>
              Our People
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6 leading-snug">
              A Team That <em>Serves Together</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-4">
              Port Laken&apos;s greatest asset is its people. Our Human Resources team works every day to recruit exceptional talent, support employee wellbeing, and create a workplace culture built on respect and purpose.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-8">
              Whether you&apos;re exploring a career with the city or a current employee seeking support, we&apos;re here for you.
            </p>
            <div className="h-px" style={{ backgroundColor: SHADE }} />
          </motion.div>
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
              Join Our <em>Team</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-10 max-w-xl mx-auto">
              Explore open positions, learn about city benefits, and start a meaningful career serving Port Laken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
                style={{ backgroundColor: PRIMARY }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all"
                style={{ color: PRIMARY, backgroundColor: `${SHADE}25`, border: `1px solid ${SHADE}` }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = `${SHADE}50`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = `${SHADE}25`;
                }}
              >
                Contact HR Office
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
