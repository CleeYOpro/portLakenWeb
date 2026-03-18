"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaShieldAlt,
  FaFileAlt,
  FaMapMarkerAlt,
  FaUserShield,
} from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE = "#ABD1E6";

const services = [
  {
    icon: "shield",
    title: "Patrol Services",
    description:
      "24/7 patrol officers maintaining a visible, responsive presence in every Port Laken neighborhood.",
  },
  {
    icon: "manage_search",
    title: "Criminal Investigations",
    description:
      "Dedicated detectives handling property crimes, violent offenses, and specialized investigations.",
  },
  {
    icon: "directions_car",
    title: "Traffic Enforcement",
    description:
      "Keeping streets safe through traffic management, DUI enforcement, and accident investigation.",
  },
  {
    icon: "handshake",
    title: "Community Policing",
    description:
      "Building trust through neighborhood liaisons, youth outreach, and resident partnership programs.",
  },
  {
    icon: "diversity_3",
    title: "Youth Programs",
    description:
      "Mentorship and after-school initiatives connecting officers with the next generation.",
  },
  {
    icon: "headset_mic",
    title: "Dispatch & Communications",
    description:
      "Around-the-clock dispatch center coordinating emergency response across the city.",
  },
];

const stats = [
  { value: "120+", label: "Officers" },
  { value: "< 6 min", label: "Response Time" },
  { value: "92%", label: "Case Resolution" },
  { value: "1", label: "Precinct" },
];

const quickActions = [
  {
    icon: FaPhoneAlt,
    title: "Emergency",
    value: "911",
    note: "Immediate response",
    dark: true,
  },
  {
    icon: FaShieldAlt,
    title: "Non-Emergency",
    value: "(555) 400-5000",
    note: "General police assistance",
    dark: false,
  },
  {
    icon: FaFileAlt,
    title: "Community Tip Line",
    value: "(555) 400-5012",
    note: "Anonymous information welcome",
    dark: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function PoliceDepartmentPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 pb-14 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm transition-colors mb-7"
            style={{ color: `${PRIMARY}80` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${PRIMARY}80`)}
          >
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  color: PRIMARY,
                  backgroundColor: `${SHADE}30`,
                  border: `1px solid ${SHADE}`,
                }}
              >
                Public Safety
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 leading-tight">
                Police <em style={{ color: PRIMARY }}>Department</em>
              </h1>

              <p className="text-port-slate/70 text-lg leading-relaxed max-w-xl mb-6">
                Dedicated to keeping Port Laken safe through professional law
                enforcement, responsive emergency support, and meaningful
                community partnerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all"
                  style={{ backgroundColor: PRIMARY }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#5a7389")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = PRIMARY)
                  }
                >
                  Contact the Department
                </Link>

                <Link
                  href="/forms"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all border"
                  style={{
                    color: PRIMARY,
                    borderColor: SHADE,
                    backgroundColor: "white",
                  }}
                >
                  File a Report
                </Link>
              </div>

              <div className="mt-6 h-px" style={{ backgroundColor: SHADE }} />
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1200"
                alt="Police officer assisting community members"
                fill
                className="object-cover object-center"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${SHADE}25 0%, rgba(30,58,95,0.10) 45%, transparent 70%)`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section className="pb-10 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    ...fadeUp,
                    visible: {
                      ...fadeUp.visible,
                      transition: {
                        duration: 0.4,
                        delay: i * 0.08,
                        ease: "easeOut" as const,
                      },
                    },
                  }}
                  className="rounded-2xl p-5 border"
                  style={{
                    backgroundColor: item.dark ? PRIMARY : "white",
                    borderColor: item.dark ? PRIMARY : `${SHADE}70`,
                    color: item.dark ? "white" : "#1e3a5f",
                    boxShadow: item.dark
                      ? "0 8px 28px rgba(112,138,163,0.18)"
                      : "none",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: item.dark
                          ? "rgba(255,255,255,0.14)"
                          : `${SHADE}28`,
                      }}
                    >
                      <Icon
                        className="text-lg"
                        style={{ color: item.dark ? "white" : PRIMARY }}
                      />
                    </div>

                    <div>
                      <p
                        className="text-xs uppercase tracking-[0.2em] font-bold mb-1"
                        style={{
                          color: item.dark ? "rgba(255,255,255,0.72)" : `${PRIMARY}`,
                        }}
                      >
                        {item.title}
                      </p>
                      <p className="text-2xl md:text-3xl font-bold leading-tight">
                        {item.value}
                      </p>
                      <p
                        className="text-sm mt-1"
                        style={{
                          color: item.dark
                            ? "rgba(255,255,255,0.82)"
                            : "rgba(71,85,105,0.85)",
                        }}
                      >
                        {item.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="py-10 bg-white"
        style={{ borderTop: `1px solid ${SHADE}45`, borderBottom: `1px solid ${SHADE}50` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                ...fadeUp,
                visible: {
                  ...fadeUp.visible,
                  transition: {
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: "easeOut" as const,
                  },
                },
              }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY }}>
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-port-slate/55">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: PRIMARY }}
            >
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy">
              Public Safety Services
            </h2>
            <p className="mt-3 text-port-slate/70 max-w-2xl">
              From patrol presence to youth outreach and emergency dispatch,
              Port Laken Police Department provides essential services that keep
              residents informed, supported, and safe.
            </p>
            <div className="mt-4 w-10 h-0.5 rounded-full" style={{ backgroundColor: SHADE }} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  ...fadeUp,
                  visible: {
                    ...fadeUp.visible,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.07,
                      ease: "easeOut" as const,
                    },
                  },
                }}
                className="group rounded-2xl p-6 border bg-white transition-all duration-300"
                style={{ borderColor: `${SHADE}60` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${PRIMARY}50`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 26px ${SHADE}55`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${SHADE}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${SHADE}22` }}
                >
                  <span
                    className="material-symbols-outlined block"
                    style={{ fontSize: "1.55rem", color: PRIMARY }}
                  >
                    {svc.icon}
                  </span>
                </div>

                <h3 className="font-bold text-port-navy mb-2 text-base">
                  {svc.title}
                </h3>
                <p className="text-port-slate/65 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SECTION ── */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
              alt="Community partnership and outreach"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${SHADE}18 0%, rgba(30,58,95,0.08) 50%, transparent 75%)`,
              }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: PRIMARY }}
            >
              Community First
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4 leading-snug">
              Building safer neighborhoods through <em>trust and visibility</em>
            </h3>
            <p className="text-port-slate/70 leading-relaxed mb-4">
              Port Laken officers serve as both emergency responders and community
              partners. We focus on neighborhood presence, school outreach, youth
              engagement, and responsive policing that reflects local priorities.
            </p>
            <p className="text-port-slate/70 leading-relaxed mb-6">
              By working directly with residents, businesses, and civic partners,
              the department strengthens public safety through communication,
              prevention, and accountability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div
                className="rounded-2xl p-4 border bg-white"
                style={{ borderColor: `${SHADE}70` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaUserShield style={{ color: PRIMARY }} />
                  <span className="font-semibold text-port-navy text-sm">
                    Neighborhood Presence
                  </span>
                </div>
                <p className="text-sm text-port-slate/70">
                  Active patrol coverage and visible local engagement across Port Laken.
                </p>
              </div>

              <div
                className="rounded-2xl p-4 border bg-white"
                style={{ borderColor: `${SHADE}70` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaMapMarkerAlt style={{ color: PRIMARY }} />
                  <span className="font-semibold text-port-navy text-sm">
                    Local Coordination
                  </span>
                </div>
                <p className="text-sm text-port-slate/70">
                  Partnerships with schools, neighborhoods, and city services.
                </p>
              </div>
            </div>

            <div className="h-px" style={{ backgroundColor: SHADE }} />
          </motion.div>
        </div>
      </section>

      {/* ── ASSISTANCE / CTA ── */}
      <section className="py-16 bg-white" style={{ borderTop: `1px solid ${SHADE}50` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: PRIMARY }}
            >
              Need Assistance
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
              Get help quickly and reach the right team
            </h2>

            <p className="text-port-slate/70 text-lg mb-8 max-w-2xl mx-auto">
              For emergencies call 911 immediately. For non-emergency support,
              department questions, or community concerns, our team is available
              to assist residents directly.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div
                className="rounded-2xl px-6 py-6 text-center"
                style={{
                  backgroundColor: `${SHADE}25`,
                  border: `1px solid ${SHADE}`,
                }}
              >
                <div className="text-xs uppercase tracking-widest mb-2 text-port-slate/55">
                  Emergency
                </div>
                <div className="text-4xl font-bold" style={{ color: PRIMARY }}>
                  911
                </div>
              </div>

              <div
                className="rounded-2xl px-6 py-6 text-center border bg-white"
                style={{ borderColor: `${SHADE}70` }}
              >
                <div className="text-xs uppercase tracking-widest mb-2 text-port-slate/55">
                  Non-Emergency
                </div>
                <div className="text-2xl font-bold text-port-navy">
                  (555) 400-5000
                </div>
              </div>

              <div
                className="rounded-2xl px-6 py-6 text-center border bg-white"
                style={{ borderColor: `${SHADE}70` }}
              >
                <div className="text-xs uppercase tracking-widest mb-2 text-port-slate/55">
                  Tip Line
                </div>
                <div className="text-2xl font-bold text-port-navy">
                  (555) 400-5012
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all"
                style={{ backgroundColor: PRIMARY }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#5a7389")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = PRIMARY)
                }
              >
                Contact the Department
              </Link>

              <Link
                href="/forms"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border transition-all"
                style={{
                  color: PRIMARY,
                  borderColor: SHADE,
                  backgroundColor: "white",
                }}
              >
                File a Report
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}