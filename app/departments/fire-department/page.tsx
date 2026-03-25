"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "local_fire_department", title: "Fire Suppression",    description: "Rapid response to structural fires, wildfires, and hazardous material incidents across Port Laken." },
  { icon: "emergency",             title: "Emergency Medical",   description: "Paramedic and EMT teams delivering critical pre-hospital care 24 hours a day, 7 days a week." },
  { icon: "person_search",          title: "Search & Rescue",     description: "Specialized teams trained for water rescue, confined space, and wilderness operations." },
  { icon: "fire_hydrant",          title: "Fire Prevention",     description: "Inspections, code enforcement, and public education to prevent fires before they start." },
  { icon: "school",                title: "Community Education", description: "Fire safety programs for schools, businesses, and community organizations citywide." },
  { icon: "warning",               title: "Hazmat Response",     description: "Certified hazardous materials team handling chemical spills and environmental emergencies." },
];

const stats = [
  { value: "3,200+", label: "Annual Responses"  },
  { value: "<4 min", label: "Avg. Response Time" },
  { value: "85",     label: "Firefighters"       },
  { value: "3",      label: "Fire Stations"      },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FireDepartmentPage() {
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
                Emergency Services
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 leading-tight">
                Fire <em style={{ color: PRIMARY }}>Department</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                Protecting lives, property, and the environment through rapid emergency response, prevention, and community service.
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
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000"
                alt="Fire Department"
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
            className="relative h-72 lg:h-[360px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900"
              alt="Firefighters in action"
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
              Our Mission
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4 leading-snug">
              Courage, Service, <em>Community</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-3">
              Every call we answer is a promise kept — a promise to the residents of Port Laken that trained, dedicated professionals stand ready around the clock.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-6">
              From kitchen fires to major emergencies, our crews respond with speed, skill, and compassion.
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
              In an Emergency, <em>Call 911</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-7 max-w-xl mx-auto">
              For non-emergency inquiries, contact our administrative office during business hours.
            </p>
            <div className="text-6xl font-bold mb-10" style={{ color: PRIMARY }}>911</div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Non-Emergency Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
