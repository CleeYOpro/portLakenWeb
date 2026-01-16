"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaRecycle, FaSolarPanel, FaWater, FaSeedling, FaLeaf, FaTree, FaArrowRight, FaTimes } from "react-icons/fa";
import { GiTreeGrowth, GiWaterDrop, GiWindmill } from "react-icons/gi";
import { IoEarth } from "react-icons/io5";
import Link from "next/link";

const programs = [
  {
    title: "Recycling & Waste",
    description: "Collection schedules, composting programs, and our zero-waste initiative reducing landfill impact by 40%.",
    icon: FaRecycle,
    stat: "40%",
    statLabel: "Waste Reduced"
  },
  {
    title: "Green Energy",
    description: "Solar installations, wind power partnerships, and our commitment to 100% renewable energy by 2030.",
    icon: FaSolarPanel,
    stat: "75%",
    statLabel: "Clean Energy"
  },
  {
    title: "Water Conservation",
    description: "Smart irrigation systems, stormwater management, and rainwater harvesting for a sustainable water future.",
    icon: GiWaterDrop,
    stat: "2M",
    statLabel: "Gallons Saved"
  },
  {
    title: "Community Gardens",
    description: "12 neighborhood gardens, urban farming workshops, and farm-to-table programs for local schools.",
    icon: FaSeedling,
    stat: "12",
    statLabel: "Active Gardens"
  },
];

const initiatives = [
  {
    id: "tree-planting",
    title: "Tree Planting Initiative",
    description: "Over 5,000 new trees planted this year alone, creating urban forests and improving air quality across Port Laken.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
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
    description: "Restoring our waterways through wetland preservation, marine habitat protection, and community cleanup events.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
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
    description: "All new municipal buildings meet LEED Gold certification, setting the standard for sustainable construction.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const activeInitiative = initiatives.find(i => i.id === activeModal);

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
              <FaTimes className="text-[#244C5C] text-lg" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-48">
              <img
                src={activeInitiative.image}
                alt={activeInitiative.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#244C5C]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <activeInitiative.icon className="text-xl text-[#708AA3]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  {activeInitiative.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-12rem)]">
              <div className="prose prose-sm max-w-none">
                {activeInitiative.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="font-nunito text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/environmental/get-involved"
                  className="flex-1 bg-[#244C5C] text-white px-6 py-3 rounded-full font-nunito font-semibold text-center hover:bg-[#708AA3] transition-colors"
                >
                  Get Involved
                </Link>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 text-[#244C5C] px-6 py-3 rounded-full font-nunito font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
            alt="Forest"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#244C5C]/50 via-[#244C5C]/60 to-[#244C5C]/90"></div>
        </div>

        {/* Floating Leaves Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <FaLeaf
              key={i}
              className="absolute text-white/10 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                fontSize: `${2 + i * 0.5}rem`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20">
            <IoEarth className="text-[#ABD1E6] text-xl" />
            <span className="text-white/90 font-nunito text-sm font-medium tracking-wide">Environmental Stewardship</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Our Commitment to a{" "}
            <span className="text-[#ABD1E6] italic">
              Greener Future
            </span>
          </h1>

          <p className="font-nunito text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Protecting our environment for generations to come through innovation, community action, and sustainable practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/environmental/programs"
              className="group bg-white text-[#244C5C] px-8 py-4 rounded-full font-nunito font-semibold text-lg transition-all duration-300 hover:bg-[#708AA3] hover:text-white hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center"
            >
              Explore Programs
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/environmental/get-involved"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Renewable Goal by 2030", icon: GiWindmill },
              { value: "5,000+", label: "Trees Planted", icon: GiTreeGrowth },
              { value: "40%", label: "Emissions Reduced", icon: FaLeaf },
              { value: "12", label: "Community Gardens", icon: FaSeedling },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="text-4xl text-[#708AA3] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-playfair text-3xl md:text-4xl font-bold text-[#244C5C] mb-1">{stat.value}</p>
                <p className="font-nunito text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 bg-[#ABD1E6]/30 px-4 py-2 rounded-full mb-6">
              <FaLeaf className="text-[#708AA3]" />
              <span className="text-[#244C5C] font-nunito text-sm font-semibold">Our Mission</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#244C5C] mb-8">
              Environmental Excellence
            </h2>
            <p className="font-nunito text-xl text-gray-600 leading-relaxed">
              Port Laken is committed to building a sustainable future through innovative environmental programs,
              community partnerships, and responsible resource management. Together, we&apos;re creating a cleaner,
              greener city for everyone.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#244C5C] mb-4">
                Key Programs
              </h2>
              <p className="font-nunito text-lg text-gray-500 max-w-2xl mx-auto">
                Discover how we&apos;re making Port Laken a model for environmental sustainability.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <RevealOnScroll key={program.title} className={`delay-${index * 100}`}>
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  {/* Header with Icon */}
                  <div className="h-32 bg-gradient-to-br from-[#708AA3] to-[#244C5C] flex items-center justify-center relative overflow-hidden">
                    <program.icon className="text-6xl text-white/90 group-hover:scale-110 transition-transform duration-500" />
                    {/* Decorative circles */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Stat Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-3 py-1 bg-[#708AA3] rounded-full">
                        <span className="text-white font-nunito text-sm font-bold">{program.stat}</span>
                      </div>
                      <span className="font-nunito text-xs text-gray-500">{program.statLabel}</span>
                    </div>

                    <h3 className="font-playfair font-bold text-xl text-[#244C5C] mb-3 group-hover:text-[#708AA3] transition-colors">
                      {program.title}
                    </h3>
                    <p className="font-nunito text-gray-500 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/environmental/programs"
                        className="inline-flex items-center gap-2 text-[#708AA3] font-nunito font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#244C5C] mb-4">
                Featured Initiatives
              </h2>
              <p className="font-nunito text-lg text-gray-500 max-w-2xl mx-auto">
                Making real impact through dedicated environmental projects.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-12">
            {initiatives.map((initiative, index) => (
              <RevealOnScroll key={initiative.title}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#244C5C]/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                          <initiative.icon className="text-2xl text-[#708AA3]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <h3 className="font-playfair text-3xl font-bold text-[#244C5C] mb-4">
                      {initiative.title}
                    </h3>
                    <p className="font-nunito text-lg text-gray-500 leading-relaxed mb-6">
                      {initiative.description}
                    </p>
                    <button
                      onClick={() => openModal(initiative.id)}
                      className="inline-flex items-center gap-2 bg-[#244C5C] text-white px-6 py-3 rounded-full font-nunito font-semibold transition-all duration-300 hover:bg-[#708AA3] hover:gap-3"
                    >
                      Learn More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#708AA3] to-[#244C5C] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10"><FaLeaf className="text-8xl text-white" /></div>
          <div className="absolute bottom-10 right-10"><GiTreeGrowth className="text-9xl text-white" /></div>
          <div className="absolute top-1/2 left-1/4"><FaSeedling className="text-6xl text-white" /></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Green Movement
            </h2>
            <p className="font-nunito text-xl text-white/90 mb-10 leading-relaxed">
              Every action counts. Volunteer, participate in community cleanups, or simply make sustainable choices.
              Together, we can make Port Laken a beacon of environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/environmental/get-involved"
                className="bg-white text-[#244C5C] px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all duration-300 hover:bg-[#ABD1E6] hover:scale-105 shadow-xl"
              >
                Volunteer Today
              </Link>
              <button className="bg-transparent text-white px-8 py-4 rounded-full font-nunito font-bold text-lg border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#244C5C] hover:scale-105">
                Contact Us
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        @keyframes modal-in {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
