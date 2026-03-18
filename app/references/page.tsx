"use client";

import Image from "next/image";
import {
  WeightedScrollProvider,
  WeightedScrollLayer,
} from "@/app/components/WeightedScroll";
import {
  ScrollRevealText,
  ScrollRevealImage,
  ScrollRevealStagger,
  ScrollRevealStaggerItem,
  ScrollReveal,
} from "@/app/components/ScrollReveal";
import {
  FaClipboardList,
  FaCheckCircle,
  FaBook,
  FaFilePdf,
  FaMapMarkedAlt,
  FaAnchor,
  FaCode,
  FaEnvelope,
  FaArrowRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGoogle,
  SiVercel,
  SiNetlify,
  SiNodedotjs,
} from "react-icons/si";

const referenceCards = [
  {
    icon: FaClipboardList,
    title: "Worklog",
    description:
      "TSA Webmaster work log for 2025–26 (Team 2014-2, signed).",
    pdfHref: "/worklog.pdf",
    enabled: true,
  },
  {
    icon: FaCheckCircle,
    title: "Copyright Checklist",
    description:
      "25–26 Webmaster copyright checklist (Team 2014-2, signed).",
    pdfHref: "/copyright.pdf",
    enabled: true,
  },
  {
    icon: FaBook,
    title: "Sources Used",
    description:
      "Port Laken images, research, and website links references (Team 2014-2).",
    pdfHref: "/sources.pdf",
    enabled: true,
  },
];

export default function ReferencesPage() {
  return (
    <WeightedScrollProvider>
    <WeightedScrollLayer>
    <>
      {/* Hero: split layout */}
      <section className="pt-28 pb-16 min-h-[40vh] flex flex-col justify-end bg-port-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-port-sky blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-port-ice blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
          <ScrollRevealText direction="up">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              References & Documentation
            </h1>
            <p className="mt-5 text-port-mist/90 text-lg sm:text-xl max-w-2xl">
              How we approached the project and the technical decisions behind it.
            </p>
          </ScrollRevealText>
        </div>
      </section>

      {/* PDF cards: bento strip */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7" staggerChildren={0.1} delayChildren={0.05}>
            {referenceCards.map((card) => (
              <ScrollRevealStaggerItem key={card.title}>
                <div className="group relative bg-port-frost/50 border border-port-mist/60 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:border-port-sky/30 transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 bg-port-sky/20 rounded-xl flex items-center justify-center mb-5 text-port-sky">
                    <card.icon className="text-xl" />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-port-navy mb-2">
                    {card.title}
                  </h2>
                  <p className="text-port-slate text-sm leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>
                  {card.enabled ? (
                    <a
                      href={card.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-port-sky text-white rounded-xl font-medium text-sm hover:bg-port-sky/90 transition-colors"
                    >
                      <FaFilePdf className="text-sm" />
                      View PDF
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-300 text-gray-500 rounded-xl font-medium text-sm cursor-not-allowed"
                    >
                      <FaFilePdf className="text-sm" />
                      Coming Soon
                    </button>
                  )}
                </div>
              </ScrollRevealStaggerItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Narrative and Map: unified layout (same section size and style) */}
      <section className="py-14 lg:py-20 bg-port-frost/50 border-y border-port-mist/40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14 lg:space-y-16">
          <ScrollRevealText direction="right">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-port-sky/20 flex items-center justify-center text-port-navy shrink-0">
                <FaAnchor className="text-lg" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy mb-4">
                  Narrative and intent
                </h2>
                <div className="space-y-4 text-port-slate leading-relaxed text-base">
                  <p>
                    We wanted the site to feel like a real city portal, not a generic template. So we gave it a single, coherent place: a coastal city anchored in the Pacific Northwest. Every design choice (palette, imagery, copy, maps) serves that one narrative. The goal was to show that a fictional project can be built with the same rigor as a real one, so judges can evaluate structure, accessibility, and technical execution in a believable context.
                  </p>
                  <p>
                    We did not invent a city that could be anywhere. We invented one that clearly belongs somewhere, so the references, the map, and the technical stack all tell the same story.
                  </p>
                </div>
              </div>
            </div>
          </ScrollRevealText>

          <ScrollRevealText direction="left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-port-sky/20 flex items-center justify-center text-port-navy shrink-0">
                <FaMapMarkedAlt className="text-lg" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy mb-4">
                  Map and geography
                </h2>
                <p className="text-port-slate leading-relaxed text-base">
                  The Maps & Transport page uses a full-screen Google Maps embed. We set the default query to Port Angeles, WA, so the demo geography matches the narrative. A carousel of featured resources updates the map query on click so users see how “click a place, jump to it on the map” would work. Resource directory popups use a Google Static Map with the resource address and a Get Directions button. Resource data includes mapCoordinates for future per-pin mapping. We used Google (embed plus static) so the experience is familiar and we did not have to maintain custom tiles or geocoding.
                </p>
              </div>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Technical: flowcharts + specific details, unique layout */}
      <section className="py-16 lg:py-24 bg-port-navy text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollRevealText direction="up">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <FaCode className="text-xl" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold">
                Technical architecture
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Request flow diagram */}
              <div className="space-y-6">
                <h3 className="font-display text-lg font-semibold text-port-ice">
                  Request flow
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Browser</span>
                  <FaLongArrowAltRight className="text-port-sky/80 shrink-0" />
                  <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Next.js App Router</span>
                  <FaLongArrowAltRight className="text-port-sky/80 shrink-0" />
                  <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Page or API route</span>
                  <FaLongArrowAltRight className="text-port-sky/80 shrink-0" />
                  <span className="arch-hover px-3 py-2 rounded-lg bg-port-sky/30 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Firebase / Resend</span>
                </div>
                <p className="text-port-mist/80 text-sm leading-relaxed">
                  All routes live under app/. layout.tsx wraps the app with AuthProvider and renders Navbar and Footer. Pages are server or client components; API routes are in app/api/.
                </p>
              </div>

              {/* Auth flow diagram */}
              <div className="space-y-6">
                <h3 className="font-display text-lg font-semibold text-port-ice">
                  Auth and user data
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Sign in / Sign up / Google</span>
                    <FaArrowRight className="text-port-sky/80" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Firebase Auth</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">onAuthStateChanged</span>
                    <FaArrowRight className="text-port-sky/80" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">user state in AuthContext</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">New user</span>
                    <FaArrowRight className="text-port-sky/80" />
                    <span className="arch-hover px-3 py-2 rounded-lg bg-port-sky/30 transition-transform duration-200 hover:scale-110 origin-center cursor-default">setDoc(users/{`{uid}`})</span>
                  </div>
                </div>
                <p className="text-port-mist/80 text-sm leading-relaxed">
                  Each user doc stores email, newsletterSubscribed, alerts.emergency, and preferences. Sign up sends email verification and writes the initial doc; Google sign-in creates the doc on first login if missing.
                </p>
              </div>
            </div>

            {/* API table */}
            <div className="mt-14">
              <h3 className="font-display text-lg font-semibold text-port-ice mb-4">
                API routes
              </h3>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-port-ice font-medium">Route</th>
                      <th className="py-3 px-4 text-port-ice font-medium">Method</th>
                      <th className="py-3 px-4 text-port-ice font-medium">Body / params</th>
                      <th className="py-3 px-4 text-port-ice font-medium">Behavior</th>
                    </tr>
                  </thead>
                  <tbody className="text-port-mist/90">
                    <tr className="border-b border-white/5 transition-transform duration-200 hover:scale-[1.02] origin-left">
                      <td className="py-3 px-4 font-mono">/api/send-email</td>
                      <td className="py-3 px-4">POST</td>
                      <td className="py-3 px-4">email, subject, html</td>
                      <td className="py-3 px-4">Validates, then Resend.send(). Used by contact and broadcasts.</td>
                    </tr>
                    <tr className="border-b border-white/5 transition-transform duration-200 hover:scale-[1.02] origin-left">
                      <td className="py-3 px-4 font-mono">/api/spotlight-data</td>
                      <td className="py-3 px-4">GET</td>
                      <td className="py-3 px-4">none</td>
                      <td className="py-3 px-4">Returns spotlight entries array for home/calendar.</td>
                    </tr>
                    <tr className="border-b border-white/5 transition-transform duration-200 hover:scale-[1.02] origin-left">
                      <td className="py-3 px-4 font-mono">/api/admin/broadcast</td>
                      <td className="py-3 px-4">POST</td>
                      <td className="py-3 px-4">?secret=, campaignType, subject, html</td>
                      <td className="py-3 px-4">Checks secret. Queries Firestore (newsletterSubscribed or alerts.emergency), then sends one email per user via Resend.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Broadcast flow diagram */}
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-display text-lg font-semibold text-port-ice mb-4">
                Broadcast flow
              </h3>
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 text-sm">
                <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">POST /api/admin/broadcast?secret=</span>
                <FaArrowRight className="text-port-sky/80 shrink-0" />
                <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Validate secret</span>
                <FaArrowRight className="text-port-sky/80 shrink-0" />
                <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Firestore query (newsletter or alert)</span>
                <FaArrowRight className="text-port-sky/80 shrink-0" />
                <span className="arch-hover px-3 py-2 rounded-lg bg-white/10 transition-transform duration-200 hover:scale-110 origin-center cursor-default">getDocs(users)</span>
                <FaArrowRight className="text-port-sky/80 shrink-0" />
                <span className="arch-hover px-3 py-2 rounded-lg bg-port-sky/30 transition-transform duration-200 hover:scale-110 origin-center cursor-default">Resend per user email</span>
              </div>
            </div>

            {/* Stack icons: single row, no extra copy */}
            <div className="mt-14 pt-10 border-t border-white/10">
              <p className="text-port-mist/70 text-sm mb-4">Stack</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiNextdotjs className="text-xl" /> Next.js 16
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiReact className="text-xl" /> React 18
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiTypescript className="text-xl" /> TypeScript
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiTailwindcss className="text-xl" /> Tailwind
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiFirebase className="text-xl" /> Firebase
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiGoogle className="text-xl" /> Google Maps
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <FaEnvelope className="text-lg" /> Resend
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiVercel className="text-xl" /> Vercel Analytics
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiNetlify className="text-xl" /> Netlify
                </span>
                <span className="arch-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 transition-transform duration-200 hover:scale-110 origin-center cursor-default">
                  <SiNodedotjs className="text-xl" /> Node
                </span>
              </div>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Disclaimer + Visual Inspiration (unchanged content, no repetition) */}
      <section className="py-16 md:py-24 bg-port-frost/40 border-t border-port-mist/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16 md:space-y-20">
          <ScrollRevealText direction="up">
          <div className="bg-white rounded-2xl border border-port-mist/40 shadow-sm p-8 md:p-10 lg:p-12">
            <div className="space-y-8 max-w-4xl">
              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-port-navy">
                Disclaimer & Context
              </h3>

              <div className="space-y-6 text-port-slate text-base sm:text-lg leading-relaxed">
                <p>
                  This website and all associated content is a fictional project created solely for educational, design, and portfolio demonstration purposes.
                </p>

                <p>
                  Port Laken is not a real location. It is a completely invented coastal city.
                </p>

                <p>
                  The overall aesthetic, atmosphere, and visual language are inspired by real communities in Washington State, including:
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 pl-6 sm:pl-8 list-disc marker:text-port-navy">
                  <li>Port Angeles</li>
                  <li>Bellingham</li>
                  <li>Bremerton</li>
                  <li>Aberdeen</li>
                  <li>Sequim</li>
                  <li>Anacortes</li>
                </ul>

                <p>
                  Imagery and descriptions reference common characteristics of Pacific Northwest coastal regions: misty evergreen forests, rocky and rugged shorelines, active working harbors, small-town maritime culture, and contemporary community elements.
                </p>

                <p className="text-sm text-port-slate/80 pt-4 border-t border-port-mist/30">
                  No real-world people, businesses, organizations, events, or specific locations are depicted, referenced, or intended to be represented. All content is original or used within the scope of fair-use/educational purposes.
                </p>
              </div>
            </div>
          </div>
          </ScrollRevealText>

          <ScrollRevealText direction="up">
          <div className="space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy">
              Visual Inspiration
            </h4>
            <p className="text-port-slate text-sm max-w-2xl">
              Reference imagery from Washington State coastal communities. Each card links to the source.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <a
                href="https://olympicpeninsula.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://portofpa.com/wp-content/uploads/2022/03/harboroverview.jpg"
                    alt="Port Angeles harbor with mountains in background"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Working harbor & mountain backdrop</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Port Angeles</p>
                  <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                </div>
              </a>

              <a
                href="https://unsplash.com/s/photos/bellingham-waterfront"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://bellingham.objects.liquidweb.services/photos/1164-oyster-dome-whatcom-county-1200x800.jpg"
                    alt="Calm waterfront and coastal scenery inspired by Bellingham"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Calm waterfront & islands</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Bellingham</p>
                  <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                </div>
              </a>

              <a
                href="https://unsplash.com/s/photos/pacific-northwest-coast"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://thumbs.dreamstime.com/b/pacific-coast-rocky-rugged-shoreline-misty-fog-2539664.jpg"
                    alt="Misty shoreline and coastal atmosphere inspired by Sequim area"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Rugged spit & misty shore</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Sequim area</p>
                  <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                </div>
              </a>

              <a
                href="https://unsplash.com/s/photos/bridge-water-coast"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-lg transition-all duration-300 bg-white block"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="https://whidbeycamanoislands.com/wp-content/uploads/2016/04/DNS9435.jpg"
                    alt="Dramatic coastal bridges and channels inspired by Anacortes region"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Dramatic coastal bridges & channels</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Anacortes region</p>
                  <p className="text-xs text-port-sky mt-2 font-medium">View source</p>
                </div>
              </a>
            </div>
          </div>
          </ScrollRevealText>
        </div>
      </section>
    </>
    </WeightedScrollLayer>
    </WeightedScrollProvider>
  );
}
