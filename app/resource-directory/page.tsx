import ResourceCard from "@/components/ResourceCard";
import RevealOnScroll from "@/components/RevealOnScroll";

const resources = [
  { title: "Harborview Medical Center", description: "Comprehensive medical services including emergency care.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", category: "Healthcare", distance: "2.3 miles" },
  { title: "Eastlaken Community Center", description: "Family programs, youth activities, and events.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", category: "Family", distance: "1.1 miles" },
  { title: "Port Laken Food Bank", description: "Food assistance for families in need.", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80", category: "Food", distance: "0.8 miles" },
  { title: "Golden Years Senior Center", description: "Activities and support services for seniors 60+.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", category: "Seniors", distance: "3.5 miles" },
  { title: "Community Legal Services", description: "Free legal assistance for low-income residents.", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80", category: "Legal", distance: "1.9 miles" },
  { title: "Wellness & Counseling", description: "Mental health services and support groups.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", category: "Health", distance: "2.7 miles" },
];

const categories = [
  { label: "All Resources", icon: "star", active: true },
  { label: "Family", icon: "family_restroom", color: "text-blue-500" },
  { label: "Health", icon: "spa", color: "text-green-500" },
  { label: "Emergency", icon: "emergency", color: "text-red-500" },
];

export default function ResourceDirectoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-port-sky">folder_open</span>
              <span className="text-port-steel text-sm font-medium uppercase tracking-wider">
                Community Resources
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold text-port-navy mb-4">
              Resource Directory
            </h1>
            <p className="text-lg text-port-slate max-w-2xl">
              Find what you need in Port Laken.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-port-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-port-steel">
              search
            </span>
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-port-mist rounded-2xl shadow-sm focus:border-port-sky focus:ring-0 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AI Overview */}
          <RevealOnScroll>
            <div className="animated-gradient text-white rounded-2xl p-8 mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined">auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-[3px]">AI Overview</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Port Laken&apos;s Resource Directory connects residents with essential
                community services. From emergency assistance to family support programs.
              </p>
            </div>
          </RevealOnScroll>

          {/* Filters */}
          <RevealOnScroll>
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-colors ${
                    cat.active
                      ? "bg-port-navy text-white"
                      : "bg-white border border-port-mist text-port-navy hover:border-port-sky"
                  }`}
                >
                  <span className={`material-symbols-outlined ${cat.color || "text-amber-300"}`}>
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <p className="text-sm text-port-slate mb-6">
            Showing <span className="text-port-navy font-bold">67</span> resources
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <RevealOnScroll key={resource.title} className={`delay-${(index % 3) * 100}`}>
                <ResourceCard {...resource} />
              </RevealOnScroll>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-port-slate hover:bg-port-frost">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-xl bg-port-navy text-white font-bold text-sm">
                1
              </button>
              <button className="w-10 h-10 rounded-xl text-port-slate hover:bg-port-frost text-sm">
                2
              </button>
              <button className="w-10 h-10 rounded-xl text-port-slate hover:bg-port-frost text-sm">
                3
              </button>
              <button className="p-2 rounded-lg text-port-slate hover:bg-port-frost">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}