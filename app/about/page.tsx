"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <>
      {/* Hero Section - Dark Navy Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-port-navy">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-port-sky/20 to-transparent" />
        </div>

        {/* Decorative rounded rectangles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 opacity-20">
          <div className="w-48 h-64 rounded-3xl border-2 border-port-mist/30" />
          <div className="w-48 h-64 rounded-3xl border-2 border-port-mist/30 mt-8" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            About Port Laken
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10">
            A city built on innovation, community, and connection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#overview"
              className="px-8 py-4 bg-port-sky hover:bg-port-sky/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn More
            </Link>
            <Link
              href="/community-hub"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore the City
            </Link>
          </div>
        </div>

      </section>

      {/* Chapter 1: Overview - Welcome to Our City */}
      <section id="overview" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-6">
              <span className="text-port-slate/60 font-medium text-sm tracking-[0.2em] uppercase">
                CHAPTER 1 — OVERVIEW
              </span>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-port-navy mb-8 leading-tight">
                Welcome to Our City
              </h2>
              <p className="text-lg text-port-slate leading-relaxed mb-6">
                Welcome to Port Laken, a vibrant city where history meets
                innovation. Our community is built on a foundation of connection,
                collaboration, and a shared vision for a prosperous future.
                Discover what makes our city a unique place to live, work, and
                visit.
              </p>
              <p className="text-port-slate leading-relaxed">
                From our bustling waterfront to serene parklands, Port Laken
                offers a dynamic quality of life supported by a forward-thinking
                government and an engaged citizenry.
              </p>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <div className="bg-white p-8 rounded-xl border border-port-mist text-center shadow-sm min-w-[140px]">
                  <span className="block text-port-slate text-sm mb-2">
                    Population
                  </span>
                  <div className="text-4xl font-display font-bold text-port-navy">
                    125,000
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-port-mist text-center shadow-sm min-w-[140px]">
                  <span className="block text-port-slate text-sm mb-2">
                    Founded
                  </span>
                  <div className="text-4xl font-display font-bold text-port-navy">
                    1834
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-port-mist text-center shadow-sm min-w-[140px]">
                  <span className="block text-port-slate text-sm mb-2">
                    Area
                  </span>
                  <div className="text-4xl font-display font-bold text-port-navy">
                    45 sq mi
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Chapter 2: Heritage - A Journey Through Time */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-6">
              <span className="text-port-slate/60 font-medium text-sm tracking-[0.2em] uppercase">
                CHAPTER 2 — HERITAGE
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-port-navy text-center mb-16">
              A Journey Through Time
            </h2>
          </RevealOnScroll>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-port-mist -translate-y-1/2 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  year: "1834",
                  label: "Founding Year",
                  image:
                    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&q=80",
                },
                {
                  year: "1920",
                  label: "Industrial Boom",
                  image:
                    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
                },
                {
                  year: "2000",
                  label: "Digital Age",
                  image:
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
                },
                {
                  year: "Today",
                  label: "Smart City",
                  image:
                    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80",
                },
              ].map((item, index) => (
                <RevealOnScroll
                  key={item.year}
                  className={`delay-${index * 100}`}
                >
                  <div className="text-center relative">
                    {/* Timeline dot */}
                    <div className="relative z-10 w-4 h-4 bg-port-sky rounded-full mx-auto mb-6 ring-4 ring-white" />

                    {/* Image */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-port-mist shadow-md">
                      <Image
                        src={item.image}
                        alt={item.year}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Year & Label */}
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-port-navy mb-1 italic">
                      {item.year}
                    </h4>
                    <p className="text-sm text-port-slate">{item.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Innovation - Building a Sustainable Future */}
      <section className="py-20 lg:py-32 bg-port-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                    alt="Solar panels and sustainable energy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Overlay with mountain silhouette aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-port-navy/30 to-transparent" />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="delay-200">
              <span className="text-port-slate/60 font-medium text-sm tracking-[0.2em] uppercase block mb-4">
                CHAPTER 3 — INNOVATION
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-port-navy mb-6">
                Building a Sustainable Future
              </h2>
              <p className="text-lg text-port-slate leading-relaxed mb-8">
                Port Laken is committed to pioneering green initiatives and smart
                city solutions that enhance the lives of our citizens while
                protecting our natural environment.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-port-navy mb-1">
                    12 MW
                  </div>
                  <div className="text-sm text-port-slate">Solar Power</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-port-navy mb-1">
                    40+
                  </div>
                  <div className="text-sm text-port-slate">Hydrogen Cell Buses</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-port-navy mb-1">
                    65%
                  </div>
                  <div className="text-sm text-port-slate">Renewable Energy</div>
                </div>
              </div>

              <Link
                href="/sustainability"
                className="inline-flex items-center px-6 py-3 bg-port-navy hover:bg-port-navy/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Discover Our Projects
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Chapter 4: Community - The Heartbeat of Port Laken */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-6">
              <span className="text-port-slate/60 font-medium text-sm tracking-[0.2em] uppercase">
                CHAPTER 4 — COMMUNITY
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-port-navy text-center mb-4">
              The Heartbeat of Port Laken
            </h2>
            <p className="text-port-slate text-lg text-center max-w-3xl mx-auto mb-16">
              Explore the rich tapestry of culture, cuisine, and creativity that
              defines our city&apos;s unique character.
            </p>
          </RevealOnScroll>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Large card - Heritage District */}
            <RevealOnScroll className="col-span-2 row-span-2">
              <Link href="/community-hub" className="block relative h-full min-h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80"
                  alt="Heritage District"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/80 via-port-navy/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Heritage District
                  </h3>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Culinary Scene */}
            <RevealOnScroll className="delay-100">
              <Link href="/community-hub#dining" className="block relative h-48 md:h-full min-h-[180px] rounded-3xl overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                  alt="Culinary Scene"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-xs uppercase tracking-wider">
                    Explore
                  </span>
                  <h3 className="text-lg font-display font-bold text-white">
                    Culinary Scene
                  </h3>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Art & Innovation */}
            <RevealOnScroll className="delay-200">
              <Link href="/sustainability" className="block relative h-48 md:h-full min-h-[180px] rounded-3xl overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=80"
                  alt="Art & Innovation"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-xs uppercase tracking-wider">
                    Discover
                  </span>
                  <h3 className="text-lg font-display font-bold text-white">
                    Art & Innovation
                  </h3>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Waterfront Life - spans 2 columns */}
            <RevealOnScroll className="col-span-2 delay-300">
              <Link href="/environmental" className="block relative h-48 md:h-64 rounded-3xl overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Waterfront Life"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-xs uppercase tracking-wider">
                    Experience
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                    Waterfront Life
                  </h3>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Connect with Port Laken - Newsletter Section */}
      <section className="py-20 lg:py-24 bg-port-frost">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-4">
              <span className="text-port-slate/60 font-medium text-sm tracking-[0.2em] uppercase">
                CHAPTER 5 — STAY CONNECTED
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-port-navy text-center mb-4">
              Connect with Port Laken
            </h2>
            <p className="text-port-slate text-lg text-center max-w-2xl mx-auto mb-10">
              Stay up to date with the latest news, events, and opportunities in
              our city. Join our community and be part of our story.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="flex-1 px-6 py-4 rounded-lg border border-port-mist bg-white focus:outline-none focus:ring-2 focus:ring-port-sky focus:border-transparent transition-all text-port-navy placeholder:text-port-slate/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-port-navy hover:bg-port-navy/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-port-mist hover:bg-port-navy hover:text-white flex items-center justify-center text-port-slate transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-port-mist hover:bg-port-navy hover:text-white flex items-center justify-center text-port-slate transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-port-mist hover:bg-port-navy hover:text-white flex items-center justify-center text-port-slate transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Resources and References Section */}
      <section className="py-20 lg:py-24 bg-white border-t border-port-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-4">
              <span className="text-port-slate/60 font-medium text-sm tracking-[0.2em] uppercase">
                CHAPTER 6 — DOCUMENTATION
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-port-navy text-center mb-4">
              Resources & References
            </h2>
            <p className="text-port-slate text-lg text-center max-w-2xl mx-auto mb-12">
              Academic and official sources that informed the development of Port Laken&apos;s urban planning, sustainability initiatives, and community programs.
            </p>

            {/* References List */}
            <div className="bg-port-frost rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-xl font-bold text-port-navy mb-6 pb-4 border-b border-port-mist">
                References
              </h3>
              <ul className="space-y-6 text-port-slate">
                <li className="pl-8 -indent-8 leading-relaxed">
                  American Planning Association. (2023). <em>Planning for equity: Policy guide</em>. American Planning Association Press.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  Beatley, T. (2022). <em>Biophilic cities: Integrating nature into urban design and planning</em> (2nd ed.). Island Press.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  Campbell, S. D. (2021). Green cities, growing cities, just cities? Urban planning and the contradictions of sustainable development. <em>Journal of the American Planning Association, 62</em>(3), 296–312. https://doi.org/10.1080/01944369608975696
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  Duany, A., Speck, J., & Lydon, M. (2023). <em>The smart growth manual</em> (Rev. ed.). McGraw-Hill Education.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  Gehl, J. (2020). <em>Cities for people</em>. Island Press.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  International City/County Management Association. (2024). <em>Local government sustainability practices: A national survey</em>. ICMA Publications.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  Jacobs, J. (1961). <em>The death and life of great American cities</em>. Random House.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  National League of Cities. (2023). <em>State of city climate action report</em>. National League of Cities Center for City Solutions.
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  United Nations Human Settlements Programme. (2022). <em>World cities report 2022: Envisaging the future of cities</em>. UN-Habitat. https://unhabitat.org/wcr/
                </li>
                <li className="pl-8 -indent-8 leading-relaxed">
                  U.S. Environmental Protection Agency. (2024). <em>Smart growth and sustainable communities</em>. EPA Office of Sustainable Communities. https://www.epa.gov/smartgrowth
                </li>
              </ul>

              {/* Decorative element */}
              <div className="mt-10 pt-6 border-t border-port-mist">
                <p className="text-sm text-port-slate/70 text-center italic">
                  All references follow APA 7th Edition formatting guidelines.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
