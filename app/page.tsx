"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";  // Make sure to destructure loading as well
import Image from "next/image";
import { IoMdAlert } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa6';
import InvertButton from "../components/ui/InvertButton";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  WeightedScrollProvider,
  ParallaxLayer,
  WeightedScrollLayer,
} from "@/app/components/WeightedScroll";
import {
  ScrollRevealText,
  ScrollRevealImage,
  ScrollRevealCTA,
  ScrollRevealStagger,
  ScrollRevealStaggerItem,
  ScrollReveal,
} from "@/app/components/ScrollReveal";



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
    link: "/alerts",
    authLink: "/alerts",
    nonAuthLink: "/sign-in",
    icon: <IoMdAlert className="text-3xl text-primary" />,
  },
  {
    title: "Submit Resource",
    link: "/resource-directory/submit",
    authLink: "/resource-directory/submit",
    nonAuthLink: "/sign-in",
    icon: <HiDocumentText className="text-3xl text-primary" />,
  },
  {
    title: "Access Regulatory Forms",
    link: "/forms",
    authLink: "/forms",
    nonAuthLink: "/sign-in",
    icon: <MdPayment className="text-3xl text-primary" />,
  },
  {
    title: "Transportation & Maps",
    link: "/maps-transport",
    authLink: "/maps-transport",
    nonAuthLink: "/sign-in",
    icon: <FaBus className="text-3xl text-primary" />,
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [paused, setPaused] = useState(false);
  const { user, loading } = useAuth(); // Get the authenticated user and loading state

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
    <WeightedScrollProvider>
    <WeightedScrollLayer>
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
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

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
                          <InvertButton
                            text={slide.buttonText}
                            icon={<FaArrowRight className="text-sm" />}
                            size="text-base"
                            padding="px-6 py-3"
                            curvature="rounded-full"
                            invertDirection="light-to-dark"
                            bgColor="bg-primary"
                            textColor="text-primary"
                            borderColor="border-white/20"
                            lightStateBg="bg-white"
                            darkStateText="text-white"
                            className="transition-all shadow-lg whitespace-nowrap"
                            onClick={() => window.location.href = slide.buttonLink}
                          />
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
          <ScrollRevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerChildren={0.1} delayChildren={0.05}>
            {quickActions.map((action, idx) => {
              const [first, ...rest] = action.title.split(' ');
              const second = rest.join(' ') || '';

              // Determine the href based on auth state and loading status
              let href;
              if (loading) {
                // While loading, prevent navigation by linking to '#'
                href = '#';
              } else if (user) {
                // Authenticated user goes to the authLink
                href = action.authLink;
              } else {
                // Non-authenticated user goes to sign-in with callback
                href = `${action.nonAuthLink}?callbackUrl=${encodeURIComponent(action.authLink)}`;
              }

              return (
                <ScrollRevealStaggerItem key={idx}>
                <Link
                  href={href}
                  onClick={(e) => {
                    // If auth state is still loading, prevent the click
                    if (loading) {
                      e.preventDefault();
                      // Optionally show a message or do nothing
                      return;
                    }
                    
                    // If user is authenticated, allow normal navigation
                    if (user) return;
                    
                    // If user is not authenticated, the link already includes callback URL
                    // So we don't need additional logic here
                  }}
                  className={`
              group relative block 
              transition-all duration-500 ease-out
              hover:-translate-y-2 hover:scale-[1.04]
              active:scale-[0.97] touch-manipulation
            `}
                >
                  {/* Main pill content */}
                  <div
                    className={`
                flex items-center gap-3 sm:gap-4 
                bg-white rounded-full 
                px-4 py-3.5 sm:px-6 sm:py-5 
                transition-all duration-400
                group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-primary/10
                group-hover:shadow-[0_20px_40px_-10px_rgba(30,64,175,0.25)]
                relative
              `}
                  >
                    {/* Icon Circle */}
                    <div
                      className={`
                  flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 
                  rounded-full bg-gradient-to-br from-primary to-primary/80 
                  p-2.5 sm:p-3 text-white 
                  flex items-center justify-center 
                  transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-3
                `}
                    >
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

                  {/* Beautiful soft floating glow – no hard edges */}
                  <div
                    className={`
                pointer-events-none absolute inset-0 rounded-full 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-700
                bg-gradient-to-br from-primary/20 via-primary/10 to-transparent
                blur-xl -z-10
                scale-110 group-hover:scale-125
              `}
                  ></div>
                </Link>
                </ScrollRevealStaggerItem>
              );
            })}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left: Text + Button */}
            <div className="space-y-6 order-2 md:order-1">
              <ScrollRevealText direction="right" className="space-y-6">
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Welcome to <span className="text-primary">Port Laken</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Port Laken is a city where community meets innovation. From scenic parks to thriving neighborhoods, it’s a place where families, businesses, and visitors all feel at home. Discover how tradition and progress come together to make our city unique.
                </p>
              </ScrollRevealText>
              <ScrollRevealCTA delay={0.15}>
                <InvertButton
                text="Learn More About Us"
                icon={<FaArrowRight className="text-sm" />}
                size="text-base"
                padding="px-6 py-3"
                curvature="rounded-full"
                bgColor="bg-primary"
                textColor="text-primary"
                borderColor="border-primary"
                invertDirection="light-to-dark"
                className="hover:shadow-lg hover:scale-105 transition-transform"
              />
              </ScrollRevealCTA>
            </div>

            {/* Right: Parallax + Reveal Image */}
            <ParallaxLayer factor={0.4} className="relative order-1 md:order-2 h-64 md:h-96">
              <ScrollRevealImage direction="left" scaleIn className="h-full rounded-[40px] overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                  <Image
                    src="https://www.visitportangeles.com/visit_port_angeles_uploads/2025/12/port-angeles-wa-aerial-view.jpg"
                    alt="Port Laken Skyline"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ScrollRevealImage>
            </ParallaxLayer>

          </div>
        </div>
      </section>


      {/* Services – Clean & Curved */}
      <PortLakenServicesSection />

      {/* News Section */}
      <section className="relative py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollRevealText direction="up" className="mb-10 text-center md:text-left">
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
          </ScrollRevealText>

          {/* News Grid - Compressed */}
          <div className="space-y-8">
            {[
              {
                slug: "mlk-day-service",
                date: "JAN 19, 2026",
                title: "MLK Day Service & Community Glow",
                desc: "Port Laken honors the legacy with a special MLK Day event at the waterfront park, featuring community service, live music, and glowing lantern displays.",
                image: "https://riverheadlocal.com/wp-content/uploads/2025/01/2025_0120_Martin-Luther-King-Lincoln-Memorial-28-Aug-1963-681x516.jpg",
              },
              {
                slug: "winter-market",
                date: "JAN 25, 2026",
                title: "Winter Market Lights Up Harbor",
                desc: "The Winter Market returns to Harbor Plaza with local artisans, warm food trucks, craft drinks, and waterfront lights.",
                image: "https://foxbaltimore.com/resources/media2/16x9/3851/986/0x361/90/63423fb2-22ce-4454-aed0-68d5eab9dc17-1TOP5_ChristmasVillageinBaltimore2022_heatedtent5_creditChristinaKalff.jpg",
              },
              {
                slug: "sustainability-vision-2026",
                date: "FEB 10, 2026",
                title: "City Unveils 2026 Sustainability Vision",
                desc: "Mayor Johnson outlines new green spaces, waterfront upgrades, and eco-friendly public projects.",
                image: "https://www.hkinteriors.com/wp-content/uploads/2018/11/bg-useful-links.jpg",
              },
            ].map((item, i) => (
              <ScrollReveal
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animateInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
              <div className="group cursor-pointer">
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
                    <InvertButton
                      text="Read Story"
                      icon={<FaArrowRight className="text-xs" />}
                      size="text-sm"
                      padding="px-4 py-2"
                      curvature="rounded-full"
                      bgColor="bg-primary"
                      textColor="text-primary"
                      lightStateBg="bg-transparent"
                      darkStateText="text-white"
                      borderColor="border-2 border-primary"
                      invertDirection="light-to-dark"
                      className="transition-transform md:w-auto w-full"
                      onClick={() => window.location.href = `/news/${item.slug}`}
                    />
                  </div>
                </div>

                {i < 2 && (
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                )}
              </div>
              </ScrollReveal>
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
          <ScrollRevealText direction="up" className="max-w-3xl mb-12 md:mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-xl">
              See What’s <em className="italic font-bold text-white">Next</em>
            </h2>

            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Discover upcoming events, holidays, markets, and community moments in Port Laken.
              Stay in the know — never miss what’s happening next!
            </p>
          </ScrollRevealText>

          {/* Main content - grid layout */}
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
            {/* Events Column */}
            <ScrollRevealStagger className="space-y-6" staggerChildren={0.1} delayChildren={0.05}>
              {upcomingEvents.slice(0, 4).map((event, idx) => (
                <ScrollRevealStaggerItem key={idx}>
                <div
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
                </ScrollRevealStaggerItem>
              ))}

              {/* CTA Button */}
              <ScrollRevealStaggerItem>
              <div className="flex justify-end pt-2">
                <InvertButton
                  text="View Full Calendar"
                  icon={<FaArrowRight className="text-sm" />}
                  size="text-base"
                  padding="px-24 py-2"
                  curvature="rounded-full"
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-white"
                  lightStateBg="bg-white"
                  darkStateText="text-white"
                  invertDirection="dark-to-light"
                  className="mt-2 font-semibold shadow-sm transition-all duration-200"
                  onClick={() => window.location.href = '/events'}
                />
              </div>
              </ScrollRevealStaggerItem>
            </ScrollRevealStagger>


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
            <ScrollRevealText direction="up">
            <h3 className="font-playfair text-left text-xl md:text-3xl font-semibold text-gray-600 max-w-5xl mb-16">
              In 2025, Port Laken received numerous awards for its quality of life and innovation, including <a href="https://www.usnews.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}>#1 Family-Friendly City in the US</a>,
              <a href="https://urbannext.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}> Most Innovative City</a>, and               <a href="https://urbannext.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: 'var(--color-primary)' }}>Work-Life Balance honors</a>.
            </h3>
            </ScrollRevealText>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="relative overflow-hidden group">
              <div className="awards-container flex gap-16 pb-16">
                {[
                  {
                    id: 1,
                    award: "Best Town in America",
                    source: "Outside Magazine, 2025",
                    description: "Safe, connected community with top schools and easy access to mountains and water.",
                    image: "https://cdn.flipboard.com/dev_O/insideflipboard/outside/outside_cloud_blog_1200x750.jpg",
                    link: "https://www.outsideonline.com/" // Example link for the first award
                  },
                  {
                    id: 2,
                    award: "LIVE UNITED Award",
                    source: "United Way, 2024",
                    description: "Honored for its work in safe and affordable housing development.",
                    image: "https://newsprogress.com/wp-content/uploads/2016/05/Dave-Cole-Award-427.jpg",
                    link: "https://www.unitedway.org/" // Example link for the second award
                  },
                  {
                    id: 3,
                    award: "#1 Civic Building Redesign — Port Laken City Hall",
                    source: "Design Forward Awards, 2025",
                    description: "A blend of heritage design, solar glass, and open-floor collaboration.",
                    image: "https://www.utiledesign.com/wp-content/uploads/2025/10/City-Hall-Lobby-424_low-1024x678.jpg",
                    link: "https://designforwardawards.com/" // Example link for the third award
                  },
                  {
                    id: 4,
                    award: "Best Winter Festival in a Small City",
                    source: "Travel & Culture Weekly, 2025",
                    description: "Celebrated for ice sculptures, art shows, and live harbor performances.",
                    image: "https://foxbaltimore.com/resources/media2/16x9/3851/986/0x361/90/63423fb2-22ce-4454-aed0-68d5eab9dc17-1TOP5_ChristmasVillageinBaltimore2022_heatedtent5_creditChristinaKalff.jpg",
                    link: "https://travelandcultureweekly.com/" // Example link for the fourth award
                  },
                  {
                    id: 5,
                    award: "Top 100 Emerging AI Startups — NeuralHaven Labs",
                    source: "TechNation, 2025",
                    description: "Port Laken's own accessibility-focused AI firm making global waves.",
                    image: "https://substackcdn.com/image/fetch/$s_!PSnS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7f4e29e-9704-41dc-8d8e-f9b17ad8eb15_1489x498.png",
                    link: "https://technation.com/" // Example link for the fifth award
                  }
                ].map((award, index) => (
                  <a href={award.link} target="_blank" rel="noopener noreferrer" key={award.id} className="flex-none w-80 sm:w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border group/card" style={{ borderColor: 'var(--color-primary-shade)' }}>
                    <div className="h-48 overflow-hidden relative" style={{ backgroundColor: 'var(--color-primary-shade)' }}>
                      {award.image.startsWith('http') ? (
                        <Image
                          src={award.image}
                          alt={award.award}
                          fill
                          className="object-cover"
                        />
                      ) : (
                          <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--color-primary)' }}>
                            <span className="text-sm font-medium">Award Image</span>
                          </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-900 font-bold text-xl mb-2 transition-colors relative group/title" style={{ color: '' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                        {award.award}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/title:w-full"></span>
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{award.source}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </a>
                ))}
                {/* Duplicate items for infinite scroll effect */}
                {[
                  {
                    id: 1,
                    award: "Best Town in America",
                    source: "Outside Magazine, 2025",
                    description: "Safe, connected community with top schools and easy access to mountains and water.",
                    image: "https://cdn.flipboard.com/dev_O/insideflipboard/outside/outside_cloud_blog_1200x750.jpg",
                    link: "https://www.outsideonline.com/" // Example link for the first award
                  },
                  {
                    id: 2,
                    award: "LIVE UNITED Award",
                    source: "United Way, 2024",
                    description: "Honored for its work in safe and affordable housing development.",
                    image: "https://newsprogress.com/wp-content/uploads/2016/05/Dave-Cole-Award-427.jpg",
                    link: "https://www.unitedway.org/" // Example link for the second award
                  },
                  {
                    id: 3,
                    award: "#1 Civic Building Redesign — Port Laken City Hall",
                    source: "Design Forward Awards, 2025",
                    description: "A blend of heritage design, solar glass, and open-floor collaboration.",
                    image: "https://www.utiledesign.com/wp-content/uploads/2025/10/City-Hall-Lobby-424_low-1024x678.jpg",
                    link: "https://designforwardawards.com/" // Example link for the third award
                  },
                  {
                    id: 4,
                    award: "Best Winter Festival in a Small City",
                    source: "Travel & Culture Weekly, 2025",
                    description: "Celebrated for ice sculptures, art shows, and live harbor performances.",
                    image: "https://foxbaltimore.com/resources/media2/16x9/3851/986/0x361/90/63423fb2-22ce-4454-aed0-68d5eab9dc17-1TOP5_ChristmasVillageinBaltimore2022_heatedtent5_creditChristinaKalff.jpg",
                    link: "https://travelandcultureweekly.com/" // Example link for the fourth award
                  },
                  {
                    id: 5,
                    award: "Top 100 Emerging AI Startups — NeuralHaven Labs",
                    source: "TechNation, 2025",
                    description: "Port Laken's own accessibility-focused AI firm making global waves.",
                    image: "https://substackcdn.com/image/fetch/$s_!PSnS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7f4e29e-9704-41dc-8d8e-f9b17ad8eb15_1489x498.png",
                    link: "https://technation.com/" // Example link for the fifth award
                  }
                ].map((award, index) => (
                  <a href={award.link} target="_blank" rel="noopener noreferrer" key={`duplicate-${award.id}`} className="flex-none w-80 sm:w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border group/card" style={{ borderColor: 'var(--color-primary-shade)' }}>
                    <div className="h-48 overflow-hidden relative" style={{ backgroundColor: 'var(--color-primary-shade)' }}>
                      {award.image.startsWith('http') ? (
                        <Image
                          src={award.image}
                          alt={award.award}
                          fill
                          className="object-cover"
                        />
                      ) : (
                          <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--color-primary)' }}>
                            <span className="text-sm font-medium">Award Image</span>
                          </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-900 font-bold text-xl mb-2 transition-colors relative group/title" style={{ color: '' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}>
                        {award.award}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/title:w-full"></span>
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{award.source}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </a>
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
          <ScrollRevealText direction="up" className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-extrabold text-white mb-4">
              love, <span className="italic">port laken</span>
            </h2>
          </ScrollRevealText>

          {/* Masonry Grid */}
          <GallerySection />
        </div>
      </section>

      {/* Account / Join Section */}
      <AccountSection />
    </main>
    </WeightedScrollLayer>
    </WeightedScrollProvider>
  );
}

// Unified Account Section
function AccountSection() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState("");
  const [firestoreName, setFirestoreName] = useState<string | null>(null);

  useEffect(() => {
    if (user && !user.displayName) {
      getDoc(doc(db, "users", user.uid)).then((snap) => {
        if (snap.exists()) {
          const name = snap.data()?.displayName as string | undefined;
          if (name) setFirestoreName(name.split(" ")[0]);
        }
      });
    }
  }, [user]);

  const handleGoogle = async () => {
    setGoogleLoading(true);
    setGoogleError("");
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error(err);
      setGoogleError("Google sign-in failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  // ── Signed-in state: full-width, no left column ──────────────────────────
  if (user) {
    const firstName = user.displayName?.split(" ")[0] ?? firestoreName;
    return (
      <section className="relative py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary-shade/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-shade leading-tight tracking-tight mb-6">
            <span className="italic">Welcome back {user.displayName || user.email?.split('@')[0]}!</span>
          </h3>
          <p className="text-primary-shade/55 text-base font-light leading-relaxed max-w-md mx-auto mb-10">
            You&apos;re already part of Port Laken. Stay connected, manage your preferences, and never miss a thing.
          </p>
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-primary-shade text-primary-shade font-semibold text-sm tracking-wide overflow-hidden relative hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-primary-shade translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Go to your dashboard</span>
            <FaArrowRight className="relative z-10 text-xs group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </section>
    );
  }

  // ── Signed-out state: unified two-column layout ──────────────────────────
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden animate-[fadeIn_0.8s_ease]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary-shade/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Side */}
          <ScrollRevealText direction="right" className="space-y-6">
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-primary-shade leading-tight tracking-tight">
              <span className="italic">Stay in the loop.</span> Get the latest stories, highlights, and the people shaping Port Laken.
            </h3>
            <p className="text-primary-shade/70 text-sm font-light tracking-wide hover:text-primary-shade/90 transition-colors duration-300 max-w-md">
              Create your Port Laken Account to get started.
            </p>
          </ScrollRevealText>

          {/* Right Side */}
          <ScrollRevealStagger className="space-y-6 flex flex-col justify-start" staggerChildren={0.08} delayChildren={0.05}>


            {/* Google Button */}
            <ScrollRevealStaggerItem>
            <button
              onClick={handleGoogle}
              disabled={googleLoading}
              className="group relative w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-primary-shade/20 bg-white hover:bg-primary-shade/5 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="flex-1 text-left font-semibold text-primary-shade tracking-wide text-sm">
                {googleLoading ? "Signing in…" : "Continue with Google"}
              </span>
              <FaArrowRight className="text-primary-shade/30 group-hover:text-primary-shade group-hover:translate-x-1 transition-all duration-300 text-xs" />
            </button>
            </ScrollRevealStaggerItem>

            {googleError && <p className="text-red-600 text-sm">{googleError}</p>}

            {/* Divider */}
            <ScrollRevealStaggerItem>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-primary-shade/15" />
              <span className="text-primary-shade/40 text-xs font-medium tracking-widest uppercase">or</span>
              <div className="flex-1 h-px bg-primary-shade/15" />
            </div>
            </ScrollRevealStaggerItem>

            {/* Email Button */}
            <ScrollRevealStaggerItem>
            <Link
              href="/create-account"
              className="group relative w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-primary-shade bg-transparent overflow-hidden transition-all duration-300 hover:bg-primary-shade/5 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <svg className="w-5 h-5 flex-shrink-0 text-primary-shade group-hover:text-primary-shade/80 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <span className="flex-1 text-left font-semibold text-primary-shade group-hover:text-primary-shade/90 tracking-wide text-sm transition-colors duration-300">
                Create an account with email
              </span>
              <FaArrowRight className="text-primary-shade/30 group-hover:text-primary-shade group-hover:translate-x-1 transition-all duration-300 text-xs" />
            </Link>
            </ScrollRevealStaggerItem>

            {/* Sign in / Trust */}
            <ScrollRevealStaggerItem>
            <p className="text-xs text-primary-shade/40 text-center pt-1">
              Already have an account?{" "}
              <Link href="/sign-in" className="underline underline-offset-2 hover:text-primary-shade transition-colors">
                Sign in
              </Link>
            </p>
            </ScrollRevealStaggerItem>

          </ScrollRevealStagger>
        </div>
      </div>
    </section>
  );
}

// Port Laken Services Section Component
function PortLakenServicesSection() {
  const services = [
    {
      image: "https://www.uwmedicine.org/sites/stevie/files/styles/clinic_page_576_288/public/clinic-images/NJB%20HMC_11_0.jpeg?itok=viW3dOVK",
      title: "HarborView Medical Center",
      description:
        "Comprehensive care from emergency to wellness — the backbone of Port Laken's health network.",
      resourceId: "1",
    },
    {
      image: "https://www.outsideonline.com/wp-content/uploads/2025/05/GettyImages-103319910-scaled.jpg",
      title: "Discovery Park",
      description: "Largest city park with beaches and forest trails.",
      resourceId: "32",
    },
    {
      image: "https://wexnermedical.osu.edu/-/media/images/wexnermedical/pages/patient-care/healthcare-services/mental-behavioral/outpatient-care/psychiactric-evaluation.jpg",
      title: "Port Laken Mental Health Services",
      description: "Counseling and therapy for all ages.",
      resourceId: "5",
    },
    {
      image: "https://photo.upwards.com/public/photos/path/f30395.jpg?width=800&height=500",
      title: "Little Stars Daycare",
      description: "Licensed childcare and early learning.",
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
        <ScrollRevealText direction="up" className="text-center mb-6 md:mb-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Supporting <span className="italic">Every Chapter</span> of Your Story
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-4xl mx-auto">

            From healthcare to community support, Port Laken is built around care, connection, and opportunity.
          </p>
        </ScrollRevealText>

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
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-ice transition pointer-events-auto text-sm"
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
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 h-12 w-12 rounded-full bg-white/70 text-primary flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-primary hover:text-white border-2 border-transparent hover:border-white z-50 backdrop-blur-sm"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-7 w-7 stroke-[2.5]" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 h-12 w-12 rounded-full bg-white/70 text-primary flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-primary hover:text-white border-2 border-transparent hover:border-white z-50 backdrop-blur-sm"
            aria-label="Next service"
          >
            <ChevronRight className="h-7 w-7 stroke-[2.5]" />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8 relative z-10 pointer-events-auto">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'bg-white w-6' : 'bg-white/50 w-2.5 hover:bg-white/60'
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
  // Static data for the spotlight slideshow since API is not available
  const spotlightData = [
    {
      id: 1,
      image: "https://texashighways.com/wp-content/uploads/2022/11/drive-atlas-ice-gardens-sculptures.jpg",
      title: "Winter Ice Sculpture Festival",
      description: "Join us for the annual ice sculpture festival at Harbor Plaza. Local artists showcase their talents creating stunning frozen art."
    },
    {
      id: 2,
      image: "https://images.seattletimes.com/wp-content/uploads/2021/03/03122021_cherry_142721.jpg?d=2040x1327",
      title: "Spring Blooms in Discovery Park",
      description: "Discover the beauty of spring with cherry blossoms and tulips blooming throughout Discovery Park. Perfect for family photos."
    },
    {
      id: 3,
      image: "https://www.bellevuereporter.com/wp-content/uploads/2022/06/29337375_web1_Marymoor-Park-concert-series_1.jpg",
      title: "Summer Concert Series",
      description: "Free outdoor concerts every Saturday evening. Bring your blanket and enjoy local musicians under the stars."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Only run the interval if we have data
    if (spotlightData.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % spotlightData.length);
        setIsAnimating(false);
      }, 600); // match transition duration
    }, 5200);

    return () => clearInterval(interval);
  }, [spotlightData.length]);

  // Safely access spotlight data with fallback
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
                  <InvertButton
                    text="→"
                    size="text-lg"
                    padding="p-0"
                    curvature="rounded-full"
                    bgColor="bg-white/10"
                    textColor="text-white"
                    className="absolute bottom-4 right-4 w-10 h-10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-[#708AA3]/30 hover:border-[#708AA3] hover:scale-110"
                    onClick={() => console.log('Button clicked')}
                  />
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

function GallerySection() {
  // Pattern of grid spans from the design
  const gridPatterns = [
    "col-span-2 row-span-1 md:col-span-2 lg:col-span-2",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
    "col-span-2 row-span-1 md:col-span-2 lg:col-span-2",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
    "col-span-2 row-span-1 md:col-span-2 lg:col-span-2",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
    "col-span-2 row-span-1 md:col-span-2 lg:col-span-2",
    "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
  ];

  // Sample gallery images - replace with actual image paths
  const galleryImages = [
    { src: "https://peakbaggerblobs.blob.core.windows.net/pbphoto/p515L.jpg", alt: "Mountain landscape" },
    { src: "https://www.globalholdings-mgmt.com/wp-content/uploads/2022/09/washington-harbour-1-1024x682.jpg", alt: "Nature scene" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRUxmnROa9bcRLzcl0S-vhdwFVkDycEtGiA&s", alt: "Lake view" },
    { src: "https://excursionmania.com/cdn-cgi/image/quality=75,format=webp,w=auto,h=auto,fit=scale-down,trim=border/https://excursionmania.com/uploads/blog/ideas/420a5a39e12ea478c2f267b2cee4607f.jpg", alt: "Forest view" },
    { src: "https://nrs.objectstore.gov.bc.ca/kuwyyf/frontcountry_camping_RS_8873_82ab7cecb1.jpg", alt: "Waterfall" },
    { src: "https://www.thoughtco.com/thmb/qO4W06u8TNDKXRktinwhTHMLZHE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-885794240-5b5e2c574cedfd0050fae7f2.jpg", alt: "City skyline" },
    { src: "https://quietly-image-uploads.s3.amazonaws.com/image_7015_1280px_c975e1f0ed274103ad6d949df3292aaf.jpeg", alt: "Park trees" },
    { src: "https://i.ebayimg.com/images/g/ouUAAOSwOEZkAU0f/s-l1200.jpg", alt: "Green meadow" },
    { src: "https://cdn.allolympicpark.com/images/content/22082_19364_Strait_of_Juan_de_Fuca_Cape_Flattery_lg.jpg", alt: "Nature reserve" },
    { src: "https://www.courant.com/wp-content/uploads/2023/06/rgd-13.jpg?w=525", alt: "Misty mountains" },
    { src: "https://experience-olympia.s3.amazonaws.com/imager/files_idss_com/C405/6851cc95-b115-4b38-8e54-46ebcde289b1_e45adf5f6bc0c5c2a30a39868f44eab6.jpg", alt: "Misty mountains" },
  ];

  const images = galleryImages.map((img, index) => ({
    ...img,
    className: gridPatterns[index % gridPatterns.length]
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 12 } }
  };

  return (
    <div className="w-full">
      <motion.div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {images.map((img, idx) => (
          <motion.div key={idx}
            className={`overflow-hidden rounded-2xl shadow-lg bg-[#181818] flex items-center justify-center h-[150px] sm:h-[180px] md:h-[200px] ${img.className}`}
            variants={itemVariants}
            custom={idx}
          >
            <Image src={img.src} alt={img.alt} width={400} height={400} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
