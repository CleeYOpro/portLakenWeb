import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";

const businesses = [
  {
    name: "Harbor Brew Coffee",
    type: "Coffee House",
    icon: "coffee",
    color: "bg-port-navy",
    description: "Local coffee shop that donates 10% of profits to homeless shelters.",
    slug: "harbor-brew-coffee"
  },
  {
    name: "Green Thumb Nursery",
    type: "Sustainable Gardening",
    icon: "park",
    color: "bg-green-600",
    description: "Family-owned nursery specializing in native plants.",
    slug: "green-thumb-nursery"
  },
  {
    name: "Pages & Prose",
    type: "Independent Bookstore",
    icon: "menu_book",
    color: "bg-indigo-600",
    description: "Cozy bookstore hosting weekly reading clubs.",
    slug: "pages-and-prose"
  },
];

const newsItems = [
  {
    title: "Harbor Spring Cleanup Draws Record Volunteers",
    date: "March 29, 2026",
    category: "Community",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
    slug: "harbor-spring-cleanup"
  },
  {
    title: "Port Laken Farmers Market Opens for the Season",
    date: "April 5, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
    slug: "farmers-market-opening-2026"
  },
  {
    title: "New Harbor Trail Mural Unveiled",
    date: "April 12, 2026",
    category: "Arts & Culture",
    image: "https://images.unsplash.com/photo-1551913902-c92207136625?w=600&q=80",
    slug: "harbor-trail-mural"
  },
];

const archiveItems = [
  {
    title: "Port Laken's $50 Million Downtown Bet",
    date: "January 16, 2026",
    category: "City News",
    slug: "downtown-initiative"
  },
  {
    title: "MLK Day in Port Laken: Service, Reflection, and Lanterns Over the Harbor",
    date: "January 19, 2026",
    category: "Community Events",
    slug: "mlk-day-service"
  },
  {
    title: "The Coastal Winter Market Returns — and It's Better Than Ever",
    date: "January 25, 2026",
    category: "Lifestyle",
    slug: "winter-market"
  },
  {
    title: "Green Port 2026: What Port Laken's New Sustainability Plan Actually Proposes",
    date: "February 10, 2026",
    category: "City News",
    slug: "sustainability-vision-2026"
  },
  {
    title: "City Council Recap: Everything That Happened at January's Packed Session",
    date: "January 13, 2026",
    category: "City News",
    slug: "council-meeting-highlights"
  },
  {
    title: "Summer Festival 2026: Everything You Need to Know",
    date: "January 11, 2026",
    category: "Events",
    slug: "summer-festival"
  },
  {
    title: "Elm Street Park Is Finally Open — And It Was Worth the Wait",
    date: "January 14, 2026",
    category: "City News",
    slug: "elm-street-park"
  },
  {
    title: "Sarah Martinez: A Decade of Feeding Hope",
    date: "January 15, 2026",
    category: "Community Spotlight",
    slug: "sarah-martinez"
  },
  {
    title: "Michael Chen: Fifteen Years, Two Hundred Kids, One Rule",
    date: "January 12, 2026",
    category: "Community Spotlight",
    slug: "michael-chen"
  },
  {
    title: "Harbor Brew Coffee: Where Every Cup Makes a Difference",
    date: "January 10, 2026",
    category: "Business Spotlight",
    slug: "harbor-brew-coffee"
  },
  {
    title: "Green Thumb Nursery: Three Generations Ahead of the Curve",
    date: "January 8, 2026",
    category: "Business Spotlight",
    slug: "green-thumb-nursery"
  },
  {
    title: "Pages & Prose: The Bookstore That Refused to Die",
    date: "January 5, 2026",
    category: "Business Spotlight",
    slug: "pages-and-prose"
  },
];

const categoryColors: Record<string, string> = {
  "City News": "bg-blue-100 text-blue-700",
  "Community Events": "bg-green-100 text-green-700",
  "Community Spotlight": "bg-purple-100 text-purple-700",
  "Business Spotlight": "bg-amber-100 text-amber-700",
  "Lifestyle": "bg-pink-100 text-pink-700",
  "Events": "bg-orange-100 text-orange-700",
  "Community": "bg-teal-100 text-teal-700",
  "Arts & Culture": "bg-indigo-100 text-indigo-700",
};

export default function CommunityHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news/downtown-initiative" className="block">
            <div className="relative min-h-[400px] rounded-2xl overflow-hidden flex items-center animate-fade-in-up group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
                alt="City sunset"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-port-navy/70 to-port-navy/30"></div>
              <div className="relative z-10 px-12 max-w-2xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  A Bold New Initiative for Our Community&apos;s Future
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  Discover the comprehensive plan to revitalize our downtown core.
                </p>
                <span className="btn-primary inline-block">Read More</span>
              </div>
            </div>
          </Link>
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
              <Link href="/news/sarah-martinez" className="block">
                <div className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                    alt="Sarah Martinez"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
              </Link>
            </RevealOnScroll>
            <RevealOnScroll className="delay-100">
              <Link href="/news/michael-chen" className="block">
                <div className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Michael Chen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
              </Link>
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
                  <Link
                    href={`/news/${biz.slug}`}
                    className="flex items-center gap-2 text-port-navy font-semibold hover:gap-3 transition-all"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm"></span>
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-port-navy mb-2">
              Latest News
            </h2>
            <p className="text-port-slate mb-10">Spring 2026</p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <RevealOnScroll key={news.title} className={`delay-${index * 100}`}>
                <Link href={`/news/${news.slug}`} className="block">
                  <div className="group bg-port-frost rounded-2xl overflow-hidden card-hover cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${categoryColors[news.category] ?? "bg-gray-100 text-gray-600"}`}>
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-port-slate mb-2">{news.date}</p>
                      <h4 className="font-bold text-lg text-port-navy mb-3 group-hover:text-port-sky transition-colors">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* News Archive */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-port-navy mb-1">
                  News Archive
                </h2>
                <p className="text-port-slate text-sm">Past stories from Port Laken</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-port-slate text-sm">
                <span className="material-symbols-outlined text-base">archive</span>
                {archiveItems.length} articles
              </div>
            </div>
          </RevealOnScroll>

          <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
            {archiveItems.map((item, index) => (
              <RevealOnScroll key={item.slug} className={`delay-${Math.min(index * 50, 300)}`}>
                <Link href={`/news/${item.slug}`} className="block group">
                  <div className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-port-frost transition-colors duration-150">
                    <div className="flex items-center gap-4 min-w-0">
                      <span className={`hidden sm:inline-block text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${categoryColors[item.category] ?? "bg-gray-100 text-gray-600"}`}>
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-port-navy group-hover:text-port-sky transition-colors truncate">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs text-port-slate hidden md:block">{item.date}</span>
                      <span className="material-symbols-outlined text-port-slate text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}