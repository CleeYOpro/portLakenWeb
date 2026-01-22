"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaRecycle,
  FaSolarPanel,
  FaWater,
  FaSeedling,
  FaLeaf,
  FaTree,
  FaArrowRight,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";
import { GiTreeGrowth, GiWaterDrop, GiWindmill } from "react-icons/gi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Recycling & Waste",
    description:
      "Learn about collection schedules, accepted materials, and our goals for reducing landfill waste.",
    icon: FaRecycle,
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Green Energy",
    description:
      "Explore our initiatives for solar power, energy conservation, and shifting to renewable sources.",
    icon: FaSolarPanel,
    color: "from-amber-500 to-orange-600",
    lightColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Water & Stormwater",
    description:
      "Find tips on water conservation, rain garden programs, and managing stormwater runoff.",
    icon: GiWaterDrop,
    color: "from-sky-500 to-blue-600",
    lightColor: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    title: "Sustainability Programs",
    description:
      "Get involved with community gardens, educational workshops, and local green initiatives.",
    icon: FaSeedling,
    color: "from-lime-500 to-green-600",
    lightColor: "bg-lime-50",
    iconColor: "text-lime-600",
  },
];

const latestNews = [
  {
    date: "October 26, 2023",
    title: "Community Garden Harvest Sets New Record",
    description:
      "Volunteers and residents celebrated a bountiful harvest, donating over 500 pounds of produce to local food banks.",
    link: "/news",
  },
  {
    date: "September 15, 2023",
    title: "City Awarded Grant for Solar Panel Installation on Public Buildings",
    description:
      "A new federal grant will accelerate our transition to clean energy, starting with the public library and city hall.",
    link: "/news",
  },
  {
    date: "August 02, 2023",
    title: "New E-Waste Recycling Program Launches This Month",
    description:
      "Residents can now safely dispose of old electronics at designated drop-off points city-wide.",
    link: "/news",
  },
];

const initiatives = [
  {
    id: "tree-planting",
    title: "Tree Planting Initiative",
    description:
      "Over 5,000 new trees planted this year alone, creating urban forests and improving air quality across Port Laken.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    icon: FaTree,
    fullDescription: `The Tree Planting Initiative is one of Port Laken's most impactful environmental programs. Since launching in 2020, we've planted over 15,000 trees across neighborhoods, parks, and public spaces.

Our focus areas include:

• Urban Canopy Expansion: We're working to increase tree coverage in downtown areas to reduce heat islands and improve air quality. Studies show that urban trees can lower temperatures by up to 10°F in summer months.

• Native Species Priority: We plant primarily native species like Red Maples, White Oaks, and Eastern Redbuds that thrive in our climate and support local wildlife. Native trees require less maintenance and provide better habitats for birds and pollinators.

• Community Involvement: Residents can request a free tree for their property through our Adopt-a-Tree program. We also host monthly planting events where volunteers help expand green spaces in underserved neighborhoods.

• School Partnerships: Every elementary school in Port Laken has received trees for their campus, and students participate in "Tree Guardians" programs to learn about environmental stewardship.

Join us at our next planting event on the first Saturday of each month at Riverside Park.`,
  },
  {
    id: "clean-harbor",
    title: "Clean Harbor Project",
    description:
      "Restoring our waterways through wetland preservation, marine habitat protection, and community cleanup events.",
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
    icon: FaWater,
    fullDescription: `The Clean Harbor Project is our comprehensive initiative to restore and protect Port Laken's waterways, including the harbor, local streams, and wetland areas.

Key achievements and ongoing efforts:

• Water Quality Improvement: Through stormwater management upgrades and pollution prevention, we've improved harbor water quality by 60% since 2018. Fish populations have rebounded, and swimming areas have been reopened.

• Wetland Restoration: We've restored 50 acres of wetlands along the harbor's edge, creating natural filtration systems that clean runoff before it reaches the water. These wetlands also provide critical habitat for herons, egrets, and migrating waterfowl.

• Marine Habitat Protection: Oyster reef restoration projects are helping filter water naturally while providing homes for crabs, fish, and other marine life. Each oyster filters up to 50 gallons of water daily.

• Community Cleanups: Our monthly Harbor Heroes cleanup events have removed over 10 tons of trash and debris from shorelines. Volunteers of all ages are welcome to participate.

• Plastic Reduction: We've partnered with local businesses to eliminate single-use plastics near waterfront areas, preventing an estimated 500,000 plastic items from entering our waterways annually.

The harbor is the heart of our community, and we're committed to keeping it clean for generations to enjoy.`,
  },
  {
    id: "green-building",
    title: "Green Building Standards",
    description:
      "All new municipal buildings meet LEED Gold certification, setting the standard for sustainable construction.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    icon: GiWindmill,
    fullDescription: `Port Laken's Green Building Standards program ensures that all new construction and major renovations meet the highest environmental standards, reducing energy consumption and carbon emissions.

Program highlights:

• LEED Certification Required: All new municipal buildings must achieve LEED Gold certification or higher. Our new City Hall achieved LEED Platinum status, using 45% less energy than conventional buildings.

• Solar-Ready Construction: New buildings are designed with solar panel infrastructure, making it easy and affordable to add renewable energy systems. Over 30 municipal buildings now generate their own clean electricity.

• Green Roof Initiative: We encourage vegetated roofs that reduce stormwater runoff, lower cooling costs, and create habitat for pollinators. The library's green roof has become a popular educational destination.

• Sustainable Materials: Construction projects prioritize recycled, locally-sourced, and low-emission materials. We've diverted 85% of construction waste from landfills through careful material management.

• Incentive Programs: Private developers who meet green building standards receive expedited permitting and tax incentives. This has led to 40% of new private construction achieving green certification.

• Energy Benchmarking: All large buildings must report annual energy use, helping identify opportunities for efficiency improvements. Public dashboards let residents track progress.

These standards are saving taxpayers $2 million annually in energy costs while reducing our carbon footprint by 12,000 tons per year.`,
  },
];

export default function EnvironmentalPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  const activeInitiative = initiatives.find((i) => i.id === activeModal);

  return (
    <>
      {/* Modal */}
      {activeModal && activeInitiative && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <FaTimes className="text-port-navy text-lg" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-48">
              <Image
                src={activeInitiative.image}
                alt={activeInitiative.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-port-navy/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <activeInitiative.icon className="text-xl text-port-sky" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {activeInitiative.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-12rem)]">
              <div className="prose prose-sm max-w-none">
                {activeInitiative.fullDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-port-slate leading-relaxed mb-4 whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/environmental/get-involved"
                  className="flex-1 bg-port-navy text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-port-sky transition-colors"
                >
                  Get Involved
                </Link>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 text-port-navy px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Full Width Image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
            alt="Sunlight streaming through lush green forest"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-port-navy/30 via-port-navy/40 to-port-navy/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our Commitment to a
            <br />
            <span className="italic text-port-sky/90">Greener Future</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover how we are working together to protect and preserve our
            local environment for generations to come.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-8">
                Overview
              </h2>
              <p className="text-lg text-port-slate leading-relaxed">
                Our community is dedicated to fostering a sustainable future
                through proactive environmental stewardship. This page outlines
                our key initiatives, from comprehensive recycling programs to
                the adoption of green energy, all designed to reduce our
                ecological footprint and enhance the quality of life for all
                residents.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20 lg:py-28 bg-port-frost/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
                Key Programs
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <RevealOnScroll key={program.title} className={`delay-${index * 100}`}>
                <Link
                  href="/environmental/programs"
                  className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-port-mist/50"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${program.lightColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon
                      className={`text-2xl ${program.iconColor}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-port-navy mb-3 group-hover:text-port-sky transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-port-slate text-sm leading-relaxed">
                    {program.description}
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
                Latest News
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-0 divide-y divide-port-mist">
            {latestNews.map((news, index) => (
              <RevealOnScroll key={index} className={`delay-${index * 100}`}>
                <Link
                  href={news.link}
                  className="group flex items-start justify-between py-8 hover:bg-port-frost/30 -mx-4 px-4 rounded-xl transition-colors"
                >
                  <div className="flex-1 pr-8">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-port-slate/70 text-sm mb-2">
                      <FaCalendarAlt className="text-xs" />
                      <span>{news.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-port-navy mb-2 group-hover:text-port-sky transition-colors">
                      {news.title}
                    </h3>

                    {/* Description */}
                    <p className="text-port-slate text-sm leading-relaxed">
                      {news.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-port-frost flex items-center justify-center group-hover:bg-port-navy group-hover:text-white transition-all">
                    <HiOutlineArrowNarrowRight className="text-lg text-port-slate group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiatives - Bento Grid */}
      <section className="py-20 lg:py-28 bg-port-frost/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
                Featured Initiatives
              </h2>
              <p className="text-port-slate text-lg max-w-2xl mx-auto">
                Making real impact through dedicated environmental projects
                across our community.
              </p>
            </div>
          </RevealOnScroll>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Large Card */}
            <RevealOnScroll className="md:row-span-2">
              <button
                onClick={() => openModal(initiatives[0].id)}
                className="group relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden text-left"
              >
                <Image
                  src={initiatives[0].image}
                  alt={initiatives[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/90 via-port-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <FaTree className="text-xl text-white" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                    {initiatives[0].title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-md">
                    {initiatives[0].description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </button>
            </RevealOnScroll>

            {/* Top Right Card */}
            <RevealOnScroll className="delay-100">
              <button
                onClick={() => openModal(initiatives[1].id)}
                className="group relative w-full h-[200px] md:h-full min-h-[200px] rounded-3xl overflow-hidden text-left"
              >
                <Image
                  src={initiatives[1].image}
                  alt={initiatives[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/90 via-port-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {initiatives[1].title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/80 font-medium text-sm group-hover:gap-3 group-hover:text-white transition-all">
                    Learn More <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </button>
            </RevealOnScroll>

            {/* Bottom Right Card */}
            <RevealOnScroll className="delay-200">
              <button
                onClick={() => openModal(initiatives[2].id)}
                className="group relative w-full h-[200px] md:h-full min-h-[200px] rounded-3xl overflow-hidden text-left"
              >
                <Image
                  src={initiatives[2].image}
                  alt={initiatives[2].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-port-navy/90 via-port-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {initiatives[2].title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/80 font-medium text-sm group-hover:gap-3 group-hover:text-white transition-all">
                    Learn More <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 lg:py-24 bg-port-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Measurable progress toward a sustainable Port Laken.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                value: "100%",
                label: "Renewable Energy Goal",
                sublabel: "by 2030",
                icon: GiWindmill,
              },
              {
                value: "5,000+",
                label: "Trees Planted",
                sublabel: "this year",
                icon: GiTreeGrowth,
              },
              {
                value: "40%",
                label: "Emissions Reduced",
                sublabel: "since 2018",
                icon: FaLeaf,
              },
              {
                value: "12",
                label: "Community Gardens",
                sublabel: "city-wide",
                icon: FaSeedling,
              },
            ].map((stat, index) => (
              <RevealOnScroll key={index} className={`delay-${index * 100}`}>
                <div className="text-center">
                  <stat.icon className="text-4xl text-port-sky mx-auto mb-4" />
                  <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/90 font-medium">{stat.label}</p>
                  <p className="text-white/50 text-sm">{stat.sublabel}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="bg-gradient-to-br from-port-frost to-port-mist/30 rounded-3xl p-10 md:p-16">
              <FaLeaf className="text-5xl text-port-sky mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-4">
                Join Our Green Movement
              </h2>
              <p className="text-port-slate text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Every action counts. Volunteer, participate in community
                cleanups, or simply make sustainable choices. Together, we can
                make Port Laken a beacon of environmental responsibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/environmental/get-involved"
                  className="inline-flex items-center justify-center gap-2 bg-port-navy text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-port-sky hover:shadow-lg hover:-translate-y-0.5"
                >
                  Volunteer Today
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-port-navy px-8 py-4 rounded-full font-semibold border border-port-mist transition-all duration-300 hover:bg-port-frost hover:shadow-lg hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
