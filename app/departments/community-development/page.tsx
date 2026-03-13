import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaBuilding, FaHardHat, FaMap, FaHome, FaLeaf, FaCity, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaBuilding, title: "Zoning & Land Use", description: "Managing zoning applications, variances, and land use decisions to shape how Port Laken grows." },
  { icon: FaHardHat, title: "Building Permits", description: "Streamlined permitting for residential and commercial construction projects across the city." },
  { icon: FaMap, title: "Urban Planning", description: "Long-range planning for neighborhoods, transportation corridors, and community development." },
  { icon: FaHome, title: "Housing Programs", description: "Affordable housing initiatives and homeowner assistance programs for Port Laken residents." },
  { icon: FaLeaf, title: "Environmental Review", description: "Ensuring all development projects meet environmental standards and sustainability goals." },
  { icon: FaCity, title: "Economic Development", description: "Attracting investment and supporting local businesses to drive sustainable economic growth." },
];

const stats = [
  { value: "1,400+", label: "Permits Issued" },
  { value: "48hr", label: "Permit Review" },
  { value: "24", label: "Active Projects" },
  { value: "15yr", label: "General Plan Horizon" },
];

export default function CommunityDevelopmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
          alt="Community Development"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0d00]/90 via-[#1c0d00]/50 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[#d97706]" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d97706] to-[#f59e0b]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#d97706]/40 border border-[#d97706]/60">
            Planning & Growth
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Community<br /><em className="text-[#fbbf24]">Development</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Shaping the future of Port Laken through thoughtful planning, smart zoning, and vibrant economic development.
          </p>
        </div>
      </section>

      {/* STATS — warm amber strip */}
      <section className="bg-[#92400e] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#fbbf24] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#fef3c7]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#d97706] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1c0d00] mb-2">
              Our <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#d97706] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white border border-amber-200 hover:bg-[#d97706] p-7 rounded-2xl transition-all duration-500 shadow-sm">
                  <svc.icon className="text-[#d97706] text-3xl mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <h3 className="font-bold text-lg text-[#1c0d00] mb-2 group-hover:text-white transition-colors duration-500">{svc.title}</h3>
                  <p className="text-amber-900/70 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-500">{svc.description}</p>
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
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=900"
                alt="Urban planning"
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="delay-100">
            <p className="text-[#d97706] text-xs font-bold uppercase tracking-[0.25em] mb-4">Building Tomorrow</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1c0d00] mb-6">
              A City That <em>Grows With Purpose</em>
            </h3>
            <p className="text-amber-900/70 leading-relaxed mb-4">
              Every permit issued, every zoning decision made, and every neighborhood plan adopted is a step toward the Port Laken we want to be. Our team balances growth with quality of life.
            </p>
            <p className="text-amber-900/70 leading-relaxed">
              We engage residents at every stage — from early planning to final approval — to ensure development reflects the community&apos;s vision.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#d97706]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your <em>Project</em>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Apply for permits, check zoning requirements, or schedule a pre-application meeting with our planning team.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#d97706] rounded-2xl font-bold hover:scale-105 transition-all">
              Contact Planning Division
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
