"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const PRIMARY = "#E63946"; // Switched to Red for Fire Department
const NAVY = "#1D3557";
const SHADE = "#F1FAEE";

const videos = [
  "/firedept/14297196_3840_2160_24fps.mp4",
  "/firedept/20710904-uhd_3840_2160_30fps.mp4",
  "/firedept/5266045-uhd_3840_2160_30fps.mp4",
  "/firedept/856181-hd_1920_1080_30fps.mp4"
];

const services = [
  { icon: "local_fire_department", title: "Fire Suppression" },
  { icon: "emergency", title: "Emergency Medical" },
  { icon: "person_search", title: "Search & Rescue" },
  { icon: "fire_hydrant", title: "Fire Prevention" },
];

export default function FireDepartmentPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) v.playbackRate = 2.0;
    });
  }, []);

  const plfd = ["PORT", "LAKEN", "FIRE", "DEPT."];

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="relative h-[90vh] md:h-[95vh] w-full flex flex-col justify-center items-center">
        {/* Videos Container with Rounded Bottom Edges */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-b-[40px] shadow-sm">
          {videos.map((src, idx) => (
            <video
              key={src}
              ref={(el) => {
                if (el) videoRefs.current[idx] = el;
              }}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeVideo === idx ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />
        </div>

        {/* Container for Back to Departments Link */}
        <div className="absolute top-28 left-6 md:top-36 md:left-10 z-50">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 text-sm font-medium tracking-wide transition-all"
          >
            <FaArrowLeft className="text-xs" /> back to departments
          </Link>
        </div>

        {/* Content Centered but Shifted Up */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 -mt-16 md:-mt-24">
          <div className="flex space-x-2 md:space-x-6 overflow-hidden">
            {plfd.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i * 1,
                }}
                className="font-display text-6xl md:text-8xl font-black text-white drop-shadow-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY ALERTS ── */}
      <section className="bg-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 pb-12">
            <div className="w-full md:w-[48%] xl:w-[45%] bg-[#E63946] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center transform transition hover:scale-[1.02]">
              <h3 className="text-sm font-bold tracking-widest uppercase mb-2 opacity-90">Emergency</h3>
              <div className="text-5xl md:text-6xl font-black mb-4">DIAL 911</div>
              <p className="text-white/90">If you are in immediate danger or experiencing a life-threatening emergency.</p>
            </div>
            <div className="w-full md:w-[48%] xl:w-[45%] bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col justify-center transition hover:shadow-lg">
              <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Non-Emergency</h3>
              <div className="text-4xl md:text-5xl font-black text-port-navy mb-4">DIAL 311</div>
              <p className="text-gray-600">For fire inspections, safety fallout, or general fire department inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE & FIREMEN ── */}
      <section className="bg-white pb-20 pt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.pexels.com/photos/4127694/pexels-photo-4127694.jpeg"
              alt="Firefighters in action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <div className="text-5xl text-[#E63946] mb-4">"</div>
            <h2 className="text-3xl md:text-5xl font-bold text-port-navy leading-tight mb-8">
              Protecting lives, property, and our community with unwavering <span className="text-[#E63946]">courage</span>.
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-4">
              {services.map((svc) => (
                <div key={svc.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E63946]">
                    <span className="material-symbols-outlined">{svc.icon}</span>
                  </div>
                  <span className="font-bold text-gray-800">{svc.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-28 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-port-navy mb-6 leading-tight">
                Honoring Our <span className="text-[#E63946]">Team</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                Behind every emergency response is a team built on trust, precision, and courage.
                Each role plays a critical part in protecting Port Laken, together forming a system
                that saves lives every single day.
              </p>

              {/* Image embedded here instead */}
              <div className="relative w-full h-[250px] rounded-2xl overflow-hidden ">
                <Image
                  src="https://telfordfireco.com/wp-content/uploads/2024/09/TFDGroup-membershiphomepage-768x509.jpg"
                  alt="Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Stronger Together</h3>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (STACKED + OFFSET CARDS) */}
            <div className="relative space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
                <h3 className="text-lg font-bold text-port-navy mb-2">Firefighters</h3>
                <p className="text-gray-600 text-sm">
                  Rapid response specialists trained to control fire, execute rescues,
                  and operate in extreme environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition ml-8">
                <h3 className="text-lg font-bold text-port-navy mb-2">Paramedics & EMTs</h3>
                <p className="text-gray-600 text-sm">
                  Delivering critical pre-hospital care with precision under pressure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
                <h3 className="text-lg font-bold text-port-navy mb-2">Engineers & Captains</h3>
                <p className="text-gray-600 text-sm">
                  Leading operations, coordinating strategy, and ensuring mission success.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
