"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaClipboardList,
  FaCheckCircle,
  FaBook,
  FaFilePdf,
} from "react-icons/fa";

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
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-port-mist via-white to-port-mist/30">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-port-navy tracking-tight">
              References & Documentation
            </h1>
            <p className="mt-5 text-port-slate text-lg sm:text-xl max-w-3xl leading-relaxed">
              Official logs, copyright documentation, and source attributions for the City of Port Laken website project.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
            {referenceCards.map((card, index) => (
              <RevealOnScroll
                key={card.title}
                className={`delay-${index * 100}`}
              >
                <div className="group relative bg-white border border-port-mist/60 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl hover:border-port-mist/90 transition-all duration-300 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-port-frost/70 rounded-xl flex items-center justify-center mb-6 text-port-sky group-hover:scale-105 transition-transform duration-300">
                    <card.icon className="text-2xl" />
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-port-slate text-[15px] leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>

                  {/* Button */}
                  {card.enabled ? (
                    <a
                      href={card.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-port-sky text-white rounded-xl font-medium text-sm tracking-wide hover:bg-port-sky/95 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow port-sky/30 mt-auto"
                    >
                      <FaFilePdf className="text-base" />
                      View PDF
                    </a>
                  ) : (
                    <button
                        disabled
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gray-300 text-gray-500 rounded-xl font-medium text-sm tracking-wide cursor-not-allowed mt-auto"
                    >
                        <FaFilePdf className="text-base" />
                        Coming Soon
                    </button>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-port-mist/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16 md:space-y-20">
          {/* Main disclaimer content */}
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

          {/* Visual References – grid of images */}
          <div className="space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-semibold text-port-navy text-left">
              Visual Inspiration
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Image Card 1 */}
              <div className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/reference/port-angeles-harbor.jpg"
                    alt="Port Angeles harbor with mountains in background"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Working harbor & mountain backdrop</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Port Angeles</p>
                </div>
              </div>

              {/* Image Card 2 */}
              <div className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/reference/bellingham-waterfront.jpg"
                    alt="Bellingham waterfront with calm water and distant islands"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Calm waterfront & islands</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Bellingham</p>
                </div>
              </div>

              {/* Image Card 3 */}
              <div className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/reference/sequim-dungeness.jpg"
                    alt="Dungeness Spit and misty shoreline near Sequim"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Rugged spit & misty shore</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Sequim area</p>
                </div>
              </div>

              {/* Image Card 4 */}
              <div className="group relative rounded-2xl overflow-hidden border border-port-mist/30 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/reference/anacortes-deception-pass.jpg"
                    alt="Deception Pass bridge and coastal scenery near Anacortes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-port-navy">Dramatic coastal bridges & channels</p>
                  <p className="text-xs text-port-slate/70 mt-1">Inspired by Anacortes region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}