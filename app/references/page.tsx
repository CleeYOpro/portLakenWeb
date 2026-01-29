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
  FaClipboardList,
  FaUsers,
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
      { title: "Dundee, Scotland: View of the City and River Tay from Dundee Law", url: "https://www.alamy.com/stock-photo/dundee-law-hill.html", source: "Alamy" },
      { title: "Urban canal with buildings reflected in the water under a cloudy sky", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Foggy city street at night illuminated by streetlights", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Harbor boats at sunset with reflections on the water", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Boats on calm water with snow-capped mountains in the distance", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Aerial view of a large bridge spanning a body of water", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Rolling green hills under soft natural light", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Winding road cutting through green hills from an aerial view", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Moss-covered forest floor in a natural woodland setting", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Modern residential home exterior illuminated at night", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Bright modern kitchen interior in a residential home", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Abstract view of a modern building with curved architectural lines", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Model house with keys on a wooden surface representing home ownership", url: "https://unsplash.com", source: "Unsplash" },
    ],
  },
  {
    category: "Nature & Parks",
    sources: [
      { title: "Hands holding soil and a small plant symbolizing environmental conservation", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Sunlight streaming through lush green forest", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Trees planted creating urban forests", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Wetland restoration area with natural habitat", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Solar panels and sustainable energy installation", url: "https://unsplash.com", source: "Unsplash" },
    ],
  },
  {
    category: "Community & Events",
    sources: [
      { title: "Family recycling together using a blue curbside recycling bin", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Outdoor ice skating rink at night with winter holiday lights", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Family ice skating together at an outdoor rink", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Colorful fireworks display lighting up the night sky", url: "https://unsplash.com", source: "Unsplash" },
      { title: "People gathered at an outdoor community event with string lights", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Concert audience recording a live performance with a smartphone", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Colorful stage lights illuminating a concert crowd at night", url: "https://unsplash.com", source: "Unsplash" },
      { title: "People gathered around a table with assorted bottles", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Interior of a modern community center with open hallway and seating areas", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Child with painted face smiling outdoors", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Parents participating in a community parenting workshop", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Children participating in a youth recreation program", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Hands joined together in a circle symbolizing family support", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Group of people stacking hands to represent community support", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Two people walking together along a city street", url: "https://unsplash.com", source: "Unsplash" },
      { title: "People gathered near a bridge during golden hour", url: "https://unsplash.com", source: "Unsplash" },
    ],
  },
  {
    category: "Healthcare & Services",
    sources: [
      { title: "Hospital reception area with medical signage and service counter", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Modern medical clinic interior designed for primary care services", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Dental clinic interior prepared for patient care", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Medical professionals in surgical attire viewed from below in an operating room", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Healthcare professional examining medical equipment in a clinical setting", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Healthcare professional using a mobile phone in a clinical setting", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Prepared meal ingredients arranged for community food service", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Simple kitchen setting representing community meal service", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Public transportation scene representing senior mobility services", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Judge's gavel on a marble surface representing legal services", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Bicycle leaning against a wall in an urban neighborhood", url: "https://unsplash.com", source: "Unsplash" },
    ],
  },
  {
    category: "Business & Technology",
    sources: [
      { title: "Group collaborating in an office with sticky notes on a wall", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Colleagues working together at a desk with laptops and documents", url: "https://unsplash.com", source: "Unsplash" },
      { title: "Person using a smartphone beside a laptop computer", url: "https://unsplash.com", source: "Unsplash" },
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

const workLogEntries = [
  { date: "10/13", task: "Starting landing page", time: "1 hour", member: "C.B", comments: "Started working on the landing page and getting an idea on how I wanted it to look" },
  { date: "10/13", task: "Created general navigation bar for all pages", time: "30 min", member: "C.B", comments: "Created a general nav bar that all pages will use" },
  { date: "10/13", task: "Finished first section of landing page", time: "1 hour", member: "C.B", comments: "Finished designing the first section of the landing page which shows the city highlights" },
  { date: "10/14", task: "Started resource directory", time: "1 hour", member: "O.V", comments: "Started resource directory based on the vision I had in mind" },
  { date: "10/14", task: "Finished resource directory", time: "2 hours", member: "C.B", comments: "Finished full resource directory for the city" },
  { date: "10/14", task: "Created snapshot design of resource detail", time: "1 hour", member: "O.V", comments: "Created a snapshot page that shows an example of what it looks like when you click on one of the resources" },
  { date: "10/15", task: "Started sign-in page", time: "1 hour", member: "S.J", comments: "Created V1 of our sign-in page" },
  { date: "10/15", task: "Started events and calendar page", time: "1 hour", member: "I.B", comments: "Created V1 of the calendar design" },
  { date: "10/15", task: "Started about page", time: "1 hour", member: "A.N", comments: "Created V1 for the first few sections of the about page" },
  { date: "10/16", task: "Finished timeline", time: "1 hour", member: "A.N", comments: "Created V1 of the city timeline" },
  { date: "10/18", task: "Finished sign in page", time: "2 hours", member: "S.J", comments: "Finished final version of the sign-in page" },
  { date: "10/18", task: "Worked on maps page", time: "1 hour", member: "I.B", comments: "Started working on maps page" },
  { date: "10/19", task: "Created V1 for Boards and Committee page", time: "2 hours", member: "C.B", comments: "Had the idea to create a boards and committee page for citizens to get involved" },
  { date: "10/20", task: "Started environment page", time: "1 hour", member: "O.V", comments: "Created an environment page to highlight the advances our city makes in sustainability" },
  { date: "10/20", task: "Finished environment page", time: "2 hours", member: "O.V", comments: "Finished the whole page" },
  { date: "10/21", task: "Finish Boards and Committee page", time: "3 hours", member: "C.B", comments: "Finished the boards and committee page" },
  { date: "10/21", task: "Started departments page", time: "2 hours", member: "A.N", comments: "Started working on a departments page that shows all the departments in Port Laken" },
  { date: "10/22", task: "Finished calendar and events page", time: "2 hours", member: "I.B", comments: "Finished the page that shows the event calendar and upcoming events" },
  { date: "10/23", task: "Finished maps page", time: "1 hour", member: "I.B", comments: "Finalized the maps page" },
  { date: "10/24", task: "Started life page", time: "1 hour", member: "S.J", comments: "Started working on the life page which highlights life in Port Laken" },
  { date: "10/25", task: "Finished departments page", time: "2 hours", member: "A.N", comments: "Finished the departments page showing all the different departments and the work they do" },
  { date: "10/25", task: "Started news page", time: "1 hour", member: "O.V", comments: "Started the first few sections of the news page" },
  { date: "10/26", task: "Continued working on about page", time: "2 hours", member: "A.N", comments: "Had about page almost done except for timeline" },
  { date: "10/26", task: "Continued the work on the news page", time: "1 hour", member: "C.B", comments: "Continued working on the news page and added spotlight section" },
  { date: "10/27", task: "Finished the news page", time: "2 hours", member: "C.B", comments: "Finished news page" },
  { date: "10/29", task: "Finished life page", time: "2 hours", member: "A.M", comments: "Finished the life in Port Laken page" },
  { date: "11/2", task: "Finished about page", time: "1 hour", member: "A.N", comments: "Finished everything for about page" },
  { date: "11/2", task: "Started city ordinances page", time: "2 hours", member: "A.M", comments: "Created V1 for city ordinances page with rules and regulations in the city" },
  { date: "11/3", task: "Started forms page", time: "2 hours", member: "O.V", comments: "Started and almost finished the forms page" },
  { date: "11/4", task: "Finished forms page", time: "1 hour", member: "I.B", comments: "Finished the forms page where citizens can submit applications" },
  { date: "11/4", task: "Finished city ordinances page", time: "2 hours", member: "A.N", comments: "Finished the ordinances page" },
  { date: "11/5", task: "Started city council page", time: "2 hours", member: "S.J", comments: "Started city council page" },
  { date: "11/6", task: "Finished city council page", time: "1 hour", member: "C.B", comments: "Finished city council page" },
  { date: "11/7", task: "Started employment page", time: "2 hours", member: "I.B", comments: "Started the employment page where people can see their benefits and open jobs" },
  { date: "11/8", task: "Finished employment page", time: "1 hour", member: "A.M", comments: "Finished employment page" },
  { date: "11/10", task: "Organized all the pages", time: "20 min", member: "C.B", comments: "Arranged all the pages neatly" },
  { date: "11/20", task: "Created base website on localhost", time: "3 hours", member: "C.B", comments: "Created a base website showing our landing page" },
  { date: "1/4", task: "Updated github and started project organization", time: "1 hour", member: "A.M", comments: "Created the github and organized all files and projects on VS code so everyone could start working on the actual website" },
  { date: "1/5", task: "Sign-in page", time: "2 hours", member: "S.J", comments: "Started and finished the sign in page for our website" },
  { date: "1/6", task: "References", time: "2 hours", member: "A.N", comments: "Started the references page and updated it with our citations" },
  { date: "1/10", task: "About, Board & Committees, Careers, Council, Departments, Environmental", time: "6 hours", member: "O.V", comments: "Finished all of these pages" },
  { date: "1/14", task: "Ordinances, News", time: "3 hours", member: "I.B", comments: "Finished these pages" },
  { date: "1/18", task: "Resource Directory, Residences, Landing Page, Forms", time: "5 hours", member: "C.B", comments: "Finished these pages" },
  { date: "1/19", task: "Events", time: "1 hour", member: "A.N", comments: "Finished these pages" },
  { date: "1/25", task: "Submit a resource", time: "1 hour", member: "O.V", comments: "Finished these pages" },
];

const teamMembers = [
  { initials: "C.B", name: "Team Lead", color: "bg-port-sky" },
  { initials: "O.V", name: "Developer", color: "bg-emerald-500" },
  { initials: "A.N", name: "Developer", color: "bg-purple-500" },
  { initials: "I.B", name: "Developer", color: "bg-amber-500" },
  { initials: "S.J", name: "Developer", color: "bg-rose-500" },
  { initials: "A.M", name: "Developer", color: "bg-cyan-500" },
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
            <a href="#work-log" className="px-4 py-2 bg-port-navy text-white rounded-lg text-sm font-medium hover:bg-port-navy/80 transition-colors">
              Work Log
            </a>
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

      {/* Work Log Section */}
      <section id="work-log" className="py-16 bg-port-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-port-sky/20 rounded-2xl mb-6">
                <FaClipboardList className="text-port-sky text-2xl" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Student Association Work Log
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                A comprehensive record of our team&apos;s development progress throughout the project lifecycle.
              </p>
            </div>
          </RevealOnScroll>

          {/* Team Legend */}
          <RevealOnScroll className="delay-100">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {teamMembers.map((member) => (
                <div key={member.initials} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <div className={`w-6 h-6 ${member.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                    {member.initials.charAt(0)}
                  </div>
                  <span className="text-white/90 text-sm font-medium">{member.initials}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Work Log Table */}
          <RevealOnScroll className="delay-200">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-port-sky/20 border-b border-white/10">
                <div className="col-span-2 md:col-span-1 px-4 py-4 text-port-sky font-bold text-sm">Date</div>
                <div className="col-span-4 md:col-span-3 px-4 py-4 text-port-sky font-bold text-sm">Task</div>
                <div className="col-span-2 md:col-span-1 px-4 py-4 text-port-sky font-bold text-sm text-center">Time</div>
                <div className="col-span-2 md:col-span-1 px-4 py-4 text-port-sky font-bold text-sm text-center">Member</div>
                <div className="hidden md:block col-span-6 px-4 py-4 text-port-sky font-bold text-sm">Comments</div>
              </div>

              {/* Table Body */}
              <div className="max-h-[600px] overflow-y-auto">
                {workLogEntries.map((entry, index) => {
                  const memberInfo = teamMembers.find(m => m.initials === entry.member);
                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-12 border-b border-white/5 hover:bg-white/5 transition-colors ${
                        index % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <div className="col-span-2 md:col-span-1 px-4 py-3 text-white/80 text-sm font-medium">
                        {entry.date}
                      </div>
                      <div className="col-span-4 md:col-span-3 px-4 py-3 text-white text-sm">
                        {entry.task}
                      </div>
                      <div className="col-span-2 md:col-span-1 px-4 py-3 text-white/70 text-sm text-center">
                        {entry.time}
                      </div>
                      <div className="col-span-2 md:col-span-1 px-4 py-3 flex justify-center">
                        <div
                          className={`w-8 h-8 ${memberInfo?.color || "bg-gray-500"} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                          title={entry.member}
                        >
                          {entry.member}
                        </div>
                      </div>
                      <div className="hidden md:block col-span-6 px-4 py-3 text-white/60 text-sm">
                        {entry.comments}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Summary Stats */}
          <RevealOnScroll className="delay-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-port-sky mb-1">{workLogEntries.length}</div>
                <div className="text-white/70 text-sm">Total Tasks</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-port-sky mb-1">{teamMembers.length}</div>
                <div className="text-white/70 text-sm">Team Members</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-port-sky mb-1">70+</div>
                <div className="text-white/70 text-sm">Hours Invested</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-port-sky mb-1">20+</div>
                <div className="text-white/70 text-sm">Pages Created</div>
              </div>
            </div>
          </RevealOnScroll>
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
                      <span className="text-sm text-port-sky">{category.sources.length} items</span>
                      {expandedCategory === category.category ? (
                        <FaChevronUp className="text-port-sky" />
                      ) : (
                        <FaChevronDown className="text-port-sky" />
                      )}
                    </div>
                  </button>
                  {expandedCategory === category.category && (
                    <div className="px-6 pb-5 bg-white border-t border-port-mist">
                      <ul className="space-y-4 pt-4">
                        {category.sources.map((source, idx) => (
                          <li key={idx} className="text-sm text-port-slate leading-relaxed">
                            <span className="text-port-navy font-medium">Photographer unknown.</span>{" "}
                            <em>&quot;{source.title}&quot;</em>. {source.source}.{" "}
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-port-sky hover:underline break-all"
                            >
                              {source.url}
                            </a>
                            . Accessed 21 Jan. 2026.
                          </li>
                        ))}
                      </ul>
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
