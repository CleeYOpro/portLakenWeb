"use client";

import { FaTwitter, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { GiWaves } from "react-icons/gi";
import { MdEvent, MdPeople, MdInfo } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsCalendarEventFill } from "react-icons/bs";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative flex items-end min-h-screen px-6 md:px-20 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/dundee.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        <div className="relative max-w-7xl w-full mx-auto z-10">
          <div className="max-w-4xl">
<h1 className="text-white mb-6">
  <span className="font-playfair text-5xl md:text-8xl font-bold">Community </span>
  <span className="font-playfair text-5xl md:text-8xl font-bold italic">First</span>
</h1>

            <div className="flex flex-col md:flex-row md:items-end md:gap-8">
              <p className="text-white/90 text-base md:text-med mb-3 md:mb-0 leading-relaxed max-w-xl">
                For over a century, connecting residents, honoring our heritage, and embracing innovation to build a community where everyone belongs and thrives.
              </p>

              <button className="glassmorphic-strong hover:bg-white/25 transition-all px-6 py-3 rounded-full text-white font-medium text-base shadow-lg flex items-center gap-2 whitespace-nowrap">
                Our Story
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="relative py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-10 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#alerts" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-[#C49475] group">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <IoMdAlert className="text-3xl text-red-500" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Emergency Alerts</h3>
              <p className="text-gray-600 text-sm">Stay informed about important community alerts</p>
            </a>
            <a href="#submit" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-[#2E8BC0] group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <HiDocumentText className="text-3xl text-[#2E8BC0]" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Submit Resource</h3>
              <p className="text-gray-600 text-sm">Share resources with the community</p>
            </a>
            <a href="#taxes" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-[#C49475] group">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <RiMoneyDollarCircleFill className="text-3xl text-green-600" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Pay Taxes</h3>
              <p className="text-gray-600 text-sm">Quick and secure online tax payments</p>
            </a>
            <a href="#events" className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-[#2E8BC0] group">
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
      <section id="services" className="relative py-20 px-6 md:px-20 bg-[#C49475]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all hover:bg-white hover:scale-105">
              <MdInfo className="text-[#C49475] text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Community Resources</h3>
              <p className="text-gray-600">Access essential services and resources for residents.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all hover:bg-white hover:scale-105">
              <MdEvent className="text-[#C49475] text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Local Events</h3>
              <p className="text-gray-600">Stay updated with community gatherings and celebrations.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all hover:bg-white hover:scale-105">
              <MdPeople className="text-[#C49475] text-4xl mb-4" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Connect</h3>
              <p className="text-gray-600">Join local groups and meet your neighbors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="relative py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-12 text-center">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#C49475]">
              <div className="bg-[#C49475]/10 rounded-xl p-4">
                <MdEvent className="text-[#C49475] text-3xl" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg">Summer Festival</h3>
                <p className="text-gray-600">Join us for music, food, and fun - July 15th</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2E8BC0]">
              <div className="bg-[#2E8BC0]/10 rounded-xl p-4">
                <MdEvent className="text-[#2E8BC0] text-3xl" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg">Town Hall Meeting</h3>
                <p className="text-gray-600">Community discussion and updates - July 22nd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-[#C49475] to-[#B88565]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GiWaves className="text-white text-3xl" />
            <span className="text-white font-playfair font-bold text-2xl">Port Laken</span>
          </div>
          <p className="text-white/90 mb-8 text-lg">Building community, one connection at a time.</p>
          <div className="flex justify-center gap-8 mb-6">
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
