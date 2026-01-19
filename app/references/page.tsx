"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import {
  FaCode,
  FaImages,
  FaBook,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaReact,
  FaPalette,
  FaServer,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript } from "react-icons/si";

const codeStack = [
  {
    name: "Next.js 14",
    description: "Modern React framework with App Router for server-side rendering and optimized performance.",
    icon: SiNextdotjs,
  },
  {
    name: "React 18",
    description: "Component-based UI library for building interactive user interfaces.",
    icon: FaReact,
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript for improved developer experience and code reliability.",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid, consistent styling across all pages.",
    icon: SiTailwindcss,
  },
  {
    name: "Vercel",
    description: "Cloud platform for deployment with automatic CI/CD and edge network optimization.",
    icon: SiVercel,
  },
];

const libraries = [
  { name: "react-icons", description: "Comprehensive icon library for React applications", link: "https://react-icons.github.io/react-icons/" },
  { name: "lucide-react", description: "Beautiful & consistent icons for the navigation and UI elements", link: "https://lucide.dev/" },
  { name: "next/image", description: "Optimized image component with lazy loading and responsive sizing", link: "https://nextjs.org/docs/pages/api-reference/components/image" },
  { name: "next/link", description: "Client-side navigation for seamless page transitions", link: "https://nextjs.org/docs/pages/api-reference/components/link" },
];

const imageCredits = [
  {
    category: "City & Architecture",
    sources: [
      { name: "City skyline aerial view", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Historic downtown buildings", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "City Hall exterior", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Modern office buildings", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
    ],
  },
  {
    category: "Nature & Parks",
    sources: [
      { name: "Waterfront and marina", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Community parks", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Sunset landscapes", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
    ],
  },
  {
    category: "Community & Events",
    sources: [
      { name: "Community gatherings", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Farmers market scenes", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Local business imagery", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
    ],
  },
  {
    category: "Sustainability",
    sources: [
      { name: "Solar panel installations", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Electric vehicle charging", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
      { name: "Green infrastructure", source: "Unsplash", photographer: "Various Contributors", license: "Unsplash License" },
    ],
  },
];

const researchLinks = [
  {
    category: "Government & Municipal Resources",
    links: [
      { title: "ICMA - International City/County Management Association", url: "https://icma.org/", description: "Best practices for local government management" },
      { title: "National League of Cities", url: "https://www.nlc.org/", description: "Resources for municipal governance and policy" },
      { title: "Government Finance Officers Association", url: "https://www.gfoa.org/", description: "Financial management standards for government" },
    ],
  },
  {
    category: "Sustainability & Environment",
    links: [
      { title: "EPA Local Government Resources", url: "https://www.epa.gov/", description: "Environmental protection guidelines and programs" },
      { title: "U.S. Green Building Council", url: "https://www.usgbc.org/", description: "LEED certification and sustainable building standards" },
      { title: "American Planning Association", url: "https://www.planning.org/", description: "Urban planning best practices and resources" },
    ],
  },
  {
    category: "Accessibility Standards",
    links: [
      { title: "WCAG 2.2 Guidelines", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", description: "Web Content Accessibility Guidelines for inclusive design" },
      { title: "Section 508 Standards", url: "https://www.section508.gov/", description: "Federal accessibility requirements for digital content" },
      { title: "ADA.gov", url: "https://www.ada.gov/", description: "Americans with Disabilities Act resources and compliance" },
    ],
  },
];

const copyrightChecklist = [
  { item: "All images licensed under Unsplash License or Creative Commons", status: true },
  { item: "Icons from open-source libraries (react-icons, lucide-react)", status: true },
  { item: "Fonts licensed for web use (Google Fonts)", status: true },
  { item: "No copyrighted municipal seals or logos without authorization", status: true },
  { item: "Third-party content properly attributed", status: true },
  { item: "WCAG 2.2 AA accessibility compliance maintained", status: true },
];

export default function ReferencesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-port-navy mb-6">
              References & Credits
            </h1>
            <p className="text-port-slate text-lg max-w-2xl">
              Documentation of the technologies, resources, and attributions that power the City of Port Laken website.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-port-mist sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <a href="#code-stack" className="px-4 py-2 bg-port-frost text-port-navy rounded-lg text-sm font-medium hover:bg-port-mist transition-colors">
              Code Stack
            </a>
            <a href="#libraries" className="px-4 py-2 bg-port-frost text-port-navy rounded-lg text-sm font-medium hover:bg-port-mist transition-colors">
              Libraries
            </a>
            <a href="#images" className="px-4 py-2 bg-port-frost text-port-navy rounded-lg text-sm font-medium hover:bg-port-mist transition-colors">
              Image Credits
            </a>
            <a href="#research" className="px-4 py-2 bg-port-frost text-port-navy rounded-lg text-sm font-medium hover:bg-port-mist transition-colors">
              Research
            </a>
            <a href="#copyright" className="px-4 py-2 bg-port-frost text-port-navy rounded-lg text-sm font-medium hover:bg-port-mist transition-colors">
              Copyright
            </a>
          </div>
        </div>
      </section>

      {/* Code Stack Section */}
      <section id="code-stack" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-port-frost rounded-xl flex items-center justify-center">
                <FaCode className="text-port-sky text-xl" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-port-navy">
                  Code Stack
                </h2>
                <p className="text-port-slate text-sm">Technologies powering this website</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codeStack.map((tech, index) => (
              <RevealOnScroll key={tech.name} className={`delay-${index * 50}`}>
                <div className="bg-port-frost p-6 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <tech.icon className="text-port-navy text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-port-navy mb-1">{tech.name}</h3>
                      <p className="text-port-slate text-sm leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="delay-200">
            <div className="mt-8 p-6 bg-port-navy/5 rounded-2xl border border-port-mist">
              <h4 className="font-bold text-port-navy mb-3">Development Standards</h4>
              <ul className="space-y-2 text-port-slate text-sm">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  WCAG 2.2 AA accessibility compliance for inclusive access
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  Responsive design optimized for all device sizes
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  Performance optimization with image lazy loading and code splitting
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  SEO best practices for improved discoverability
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Libraries Section */}
      <section id="libraries" className="py-16 bg-port-frost">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <FaServer className="text-port-sky text-xl" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-port-navy">
                  Additional Libraries
                </h2>
                <p className="text-port-slate text-sm">Third-party packages and tools</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {libraries.map((lib, index) => (
              <RevealOnScroll key={lib.name} className={`delay-${index * 50}`}>
                <div className="bg-white p-5 rounded-xl flex items-center justify-between gap-4 shadow-sm">
                  <div>
                    <h3 className="font-mono text-port-navy font-semibold">{lib.name}</h3>
                    <p className="text-port-slate text-sm">{lib.description}</p>
                  </div>
                  <a
                    href={lib.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-port-slate hover:text-port-sky transition-colors flex-shrink-0"
                    aria-label={`Visit ${lib.name} documentation`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Image Credits Section */}
      <section id="images" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-port-frost rounded-xl flex items-center justify-center">
                <FaImages className="text-port-sky text-xl" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-port-navy">
                  Image Credits
                </h2>
                <p className="text-port-slate text-sm">Attribution for visual assets</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {imageCredits.map((category, index) => (
              <RevealOnScroll key={category.category} className={`delay-${index * 50}`}>
                <div className="bg-port-frost rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-port-mist transition-colors"
                  >
                    <span className="font-bold text-port-navy">{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-port-slate">{category.sources.length} items</span>
                      {expandedCategory === category.category ? (
                        <FaChevronUp className="text-port-slate" />
                      ) : (
                        <FaChevronDown className="text-port-slate" />
                      )}
                    </div>
                  </button>
                  {expandedCategory === category.category && (
                    <div className="px-6 pb-5 space-y-3">
                      {category.sources.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-port-mist last:border-0">
                          <div>
                            <p className="text-port-navy text-sm font-medium">{source.name}</p>
                            <p className="text-port-slate text-xs">{source.photographer}</p>
                          </div>
                          <span className="px-2 py-1 bg-white text-port-slate text-xs rounded-lg">
                            {source.license}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="delay-200">
            <p className="mt-6 text-port-slate text-sm text-center">
              All images are used in compliance with their respective licenses. Primary image source:{" "}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-port-sky hover:underline">
                Unsplash
              </a>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Research Links Section */}
      <section id="research" className="py-16 bg-port-frost">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <FaBook className="text-port-sky text-xl" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-port-navy">
                  Research & Resources
                </h2>
                <p className="text-port-slate text-sm">Sources informing our content and practices</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {researchLinks.map((category, index) => (
              <RevealOnScroll key={category.category} className={`delay-${index * 100}`}>
                <div>
                  <h3 className="font-bold text-port-navy mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white p-4 rounded-xl hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-port-navy font-medium group-hover:text-port-sky transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-port-slate text-sm">{link.description}</p>
                          </div>
                          <FaExternalLinkAlt className="text-port-slate group-hover:text-port-sky transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright Checklist Section */}
      <section id="copyright" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-port-frost rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-port-sky text-xl" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-port-navy">
                  Copyright Checklist
                </h2>
                <p className="text-port-slate text-sm">Compliance documentation for all assets</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="delay-100">
            <div className="bg-port-frost rounded-2xl p-6">
              <div className="space-y-4">
                {copyrightChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.status ? 'bg-green-100' : 'bg-yellow-100'}`}>
                      <FaCheckCircle className={`text-sm ${item.status ? 'text-green-500' : 'text-yellow-500'}`} />
                    </div>
                    <span className="text-port-navy">{item.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="delay-200">
            <div className="mt-8 p-6 bg-port-navy text-white rounded-2xl">
              <h4 className="font-bold mb-2">Disclaimer</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                This website is a demonstration project created for educational purposes. Port Laken is a fictional city, and any resemblance to actual places, organizations, or events is coincidental. All content is created to showcase web development capabilities and municipal website design best practices.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Back to Top */}
      <section className="py-12 bg-port-frost">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-port-slate mb-4">
              Questions about our references or attributions?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
            >
              Contact Us
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
