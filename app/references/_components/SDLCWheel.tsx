"use client";

import { useState, useEffect, useRef } from "react";
import { FaGoogleDrive, FaGithub, FaFigma, FaFlask, FaSearch, FaTimes } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const STEPS = [
  {
    id: 1, label: "Planning", color: "#8B1A2B", icon: FaGoogleDrive,
    short: "Defined the concept, goals, and features as a team.",
    bullets: [
      "Shared Google Doc for coordination",
      "Decided on Port Laken as the fictional city concept",
      "Defined project goals and target features",
      "Assigned roles across the team",
    ],
    link: null,
  },
  {
    id: 2, label: "Analysis", color: "#1e3a5f", icon: FaSearch,
    short: "Researched real city sites and defined user needs.",
    bullets: [
      "Studied real city websites (Seattle, Kirkland, Dubai)",
      "Defined user needs and personas",
      "Broke down required pages: departments, ordinances, maps, events",
      "In-depth research into municipal UX patterns",
    ],
    link: null,
  },
  {
    id: 3, label: "Design", color: "#2980b9", icon: FaFigma,
    short: "Built the design system and laid out every page in Figma.",
    bullets: [
      "Designed layouts in Figma",
      "Built a Pacific Northwest design system (colors, fonts, vibe)",
      "Custom palette: port-navy, port-sky, port-frost, etc.",
      "Created scroll timeline, full-screen map UI, resource cards",
      "Focused on accessibility, clean navigation, realistic municipal feel",
    ],
    link: { label: "See Design Philosophy", href: "#design" },
  },
  {
    id: 4, label: "Implementation", color: "#1a9e8f", icon: FaGithub,
    short: "Built everything with Next.js, React, TypeScript, and Firebase.",
    bullets: [
      "Shared GitHub repo with separate branches and PRs",
      "Next.js + React + TypeScript + Tailwind CSS",
      "Firebase Auth (login, signup, Google)",
      "Firestore for user data, alerts, and newsletter",
      "Resource directory, Maps page, Admin broadcast system",
      "API routes: /api/send-email, /api/admin/broadcast",
    ],
    link: { label: "See Technical Architecture", href: "#tech-architecture" },
  },
  {
    id: 5, label: "Testing", color: "#e6a817", icon: FaFlask,
    short: "Tested auth, resource interactions, and all API routes.",
    bullets: [
      "Tested auth flow: sign in, create account, Google sign-in",
      "Resource interactions: click card, map updates",
      "API routes: email sending and broadcast",
      "Integrated Google Maps embed and static maps",
      "Integrated Resend for transactional emails",
      "Fixed navigation mismatches and data consistency issues",
    ],
    link: null,
  },
  {
    id: 6, label: "Maintenance", color: "#e07b1a", icon: SiVercel,
    short: "Deployed on Vercel. TSA project, so no ongoing maintenance.",
    bullets: [
      "Deployed with Vercel (automatic from GitHub)",
      "Environment variables managed via Vercel dashboard",
      "No ongoing maintenance required — TSA competition project",
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
const R_OUT = 210; // outer radius
const R_IN  = 100; // inner radius

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

// Text rotation: face outward from center
// The text should read outward — rotate so baseline points toward center
// For top half (0-180): rotate = midAngle - 90 (text reads left-to-right outward)
// For bottom half (180-360): flip 180 so text doesn't appear upside down
function textRotation(i: number) {
  const ma = midAngle(i);
  // Standard: align text along the radius pointing outward
  let rot = ma - 90;
  // Bottom half: flip so text is readable
  if (ma > 180) rot += 180;
  return rot;
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

  // Diameter for the info circle — match wheel size
  const CIRCLE_SIZE = SIZE;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-port-mist/40" id="sdlc">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-port-navy mb-2">
          Software Development Life Cycle
        </h2>
        <p className="text-port-slate text-sm mb-10 max-w-xl">
          How we took Port Laken from idea to deployed product. Click each step.
        </p>

        {/* Stack vertically on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">

          {/* ── Wheel ── */}
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
                  const tr = textRotation(i);

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

                      {/* Label — counter-rotates so it stays upright, faces outward */}
                      <g
                        transform={`translate(${lp.x},${lp.y}) rotate(${-rotation + tr})`}
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

                {/* Center circle — counter-rotates */}
                <g
                  transform={`translate(${CX},${CY}) rotate(${-rotation})`}
                  style={{ pointerEvents: "none" }}
                >
                  <circle cx={0} cy={0} r={R_IN - 5} fill="white" />
                  <text y={-16} textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">THE</text>
                  <text y={0}   textAnchor="middle" fill="#1e3a5f" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif">SOFTWARE</text>
                  <text y={16}  textAnchor="middle" fill="#1e3a5f" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif">DEVELOPMENT</text>
                  <text y={32}  textAnchor="middle" fill="#6b9bc3" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">CYCLE</text>
                </g>
              </svg>
            </div>
          </div>

          {/* ── Info circle ── */}
          <div
            className="shrink-0 relative flex items-center justify-center"
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
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
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
                      <li key={i} className="flex items-start gap-2 text-xs text-port-slate">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: focusedStep.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {focusedStep.link && (
                    <button
                      onClick={(e) => handleLinkClick(e, focusedStep.link!.href)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 hover:opacity-70"
                      style={{ borderColor: focusedStep.color, color: focusedStep.color }}
                    >
                      {focusedStep.link.label} ↓
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
