"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "layers",       title: "Zoning & Land Use",    description: "Managing zoning applications, variances, and land use decisions to shape how Port Laken grows." },
  { icon: "construction", title: "Building Permits",      description: "Streamlined permitting for residential and commercial construction projects across the city." },
  { icon: "architecture", title: "Urban Planning",         description: "Long-range planning for neighborhoods, transportation corridors, and community development." },
  { icon: "apartment",    title: "Housing Programs",       description: "Affordable housing initiatives and homeowner assistance programs for Port Laken residents." },
  { icon: "eco",          title: "Environmental Review",   description: "Ensuring all development projects meet environmental standards and sustainability goals." },
  { icon: "storefront",   title: "Economic Development",   description: "Attracting investment and supporting local businesses to drive sustainable economic growth." },
];

const stats = [
  { value: "1,400+", label: "Permits Issued" },
  { value: "48hr",   label: "Permit Review" },
  { value: "24",     label: "Active Projects" },
  { value: "15yr",   label: "General Plan Horizon" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CommunityDevelopmentPage() {
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

              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 leading-tight">
                Community <em style={{ color: PRIMARY }}>Development</em>
              </h1>
              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                Shaping the future of Port Laken through thoughtful planning, smart zoning, and vibrant economic development.
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="Community Development"
                fill
                className="object-cover object-bottom"
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy">Our Services</h2>
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
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=900"
              alt="Urban planning"
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

            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4 leading-snug">
              A City That <em>Grows With Purpose</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-3">
              Every permit issued, every zoning decision made, and every neighborhood plan adopted is a step toward the Port Laken we want to be.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-6">
              We engage residents at every stage, from early planning to final approval, to ensure development reflects the community&apos;s vision.
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
              Start Your <em>Project</em>
            </h2>
            <p className="text-port-slate/70 text-lg mb-7 max-w-xl mx-auto">
              Apply for permits and check zoning requirements.
            </p>
            <Link
              href="/forms"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
            >
              Check out Forms and Applications
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
