"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "edit_document",  title: "Elections & Voting",   description: "Administering fair and transparent municipal elections for all eligible Port Laken residents." },
  { icon: "description",    title: "Public Records",       description: "Maintaining and providing access to official city documents, ordinances, and meeting minutes." },
  { icon: "gavel",          title: "Legislative Support",  description: "Supporting City Council proceedings with agendas, minutes, and legislative tracking." },
  { icon: "badge",          title: "Business Licensing",   description: "Processing business licenses, permits, and registrations for local enterprises." },
  { icon: "campaign",       title: "Public Notices",       description: "Publishing official city announcements, hearings, and legal notifications." },
  { icon: "folder_open",    title: "Records Management",   description: "Archiving and preserving historical city records for future generations." },
];

const stats = [
  { value: "50K+", label: "Records Managed" },
  { value: "12K",  label: "Registered Voters" },
  { value: "800+", label: "Business Licenses" },
  { value: "24hr", label: "Online Access" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CityClerkPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 pb-14 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm transition-colors mb-7"
            style={{ color: `${PRIMARY}80` }}
            onMouseEnter={e => (e.currentTarget.style.color = PRIMARY)}
            onMouseLeave={e => (e.currentTarget.style.color = `${PRIMARY}80`)}
          >
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: PRIMARY, backgroundColor: `${SHADE}30`, border: `1px solid ${SHADE}` }}
              >
                Official Records &amp; Elections
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 leading-tight">
                City <em style={{ color: PRIMARY }}>Clerk</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                The official keeper of Port Laken&apos;s public record — ensuring transparency, accountability, and access for all residents.
              </p>
              <div className="mt-6 h-px" style={{ backgroundColor: SHADE }} />
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1000"
                alt="City Clerk Office"
                fill
                className="object-cover"
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
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8"
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
      <section className="py-14 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative h-72 lg:h-[360px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=900"
              alt="Public records and democracy"
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: PRIMARY }}>
              Democracy in Action
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4 leading-snug">
              Keeping Government <em>Open &amp; Accessible</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-3">
              The City Clerk&apos;s Office is the foundation of open government in Port Laken — maintaining records, administering elections, and ensuring residents can access the information they need.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-6">
              From business licensing to ballot counting, we work with precision and integrity every day.
            </p>
            <div className="h-px" style={{ backgroundColor: SHADE }} />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-white" style={{ borderTop: `1px solid ${SHADE}50` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
              Need a Public <em>Record?</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-7 max-w-xl mx-auto">
              Submit a public records request online or visit our office during business hours. Most requests fulfilled within 5 business days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Contact the Clerk&apos;s Office
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
