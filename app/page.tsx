"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoMdAlert } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { Footer } from "./components/Footer";
import Masonry from "@/components/ui/Masonry";
import { FaArrowRight } from 'react-icons/fa6';

// Gallery Images
const galleryImages = [
  "https://cdn.pixabay.com/photo/2018/10/22/20/34/hamburg-3766309_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/04/16/15/00/port-7930392_640.jpg",
  "https://cdn.pixabay.com/photo/2020/03/22/10/19/fog-4956588_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/26/13/38/england-1224050_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/05/03/12/25/boats-7967544_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/01/11/31/grey-geese-5116582_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/07/09/07/river-1805188_640.jpg",
  "https://cdn.pixabay.com/photo/2019/10/04/10/56/father-4525302_640.jpg",
  "https://cdn.pixabay.com/photo/2021/11/01/11/31/taiwan-6760128_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/10/13/07/54/crane-houses-7518536_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/08/26/10/10/dockland-4431309_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/10/22/17/59/couple-498457_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/08/10/18/34/fireworks-3597389_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/28/10/57/couple-6898971_640.jpg",
  "https://cdn.pixabay.com/photo/2021/12/28/10/57/couple-6898971_640.jpg",
];
const upcomingEvents = [
  {
    month: 'FEB',
    day: '2',
    title: 'Groundhog Day Celebration',
    desc: 'Join us at the park for the annual Groundhog Day festivities with local treats and games.',
  },
  {
    month: 'FEB',
    day: '14',
    title: 'Valentine’s Day Market',
    desc: 'Local vendors showcase handmade gifts, flowers, and sweets for everyone to enjoy.',
  },
  {
    month: 'FEB',
    day: '17',
    title: 'Winter Arts Workshop',
    desc: 'Interactive workshops for all ages at the community arts center.',
  },
  {
    month: 'FEB',
    day: '20',
    title: 'City Council Town Hall',
    desc: 'Discuss upcoming projects and community initiatives with local leaders.',
  },
  {
    month: 'FEB',
    day: '28',
    title: 'Community Clean-Up Day',
    desc: 'Volunteer to help keep our parks and streets clean; tools and refreshments provided.',
  },
];

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
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
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
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0 rounded-b-[40px] overflow-hidden">
          <div className="absolute inset-0 bg-primary"></div>
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

              {/* Parallax Image */}
              <Image
                src={galleryImages[0]}
                alt="Port Laken Skyline"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
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


      {/* Services – Clean & Curved */}
      <PortLakenServicesSection galleryImages={galleryImages} />

      {/* News Section */}
      <section className="relative py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              WHAT&apos;S <span className="text-primary italic">HAPPENING</span> IN PORT LAKEN?
            </h2>
            <p className="text-gray-600 text-lg">
              Fresh stories and winter updates from around the city this season.{' '}
              <a
                href="/news"
                className="text-black border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
              >
                Read All News →
              </a>
            </p>
          </div>

          {/* News Grid - Compressed */}
          <div className="space-y-8">
            {[
              {
                date: "JAN 19, 2026",
                title: "MLK Day Service & Community Glow",
                desc: "Port Laken honors the legacy with a special MLK Day event at the waterfront park, featuring community service, live music, and glowing lantern displays.",
                image: "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?auto=format&fit=crop&q=80",
              },
              {
                date: "JAN 25, 2026",
                title: "Coastal Winter Market Lights Up Harbor",
                desc: "The Winter Market returns to Harbor Plaza with local artisans, warm food trucks, craft drinks, and waterfront lights.",
                image: "https://images.unsplash.com/photo-1519167758481-83f269a90c33?auto=format&fit=crop&q=80",
              },
              {
                date: "FEB 10, 2026",
                title: "City Unveils 2026 Sustainability Vision",
                desc: "Mayor Johnson outlines new green spaces, waterfront upgrades, and eco-friendly public projects.",
                image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80",
              },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                  {/* Image */}
                  <div className={`relative ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative h-44 md:h-52 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <p className="text-primary text-xs font-semibold tracking-wide mb-1">
                      {item.date}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-playfair">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold transition group-hover:translate-x-1"
                    >
                      Read Story
                      <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </div>

                {i < 2 && (
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Port Laken Calendar Spotlight - Themed Version */}
      <section
        className="relative py-16 md:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden rounded-b-[40px]"
        style={{
          backgroundColor: 'var(--color-primary)',
        }}
      >


        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-xl">
              See What’s <em className="italic font-bold text-white">Next</em>
            </h2>

            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Discover upcoming events, holidays, markets, and community moments in Port Laken.
              Stay in the know — never miss what’s happening next!
            </p>
          </div>

          {/* Main content - grid layout */}
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
            {/* Events Column */}
            <div className="space-y-6">
              {upcomingEvents.slice(0, 4).map((event, idx) => (
                <div
                  key={idx}
                  className="
        group flex items-center gap-5 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm
        hover:shadow-md hover:-translate-y-0.5 transition-all duration-200
      "
                >
                  <div
                    className="
          flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 
          rounded-2xl font-bold text-white
          bg-primary
        "
                  >
                    <span className="text-xs tracking-wider uppercase">{event.month}</span>
                    <span className="text-2xl">{event.day}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <div className="flex justify-end pt-2">
                <a
                  href="/calendar"
                  className="
        inline-flex items-center gap-2 px-5 py-2 text-white font-semibold 
        rounded-full border-2 border-white shadow-sm
        hover:bg-white hover:text-primary
        transition-all duration-200
      "
                >
                  View Full Calendar
                  <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>


            {/* Spotlight Slideshow - now much more prominent */}
            <div className="lg:sticky lg:top-8">
              <SpotlightSlideshow />
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

      {/* Masonry Gallery Section */}
      <section className="relative py-20 px-6 md:px-20 rounded-b-[40px] bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-extrabold text-white mb-4">
              LOVE, <span className="italic">PORT LAKEN</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              &quot;it&apos;s in the details&quot;
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="w-full" style={{ height: 'auto', minHeight: '1000px' }}>
            <Masonry
              items={galleryImages.map((img, index) => ({
                id: `${index + 1}`,
                img: img,
                url: img,
                height: [600, 450, 700, 500, 650, 550, 600, 480, 700, 520, 580, 650, 720, 500, 400][index] || 600,
              }))}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-20 px-6 md:px-20 overflow-hidden">
        {/* Optional subtle background accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary-shade/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Heading */}
            <div className="space-y-4">
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-primary-shade leading-tight tracking-tight">
                <span className="italic">Stay in the loop.</span> Port Laken’s latest stories, creative highlights, and the people shaping our city’s future.</h3>
              <p className="text-primary-shade/70 text-sm font-light tracking-wide hover:text-primary-shade/90 transition-colors duration-300">
                Unsubscribe anytime. We respect your privacy and never share your information.
              </p>
            </div>

            {/* Right: Form */}
            <div>
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
                {/* First Name */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="First name*"
                    required
                    className="w-full px-1 py-3 bg-transparent border-b-2 border-primary-shade/50 focus:border-primary-shade focus:outline-none transition-all duration-300 text-primary-shade placeholder-primary-shade/40 text-base font-light tracking-wide peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-shade transition-all duration-500 group-focus-within:w-full peer-focus:w-full"></span>
                </div>

                {/* Last Name */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Last name*"
                    required
                    className="w-full px-1 py-3 bg-transparent border-b-2 border-primary-shade/50 focus:border-primary-shade focus:outline-none transition-all duration-300 text-primary-shade placeholder-primary-shade/40 text-base font-light tracking-wide peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-shade transition-all duration-500 group-focus-within:w-full peer-focus:w-full"></span>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="w-full px-1 py-3 bg-transparent border-b-2 border-primary-shade/50 focus:border-primary-shade focus:outline-none transition-all duration-300 text-primary-shade placeholder-primary-shade/40 text-base font-light tracking-wide peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-shade transition-all duration-500 group-focus-within:w-full peer-focus:w-full"></span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-10 py-3.5 border-2 border-primary-shade text-primary-shade font-medium rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  <span className="relative z-10 tracking-wider">Submit</span>
                  <div className="absolute inset-0 bg-primary-shade translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// Port Laken Services Section Component
function PortLakenServicesSection({ galleryImages }) {
  const services = [
    {
      image: galleryImages[1],
      title: "HarborView Medical Center",
      description:
        "Comprehensive care from emergency to wellness — the backbone of Port Laken's health network.",
      resourceId: "1",
    },
    {
      image: galleryImages[2],
      title: "Mountains to Sound Greenway",
      description:
        "Protected trails, restoration projects, and outdoor access connecting people to nature.",
      resourceId: "32",
    },
    {
      image: galleryImages[3],
      title: "Crisis Support Network",
      description:
        "24/7 crisis line, recovery support, and outreach services for all ages.",
      resourceId: "5",
    },
    {
      image: galleryImages[4],
      title: "BrightSteps Childcare",
      description:
        "Safe, nurturing early education spaces supporting families and young learners.",
      resourceId: "7",
    },
  ];

  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 overflow-hidden rounded-b-[40px]"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary), var(--color-primary-shade))",
      }}
    >
      {/* Decorative Waves */}
      <div className="absolute inset-x-0 -bottom-48 h-[560px] opacity-30 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#244C5C"
            fillOpacity="0.7"
            d="M0,160L48,176C96,192,192,224,288,213C384,202,480,149,576,133C672,117,768,139,864,171C960,203,1056,245,1152,240C1248,235,1344,181,1392,155C1440,129,1440,96,1440,64L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header - Single Line at Max Width */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Supporting <span className="italic">Every Chapter</span> of Your Story
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-4xl mx-auto">

            From healthcare to community support, Port Laken is built around care, connection, and opportunity.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Track - Positioned Container */}
          <div className="relative min-h-96 sm:min-h-[450px] md:min-h-[550px] flex items-center justify-center">
            {/* Cards Wrapper - Absolute positioning for carousel effect */}
            <div className="relative w-full h-full">
              {services.map((service, i) => {
                const offset = (i - active + services.length) % services.length;
                let position = offset;

                // Convert to -1, 0, 1 (left, center, right)
                if (position > 1) position -= services.length;

                const isCenter = position === 0;
                const isLeft = position === -1;
                const isRight = position === 1;

                let translateX = 0;
                let scale = 0.7;
                let opacity = 0;
                let zIndex = 0;

                if (isCenter) {
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                } else if (isLeft) {
                  translateX = -320;
                  scale = 0.75;
                  opacity = 0.6;
                  zIndex = 20;
                } else if (isRight) {
                  translateX = 320;
                  scale = 0.75;
                  opacity = 0.6;
                  zIndex = 20;
                } else {
                  opacity = 0;
                  zIndex = 0;
                }

                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out pointer-events-auto"
                    style={{
                      transform: `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      visibility: opacity === 0 ? 'hidden' : 'visible',
                    }}
                  >
                    <div className="w-80 sm:w-96 md:w-[520px] rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition pointer-events-auto">
                      {/* Image */}
                      <div className="relative w-full h-48 sm:h-56 md:h-64">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>

                      {/* Content - Dynamic height */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-normal mb-4">
                          {service.description}
                        </p>
                        <a
                          href={`/resource-directory?resourceId=${service.resourceId}`}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition pointer-events-auto"
                        >
                          More Info →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Overlapping on Side Cards */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 h-11 w-11 md:h-13 md:w-13 rounded-full text-white font-bold text-lg md:text-xl transition flex items-center justify-center pointer-events-auto z-50 shadow-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-shade)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            aria-label="Previous service"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 h-11 w-11 md:h-13 md:w-13 rounded-full text-white font-bold text-lg md:text-xl transition flex items-center justify-center pointer-events-auto z-50 shadow-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-shade)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            aria-label="Next service"
          >
            ›
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8 relative z-10 pointer-events-auto">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'bg-white w-6' : 'bg-white/40 w-2.5 hover:bg-white/60'
                  }`}
                aria-label={`Go to service ${i + 1}`}
                aria-current={i === active ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Spotlight Slideshow Component
function SpotlightSlideshow() {
  const spotlightData = [
    {
      image: galleryImages[11],
      title: "Winter Film Festival",
      description: "Catch indie films and documentaries at the downtown theater from 6 PM nightly. Tickets available online.",
    },
    {
      image: galleryImages[12],
      title: "Valentine’s Craft Fair",
      description: "Local artisans showcase handmade gifts, flowers, and sweets at the city hall plaza all weekend.",
    },
    {
      image: galleryImages[13],
      title: "Community Charity Run",
      description: "5K run through the park to raise funds for local shelters. Registration starts at 8 AM.",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % spotlightData.length);
        setIsAnimating(false);
      }, 600); // match transition duration
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = spotlightData[currentIndex];

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[3/4] max-h-[580px] rounded-3xl overflow-hidden shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        priority={currentIndex === 0}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10 transform transition-all duration-700">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 drop-shadow-md">
          {title}
        </h3>
        <p className="text-base md:text-lg text-white/90 max-w-md drop-shadow-sm">
          {description}
        </p>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {spotlightData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsAnimating(false);
              }, 400);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-400 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Services Carousel Component
interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

function ServicesCarousel({ services }: { services: ServiceItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragCurrent(e.clientX);
  };

  // Handle drag move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragCurrent(e.clientX);
  };

  // Handle drag end
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const delta = dragStart - dragCurrent;
    const threshold = 50;

    if (Math.abs(delta) > threshold) {
      if (delta > 0) {
        // Dragged left, show next
        setCurrentIndex((prev) => (prev + 1) % services.length);
      } else {
        // Dragged right, show previous
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
      }
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Navigate to specific index
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Navigation buttons
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <div className="relative w-full">
      {/* Main Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track */}
        <div className="relative h-96 md:h-[420px] flex items-center justify-center">
          {services.map((service, index) => {
            const isCenter = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + services.length) % services.length;
            const isRight = index === (currentIndex + 1) % services.length;

            let position = "right-full";
            let scale = 0.75;
            let opacity = 0;
            let zIndex = 0;

            if (isCenter) {
              position = "left-1/2 -translate-x-1/2";
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (isLeft) {
              position = "left-0";
              scale = 0.75;
              opacity = 0.6;
              zIndex = 10;
            } else if (isRight) {
              position = "right-0";
              scale = 0.75;
              opacity = 0.6;
              zIndex = 10;
            }

            return (
              <div
                key={index}
                className={`
                  absolute top-1/2 -translate-y-1/2 w-11/12 sm:w-2/3 lg:w-1/2 
                  transition-all duration-500 ease-out cursor-grab active:cursor-grabbing
                  ${position} ${isDragging ? "" : ""}
                `}
                style={{
                  transform: `${position.includes("left-1/2") ? "translateX(-50%)" : ""} scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                {/* Service Card */}
                <div className="group relative h-full bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#244C5C]/70 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <a
                    href="#"
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[#708AA3]/30 hover:border-[#708AA3] hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 -ml-6 md:-ml-8 group active:scale-95"
          aria-label="Previous service"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 -mr-6 md:-mr-8 group active:scale-95"
          aria-label="Next service"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8 md:mt-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-white w-8"
              : "bg-white/40 w-2 hover:bg-white/60"
              }`}
            aria-label={`Go to service ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
