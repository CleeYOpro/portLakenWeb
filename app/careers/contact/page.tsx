"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function ContactHRPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>
            <h1 className="font-display text-3xl font-bold text-port-navy mb-4">
              Message Sent!
            </h1>
            <p className="text-port-slate mb-8">
              Thank you for reaching out. Our Human Resources team will review your message and respond within 2-3 business days.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              Back to Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-port-mist to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-port-slate hover:text-port-navy transition-colors mb-6"
          >
            <FaArrowLeft className="text-sm" />
            Back to Careers
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
            Contact Human Resources
          </h1>
          <p className="text-port-slate text-lg max-w-2xl">
            Have questions about employment opportunities or need assistance with your application? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <RevealOnScroll>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-port-navy mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-port-frost rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-port-sky" />
                      </div>
                      <div>
                        <p className="text-sm text-port-slate">Email</p>
                        <a href="mailto:hr@portlaken.gov" className="text-port-navy font-medium hover:text-port-sky transition-colors">
                          hr@portlaken.gov
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-port-frost rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaPhone className="text-port-sky" />
                      </div>
                      <div>
                        <p className="text-sm text-port-slate">Phone</p>
                        <a href="tel:+15551234568" className="text-port-navy font-medium hover:text-port-sky transition-colors">
                          (555) 123-4568
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-port-frost rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-port-sky" />
                      </div>
                      <div>
                        <p className="text-sm text-port-slate">Address</p>
                        <p className="text-port-navy font-medium">
                          100 Main Street, Suite 200<br />
                          Port Laken, CA 94000
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-port-frost rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-port-sky" />
                      </div>
                      <div>
                        <p className="text-sm text-port-slate">Office Hours</p>
                        <p className="text-port-navy font-medium">
                          Mon - Fri: 8:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-port-frost rounded-2xl">
                  <h4 className="font-bold text-port-navy mb-3">Response Time</h4>
                  <p className="text-port-slate text-sm leading-relaxed">
                    We aim to respond to all inquiries within 2-3 business days. For urgent matters, please call our office directly during business hours.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Form */}
            <RevealOnScroll className="lg:col-span-2 delay-100">
              <div className="bg-port-frost p-8 rounded-2xl">
                <h3 className="font-bold text-port-navy mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-port-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-port-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-port-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-port-navy mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="application">Application Status</option>
                        <option value="positions">Open Positions</option>
                        <option value="benefits">Benefits Questions</option>
                        <option value="internship">Internship Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-port-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
