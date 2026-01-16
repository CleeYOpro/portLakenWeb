"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
import { Footer } from "./components/Footer";
import SpotlightCard from "@/components/ui/spotlight-card";
import Masonry from "@/components/ui/Masonry";

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
      <section
        id="services"
        className="relative py-20 md:py-24 overflow-hidden rounded-b-[40px]"
        style={{
          background: `linear-gradient(to bottom, var(--color-primary), var(--color-primary-shade))`,
        }}
      >
        {/* -------------------  Animated Waves (far below cards) ------------------- */}
        <div className="absolute inset-x-0 -bottom-48 h-[560px] opacity-30 pointer-events-none">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#708AA3" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#244C5C" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <path
              fill="url(#waveGrad)"
              fillOpacity="0.7"
              d="M0,160L48,176C96,192,192,224,288,213C384,202,480,149,576,133C672,117,768,139,864,171C960,203,1056,245,1152,240C1248,235,1344,181,1392,155C1440,129,1440,96,1440,64L1440,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="22s"
                repeatCount="indefinite"
                values="
            M0,160L48,176C96,192,192,224,288,213C384,202,480,149,576,133C672,117,768,139,864,171C960,203,1056,245,1152,240C1248,235,1344,181,1392,155C1440,129,1440,96,1440,64L1440,320L0,320Z;
            M0,180L48,165C96,150,192,160,288,170C384,181,480,192,576,176C672,160,768,117,864,112C960,107,1056,139,1152,155C1248,171,1344,171,1392,171C1440,171,1440,171,1440,171L1440,320L0,320Z;
            M0,160L48,176C96,192,192,224,288,213C384,202,480,149,576,133C672,117,768,139,864,171C960,203,1056,245,1152,240C1248,235,1344,181,1392,155C1440,129,1440,96,1440,64L1440,320L0,320Z
          "
              />
            </path>
          </svg>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center mx-auto mb-12 md:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight px-2">
              Supporting <span className="italic">Every Chapter</span> of Your Story
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
              From healing hearts to nurturing futures — Port Laken thrives with care, connection, and nature.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                image: galleryImages[1],
                title: "HarborView Medical Center",
                description: "Comprehensive care from emergency to wellness — the heartbeat of Port Laken's health network.",
              },
              {
                image: galleryImages[2],
                title: "Mountains to Sound Greenway",
                description: "Ecological restoration, hiking, and environmental recreation resources for all ages.",
              },
              {
                image: galleryImages[3],
                title: "Crisis Support Network",
                description: "24/7 crisis line, recovery help, warm line, and teen outreach services.",
              },
              {
                image: galleryImages[4],
                title: "BrightSteps Childcare",
                description: "Nurturing Port Laken's youngest residents with quality early education and care.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative h-full transition-all duration-400 ${index % 2 === 0 ? 'lg:-translate-y-3' : 'lg:translate-y-3'
                  }`}
              >
                {/* Glass Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-xl md:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[#708AA3]/20">
                  {/* Image */}
                  <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#244C5C]/70 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 space-y-2 md:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-[#708AA3] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <a
                    href="#"
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 hover:bg-[#708AA3]/30 hover:border-[#708AA3] hover:scale-110"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-playfair text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
              WHAT&apos;S <span className="text-primary italic">HAPPENING</span> IN PORT LAKEN?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Stories and updates from across the city this December.{' '}
              <a
                href="/news"
                className="text-black border-b-2 border-transparent hover:border-primary hover:text-primary">
                Read All News →
              </a>
            </p>

          </div>

          {/* News Grid */}
          <div className="space-y-16">
            {[
              {
                date: "DEC 1, 2025",
                title: "Frosty Lane Lights Up Downtown",
                desc: "Downtown Port Laken kicks off the season with nightly parades, lights, and music. Join us for free skating, hot cocoa, and festive entertainment for the whole family.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zKfRQ2XFUvpJRK9uhsvCOl5bwSBQWJRWPA&s",
              },
              {
                date: "DEC 8, 2025",
                title: "Winter Market Returns to Harbor Plaza",
                desc: "Local artisans and food trucks bring festive cheer to Harbor Plaza every weekend. Shop handmade gifts, enjoy live music, and support local businesses.",
                image: "https://res.cloudinary.com/traveltripperweb/image/upload/c_limit,f_auto,h_2500,q_auto,w_2500/v1736299824/d5qijxqom1kdbx31ie9u.jpg",
              },
              {
                date: "DEC 15, 2025",
                title: "City Hall Announces 2026 Projects",
                desc: "From green spaces to public safety, see what's ahead for Port Laken's growth. Mayor Johnson unveils ambitious plans for sustainable development and community enhancement.",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Colorado_Springs_City_Hall_by_David_Shankbone.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Image */}
                  <div className={`relative ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative h-80 rounded-[40px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.05] bg-gray-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        onError={(e) => {
                          console.error('Image failed to load:', item.image);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <p className="text-primary text-sm font-bold tracking-wider mb-3 group-hover:text-primary/80 transition-colors duration-300">
                      {item.date}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 font-playfair">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all duration-300 group-hover:translate-x-2"
                    >
                      Read Full Story
                      <FaArrowRight className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Divider */}
                {i < 2 && (
                  <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                )}
              </div>
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
              <span className="text-primary">
                See What’s <em className="italic">Next</em>
              </span>
            </h2>
            <p className="text-white/90 text-left mt-3 text-lg md:text-xl max-w-2xl">
              Discover all the events, holidays, and community gatherings happening in Port Laken. Stay connected and never miss out on what’s coming up next!
            </p>
            <div className="w-full h-1 bg-white rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
            {/* Spotlight Slideshow */}
            <SpotlightSlideshow />

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
          <div className="w-full" style={{ height: '1000px' }}>
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
          yoooooooooooooooooooooooooooooooooooooooooooo
        </p>
      </div>

      {/* Right: Form */}
      <div>
        <form className="space-y-8">
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

// Spotlight Slideshow Component
function SpotlightSlideshow() {
  const spotlightData = [
    {
      image: galleryImages[11],
      title: "Frosty Lane",
      description:
        "Enjoy snow, lights, music, and nightly parades at 7 PM. Free parking and fun for everyone.",
    },
    {
      image: galleryImages[12],
      title: "Sunny Shores",
      description:
        "Relax with live music, beach games, and sunset bonfires every evening.",
    },
    {
      image: galleryImages[13],
      title: "Mystic Trails",
      description:
        "Explore enchanted forests with guided hikes and storytelling under the stars.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightData.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [spotlightData.length]);

  const { image, title, description } = spotlightData[currentIndex];

  return (
    <div className="flex-1 flex flex-col items-center md:items-start md:ml-0">
      <div className="relative w-full sm:max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-primary/30 border border-white/30 flex items-end min-h-[220px] md:mx-0 mx-auto transition-all duration-700 ease-in-out">
        <Image
          key={image}
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute bottom-0 left-0 w-full bg-white/90 px-6 py-4 rounded-b-3xl">
          <h3 className="font-bold text-lg text-primary transition-all duration-500">
            {title}
          </h3>
          <p className="text-gray-700 text-sm transition-all duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
