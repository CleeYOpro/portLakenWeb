import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaTree, FaFutbol, FaUsers, FaSwimmingPool, FaMusic, FaSeedling } from "react-icons/fa";

const services: { icon: IconType; title: string; description: string }[] = [
  { icon: FaTree, title: "Parks & Trails", description: "Maintaining over 30 parks, nature trails, and open spaces for public enjoyment." },
  { icon: FaFutbol, title: "Youth Athletics", description: "Organized sports leagues, camps, and fitness programs for children and teens." },
  { icon: FaUsers, title: "Senior Programs", description: "Social activities, fitness classes, and enrichment programs for older adults." },
  { icon: FaSwimmingPool, title: "Aquatics Center", description: "Year-round swimming programs, lap swim, and water safety classes for all ages." },
  { icon: FaMusic, title: "Special Events", description: "Community festivals, concerts in the park, and seasonal celebrations." },
  { icon: FaSeedling, title: "Nature Education", description: "Environmental education programs, nature walks, and wildlife conservation." },
];

const stats = [
  { value: "30+", label: "City Parks" },
  { value: "45mi", label: "Trail Network" },
  { value: "200+", label: "Annual Programs" },
  { value: "15K", label: "Participants/Year" },
];

export default function RecreationParksPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/departments" className="text-port-sky text-sm font-medium hover:underline mb-4 inline-block animate-fade-in-up">
            &larr; All Departments
          </Link>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 animate-fade-in-up">
            Recreation <span className="italic">&</span> Parks
          </h1>
          <p className="text-lg text-port-slate max-w-2xl mx-auto animate-fade-in-up delay-100">
            Creating vibrant spaces and enriching programs that bring our community together.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-port-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <RevealOnScroll key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-port-navy">{stat.value}</div>
                  <div className="text-port-slate text-sm mt-1">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-port-sky font-medium text-sm tracking-widest uppercase mb-4 block">What We Do</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy">
                Our <span className="italic">Services</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <RevealOnScroll key={service.title} className={`delay-${(index % 3) * 100}`}>
                <div className="group bg-port-frost p-7 rounded-2xl hover:bg-port-navy transition-all duration-500">
                  <service.icon className="text-port-sky text-3xl mb-4 group-hover:text-port-ice transition-colors duration-500" />
                  <h3 className="font-bold text-lg text-port-navy mb-2 group-hover:text-white transition-colors duration-500">{service.title}</h3>
                  <p className="text-port-slate text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500">{service.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-port-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Get <span className="italic text-port-ice">Outside</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Explore our parks, sign up for programs, or reserve a facility for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-port-navy rounded-2xl font-bold hover:scale-105 transition-all">
                View Programs
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Reserve a Facility
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
