import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaFireExtinguisher, FaAmbulance, FaSearch, FaShieldAlt, FaGraduationCap, FaRadiation, FaArrowLeft } from "react-icons/fa";

const ACCENT = "#dc2626";

const services = [
  { icon: FaFireExtinguisher, title: "Fire Suppression", description: "Rapid response to structural fires, wildfires, and hazardous material incidents across Port Laken." },
  { icon: FaAmbulance, title: "Emergency Medical Services", description: "Paramedic and EMT teams delivering critical pre-hospital care 24 hours a day, 7 days a week." },
  { icon: FaSearch, title: "Search & Rescue", description: "Specialized teams trained for water rescue, confined space, and wilderness operations." },
  { icon: FaShieldAlt, title: "Fire Prevention", description: "Inspections, code enforcement, and public education to prevent fires before they start." },
  { icon: FaGraduationCap, title: "Community Education", description: "Fire safety programs for schools, businesses, and community organizations citywide." },
  { icon: FaRadiation, title: "Hazmat Response", description: "Certified hazardous materials team handling chemical spills and environmental emergencies." },
];

const stats = [
  { value: "3,200+", label: "Annual Responses" },
  { value: "<4 min", label: "Avg. Response Time" },
  { value: "85", label: "Firefighters" },
  { value: "3", label: "Fire Stations" },
];

export default function FireDepartmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1600"
          alt="Fire Department"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient + red tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 opacity-25 bg-[#dc2626]" style={{ mixBlendMode: "multiply" }} />

        {/* Red top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#dc2626]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 border border-[#dc2626]" style={{ backgroundColor: "rgba(220,38,38,0.25)" }}>
            <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
            Emergency Services
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Fire<br /><em className="text-[#dc2626]">Department</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Protecting lives, property, and the environment through rapid emergency response, prevention, and community service.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#dc2626] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              Our <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#dc2626] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white/5 border border-white/10 hover:border-[#dc2626]/50 hover:bg-[#dc2626]/10 p-7 rounded-2xl transition-all duration-500">
                  <svc.icon className="text-[#dc2626] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg text-white mb-2">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + MISSION */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582655432879-67d4fedc6f57?auto=format&fit=crop&q=80&w=900"
                alt="Firefighters in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="delay-100">
            <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Mission</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Courage, Service,<br /><em>Community</em>
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              Every call we answer is a promise kept — a promise to the residents of Port Laken that trained, dedicated professionals stand ready around the clock.
            </p>
            <p className="text-white/60 leading-relaxed">
              From kitchen fires to major emergencies, our crews respond with speed, skill, and compassion.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#dc2626]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              In an Emergency, <em>Call 911</em>
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              For non-emergency inquiries, contact our administrative office during business hours.
            </p>
            <div className="text-7xl font-bold text-white mb-10 tracking-tight">911</div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#dc2626] rounded-2xl font-bold hover:scale-105 transition-all text-sm uppercase tracking-wider">
              Non-Emergency Contact
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
