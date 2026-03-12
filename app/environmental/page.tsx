"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLeaf,
  FaSolarPanel,
  FaRecycle,
  FaHandsHelping,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiTreeGrowth, GiWindmill, GiWaterDrop } from "react-icons/gi";

// ✅ Option B: import images from within app (bundled by Next)
import parkImg from "./assets/park.jpg";
import harborImg from "./assets/harbor.jpg";

/**
 * Lightweight RevealOnScroll wrapper (so you don't depend on other files).
 */
function RevealOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-port-mist/70 bg-white/60 px-3 py-1 text-xs font-medium text-port-slate backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-port-sky" />
        <p className="text-sm font-semibold tracking-wide text-port-slate">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-port-navy leading-tight">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-base md:text-lg text-port-slate">{desc}</p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-port-mist/70 bg-white/75 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.10)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/**
 * ✅ Step 2: Simple carousel with arrows + dots (no external deps)
 */
function Carousel({
  slides,
}: {
  slides: Array<{
    eyebrow: string;
    title: string;
    desc: string;
    image?: any;
    chips?: string[];
    cta?: { label: string; href: string };
  }>;
}) {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setActive((p) => (p + 1) % slides.length);

  return (
    <div className="rounded-3xl border border-port-mist/70 bg-white/75 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.10)] overflow-hidden">
      {/* Slide */}
      <div className="relative h-[360px] md:h-[420px]">
        {/* Image / background */}
        {slides[active].image ? (
          <Image
            src={slides[active].image}
            alt={slides[active].title}
            fill
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-port-navy via-port-sky to-port-ice" />
        )}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-port-navy/70 via-port-navy/35 to-transparent" />
        <div className="absolute inset-0 [background:radial-gradient(60%_70%_at_30%_30%,rgba(255,255,255,0.10),rgba(255,255,255,0))]" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 md:p-10">
            <div className="max-w-2xl">
              <p className="text-white/90 text-sm font-semibold">
                {slides[active].eyebrow}
              </p>
              <h3 className="mt-2 text-white font-display text-2xl md:text-4xl font-bold leading-tight">
                {slides[active].title}
              </h3>
              <p className="mt-3 text-white/85 text-sm md:text-base">
                {slides[active].desc}
              </p>

              {slides[active].chips?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {slides[active].chips!.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}

              {slides[active].cta ? (
                <div className="mt-6">
                  <Link
                    href={slides[active].cta!.href}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-port-navy shadow-lg hover:opacity-95 transition"
                  >
                    {slides[active].cta!.label} <FaArrowRight />
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center p-3">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="h-11 w-11 rounded-2xl border border-white/25 bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/15 transition"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center p-3">
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="h-11 w-11 rounded-2xl border border-white/25 bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/15 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="bg-white/70 border-t border-port-mist/70 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold text-port-slate">
            Featured projects
          </p>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  idx === active ? "bg-port-sky" : "bg-port-mist/70 hover:bg-port-mist",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnvironmentalPage() {
  const kpis = useMemo(
    () => [
      { value: "65%", label: "Renewable Energy", icon: FaLeaf },
      { value: "12 MW", label: "Solar Capacity", icon: FaSolarPanel },
      { value: "5,000+", label: "Trees Planted", icon: GiTreeGrowth },
      { value: "40%", label: "Emissions Reduced", icon: GiWindmill },
    ],
    []
  );

  const overviewCards = useMemo(
    () => [
      {
        icon: GiWaterDrop,
        title: "Cleaner Water Systems",
        desc: "Modernized monitoring and restoration projects that protect waterways and reduce runoff impact.",
      },
      {
        icon: FaRecycle,
        title: "Circular Waste Programs",
        desc: "Diversion, composting, and reuse initiatives designed to keep materials in circulation longer.",
      },
      {
        icon: FaHandsHelping,
        title: "Community Partnerships",
        desc: "Volunteer-driven action with local organizations to scale impact across neighborhoods.",
      },
    ],
    []
  );

  const programs = useMemo(
    () => [
      {
        title: "Coastal Restoration",
        desc: "Dune stabilization, native plantings, and shoreline cleanups to protect habitats.",
        tag: "Ecosystems",
      },
      {
        title: "Clean Energy Transition",
        desc: "On-site solar + efficiency upgrades that reduce emissions across facilities.",
        tag: "Energy",
      },
      {
        title: "Urban Tree Canopy",
        desc: "Strategic planting and maintenance to improve air quality and reduce heat islands.",
        tag: "Greening",
      },
    ],
    []
  );

  const initiatives = useMemo(
    () => [
      {
        title: "Net-Zero Pathway",
        desc: "A phased plan to measure, reduce, and offset remaining emissions responsibly.",
      },
      {
        title: "Biodiversity Protection",
        desc: "Targeted actions to restore habitats and protect sensitive ecosystems.",
      },
      {
        title: "Low-Impact Development",
        desc: "Green infrastructure that reduces runoff and improves storm resilience.",
      },
    ],
    []
  );

  const news = useMemo(
    () => [
      {
        date: "Feb 2026",
        title: "Water quality monitoring upgrades launched",
        excerpt:
          "New sensors and reporting tools improve transparency and accelerate response times.",
      },
      {
        date: "Jan 2026",
        title: "Volunteer clean-up breaks participation record",
        excerpt:
          "Community turnout exceeded targets and removed significant debris from shoreline areas.",
      },
      {
        date: "Dec 2025",
        title: "Renewable energy milestone achieved",
        excerpt:
          "Expanded capacity helps reduce reliance on non-renewable sources across key sites.",
      },
    ],
    []
  );

  // ✅ Step 1: Partner logos (6)
  const partnerLogos = useMemo(
    () => [
      "Cascadia Water",
      "Northshore Renewables",
      "HarborWorks",
      "GreenLoop Recycling",
      "Sound Habitat Alliance",
      "EcoGrid",
    ],
    []
  );

  // ✅ Step 2: Carousel content (uses your existing images)
  const featuredSlides = useMemo(
    () => [
      {
        eyebrow: "Coastal resilience",
        title: "Shoreline restoration that protects habitats and infrastructure.",
        desc: "Targeted dune stabilization and native plantings reduce erosion risk while improving biodiversity along the waterfront.",
        image: harborImg,
        chips: ["Ecosystems", "Restoration", "Storm resilience"],
        cta: { label: "Explore programs", href: "/environmental/programs" },
      },
      {
        eyebrow: "Greening Port Laken",
        title: "Parks, tree canopy, and resilient public spaces.",
        desc: "A practical approach to shade, air quality, and walkable neighborhoods—delivered through repeatable planting and maintenance cycles.",
        image: parkImg,
        chips: ["Tree canopy", "Heat reduction", "Public space"],
        cta: { label: "Get involved", href: "/environmental/get-involved" },
      },
      {
        eyebrow: "Cleaner systems",
        title: "Modern monitoring for cleaner water and faster response.",
        desc: "Upgraded sensors and reporting improve transparency and accelerate remediation for high-impact waterways.",
        image: harborImg,
        chips: ["Water quality", "Monitoring", "Transparency"],
        cta: { label: "View updates", href: "#news" },
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-port-ice text-port-navy">
      {/* HERO (Harbor image background) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={harborImg}
            alt="Port Laken harbor at dusk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-port-navy/65 via-port-navy/40 to-port-ice/95" />
          <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_20%,rgba(255,255,255,0.20),rgba(255,255,255,0))]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 md:pb-16">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Pill>Environmental Stewardship</Pill>
                <Pill>Climate + Community</Pill>
                <Pill>Impact Programs</Pill>
              </div>

              <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight text-white">
                Protecting our coast, powering our future.
              </h1>

              <p className="mt-4 text-base md:text-lg text-white/85">
                Our environmental work focuses on measurable outcomes—cleaner
                water, lower emissions, healthier habitats, and community-led
                action.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/environmental/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-port-navy shadow-lg hover:opacity-95 transition"
                >
                  Explore programs <FaArrowRight />
                </Link>

                <a
                  href="#news"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 transition"
                >
                  Latest updates
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* KPI Bar */}
        <div className="relative -mt-10 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <Card className="p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white/70 border border-port-mist/60 px-4 py-4 md:px-6 md:py-5 flex items-center gap-4"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-port-frost flex items-center justify-center">
                        <kpi.icon className="text-xl text-port-sky" />
                      </div>
                      <div>
                        <div className="font-display text-2xl md:text-3xl font-bold text-port-navy leading-none">
                          {kpi.value}
                        </div>
                        <div className="text-sm text-port-slate">
                          {kpi.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ✅ STEP 1: Partner logos strip */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <RevealOnScroll>
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <p className="text-xs font-semibold tracking-wide text-port-slate uppercase">
                  Partnering with regional leaders
                </p>
                <p className="mt-1 text-sm text-port-slate">
                  A sample set of organizations supporting Port Laken initiatives.
                </p>
              </div>
              <div className="text-xs font-semibold text-port-slate/80">
                6 partners
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-port-mist/70 bg-white/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.06)] px-6 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {partnerLogos.map((name) => (
                  <div
                    key={name}
                    className="h-12 rounded-2xl border border-port-mist/60 bg-port-ice/40 flex items-center justify-center text-center px-3"
                  >
                    <span className="text-xs font-semibold tracking-wide text-port-navy/70">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* OVERVIEW (subtle park background) */}
      <section className="relative py-16 bg-port-ice overflow-hidden">
        <div className="absolute inset-0 opacity-[0.14]">
          <Image
            src={parkImg}
            alt="Port Laken park"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-port-ice/75 via-port-ice/95 to-port-ice" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="Our focus areas"
              title="High-impact environmental work, designed for real outcomes."
              desc="We combine infrastructure upgrades, community-led initiatives, and long-term sustainability planning—without losing sight of what matters: measurable change."
            />
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {overviewCards.map((c, i) => (
              <RevealOnScroll key={i} className="h-full">
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-port-frost flex items-center justify-center">
                    <c.icon className="text-2xl text-port-sky" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-port-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-port-slate">{c.desc}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="Key programs"
              title="Programs that scale with our community."
              desc="Each program is designed to be repeatable, measurable, and easy for residents to engage with."
            />
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <RevealOnScroll key={i} className="h-full">
                <Card className="p-6 h-full">
                  <div className="flex items-center justify-between gap-4">
                    <Pill>{p.tag}</Pill>
                    <span className="text-xs font-semibold text-port-slate">
                      Program
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-port-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-port-slate">{p.desc}</p>

                  <div className="mt-6">
                    <Link
                      href="/environmental/programs"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-port-sky hover:opacity-90"
                    >
                      Learn more <FaArrowRight />
                    </Link>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>

          {/* Big visual (already working) */}
          <div className="mt-10">
            <RevealOnScroll>
              <Card className="overflow-hidden">
                <div className="relative h-56 md:h-72">
                  <Image
                    src={parkImg}
                    alt="Community park and green spaces"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-port-navy/45 via-port-navy/10 to-transparent" />
                  <div className="absolute left-6 bottom-6 max-w-xl">
                    <p className="text-white/90 text-sm font-semibold">
                      Greening Port Laken
                    </p>
                    <h3 className="text-white font-display text-2xl md:text-3xl font-bold leading-tight">
                      Parks, tree canopy, and resilient public spaces.
                    </h3>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ✅ STEP 2: Carousel section (arrows + dots) */}
      <section className="py-16 bg-port-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="Featured projects"
              title="Work that feels real—because it is."
              desc="A curated look at the kinds of projects Port Laken runs with partners across the region."
            />
          </RevealOnScroll>

          <div className="mt-10">
            <RevealOnScroll>
              <Carousel slides={featuredSlides} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section id="initiatives" className="py-16 bg-port-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="Initiatives"
              title="Long-term strategy with near-term milestones."
              desc="We don’t just start projects—we build pathways to maintain them, fund them, and track them."
            />
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((it, i) => (
              <RevealOnScroll key={i} className="h-full">
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-port-frost flex items-center justify-center">
                      <FaLeaf className="text-lg text-port-sky" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-port-navy">
                      {it.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-port-slate">{it.desc}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="News & updates"
              title="Progress you can track."
              desc="Short updates that keep the community informed—without the fluff."
            />
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <RevealOnScroll key={i} className="h-full">
                <Card className="p-6 h-full">
                  <p className="text-xs font-semibold text-port-slate">{n.date}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-port-navy">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-port-slate">{n.excerpt}</p>
                  <div className="mt-6">
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-port-sky hover:opacity-90"
                    >
                      Read more <FaArrowRight />
                    </Link>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-port-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="rounded-3xl border border-port-mist/70 bg-white/75 backdrop-blur-xl p-8 md:p-10 shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-port-navy">
                    Want to get involved?
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-port-slate">
                    Join volunteer events, support local restoration, or help expand
                    clean energy programs across the city.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/environmental/get-involved"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-port-navy px-5 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition"
                  >
                    Volunteer <FaHandsHelping />
                  </Link>

                  <a
                    href="#initiatives"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-port-mist bg-white px-5 py-3 text-sm font-semibold text-port-navy hover:bg-port-ice transition"
                  >
                    View initiatives <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}

// pr test