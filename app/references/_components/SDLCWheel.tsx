"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGoogleDrive, FaGithub, FaFigma, FaFlask, FaSearch, FaTimes } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const STEPS = [
  {
    id: 1, label: "Planning", color: "#8B1A2B", icon: FaGoogleDrive,
    short: "Locked in the concept, goals, and core features as a team.",
    bullets: [
      "Chose Port Laken and defined the city concept",
      "Outlined key features and site requirements",
      "Assigned roles and coordinated in a shared doc",
    ],
    link: null,
  },
  {
    id: 2, label: "Analysis", color: "#1e3a5f", icon: FaSearch,
    short: "Studied real city sites and figured out what users actually need.",
    bullets: [
      "Analyzed real city websites for structure and UX",
      "Defined users like residents, visitors, and admins",
      "Mapped required pages like maps, departments, and events",
    ],
    link: null,
  },
  {
    id: 3, label: "Design", color: "#2980b9", icon: FaFigma,
    short: "Built a full design system and planned every page in Figma.",
    bullets: [
      "Designed layouts and flows in Figma",
      "Created a consistent Pacific Northwest design system",
      "Built core UI like timeline, maps, and resource cards",
    ],
    link: { label: "See Design Philosophy", href: "#design" },
  },
  {
    id: 4, label: "Implementation", color: "#1a9e8f", icon: FaGithub,
    short: "Turned designs into a full working app with modern tools.",
    bullets: [
      "Built with Next.js, React, TypeScript, and Tailwind",
      "Implemented Firebase Auth and Firestore data systems",
      "Developed features like maps, resources, and admin tools",
    ],
    link: { label: "See Technical Architecture", href: "#tech-architecture" },
  },
  {
    id: 5, label: "Testing", color: "#e6a817", icon: FaFlask,
    short: "Tested everything to make sure the whole system worked smoothly.",
    bullets: [
      "Tested auth flows and user interactions",
      "Verified APIs and email functionality",
      "Fixed bugs in navigation and data consistency",
    ],
    link: null,
  },
  {
    id: 6, label: "Maintenance", color: "#e07b1a", icon: SiVercel,
    short: "Deployed and finalized the project for TSA submission.",
    bullets: [
      "Deployed with Vercel using GitHub integration",
      "Prepared a complete and stable final build",
    ],
    link: null,
  },
];
const N = STEPS.length;
// Each segment spans exactly 360/6 = 60 degrees with a tiny gap
const SLICE = 360 / N;
const GAP = 2; // degrees gap between segments

// SVG canvas
const SIZE = 460;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R_OUT = 218; // outer radius — nearly fills canvas
const R_IN  = 68;  // inner radius — small center

function toRad(deg: number) { return (deg * Math.PI) / 180; }

function polar(angleDeg: number, radius: number) {
  // 0 deg = top, clockwise
  const rad = toRad(angleDeg - 90);
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function segPath(i: number) {
  const start = i * SLICE + GAP / 2;
  const end   = (i + 1) * SLICE - GAP / 2;
  const o1 = polar(start, R_OUT);
  const o2 = polar(end,   R_OUT);
  const i1 = polar(start, R_IN);
  const i2 = polar(end,   R_IN);
  const large = (SLICE - GAP) > 180 ? 1 : 0;
  return `M${o1.x},${o1.y} A${R_OUT},${R_OUT} 0 ${large},1 ${o2.x},${o2.y} L${i2.x},${i2.y} A${R_IN},${R_IN} 0 ${large},0 ${i1.x},${i1.y}Z`;
}

// Mid-angle of segment i (static frame, 0=top, clockwise)
function midAngle(i: number) {
  return i * SLICE + SLICE / 2;
}

// Position at mid-radius for label placement
function labelPos(i: number) {
  return polar(midAngle(i), (R_OUT + R_IN) / 2);
}

function textRotation(_i: number) {
  return 0; // always upright — counter-rotation handles orientation
}

export default function SDLCWheel() {
  const [active, setActive] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [is3D, setIs3D] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rafRef   = useRef<number | null>(null);
  const rotRef   = useRef(0);
  const pauseRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    let lastFlush = 0;
    const tick = (ts: number) => {
      if (!pauseRef.current) {
        rotRef.current = (rotRef.current + 0.22) % 360;
        if (ts - lastFlush > 30) {
          setRotation(rotRef.current);
          lastFlush = ts;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [mounted]);

  useEffect(() => {
    pauseRef.current = active !== null;
  }, [active]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * -14, y: dx * 14 });
    setIs3D(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIs3D(false);
  };

  const handleSegClick = (id: number) => {
    setActive((p) => (p === id ? null : id));
  };

  const handleClose = () => setActive(null);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.stopPropagation();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const focusedStep = STEPS.find((s) => s.id === active) ?? null;

  if (!mounted) return null;

  // Diameter for the info circle — slightly smaller than wheel
  const CIRCLE_SIZE = 400;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-port-mist/40" id="sdlc">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px -80px 0px", amount: 0.2 }}
          transition={{ type: "tween", duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-port-navy mb-2">
            Software Development Life Cycle
          </h2>
          <p className="text-port-slate text-sm mb-10 max-w-xl">
            How we took Port Laken from idea to deployed product. Click each step.
          </p>
        </motion.div>

        {/* Stack vertically on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">

          {/* ── Wheel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px 0px -80px 0px", amount: 0.2 }}
            transition={{ type: "tween", duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
          <div
            ref={containerRef}
            className="shrink-0 select-none"
            style={{ perspective: "900px", width: SIZE, height: SIZE, maxWidth: "100%" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                width: "100%", height: "100%",
                transformStyle: "preserve-3d",
                transform: is3D
                  ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                  : "rotateX(0deg) rotateY(0deg) scale(1)",
                transition: is3D ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
              }}
            >
              <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                width="100%"
                height="100%"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: `${CX}px ${CY}px`,
                  display: "block",
                }}
              >
                {STEPS.map((step, i) => {
                  const isActive = active === step.id;
                  const lp = labelPos(i);

                  return (
                    <g key={step.id}>
                      {/* Segment */}
                      <path
                        d={segPath(i)}
                        fill={step.color}
                        opacity={active !== null && active !== step.id ? 0.3 : 1}
                        style={{
                          filter: isActive ? `drop-shadow(0 0 16px ${step.color}cc)` : "none",
                          transform: isActive ? "scale(1.05)" : "scale(1)",
                          transformOrigin: `${CX}px ${CY}px`,
                          transition: "all 0.25s ease",
                          cursor: "pointer",
                        }}
                        onClick={() => handleSegClick(step.id)}
                      />

                      {/* Label — orbits with wheel, but counter-rotates to stay upright */}
                      <g
                        transform={`translate(${lp.x},${lp.y}) rotate(${-rotation})`}
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        <text
                          x={0} y={-10}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="18"
                          fontWeight="900"
                          fontFamily="system-ui, sans-serif"
                        >
                          {step.id}
                        </text>
                        <text
                          x={0} y={12}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="13"
                          fontWeight="700"
                          fontFamily="system-ui, sans-serif"
                          letterSpacing="0.8"
                        >
                          {step.label.toUpperCase()}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Center — always counter-rotates, shows logo */}
                <g
                  transform={`translate(${CX},${CY}) rotate(${-rotation})`}
                  style={{ pointerEvents: "none" }}
                >
                  <circle cx={0} cy={0} r={R_IN - 4} fill="white" />
                  <image
                    href="/pl.svg"
                    x={-(R_IN - 14)}
                    y={-(R_IN - 14)}
                    width={(R_IN - 14) * 2}
                    height={(R_IN - 14) * 2}
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>
              </svg>
            </div>
          </div>
          </motion.div>

          {/* ── Info circle ── */}
          <motion.div
            className="shrink-0 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px 0px -80px 0px", amount: 0.2 }}
            transition={{ type: "tween", duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              maxWidth: "100%",
            }}
          >
            {/* Circle border */}
            <div
              className="absolute inset-0 rounded-full transition-all duration-500"
              style={{
                border: focusedStep
                  ? `3px solid ${focusedStep.color}55`
                  : "3px solid #d4e4ed",
                background: focusedStep
                  ? `${focusedStep.color}08`
                  : "#f8fafb",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 w-full h-full">
              {!focusedStep ? (
                <p className="font-display text-3xl sm:text-4xl text-port-mist/50 leading-snug select-none">
                  Click<br />each step
                </p>
              ) : (
                <>
                  {/* X button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-8 right-8 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: focusedStep.color + "22", color: focusedStep.color }}
                    aria-label="Close"
                  >
                    <FaTimes className="text-sm" />
                  </button>

                  {/* Icon + title */}
                  <motion.div
                    key={focusedStep.id}
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-200 hover:scale-110"
                      style={{ background: focusedStep.color }}
                    >
                      <focusedStep.icon className="text-white text-xl" />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: focusedStep.color }}
                    >
                      Step {focusedStep.id}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-port-navy mb-3 leading-tight">
                      {focusedStep.label}
                    </h3>
                    <p className="text-port-slate text-xs mb-3 max-w-[260px]">{focusedStep.short}</p>

                    <ul className="space-y-1 mb-4 text-left max-w-[260px] w-full">
                      {focusedStep.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08, duration: 0.3 }}
                          className="flex items-start gap-2 text-xs text-port-slate"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: focusedStep.color }}
                          />
                          {b}
                        </motion.li>
                      ))}
                    </ul>

                    {focusedStep.link && (
                      <button
                        onClick={(e) => handleLinkClick(e, focusedStep.link!.href)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
                        style={{ borderColor: focusedStep.color, color: focusedStep.color }}
                      >
                        {focusedStep.link.label} ↓
                      </button>
                    )}
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
