"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaTimes, FaMapMarkerAlt, FaClock, FaCalendar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Event {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
  time: string;
  fullDescription: string;
  organizer: string;
  contact: string;
}

interface CalendarEvent {
  id: string;
  title: string;
  location: string;
  time: string;
  date: Date; // Keep as Date object for easier comparison
  type: 'meeting' | 'social' | 'deadline' | 'community' | 'arts' | 'government' | 'health';
}

const events: Event[] = [
  {
    title: "Spring Food Drive",
    description: "Join us for our annual spring food drive.",
    image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=600&q=80",
    category: "Community",
    date: "March 15, 2026",
    location: "Community Center",
    time: "9 AM - 4 PM",
    fullDescription: "Help us make a difference in our community! The annual Spring Food Drive collects non-perishable food items for local families in need. Volunteers are needed to help sort donations, pack boxes, and distribute food to partner organizations. All ages welcome. Bring your family and friends to participate in this rewarding community event. Suggested donations include canned vegetables, pasta, rice, cereal, and peanut butter.",
    organizer: "Port Laken Community Food Network",
    contact: "fooddrive@portlaken.gov"
  },
  {
    title: "Summer Concert Series",
    description: "Live music from local artists. Free admission!",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
    category: "Arts",
    date: "April 22, 2026",
    location: "Lakeside Park",
    time: "6 - 10 PM",
    fullDescription: "Kick off the summer season with live music under the stars! The Summer Concert Series features talented local musicians performing a variety of genres including jazz, rock, folk, and blues. Bring blankets and lawn chairs. Food trucks will be on-site. No outside alcohol permitted - beer and wine available for purchase in the designated area. This family-friendly event is free and open to all Port Laken residents.",
    organizer: "Parks & Recreation Department",
    contact: "concerts@portlaken.gov"
  },
  {
    title: "Job Skills Workshop",
    description: "Free professional development workshop.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    category: "Education",
    date: "May 8, 2026",
    location: "Public Library",
    time: "10 AM - 2 PM",
    fullDescription: "Boost your career with our comprehensive Job Skills Workshop! Topics include resume writing, interview techniques, networking strategies, and LinkedIn optimization. Professional career counselors will provide one-on-one feedback sessions. Lunch provided. Bring copies of your current resume for review. Pre-registration required as space is limited to 50 participants.",
    organizer: "Port Laken Workforce Development",
    contact: "workforce@portlaken.gov"
  },
  {
    title: "Earth Day Cleanup",
    description: "Help beautify our parks and beaches.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    category: "Environment",
    date: "April 22, 2026",
    location: "Various Locations",
    time: "8 AM - 12 PM",
    fullDescription: "Celebrate Earth Day by giving back to our environment! Join hundreds of volunteers across Port Laken for our annual cleanup event. Choose from beach cleanups, park restoration, or neighborhood beautification projects. All supplies provided including gloves, bags, and grabbers. Participants receive a free Earth Day t-shirt and lunch. Great opportunity for students needing community service hours.",
    organizer: "Environmental Services Department",
    contact: "earthday@portlaken.gov"
  },
  {
    title: "Farmers Market Opening",
    description: "Fresh local produce and artisan goods.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
    category: "Community",
    date: "May 1, 2026",
    location: "Town Square",
    time: "7 AM - 1 PM",
    fullDescription: "The Port Laken Farmers Market returns for its 20th season! Shop from over 60 local vendors offering fresh fruits, vegetables, baked goods, honey, flowers, and handmade crafts. Live music every Saturday. SNAP/EBT accepted with matching program for fresh produce. New this year: cooking demonstrations at 10 AM featuring local chefs using market ingredients.",
    organizer: "Port Laken Farmers Market Association",
    contact: "farmersmarket@portlaken.gov"
  },
  {
    title: "Kids Art Camp",
    description: "Week-long creative arts program for ages 6-12.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    category: "Education",
    date: "June 15-19, 2026",
    location: "Arts Center",
    time: "9 AM - 3 PM",
    fullDescription: "Unleash your child's creativity at our popular Kids Art Camp! This five-day program includes painting, sculpture, ceramics, mixed media, and more. Professional art instructors guide students through age-appropriate projects they can take home. All materials included. Extended care available until 5 PM for additional fee. Limited to 20 students per session - register early!",
    organizer: "Port Laken Arts Council",
    contact: "artcamp@portlaken.gov"
  },
  {
    title: "Senior Health Fair",
    description: "Free health screenings and wellness resources.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    category: "Health",
    date: "May 20, 2026",
    location: "Senior Center",
    time: "10 AM - 3 PM",
    fullDescription: "Take charge of your health at the annual Senior Health Fair! Free screenings include blood pressure, cholesterol, hearing, vision, and bone density. Meet representatives from Medicare, local healthcare providers, and senior services organizations. Educational workshops on nutrition, fall prevention, and managing chronic conditions. Free flu shots available (bring insurance card). Light refreshments provided.",
    organizer: "Senior Services Division",
    contact: "seniors@portlaken.gov"
  },
  {
    title: "Independence Day Celebration",
    description: "Fireworks, food, and family fun!",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    category: "Community",
    date: "July 4, 2026",
    location: "Harbor Park",
    time: "4 PM - 10 PM",
    fullDescription: "Celebrate America's birthday at Port Laken's biggest event of the year! Activities include live entertainment on two stages, carnival games, face painting, and a patriotic parade at 5 PM. Food vendors offer everything from BBQ to ice cream. The spectacular fireworks show begins at 9:30 PM over the harbor. Free parking at Eastside High School with shuttle service.",
    organizer: "City of Port Laken",
    contact: "events@portlaken.gov"
  },
];

// Generate some realistic upcoming events for the calendar (focusing on Feb-April 2026)
const generateCalendarEvents = (): CalendarEvent[] => {
  const events: CalendarEvent[] = [
    { id: '1', title: "City Council Meeting", location: "City Hall Chamber", time: "6:00 PM", date: new Date(2026, 1, 5), type: 'government' }, // Feb 5
    { id: '2', title: "Public Library Book Circle", location: "Library Room B", time: "10:30 AM", date: new Date(2026, 1, 7), type: 'community' }, // Feb 7
    { id: '3', title: "Planning Commission", location: "City Hall Room 101", time: "2:00 PM", date: new Date(2026, 1, 10), type: 'government' }, // Feb 10
    { id: '4', title: "Youth Soccer Signup", location: "Rec Center", time: "9:00 AM", date: new Date(2026, 1, 14), type: 'health' }, // Feb 14
    { id: '5', title: "Valentines Jazz Night", location: "The Harbor Club", time: "8:00 PM", date: new Date(2026, 1, 14), type: 'arts' }, // Feb 14
    { id: '6', title: "Tech Innovation Mixer", location: "Port Laken Co-op", time: "5:30 PM", date: new Date(2026, 1, 18), type: 'meeting' }, // Feb 18
    { id: '7', title: "Community Garden Prep", location: "Northside Garden", time: "9:00 AM", date: new Date(2026, 1, 21), type: 'community' }, // Feb 21
    { id: '8', title: "Small Business Workshop", location: "Chamber of Commerce", time: "11:00 AM", date: new Date(2026, 1, 24), type: 'meeting' }, // Feb 24
    { id: '9', title: "Winter Farmers Market", location: "Town Square Pavilion", time: "8:00 AM", date: new Date(2026, 1, 28), type: 'community' }, // Feb 28

    // March
    { id: '10', title: "School Board Meeting", location: "District Office", time: "6:30 PM", date: new Date(2026, 2, 3), type: 'government' },
    { id: '11', title: "First Friday Art Walk", location: "Downtown Arts District", time: "5:00 PM", date: new Date(2026, 2, 6), type: 'arts' },
    { id: '12', title: "Spring Cleaning Day", location: "Various Parks", time: "8:00 AM", date: new Date(2026, 2, 14), type: 'community' },
  ];
  return events;
};

const calendarEventsList = generateCalendarEvents();

const categoryColors: Record<string, string> = {
  Community: "bg-port-sky text-white",
  Arts: "bg-purple-500 text-white",
  Education: "bg-green-500 text-white",
  Environment: "bg-emerald-600 text-white",
  Health: "bg-red-500 text-white",
  government: "bg-slate-600 text-white",
  meeting: "bg-blue-400 text-white",
};

export default function EventsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calendar State
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 1, 1)); // Feb 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [displayedCalendarEvents, setDisplayedCalendarEvents] = useState<CalendarEvent[]>([]);

  const visibleCards = 3;

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Update displayed calendar events logic
  useEffect(() => {
    if (selectedDate) {
      // Filter events for the exact selected date
      const daysEvents = calendarEventsList.filter(e =>
        e.date.getDate() === selectedDate.getDate() &&
        e.date.getMonth() === selectedDate.getMonth() &&
        e.date.getFullYear() === selectedDate.getFullYear()
      );
      setDisplayedCalendarEvents(daysEvents);
    } else {
      // Default: show generic upcoming events from current month view onwards
      // Just showing a mix of events to look distinct
      const upcoming = calendarEventsList
        .filter(e => e.date >= new Date(2026, 1, 1)) // Filter past events if we were in real time
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .slice(0, 5);
      setDisplayedCalendarEvents(upcoming);
    }
  }, [selectedDate]); // Re-run when selection changes

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
  };

  const getVisibleEvents = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(events[(currentIndex + i) % events.length]);
    }
    return visible;
  };

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "unset";
  };

  // Calendar Helpers
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    setSelectedDate(null); // Clear selection on month change
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday

    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  // Check if a day has events
  const hasEvents = (day: number) => {
    return calendarEventsList.some(e =>
      e.date.getDate() === day &&
      e.date.getMonth() === currentMonth.getMonth() &&
      e.date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return selectedDate?.getDate() === day &&
      selectedDate?.getMonth() === currentMonth.getMonth() &&
      selectedDate?.getFullYear() === currentMonth.getFullYear();
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <>
      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-56">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[selectedEvent.category] || "bg-gray-500 text-white"}`}>
                  {selectedEvent.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-224px)]">
              <h3 className="font-display text-2xl font-bold text-port-navy mb-4">
                {selectedEvent.title}
              </h3>

              {/* Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 bg-port-frost rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-port-navy/10 rounded-lg flex items-center justify-center">
                    <FaCalendar className="text-port-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-port-slate">Date</p>
                    <p className="font-semibold text-port-navy text-sm">{selectedEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-port-navy/10 rounded-lg flex items-center justify-center">
                    <FaClock className="text-port-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-port-slate">Time</p>
                    <p className="font-semibold text-port-navy text-sm">{selectedEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-port-navy/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-port-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-port-slate">Location</p>
                    <p className="font-semibold text-port-navy text-sm">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-port-navy mb-2">About This Event</h4>
                <p className="text-port-slate leading-relaxed">{selectedEvent.fullDescription}</p>
              </div>

              {/* Organizer Info */}
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-port-slate mb-1">
                  <span className="font-semibold text-port-navy">Organized by:</span> {selectedEvent.organizer}
                </p>
                <p className="text-sm text-port-slate">
                  <span className="font-semibold text-port-navy">Contact:</span>{" "}
                  <a href={`mailto:${selectedEvent.contact}`} className="text-port-sky hover:underline">
                    {selectedEvent.contact}
                  </a>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-4 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-bold text-port-navy mb-4 animate-fade-in-up">
            Events <span className="italic">&</span> Calendar
          </h1>
        </div>
      </section>

      {/* Featured Events Carousel */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-display font-bold text-port-navy">
                Featured Events
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-port-navy hover:bg-port-navy hover:text-white transition-colors"
                  aria-label="Previous events"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-port-navy hover:bg-port-navy hover:text-white transition-colors"
                  aria-label="Next events"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(0)` }}
            >
              {getVisibleEvents().map((event, index) => (
                <div
                  key={`${event.title}-${index}`}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1.33rem)]"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category] || "bg-gray-500 text-white"}`}>
                          {event.category}
                        </span>
                        <span className="text-sm text-port-slate">{event.date}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-port-navy mb-2">
                        {event.title}
                      </h3>
                      <p className="text-port-slate text-sm mb-4">{event.description}</p>
                      <div className="flex items-center gap-4 text-xs text-port-slate mb-4">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-port-sky" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-port-sky" />
                          {event.time}
                        </span>
                      </div>
                      <button
                        onClick={() => openModal(event)}
                        className="w-full py-2 bg-port-frost text-port-navy font-semibold rounded-lg hover:bg-port-navy hover:text-white transition-colors"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-port-navy w-6"
                    : "bg-port-slate/30 hover:bg-port-slate/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Calendar and Upcoming */}
          <div className="grid lg:grid-cols-3 gap-12 mt-16">
            <RevealOnScroll className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-bold text-port-navy">
                  Calendar
                </h2>
                <div className="flex items-center gap-4">
                  <button onClick={prevMonth} className="text-port-navy hover:text-port-sky transition-colors p-2">
                    <FaChevronLeft />
                  </button>
                  <span className="font-medium text-port-navy min-w-[140px] text-center text-lg">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </span>
                  <button onClick={nextMonth} className="text-port-navy hover:text-port-sky transition-colors p-2">
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-port-mist overflow-hidden">
                <div className="grid grid-cols-7 border-b border-port-mist text-xs font-bold uppercase tracking-wider text-port-slate py-4 bg-gray-50/50">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 text-port-slate">
                  {/* Padding for previous month's days */}
                  {paddingDays.map((_, index) => (
                    <div key={`padding-${index}`} className="h-24 sm:h-32 bg-gray-50/30 border-r border-b border-gray-100 last:border-r-0"></div>
                  ))}

                  {/* Calendar Days */}
                  {days.map((day, index) => {
                    const isToday = day === new Date().getDate() &&
                      currentMonth.getMonth() === new Date().getMonth() &&
                      currentMonth.getFullYear() === new Date().getFullYear();
                    const hasEvent = hasEvents(day);
                    const selected = isSelected(day);
                    const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                    const isPast = dayDate < new Date(new Date().setHours(0, 0, 0, 0));

                    return (
                      <div
                        key={day}
                        onClick={() => setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                        className={`
                          relative h-24 sm:h-32 border-b border-r border-gray-100 p-2 cursor-pointer transition-all duration-200
                          ${hasEvent ? 'hover:bg-port-sky/5' : ''}
                          ${selected ? 'bg-port-sky/10 ring-2 ring-inset ring-port-sky' : 'hover:bg-gray-50'}
                          ${(index + paddingDays.length + 1) % 7 === 0 ? 'border-r-0' : ''}
                        `}
                      >
                        <div className="flex justify-between items-start">
                          <span className={`
                            w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium
                            ${isToday ? 'bg-port-navy text-white' : ''} 
                            ${selected && !isToday ? 'text-port-sky font-bold' : ''}
                            ${isPast && !selected && !isToday ? 'text-gray-400' : ''}
                          `}>
                            {day}
                          </span>
                          {hasEvent && (
                            <div className="flex gap-1 flex-wrap justify-end max-w-[60%]">
                              <span className={`w-2 h-2 rounded-full hidden sm:block ${selected ? 'bg-port-sky' : 'bg-port-navy'}`}></span>
                            </div>
                          )}
                        </div>

                        {/* Mobile dot indicator */}
                        {hasEvent && (
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:hidden">
                            <div className="w-1.5 h-1.5 rounded-full bg-port-navy"></div>
                          </div>
                        )}

                        {/* Desktop event previews (optional, simple indicators for now) */}
                        <div className="hidden sm:flex flex-col gap-1 mt-1">
                          {calendarEventsList
                            .filter(e => e.date.getDate() === day && e.date.getMonth() === currentMonth.getMonth())
                            .slice(0, 2)
                            .map(e => (
                              <div key={e.id} className="text-[10px] truncate px-1 rounded bg-slate-100 text-slate-700 font-medium">
                                {e.time}
                              </div>
                            ))
                          }
                          {calendarEventsList.filter(e => e.date.getDate() === day && e.date.getMonth() === currentMonth.getMonth()).length > 2 && (
                            <div className="text-[9px] text-gray-400 px-1">+ more</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200 h-fit sticky top-24">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-display font-bold text-port-navy">
                    {selectedDate ? (
                      <span className="flex items-center gap-2">
                        <span className="text-port-sky">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span>Events</span>
                      </span>
                    ) : "Upcoming"}
                  </h2>
                  {selectedDate && (
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="text-xs font-semibold text-port-slate hover:text-port-navy transition-colors bg-gray-100 px-3 py-1 rounded-full"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>

                <div className="space-y-4 min-h-[300px]">
                  {displayedCalendarEvents.length > 0 ? (
                    displayedCalendarEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:translate-x-1 transition-all cursor-pointer group border border-transparent hover:border-port-mist"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-port-navy to-port-slate rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                          <span className="text-xl font-bold leading-none">{event.date.getDate()}</span>
                          <span className="text-[10px] uppercase font-medium tracking-wide opacity-80">{monthNames[event.date.getMonth()].substring(0, 3)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-port-navy text-base leading-tight mb-1 truncate group-hover:text-port-sky transition-colors">{event.title}</p>
                          <div className="flex items-center gap-2 text-xs text-port-slate mb-1">
                            <FaClock className="text-gray-400" size={10} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-port-slate">
                            <FaMapMarkerAlt className="text-gray-400" size={10} />
                            <span className="truncate">{event.location}</span>
                          </div>
                          <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold ${categoryColors[event.type] || "bg-gray-200 text-gray-600"}`}>
                            {event.type}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-port-slate">
                      <FaCalendar className="text-3xl mb-2 opacity-20" />
                      <p className="font-medium">No events scheduled</p>
                      <p className="text-sm opacity-60">Try selecting another date</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
