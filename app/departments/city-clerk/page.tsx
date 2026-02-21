import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaVoteYea, FaFileAlt, FaGavel, FaIdBadge, FaBullhorn, FaFolderOpen, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaVoteYea, title: "Elections & Voting", description: "Administering fair and transparent municipal elections for all eligible Port Laken residents." },
  { icon: FaFileAlt, title: "Public Records", description: "Maintaining and providing access to official city documents, ordinances, and meeting minutes." },
  { icon: FaGavel, title: "Legislative Support", description: "Supporting City Council proceedings with agendas, minutes, and legislative tracking." },
  { icon: FaIdBadge, title: "Business Licensing", description: "Processing business licenses, permits, and registrations for local enterprises." },
  { icon: FaBullhorn, title: "Public Notices", description: "Publishing official city announcements, hearings, and legal notifications." },
  { icon: FaFolderOpen, title: "Records Management", description: "Archiving and preserving historical city records for future generations." },
];

const stats = [
  { value: "50K+", label: "Records Managed" },
  { value: "12K", label: "Registered Voters" },
  { value: "800+", label: "Business Licenses" },
  { value: "24hr", label: "Online Access" },
];

export default function CityClerkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1600"
          alt="City Clerk"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b45309] to-[#f59e0b]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#fbbf24] mb-5 border border-[#b45309]/60 bg-[#b45309]/20">
            Official Records & Elections
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            City<br /><em className="text-[#fbbf24]">Clerk</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            The official keeper of Port Laken&apos;s public record — ensuring transparency, accountability, and access for all residents.
          </p>
        </div>
      </section>

      {/* STATS — rich gold-brown */}
      <section className="bg-[#78350f] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#fbbf24] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — warm cream background */}
      <section className="py-20 bg-[#fefce8]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#b45309] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111827] mb-2">
              Clerk <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#b45309] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white border border-amber-100 hover:bg-[#b45309] p-7 rounded-2xl transition-all duration-500 shadow-sm">
                  <svc.icon className="text-[#b45309] text-3xl mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <h3 className="font-bold text-lg text-[#111827] mb-2 group-hover:text-white transition-colors duration-500">{svc.title}</h3>
                  <p className="text-amber-900/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + TEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=900"
                alt="Public records and democracy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#b45309]/20 to-transparent" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="delay-100">
            <p className="text-[#b45309] text-xs font-bold uppercase tracking-[0.25em] mb-4">Democracy in Action</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Keeping Government <em>Open & Accessible</em>
            </h3>
            <p className="text-amber-900/70 leading-relaxed mb-4">
              The City Clerk&apos;s Office is the foundation of open government in Port Laken — maintaining records, administering elections, and ensuring residents can access the information they need.
            </p>
            <p className="text-amber-900/70 leading-relaxed">
              From business licensing to ballot counting, we work with precision and integrity every day.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#b45309]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Need a Public <em>Record?</em>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Submit a public records request online or visit our office during business hours. Most requests fulfilled within 5 business days.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#b45309] rounded-2xl font-bold hover:scale-105 transition-all">
              Contact the Clerk&apos;s Office
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
