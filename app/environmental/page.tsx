"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaRecycle, FaSolarPanel, FaSeedling, FaLeaf,
  FaArrowRight, FaTimes, FaCalendarAlt, FaMapMarkerAlt,
} from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import RollingNumber from "@/app/about/components/RollingNumber";

const GREEN = "#4CAF82";
const BLUE = "#708aa3";

const latestNews = [
  {
    date: "February 10, 2026",
    title: "Green Port 2026: Port Laken's New Sustainability Plan",
    description: "Pocket parks, living shorelines, a municipal composting program, and zero-waste business incentives — the city's most ambitious environmental agenda to date.",
    link: "/news/sustainability-vision-2026",
  },
  {
    date: "January 16, 2026",
    title: "Port Laken's $50 Million Downtown Bet",
    description: "After 18 months of community engagement, the city unveils an ambitious decade-long plan to transform its downtown core.",
    link: "/news/downtown-initiative",
  },
  {
    date: "January 11, 2026",
    title: "Elm Street Park Is Finally Open — And It Was Worth the Wait",
    description: "After three years of planning and construction, Port Laken's newest green space transforms a former industrial lot into something the neighbourhood has needed for a generation.",
    link: "/news/elm-street-park",
  },
];

const programs = [
  {
    title: "Recycling & Waste",
    description: "Collection schedules, accepted materials, and goals for reducing landfill waste.",
    icon: FaRecycle,
    href: "/environmental/programs",
    popup: {
      heading: "Recycling & Waste Reduction",
      body: `Port Laken's recycling program serves every household in the city. Here's what you need to know:\n\n• Curbside pickup every Tuesday between 7 AM and 5 PM\n• Accepted materials: glass, plastic (1–7), paper, cardboard, and metal\n• Free recycling bins available — request yours at recycling@portlaken.gov\n• Hazardous waste (paint, batteries, electronics) accepted at monthly drop-off events\n• Current goal: divert 40% of all waste from landfill by end of 2026\n\nFor collection schedules, missed pickups, or bin requests contact recycling@portlaken.gov or call (360) 597-3322.`,
    },
  },
  {
    title: "Green Energy",
    description: "Solar power initiatives, energy conservation, and our shift to renewable sources.",
    icon: FaSolarPanel,
    href: "/environmental/programs",
    popup: {
      heading: "Solar Energy Initiative",
      body: `Port Laken is targeting 100% renewable energy by 2030. The Solar Energy Initiative is our primary vehicle.\n\n• Residential Solar Rebate: up to $3,000 back on qualifying installations\n• Community Solar Farm: subscribe for bill credits — no roof needed\n• Free solar assessments for homes and small businesses\n• Net metering lets solar producers sell excess power back to the grid\n• Over 30 municipal buildings now generate their own electricity\n• $2 million saved in public energy costs annually\n\nBook a free assessment at solar@portlaken.gov or visit us at City Hall, Mon–Fri 9 AM – 5 PM.`,
    },
  },
  {
    title: "Water & Stormwater",
    description: "Conservation tips, rain garden programs, and managing stormwater runoff.",
    icon: GiWaterDrop,
    href: "/environmental/programs",
    popup: {
      heading: "Water Conservation",
      body: `City-wide water usage is down 30% since 2018 — 2 million gallons saved annually. Here's how you can participate:\n\n• Free water-saving fixtures: request low-flow showerheads, aerators, and toilet tank banks\n• Smart irrigation rebates of up to $200 for weather-based controllers\n• Rain barrel subsidy program — reduce stormwater runoff at your home\n• Free home water audits to detect leaks (a dripping tap wastes 3,000+ gallons/year)\n• 24/7 hotline for leak reporting and emergency assistance\n\nContact water@portlaken.gov or call our 24/7 hotline at (360) 597-3322 ext. 4.`,
    },
  },
  {
    title: "Sustainability Programs",
    description: "Community gardens, educational workshops, and local green initiatives.",
    icon: FaSeedling,
    href: "/environmental/programs",
    popup: {
      heading: "Sustainability & Community Gardens",
      body: `Our sustainability programs touch everything from how we grow food to how we educate the next generation.\n\n• 12 community garden sites city-wide with 400+ active plot holders\n• Apply for a free plot at gardens@portlaken.gov — first-come, first-served\n• Monthly gardening workshops: composting, pest management, seasonal planting\n• Free seeds and starter plants for plot holders each season\n• Over 10,000 lbs of produce donated to local food banks last year\n• Youth education partnerships with 8 local schools\n• Municipal composting pilot launching April 2026 — citywide rollout in September\n\nGardens are open dawn to dusk. Contact gardens@portlaken.gov to apply for a plot.`,
    },
  },
];

const initiatives = [
  {
    id: "community-gardens",
    title: "Community Gardens",
    chip: "Sustainability",
    description: "12 sites, 400+ plot holders, and 10,000 lbs of produce donated annually — growing food and community across Port Laken.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    programHref: "/environmental/programs",
    externalLink: "https://www.portofpa.com/community-programs",
    fullDescription: `Our Community Gardens program has 12 active sites across Port Laken with over 400 plot holders.\n\n• Individual Garden Plots: Apply for your own plot — available to all residents on a first-come, first-served basis.\n\n• Free Seeds & Starter Plants: Every plot holder receives a seasonal starter kit including seeds, seedlings, and basic tools.\n\n• Monthly Workshops: Hands-on sessions covering composting, pest management, and seasonal planting.\n\n• Youth Education: Local schools partner with garden sites for field trips and after-school programs.\n\n• Food Bank Donations: Over 10,000 lbs of produce donated to Port Laken food banks last year.\n\nGardens are open from dawn to dusk year-round. Contact gardens@portlaken.gov to apply for a plot.`,
  },
  {
    id: "water-conservation",
    title: "Water Conservation",
    chip: "Water & Stormwater",
    description: "2 million gallons saved, usage down 30%, and 100% clean water through smart management and community education.",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80",
    programHref: "/environmental/programs",
    externalLink: "https://www.epa.gov/watersense",
    fullDescription: `Port Laken's Water Conservation program has reduced city-wide usage by 30%, saving over 2 million gallons annually.\n\n• Free Water-Saving Fixtures: Over 3,000 homes upgraded with free low-flow fixtures.\n\n• Smart Irrigation Rebates: Up to $200 back for weather-based irrigation controllers.\n\n• Rainwater Harvesting: Subsidised rain barrels and collection systems at community sites.\n\n• Leak Detection: Free home water audits — a dripping tap wastes 3,000+ gallons a year.\n\nContact water@portlaken.gov or call our 24/7 hotline.`,
  },
  {
    id: "solar-energy",
    title: "Solar Energy Initiative",
    chip: "Green Energy",
    description: "75% clean energy, 2 MW of capacity, and $2 million saved annually — leading the region's transition to renewable power.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    programHref: "/environmental/programs",
    externalLink: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar",
    fullDescription: `Port Laken's Solar Energy Initiative is driving our push to 100% renewable energy by 2030. 75% of municipal energy now comes from clean sources.\n\n• Residential Solar Rebate: Up to $3,000 back for qualifying solar installations.\n\n• Community Solar Farm: Subscribe and receive bill credits — no roof installation needed.\n\n• Free Solar Assessments: Certified assessors visit your home at no cost.\n\n• Net Metering: Sell excess electricity back to the grid.\n\nBook your free assessment at solar@portlaken.gov.`,
  },
];

const parks = [
  {
    name: "Elm Street Park",
    description: "Port Laken's newest green space, opened January 2026. Features walking trails, a native plant garden, and a community pavilion on a former industrial lot.",
    amenities: ["Walking Trails", "Pavilion", "Native Garden", "Benches"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5!2d-122.3321!3d47.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzIyLjMiTiAxMjLCsDE5JzU1LjYiVw!5e0!3m2!1sen!2sus!4v1700000000000",
  },
  {
    name: "Lakeview Waterfront Park",
    description: "A 14-acre waterfront park along the Port Laken shoreline with picnic areas, a boat launch, and restored wetland habitat.",
    amenities: ["Picnic Areas", "Boat Launch", "Wetland Trail", "Fishing Pier"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5!2d-122.3421!3d47.6162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzU4LjMiTiAxMjLCsDIwJzMxLjYiVw!5e0!3m2!1sen!2sus!4v1700000000001",
  },
  {
    name: "Riverside Community Garden",
    description: "One of 12 community garden sites, Riverside hosts 80+ active plots alongside a composting station and seasonal workshops.",
    amenities: ["80+ Garden Plots", "Composting Station", "Tool Shed", "Workshop Space"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5!2d-122.3221!3d47.5962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM1JzQ2LjMiTiAxMjLCsDE5JzE5LjYiVw!5e0!3m2!1sen!2sus!4v1700000000002",
  },
];

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.cssText = "opacity:0;transform:translateY(28px);transition:opacity 0.7s ease,transform 0.7s ease";
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity = "1"; el.style.transform = "none"; }, delay); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
export default function EnvironmentalPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeProgramPopup, setActiveProgramPopup] = useState<typeof programs[0] | null>(null);

  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openModal = (id: string) => { setActiveModal(id); document.body.style.overflow = "hidden"; };
  const closeModal = () => { setActiveModal(null); document.body.style.overflow = ""; };
  const active = initiatives.find(i => i.id === activeModal);

  const openProgramPopup = (prog: typeof programs[0]) => { setActiveProgramPopup(prog); document.body.style.overflow = "hidden"; };
  const closeProgramPopup = () => { setActiveProgramPopup(null); document.body.style.overflow = ""; };

  return (
    <>
      {/* ── INITIATIVE MODAL ── */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(112,138,163,0.75)" }} onClick={closeModal}>
          <div className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: "mIn .3s ease", maxHeight: "90vh" }} onClick={e => e.stopPropagation()}>
            <div className="relative h-44">
              <Image src={active.image} alt={active.title} fill className="object-cover brightness-75" sizes="600px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#708aa3] via-[#708aa3]/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-white/70 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />{active.chip}
                </span>
                <h3 className="font-display text-xl font-bold text-white">{active.title}</h3>
              </div>
              <button onClick={closeModal} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors">
                <FaTimes size={12} />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5" style={{ maxHeight: "calc(90vh - 11rem - 4.5rem)" }}>
              {active.fullDescription.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm text-port-slate font-light leading-relaxed mb-3 whitespace-pre-line">{p}</p>
              ))}
            </div>
            <div className="p-4 pt-0 flex gap-3">
              <Link href={active.programHref} onClick={closeModal}
                className="flex-1 py-3 rounded-full text-sm font-semibold text-white text-center block transition-colors"
                style={{ background: BLUE }}>
                Full Program Details
              </Link>
              {"externalLink" in active && (
                <a href={(active as any).externalLink} target="_blank" rel="noopener noreferrer" onClick={closeModal}
                  className="flex-1 py-3 rounded-full text-sm font-semibold text-center block border transition-colors"
                  style={{ borderColor: BLUE, color: BLUE }}>
                  Learn More ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── PROGRAM POPUP ── */}
      {activeProgramPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(112,138,163,0.75)" }} onClick={closeProgramPopup}>
          <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: "mIn .3s ease" }} onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-4 p-6 border-b border-port-mist">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: BLUE }}>
                <activeProgramPopup.icon className="text-white" size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-port-navy">{activeProgramPopup.popup.heading}</h3>
              <button onClick={closeProgramPopup} className="ml-auto w-8 h-8 rounded-full bg-port-frost flex items-center justify-center text-port-slate hover:bg-port-mist transition-colors flex-shrink-0">
                <FaTimes size={12} />
              </button>
            </div>
            <div className="px-6 py-5 overflow-y-auto" style={{ maxHeight: "60vh" }}>
              {activeProgramPopup.popup.body.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm text-port-slate font-light leading-relaxed mb-3 whitespace-pre-line">{p}</p>
              ))}
            </div>
            <div className="p-4 pt-0 flex gap-3">
              <Link href={activeProgramPopup.href} onClick={closeProgramPopup}
                className="flex-1 py-3 rounded-full text-sm font-semibold text-white text-center transition-colors" style={{ background: BLUE }}>
                Full Program Details
              </Link>
              <button onClick={closeProgramPopup}
                className="flex-1 py-3 rounded-full text-sm font-medium text-port-slate border border-port-mist hover:bg-port-frost transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: "10rem", paddingBottom: "7rem", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
            alt="Olympic National Forest"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", background: "rgba(0,0,0,0.35)" }} />
        </div>
        <div className="absolute rounded-full border border-white/10 pointer-events-none z-10" style={{ width: 600, height: 600, top: -150, right: -150, animation: "pulse 7s ease-in-out infinite" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Fade>
            <h1 className="font-display font-black text-white tracking-tight mb-8" style={{ fontSize: "clamp(56px,8vw,100px)", lineHeight: 0.95 }}>
              Our Commitment<br />to a <em className="not-italic" style={{ color: GREEN }}>Greener</em> Future<br />
            </h1>
            <p className="text-white/55 font-light leading-relaxed mb-12 max-w-lg" style={{ fontSize: 17 }}>
Discover how Port Laken protects and preserves its natural environment. This includes clean energy, water conservation, parks, and green spaces that will serve the community for generations to come.            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/environmental/programs"
                className="inline-flex items-center gap-2 rounded-full text-base font-bold border-[3px] border-white text-white hover:bg-white hover:text-port-navy transition-all duration-200"
                style={{ padding: "15px 36px" }}>
                Explore Programs <FaArrowRight size={13} />
              </Link>
            </div>
          </Fade>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 cursor-pointer" onClick={scrollToOverview}>
          <span className="text-white text-xs font-medium uppercase">Scroll Down ▼</span>
        </div>
        
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Fade>
              <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
              <h2 className="font-display font-bold text-port-navy tracking-tight mb-6" style={{ fontSize: "clamp(38px,4vw,54px)", lineHeight: 1.05 }}>
                Stewardship<br />for <em className="italic" style={{ color: GREEN }}>tomorrow</em>
              </h2>
              <p className="text-port-slate font-light leading-relaxed text-base">
Our community is dedicated to fostering a sustainable future through proactive environmental stewardship. This includes comprehensive recycling programs and the adoption of green energy. All of these efforts are designed to reduce our ecological footprint and improve the quality of life for all residents.              </p>
            </Fade>
            <Fade delay={150}>
              <div className="relative flex items-center justify-center" style={{ height: 420 }}>
                {[
                  "https://olympicpeninsula.org/wp-content/uploads/2018/07/Hall-of-Mosses-Trail-Hoh-Rain-Forest-2.jpg",
                  "https://stateofwatourism.com/wp-content/uploads/2022/07/Rain-Forest-Olympic-Peninsula-9699-narrow.jpg",
                  "https://media.istockphoto.com/id/2082172331/photo/full-length-of-multicultural-friends-walking-in-city-park-and-having-fun.webp?b=1&s=612x612&w=0&k=20&c=ozyRAfHW0PY-OCmW0ctE7TmCkgohazyPxW8afCf74MA=",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="absolute rounded-2xl overflow-hidden"
                    style={{
                      width: 280,
                      height: 360,
                      border: "5px solid white",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                      animation: `cardCycle 6s ease-in-out infinite`,
                      animationDelay: `${i * 2}s`,
                    }}
                  >
                    <Image src={src} alt={`Park photo ${i + 1}`} fill className="object-cover" sizes="280px" />
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-port-cream" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-14" style={{ fontSize: "clamp(38px,4vw,54px)", lineHeight: 1.05 }}>
              What we&apos;re <em className="italic" style={{ color: GREEN }}>working on</em>
            </h2>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((p, i) => (
              <Fade key={p.title} delay={i * 80}>
                <button onClick={() => openProgramPopup(p)}
                  className="group flex flex-col bg-white rounded-2xl border border-port-mist hover:border-port-sky/40 hover:shadow-lg transition-all duration-300 h-full text-left w-full"
                  style={{ padding: "2rem" }}>
                  <p.icon size={28} className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: BLUE }} />
                  <h3 className="font-display font-bold text-port-navy mb-2 group-hover:text-port-sky transition-colors" style={{ fontSize: 17 }}>{p.title}</h3>
                  <p className="text-xs text-port-slate font-light leading-relaxed flex-1">{p.description}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-xs font-semibold group-hover:gap-3 transition-all" style={{ color: GREEN }}>
                    Learn more <FaArrowRight size={10} />
                  </span>
                </button>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── INITIATIVES ── */}
      <section className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-14" style={{ fontSize: "clamp(38px,4vw,54px)", lineHeight: 1.05 }}>
              Real impact, <em className="italic" style={{ color: GREEN }}>real results</em>
            </h2>
          </Fade>
          <div className="grid lg:grid-cols-2 gap-5">
            <Fade>
              <button onClick={() => openModal(initiatives[0].id)} className="group relative w-full rounded-2xl overflow-hidden text-left" style={{ minHeight: 520 }}>
                <Image src={initiatives[0].image} alt={initiatives[0].title} fill sizes="(max-width:1024px) 100vw,50vw"
                  className="object-cover brightness-[0.55] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(112,138,163,0.97) 0%, rgba(112,138,163,0.15) 55%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-white/60 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />{initiatives[0].chip}
                  </span>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: 26, lineHeight: 1.2 }}>{initiatives[0].title}</h3>
                  <p className="text-sm text-white/55 font-light leading-relaxed">{initiatives[0].description}</p>
                </div>
              </button>
            </Fade>
            <div className="flex flex-col gap-5">
              {[initiatives[1], initiatives[2]].map((init, i) => (
                <Fade key={init.id} delay={(i + 1) * 100}>
                  <button onClick={() => openModal(init.id)} className="group relative w-full rounded-2xl overflow-hidden text-left" style={{ minHeight: 246 }}>
                    <Image src={init.image} alt={init.title} fill sizes="(max-width:1024px) 100vw,50vw"
                      className="object-cover brightness-[0.55] transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(112,138,163,0.97) 0%, rgba(112,138,163,0.15) 55%, transparent 100%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-white/60 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />{init.chip}
                      </span>
                      <h3 className="font-display font-bold text-white" style={{ fontSize: 20, lineHeight: 1.2 }}>{init.title}</h3>
                    </div>
                  </button>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section style={{ background: BLUE, padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <RollingNumber value={100} label="Renewable Energy Goal" suffix="%" />
            <RollingNumber value={5000} label="Trees Planted" suffix="+" />
            <RollingNumber value={40} label="Emissions Reduced" suffix="%" />
            <RollingNumber value={12} label="Community Gardens" />
          </div>
        </div>
      </section>

      {/* ── PARKS & GREEN SPACES ── */}
      <section className="bg-port-cream" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-4" style={{ fontSize: "clamp(38px,4vw,54px)", lineHeight: 1.05 }}>
              Parks &amp; <em className="italic" style={{ color: GREEN }}>Green Spaces</em>
            </h2>
            <p className="text-port-slate font-light leading-relaxed mb-14 max-w-xl" style={{ fontSize: 16 }}>
              Port Laken's parks are living parts of our environmental commitment — maintained as natural habitats, community gathering spaces, and green corridors throughout the city.
            </p>
          </Fade>
          <div className="flex flex-col gap-12">
            {parks.map((park, i) => (
              <Fade key={park.name} delay={i * 100}>
                <div className={`grid lg:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="rounded-2xl overflow-hidden border border-port-mist shadow-sm" style={{ height: 320 }}>
                      <iframe
                        src={park.mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${park.name}`}
                      />
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <p className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3" style={{ color: GREEN }}>
                      <FaMapMarkerAlt size={10} /> Park Location
                    </p>
                    <h3 className="font-display font-bold text-port-navy mb-3" style={{ fontSize: "clamp(24px,3vw,32px)", lineHeight: 1.15 }}>{park.name}</h3>
                    <p className="text-port-slate font-light leading-relaxed mb-6" style={{ fontSize: 15 }}>{park.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {park.amenities.map(a => (
                        <span key={a} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-port-mist bg-white text-port-slate">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-14" style={{ fontSize: "clamp(38px,4vw,54px)", lineHeight: 1.05 }}>
              What&apos;s <em className="italic" style={{ color: GREEN }}>happening</em>
            </h2>
          </Fade>
          {latestNews.map((item, i) => (
            <Fade key={i} delay={i * 80}>
              <Link href={item.link}
                className="group flex items-center justify-between gap-8 border-b border-port-mist first:border-t hover:bg-port-frost/60 rounded-xl -mx-4 px-4 transition-colors"
                style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-2" style={{ color: BLUE }}>
                    <FaCalendarAlt size={10} />{item.date}
                  </p>
                  <h3 className="font-display font-bold text-port-navy group-hover:text-port-sky transition-colors mb-1.5" style={{ fontSize: 20 }}>{item.title}</h3>
                  <p className="text-sm text-port-slate font-light leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all text-base" style={{ background: BLUE }}>→</div>
              </Link>
            </Fade>
          ))}
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-port-navy hover:text-port-sky transition-colors group">
              View all news <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:.4;transform:scale(1.03)} }
        @keyframes mIn   { from{opacity:0;transform:translateY(16px) scale(.97)} to{opacity:1;transform:none} }
        @keyframes cardCycle {
          0%   { transform: rotate(-6deg) translateY(0px)   scale(0.88); z-index: 1; opacity: 0.7; }
          15%  { transform: rotate(-6deg) translateY(-8px)  scale(0.88); z-index: 1; opacity: 0.7; }
          33%  { transform: rotate(0deg)  translateY(-20px) scale(1);    z-index: 3; opacity: 1;   }
          55%  { transform: rotate(0deg)  translateY(-20px) scale(1);    z-index: 3; opacity: 1;   }
          70%  { transform: rotate(6deg)  translateY(0px)   scale(0.88); z-index: 2; opacity: 0.8; }
          85%  { transform: rotate(6deg)  translateY(0px)   scale(0.88); z-index: 2; opacity: 0.8; }
          100% { transform: rotate(-6deg) translateY(0px)   scale(0.88); z-index: 1; opacity: 0.7; }
        }
      `}</style>
    </>
  );
}
