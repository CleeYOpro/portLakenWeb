import EventCard from "@/components/EventCard";
import RevealOnScroll from "@/components/RevealOnScroll";

const events = [
  {
    title: "Spring Food Drive",
    description: "Join us for our annual spring food drive.",
    image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=600&q=80",
    category: "Community",
    date: "March 15, 2026",
    location: "Community Center",
    time: "9 AM - 4 PM",
  },
  {
    title: "Summer Concert Series",
    description: "Live music from local artists. Free admission!",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
    category: "Arts",
    date: "April 22, 2026",
    location: "Lakeside Park",
    time: "6 - 10 PM",
  },
  {
    title: "Job Skills Workshop",
    description: "Free professional development workshop.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    category: "Education",
    date: "May 8, 2026",
    location: "Public Library",
    time: "10 AM - 2 PM",
  },
];

const upcomingEvents = [
  { day: "15", month: "Jan", title: "Council Meeting", location: "City Hall", time: "7 PM" },
  { day: "20", month: "Jan", title: "MLK Day Event", location: "Library", time: "10 AM" },
  { day: "25", month: "Jan", title: "Winter Festival", location: "Downtown", time: "5 PM" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-bold text-port-navy mb-4 animate-fade-in-up">
            Events <span className="italic">&</span> Calendar
          </h1>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-3xl font-display font-bold text-port-navy mb-10">
              Featured Events
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {events.map((event, index) => (
              <RevealOnScroll key={event.title} className={`delay-${index * 100}`}>
                <EventCard {...event} />
              </RevealOnScroll>
            ))}
          </div>

          {/* Calendar and Upcoming */}
          <div className="grid lg:grid-cols-3 gap-12">
            <RevealOnScroll className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-bold text-port-navy">
                  Calendar
                </h2>
                <span className="font-medium text-port-navy">January 2026</span>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-port-mist overflow-hidden">
                <div className="calendar-grid border-b border-port-mist text-xs font-bold uppercase tracking-wider text-port-slate py-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center">{day}</div>
                  ))}
                </div>
                <div className="calendar-grid text-port-slate">
                  {[28, 29, 30, 31].map((d) => (
                    <div key={`prev-${d}`} className="calendar-day text-port-ice">{d}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <div
                      key={d}
                      className={`calendar-day ${
                        d === 10
                          ? "bg-port-navy text-white font-bold rounded-lg"
                          : d === 15
                          ? "bg-port-sky text-white font-bold rounded-lg"
                          : ""
                      }`}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <h2 className="text-2xl font-display font-bold text-port-navy mb-6">
                Upcoming
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.title}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-port-navy rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-lg font-bold leading-none">{event.day}</span>
                      <span className="text-xs uppercase">{event.month}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-port-navy text-sm">{event.title}</p>
                      <p className="text-xs text-port-slate">
                        {event.location} • {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}