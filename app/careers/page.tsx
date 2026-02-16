"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaChevronDown,
  FaHeartbeat,
  FaDollarSign,
  FaBalanceScale,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
  FaPenFancy,
  FaClipboardCheck,
  FaUserTie,
  FaGift,
} from "react-icons/fa";

const benefits = [
  {
    title: "Community Impact",
    description:
      "Shape the future of our city through public service and community-driven projects.",
    icon: FaGlobe,
  },
  {
    title: "Career Growth",
    description:
      "Access professional development, training, and opportunities for advancement.",
    icon: FaChartLine,
  },
  {
    title: "Diverse & Inclusive",
    description:
      "We are committed to building a workforce that reflects the diversity of our city.",
    icon: FaUsers,
  },
];

const employeeBenefits = [
  {
    icon: FaHeartbeat,
    title: "Health & Wellness",
    description:
      "Medical, dental, and vision plans, plus wellness programs and gym memberships.",
    stat: "100%",
    statLabel: "Coverage",
  },
  {
    icon: FaDollarSign,
    title: "Financial Security",
    description:
      "Competitive salaries, pension plans, and retirement savings matching contributions.",
    stat: "6%",
    statLabel: "401k Match",
  },
  {
    icon: FaBalanceScale,
    title: "Work-Life Balance",
    description:
      "Generous vacation time, paid holidays, and flexible work arrangements.",
    stat: "25",
    statLabel: "PTO Days",
  },
];

const hiringSteps = [
  {
    step: 1,
    title: "Apply Online",
    description:
      "Submit your application through our online portal. Highlight your skills and experience relevant to the role.",
    icon: FaPenFancy,
  },
  {
    step: 2,
    title: "Application Review",
    description:
      "Our hiring team reviews applications to identify candidates whose qualifications best match the position.",
    icon: FaClipboardCheck,
  },
  {
    step: 3,
    title: "Interviews",
    description:
      "Selected candidates are invited for interviews to discuss experience and assess fit for the role.",
    icon: FaUserTie,
  },
  {
    step: 4,
    title: "Offer & Onboarding",
    description:
      "Successful candidates receive an offer. Once accepted, we guide you through the onboarding process.",
    icon: FaGift,
  },
];

const faqs = [
  {
    question: "Do I have to be a resident of Port Laken to apply?",
    answer:
      "No, you do not need to be a current resident to apply for most positions. However, some roles may have residency requirements that are noted in the job posting.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "The timeline varies depending on the position and number of applicants. Generally, you can expect the process to take 4-8 weeks from application to offer.",
  },
  {
    question: "Can I apply for multiple jobs at once?",
    answer:
      "Yes, you are welcome to apply for multiple positions that match your qualifications. Each application is reviewed independently.",
  },
];

const openPositions = [
  {
    title: "Civil Engineer",
    dept: "Public Works",
    type: "Full-time",
    posted: "Feb 10, 2026",
  },
  {
    title: "Recreation Program Coordinator",
    dept: "Recreation & Parks",
    type: "Full-time",
    posted: "Feb 8, 2026",
  },
  {
    title: "IT Support Specialist",
    dept: "City Clerk",
    type: "Full-time",
    posted: "Feb 5, 2026",
  },
  {
    title: "Firefighter/Paramedic",
    dept: "Fire Department",
    type: "Full-time",
    posted: "Feb 1, 2026",
  },
];

export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-advance hiring steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % hiringSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero - Immersive dark section with animated gradients */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-port-navy">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-[3000ms]"
          style={{
            background:
              "radial-gradient(circle, #6b9bc3 0%, transparent 70%)",
            left: `${mousePos.x * 0.03}px`,
            top: `${mousePos.y * 0.03}px`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl transition-transform duration-[3000ms]"
          style={{
            background:
              "radial-gradient(circle, #a8c5db 0%, transparent 70%)",
            right: `${mousePos.x * 0.02}px`,
            bottom: `${mousePos.y * 0.02}px`,
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-port-sky/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i * 37) % 60}%`,
                animation: `float ${6 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10 animate-fade-in-up">
            <FaBriefcase className="text-port-sky text-sm" />
            <span className="text-white/80 text-sm font-medium">
              {openPositions.length} Open Positions
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 animate-fade-in-up">
            Build Your{" "}
            <span className="italic text-port-sky">Future.</span>
            <br />
            Serve Your{" "}
            <span className="italic text-port-ice">City.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
            Join a team dedicated to improving the lives of our community.
            Your work will have a direct and meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link
              href="/careers/positions"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-port-navy rounded-2xl font-bold text-lg hover:scale-105 transition-all hover:shadow-xl hover:shadow-white/10"
            >
              View Open Positions
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/careers/benefits"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Explore Benefits
            </Link>
          </div>
        </div>

      </section>

      {/* Open Positions Ticker */}
      <section className="py-6 bg-port-frost border-b border-port-mist overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            <span className="text-port-navy font-bold text-sm whitespace-nowrap flex-shrink-0">
              NOW HIRING
            </span>
            {openPositions.map((pos, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-port-mist flex-shrink-0 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div>
                  <div className="font-bold text-port-navy text-sm group-hover:text-port-sky transition-colors">
                    {pos.title}
                  </div>
                  <div className="text-port-slate text-xs">
                    {pos.dept} &middot; {pos.type}
                  </div>
                </div>
                <FaArrowRight className="text-port-slate text-xs group-hover:text-port-sky transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work That Matters - Reimagined */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-port-frost rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="text-port-sky font-medium text-sm tracking-widest uppercase mb-4 block">
                Why Port Laken
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-6">
                Work That <span className="italic">Matters</span>
              </h2>
              <p className="text-port-slate max-w-xl mx-auto text-lg">
                Your work will have a direct and meaningful impact on the
                people of Port Laken.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <RevealOnScroll
                key={benefit.title}
                className={`delay-${index * 100}`}
              >
                <div className="group relative bg-port-frost p-8 rounded-3xl hover:bg-port-navy transition-all duration-500 cursor-default overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-port-sky/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative">
                    <div className="w-14 h-14 bg-white group-hover:bg-white/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm group-hover:shadow-none">
                      <benefit.icon className="text-port-sky text-xl group-hover:text-port-ice transition-colors duration-500" />
                    </div>
                    <h3 className="font-bold text-xl text-port-navy group-hover:text-white mb-3 transition-colors duration-500">
                      {benefit.title}
                    </h3>
                    <p className="text-port-slate group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Bold stat cards */}
      <section className="py-24 bg-port-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-port-sky font-medium text-sm tracking-widest uppercase mb-4 block">
                  Benefits
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  We Take Care of{" "}
                  <span className="italic text-port-ice">Our People</span>
                </h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  A comprehensive employee benefits package designed to
                  support you and your family.
                </p>
                <Link
                  href="/careers/benefits"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-port-navy rounded-xl font-medium hover:bg-port-frost transition-colors"
                >
                  Full Benefits Guide
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-6">
                {employeeBenefits.map((benefit, index) => (
                  <RevealOnScroll
                    key={index}
                    className={`delay-${index * 100}`}
                  >
                    <div className="group flex gap-5 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                      <div className="w-14 h-14 bg-port-sky/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="text-port-sky text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-white">
                            {benefit.title}
                          </h4>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-port-sky">
                              {benefit.stat}
                            </span>
                            <span className="text-white/40 text-xs block">
                              {benefit.statLabel}
                            </span>
                          </div>
                        </div>
                        <p className="text-white/50 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Hiring Process - Interactive timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-port-sky font-medium text-sm tracking-widest uppercase mb-4 block">
                How It Works
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy">
                Our Hiring <span className="italic">Process</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="delay-100">
            <div className="grid md:grid-cols-4 gap-6">
              {hiringSteps.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`relative p-6 rounded-2xl text-left transition-all duration-500 ${
                    activeStep === index
                      ? "bg-port-navy text-white shadow-xl shadow-port-navy/20 scale-105"
                      : "bg-port-frost text-port-navy hover:bg-port-mist"
                  }`}
                >
                  {/* Step connector line */}
                  {index < hiringSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-port-mist z-10" />
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      activeStep === index
                        ? "bg-white/10"
                        : "bg-white shadow-sm"
                    }`}
                  >
                    <step.icon
                      className={`text-xl ${
                        activeStep === index ? "text-port-ice" : "text-port-sky"
                      }`}
                    />
                  </div>

                  <div
                    className={`text-xs font-bold mb-2 ${
                      activeStep === index ? "text-port-sky" : "text-port-sky"
                    }`}
                  >
                    STEP {step.step}
                  </div>

                  <h3
                    className={`font-bold text-lg mb-2 ${
                      activeStep === index ? "text-white" : "text-port-navy"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      activeStep === index ? "text-white/70" : "text-port-slate"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Progress bar at bottom */}
                  {activeStep === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-2xl overflow-hidden">
                      <div className="h-full bg-port-sky rounded-full animate-progress" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-port-frost">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="text-port-sky font-medium text-sm tracking-widest uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy">
                Common <span className="italic">Questions</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealOnScroll
                key={index}
                className={`delay-${index * 100}`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-port-mist">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-port-cream transition-colors"
                  >
                    <span className="font-bold text-port-navy">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openFaq === index
                          ? "bg-port-navy text-white rotate-180"
                          : "bg-port-frost text-port-slate"
                      }`}
                    >
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-port-slate text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-port-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-port-sky/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-port-sky/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              We&apos;re Here to{" "}
              <span className="italic text-port-ice">Help</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Have questions? Our Human Resources team is ready to assist
              you with applications and inquiries about working for Port
              Laken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-port-navy rounded-2xl font-bold hover:scale-105 transition-all hover:shadow-xl hover:shadow-white/10"
              >
                Contact HR
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/careers/positions"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Browse All Positions
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.5);
          }
        }
        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 4s linear;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
