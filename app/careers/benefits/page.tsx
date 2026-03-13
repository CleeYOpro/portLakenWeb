"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaHeartbeat,
  FaTooth,
  FaEye,
  FaDumbbell,
  FaDollarSign,
  FaPiggyBank,
  FaUmbrella,
  FaGraduationCap,
  FaCalendarAlt,
  FaBaby,
  FaHome,
  FaCar,
  FaArrowLeft
} from "react-icons/fa";

const healthBenefits = [
  {
    icon: FaHeartbeat,
    title: "Medical Insurance",
    description: "Comprehensive medical coverage with multiple plan options. City covers 85% of premium costs for employees and 70% for dependents."
  },
  {
    icon: FaTooth,
    title: "Dental Coverage",
    description: "Full dental insurance including preventive care, basic procedures, and orthodontic coverage for dependents."
  },
  {
    icon: FaEye,
    title: "Vision Care",
    description: "Annual eye exams, frames, and lenses covered. Discounts on LASIK and other corrective procedures."
  },
  {
    icon: FaDumbbell,
    title: "Wellness Programs",
    description: "Gym membership reimbursement up to $50/month, wellness challenges, and mental health resources."
  },
];

const financialBenefits = [
  {
    icon: FaDollarSign,
    title: "Competitive Salaries",
    description: "Market-competitive pay with annual cost-of-living adjustments and merit-based increases."
  },
  {
    icon: FaPiggyBank,
    title: "Pension Plan",
    description: "Defined benefit pension plan. City contributes 12% of salary. Vested after 5 years of service."
  },
  {
    icon: FaUmbrella,
    title: "Life Insurance",
    description: "Basic life insurance at 2x annual salary at no cost. Optional supplemental coverage available."
  },
  {
    icon: FaGraduationCap,
    title: "Tuition Assistance",
    description: "Up to $5,250 per year for job-related courses and degree programs at accredited institutions."
  },
];

const workLifeBenefits = [
  {
    icon: FaCalendarAlt,
    title: "Paid Time Off",
    description: "Starting at 15 vacation days, 12 sick days, and 11 paid holidays per year. Increases with tenure."
  },
  {
    icon: FaBaby,
    title: "Parental Leave",
    description: "12 weeks paid parental leave for birth or adoption. Additional unpaid leave available under FMLA."
  },
  {
    icon: FaHome,
    title: "Flexible Work",
    description: "Hybrid work options for eligible positions. Flexible scheduling to support work-life balance."
  },
  {
    icon: FaCar,
    title: "Commuter Benefits",
    description: "Pre-tax transit and parking benefits. Free employee parking at city facilities."
  },
];

export default function BenefitsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-port-mist to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-port-slate hover:text-port-navy transition-colors mb-6"
          >
            <FaArrowLeft className="text-sm" />
            Back to Careers
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
            Employee Benefits
          </h1>
          <p className="text-port-slate text-lg max-w-2xl">
            We believe in taking care of our team. Explore the comprehensive benefits package available to City of Port Laken employees.
          </p>
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-10">
              <span className="text-port-sky font-semibold text-sm uppercase tracking-wider">Health & Wellness</span>
              <h2 className="font-display text-3xl font-bold text-port-navy mt-2">
                Your Health Matters
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {healthBenefits.map((benefit, index) => (
              <RevealOnScroll key={benefit.title} className={`delay-${index * 100}`}>
                <div className="bg-port-frost p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <benefit.icon className="text-port-sky text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-port-navy mb-2">{benefit.title}</h3>
                      <p className="text-port-slate text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Security */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-10">
              <span className="text-port-sky font-semibold text-sm uppercase tracking-wider">Financial Security</span>
              <h2 className="font-display text-3xl font-bold text-port-navy mt-2">
                Plan for Your Future
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {financialBenefits.map((benefit, index) => (
              <RevealOnScroll key={benefit.title} className={`delay-${index * 100}`}>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-port-frost rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-port-sky text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-port-navy mb-2">{benefit.title}</h3>
                      <p className="text-port-slate text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-10">
              <span className="text-port-sky font-semibold text-sm uppercase tracking-wider">Work-Life Balance</span>
              <h2 className="font-display text-3xl font-bold text-port-navy mt-2">
                Life Beyond Work
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {workLifeBenefits.map((benefit, index) => (
              <RevealOnScroll key={benefit.title} className={`delay-${index * 100}`}>
                <div className="bg-port-frost p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <benefit.icon className="text-port-sky text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-port-navy mb-2">{benefit.title}</h3>
                      <p className="text-port-slate text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
