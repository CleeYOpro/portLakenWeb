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
    pdfHref: "#",
    enabled: false,
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-port-navy mb-4">
              References
            </h1>
            <p className="text-port-slate text-lg max-w-2xl">
              Documentation, work logs, and attributions for the City of Port
              Laken website project.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {referenceCards.map((card, index) => (
              <RevealOnScroll key={card.title} className={`delay-${index * 100}`}>
                <div className="bg-white border border-port-mist rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-port-frost rounded-2xl flex items-center justify-center mb-6">
                    <card.icon className="text-port-sky text-2xl" />
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-bold text-port-navy mb-3">
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-port-slate text-sm leading-relaxed mb-8">
                    {card.description}
                  </p>

                  {/* PDF Button */}
                  {card.enabled ? (
                    <a
                      href={card.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-port-sky text-white rounded-full text-sm font-semibold hover:bg-port-sky/90 transition-colors mt-auto"
                    >
                      <FaFilePdf />
                      View / Download PDF
                    </a>
                  ) : (
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 bg-port-sky text-white rounded-full text-sm font-semibold hover:bg-port-sky/90 transition-colors mt-auto cursor-default"
                      onClick={() => {}}
                    >
                      <FaFilePdf />
                      View / Download PDF
                    </button>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-port-frost">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-port-slate text-sm leading-relaxed">
              This website is a demonstration project created for educational
              purposes. Port Laken is a fictional city. All content is created
              to showcase web development capabilities and municipal website
              design best practices.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
