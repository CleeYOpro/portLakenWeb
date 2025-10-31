"use client";

import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaHospital,
  FaChild,
  FaHandsHelping,
} from "react-icons/fa";
import { GiWaves, GiTreeGrowth } from "react-icons/gi";
import { IoMdAlert } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import Navbar from "./components/Navbar";
import SpotlightCard from "@/components/ui/spotlight-card";

const heroSlides = [
  {
    id: 1,
    image: "/dundee.png",
    title: "Community",
    titleItalic: "First",
    description:
      "For over a century, connecting residents, honoring our heritage, and embracing innovation to build a community where everyone belongs and thrives.",
    buttonText: "Our Story",
    buttonLink: "/about",
  },
  {
    id: 2,
    image: "/iceskate.png",
    title: "Winter",
    titleItalic: "Highlights",
    description:
      "The downtown ice rink reopens this December! Enjoy free skating weekends, winter lights, and cozy cocoa pop-ups across Port Laken.",
    buttonText: "Read More",
    buttonLink: "/news",
  },
  {
    id: 3,
    image: "/marvinsroom.png",
    title: "Latest",
    titleItalic: "News",
    description:
      "Port Laken launches new recycling initiative this week and announces city council decisions affecting local parks and public spaces.",
    buttonText: "Read More",
    buttonLink: "/news",
  },
  {
    id: 4,
    image: "coolai.gif",
    title: "Smart",
    titleItalic: "Resources",
    description:
      "Explore Port Laken’s new AI-powered features — from instant service guides to a chatbot that helps you find exactly what you need, faster.",
    buttonText: "Explore Features",
    buttonLink: "/resource-directory",
  },
];

const quickActions = [
  {
    title: "Emergency Alerts",
    link: "#alerts",
    icon: <IoMdAlert className="text-3xl text-primary" />,
  },
  {
    title: "Submit Resource",
    link: "#submit",
    icon: <HiDocumentText className="text-3xl text-primary" />,
  },
  {
    title: "Pay Utilities",
    link: "#utilities",
    icon: <MdPayment className="text-3xl text-primary" />,
  },
  {
    title: "Transportation & Maps",
    link: "#transportation",
    icon: <FaBus className="text-3xl text-primary" />,
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, activeSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />

      {/* HERO SECTION – NO WHITE FLASH, CURVED WHEN SCROLLED */}
      <div className="relative min-h-screen bg-primary">
        {/* Curve Mask */}
        <div
          className={`
            absolute inset-0 overflow-hidden
            ${scrolled ? "rounded-b-[40px]" : ""}
          `}
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === activeSlide;
            const isPrev =
              index === (activeSlide - 1 + heroSlides.length) % heroSlides.length;

            return (
              <div
                key={slide.id}
                className={`
                  absolute inset-0 transition-all duration-700 ease-in-out
                  ${isActive
                    ? "translate-x-0 opacity-100 z-10"
                    : isPrev
                      ? "-translate-x-full opacity-0 z-0"
                      : "translate-x-full opacity-0 z-0"}
                `}
              >
                {/* Background Image + Primary Fallback */}
                <div
                  className="absolute inset-0 bg-primary bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

                {/* Content */}
                <div className="relative flex items-end min-h-screen px-6 md:px-20 pb-20 pt-24">
                  <div className="relative max-w-7xl w-full mx-auto z-10">
                    <div className="max-w-4xl">
                      <h1 className="text-white mb-6">
                        <span className="font-playfair text-5xl md:text-8xl font-bold">
                          {slide.title}{" "}
                        </span>
                        <span className="font-playfair text-5xl md:text-8xl font-bold italic">
                          {slide.titleItalic}
                        </span>
                      </h1>

                      <div className="flex flex-col md:flex-row md:items-end md:gap-8">
                        <p className="text-white/90 text-base md:text-lg mb-3 md:mb-0 leading-relaxed max-w-xl">
                          {slide.description}
                        </p>

                        {slide.buttonText && (
                          <a
                            href={slide.buttonLink}
                            className="bg-white hover:bg-primary/90 hover:text-white text-primary transition-all px-6 py-3 rounded-full font-medium text-base shadow-lg flex items-center gap-2 whitespace-nowrap border border-white/20"
                          >
                            {slide.buttonText}
                            <FaArrowRight className="text-sm" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <section className="relative py-16 px-4 sm:px-6 md:px-20 overflow-hidden rounded-b-3xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 rounded-b-[40px] overflow-hidden">
          <img
            src="/quick-actions-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, idx) => {
              const [first, ...rest] = action.title.split(' ');
              const second = rest.join(' ') || '';

              return (
                <a
                  key={idx}
                  href={action.link}
                  className="group relative block transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] touch-manipulation"
                // Removed: p-[2px] gradient border
                >
                  {/* Inner Pill - No outer border, just background */}
                  <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-full px-4 py-3.5 sm:px-6 sm:py-5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-primary/10">

                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 p-2.5 sm:p-3 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {action.icon}
                    </div>

                    {/* Two-Line Title */}
                    <div className="flex flex-col leading-tight">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                        {first}
                      </span>
                      {second && (
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                          {second}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subtle Glow on Hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 [@media(hover:hover)]:block hidden sm:block">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: '0 0 20px rgba(30, 64, 175, 0.3)',
                      }}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left: Text + Button */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-primary">Port Laken</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Port Laken is a city where community meets innovation. From scenic parks to thriving neighborhoods, it’s a place where families, businesses, and visitors all feel at home. Discover how tradition and progress come together to make our city unique.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            {/* Right: Parallax Image */}
            <div className="relative order-1 md:order-2 h-64 md:h-96 rounded-[40px] overflow-hidden shadow-2xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

              {/* Parallax Container */}
              <div className="parallax-image absolute inset-0 w-full h-full">
                <img
                  src="/port-laken-skyline.jpg" // Replace with your city image
                  alt="Port Laken Skyline"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Parallax CSS */}
        <style jsx>{`
    .parallax-image {
      transform: translateY(0);
      transition: transform 0.3s ease-out;
    }
    @media (min-width: 768px) {
      .parallax-image {
        transform: translateY(calc(var(--scroll-y, 0) * -0.3));
      }
    }
  `}</style>

        {/* Scroll Listener for Parallax */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if (typeof window !== 'undefined') {
          const parallax = document.querySelector('.parallax-image');
          const updateParallax = () => {
            if (!parallax) return;
            const scrollY = window.scrollY;
            parallax.style.setProperty('--scroll-y', scrollY + 'px');
          };
          window.addEventListener('scroll', updateParallax);
          updateParallax();
        }
      `,
          }}
        />
      </section>


      {/* Services */}
      <section
        id="services"
        className={`relative py-24 px-6 md:px-12 lg:px-20 bg-primary transition-all duration-500 ${scrolled ? 'rounded-b-[50px]' : ''
          } animate-fadeIn overflow-hidden`}
      >
        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white rounded-full mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-6xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Supporting <span className="text-primary-500">Every Chapter</span> of Your Story
            </h2>
            <p className="text-lg text-white/80 max-w-5xl mx-auto">
              From healthcare to outdoor adventures, we're here to provide the resources and support you need to thrive in Port Laken.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/images/harborview.jpg",
                title: "HarborView Medical Center",
                description:
                  "Comprehensive care from emergency to wellness — the heartbeat of Port Laken's health network.",
              },
              {
                image: "/images/greenway.jpg",
                title: "Mountains to Sound Greenway",
                description:
                  "Ecological restoration, hiking, and environmental recreation resources for all ages.",
              },
              {
                image: "/images/crisis-support.jpg",
                title: "Crisis Support Network",
                description:
                  "24/7 crisis line, recovery help, warm line, and teen outreach services.",
              },
              {
                image: "/images/brightsteps.jpg",
                title: "BrightSteps Childcare",
                description:
                  "Nurturing Port Laken's youngest residents with quality early education and care.",
              },
            ]
              .map((service, index) => (
                <SpotlightCard
                  key={index}
                  className="h-full group hover:scale-[1.02] transition-transform duration-300  rounded-[40px]" // thicker border + stronger rounding
                  spotlightColor="rgba(255, 255, 255, 0.1)"
                >
                  <div className="flex flex-col h-full p-6 bg-primary">
                    {/* Image Holder */}
                    <div className="h-16 w-48 rounded-xl mb-5 flex items-center justify-center bg-white/20 overflow-hidden shadow-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </div>



                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white flex-grow text-sm leading-relaxed">{service.description}</p>

                    {/* Learn More */}
                    <div className="mt-4 pt-3 border-t border-white/20">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors group-hover:translate-x-1 duration-300"
                      >
                        Learn more
                        <svg
                          className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>

              ))}
          </div>
        </div>
      </section>


      {/* Port Laken Calendar Spotlight - Themed Version */}
      <section
        className="relative py-16 px-4 md:px-12 lg:px-20 flex justify-center items-center overflow-hidden rounded-b-[40px]"
        style={{
          backgroundImage: "url('/huron.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/50 z-0"></div>

        <div className="max-w-6xl w-full mx-auto relative z-10">
          {/* Title + Divider */}
          <div className="mb-10">
            <h2 className="font-playfair text-5xl md:text-6xl font-extrabold text-white text-left tracking-tight drop-shadow-lg">
              Port Laken <span className="text-primary-200">City Calendar</span>
            </h2>
            <p className="text-white/90 text-left mt-3 text-lg md:text-xl max-w-2xl">
              Discover all the events, holidays, and community gatherings happening in Port Laken. Stay connected and never miss out on what’s coming up next!
            </p>
            <div className="w-full h-1 bg-white/40 rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
            {/* Spotlight Image Card */}
            <div className="flex-1 flex flex-col items-center md:items-start md:ml-0">
              <div className="relative w-full sm:max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-primary/30 border border-white/30 flex items-end min-h-[220px] md:mx-0 mx-auto">
                <img
                  src="/calendar-spotlight.jpg"
                  alt="Calendar"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white/90 px-6 py-4 rounded-b-3xl">
                  <h3 className="font-bold text-lg text-primary">Frosty Lane</h3>
                  <p className="text-gray-700 text-sm">
                    Enjoy snow, lights, music, and nightly parades at 7 PM. Free parking and fun for everyone.
                  </p>
                </div>
              </div>
            </div>


            {/* Event Cards - Improved Design */}
            <div className="flex-1 flex flex-col gap-5 w-full md:w-auto">
              {[
                { month: 'NOV', day: '11', title: 'Veterans Day - City Hall Offices Closed', desc: 'City Hall offices closed' },
                { month: 'NOV', day: '12', title: 'Meet and Green', desc: 'Community meet-up' },
                { month: 'NOV', day: '27', title: 'Thanksgiving Day - City Hall Offices Closed', desc: 'City Hall offices closed' },
              ].map((event, idx) => (
                <div
                  key={idx}
                  className="group flex items-center bg-white rounded-3xl px-6 py-5 shadow-md border border-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-primary"
                  style={{ cursor: 'pointer' }}
                >
                  {/* Date Pill */}
                  <div className="flex flex-col items-center justify-center mr-5 bg-primary rounded-full w-16 h-16 shadow-sm transition-all duration-300 group-hover:bg-primary/90">
                    <span className="text-white font-bold text-xs leading-none tracking-wide">
                      {event.month}
                    </span>
                    <span className="text-white text-2xl font-bold leading-none">
                      {event.day}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1 group-hover:text-primary transition-colors duration-300">{event.title}</h4>
                    <p className="text-sm text-gray-700">{event.desc}</p>
                  </div>
                </div>
              ))}

              {/* View Full Calendar Button */}
              <div className="flex justify-end mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-full border-2 border-primary 
               transition-all duration-300 hover:bg-white hover:text-primary hover:border-4 hover:shadow-lg hover:scale-105"
                >
                  VIEW FULL CALENDAR
                  <FaArrowRight className="text-sm transition-colors duration-300 group-hover:text-primary" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="relative py-20 px-6 bg-white w-full">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="font-playfair text-left text-xl md:text-3xl font-semibold text-gray-600 max-w-5xl mb-16">
              In 2025, Port Laken received numerous awards for its quality of life and innovation, including <a href="https://www.usnews.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}>#1 Family-Friendly City in the US</a>,
              <a href="https://urbannext.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}> Most Innovative City</a>, and <a href="https://urbannext.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}>Work-Life Balance honors</a>.
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="relative overflow-hidden group">
              <div className="awards-container flex gap-16 pb-16">
                {[
                  {
                    id: 1,
                    award: "#1 Best Family-Friendly Place to Live in the U.S.",
                    source: "U.S. News & World Report, 2025",
                    description: "Safe neighborhoods, top-rated schools, and a community built on connection and care.",
                    image: "/awards/family-friendly.jpg"
                  },
                  {
                    id: 2,
                    award: "Most Innovative Mid-Sized City in the Northwest",
                    source: "UrbanNext Magazine, 2025",
                    description: "AI-powered public services, clean energy, and citizen-first tech.",
                    image: "/awards/innovation.jpg"
                  },
                  {
                    id: 3,
                    award: "#1 Civic Building Redesign — Port Laken City Hall",
                    source: "Design Forward Awards, 2025",
                    description: "A blend of heritage design, solar glass, and open-floor collaboration.",
                    image: "/awards/city-hall.jpg"
                  },
                  {
                    id: 4,
                    award: "Best Winter Festival in a Small City",
                    source: "Travel & Culture Weekly, 2025",
                    description: "Celebrated for ice sculptures, art shows, and live harbor performances.",
                    image: "/awards/winter-festival.jpg"
                  },
                  {
                    id: 5,
                    award: "Top 100 Emerging AI Startups — NeuralHaven Labs",
                    source: "TechNation, 2025",
                    description: "Port Laken's own accessibility-focused AI firm making global waves.",
                    image: "/awards/neuralhaven.jpg"
                  }
                ].map((award, index) => (
                  <div key={award.id} className="flex-none w-80 sm:w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border group/card" style={{ borderColor: 'var(--color-primary-shade)' }}>
                    <div className="h-48 overflow-hidden relative" style={{ backgroundColor: 'var(--color-primary-shade)' }}>
                      <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--color-primary)' }}>
                        <span className="text-sm font-medium">Award Image</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-900 font-bold text-xl mb-2 transition-colors" style={{ color: '' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>{award.award}</h3>
                      <p className="text-sm text-gray-500 mb-3">{award.source}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                ))}
                {/* Duplicate items for infinite scroll effect */}
                {[
                  {
                    id: 1,
                    award: "#1 Best Family-Friendly Place to Live in the U.S.",
                    source: "U.S. News & World Report, 2025",
                    description: "Safe neighborhoods, top-rated schools, and a community built on connection and care.",
                    image: "/awards/family-friendly.jpg"
                  },
                  {
                    id: 2,
                    award: "Most Innovative Mid-Sized City in the Northwest",
                    source: "UrbanNext Magazine, 2025",
                    description: "AI-powered public services, clean energy, and citizen-first tech.",
                    image: "/awards/innovation.jpg"
                  },
                  {
                    id: 3,
                    award: "#1 Civic Building Redesign — Port Laken City Hall",
                    source: "Design Forward Awards, 2025",
                    description: "A blend of heritage design, solar glass, and open-floor collaboration.",
                    image: "/awards/city-hall.jpg"
                  },
                  {
                    id: 4,
                    award: "Best Winter Festival in a Small City",
                    source: "Travel & Culture Weekly, 2025",
                    description: "Celebrated for ice sculptures, art shows, and live harbor performances.",
                    image: "/awards/winter-festival.jpg"
                  },
                  {
                    id: 5,
                    award: "Top 100 Emerging AI Startups — NeuralHaven Labs",
                    source: "TechNation, 2025",
                    description: "Port Laken's own accessibility-focused AI firm making global waves.",
                    image: "/awards/neuralhaven.jpg"
                  }
                ].map((award, index) => (
                  <div key={`duplicate-${award.id}`} className="flex-none w-80 sm:w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border group/card" style={{ borderColor: 'var(--color-primary-shade)' }}>
                    <div className="h-48 overflow-hidden relative" style={{ backgroundColor: 'var(--color-primary-shade)' }}>
                      <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--color-primary)' }}>
                        <span className="text-sm font-medium">Award Image</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-900 font-bold text-xl mb-2 transition-colors" style={{ color: '' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>{award.award}</h3>
                      <p className="text-sm text-gray-500 mb-3">{award.source}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }
          .awards-container {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .group:hover .awards-container {
            animation-play-state: paused;
          }
          .awards-container:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GiWaves className="text-white text-3xl" />
            <span className="text-white font-playfair font-bold text-2xl">Port Laken</span>
          </div>
          <p className="text-white/90 mb-8 text-lg">Building community, one connection at a time.</p>
          <div className="flex justify-center gap-4 mb-6">
            <FaTwitter className="text-2xl text-white/80 hover:text-white transition-colors cursor-pointer hover:scale-110 transform" />
            <FaInstagram className="text-2xl text-white/80 hover:text-white transition-colors cursor-pointer hover:scale-110 transform" />
            <FaEnvelope className="text-2xl text-white/80 hover:text-white transition-colors cursor-pointer hover:scale-110 transform" />
          </div>
          <p className="text-white/60 text-sm">© 2024 Port Laken. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
