"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { FaRecycle, FaSolarPanel, FaWater, FaSeedling, FaLeaf, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaDownload } from "react-icons/fa";
import { GiWaterDrop, GiWindmill } from "react-icons/gi";
import { TbPlant } from "react-icons/tb";
import { IoEarth } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    id: "recycling",
    title: "Recycling & Waste Reduction",
    description: "Our comprehensive recycling program makes it easy for residents to reduce waste and protect our environment.",
    icon: FaRecycle,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    stats: [
      { value: "40%", label: "Waste Diverted" },
      { value: "15K", label: "Tons Recycled" },
      { value: "98%", label: "Participation" },
    ],
    details: [
      "Curbside recycling pickup every Tuesday",
      "Glass, plastic, paper, and metal accepted",
      "Free recycling bins for all residents",
      "Hazardous waste drop-off events monthly",
    ],
    schedule: "Every Tuesday, 7 AM - 5 PM",
    contact: "recycling@portlaken.gov",
  },
  {
    id: "composting",
    title: "Community Composting",
    description: "Turn food scraps and yard waste into nutrient-rich soil for community gardens and public spaces.",
    icon: TbPlant,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    stats: [
      { value: "5K", label: "Tons Composted" },
      { value: "12", label: "Drop-off Sites" },
      { value: "500+", label: "Home Composters" },
    ],
    details: [
      "Free compost bins for residents",
      "Monthly composting workshops",
      "Community drop-off locations citywide",
      "Free finished compost for gardens",
    ],
    schedule: "Drop-off: Daily, 6 AM - 8 PM",
    contact: "compost@portlaken.gov",
  },
  {
    id: "solar",
    title: "Solar Energy Initiative",
    description: "Harnessing the power of the sun to create a cleaner, more sustainable energy future for Port Laken.",
    icon: FaSolarPanel,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    stats: [
      { value: "75%", label: "Clean Energy" },
      { value: "2MW", label: "Capacity" },
      { value: "$2M", label: "Saved Annually" },
    ],
    details: [
      "Residential solar rebate program",
      "Community solar farm subscriptions",
      "Free solar assessments for homes",
      "Net metering for solar producers",
    ],
    schedule: "Assessments: Mon-Fri, 9 AM - 5 PM",
    contact: "solar@portlaken.gov",
  },
  {
    id: "wind",
    title: "Wind Power Partnership",
    description: "Working with regional partners to bring clean wind energy to power homes and businesses.",
    icon: GiWindmill,
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
    stats: [
      { value: "25%", label: "Grid Power" },
      { value: "50K", label: "Homes Powered" },
      { value: "Zero", label: "Emissions" },
    ],
    details: [
      "Regional wind farm partnership",
      "Green energy purchasing options",
      "Community wind co-op investment",
      "Educational tours available",
    ],
    schedule: "Tours: Saturdays, 10 AM",
    contact: "energy@portlaken.gov",
  },
  {
    id: "water",
    title: "Water Conservation",
    description: "Protecting our most precious resource through smart management and community education.",
    icon: GiWaterDrop,
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80",
    stats: [
      { value: "2M", label: "Gallons Saved" },
      { value: "30%", label: "Usage Reduced" },
      { value: "100%", label: "Clean Water" },
    ],
    details: [
      "Free water-saving fixtures",
      "Smart irrigation rebates",
      "Rainwater harvesting program",
      "Leak detection assistance",
    ],
    schedule: "Hotline: 24/7",
    contact: "water@portlaken.gov",
  },
  {
    id: "gardens",
    title: "Community Gardens",
    description: "Growing food, building community, and creating green spaces throughout Port Laken.",
    icon: FaSeedling,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    stats: [
      { value: "12", label: "Garden Sites" },
      { value: "400+", label: "Plot Holders" },
      { value: "10K", label: "lbs Produced" },
    ],
    details: [
      "Individual garden plots available",
      "Free seeds and starter plants",
      "Gardening workshops monthly",
      "Youth education programs",
    ],
    schedule: "Gardens open: Dawn to Dusk",
    contact: "gardens@portlaken.gov",
  },
];

const upcomingEvents = [
  { date: "Jan 20", title: "Recycling 101 Workshop", location: "City Hall" },
  { date: "Jan 25", title: "Solar Open House", location: "Community Center" },
  { date: "Feb 1", title: "Garden Plot Registration", location: "Online" },
  { date: "Feb 8", title: "E-Waste Collection Day", location: "Public Works" },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#244C5C] to-[#708AA3] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10"><FaLeaf className="text-8xl text-white" /></div>
          <div className="absolute bottom-10 right-20"><FaRecycle className="text-9xl text-white" /></div>
          <div className="absolute top-1/2 right-1/4"><GiWindmill className="text-7xl text-white" /></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
              <IoEarth className="text-[#ABD1E6] text-xl" />
              <span className="text-white/90 font-nunito text-sm font-medium">Environmental Programs</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Explore Our <span className="text-[#ABD1E6] italic">Programs</span>
            </h1>

            <p className="font-nunito text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Discover the initiatives that are making Port Laken a leader in environmental sustainability.
              Find the program that&apos;s right for you and start making a difference today.
            </p>

            <Link
              href="/environmental"
              className="inline-flex items-center gap-2 text-white/80 font-nunito hover:text-white transition-colors"
            >
              <FaArrowRight className="rotate-180" />
              Back to Environmental Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-8 z-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6", label: "Active Programs", icon: BsLightningCharge },
              { value: "98%", label: "Resident Participation", icon: IoEarth },
              { value: "$5M+", label: "Annual Savings", icon: FaSolarPanel },
              { value: "40%", label: "Emissions Reduced", icon: FaLeaf },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="text-2xl text-[#708AA3] mx-auto mb-2" />
                <p className="font-playfair text-2xl font-bold text-[#244C5C]">{stat.value}</p>
                <p className="font-nunito text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-[#244C5C] mb-4">
                Our Environmental Programs
              </h2>
              <p className="font-nunito text-lg text-gray-500 max-w-2xl mx-auto">
                Each program is designed to make sustainable living easy and accessible for all Port Laken residents.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <RevealOnScroll key={program.id}>
                <div
                  id={program.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {/* Image */}
                  <div className="lg:w-2/5 relative h-64 lg:h-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#244C5C]/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <program.icon className="text-2xl text-[#708AA3]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-[#244C5C] mb-3">
                      {program.title}
                    </h3>
                    <p className="font-nunito text-gray-500 mb-6">
                      {program.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                      {program.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="font-playfair text-xl lg:text-2xl font-bold text-[#708AA3]">{stat.value}</p>
                          <p className="font-nunito text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {program.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FaLeaf className="text-[#708AA3] text-xs mt-1.5 flex-shrink-0" />
                          <span className="font-nunito text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm">
                        <FaCalendarAlt className="text-[#708AA3]" />
                        <span className="font-nunito text-gray-600">{program.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FaEnvelope className="text-[#708AA3]" />
                        <a href={`mailto:${program.contact}`} className="font-nunito text-[#708AA3] hover:underline">
                          {program.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-[#244C5C] mb-4">
                Upcoming Events
              </h2>
              <p className="font-nunito text-gray-500">
                Join us at these upcoming environmental events and workshops.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-4">
            {upcomingEvents.map((event, index) => (
              <RevealOnScroll key={index} className={`delay-${index * 100}`}>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-[#ABD1E6]/20 transition-colors group">
                  <div className="w-16 h-16 bg-[#708AA3] rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                    <span className="font-nunito text-xs uppercase">{event.date.split(' ')[0]}</span>
                    <span className="font-playfair text-xl font-bold">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-nunito font-semibold text-[#244C5C] group-hover:text-[#708AA3] transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-xs" />
                      <span className="font-nunito">{event.location}</span>
                    </div>
                  </div>
                  <FaArrowRight className="text-[#708AA3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[#708AA3] font-nunito font-semibold hover:gap-3 transition-all"
            >
              View All Events
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Download */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#708AA3] to-[#244C5C] rounded-3xl p-8 lg:p-12 text-center">
            <FaDownload className="text-4xl text-white/80 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-4">
              Download Program Guides
            </h3>
            <p className="font-nunito text-white/80 mb-8 max-w-xl mx-auto">
              Get detailed guides, schedules, and resources for all our environmental programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#244C5C] px-6 py-3 rounded-full font-nunito font-semibold hover:bg-[#ABD1E6] transition-colors">
                Recycling Guide (PDF)
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-full font-nunito font-semibold border border-white/30 hover:bg-white/20 transition-colors">
                All Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-playfair text-3xl font-bold text-[#244C5C] mb-4">
              Ready to Get Involved?
            </h2>
            <p className="font-nunito text-gray-500 mb-8">
              Join thousands of Port Laken residents making a difference.
            </p>
            <Link
              href="/environmental/get-involved"
              className="inline-flex items-center gap-2 bg-[#244C5C] text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg hover:bg-[#708AA3] transition-colors"
            >
              Get Involved Today
              <FaArrowRight />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
