import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaShieldAlt, FaSearch, FaCar, FaHandshake, FaGraduationCap, FaHeadset } from "react-icons/fa";

const services: { icon: IconType; title: string; description: string }[] = [
  { icon: FaShieldAlt, title: "Patrol & Response", description: "24/7 patrol officers ensuring neighborhood safety and rapid emergency response." },
  { icon: FaSearch, title: "Investigations", description: "Dedicated detectives solving crimes and bringing justice to the community." },
  { icon: FaCar, title: "Traffic Safety", description: "Enforcing traffic laws and conducting DUI checkpoints to keep roads safe." },
  { icon: FaHandshake, title: "Community Policing", description: "Building trust through neighborhood partnerships and community outreach programs." },
  { icon: FaGraduationCap, title: "Youth Programs", description: "School resource officers and youth mentorship programs to guide the next generation." },
  { icon: FaHeadset, title: "Victim Services", description: "Compassionate support and resources for crime victims and their families." },
];

const stats = [
  { value: "120", label: "Sworn Officers" },
  { value: "5,400+", label: "Annual Calls" },
  { value: "15%", label: "Crime Reduction" },
  { value: "4.8/5", label: "Community Rating" },
];

export default function PoliceDepartmentPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/departments" className="text-port-sky text-sm font-medium hover:underline mb-4 inline-block animate-fade-in-up">
            &larr; All Departments
          </Link>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 animate-fade-in-up">
            Police <span className="italic">Department</span>
          </h1>
          <p className="text-lg text-port-slate max-w-2xl mx-auto animate-fade-in-up delay-100">
            Dedicated to keeping Port Laken safe through community-focused policing and public trust.
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
              Need <span className="italic text-port-ice">Assistance?</span>
            </h2>
            <p className="text-white/60 text-lg mb-4 max-w-xl mx-auto">
              For emergencies, dial 911. For non-emergencies, reach us at our main line.
            </p>
            <p className="text-4xl font-bold text-port-sky mb-8">911</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-port-navy rounded-2xl font-bold hover:scale-105 transition-all">
              Non-Emergency Contact
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
