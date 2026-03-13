import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaWrench, FaTint, FaTrashAlt, FaTree, FaLightbulb, FaWater, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaWrench, title: "Road Maintenance", description: "Repaving, pothole repair, and infrastructure upkeep across hundreds of miles of city streets." },
  { icon: FaTint, title: "Water & Sewer", description: "Operating and maintaining Port Laken's water treatment, distribution, and wastewater systems." },
  { icon: FaTrashAlt, title: "Solid Waste", description: "Residential and commercial waste collection, recycling programs, and hazardous material disposal." },
  { icon: FaTree, title: "Urban Forestry", description: "Planting, pruning, and protecting the city's tree canopy for environmental and community benefit." },
  { icon: FaLightbulb, title: "Street Lighting", description: "Installing and maintaining LED street lights to improve safety and energy efficiency citywide." },
  { icon: FaWater, title: "Stormwater", description: "Managing drainage systems and green infrastructure to prevent flooding and protect the harbor." },
];

const stats = [
  { value: "280mi", label: "Roads Maintained" },
  { value: "4,500", label: "Storm Drains" },
  { value: "12K+", label: "Street Lights" },
  { value: "7 days", label: "Weekly Operations" },
];

export default function PublicWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600"
          alt="Public Works"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/95 via-[#111]/55 to-transparent" />
        <div className="absolute inset-0 opacity-15 bg-[#ea580c]" style={{ mixBlendMode: "color" }} />
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#ea580c]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-6 rounded bg-[#ea580c] flex items-center justify-center">
              <FaWrench className="text-white text-xs" />
            </div>
            <span className="text-[#fb923c] text-sm font-bold uppercase tracking-widest">Infrastructure & Operations</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Public<br /><em className="text-[#fb923c]">Works</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            The backbone of Port Laken — keeping roads safe, water clean, and the city running around the clock.
          </p>
        </div>
      </section>

      {/* STATS — industrial gray */}
      <section className="bg-[#1c1917] py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#fb923c] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#1c1917]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#fb923c] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Maintain</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              Core <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#ea580c] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white/5 border border-white/10 hover:border-[#ea580c]/50 hover:bg-[#ea580c]/10 p-7 rounded-2xl transition-all duration-500">
                  <svc.icon className="text-[#fb923c] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg text-white mb-2">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO SPLIT */}
      <section className="py-20 bg-[#0c0a09]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?auto=format&fit=crop&q=80&w=900"
                alt="Infrastructure workers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#ea580c]/20 to-transparent" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="delay-100">
            <p className="text-[#fb923c] text-xs font-bold uppercase tracking-[0.25em] mb-4">Built to Last</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              The Crew Behind <em>Every Road</em>
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              Our Public Works crew works days, nights, and weekends to ensure that Port Laken&apos;s infrastructure never stops. From emergency water main breaks to routine pothole patching, we&apos;re there.
            </p>
            <p className="text-white/60 leading-relaxed">
              Long-term investments in green infrastructure and sustainable systems ensure the city is built to last for generations.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#ea580c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Report an <em>Issue</em>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Pothole? Broken streetlight? Report infrastructure issues and our team will respond promptly.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#ea580c] rounded-2xl font-bold hover:scale-105 transition-all">
              Submit a Report
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
