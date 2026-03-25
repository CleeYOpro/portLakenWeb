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
const NAVY = "#1e3a5f"; // extracted for reuse

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
  { value: "< 6 min", label: "Average Response Time" },
  { value: "92%", label: "Case Resolution Rate" },
  { value: "1", label: "Headquarters" },
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

// Subtle fade-up variant (less dramatic)
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function PoliceDepartmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors"
            style={{ color: PRIMARY }}
          >
            <FaArrowLeft className="text-xs" /> Back to All Departments
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              

              <h1 className="text-5xl md:text-6xl font-bold text-port-navy leading-tight mb-6">
                Port Laken <span style={{ color: PRIMARY }}>Police Department</span>
              </h1>

              <p className="text-lg text-port-slate/80 leading-relaxed max-w-2xl mb-8">
                Committed to protecting our community through professional law enforcement,
                rapid emergency response, and strong partnerships with residents.
              </p>

              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] lg:aspect-video rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1200"
                alt="Police officers serving the community"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* STATS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label}>
              
              <div className="text-4xl font-bold mb-2" style={{ color: PRIMARY }}>
                {s.value}
              </div>
              <div className="text-sm uppercase tracking-wide text-port-slate/70 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-port-navy mb-6">
              Protecting Port Laken
            </h2>
            <p className="text-lg text-port-slate/70 max-w-3xl mx-auto">
              Comprehensive public safety services delivered with professionalism, integrity, and dedication to our residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="p-8 rounded-xl border bg-white transition-shadow hover:shadow-lg"
                style={{ borderColor: SHADE }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${SHADE}25` }}
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: PRIMARY }}
                  >
                    {svc.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-port-navy mb-3">{svc.title}</h3>
                <p className="text-port-slate/75">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
              alt="Officers engaging with community members"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
          </div>

          <div className="order-1 lg:order-2">

            <h2 className="text-4xl md:text-5xl font-bold text-port-navy leading-tight mb-6">
              Safety Through Trust & Collaboration
            </h2>
            <p className="text-lg text-port-slate/80 mb-6">
              Our officers are not only responders — they are neighbors, mentors, and partners dedicated to building safer, stronger communities.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border" style={{ borderColor: SHADE }}>
                <div className="flex items-center gap-4 mb-3">
                  <FaUserShield className="text-2xl" style={{ color: PRIMARY }} />
                  <h4 className="font-semibold text-lg text-port-navy">Visible Presence</h4>
                </div>
                <p className="text-port-slate/75">
                  Proactive patrols and engagement throughout every neighborhood.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white border" style={{ borderColor: SHADE }}>
                <div className="flex items-center gap-4 mb-3">
                  <FaMapMarkerAlt className="text-2xl" style={{ color: PRIMARY }} />
                  <h4 className="font-semibold text-lg text-port-navy">Local Partnerships</h4>
                </div>
                <p className="text-port-slate/75">
                  Working closely with schools, businesses, and civic groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HONORING SECTION - NEW */}
      <section className="py-20 bg-port-cream" style={{ borderTop: `1px solid ${SHADE}` }}>
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-port-navy mb-6">
        Honoring Those Who Have Served
      </h2>
      <p className="text-lg text-port-slate/80 max-w-3xl mx-auto">
        We remember with deep respect the officers who dedicated and in some cases sacrificed their lives in service to Port Laken.
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px]">

      {/* Featured Fallen Officer */}
      <div className="md:col-span-3 md:row-span-2 rounded-2xl overflow-hidden relative group">
        <Image 
          src="https://images.unsplash.com/photo-1529478490015-00f1a2f8f5cd?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Officer James R. Harlan" 
          fill 
          className="object-cover group-hover:scale-105 transition"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold">Officer James R. Harlan</h3>
          <p className="text-sm opacity-80">Rest In Peace: June 12, 2025</p>
        </div>
      </div>



      {/* Quote block */}
      <div className="md:col-span-2 rounded-2xl bg-gray-50 border p-6 flex items-center justify-center text-center">
        <p className="italic text-port-slate/70">
          "Greater love has no one than this: to lay down one's life for one's friends."
        </p>
      </div>

      {/* Retired Officers */}
      {[
        { name: "Edward Lang", years: "1982–2015 (Retired)" },
        { name: "Sandra Kline", years: "1990–2022 (Retired)" },
        { name: "Thomas Reed", years: "1978–2008 (Retired)" },
        { name: "Carla Morales", years: "1995–2025 (Retired)" },
      ].map((ret) => (
        <div
          key={ret.name}
          className="md:col-span-1 rounded-2xl border bg-white p-4 flex flex-col items-center justify-center text-center"
          style={{ borderColor: SHADE }}
        >
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-port-navy/40 mb-2">
            {ret.name[0]}
          </div>
          <p className="text-sm font-medium text-port-navy">{ret.name}</p>
          <p className="text-xs text-port-slate/70">{ret.years}</p>
        </div>
      ))}

    </div>

    {/* Footer */}
    <p className="text-center mt-10 text-port-slate/70">
      Thank you for your decades of dedicated service. Your legacy continues.
    </p>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-port-navy mb-8">
            Reach Out! We're Ready to Assist
          </h2>
          <p className="text-lg text-port-slate/80 mb-10 max-w-3xl mx-auto">
            For emergencies, dial 911 immediately. For other matters, call our non-emergency line.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-xl" style={{ backgroundColor: `${SHADE}30`, border: `1px solid ${SHADE}` }}>
              <div className="text-sm uppercase font-semibold mb-3 text-port-slate/70">Emergency</div>
              <div className="text-5xl font-bold" style={{ color: PRIMARY }}>911</div>
            </div>
            <div className="p-8 rounded-xl border bg-white" style={{ borderColor: SHADE }}>
              <div className="text-sm uppercase font-semibold mb-3 text-port-slate/70">Non-Emergency</div>
              <div className="text-3xl font-bold text-port-navy">(555) 400-5000</div>
            </div>
            <div className="p-8 rounded-xl border bg-white" style={{ borderColor: SHADE }}>
              <div className="text-sm uppercase font-semibold mb-3 text-port-slate/70">Tip Line</div>
              <div className="text-3xl font-bold text-port-navy">(555) 400-5012</div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
}