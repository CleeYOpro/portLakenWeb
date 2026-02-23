"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaHeart, FaUsers, FaHandshake, FaHardHat, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaBriefcase,    title: "Recruitment & Hiring",  description: "Attracting and selecting top talent to serve the Port Laken community across all city departments." },
  { icon: FaGraduationCap,title: "Training & Development",description: "Professional growth programs, leadership development, and skills training for all city employees." },
  { icon: FaHeart,        title: "Benefits Administration",description: "Health, dental, vision, and retirement benefits for Port Laken's dedicated municipal workforce." },
  { icon: FaUsers,        title: "Employee Relations",    description: "Fostering a positive, equitable workplace where every employee is heard, respected, and supported." },
  { icon: FaHandshake,    title: "Labor Relations",       description: "Negotiating and administering collective bargaining agreements with city employee organizations." },
  { icon: FaHardHat,      title: "Workplace Safety",      description: "Compliance, risk management, and safety programs that protect every member of our team." },
];

const stats = [
  { value: "650+", label: "City Employees" },
  { value: "12",   label: "Departments Served" },
  { value: "96%",  label: "Retention Rate" },
  { value: "40+",  label: "Benefits Programs" },
];

/* ── Fixed node positions for the SVG network (percentages) ── */
const NODES = [
  { id: 0, x: 50, y: 14, label: "HR Director",      radius: 20 },
  { id: 1, x: 18, y: 38, label: "Recruitment",      radius: 16, svcIdx: 0 },
  { id: 2, x: 50, y: 40, label: "Training",          radius: 16, svcIdx: 1 },
  { id: 3, x: 82, y: 38, label: "Benefits",          radius: 16, svcIdx: 2 },
  { id: 4, x: 14, y: 68, label: "Emp. Relations",   radius: 14, svcIdx: 3 },
  { id: 5, x: 38, y: 70, label: "Labor Rel.",       radius: 14, svcIdx: 4 },
  { id: 6, x: 62, y: 70, label: "Safety",            radius: 14, svcIdx: 5 },
  { id: 7, x: 86, y: 68, label: "Payroll",           radius: 12 },
  { id: 8, x: 28, y: 88, label: "Onboarding",        radius: 11 },
  { id: 9, x: 72, y: 88, label: "Compliance",        radius: 11 },
];

const EDGES = [
  [0,1],[0,2],[0,3],[1,4],[1,5],[2,5],[2,6],[3,6],[3,7],[4,8],[5,8],[6,9],[7,9],
];

/* =====================
   PEOPLE NETWORK — Live animated SVG node graph
   Nodes and edges assemble on scroll entry.
   Nodes pulse continuously; edges draw in with stroke-dashoffset.
   Right side shows the active service detail.
===================== */
function PeopleNetworkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [networkProgress, setNetworkProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 },
    );
    obs.observe(el);

    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (-top + window.innerHeight * 0.3) / (height * 0.7)));
      setNetworkProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const activeService = activeNode !== null
    ? services[NODES[activeNode]?.svcIdx ?? -1] ?? null
    : null;

  return (
    <section ref={sectionRef} className="py-20 bg-port-navy overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(107,155,195,0.2) 39px,rgba(107,155,195,0.2) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(107,155,195,0.2) 39px,rgba(107,155,195,0.2) 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-14"
        >
          <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">The People Network</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-port-cream mb-2">
            HR <em>Services</em>
          </h2>
          <div className="w-12 h-[3px] bg-purple-500" />
          <p className="mt-4 text-port-ice/55 text-sm max-w-md">
            Hover any node to explore. Scroll to watch the network assemble.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* SVG Network */}
          <div className="relative aspect-square max-w-lg w-full mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Edges */}
              {EDGES.map(([a, b], i) => {
                const na = NODES[a], nb = NODES[b];
                const x1 = (na.x / 100) * 400, y1 = (na.y / 100) * 400;
                const x2 = (nb.x / 100) * 400, y2 = (nb.y / 100) * 400;
                const len = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
                const edgeProgress = Math.max(0, Math.min(1, (networkProgress - i * 0.05) / 0.3));
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={activeNode === a || activeNode === b ? "#c4b5fd" : "#6b9bc3"}
                    strokeWidth={activeNode === a || activeNode === b ? 1.5 : 0.8}
                    strokeDasharray={len}
                    strokeDashoffset={len - edgeProgress * len}
                    opacity={0.35 + (activeNode === a || activeNode === b ? 0.5 : 0)}
                    style={{ transition: "opacity 0.3s, stroke 0.3s, stroke-width 0.3s" }}
                  />
                );
              })}

              {/* Nodes */}
              {NODES.map((node, i) => {
                const cx = (node.x / 100) * 400;
                const cy = (node.y / 100) * 400;
                const nodeProgress = Math.max(0, Math.min(1, (networkProgress - i * 0.06) / 0.25));
                const isActive = activeNode === i;
                const hasSvc = node.svcIdx !== undefined;
                return (
                  <g
                    key={node.id}
                    style={{ cursor: hasSvc ? "pointer" : "default" }}
                    onClick={() => hasSvc && setActiveNode(isActive ? null : i)}
                    onMouseEnter={() => hasSvc && setActiveNode(i)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    {/* Pulse ring */}
                    {visible && nodeProgress > 0.5 && (
                      <circle cx={cx} cy={cy} r={node.radius + 6} fill="none"
                        stroke={isActive ? "#c4b5fd" : "#7c3aed"}
                        strokeWidth={1}
                        opacity={isActive ? 0.6 : 0.2}
                        style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
                      />
                    )}
                    {/* Main circle */}
                    <circle
                      cx={cx} cy={cy}
                      r={node.radius * nodeProgress}
                      fill={isActive ? "#7c3aed" : i === 0 ? "#4a6d8c" : "#2d4a6f"}
                      stroke={isActive ? "#c4b5fd" : "#6b9bc3"}
                      strokeWidth={isActive ? 2 : 1}
                      opacity={0.9}
                      style={{ transition: "fill 0.2s, stroke 0.2s, r 0.1s" }}
                    />
                    {/* Label */}
                    {nodeProgress > 0.7 && (
                      <text
                        x={cx} y={cy + node.radius + 12}
                        textAnchor="middle"
                        fill={isActive ? "#c4b5fd" : "#a8c5db"}
                        fontSize={8.5}
                        fontFamily="sans-serif"
                        fontWeight={isActive ? "bold" : "normal"}
                        opacity={nodeProgress}
                      >
                        {node.label}
                      </text>
                    )}
                    {/* Center dot */}
                    {nodeProgress > 0.5 && (
                      <circle cx={cx} cy={cy} r={3} fill={isActive ? "#e9d5ff" : "#a8c5db"} opacity={0.8} />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Pulse ring keyframe (inline style) */}
            <style>{`
              @keyframes pulse-ring {
                0%,100% { opacity:0.15; transform:scale(1); }
                50% { opacity:0.4; transform:scale(1.15); }
              }
            `}</style>
          </div>

          {/* Detail panel */}
          <div className="min-h-[340px] flex flex-col justify-center">
            {activeService ? (
              <motion.div
                key={activeService.title}
                initial={{ opacity:0, x:30 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-30 }}
                transition={{ duration:0.35 }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-800/40 border border-purple-500/30 flex items-center justify-center mb-6">
                  <activeService.icon className="text-purple-300 text-2xl" />
                </div>
                <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Service Detail</p>
                <h3 className="font-display text-3xl font-bold text-port-cream mb-4">{activeService.title}</h3>
                <p className="text-port-ice/65 leading-relaxed">{activeService.description}</p>
                <div className="mt-6 w-8 h-[2px] bg-purple-500" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ delay:0.4 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {services.map((svc, i) => {
                    const Icon = svc.icon;
                    return (
                      <motion.div
                        key={svc.title}
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity: visible ? 1:0, y: visible ? 0:20 }}
                        transition={{ delay: 0.3 + i * 0.1, duration:0.4 }}
                        className="bg-port-slate/30 border border-port-sky/10 rounded-xl p-4 hover:border-purple-500/30 transition-colors"
                      >
                        <Icon className="text-purple-400 text-xl mb-2" />
                        <div className="text-port-cream text-sm font-semibold leading-tight">{svc.title}</div>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="mt-5 text-port-ice/35 text-xs">← Hover a node to explore</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================
   PAGE
===================== */
export default function HumanResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
          alt="Human Resources" fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-port-navy/95 via-port-navy/50 to-transparent" />
        <div className="absolute inset-0 opacity-15 bg-[#7c3aed]" style={{ mixBlendMode:"multiply" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#7c3aed]/30 border border-[#a78bfa]/50">
            People & Culture
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Human<br /><em className="text-[#c4b5fd]">Resources</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Empowering Port Laken&apos;s workforce — recruiting great people, investing in their growth, and building a city team to be proud of.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-port-navy/90 py-10 border-b border-port-sky/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#c4b5fd] mb-1">{s.value}</div>
              <div className="text-port-ice/40 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ★ PEOPLE NETWORK — signature scroll effect */}
      <PeopleNetworkSection />

      {/* PHOTO + TEXT */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-[0.25em] mb-4">Our People</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6">
              A Team That <em>Serves Together</em>
            </h3>
            <p className="text-port-slate/80 leading-relaxed mb-4">
              Port Laken&apos;s greatest asset is its people. Our Human Resources team works every day to recruit exceptional talent, support employee wellbeing, and create a workplace culture built on respect and purpose.
            </p>
            <p className="text-port-slate/80 leading-relaxed">
              Whether you&apos;re exploring a career with the city or a current employee seeking support, we&apos;re here for you.
            </p>
          </div>
          <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900" alt="City employees" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-port-navy border-t border-port-sky/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our <em>Team</em>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Explore open positions, learn about city benefits, and start a meaningful career serving Port Laken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-[#7c3aed] text-white rounded-2xl font-bold hover:scale-105 transition-all border border-[#c4b5fd]/30">
              View Open Positions
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-port-slate/60 border border-port-sky/20 text-white rounded-2xl font-bold hover:bg-port-slate transition-all">
              Contact HR Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
