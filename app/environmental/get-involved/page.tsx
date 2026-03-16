"use client";

import { useState, useEffect, useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaLeaf, FaArrowRight, FaCalendarAlt, FaUsers,
  FaHandsHelping, FaTree, FaRecycle, FaWater,
  FaSeedling, FaHeart, FaGraduationCap, FaBriefcase,
  FaCheck, FaEnvelope, FaCheckCircle, FaTimes,
} from "react-icons/fa";
import { GiTreeGrowth } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const GREEN = "#4CAF82";
const BLUE = "#708aa3";

const opportunities = [
  { title:"Beach & Harbor Cleanup",  description:"Help keep our waterways pristine by joining monthly cleanup events at the harbor.",    icon:FaWater,         commitment:"4 hrs / month",       nextEvent:"Jan 27, 2026",    spots:12 },
  { title:"Tree Planting Crew",      description:"Plant trees throughout Port Laken to expand our urban forest and improve air quality.", icon:FaTree,          commitment:"One-time or ongoing", nextEvent:"Feb 3, 2026",     spots:25 },
  { title:"Community Garden Helper", description:"Maintain community gardens, lead workshops, and harvest produce for food banks.",       icon:FaSeedling,      commitment:"2–4 hrs / week",      nextEvent:"Ongoing",         spots:8  },
  { title:"Recycling Ambassador",    description:"Educate neighbours about proper recycling and help at community events.",               icon:FaRecycle,       commitment:"3 hrs / week",        nextEvent:"Training: Feb 10",spots:15 },
  { title:"Youth Educator",          description:"Lead environmental education programs for local schools and youth groups.",            icon:FaGraduationCap, commitment:"4–6 hrs / month",     nextEvent:"Spring semester", spots:6  },
  { title:"Event Support",           description:"Help organise and run environmental events, workshops, and community gatherings.",     icon:FaUsers,         commitment:"As needed",           nextEvent:"Various",         spots:20 },
];

const stats = [
  { value:"2,500+", label:"Active Volunteers", icon:GiTreeGrowth },
  { value:"45,000", label:"Hours Contributed", icon:FaLeaf       },
  { value:"5,000",  label:"Trees Planted",     icon:FaTree       },
  { value:"$500K",  label:"Community Value",   icon:FaHeart      },
];

const ways = [
  {
    title: "Volunteer",
    description: "Join a program and make a direct impact in your community.",
    icon: FaHandsHelping,
    back: "We have 6 active volunteer roles — from beach cleanups to youth education. Browse the opportunities below and hit Sign Up on any role that fits your schedule.",
    action: { label: "See Roles", href: "#volunteer" },
  },
  {
    title: "Donate",
    description: "Support our programs financially and help us expand our initiatives.",
    icon: FaHeart,
    back: "Every dollar goes directly to Port Laken\u2019s environmental programs — funding free compost bins, solar assessments, garden plots, and community events.",
    action: { label: "Donate Now", href: "/donate" },
  },
  {
    title: "Partner With Us",
    description: "Businesses can partner with us for corporate sustainability programs.",
    icon: FaBriefcase,
    back: "Join 20+ local businesses already partnering with us. We offer co-branded events, employee volunteer days, and green certification support.",
    action: { label: "Get in Touch", href: "/contact?subject=partnership" },
  },
  {
    title: "Spread the Word",
    description: "Share our mission with friends, family, and your networks.",
    icon: HiUserGroup,
    back: "Follow us on social, share our events, and tell your neighbours about our programs. Community awareness is one of the most powerful tools we have.",
    action: { label: "Our Mission", href: "/about/mission" },
  },
];

const testimonials = [
  { quote:"Volunteering with the tree planting crew has been incredibly rewarding. Seeing the saplings I planted now providing shade is amazing.", name:"Maria Santos",      role:"Tree Planting Volunteer, 3 years", image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
  { quote:"The recycling ambassador program taught me so much. Now I help my whole neighbourhood recycle correctly!",                             name:"James Chen",        role:"Recycling Ambassador",             image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { quote:"As a retired teacher, leading youth education programs lets me continue making a difference for the next generation.",                 name:"Patricia Williams", role:"Youth Educator Volunteer",         image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
];

const interests = ["Beach Cleanup","Tree Planting","Community Gardens","Recycling","Youth Education","Events"];

function FlipCard({ way }: { way: typeof ways[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{ perspective: 1000, height: 220, cursor: "pointer" }}
    >
      <div style={{
        position: "relative", width: "100%", height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.55s cubic-bezier(0.4,0.2,0.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>
        {/* Front */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden",
          background: "#edf2f7", border: "1px solid #d6dfe8",
          borderRadius: 16, padding: "2rem",
          display: "flex", flexDirection: "column",
        }}>
          <way.icon size={26} style={{ color: GREEN, opacity: 0.8, marginBottom: 20 }} />
          <h3 style={{ fontFamily: "var(--font-playfair, serif)", fontWeight: 700, fontSize: 18, color: "#0f2744", marginBottom: 8 }}>{way.title}</h3>
          <p style={{ fontSize: 13, color: "#4a5f7a", fontWeight: 300, lineHeight: 1.6, flex: 1 }}>{way.description}</p>
          <p style={{ fontSize: 10, color: "#a0adb8", marginTop: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Tap to learn more</p>
        </div>
        {/* Back */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden",
          background: BLUE, borderRadius: 16, padding: "2rem",
          display: "flex", flexDirection: "column",
          transform: "rotateY(180deg)",
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 300, lineHeight: 1.7, flex: 1 }}>{way.back}</p>

        </div>
      </div>
    </div>
  );
}

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

/* ── Signup modal for each volunteer role ── */
type SignupForm = { name: string; email: string; phone: string; message: string };

function SignupModal({ role, onClose }: { role: typeof opportunities[0]; onClose: () => void }) {
  const [form, setForm] = useState<SignupForm>({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) { setError("Please enter your name."); return; }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("Please enter a valid email."); return; }

    // Build mailto link — sends user a confirmation by opening their email client
    const subject = encodeURIComponent(`Volunteer Sign Up: ${role.title}`);
    const body = encodeURIComponent(
      `Hi Port Laken Environmental Team,\n\nI'd like to sign up to volunteer for: ${role.title}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\nAvailability/Notes: ${form.message || "None"}\n\nPlease send me confirmation details.\n\nThank you,\n${form.name}`
    );
    window.location.href = `mailto:volunteer@portlaken.gov?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(112,138,163,0.8)" }} onClick={onClose}>
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{ animation: "mIn .3s ease" }} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-port-mist">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: BLUE }}>
            <role.icon className="text-white" size={18} />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-port-navy" style={{ fontSize: 18 }}>Sign Up</h3>
            <p className="text-xs text-port-slate/60 mt-0.5">{role.title}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-port-frost flex items-center justify-center text-port-slate hover:bg-port-mist transition-colors flex-shrink-0">
            <FaTimes size={12} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center">
            <FaCheckCircle size={48} className="mb-4" style={{ color: GREEN }} />
            <h4 className="font-display font-bold text-port-navy mb-2" style={{ fontSize: 20 }}>You&apos;re signed up!</h4>
            <p className="text-sm text-port-slate font-light leading-relaxed mb-6">
              Your email client should have opened with a pre-filled message to <strong>volunteer@portlaken.gov</strong>. Send it to confirm your spot — we&apos;ll reply within 2 business days.
            </p>
            <p className="text-xs text-port-slate/50 mb-6">
              If your email didn&apos;t open, email us directly at{" "}
              <a href="mailto:volunteer@portlaken.gov" className="underline" style={{ color: BLUE }}>volunteer@portlaken.gov</a>
            </p>
            <button onClick={onClose} className="rounded-full text-white font-semibold text-sm px-8 py-3 transition-opacity hover:opacity-90" style={{ background: BLUE }}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">
                  Full Name <span style={{ color: BLUE }}>*</span>
                </label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:ring-2 transition-all"
                  style={{ ["--tw-ring-color" as string]: BLUE + "33" }}
                  placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">
                  Email <span style={{ color: BLUE }}>*</span>
                </label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:ring-2 transition-all"
                  placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">
                Phone <span className="text-port-slate/40">(optional)</span>
              </label>
              <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:ring-2 transition-all"
                placeholder="(555) 123-4567" />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">
                Availability / Notes <span className="text-port-slate/40">(optional)</span>
              </label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:ring-2 transition-all resize-none"
                placeholder="When are you available? Any questions?" />
            </div>

            {/* Role info summary */}
            <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: "#f0f4f8" }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: GREEN }} />
              <div>
                <p className="text-xs font-semibold text-port-navy">{role.title}</p>
                <p className="text-xs text-port-slate/60">{role.commitment} · Next: {role.nextEvent}</p>
              </div>
            </div>

            {error && <p className="text-sm font-medium" style={{ color: "#e24b4a" }}>{error}</p>}

            <button type="submit" className="w-full rounded-full text-white font-semibold text-sm py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={{ background: BLUE }}>
              Send Sign-Up Email <FaArrowRight size={11} />
            </button>

            <p className="text-xs text-center text-port-slate/40">
              This will open your email client with a pre-filled message to volunteer@portlaken.gov
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

/* ── Main form at the bottom ── */
type MainForm = { name: string; email: string; phone: string; interests: string[]; availability: string; message: string };

export default function GetInvolvedPage() {
  const [signupRole, setSignupRole] = useState<typeof opportunities[0] | null>(null);
  const [form, setForm] = useState<MainForm>({ name:"", email:"", phone:"", interests:[], availability:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggle = (v: string) => setForm(p => ({ ...p, interests: p.interests.includes(v) ? p.interests.filter(i=>i!==v) : [...p.interests, v] }));

  const submitMain = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    if (!form.name.trim()) { setError("Please enter your name."); return; }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("Please enter a valid email."); return; }
    setSubmitting(true);
    try { await new Promise(r => setTimeout(r, 1200)); setSubmitted(true); }
    catch { setError("Something went wrong. Email volunteer@portlaken.gov directly."); }
    finally { setSubmitting(false); }
  };

  return (
    <>
      {/* Signup role modal */}
      {signupRole && <SignupModal role={signupRole} onClose={() => setSignupRole(null)} />}

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
              <span className="inline-block w-8 h-px" style={{ background: GREEN }} />Make a Difference
            </p>
            <h1 className="font-display font-black text-white tracking-tight mb-8" style={{ fontSize: "clamp(52px,7vw,90px)", lineHeight: 0.95 }}>
              Get <em className="italic" style={{ color: GREEN }}>Involved</em>
            </h1>
            <p className="text-white/50 font-light leading-relaxed mb-14 max-w-xl" style={{ fontSize: 16 }}>
              Join thousands of Port Laken residents actively working to protect our environment. Whether you have an hour or a lifetime, there&apos;s a place for you.
            </p>
            <div className="flex gap-4 flex-wrap mb-20">
              <a href="#volunteer" className="inline-flex items-center gap-2 rounded-full text-white text-sm font-semibold transition-colors"
                style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 28px" }}>
                Volunteer Now <FaArrowRight size={11} />
              </a>
              <a href="#signup" className="inline-flex items-center gap-2 rounded-full text-white/70 text-sm font-medium border border-white/20 hover:border-white/50 hover:text-white transition-all" style={{ padding: "14px 28px" }}>
                Sign Up for Updates
              </a>
            </div>
          </Fade>

          <Fade delay={120}>
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-white rounded-2xl overflow-hidden shadow-xl">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center"
                  style={{ padding: "2rem 1rem", borderRight: i < 3 ? "1px solid #d6dfe8" : "none" }}>
                  <s.icon className="mb-3" size={20} style={{ color: GREEN, opacity: 0.8 }} />
                  <p className="font-display font-black text-port-navy mb-1" style={{ fontSize: 26, lineHeight: 1 }}>{s.value}</p>
                  <p className="text-port-slate/55 tracking-wide" style={{ fontSize: 11 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ── WAYS TO HELP — flip cards ── */}
      <section className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-14" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
              How you can <em className="italic" style={{ color: GREEN }}>contribute</em>
            </h2>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ways.map((w, i) => (
              <Fade key={w.title} delay={i * 75}>
                <FlipCard way={w} />
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER OPPORTUNITIES — each Sign Up opens modal ── */}
      <section id="volunteer" className="bg-port-cream scroll-mt-24" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-14" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
              Find your <em className="italic" style={{ color: GREEN }}>role</em>
            </h2>
          </Fade>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {opportunities.map((opp, i) => (
              <Fade key={opp.title} delay={i * 60}>
                <div className="group flex flex-col bg-white rounded-2xl border border-port-mist hover:shadow-md transition-all duration-300 h-full" style={{ padding: "1.75rem" }}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: BLUE }}>
                      <opp.icon className="text-white" size={15} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-port-navy" style={{ fontSize: 15, lineHeight: 1.3 }}>{opp.title}</h3>
                      <p style={{ fontSize: 11, marginTop: 2, color: GREEN }}>{opp.commitment}</p>
                    </div>
                  </div>
                  <p className="text-sm text-port-slate font-light leading-relaxed flex-1 mb-5">{opp.description}</p>
                  <div className="flex items-center gap-5 pt-4 border-t border-port-mist mb-4 text-port-slate/55" style={{ fontSize: 11 }}>
                    <span className="flex items-center gap-1.5"><FaCalendarAlt style={{ color: BLUE }} size={10} />{opp.nextEvent}</span>
                    <span className="flex items-center gap-1.5"><FaUsers style={{ color: BLUE }} size={10} />{opp.spots} spots</span>
                  </div>
                  {/* Opens signup modal for this specific role */}
                  <button onClick={() => setSignupRole(opp)}
                    className="w-full py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 text-center"
                    style={{ background: BLUE }}>
                    Sign Up
                  </button>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
            <h2 className="font-display font-bold text-port-navy tracking-tight mb-14" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
              Hear from our <em className="italic" style={{ color: GREEN }}>community</em>
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Fade key={t.name} delay={i * 100}>
                <div className="flex flex-col bg-port-frost rounded-2xl border border-port-mist h-full" style={{ padding: "2rem" }}>
                  <span className="font-display mb-4 select-none" style={{ fontSize: 56, lineHeight: 1, color: GREEN, opacity: 0.3 }}>&ldquo;</span>
                  <p className="text-sm text-port-slate font-light leading-relaxed italic flex-1 mb-8">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-port-mist">
                    <Image src={t.image} alt={t.name} width={44} height={44} className="rounded-full object-cover flex-shrink-0" />
                    <div>
                      <p className="font-display font-bold text-port-navy" style={{ fontSize: 14 }}>{t.name}</p>
                      <p className="text-port-slate/55" style={{ fontSize: 11 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL SIGNUP FORM ── */}
      <section id="signup" className="bg-port-cream scroll-mt-24" style={{ padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Fade>
              <div className="w-10 h-1 rounded-full mb-8" style={{ background: GREEN }} />
              <h2 className="font-display font-bold text-port-navy tracking-tight mb-6" style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.05 }}>
                Stay in the <em className="italic" style={{ color: GREEN }}>loop</em>
              </h2>
              <p className="text-sm text-port-slate font-light leading-relaxed mb-10">
                Not ready to commit to a role yet? Sign up to receive updates on upcoming volunteer events, new programs, and ways to get involved. We&apos;ll match you with opportunities that fit your schedule.
              </p>
              <a href="mailto:volunteer@portlaken.gov" className="inline-flex items-center gap-3 text-sm text-port-slate hover:text-port-navy transition-colors">
                <span className="w-9 h-9 rounded-full bg-white border border-port-mist flex items-center justify-center flex-shrink-0">
                  <FaEnvelope style={{ color: BLUE }} size={12} />
                </span>
                volunteer@portlaken.gov
              </a>
            </Fade>

            <Fade delay={120}>
              {submitted ? (
                <div className="bg-white rounded-2xl border border-port-mist flex flex-col items-center text-center" style={{ padding: "3rem 2rem" }}>
                  <FaCheckCircle size={48} className="mb-6" style={{ color: GREEN }} />
                  <h3 className="font-display font-bold text-port-navy mb-3" style={{ fontSize: 24 }}>You&apos;re on the list!</h3>
                  <p className="text-sm text-port-slate font-light leading-relaxed mb-8 max-w-xs">
                    Thanks, {form.name.split(" ")[0]}! We&apos;ll be in touch about upcoming opportunities at <strong>{form.email}</strong>.
                  </p>
                  <Link href="/environmental/programs" className="inline-flex items-center gap-2 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{ background: BLUE, padding: "12px 28px" }}>
                    Explore Programs <FaArrowRight size={11} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={submitMain} className="bg-white rounded-2xl border border-port-mist space-y-5" style={{ padding: "2.5rem" }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">Full Name <span style={{ color: BLUE }}>*</span></label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:border-port-sky focus:ring-2 focus:ring-port-sky/10 transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">Email <span style={{ color: BLUE }}>*</span></label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:border-port-sky focus:ring-2 focus:ring-port-sky/10 transition-all"
                        placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-2">Areas of Interest</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map(v => {
                        const on = form.interests.includes(v);
                        return (
                          <button key={v} type="button" onClick={() => toggle(v)}
                            className="inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-all"
                            style={on
                              ? { background: GREEN, color: "white", border: `1px solid ${GREEN}`, padding: "7px 16px" }
                              : { background: "transparent", color: "#4a5f7a", border: "1px solid #d6dfe8", padding: "7px 16px" }}>
                            {on && <FaCheck size={9} />}{v}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">Availability</label>
                    <select value={form.availability} onChange={e => setForm({...form, availability:e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-port-mist text-sm text-port-navy bg-white focus:outline-none focus:border-port-sky focus:ring-2 focus:ring-port-sky/10 transition-all">
                      <option value="">Select your availability</option>
                      <option value="weekday-mornings">Weekday Mornings</option>
                      <option value="weekday-afternoons">Weekday Afternoons</option>
                      <option value="weekday-evenings">Weekday Evenings</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-port-slate mb-1.5">Message <span className="text-port-slate/40">(optional)</span></label>
                    <textarea value={form.message} onChange={e => setForm({...form, message:e.target.value})} rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-port-mist text-sm text-port-navy placeholder:text-port-slate/30 focus:outline-none focus:border-port-sky focus:ring-2 focus:ring-port-sky/10 transition-all resize-none"
                      placeholder="Any questions or additional info…" />
                  </div>

                  {error && <p className="text-sm font-medium" style={{ color: "#e24b4a" }}>{error}</p>}

                  <button type="submit" disabled={submitting}
                    className="w-full rounded-full text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                    style={{ background: BLUE, padding: "14px" }}>
                    {submitting ? "Submitting…" : <> Submit <FaArrowRight size={11} /></>}
                  </button>
                  <p className="text-xs text-center text-port-slate/40">We&apos;ll follow up within 2 business days.</p>
                </form>
              )}
            </Fade>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: BLUE, padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-2xl border border-white/[0.15] relative overflow-hidden" style={{ padding: "3rem" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 85% 50%, rgba(255,255,255,0.08), transparent 65%)" }} />
              <div className="relative max-w-lg">
                <h2 className="font-display font-bold text-white tracking-tight mb-2" style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.1 }}>
                  Every action makes <em className="italic" style={{ color: GREEN }}>a difference</em>
                </h2>
                <p className="text-white/50 font-light text-sm">
                  Questions? Email <a href="mailto:volunteer@portlaken.gov" className="underline" style={{ color: GREEN }}>volunteer@portlaken.gov</a>
                </p>
              </div>
              <div className="relative flex-shrink-0">
                <Link href="/environmental/programs" className="inline-flex items-center gap-2 rounded-full text-port-navy bg-white font-semibold text-sm hover:bg-port-cream transition-colors" style={{ padding: "14px 28px" }}>
                  Explore Our Programs <FaArrowRight size={11} />
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:.45;transform:scale(1.03)} }
        @keyframes mIn   { from{opacity:0;transform:translateY(16px) scale(.97)} to{opacity:1;transform:none} }
      `}</style>
    </>
  );
}