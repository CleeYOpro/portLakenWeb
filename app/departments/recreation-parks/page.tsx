import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaTree, FaFutbol, FaUsers, FaSwimmingPool, FaMusic, FaSeedling, FaArrowLeft } from "react-icons/fa";

const services = [
  { icon: FaTree, title: "Park Maintenance", description: "Keeping Port Laken's parks, trails, and green spaces clean, safe, and beautiful year-round." },
  { icon: FaFutbol, title: "Sports Programs", description: "Organized leagues, classes, and open recreation for all ages — from youth soccer to senior fitness." },
  { icon: FaUsers, title: "Community Events", description: "Festivals, outdoor movies, concerts, and seasonal celebrations in public spaces across the city." },
  { icon: FaSwimmingPool, title: "Aquatics", description: "Swimming lessons, lap swim, and water safety programs at our community pool facilities." },
  { icon: FaMusic, title: "Arts & Culture", description: "Music, theater, and arts programming that bring creativity and connection to Port Laken." },
  { icon: FaSeedling, title: "Nature Programs", description: "Environmental education, community gardening, and stewardship of Port Laken's natural spaces." },
];

const stats = [
  { value: "28", label: "Parks & Open Spaces" },
  { value: "14mi", label: "Trail Network" },
  { value: "200+", label: "Annual Programs" },
  { value: "85K+", label: "Annual Participants" },
];

export default function RecreationParksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600"
          alt="Recreation & Parks"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16a34a] to-[#4ade80]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Link href="/departments" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-8">
            <FaArrowLeft className="text-xs" /> All Departments
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5 bg-[#16a34a]/40 border border-[#4ade80]/50">
            Nature & Community
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Recreation<br />&amp; <em className="text-[#4ade80]">Parks</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Creating vibrant outdoor spaces, community programs, and recreational opportunities for every resident of Port Laken.
          </p>
        </div>
      </section>

      {/* STATS — forest green */}
      <section className="bg-[#14532d] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#4ade80] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — light green background */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-[#16a34a] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#052e16] mb-2">
              Programs &amp; <em>Services</em>
            </h2>
            <div className="w-12 h-[3px] bg-[#16a34a] mb-14" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} className={`delay-${(i % 3) * 100}`}>
                <div className="group bg-white border border-green-100 hover:bg-[#16a34a] p-7 rounded-2xl transition-all duration-500 shadow-sm">
                  <svc.icon className="text-[#16a34a] text-3xl mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <h3 className="font-bold text-lg text-[#052e16] mb-2 group-hover:text-white transition-colors duration-500">{svc.title}</h3>
                  <p className="text-green-900/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">{svc.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PARKS PHOTO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll className="delay-100">
            <p className="text-[#16a34a] text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Green Spaces</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[#052e16] mb-6">
              28 Parks, <em>Endless Possibilities</em>
            </h3>
            <p className="text-green-900/60 leading-relaxed mb-4">
              From Harborview Park on the waterfront to the new Elm Street community park, Port Laken&apos;s parks are gathering places for families, athletes, artists, and everyone in between.
            </p>
            <p className="text-green-900/60 leading-relaxed">
              With 14 miles of maintained trails and 200+ annual programs, there&apos;s always something to explore, learn, or celebrate outdoors.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472746729193-26ff3cbb4af7?auto=format&fit=crop&q=80&w=600"
                  alt="Community recreation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&q=80&w=600"
                  alt="Children playing in park"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16a34a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Register for a <em>Program</em>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Browse our full catalog of parks, classes, and events — and register online today.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#16a34a] rounded-2xl font-bold hover:scale-105 transition-all">
              View Programs &amp; Register
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
