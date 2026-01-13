"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showSnow?: boolean;
  showQuickLinks?: boolean;
  height?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  showSnow = false,
  showQuickLinks = false,
  height = "min-h-screen",
  children,
}: HeroSectionProps) {
  const [snowflakes, setSnowflakes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (showSnow) {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        const style = {
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.6 + 0.4,
        };
        flakes.push(
          <div key={i} className="snowflake" style={style} />
        );
      }
      setSnowflakes(flakes);
    }
  }, [showSnow]);

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
      </div>

      {/* Snow */}
      {showSnow && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {snowflakes}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="text-center">
          {subtitle && (
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-white/60"></div>
              <span className="text-white/80 text-sm tracking-[0.3em] uppercase font-light">
                {subtitle}
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          )}

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up delay-100">
            <span className="italic">{title}</span>
          </h1>

          {children}

          {showQuickLinks && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 animate-fade-in-up delay-400">
              <Link
                href="/residents"
                className="group glass rounded-xl p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  🚨
                </span>
                <span className="text-sm font-medium text-port-navy">Emergency</span>
              </Link>
              <Link
                href="/forms"
                className="group glass rounded-xl p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  📝
                </span>
                <span className="text-sm font-medium text-port-navy">Submit Request</span>
              </Link>
              <Link
                href="/residents"
                className="group glass rounded-xl p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  💳
                </span>
                <span className="text-sm font-medium text-port-navy">Pay Utilities</span>
              </Link>
              <Link
                href="/events"
                className="group glass rounded-xl p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                  📅
                </span>
                <span className="text-sm font-medium text-port-navy">Calendar</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="#f8fafb"
          />
        </svg>
      </div>
    </section>
  );
}