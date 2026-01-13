import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

const services = [
  { title: "Affordable Housing", description: "Resources to support your housing needs.", icon: "home" },
  { title: "Schools & Childcare", description: "Top-rated schools and childcare options.", icon: "school" },
  { title: "Parks & Recreation", description: "Beautiful parks and trails.", icon: "park" },
  { title: "Local Business", description: "Support for local entrepreneurs.", icon: "storefront" },
  { title: "Public Transit", description: "Convenient transit options.", icon: "directions_bus" },
  { title: "Public Safety", description: "Police, fire, and emergency services.", icon: "security" },
];

export default function ResidentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
            alt="City"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-port-navy/80 to-port-navy/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            Life in Port Laken
          </h1>
          <p className="text-xl text-white/80 max-w-xl animate-fade-in-up delay-100">
            Where community, opportunity, and nature come together.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-port-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-port-navy mb-4">
                Explore City Life
              </h2>
              <p className="text-port-slate max-w-2xl mx-auto">
                Discover services and resources that make Port Laken wonderful.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <RevealOnScroll key={service.title} className={`delay-${(index % 3) * 100}`}>
                <div className="bg-white p-8 rounded-2xl shadow-sm card-hover cursor-pointer">
                  <span className="material-symbols-outlined text-port-sky text-3xl mb-4">
                    {service.icon}
                  </span>
                  <h3 className="font-bold text-lg text-port-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-port-slate">{service.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-port-frost rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                  alt="Parks"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-port-sky font-semibold tracking-widest text-xs uppercase">
                    Featured
                  </span>
                  <span className="material-symbols-outlined text-port-sky text-sm">
                    stars
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold text-port-navy mb-6">
                  Explore Our Award-Winning Parks
                </h2>
                <p className="text-port-slate mb-8 leading-relaxed">
                  Port Laken boasts over 50 parks spanning 2,000 acres of green space,
                  offering hiking trails, sports facilities, and waterfront access.
                </p>
                <Link href="/resource-directory" className="btn-primary w-fit">
                  Explore Parks
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-port-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Stay Connected to City Life
          </h2>
          <p className="text-port-ice mb-10">
            Sign up for the official city newsletter for the latest updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-port-sky"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-port-navy font-bold rounded-xl hover:bg-port-frost transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}