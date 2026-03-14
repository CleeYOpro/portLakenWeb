import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaShieldAlt, FaSearch, FaCar, FaHandshake, FaGraduationCap, FaHeadset, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaShieldAlt, title: "Patrol Services", description: "24/7 patrol officers maintaining a visible, responsive presence in every Port Laken neighborhood." },
  { icon: FaSearch, title: "Criminal Investigations", description: "Dedicated detectives handling property crimes, violent offenses, and specialized investigations." },
  { icon: FaCar, title: "Traffic Enforcement", description: "Keeping streets safe through traffic management, DUI enforcement, and accident investigation." },
  { icon: FaHandshake, title: "Community Policing", description: "Building trust through neighborhood liaisons, youth outreach, and resident partnership programs." },
  { icon: FaGraduationCap, title: "Youth Programs", description: "Mentorship and after-school initiatives connecting officers with the next generation." },
  { icon: FaHeadset, title: "Dispatch & Communications", description: "Around-the-clock dispatch center coordinating emergency response across the city." },
];

const stats = [
  { value: "120+", label: "Officers" },
  { value: "< 6 min", label: "Response Time" },
  { value: "92%", label: "Case Resolution" },
  { value: "1", label: "Precinct" },
];

export default function PoliceDepartmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1600"
          alt="Police Department"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1d4ed8]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center">
              <FaShieldAlt className="text-white text-lg" />
            </div>
            <span className="text-[#93c5fd] text-sm font-bold uppercase tracking-widest">Port Laken Police</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Police<br /><em className="text-[#93c5fd]">Department</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Dedicated to keeping Port Laken safe through professional law enforcement and meaningful community partnerships.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0f172a] py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#93c5fd] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#93c5fd] text-xs font-bold uppercase tracking-[0.25em] mb-3">How We Serve</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              Department <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#1d4ed8] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white/5 border border-white/10 hover:border-[#1d4ed8]/60 hover:bg-[#1d4ed8]/10 p-7 rounded-2xl transition-all duration-500">
                  <svc.icon className="text-[#93c5fd] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg text-white mb-2">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + MISSION */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll className="delay-100">
            <p className="text-[#93c5fd] text-xs font-bold uppercase tracking-[0.25em] mb-4">Community First</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Protecting &amp; <em>Serving Together</em>
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              Our officers are more than law enforcement — they are neighbors. Through community policing programs, Port Laken PD builds lasting relationships that make our streets safer for everyone.
            </p>
            <p className="text-white/60 leading-relaxed">
              From school resource officers to neighborhood watches, we work alongside residents every day.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=900"
                alt="Community policing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8]/20 to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d4ed8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Need Assistance?
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              For emergencies call 911. For non-emergency assistance, reach our station directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-5 text-center">
                <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Emergency</div>
                <div className="text-4xl font-bold text-white">911</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-5 text-center">
                <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Non-Emergency</div>
                <div className="text-2xl font-bold text-white">(360) 597-3322</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
