"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";

export default function FinancePage() {
  const [openService, setOpenService] = useState<number | null>(null);

  const functions = [
    "Budget development",
    "Financial reporting and audit management",
    "Financial planning support",
    "Investments and cash management",
    "General ledger accounting",
    "Payroll",
    "Accounts payable",
    "Accounts receivable",
    "Capital assets",
    "Inventory control",
  ];

  const resources = [
    {
      title: "Property Tax Information",
      icon: "house",
      content: (
        <div className="space-y-4">
          <p className="text-port-slate leading-relaxed">
            Property taxes in Port Laken are assessed by the County Assessor's Office and collected by the City Finance Department. Your annual property tax bill is calculated based on the assessed value of your property multiplied by the current levy rate.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "2026 Levy Rate", value: "$9.42 / $1,000" },
              { label: "Assessment Cycle", value: "Annual (Jan 1)" },
              { label: "Payment Due", value: "April 30 & Oct 31" },
            ].map((item) => (
              <div key={item.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-port-navy">{item.value}</div>
                <div className="text-xs text-port-slate/70 mt-1 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-port-slate/70">
            To appeal your assessed value, contact the County Board of Equalization within 60 days of your assessment notice. Senior citizens and disabled residents may qualify for exemptions — contact our office at <span className="font-semibold text-port-navy">(555) 400-3100</span>.
          </p>
        </div>
      ),
    },
    {
      title: "Real Estate Excise Taxes (REET)",
      icon: "real_estate_agent",
      content: (
        <div className="space-y-4">
          <p className="text-port-slate leading-relaxed">
            A Real Estate Excise Tax (REET) is due on all sales of real property within Port Laken city limits. The tax is typically paid by the seller at the time of closing and must be submitted to the City Finance Department before the deed can be recorded.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-port-navy text-white">
                  <th className="text-left px-4 py-2 rounded-tl-lg">Sale Price Range</th>
                  <th className="text-left px-4 py-2 rounded-tr-lg">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Up to $525,000", "1.10%"],
                  ["$525,001 – $1,525,000", "1.28%"],
                  ["$1,525,001 – $3,025,000", "2.75%"],
                  ["Over $3,025,000", "3.00%"],
                ].map(([range, rate], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 text-port-slate">{range}</td>
                    <td className="px-4 py-2 font-semibold text-port-navy">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-port-slate/70">
            REET affidavits must be completed and submitted within 30 days of the sale. Contact us at <span className="font-semibold text-port-navy">finance@portlaken.gov</span> for forms or questions.
          </p>
        </div>
      ),
    },
    {
      title: "Sales and Use Taxes",
      icon: "attach_money",
      content: (
        <div className="space-y-4">
          <p className="text-port-slate leading-relaxed">
            Businesses operating within Port Laken are required to collect and remit sales tax on all taxable retail sales. Use tax applies to goods purchased without sales tax that are used within the city.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "State Sales Tax", value: "6.50%" },
              { label: "City Local Tax", value: "1.00%" },
              { label: "County Tax", value: "0.15%" },
              { label: "Total Combined Rate", value: "7.65%" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-port-slate text-sm">{item.label}</span>
                <span className="font-bold text-port-navy">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-port-slate/70">
            Sales tax returns are due monthly by the 25th of the following month. Late filings are subject to a 5% penalty plus interest. Register your business with the Washington State DOR and notify our office to ensure proper local remittance.
          </p>
        </div>
      ),
    },
    {
      title: "Accounts Payable",
      icon: "person_2",
      content: (
        <div className="space-y-4">
          <p className="text-port-slate leading-relaxed">
            The Accounts Payable division processes all vendor invoices, purchase orders, and city disbursements. We ensure timely and accurate payment to all city vendors and contractors in compliance with city procurement policies.
          </p>
          <div className="bg-blue-50 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-port-navy">Submitting an Invoice</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-port-slate">
              <li>Include your vendor number and purchase order (PO) number on all invoices.</li>
              <li>Email invoices to <span className="font-semibold text-port-navy">ap@portlaken.gov</span> or mail to City Hall, Attn: Accounts Payable.</li>
              <li>Standard payment terms are Net 30 from receipt of a valid invoice.</li>
              <li>Direct deposit (ACH) is available — contact us to enroll.</li>
            </ol>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div><span className="text-port-slate/70">Phone: </span><span className="font-semibold text-port-navy">(555) 400-3110</span></div>
            <div><span className="text-port-slate/70">Email: </span><span className="font-semibold text-port-navy">ap@portlaken.gov</span></div>
            <div><span className="text-port-slate/70">Hours: </span><span className="font-semibold text-port-navy">Mon–Fri, 8am–5pm</span></div>
          </div>
        </div>
      ),
    },
    {
      title: "Fee Schedule",
      icon: "receipt_long",
      content: (
        <div className="space-y-4">
          <p className="text-port-slate leading-relaxed">
            The City of Port Laken charges fees for various permits, licenses, and services. The 2026 Fee Schedule was adopted by City Council on December 10, 2025 and is effective January 1, 2026.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-port-navy text-white">
                  <th className="text-left px-4 py-2 rounded-tl-lg">Service</th>
                  <th className="text-left px-4 py-2 rounded-tr-lg">2026 Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Business License (new)", "$125.00"],
                  ["Business License (renewal)", "$75.00"],
                  ["Building Permit (base)", "$150.00 + valuation fee"],
                  ["Zoning Variance Application", "$350.00"],
                  ["Public Records Request (copies)", "$0.15 / page"],
                  ["Returned Check Fee", "$35.00"],
                  ["Lien Certificate", "$50.00"],
                  ["Special Event Permit", "$200.00"],
                ].map(([service, fee], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 text-port-slate">{service}</td>
                    <td className="px-4 py-2 font-semibold text-port-navy">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-port-slate/70">Fees are subject to change. Contact the Finance Department for a complete schedule or fee waiver requests.</p>
        </div>
      ),
    },
    {
      title: "Budget & Taxes at a Glance",
      icon: "camera_enhance",
      content: (
        <div className="space-y-4">
          <p className="text-port-slate leading-relaxed">
            Port Laken operates on a biennial budget cycle. The 2025–2026 Adopted Budget totals <span className="font-bold text-port-navy">$84.2 million</span> in appropriations across all funds.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-port-navy text-sm uppercase tracking-wide">Revenue Sources</h4>
              {[
                ["Property Taxes", "34%"],
                ["Sales Taxes", "22%"],
                ["Grants & State Aid", "18%"],
                ["Fees & Charges", "14%"],
                ["Other", "12%"],
              ].map(([src, pct]) => (
                <div key={src} className="flex justify-between text-sm">
                  <span className="text-port-slate">{src}</span>
                  <span className="font-semibold text-port-navy">{pct}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-port-navy text-sm uppercase tracking-wide">Key Budget Milestones</h4>
              {[
                ["Budget Proposal Released", "Sept 1, 2025"],
                ["Public Hearing", "Oct 14, 2025"],
                ["Council Adoption", "Dec 10, 2025"],
                ["Fiscal Year Start", "Jan 1, 2026"],
                ["Mid-Year Review", "July 2026"],
              ].map(([event, date]) => (
                <div key={event} className="flex justify-between text-sm">
                  <span className="text-port-slate">{event}</span>
                  <span className="font-semibold text-port-navy">{date}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-port-slate/70">
            Full budget documents, audit reports, and CAFR (Comprehensive Annual Financial Report) are available at City Hall or by contacting the Finance Department.
          </p>
        </div>
      ),
    },
  ];

  const spending = [
    { category: "Public Safety (Police, Fire)", pct: 38, amount: "$31.9M", yoy: "+4.2%", color: "#1e3a8a" },
    { category: "Education", pct: 25, amount: "$21.1M", yoy: "+2.1%", color: "#2563eb" },
    { category: "Transportation", pct: 15, amount: "$12.6M", yoy: "-1.5%", color: "#3b82f6" },
    { category: "Administration", pct: 12, amount: "$10.1M", yoy: "+0.8%", color: "#60a5fa" },
    { category: "Parks & Recreation", pct: 10, amount: "$8.4M", yoy: "+5.0%", color: "#93c5fd" },
  ];
  return (
    <div className="min-h-screen bg-port-cream text-port-slate font-nunito selection:bg-port-navy/20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        <Link
          href="/departments" 
          className="inline-flex items-center gap-2 text-port-slate/70 hover:text-port-navy transition-colors mb-12 group text-sm font-semibold uppercase tracking-widest"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Departments
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

  {/* LEFT */}
  <div>
    <p className="text-sm uppercase tracking-widest text-port-slate mb-4">
      City of Port Laken
    </p>

    <h1 className="text-5xl lg:text-7xl font-bold text-port-navy mb-6">
      Finance Department
    </h1>

    <p className="text-lg text-port-slate max-w-xl mb-8">
      Managing the city’s financial operations with transparency, accountability, and efficiency.
    </p>

  </div>

  {/* RIGHT */}
  <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-lg">
    <p className="text-sm text-port-slate mb-2">Annual Budget</p>
    <p className="text-4xl font-bold text-port-navy">$124.6M</p>
    <p className="text-sm text-green-600 mt-2">+3.2% from last year</p>
  </div>

</div>
<section className="">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-xl font-semibold text-port-navy mb-6">
      Core Financial Services
    </h2>

    <div className="relative overflow-hidden">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-port-cream to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-port-cream to-transparent z-10" />

      {/* SCROLL TRACK */}
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...functions, ...functions].map((func, i) => (
          <div key={i} className="flex items-center gap-6 text-port-slate">
            
            <span className="text-base font-medium">{func}</span>

            {/* STAR SEPARATOR */}
            <span className="text-gray-300 text-lg">✦</span>

          </div>
        ))}
      </motion.div>
    </div>

  </div>
</section>
        {/* Financial Data Section */}
        <div className="my-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-port-navy mb-4">Financial Transparency</h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-3xl p-8 border border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-2xl font-bold font-display text-port-navy mb-8 border-b border-gray-100 pb-4">Where The Money Goes (Spending)</h3>
            <div className="space-y-6">
              {spending.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-semibold text-port-navy mb-2">
                    <span>{item.category}</span>
                    <div className="flex gap-4 items-center">
                      <span className="font-mono text-port-navy">{item.amount}</span>
                      <span>{item.pct}%</span>
                      <span className={`w-16 text-right ${item.yoy.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{item.yoy} YoY</span>
                    </div>
                  </div>
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stacked Dropdown for Financial Services (Resources) */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-port-navy mb-4">Financial Services</h2>
            <p className="text-lg text-port-slate">Access directories, schedules, and reporting details.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
            {resources.map((res, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenService(openService === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-port-navy/60 text-2xl">{res.icon}</span>
                    <span className="font-bold text-port-navy text-lg">{res.title}</span>
                  </div>
                  <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${openService === i ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openService === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 pl-[4.25rem]">
                        {res.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>


        {/* Contact (Moved to the bottom) */}
        <div className="bg-port-navy text-white rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-display font-bold mb-4">Questions regarding invoices or taxes?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Our finance staff is readily available to assist community members and businesses with city billing and vendor relations.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-port-navy font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors transform hover:-translate-y-1 shadow-md"
          >
            Contact Port Laken
          </Link>
        </div>

      </div>

      {/* Required custom CSS for marquee mask */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-image-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
}

