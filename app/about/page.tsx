"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Home, TreePine, Ship } from "lucide-react";
import TimelineSection from "./components/TimelineSection";
import RollingNumber from "./components/RollingNumber";
import InvertButton from "@/components/ui/InvertButton";
import { IoIosArrowDown } from "react-icons/io";

function BouncingText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  // smoothed progress 0..1 for each word
  const words = text.split(" ");
  const rawRef = useRef(0);
  const smoothRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [progresses, setProgresses] = useState<number[]>(() => words.map(() => 0));

  useEffect(() => {
    const LERP = 0.07; // lower = more lag / weighted feel

    function getScrollProgress() {
      const el = ref.current;
      if (!el || typeof window === "undefined") return 0;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // start animating when top hits 90% of viewport, finish when top hits 10%
      const start = windowH * 0.9;
      const end = windowH * 0.1;
      return Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    }

    function tick() {
      rawRef.current = getScrollProgress();
      smoothRef.current += (rawRef.current - smoothRef.current) * LERP;
      const smooth = smoothRef.current;

      // each word gets its own exclusive slice: word i animates only after i-1 is done
      const slice = 1 / words.length;
      setProgresses(words.map((_, i) => {
        const wordStart = i * slice;
        const wordEnd = wordStart + slice;
        return Math.min(1, Math.max(0, (smooth - wordStart) / (wordEnd - wordStart)));
      }));

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [words.length]);

  // interpolate between light color and navy
  function lerpColor(p: number) {
    // light: #a8c5db  navy: #1e3a5f
    const r = Math.round(168 + (30 - 168) * p);
    const g = Math.round(197 + (58 - 197) * p);
    const b = Math.round(219 + (95 - 219) * p);
    return `rgb(${r},${g},${b})`;
  }

  return (
    <h2
      ref={ref}
      className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-7xl mx-auto px-5 md:px-8 leading-tight"
    >
      {words.map((word, i) => {
        const p = progresses[i];
        return (
          <span
            key={i}
            className="inline-block mr-[0.3em]"
            style={{
              color: lerpColor(p),
              transform: `translateY(${(1 - p) * 20}px)`,
              opacity: 0.35 + p * 0.65,
              willChange: "transform, color, opacity",
            }}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
}

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
          <BouncingText text="Hi, I'm Port Laken. I am a city where history and innovation grow side by side. I sit along the shores of northern Washington, stretching from the pristine waters of the San Juan Strait to the Olympic Mountains. Here are a few things about me." />
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
              <Link href="/resource-directory?q=What+is+there+to+do+in+the+city+center+of+Port+Laken%3F" className="relative h-full w-full rounded-3xl overflow-hidden group block cursor-pointer">
                <Image
                  src="https://images.trvl-media.com/place/6219551/4ada606a-cc8f-4451-9010-293cace04a6b.jpg"
                  alt="Heritage District"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">City-center</h3>
                </div>
              </Link>
            </RevealOnScroll>

            {/* 2. Culinary Scene - Top Middle */}
            <RevealOnScroll className="lg:col-span-1 lg:row-span-1 h-full delay-100">
              <Link href="/resource-directory?q=How%27s+the+culinary+scene+like+in+Port+Laken%3F" className="relative h-full w-full rounded-3xl overflow-hidden group block cursor-pointer">
                <Image
                  src="https://www.smartmeetings.com/wp-content/uploads/2015/11/washington-cover-dukes-chowder-house-1.jpg"
                  alt="Culinary Scene"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">Culinary Scene</h3>
                </div>
              </Link>
            </RevealOnScroll>

            {/* 3. Art & Innovation - Top Right */}
            <RevealOnScroll className="lg:col-span-1 lg:row-span-1 h-full delay-200">
              <Link href="/resource-directory?q=What+are+the+best+education+resources+in+Port+Laken%3F" className="relative h-full w-full rounded-3xl overflow-hidden group block cursor-pointer">
                <Image
                  src="https://hmcarchitects.com/wp-content/uploads/image5.png"
                  alt="Art & Innovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">Education</h3>
                </div>
              </Link>
            </RevealOnScroll>

            {/* 4. Waterfront Life - Bottom Wide */}
            <RevealOnScroll className="lg:col-span-2 lg:row-span-1 h-full delay-300">
              <Link href="/resource-directory?q=What+waterfront+and+water+sports+activities+are+available+in+Port+Laken%3F" className="relative h-full w-full rounded-3xl overflow-hidden group block cursor-pointer">
                <Image
                  src="https://olympicpeninsula.org/wp-content/uploads/2024/09/port-angeles-wa-city-pier-hdr-e1727213387696.jpg"
                  alt="Waterfront Life"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Waterfront Life</h3>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>


    </>
  );
}
