"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "park",            title: "Park Maintenance",  description: "Keeping Port Laken's parks, trails, and green spaces clean, safe, and beautiful year-round." },
  { icon: "sports_soccer",   title: "Sports Programs",   description: "Organized leagues, classes, and open recreation for all ages — from youth soccer to senior fitness." },
  { icon: "celebration",     title: "Community Events",  description: "Festivals, outdoor movies, concerts, and seasonal celebrations in public spaces across the city." },
  { icon: "pool",            title: "Aquatics",          description: "Swimming lessons, lap swim, and water safety programs at our community pool facilities." },
  { icon: "palette",         title: "Arts & Culture",    description: "Music, theater, and arts programming that bring creativity and connection to Port Laken." },
  { icon: "forest",          title: "Nature Programs",   description: "Environmental education, community gardening, and stewardship of Port Laken's natural spaces." },
];

const stats = [
  { value: "28",    label: "Parks & Open Spaces" },
  { value: "14mi",  label: "Trail Network" },
  { value: "200+",  label: "Annual Programs" },
  { value: "85K+",  label: "Annual Participants" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function RecreationParksPage() {
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
                Nature &amp; Community
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 leading-tight">
                Recreation <em style={{ color: PRIMARY }}>&amp; Parks</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                Creating vibrant outdoor spaces, community programs, and recreational opportunities for every resident of Port Laken.
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
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000"
                alt="Recreation & Parks"
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
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1472746729193-26ff3cbb4af7?auto=format&fit=crop&q=80&w=600"
                alt="Community recreation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${SHADE}20 0%, transparent 50%)` }} />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-sm mt-8">
              <Image
                src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&q=80&w=600"
                alt="Children playing in park"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${SHADE}20 0%, transparent 50%)` }} />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: PRIMARY }}>
              Our Green Spaces
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4 leading-snug">
              28 Parks, <em>Endless Possibilities</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-3">
              From Harborview Park on the waterfront to the new Elm Street community park, Port Laken&apos;s parks are gathering places for families, athletes, artists, and everyone in between.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-6">
              With 14 miles of maintained trails and 200+ annual programs, there&apos;s always something to explore, learn, or celebrate outdoors.
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
              Register for a <em>Program</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-7 max-w-xl mx-auto">
              Browse our full catalog of parks, classes, and events — and register online today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              View Programs &amp; Register
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
