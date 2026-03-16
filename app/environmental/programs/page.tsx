"use client";

import { useEffect, useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaRecycle, FaSolarPanel, FaSeedling, FaLeaf,
  FaArrowRight, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
} from "react-icons/fa";
import { GiWaterDrop, GiWindmill } from "react-icons/gi";
import { TbPlant } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { IoEarth } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const GREEN = "#4CAF82";
const BLUE = "#708aa3";

const programs = [
  { id:"recycling",  title:"Recycling & Waste Reduction", description:"Our comprehensive recycling program makes it easy for residents to reduce waste.", icon:FaRecycle,    image:"https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80", stats:[{value:"40%",label:"Waste Diverted"},{value:"15K",label:"Tons Recycled"},{value:"98%",label:"Participation"}],     details:["Curbside recycling pickup every Tuesday","Glass, plastic, paper, and metal accepted","Free recycling bins for all residents","Hazardous waste drop-off events monthly"],   schedule:"Every Tuesday, 7 AM – 5 PM",    contact:"recycling@portlaken.gov" },
  { id:"composting", title:"Community Composting",        description:"Turn food scraps and yard waste into nutrient-rich soil for community gardens.", icon:TbPlant,      image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", stats:[{value:"5K",label:"Tons Composted"},{value:"12",label:"Drop-off Sites"},{value:"500+",label:"Home Composters"}], details:["Free compost bins for residents","Monthly composting workshops","Community drop-off locations citywide","Free finished compost for gardens"],               schedule:"Drop-off: Daily, 6 AM – 8 PM",  contact:"compost@portlaken.gov"   },
  { id:"solar",      title:"Solar Energy Initiative",     description:"Harnessing the power of the sun to create a cleaner energy future for Port Laken.", icon:FaSolarPanel, image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", stats:[{value:"75%",label:"Clean Energy"},{value:"2 MW",label:"Capacity"},{value:"$2M",label:"Saved Annually"}],        details:["Residential solar rebate program","Community solar farm subscriptions","Free solar assessments for homes","Net metering for solar producers"],                  schedule:"Mon–Fri, 9 AM – 5 PM",          contact:"solar@portlaken.gov"     },
  { id:"wind",       title:"Wind Power Partnership",      description:"Working with regional partners to bring clean wind energy to homes and businesses.", icon:GiWindmill,   image:"https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80", stats:[{value:"25%",label:"Grid Power"},{value:"50K",label:"Homes Powered"},{value:"Zero",label:"Emissions"}],          details:["Regional wind farm partnership","Green energy purchasing options","Community wind co-op investment","Educational tours available"],                            schedule:"Tours: Saturdays, 10 AM",        contact:"energy@portlaken.gov"    },
  { id:"water",      title:"Water Conservation",          description:"Protecting our most precious resource through smart management and community education.", icon:GiWaterDrop,  image:"https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80", stats:[{value:"2M",label:"Gallons Saved"},{value:"30%",label:"Usage Reduced"},{value:"100%",label:"Clean Water"}],       details:["Free water-saving fixtures","Smart irrigation rebates","Rainwater harvesting program","Leak detection assistance"],                                            schedule:"Hotline: 24/7",                  contact:"water@portlaken.gov"     },
  { id:"gardens",    title:"Community Gardens",            description:"Growing food, building community, and creating green spaces throughout Port Laken.", icon:FaSeedling,   image:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80", stats:[{value:"12",label:"Garden Sites"},{value:"400+",label:"Plot Holders"},{value:"10K",label:"lbs Produced"}],       details:["Individual garden plots available","Free seeds and starter plants","Gardening workshops monthly","Youth education programs"],                                   schedule:"Open: Dawn to Dusk",             contact:"gardens@portlaken.gov"   },
];

/* Real events from the events page */
const upcomingEvents = [
  {
    title: "Earth Day Cleanup",
    date: "April 22, 2026",
    location: "Various Locations",
    time: "8 AM - 12 PM",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  },
  {
    title: "Spring Food Drive",
    date: "March 15, 2026",
    location: "Community Center",
    time: "9 AM - 4 PM",
    category: "Community",
    image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=600&q=80",
  },
  {
    title: "Farmers Market Opening",
    date: "May 1, 2026",
    location: "Town Square",
    time: "7 AM - 1 PM",
    category: "Community",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
  },
  {
    title: "Senior Health Fair",
    date: "May 20, 2026",
    location: "Senior Center",
    time: "10 AM - 3 PM",
    category: "Health",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
];

const heroStats = [
  { value:"6",    label:"Active Programs",    icon:BsLightningCharge },
  { value:"98%",  label:"Participation Rate", icon:IoEarth           },
  { value:"$5M+", label:"Annual Savings",     icon:FaSolarPanel      },
  { value:"40%",  label:"Emissions Reduced",  icon:FaLeaf            },
];

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.cssText = "opacity:0;transform:translateY(28px);transition:opacity 0.65s ease,transform 0.65s ease";
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.opacity="1"; el.style.transform="none"; }, delay); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

export default function ProgramsPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: BLUE, paddingTop: "10rem", paddingBottom: "6rem" }} className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 55% at 75% 25%, #4a6880, transparent 55%)" }} />
        <div className="absolute rounded-full border border-white/10 pointer-events-none" style={{ width: 500, height: 500, top: -120, right: -120, animation: "pulse 7s ease-in-out infinite" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/environmental" className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors mb-10">
            <FaArrowRight className="rotate-180" size={10} /> Environmental Overview
          </Link>
          <Fade>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px" style={{ background: GREEN }} />Environmental Programs
            </p>
            <h1 className="font-display font-black text-white tracking-tight mb-8" style={{ fontSize: "clamp(52px,7vw,90px)", lineHeight: 0.95 }}>
              Explore Our<br /><em className="italic" style={{ color: GREEN }}>Programs</em>
            </h1>
            <p className="text-white/50 font-light leading-relaxed mb-16 max-w-xl" style={{ fontSize: 16 }}>
              Discover the initiatives making Port Laken a leader in environmental sustainability.
            </p>
          </Fade>

          <Fade delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-white rounded-2xl overflow-hidden shadow-xl">
              {heroStats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center"
                  style={{ padding: "2rem 1rem", borderRight: i < 3 ? "1px solid #d6dfe8" : "none" }}>
                  <s.icon className="mb-3" size={20} style={{ color: BLUE, opacity: 0.6 }} />
                  <p className="font-display font-black text-port-navy mb-1" style={{ fontSize: 26, lineHeight: 1 }}>{s.value}</p>
                  <p className="text-port-slate/55 tracking-wide" style={{ fontSize: 11 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ── PROGRAMS LIST ── */}
      <section className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-16" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
              What we&apos;re <em className="italic" style={{ color: GREEN }}>running</em>
            </h2>
          </Fade>

          <div className="space-y-6">
            {programs.map((prog, index) => (
              <RevealOnScroll key={prog.id}>
                <div id={prog.id}
                  className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} bg-port-frost rounded-2xl overflow-hidden border border-port-mist hover:shadow-lg transition-all duration-300`}
                  style={{ borderColor: "#d6dfe8" }}>
                  <div className="relative h-56 lg:h-auto flex-shrink-0 lg:w-72 xl:w-80 overflow-hidden">
                    <Image src={prog.image} alt={prog.title} fill sizes="(max-width:1024px) 100vw,320px"
                      className="object-cover brightness-75 saturate-75 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <prog.icon size={16} style={{ color: BLUE }} />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-5" style={{ padding: "2.25rem 2.5rem" }}>
                    <div>
                      <h3 className="font-display font-bold text-port-navy mb-2" style={{ fontSize: 22 }}>{prog.title}</h3>
                      <p className="text-sm text-port-slate font-light leading-relaxed">{prog.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "#d6dfe8" }}>
                      {prog.stats.map((s, i) => (
                        <div key={i} className="bg-white text-center" style={{ padding: "1rem" }}>
                          <p className="font-display font-black text-port-navy mb-1" style={{ fontSize: 22, lineHeight: 1 }}>{s.value}</p>
                          <p className="text-port-slate/55 tracking-wide" style={{ fontSize: 11 }}>{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {prog.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: GREEN, marginTop: 7 }} />
                          <span className="text-sm text-port-slate font-light leading-relaxed">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-port-mist">
                      <span className="flex items-center gap-2 text-port-slate/60" style={{ fontSize: 11 }}>
                        <FaCalendarAlt style={{ color: BLUE }} size={10} />{prog.schedule}
                      </span>
                      <a href={`mailto:${prog.contact}`} className="flex items-center gap-2 hover:underline" style={{ fontSize: 11, color: BLUE }}>
                        <FaEnvelope size={10} />{prog.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS — real data from events page ── */}
      <section className="bg-port-cream" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-12" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
              Upcoming <em className="italic" style={{ color: GREEN }}>events</em>
            </h2>
          </Fade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {upcomingEvents.map((ev, i) => (
              <Fade key={i} delay={i * 70}>
                {/* Links to /events — the real events page */}
                <Link href="/events" className="group block bg-white rounded-2xl overflow-hidden border border-port-mist hover:shadow-lg transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={ev.image} alt={ev.title} fill sizes="(max-width:640px) 100vw,25vw"
                      className="object-cover brightness-90 transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase text-white rounded-full px-2.5 py-1"
                      style={{ background: BLUE }}>{ev.category}</span>
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h4 className="font-display font-bold text-port-navy text-sm leading-snug mb-3 group-hover:text-port-sky transition-colors">{ev.title}</h4>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-port-slate/60" style={{ fontSize: 11 }}>
                        <FaCalendarAlt style={{ color: GREEN }} size={10} />{ev.date}
                      </div>
                      <div className="flex items-center gap-2 text-port-slate/60" style={{ fontSize: 11 }}>
                        <FaClock style={{ color: GREEN }} size={10} />{ev.time}
                      </div>
                      <div className="flex items-center gap-2 text-port-slate/60" style={{ fontSize: 11 }}>
                        <FaMapMarkerAlt style={{ color: GREEN }} size={10} />{ev.location}
                      </div>
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>

          {/* View all events → /events */}
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-port-navy hover:text-port-sky transition-colors group">
            View all events <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div style={{ maxWidth: 520 }}>
              <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
              <h2 className="font-display font-bold text-port-navy tracking-tight mb-5" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
                Ready to make <em className="italic" style={{ color: GREEN }}>a difference?</em>
              </h2>
              <p className="text-sm text-port-slate font-light leading-relaxed mb-10">
                Join thousands of Port Laken residents making a tangible impact on our environment.
              </p>
              <Link href="/environmental/get-involved" className="inline-flex items-center gap-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ background: BLUE, padding: "14px 32px" }}>
                Get Involved Today <FaArrowRight size={11} />
              </Link>
            </div>
          </Fade>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:.45;transform:scale(1.03)} }
      `}</style>
    </>
  );
}