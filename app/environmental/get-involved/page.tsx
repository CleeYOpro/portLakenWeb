"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { FaLeaf, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaHandsHelping, FaTree, FaRecycle, FaWater, FaSeedling, FaHeart, FaGraduationCap, FaBriefcase, FaCheck } from "react-icons/fa";
import { GiTreeGrowth } from "react-icons/gi";
import { IoEarth } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const volunteerOpportunities = [
  {
    title: "Beach & Harbor Cleanup",
    description: "Help keep our waterways pristine by joining monthly cleanup events at the harbor and local beaches.",
    icon: FaWater,
    commitment: "4 hours/month",
    nextEvent: "Jan 27, 2026",
    spots: 12,
  },
  {
    title: "Tree Planting Crew",
    description: "Plant trees throughout Port Laken to expand our urban forest and improve air quality.",
    icon: FaTree,
    commitment: "One-time or ongoing",
    nextEvent: "Feb 3, 2026",
    spots: 25,
  },
  {
    title: "Community Garden Helper",
    description: "Assist with maintaining community gardens, teaching workshops, and harvesting produce for food banks.",
    icon: FaSeedling,
    commitment: "2-4 hours/week",
    nextEvent: "Ongoing",
    spots: 8,
  },
  {
    title: "Recycling Ambassador",
    description: "Educate neighbors about proper recycling practices and help at community recycling events.",
    icon: FaRecycle,
    commitment: "3 hours/week",
    nextEvent: "Training: Feb 10",
    spots: 15,
  },
  {
    title: "Youth Educator",
    description: "Lead environmental education programs for local schools and youth groups.",
    icon: FaGraduationCap,
    commitment: "4-6 hours/month",
    nextEvent: "Spring semester",
    spots: 6,
  },
  {
    title: "Event Support",
    description: "Help organize and run environmental events, workshops, and community gatherings.",
    icon: FaUsers,
    commitment: "As needed",
    nextEvent: "Various",
    spots: 20,
  },
];

const impactStats = [
  { value: "2,500+", label: "Active Volunteers" },
  { value: "45,000", label: "Hours Contributed" },
  { value: "5,000", label: "Trees Planted" },
  { value: "$500K", label: "Community Value" },
];

const testimonials = [
  {
    quote: "Volunteering with the tree planting crew has been incredibly rewarding. Seeing the saplings I planted now providing shade is amazing.",
    name: "Maria Santos",
    role: "Tree Planting Volunteer, 3 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote: "The recycling ambassador program taught me so much. Now I help my whole neighborhood recycle correctly!",
    name: "James Chen",
    role: "Recycling Ambassador",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "As a retired teacher, leading youth education programs lets me continue making a difference for the next generation.",
    name: "Patricia Williams",
    role: "Youth Educator Volunteer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

const waysToHelp = [
  {
    title: "Volunteer Your Time",
    description: "Join one of our volunteer programs and make a direct impact in your community.",
    icon: FaHandsHelping,
    action: "Browse Opportunities",
    link: "#volunteer",
  },
  {
    title: "Donate",
    description: "Support our programs financially and help us expand our environmental initiatives.",
    icon: FaHeart,
    action: "Make a Donation",
    link: "#donate",
  },
  {
    title: "Partner With Us",
    description: "Businesses and organizations can partner with us for corporate sustainability programs.",
    icon: FaBriefcase,
    action: "Become a Partner",
    link: "#partner",
  },
  {
    title: "Spread the Word",
    description: "Share our mission with friends, family, and social networks to grow our community.",
    icon: HiUserGroup,
    action: "Share Our Mission",
    link: "#share",
  },
];

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    availability: "",
    message: "",
  });

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#244C5C] to-[#708AA3] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10"><FaHandsHelping className="text-9xl text-white" /></div>
          <div className="absolute bottom-10 left-20"><GiTreeGrowth className="text-8xl text-white" /></div>
          <div className="absolute top-1/2 left-1/3"><FaHeart className="text-6xl text-white" /></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
              <FaHandsHelping className="text-[#ABD1E6] text-xl" />
              <span className="text-white/90 font-nunito text-sm font-medium">Make a Difference</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Get <span className="text-[#ABD1E6] italic">Involved</span>
            </h1>

            <p className="font-nunito text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join thousands of Port Laken residents who are actively working to protect our environment.
              Whether you have an hour or a lifetime, there's a place for you in our green movement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#volunteer"
                className="group bg-white text-[#244C5C] px-8 py-4 rounded-full font-nunito font-semibold text-lg transition-all duration-300 hover:bg-[#ABD1E6] hover:scale-105 flex items-center gap-2 justify-center"
              >
                Volunteer Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#signup"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg border border-white/30 hover:bg-white/20 transition-colors"
              >
                Sign Up for Updates
              </a>
            </div>

            <Link
              href="/environmental"
              className="inline-flex items-center gap-2 text-white/80 font-nunito hover:text-white transition-colors mt-8"
            >
              <FaArrowRight className="rotate-180" />
              Back to Environmental Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-12 z-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-playfair text-2xl md:text-3xl font-bold text-[#244C5C]">{stat.value}</p>
                <p className="font-nunito text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-[#244C5C] mb-4">
                Ways to Help
              </h2>
              <p className="font-nunito text-lg text-gray-500 max-w-2xl mx-auto">
                There are many ways to contribute to Port Laken's environmental mission.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToHelp.map((way, index) => (
              <RevealOnScroll key={way.title} className={`delay-${index * 100}`}>
                <a
                  href={way.link}
                  className="group block bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full"
                >
                  <div className="w-16 h-16 bg-[#ABD1E6]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#708AA3] transition-colors">
                    <way.icon className="text-2xl text-[#708AA3] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#244C5C] mb-2 group-hover:text-[#708AA3] transition-colors">
                    {way.title}
                  </h3>
                  <p className="font-nunito text-sm text-gray-500 mb-4">
                    {way.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#708AA3] font-nunito font-semibold text-sm group-hover:gap-2 transition-all">
                    {way.action}
                    <FaArrowRight className="text-xs" />
                  </span>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-[#244C5C] mb-4">
                Volunteer Opportunities
              </h2>
              <p className="font-nunito text-lg text-gray-500 max-w-2xl mx-auto">
                Find the perfect way to contribute your time and skills to our environmental mission.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opp, index) => (
              <RevealOnScroll key={opp.title} className={`delay-${index * 100}`}>
                <div className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#ABD1E6]/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#708AA3] to-[#244C5C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <opp.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-bold text-[#244C5C] group-hover:text-[#708AA3] transition-colors">
                        {opp.title}
                      </h3>
                      <p className="font-nunito text-xs text-[#708AA3]">{opp.commitment}</p>
                    </div>
                  </div>

                  <p className="font-nunito text-sm text-gray-500 mb-4">
                    {opp.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1 text-gray-500">
                        <FaCalendarAlt className="text-[#708AA3]" />
                        <span className="font-nunito">{opp.nextEvent}</span>
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <FaUsers className="text-[#708AA3]" />
                        <span className="font-nunito">{opp.spots} spots</span>
                      </span>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2 bg-[#244C5C] text-white rounded-lg font-nunito font-semibold text-sm hover:bg-[#708AA3] transition-colors opacity-0 group-hover:opacity-100">
                    Sign Up
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-[#244C5C] mb-4">
                Volunteer Stories
              </h2>
              <p className="font-nunito text-gray-500">
                Hear from our amazing volunteers about their experiences.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.name} className={`delay-${index * 100}`}>
                <div className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col">
                  <div className="flex-1">
                    <p className="font-nunito text-gray-600 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-nunito font-semibold text-[#244C5C]">{testimonial.name}</p>
                      <p className="font-nunito text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#708AA3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="text-2xl text-white" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-[#244C5C] mb-2">
                  Join Our Green Team
                </h2>
                <p className="font-nunito text-gray-500">
                  Fill out this form and we'll connect you with the perfect opportunity.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-nunito text-sm font-semibold text-[#244C5C] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-nunito focus:outline-none focus:border-[#708AA3] focus:ring-2 focus:ring-[#708AA3]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-nunito text-sm font-semibold text-[#244C5C] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-nunito focus:outline-none focus:border-[#708AA3] focus:ring-2 focus:ring-[#708AA3]/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-nunito text-sm font-semibold text-[#244C5C] mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-nunito focus:outline-none focus:border-[#708AA3] focus:ring-2 focus:ring-[#708AA3]/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block font-nunito text-sm font-semibold text-[#244C5C] mb-3">
                    Areas of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Beach Cleanup", "Tree Planting", "Community Gardens", "Recycling", "Youth Education", "Events"].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-2 rounded-full font-nunito text-sm transition-all ${
                          formData.interests.includes(interest)
                            ? "bg-[#708AA3] text-white"
                            : "bg-white border border-gray-200 text-gray-600 hover:border-[#708AA3]"
                        }`}
                      >
                        {formData.interests.includes(interest) && <FaCheck className="inline mr-1 text-xs" />}
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-nunito text-sm font-semibold text-[#244C5C] mb-2">
                    Availability
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-nunito focus:outline-none focus:border-[#708AA3] focus:ring-2 focus:ring-[#708AA3]/20 bg-white"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekday-mornings">Weekday Mornings</option>
                    <option value="weekday-afternoons">Weekday Afternoons</option>
                    <option value="weekday-evenings">Weekday Evenings</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block font-nunito text-sm font-semibold text-[#244C5C] mb-2">
                    Tell us about yourself (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-nunito focus:outline-none focus:border-[#708AA3] focus:ring-2 focus:ring-[#708AA3]/20 resize-none"
                    placeholder="Any skills, experience, or questions you'd like to share..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#244C5C] text-white py-4 rounded-xl font-nunito font-bold text-lg hover:bg-[#708AA3] transition-colors flex items-center justify-center gap-2"
                >
                  Submit Application
                  <FaArrowRight />
                </button>

                <p className="font-nunito text-xs text-center text-gray-500">
                  By submitting, you agree to receive communications about volunteer opportunities.
                </p>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#708AA3] to-[#244C5C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">
            Every Action Makes a Difference
          </h2>
          <p className="font-nunito text-white/80 mb-8">
            Questions? Contact our volunteer coordinator at{" "}
            <a href="mailto:volunteer@portlaken.gov" className="text-[#ABD1E6] hover:underline">
              volunteer@portlaken.gov
            </a>
          </p>
          <Link
            href="/environmental/programs"
            className="inline-flex items-center gap-2 bg-white text-[#244C5C] px-6 py-3 rounded-full font-nunito font-semibold hover:bg-[#ABD1E6] transition-colors"
          >
            Explore Our Programs
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
