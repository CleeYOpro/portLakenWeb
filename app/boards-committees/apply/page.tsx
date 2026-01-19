"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaFileAlt,
  FaCheckCircle,
  FaCalendarAlt,
  FaPaperPlane
} from "react-icons/fa";
import { HiOutlineClipboardDocumentList, HiSparkles } from "react-icons/hi2";
import { BsBuildings, BsPalette, BsTreeFill, BsShieldCheck, BsPeopleFill } from "react-icons/bs";
import { MdOutlineHistoryEdu } from "react-icons/md";

const boardOptions = [
  { id: "planning", name: "Planning Commission", icon: BsBuildings },
  { id: "civic-arts", name: "Civic Arts Commission", icon: BsPalette },
  { id: "parks-recreation", name: "Parks & Recreation Board", icon: BsTreeFill },
  { id: "ethics", name: "Ethics Commission", icon: BsShieldCheck },
  { id: "historic-preservation", name: "Historic Preservation Board", icon: MdOutlineHistoryEdu },
  { id: "youth-advisory", name: "Youth Advisory Council", icon: BsPeopleFill },
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    selectedBoard: "",
    experience: "",
    motivation: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedEmail(formData.email);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <>
        {/* Success State */}
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FaCheckCircle className="text-5xl text-green-500" />
                </div>

                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#244C5C] mb-4">
                  Application Received!
                </h1>

                <p className="font-nunito text-lg text-gray-600 mb-8 leading-relaxed">
                  Thank you for your interest in serving Port Laken. Your application has been submitted and our team has been notified.
                </p>

                {/* Email Confirmation Box */}
                <div className="bg-[#ABD1E6]/20 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center gap-2 text-[#244C5C] mb-3">
                    <FaEnvelope className="text-lg" />
                    <span className="font-nunito font-semibold">Confirmation sent to:</span>
                  </div>
                  <p className="font-nunito text-[#244C5C] font-bold text-lg">{submittedEmail}</p>
                </div>

                {/* Next Steps */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
                  <h3 className="font-playfair text-xl font-bold text-[#244C5C] mb-4 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#708AA3]" />
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3 font-nunito text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#708AA3] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                      <span>Our staff will review your application within 5-7 business days.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#708AA3] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                      <span>You&apos;ll receive an email to schedule an interview with the selection committee.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#708AA3] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                      <span>Final appointments are made by the City Council at a public meeting.</span>
                    </li>
                  </ul>
                </div>

                <p className="font-nunito text-gray-500 text-sm mb-8">
                  Please check your email (including spam folder) for confirmation and updates about your interview scheduling.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/boards-committees"
                    className="bg-[#244C5C] text-white px-8 py-4 rounded-full font-nunito font-bold transition-all duration-300 hover:bg-[#708AA3] hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    <FaArrowLeft />
                    Back to Boards
                  </Link>
                  <Link
                    href="/"
                    className="bg-gray-100 text-[#244C5C] px-8 py-4 rounded-full font-nunito font-bold transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#244C5C] via-[#244C5C] to-[#708AA3]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ABD1E6]/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/boards-committees"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-nunito mb-6 transition-colors"
          >
            <FaArrowLeft />
            Back to Boards & Committees
          </Link>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <HiOutlineClipboardDocumentList className="text-[#ABD1E6] text-lg" />
            <span className="text-white/90 font-nunito text-sm font-medium tracking-wide">Board Application</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Apply to <span className="text-[#ABD1E6] italic">Serve</span>
          </h1>

          <p className="font-nunito text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward making a difference in your community. Complete the application below and we&apos;ll be in touch.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              {/* Form Header */}
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-[#ABD1E6]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HiSparkles className="text-3xl text-[#708AA3]" />
                </div>
                <h2 className="font-playfair text-2xl font-bold text-[#244C5C] mb-2">
                  Application Form
                </h2>
                <p className="font-nunito text-gray-500">
                  All fields marked with * are required
                </p>
              </div>

              {/* Personal Information */}
              <div className="mb-10">
                <h3 className="font-playfair text-lg font-bold text-[#244C5C] mb-6 flex items-center gap-2">
                  <FaUser className="text-[#708AA3]" />
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h3 className="font-playfair text-lg font-bold text-[#244C5C] mb-6 flex items-center gap-2">
                  <FaEnvelope className="text-[#708AA3]" />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all"
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                        City of Residence *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all"
                        placeholder="Port Laken, WA"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Board Selection */}
              <div className="mb-10">
                <h3 className="font-playfair text-lg font-bold text-[#244C5C] mb-6 flex items-center gap-2">
                  <FaBuilding className="text-[#708AA3]" />
                  Board Selection
                </h3>

                <div>
                  <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                    Which board are you interested in? *
                  </label>
                  <select
                    name="selectedBoard"
                    value={formData.selectedBoard}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a board or committee...</option>
                    {boardOptions.map((board) => (
                      <option key={board.id} value={board.id}>
                        {board.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience & Motivation */}
              <div className="mb-10">
                <h3 className="font-playfair text-lg font-bold text-[#244C5C] mb-6 flex items-center gap-2">
                  <FaFileAlt className="text-[#708AA3]" />
                  Experience & Motivation
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                      Relevant Experience *
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all resize-none"
                      placeholder="Describe any relevant professional, volunteer, or personal experience..."
                    />
                  </div>

                  <div>
                    <label className="block font-nunito font-semibold text-[#244C5C] mb-2">
                      Why do you want to serve? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all resize-none"
                      placeholder="Tell us why you're interested in serving on this board..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="w-full bg-[#244C5C] text-white px-8 py-4 rounded-full font-nunito font-bold text-lg transition-all duration-300 hover:bg-[#708AA3] hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Submit Application
                </button>
                <p className="font-nunito text-gray-400 text-sm text-center mt-4">
                  By submitting, you agree to be contacted regarding your application.
                </p>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
