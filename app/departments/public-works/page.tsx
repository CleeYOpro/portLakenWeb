"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "road",              title: "Road Maintenance",  description: "Repaving, pothole repair, and infrastructure upkeep across hundreds of miles of city streets." },
  { icon: "water_drop",        title: "Water & Sewer",     description: "Operating and maintaining Port Laken's water treatment, distribution, and wastewater systems." },
  { icon: "delete",            title: "Solid Waste",       description: "Residential and commercial waste collection, recycling programs, and hazardous material disposal." },
  { icon: "park",              title: "Urban Forestry",    description: "Planting, pruning, and protecting the city's tree canopy for environmental and community benefit." },
  { icon: "wb_twilight",       title: "Street Lighting",   description: "Installing and maintaining LED street lights to improve safety and energy efficiency citywide." },
  { icon: "water",             title: "Stormwater",        description: "Managing drainage systems and green infrastructure to prevent flooding and protect the harbor." },
];

const stats = [
  { value: "280mi",  label: "Roads Maintained" },
  { value: "4,500",  label: "Storm Drains" },
  { value: "12K+",   label: "Street Lights" },
  { value: "7 days", label: "Weekly Operations" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function PublicWorksPage() {
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
                Infrastructure &amp; Operations
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-5 leading-tight">
                Public <em style={{ color: PRIMARY }}>Works</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                The backbone of Port Laken — keeping roads safe, water clean, and the city running around the clock.
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000"
                alt="Public Works"
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
              src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&q=80&w=900"
              alt="Infrastructure workers"
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
              Built to Last
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6 leading-snug">
              The Crew Behind <em>Every Road</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-4">
              Our Public Works crew works days, nights, and weekends to ensure that Port Laken&apos;s infrastructure never stops. From emergency water main breaks to routine pothole patching, we&apos;re there.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-8">
              Long-term investments in green infrastructure and sustainable systems ensure the city is built to last for generations.
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
              Report an <em>Issue</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-10 max-w-xl mx-auto">
              Pothole? Broken streetlight? Report infrastructure issues and our team will respond promptly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Submit a Report
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
