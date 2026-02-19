"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaGlobe,
  FaChartLine,
  FaHeartbeat,
  FaArrowRight,
  FaBriefcase,
  FaCheck,
} from "react-icons/fa";

const highlights = [
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
    title: "Stability & Benefits",
    description:
      "Enjoy comprehensive health coverage, pension plans, and job stability.",
    icon: FaHeartbeat,
  },
];

const benefitPoints = [
  "Comprehensive Health, Dental & Vision",
  "Generous Retirement & Pension Plans",
  "Paid Time Off & Holidays",
  "Long-term Job Stability",
];

const indeedLink = "https://www.indeed.com/jobs?q=Port+Laken+City";

export default function CareersPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative bg-white pt-32 pb-24 overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute right-[-200px] top-24 w-[600px] h-[600px] bg-port-sky/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 items-center">

          {/* TEXT BLOCK – now on top (stacked) */}
          <div 
            className="rounded-3xl w-full h-[200px] overflow-hidden shadow-lg border border-port-mist/40 p-8 
                 flex flex-col justify-center animate-fade-in-up"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy leading-tight mb-6">
              Build Your Future.
              <span className="block italic text-port-sky">
                Serve Your City.
              </span>
            </h1>

            <a
              href={indeedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-6 py-3
                   bg-gray-900 text-white rounded-xl
                   hover:bg-black transition-all duration-300
                   animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <FaArrowRight className="text-white text-md -rotate-45 group-hover:rotate-0 transition-all duration-300" />
              <span className="text-sm uppercase tracking-wider text-white">
                Find us on
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/512px-Indeed_logo.svg.png"
                alt="Indeed"
                className="h-5 w-auto flex-shrink-0 brightness-0 invert -translate-y-[3px]"
              />
            </a>
          </div>

          {/* IMAGE BLOCK – now below text (stacked) */}
          <div className="relative w-full animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-port-mist/40">
              <img
                src="https://www.beecreekphoto.com/images/xl/austin-skyline-auditorium-shores-twilight-DR50215.jpg"
                alt="City skyline"
                className="w-full h-[200px] object-cover animate-slow-pan"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
    @keyframes slowPan {
      0% { transform: translateX(0); }
      50% { transform: translateX(-3%); }
      100% { transform: translateX(0); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slow-pan {
      animation: slowPan 60s ease-in-out infinite;
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }
  `}</style>
      </section>


      {/* 2. Why Work Here (3 cards) */}
      <section className="py-24 bg-port-frost relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-port-navy mb-4">
                Why Port Laken?
              </h2>
              <p className="text-port-slate text-lg max-w-3xl mx-auto">
                We offer more than just a job. We offer a career with meaning, stability, and connection.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <RevealOnScroll key={item.title} className={`delay-${index * 100} h-full`}>
                <div className="group h-full bg-white p-8 rounded-3xl hover:bg-port-navy transition-all duration-300 border border-port-mist/50 hover:border-port-navy flex flex-col items-start text-left">
                  <div className="w-14 h-14 bg-port-frost rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/10 transition-colors">
                    <item.icon className="text-port-sky text-xl group-hover:text-port-ice" />
                  </div>
                  <h3 className="font-bold text-xl text-port-navy group-hover:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-port-slate group-hover:text-white/80 leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      {/* Life at Port Laken - Balanced, tighter Nukta-style grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
                We do more than serve
              </h1>
              <h2 className="text-port-slate text-large max-w-4xl mx-auto leading-relaxed">
                We grow together, celebrate wins, and create real connections.

              </h2>
              <h3 className="text-port-slate text-large max-w-4xl mx-auto leading-relaxed">
                Every day brings energy, collaboration, and the satisfaction of improving our community.
              </h3>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quote 1 */}
            <div className="bg-port-frost rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
              <p className="text-2xl leading-tight italic text-port-navy mb-6">
                “More than a job — I learned and grew every day making a difference here.”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src="https://i.pravatar.cc/96?u=almas"
                  alt="Almas Rivera"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-port-navy text-sm">Almas Rivera</div>
                  <div className="text-xs text-port-slate">Civil Engineer</div>
                </div>
              </div>
            </div>

            {/* Image 1: Hands stacking */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <img
                src="https://thumbs.dreamstime.com/b/diverse-business-team-stacking-hands-showing-unity-group-people-their-together-symbolizing-teamwork-collaboration-support-434215192.jpg"
                alt="Diverse team stacking hands in unity"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Quote 2 */}
            <div className="bg-port-frost rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
              <p className="text-2xl leading-tight italic text-port-navy mb-6">
                “Every day is a journey of learning and growth while serving our neighbors.”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src="https://i.pravatar.cc/96?u=arsalan"
                  alt="Arsalan Khan"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-port-navy text-sm">Arsalan Khan</div>
                  <div className="text-xs text-port-slate">Recreation Coordinator</div>
                </div>
              </div>
            </div>

            {/* Image 2: Collaboration meeting */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <img
                src="https://thediversitymovement.com/wp-content/uploads/2024/01/iStock-1481369283-1024x576.jpg"
                alt="Diverse team collaborating in discussion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Quote 3 */}
            <div className="bg-port-frost rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
              <p className="text-2xl leading-tight italic text-port-navy mb-6">
                “An opportunity every day for growth, connection, and meaningful impact.”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src="https://i.pravatar.cc/96?u=john"
                  alt="John Patel"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-port-navy text-sm">John Patel</div>
                  <div className="text-xs text-port-slate">IT Support Specialist</div>
                </div>
              </div>
            </div>

            {/* Image 3: Coffee break fun */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <img
                src="https://thumbs.dreamstime.com/b/colleagues-laugh-chat-modern-office-cafe-coffee-break-group-coworkers-share-joyful-moment-bright-connect-424644392.jpg"
                alt="Team enjoying coffee break and laughs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 4. Benefits (Condensed) */}
      <section className="py-24 bg-port-frost">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-12">
              Benefits That Support You
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-left max-w-2xl mx-auto">
              {benefitPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-port-sky/10 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-port-sky text-xs" />
                  </div>
                  <span className="text-port-navy font-medium text-lg">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/careers/benefits"
              className="inline-flex items-center gap-2 text-port-sky font-bold text-lg hover:text-port-navy transition-colors border-b-2 border-transparent hover:border-port-navy pb-1"
            >
              View Full Benefits Guide <FaArrowRight className="text-sm" />
            </Link>
          </RevealOnScroll>
        </div>
      </section >

      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={indeedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left group transition-all"
          >
            {/* Left Text */}
            <span className="text-gray-600 font-medium">
              Securely apply for all positions on
            </span>

            {/* Indeed Logo */}
            <img
              src="https://wp.bibbeo.com/wp-content/uploads/2025/04/indeed-logo.webp"
              alt="Indeed"
              className="h-6 opacity-80 group-hover:opacity-100 transition-opacity"
            />

            {/* Divider (Desktop Only) */}
            <span className="hidden sm:block w-px h-6 bg-gray-300" />

            {/* CTA */}
            <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:translate-x-1 transition-transform">
              View Openings
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </section>



    </>
  );
}