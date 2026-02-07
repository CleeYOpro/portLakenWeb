"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Home, TreePine, Ship } from "lucide-react";
import TimelineSection from "./components/TimelineSection";
import RollingNumber from "./components/RollingNumber";
import InvertButton from "@/components/ui/InvertButton";
import { IoIosArrowDown } from "react-icons/io";

export default function AboutPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Hero - Full Screen Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://outdoor-society.com/wp-content/uploads/2018/04/MP7A1677-1.jpg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

<div className="absolute z-10 bottom-32 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Rooted in Place. <span className="italic">Rising Forward.</span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 cursor-pointer" onClick={scrollToOverview}>
          <span className="text-white text-xs font-medium uppercase">Scroll Down ▼</span>
        </div>
      </section>
      <section id="overview" className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Background Elements - Subtle "Port Laken" Themed Icons */}
        <div className="absolute top-0 right-0 opacity-[0.08] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <TreePine className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] text-port-navy" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-[0.08] pointer-events-none transform -translate-x-1/4 translate-y-1/4">
          <Ship className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] text-port-navy" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <Home className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] text-port-navy" />
        </div>

        <div className="relative z-10 flex flex-col gap-12 md:gap-20">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-port-navy max-w-7xl mx-auto px-5 md:px-8 leading-tight">
              Hi, I&rsquo;m Port Laken. I am a city where history and innovation grow side by side. I sit along the shores of northern Washington, stretching from the pristine waters of the San Juan Strait to the Olympic Mountains. Here are a few things about me.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-port-navy max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-20">
              Numerically, I&apos;m...
            </h2>
          </RevealOnScroll>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            <RollingNumber value={85000} label="Population" />
            <RollingNumber value={45} label="Square Miles" suffix=" sq mi" />
            <RollingNumber value={19} label="Parks & Green Spaces" />
            <RollingNumber value={98} label="Resident Satisfaction" suffix="%" />
            <RollingNumber value={1500} label="Local Businesses" suffix="+" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Heartbeat of Port Laken - Bento Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-port-navy mb-4">
                The Places That Make Me, Port Laken
              </h2>
              <p className="text-port-slate text-base md:text-lg max-w-2xl mx-auto">
                Get to know the places, food, and culture that define me.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[350px]">
            {/* 1. Heritage District - Tall Left Card */}
            <RevealOnScroll className="lg:col-span-1 lg:row-span-2 h-full">
              <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1549144511-2003c0b561c7?w=800&q=80"
                  alt="Heritage District"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Heritage District</h3>
                </div>
              </div>
            </RevealOnScroll>

            {/* 2. Culinary Scene - Top Middle */}
            <RevealOnScroll className="lg:col-span-1 lg:row-span-1 h-full delay-100">
              <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
                  alt="Culinary Scene"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">Culinary Scene</h3>
                </div>
              </div>
            </RevealOnScroll>

            {/* 3. Art & Innovation - Top Right */}
            <RevealOnScroll className="lg:col-span-1 lg:row-span-1 h-full delay-200">
              <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80"
                  alt="Art & Innovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">Art & Innovation</h3>
                </div>
              </div>
            </RevealOnScroll>

            {/* 4. Waterfront Life - Bottom Wide */}
            <RevealOnScroll className="lg:col-span-2 lg:row-span-1 h-full delay-300">
              <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80"
                  alt="Waterfront Life"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Waterfront Life</h3>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Newsletter - compact */}
      <section className="py-20 md:py-28 bg-port-frost">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left: Text */}
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
                  Stay Connected
                </h2>
                <p className="text-port-slate text-base md:text-lg max-w-md mb-6">
                  I share local updates, community events, and opportunities to get involved.
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-white border border-port-mist
                         hover:bg-port-navy hover:text-white
                         flex items-center justify-center text-port-slate transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-11 h-11 rounded-full bg-white border border-port-mist
                         hover:bg-port-navy hover:text-white
                         flex items-center justify-center text-port-slate transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-white border border-port-mist
                         hover:bg-port-navy hover:text-white
                         flex items-center justify-center text-port-slate transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-port-mist">
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl border border-port-mist
                         focus:outline-none focus:ring-2 focus:ring-port-sky
                         text-port-navy placeholder:text-port-slate/60"
                  />

                  <InvertButton
                    text="Subscribe"
                    bgColor="bg-port-navy"
                    textColor="text-port-navy"
                    lightStateBg="bg-white"
                    darkStateText="text-white"
                    borderColor="border-port-navy"
                    padding="px-6 py-3.5"
                    curvature="rounded-2xl"
                    invertDirection="light-to-dark"
                    className="w-full font-semibold shadow-md active:scale-95 transition-all"
                  />
                </form>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

    </>
  );
}
