import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
            alt="Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-port-navy/60 via-port-navy/40 to-port-navy/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            About Port Laken
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-200">
            A city built on innovation, community, and connection.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <span className="text-port-sky font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                Chapter 1 — Overview
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-port-navy mb-6">
                Welcome to Our City
              </h2>
              <p className="text-lg text-port-slate leading-relaxed mb-6">
                Welcome to Port Laken, a vibrant city where history meets innovation.
                Our community is built on a foundation of connection and collaboration.
              </p>
              <p className="text-port-slate leading-relaxed">
                From our bustling waterfront to serene parklands, Port Laken offers a
                dynamic quality of life.
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-port-mist text-center shadow-sm">
                  <span className="block text-port-slate text-xs font-bold uppercase tracking-wider mb-2">
                    Population
                  </span>
                  <div className="text-3xl font-display font-bold text-port-sky">
                    125,000
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-port-mist text-center shadow-sm">
                  <span className="block text-port-slate text-xs font-bold uppercase tracking-wider mb-2">
                    Founded
                  </span>
                  <div className="text-3xl font-display font-bold text-port-sky">
                    1847
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-port-mist text-center shadow-sm">
                  <span className="block text-port-slate text-xs font-bold uppercase tracking-wider mb-2">
                    Area
                  </span>
                  <div className="text-3xl font-display font-bold text-port-sky">
                    45 sq mi
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-port-sky font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                Chapter 2 — Heritage
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-port-navy">
                A Journey Through Time
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8">
            <RevealOnScroll>
              <div className="text-center">
                <div className="w-12 h-12 bg-port-sky rounded-full mx-auto mb-6"></div>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-port-mist">
                  <img
                    src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&q=80"
                    alt="1847"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-port-navy mb-1">
                  1847
                </h4>
                <p className="text-sm text-port-slate">Founding Year</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-port-sky rounded-full mx-auto mb-6"></div>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-port-mist">
                  <img
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80"
                    alt="1920"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-port-navy mb-1">
                  1920
                </h4>
                <p className="text-sm text-port-slate">Industrial Boom</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-port-sky rounded-full mx-auto mb-6"></div>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-port-mist">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                    alt="2000"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-port-navy mb-1">
                  2000
                </h4>
                <p className="text-sm text-port-slate">Digital Age</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-port-sky rounded-full mx-auto mb-6"></div>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-port-mist">
                  <img
                    src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80"
                    alt="Today"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-port-navy mb-1">
                  Today
                </h4>
                <p className="text-sm text-port-slate">Smart City</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-32 bg-port-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                  alt="Solar panels"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-200">
              <span className="text-port-sky font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                Chapter 3 — Innovation
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-port-navy mb-6">
                Building a Sustainable Future
              </h2>
              <p className="text-lg text-port-slate leading-relaxed mb-8">
                Port Laken is committed to pioneering green initiatives and smart city
                solutions that enhance the lives of our citizens while protecting our
                environment.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-display font-bold text-port-navy mb-1">
                    12 MW
                  </div>
                  <div className="text-sm text-port-slate">Solar Power</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-port-navy mb-1">
                    40+
                  </div>
                  <div className="text-sm text-port-slate">Electric Buses</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-port-navy mb-1">
                    65%
                  </div>
                  <div className="text-sm text-port-slate">Renewable</div>
                </div>
              </div>
              <Link href="/sustainability" className="btn-primary">
                Discover Our Projects
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}