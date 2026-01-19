"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl text-[#708AA3] mb-3">
            Contact the City Clerk
          </h1>
          <p className="font-nunito text-gray-500 text-sm">
            We&apos;re here to help with ordinances, public records, and city documentation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#708AA3]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#708AA3]" />
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-[#1e3a5f] mb-1">Office Location</h3>
                  <p className="font-nunito text-gray-600 text-sm">
                    100 Main Street<br />
                    Port Laken, CA 94000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#708AA3]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#708AA3]" />
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-[#1e3a5f] mb-1">Phone</h3>
                  <p className="font-nunito text-gray-600 text-sm">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#708AA3]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[#708AA3]" />
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-[#1e3a5f] mb-1">Email</h3>
                  <p className="font-nunito text-gray-600 text-sm">clerk@portlaken.gov</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#708AA3]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-[#708AA3]" />
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-[#1e3a5f] mb-1">Office Hours</h3>
                  <p className="font-nunito text-gray-600 text-sm">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Closed on weekends and holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-8"></div>

            {/* Services */}
            <div>
              <h3 className="font-nunito font-semibold text-[#1e3a5f] mb-4">How We Can Help</h3>
              <ul className="space-y-2 font-nunito text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#708AA3] rounded-full"></span>
                  Public records requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#708AA3] rounded-full"></span>
                  Ordinance and regulation inquiries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#708AA3] rounded-full"></span>
                  Meeting minutes and agendas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#708AA3] rounded-full"></span>
                  Business license information
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#708AA3] rounded-full"></span>
                  City Council proceedings
                </li>
              </ul>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <Link
              href="/ordinances"
              className="font-nunito text-[#708AA3] text-sm font-medium hover:underline"
            >
              ← Back to City Ordinances
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
