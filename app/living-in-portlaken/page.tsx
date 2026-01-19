"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaHome,
  FaGraduationCap,
  FaTree,
  FaBriefcase,
  FaBus,
  FaUsers,
  FaRecycle,
  FaShieldAlt,
  FaHeart,
  FaBook,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const cityServices = [
  {
    icon: FaHome,
    title: "Affordable Housing",
    description: "Resources and programs for aspiring home buyers and renters.",
    link: "/forms",
  },
  {
    icon: FaGraduationCap,
    title: "Schools & Childcare",
    description: "Find excellent schools and childcare options for your family.",
    link: "/resource-directory",
  },
  {
    icon: FaTree,
    title: "Parks & Recreation",
    description: "Discover our beautiful parks, trails, and recreational programs.",
    link: "/departments",
  },
  {
    icon: FaBriefcase,
    title: "Local Business & Economy",
    description: "Support local. Information for local entrepreneurs and job seekers.",
    link: "/careers",
  },
  {
    icon: FaBus,
    title: "Public Transit",
    description: "Get around with accessible transit options across the city.",
    link: "/map",
  },
  {
    icon: FaUsers,
    title: "Community Centers",
    description: "Hubs for events, classes, and social gatherings.",
    link: "/events",
  },
  {
    icon: FaRecycle,
    title: "Waste & Recycling",
    description: "Reduce, reuse, recycle. Our city's green initiatives.",
    link: "/environmental",
  },
  {
    icon: FaShieldAlt,
    title: "Public Safety",
    description: "Information on police, fire, and emergency services.",
    link: "/departments",
  },
  {
    icon: FaHeart,
    title: "Health Services",
    description: "Access to local clinics, hospitals, and wellness programs.",
    link: "/resource-directory",
  },
  {
    icon: FaBook,
    title: "Libraries & Arts",
    description: "Explore our libraries and cultural scene through classes and exhibits.",
    link: "/resource-directory",
  },
  {
    icon: FaFileAlt,
    title: "Permits & Licenses",
    description: "Guidance on obtaining permits, licenses, and official documents.",
    link: "/forms",
  },
];

export default function LivingInPortLakenPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
            alt="City aerial view"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-port-navy/80 to-port-navy/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Life in Port Laken
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
              Where community, opportunity, and nature come together.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* A Community Rooted Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-6">
                  A Community Rooted in Growth and Belonging
                </h2>
                <p className="text-port-slate leading-relaxed mb-6">
                  Port Laken is more than just a place to live—it&apos;s a place to thrive.
                  Our city offers a unique blend of urban amenities and natural beauty,
                  creating an environment where families grow, businesses flourish, and
                  neighbors become lifelong friends.
                </p>
                <p className="text-port-slate leading-relaxed mb-6">
                  From our award-winning schools to our vibrant downtown, from our
                  extensive trail system to our thriving arts scene, Port Laken
                  provides everything you need for a fulfilling life.
                </p>
                <p className="text-port-slate leading-relaxed">
                  Whether you&apos;re a young professional, a growing family, or enjoying
                  retirement, you&apos;ll find your place in our welcoming community.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-port-mist">
                <Image
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
                  alt="Community gathering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Explore City Life Section */}
      <section className="py-20 bg-port-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-4">
              <span className="text-port-sky font-semibold text-sm uppercase tracking-wider">
                Services & Resources
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy text-center mb-4">
              Explore City Life
            </h2>
            <p className="text-port-slate text-center max-w-2xl mx-auto mb-12">
              A Port Laken Premier Plan to make a two-hour drive commute away to Seattle.
              This means that you and your employees can contribute to your ACP a tax-advantaged life.
            </p>
          </RevealOnScroll>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityServices.map((service, index) => (
              <RevealOnScroll key={service.title} className={`delay-${Math.min(index * 50, 300)}`}>
                <Link
                  href={service.link}
                  className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-port-sky/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-port-frost rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-port-sky/10 transition-colors">
                      <service.icon className="text-port-sky text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-port-navy mb-2 group-hover:text-port-sky transition-colors flex items-center gap-2">
                        {service.title}
                        <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-port-slate text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Award-Winning Parks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                  alt="Port Laken Parks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/40 to-transparent" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <div>
                <span className="text-port-sky font-semibold text-sm uppercase tracking-wider">
                  Featured
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mt-2 mb-6">
                  Explore Our Award-Winning Parks
                </h2>
                <p className="text-port-slate leading-relaxed mb-6">
                  Port Laken is a city where nature is valued. Our award-winning
                  park system is home to hundreds of species of wildlife, a recreational
                  paradise. It offers wildlife, hiking, fishing, birdwatching, and more.
                </p>
                <p className="text-port-slate leading-relaxed mb-8">
                  With over 50 parks, 100 miles of trails, and countless outdoor
                  activities, there&apos;s always an adventure waiting for you and your family.
                </p>
                <Link
                  href="/departments"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
                >
                  Explore Parks & Recreation
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-port-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-white/70 text-sm">Parks & Green Spaces</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  100mi
                </div>
                <div className="text-white/70 text-sm">of Trails</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  25
                </div>
                <div className="text-white/70 text-sm">Public Schools</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  A+
                </div>
                <div className="text-white/70 text-sm">Safety Rating</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-20 bg-port-frost">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
                Stay Connected to City Life
              </h2>
              <p className="text-port-slate max-w-xl mx-auto mb-8">
                Sign up for the official city newsletter to get the latest updates on events, services,
                and community stories delivered to your inbox.
              </p>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-5 py-3 rounded-lg border border-port-mist bg-white focus:outline-none focus:ring-2 focus:ring-port-sky focus:border-transparent transition-all text-port-navy placeholder:text-port-slate/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-port-navy hover:bg-port-navy/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/forms"
                className="group p-6 bg-port-frost rounded-2xl hover:bg-port-navy transition-colors"
              >
                <FaFileAlt className="text-port-sky text-2xl mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-port-navy group-hover:text-white transition-colors mb-2">
                  Forms & Applications
                </h3>
                <p className="text-port-slate text-sm group-hover:text-white/70 transition-colors">
                  Access permits, licenses, and official documents.
                </p>
              </Link>

              <Link
                href="/careers"
                className="group p-6 bg-port-frost rounded-2xl hover:bg-port-navy transition-colors"
              >
                <FaBriefcase className="text-port-sky text-2xl mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-port-navy group-hover:text-white transition-colors mb-2">
                  Employment
                </h3>
                <p className="text-port-slate text-sm group-hover:text-white/70 transition-colors">
                  Explore career opportunities with the city.
                </p>
              </Link>

              <Link
                href="/events"
                className="group p-6 bg-port-frost rounded-2xl hover:bg-port-navy transition-colors"
              >
                <FaUsers className="text-port-sky text-2xl mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-port-navy group-hover:text-white transition-colors mb-2">
                  Events Calendar
                </h3>
                <p className="text-port-slate text-sm group-hover:text-white/70 transition-colors">
                  Find upcoming community events and activities.
                </p>
              </Link>

              <Link
                href="/contact"
                className="group p-6 bg-port-frost rounded-2xl hover:bg-port-navy transition-colors"
              >
                <FaHeart className="text-port-sky text-2xl mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-port-navy group-hover:text-white transition-colors mb-2">
                  Contact Us
                </h3>
                <p className="text-port-slate text-sm group-hover:text-white/70 transition-colors">
                  Get in touch with city services and staff.
                </p>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
