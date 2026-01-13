import RevealOnScroll from "@/components/RevealOnScroll";

const businesses = [
  { name: "Harbor Brew Coffee", type: "Coffee House", icon: "coffee", color: "bg-port-navy", description: "Local coffee shop that donates 10% of profits to homeless shelters." },
  { name: "Green Thumb Nursery", type: "Sustainable Gardening", icon: "park", color: "bg-green-600", description: "Family-owned nursery specializing in native plants." },
  { name: "Pages & Prose", type: "Independent Bookstore", icon: "menu_book", color: "bg-indigo-600", description: "Cozy bookstore hosting weekly reading clubs." },
];

export default function CommunityHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[400px] rounded-2xl overflow-hidden flex items-center animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
              alt="City sunset"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-port-navy/70 to-port-navy/30"></div>
            <div className="relative z-10 px-12 max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                A Bold New Initiative for Our Community&apos;s Future
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Discover the comprehensive plan to revitalize our downtown core.
              </p>
              <button className="btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Stories */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-port-navy mb-4">
                Featured Resident Stories
              </h2>
              <p className="text-port-slate max-w-xl mx-auto">
                Meet the remarkable individuals making a difference.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <RevealOnScroll>
              <div className="group relative rounded-2xl overflow-hidden h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                  alt="Sarah Martinez"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-1">Sarah Martinez</h3>
                  <p className="text-port-ice text-sm mb-4">Community Volunteer</p>
                  <p className="text-white/80 line-clamp-2">
                    Leading food drive initiatives.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-100">
              <div className="group relative rounded-2xl overflow-hidden h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Michael Chen"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-port-ice text-sm mb-4">Youth Mentor</p>
                  <p className="text-white/80 line-clamp-2">
                    15 years mentoring at-risk youth.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Business Spotlights */}
      <section className="py-20 bg-port-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-port-navy mb-4">
                Local Business Spotlights
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {businesses.map((biz, index) => (
              <RevealOnScroll key={biz.name} className={`delay-${index * 100}`}>
                <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 ${biz.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      <span className="material-symbols-outlined">{biz.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-port-navy">{biz.name}</h3>
                      <p className="text-sm text-port-slate">{biz.type}</p>
                    </div>
                  </div>
                  <p className="text-port-slate mb-6">{biz.description}</p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-port-navy font-semibold hover:gap-3 transition-all"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-port-navy mb-10">
              Latest News
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "New Park Opens on Elm Street", image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&q=80" },
              { title: "Council Meeting Highlights", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80" },
              { title: "Summer Festival Schedule", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80" },
            ].map((news, index) => (
              <RevealOnScroll key={news.title} className={`delay-${index * 100}`}>
                <div className="group bg-port-frost rounded-2xl overflow-hidden card-hover">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg text-port-navy mb-3 group-hover:text-port-sky transition-colors">
                      {news.title}
                    </h4>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
