import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaLandmark, FaReceipt, FaChartBar, FaMoneyCheckAlt, FaPiggyBank, FaFileInvoiceDollar, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaLandmark, title: "Budget & Appropriations", description: "Developing and managing the city's annual operating and capital improvement budgets." },
  { icon: FaReceipt, title: "Revenue Collection", description: "Processing taxes, fees, and assessments that fund essential city services and infrastructure." },
  { icon: FaChartBar, title: "Financial Reporting", description: "Transparent, accurate financial statements and audits that keep Port Laken accountable to residents." },
  { icon: FaMoneyCheckAlt, title: "Accounts Payable", description: "Processing vendor payments and managing city obligations with accuracy and efficiency." },
  { icon: FaPiggyBank, title: "Treasury & Investments", description: "Investing city funds responsibly to maximize returns while maintaining safety and liquidity." },
  { icon: FaFileInvoiceDollar, title: "Grants Management", description: "Securing and administering state and federal grants to fund projects across all city departments." },
];

const stats = [
  { value: "$82M", label: "Annual Budget" },
  { value: "AAA", label: "Credit Rating" },
  { value: "99.8%", label: "Collection Rate" },
  { value: "30+", label: "Active Grants" },
];

export default function FinancePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600"
          alt="Finance Department"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/95 via-[#0d1117]/55 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[#0f766e]" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#0f766e]/40 border border-[#14b8a6]/50">
            Fiscal Stewardship
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 leading-none">
            Finance<br /><em className="text-[#2dd4bf]">Department</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Managing Port Laken&apos;s financial health with transparency, discipline, and a commitment to responsible stewardship.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#042f2e] py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#2dd4bf] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#f0fdfa]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#0f766e] text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#042f2e] mb-2">
              Financial <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#0f766e] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white border border-teal-100 hover:bg-[#0f766e] p-7 rounded-2xl transition-all duration-500 shadow-sm">
                  <svc.icon className="text-[#0f766e] text-3xl mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <h3 className="font-bold text-lg text-[#042f2e] mb-2 group-hover:text-white transition-colors duration-500">{svc.title}</h3>
                  <p className="text-teal-900/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=900"
                alt="Financial management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f766e]/20 to-transparent" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="delay-100">
            <p className="text-[#0f766e] text-xs font-bold uppercase tracking-[0.25em] mb-4">Open Books</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#042f2e] mb-6">
              Accountability You Can <em>Count On</em>
            </h3>
            <p className="text-teal-900/60 leading-relaxed mb-4">
              Port Laken Finance maintains the city&apos;s AAA credit rating through disciplined budgeting, proactive planning, and transparent reporting to residents and elected officials alike.
            </p>
            <p className="text-teal-900/60 leading-relaxed">
              All financial reports, audits, and budget documents are publicly available — because an informed community is a stronger community.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f766e]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Pay Bills &amp; View <em>Reports</em>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Pay utility bills, access financial documents, or contact our team for budget and tax inquiries.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0f766e] rounded-2xl font-bold hover:scale-105 transition-all">
              Contact Finance Office
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
