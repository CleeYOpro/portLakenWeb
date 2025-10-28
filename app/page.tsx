"use client";

import { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { GiWaves } from "react-icons/gi";
import { MdEvent, MdPeople, MdInfo } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsCalendarEventFill } from "react-icons/bs";
import Navbar from "./components/Navbar";

const heroSlides = [
  {
    id: 1,
    image: "/dundee.png",
    title: "Community",
    titleItalic: "First",
    description: "For over a century, connecting residents, honoring our heritage, and embracing innovation to build a community where everyone belongs and thrives.",
    buttonText: "Our Story",
    buttonLink: "/about"
  },
  {
    id: 2,
    image: "/iceskate.png",
    title: "Winter",
    titleItalic: "Highlights",
    description: "The downtown ice rink reopens this December! Enjoy free skating weekends, winter lights, and cozy cocoa pop-ups across Port Laken.",
    buttonText: "Read More",
    buttonLink: "/news"
  },
  {
    id: 3,
    image: "/marvinsroom.png",
    title: "Latest",
    titleItalic: "News",
    description: "Port Laken launches new recycling initiative this week and announces city council decisions affecting local parks and public spaces.",
    buttonText: "Read More",
    buttonLink: "/news"
  },
  {
    id: 4,
    image: "coolai.gif", title: "Smart",
    titleItalic: "Resources",
    description: "Explore Port Laken’s new AI-powered features — from instant service guides to a chatbot that helps you find exactly what you need, faster.",
    buttonText: "Explore Features",
    buttonLink: "/resource-directory"
  }
];


export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />

      {/* Hero Section with Carousel */}
      <div className={`relative min-h-screen transition-all duration-500 overflow-hidden ${scrolled ? 'rounded-b-[50px]' : ''}`}>
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide;
          const isPrev = index === (activeSlide - 1 + heroSlides.length) % heroSlides.length;
          
          return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isActive ? 'translate-x-0 opacity-100 z-10' : 
              isPrev ? '-translate-x-full opacity-0 z-0' :
              'translate-x-full opacity-0 z-0'
            }`}
          >
            <div
              className={`relative flex items-end min-h-screen px-6 md:px-20 pb-20 pt-24 bg-cover bg-center bg-no-repeat transition-all duration-500 ${scrolled ? 'rounded-b-[50px]' : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
              <div className="relative max-w-7xl w-full mx-auto z-10">
                <div className="max-w-4xl">
                  <h1 className="text-white mb-6">
                    <span className="font-playfair text-5xl md:text-8xl font-bold">{slide.title} </span>
                    <span className="font-playfair text-5xl md:text-8xl font-bold italic">{slide.titleItalic}</span>
                  </h1>

                  <div className="flex flex-col md:flex-row md:items-end md:gap-8">
                    <p className="text-white/90 text-base md:text-med mb-3 md:mb-0 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    {slide.buttonText && (
                      <button className="bg-primary hover:bg-white hover:text-primary transition-all px-6 py-3 rounded-full text-white font-medium text-base shadow-lg flex items-center gap-2 whitespace-nowrap">
                        {slide.buttonText}
                        <FaArrowRight className="text-sm" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        })}

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
      <section className="relative py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-10 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#alerts" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <IoMdAlert className="text-3xl text-red-500" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Emergency Alerts</h3>
              <p className="text-gray-600 text-sm">Stay informed about important community alerts</p>
            </a>
            <a href="#submit" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-secondary group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <HiDocumentText className="text-3xl text-secondary" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Submit Resource</h3>
              <p className="text-gray-600 text-sm">Share resources with the community</p>
            </a>
            <a href="#taxes" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <RiMoneyDollarCircleFill className="text-3xl text-green-600" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Pay Taxes</h3>
              <p className="text-gray-600 text-sm">Quick and secure online tax payments</p>
            </a>
            <a href="#events" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-secondary group">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                <BsCalendarEventFill className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Town Events</h3>
              <p className="text-gray-600 text-sm">Discover upcoming community events</p>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`relative py-20 px-6 md:px-20 bg-primary transition-all duration-500 ${scrolled ? 'rounded-b-[50px]' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all hover:bg-white hover:scale-105">
              <MdInfo className="text-primary text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Community Resources</h3>
              <p className="text-gray-600">Access essential services and resources for residents.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all hover:bg-white hover:scale-105">
              <MdEvent className="text-primary text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Local Events</h3>
              <p className="text-gray-600">Stay updated with community gatherings and celebrations.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all hover:bg-white hover:scale-105">
              <MdPeople className="text-primary text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Connect</h3>
              <p className="text-gray-600">Join local groups and meet your neighbors.</p>
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
