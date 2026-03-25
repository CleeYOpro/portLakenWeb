"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const services = [
  { icon: "road", title: "Road Maintenance", description: "Repaving, pothole repair, and infrastructure upkeep across hundreds of miles of city streets." },
  { icon: "water_drop", title: "Water & Sewer", description: "Operating and maintaining Port Laken's water treatment, distribution, and wastewater systems." },
  { icon: "delete", title: "Solid Waste", description: "Residential and commercial waste collection, recycling programs, and hazardous material disposal." },
  { icon: "park", title: "Urban Forestry", description: "Planting, pruning, and protecting the city's tree canopy for environmental and community benefit." },
  { icon: "wb_twilight", title: "Street Lighting", description: "Installing and maintaining LED street lights to improve safety and energy efficiency citywide." },
  { icon: "water", title: "Stormwater", description: "Managing drainage systems and green infrastructure to prevent flooding and protect the harbor." },
];

const stats = [
  { value: "280mi", label: "Roads Maintained" },
  { value: "4,500", label: "Storm Drains" },
  { value: "12K+", label: "Street Lights" },
  { value: "7 days", label: "Weekly Operations" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function PublicWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 bg-port-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at 20% 30%, ${SHADE}40, transparent 60%)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
            style={{ color: `${PRIMARY}80` }}
          >
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>


              <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-5 leading-[1.05] tracking-tight">
                Public{" "}
                <em className="not-italic relative">
                  <span style={{ color: PRIMARY }}>Works</span>
                  <span className="absolute left-0 -bottom-1 w-full h-[6px] rounded-full opacity-40"
                    style={{ backgroundColor: SHADE }} />
                </em>
              </h1>

              <p className="text-port-slate/70 text-lg leading-relaxed max-w-lg">
                Keeping roads safe, water clean, and the city running 24/7.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000"
                alt="Public Works"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 backdrop-blur-[1px]"
                style={{ background: `linear-gradient(135deg, ${SHADE}25, transparent)` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border bg-white text-center hover:shadow-md transition-all"
              style={{ borderColor: `${SHADE}50` }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: PRIMARY }}>
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-port-slate/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="mb-10">

            <h2 className="font-display text-4xl font-bold text-port-navy">Our Services</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6 }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl border bg-white hover:shadow-lg transition-all"
                style={{ borderColor: `${SHADE}50` }}
              >
                <span
                  className="material-symbols-outlined mb-4 block transition-transform duration-300 group-hover:scale-110"
                  style={{ fontSize: "1.9rem", color: PRIMARY }}
                >
                  {svc.icon}
                </span>

                <h3 className="font-semibold text-port-navy mb-2">
                  {svc.title}
                </h3>

                <p className="text-sm text-port-slate/65 leading-relaxed">
                  {svc.description}
                </p>

                <div className="mt-4 h-[2px] w-0 group-hover:w-10 transition-all"
                  style={{ backgroundColor: PRIMARY }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="relative h-[360px] rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="https://gerkencompanies.com/wp-content/uploads/2023/01/Adrian-Asphalt-Location-23.jpg"
              alt="Infrastructure workers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${SHADE}30, transparent)` }}
            />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">


            <h3 className="font-display text-4xl font-bold text-port-navy mb-5 leading-snug">
              The Crew Behind <em className="not-italic" style={{ color: PRIMARY }}>Every Road</em>
            </h3>

            <p className="text-port-slate/70 mb-4 leading-relaxed">
              Our crews operate around the clock to keep infrastructure running smoothly—from emergency repairs to long-term improvements.
            </p>

            <p className="text-port-slate/70 leading-relaxed mb-6">
              Investments in sustainability and green systems ensure Port Laken is ready for the future. And so they are BUILT to LAST.
            </p>


          </motion.div>
        </div>
      </section>
    </>
  );
}