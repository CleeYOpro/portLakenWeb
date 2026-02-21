import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaBriefcase, FaGraduationCap, FaHeart, FaUsers, FaHandshake, FaHardHat, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaBriefcase, title: "Recruitment & Hiring", description: "Attracting and selecting top talent to serve the Port Laken community across all city departments." },
  { icon: FaGraduationCap, title: "Training & Development", description: "Professional growth programs, leadership development, and skills training for all city employees." },
  { icon: FaHeart, title: "Benefits Administration", description: "Health, dental, vision, and retirement benefits for Port Laken's dedicated municipal workforce." },
  { icon: FaUsers, title: "Employee Relations", description: "Fostering a positive, equitable workplace where every employee is heard, respected, and supported." },
  { icon: FaHandshake, title: "Labor Relations", description: "Negotiating and administering collective bargaining agreements with city employee organizations." },
  { icon: FaHardHat, title: "Workplace Safety", description: "Compliance, risk management, and safety programs that protect every member of our team." },
];

const stats = [
  { value: "650+", label: "City Employees" },
  { value: "12", label: "Departments Served" },
  { value: "96%", label: "Retention Rate" },
  { value: "40+", label: "Benefits Programs" },
];

export default function HumanResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
          alt="Human Resources"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e0a2e]/95 via-[#1e0a2e]/50 to-transparent" />
        <div className="absolute inset-0 opacity-15 bg-[#7c3aed]" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#7c3aed]/30 border border-[#a78bfa]/50">
            People & Culture
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Human<br /><em className="text-[#c4b5fd]">Resources</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Empowering Port Laken&apos;s workforce — recruiting great people, investing in their growth, and building a city team to be proud of.
          </p>
        </div>
      </section>

      {/* STATS — deep purple */}
      <section className="bg-[#2e1065] py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#c4b5fd] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — soft lavender background */}
      <section className="py-20 bg-[#faf5ff]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Programs</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1e0a2e] mb-2">
              HR <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#7c3aed] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white border border-purple-100 hover:bg-[#7c3aed] p-7 rounded-2xl transition-all duration-500 shadow-sm">
                  <svc.icon className="text-[#7c3aed] text-3xl mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <h3 className="font-bold text-lg text-[#1e0a2e] mb-2 group-hover:text-white transition-colors duration-500">{svc.title}</h3>
                  <p className="text-purple-900/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + TEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll className="delay-100">
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-[0.25em] mb-4">Our People</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1e0a2e] mb-6">
              A Team That <em>Serves Together</em>
            </h3>
            <p className="text-purple-900/60 leading-relaxed mb-4">
              Port Laken&apos;s greatest asset is its people. Our Human Resources team works every day to recruit exceptional talent, support employee wellbeing, and create a workplace culture built on respect and purpose.
            </p>
            <p className="text-purple-900/60 leading-relaxed">
              Whether you&apos;re exploring a career with the city or a current employee seeking support, we&apos;re here for you.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900"
                alt="City employees"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7c3aed]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our <em>Team</em>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Explore open positions, learn about city benefits, and start a meaningful career serving Port Laken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7c3aed] rounded-2xl font-bold hover:scale-105 transition-all">
                View Open Positions
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white rounded-2xl font-bold hover:bg-white/20 transition-all">
                Contact HR Office
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
