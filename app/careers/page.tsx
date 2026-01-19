"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaChevronDown, FaChevronUp, FaHeartbeat, FaDollarSign, FaBalanceScale, FaGlobe, FaChartLine, FaUsers } from "react-icons/fa";

const benefits = [
  {
    title: "Community Impact",
    description: "Shape the future of our city through public service and community-driven projects.",
    icon: FaGlobe
  },
  {
    title: "Career Growth",
    description: "Access professional development, training, and opportunities for advancement.",
    icon: FaChartLine
  },
  {
    title: "Diverse & Inclusive",
    description: "We are committed to building a workforce that reflects the diversity of our city.",
    icon: FaUsers
  },
];

const employeeBenefits = [
  {
    icon: FaHeartbeat,
    title: "Health & Wellness",
    description: "Medical, dental, and vision plans, plus wellness programs and gym memberships."
  },
  {
    icon: FaDollarSign,
    title: "Financial Security",
    description: "Competitive salaries, pension plans, and retirement savings matching contributions."
  },
  {
    icon: FaBalanceScale,
    title: "Work-Life Balance",
    description: "Generous vacation time, paid holidays, and flexible work arrangements."
  },
];

const hiringSteps = [
  {
    step: 1,
    title: "Apply Online",
    description: "Submit your application through our online portal. Make sure to highlight your skills and experience relevant to the role."
  },
  {
    step: 2,
    title: "Application Review",
    description: "Our hiring team reviews applications to identify candidates whose qualifications best match the position requirements."
  },
  {
    step: 3,
    title: "Interviews",
    description: "Selected candidates are invited for one or more interviews to discuss their experience and assess their fit for the role."
  },
  {
    step: 4,
    title: "Offer & Onboarding",
    description: "Successful candidates will receive a job offer. Once accepted, we'll guide you through the onboarding process."
  },
];

const faqs = [
  {
    question: "Do I have to be a resident of Port Laken to apply?",
    answer: "No, you do not need to be a current resident to apply for most positions. However, some roles may have residency requirements that are noted in the job posting. We encourage qualified candidates from all locations to apply."
  },
  {
    question: "How long does the hiring process take?",
    answer: "The timeline varies depending on the position and number of applicants. Generally, you can expect the process to take 4-8 weeks from application to offer. We strive to keep candidates informed throughout the process."
  },
  {
    question: "Can I apply for multiple jobs at once?",
    answer: "Yes, you are welcome to apply for multiple positions that match your qualifications. Each application is reviewed independently, so make sure to tailor your materials to each specific role."
  },
];

export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="City skyline"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-port-navy/80 to-port-navy/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Build Your <span className="italic">Future.</span>
            <br />
            Serve Your <span className="italic">City.</span>
          </h1>
        </div>
      </section>

      {/* Work That Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
                Work That Matters
              </h2>
              <p className="text-port-slate max-w-2xl mx-auto">
                Join a team dedicated to improving the lives of our community. Your work will have a direct and meaningful impact on the people of Port Laken.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={benefit.title} className={`delay-${index * 100}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-port-frost rounded-full flex items-center justify-center mx-auto mb-5">
                    <benefit.icon className="text-port-sky text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg text-port-navy mb-3">{benefit.title}</h3>
                  <p className="text-port-slate text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* We Take Care of Our People */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
                  We Take Care of Our People
                </h2>
                <p className="text-port-slate mb-8 leading-relaxed">
                  We offer a comprehensive employee benefits package designed to support the health, well-being, and financial security of our employees and their families.
                </p>
                <Link
                  href="/careers/benefits"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
                >
                  Explore Benefits
                  <span className="material-symbols-outlined text-sm"></span>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-100">
              <div className="space-y-6">
                {employeeBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <benefit.icon className="text-port-sky text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-port-navy mb-1">{benefit.title}</h4>
                      <p className="text-port-slate text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-12 text-center">
              Our Hiring Process
            </h2>
          </RevealOnScroll>

          <div className="space-y-8">
            {hiringSteps.map((step, index) => (
              <RevealOnScroll key={step.step} className={`delay-${index * 100}`}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-port-navy text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="pb-8 border-b border-gray-100 flex-1">
                    <h3 className="font-bold text-lg text-port-navy mb-2">{step.title}</h3>
                    <p className="text-port-slate text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 bg-port-frost">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-10 text-center">
              Common Questions
            </h2>
          </RevealOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={index} className={`delay-${index * 100}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-port-navy">{faq.question}</span>
                    {openFaq === index ? (
                      <FaChevronUp className="text-port-slate flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-port-slate flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-port-slate text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* We're Here to Help */}
      <section className="py-20 bg-port-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Have more questions? Our Human Resources team is ready to assist you. Reach out with any questions about your application or inquiries about working for the City of Port Laken.
            </p>
            <Link
              href="/careers/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-port-navy rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact HR
              <span className="material-symbols-outlined text-sm">mail</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
