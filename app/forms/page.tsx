"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";

interface Form {
  id: number;
  title: string;
  category: string;
  email: string;
  phone: string;
  description?: string;
}

interface FeaturedForm {
  id: number;
  title: string;
  description: string;
  image: string;
  deadline?: string;
}

const featuredForms: FeaturedForm[] = [
  {
    id: 1,
    title: "New: 2025 Business License Renewal",
    description: "All local businesses are required to renew their licenses by January 31st, 2025.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    deadline: "January 31, 2025",
  },
  {
    id: 2,
    title: "Property Tax Assessment Appeal",
    description: "File an appeal for your 2025 property tax assessment. Deadline approaching.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    deadline: "March 15, 2025",
  },
  {
    id: 3,
    title: "Summer Recreation Program Registration",
    description: "Register your children for summer camps, swimming lessons, and sports programs.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
  },
];

const allForms: Form[] = [
  {
    id: 1,
    title: "Residential Building Permit Application",
    category: "Building & Zoning",
    email: "planning@portlaken.gov",
    phone: "(3) 123-4567",
  },
  {
    id: 2,
    title: "Special Event Permit Application",
    category: "City Clerk",
    email: "clerk@portlaken.gov",
    phone: "(360) 234-5678",
  },
  {
    id: 3,
    title: "Park Facility Reservation Form",
    category: "Parks & Recreation",
    email: "parks@portlaken.gov",
    phone: "(360) 345-6789",
  },
  {
    id: 4,
    title: "Business License Application",
    category: "Finance",
    email: "finance@portlaken.gov",
    phone: "(360) 456-7890",
  },
  {
    id: 5,
    title: "Zoning Variance Request",
    category: "Building & Zoning",
    email: "planning@portlaken.gov",
    phone: "(360) 123-4567",
  },
  {
    id: 6,
    title: "Water Service Connection Application",
    category: "Public Works",
    email: "utilities@portlaken.gov",
    phone: "(360) 567-8901",
  },
  {
    id: 7,
    title: "Street Closure Permit",
    category: "Public Works",
    email: "publicworks@portlaken.gov",
    phone: "(360) 567-8901",
  },
  {
    id: 8,
    title: "Dog License Application",
    category: "City Clerk",
    email: "clerk@portlaken.gov",
    phone: "(360) 234-5678",
  },
  {
    id: 9,
    title: "Garage Sale Permit",
    category: "City Clerk",
    email: "clerk@portlaken.gov",
    phone: "(360) 234-5678",
  },
  {
    id: 10,
    title: "Public Records Request",
    category: "City Clerk",
    email: "clerk@portlaken.gov",
    phone: "(360) 234-5678",
  },
  {
    id: 11,
    title: "Commercial Sign Permit",
    category: "Building & Zoning",
    email: "planning@portlaken.gov",
    phone: "(360) 123-4567",
  },
  {
    id: 12,
    title: "Sidewalk Cafe Permit",
    category: "City Clerk",
    email: "clerk@portlaken.gov",
    phone: "(360) 234-5678",
  },
];

const categories = [
  "All Categories",
  "Building & Zoning",
  "City Clerk",
  "Finance",
  "Parks & Recreation",
  "Public Works",
];

export default function FormsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredForms.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredForms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredForms.length) % featuredForms.length);
  };

  const filteredForms = allForms.filter((form) => {
    const matchesSearch =
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (formTitle: string) => {
    // Simulate download - in production, this would link to actual PDF files
    alert(`Downloading: ${formTitle}.pdf\n\nNote: This is a demo. In production, this would download the actual PDF form.`);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-3 italic">
            Forms & Applications
          </h1>
          <p className="text-port-slate">
            Find, download, and learn about all available city forms.
          </p>
        </div>
      </section>

      {/* Featured Form Carousel */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Carousel Navigation - Left */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-port-slate hover:text-port-navy hover:shadow-xl transition-all"
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>

            {/* Carousel Content */}
            <div className="bg-port-frost rounded-3xl overflow-hidden">
              <div className="relative">
                {featuredForms.map((form, index) => (
                  <div
                    key={form.id}
                    className={`transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    {/* Image area */}
                    <div className="relative aspect-[16/7] bg-port-mist">
                      <Image
                        src={form.image}
                        alt={form.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 text-center bg-port-navy">
                      <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                        {form.title}
                      </h2>
                      <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
                        {form.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          onClick={() => handleDownload(form.title)}
                          className="px-6 py-2.5 bg-port-sky hover:bg-port-sky/90 text-white rounded-lg font-medium transition-colors"
                        >
                          Download PDF
                        </button>
                        <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium border border-white/30 transition-colors">
                          More Info
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 pb-4 bg-port-navy">
                {featuredForms.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Navigation - Right */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-port-slate hover:text-port-navy hover:shadow-xl transition-all"
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* All Forms Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-port-navy mb-8 italic">
              All Forms
            </h2>
          </RevealOnScroll>

          {/* Search and Filter */}
          <RevealOnScroll className="delay-100">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Input */}
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-port-slate/50" />
                <input
                  type="text"
                  placeholder="Search by form name or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-port-frost border border-port-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors text-port-navy placeholder:text-port-slate/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-port-frost border border-port-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors text-port-navy min-w-[180px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </RevealOnScroll>

          {/* Forms List */}
          <div className="space-y-4">
            {filteredForms.map((form, index) => (
              <RevealOnScroll key={form.id} className={`delay-${Math.min(index * 50, 200)}`}>
                <div className="bg-port-frost p-5 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Form Info */}
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-port-navy mb-1 italic">
                      {form.title}
                    </h3>
                    <p className="text-sm text-port-slate">
                      Category: {form.category}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-6 text-sm text-port-slate">
                    <a
                      href={`mailto:${form.email}`}
                      className="flex items-center gap-2 hover:text-port-sky transition-colors"
                    >
                      <FaEnvelope className="text-port-sky" />
                      {form.email}
                    </a>
                    <a
                      href={`tel:${form.phone.replace(/[^0-9]/g, "")}`}
                      className="flex items-center gap-2 hover:text-port-sky transition-colors"
                    >
                      <FaPhone className="text-port-sky" />
                      {form.phone}
                    </a>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(form.title)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-port-sky hover:bg-port-sky/90 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
                  >
                    <FaDownload className="text-sm" />
                    Download Form
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Empty State */}
          {filteredForms.length === 0 && (
            <RevealOnScroll>
              <div className="bg-port-frost rounded-xl p-12 text-center">
                <FaSearch className="text-4xl text-port-slate/30 mx-auto mb-4" />
                <p className="text-port-slate">
                  No forms found. Please try adjusting your search or filters, or contact the City Clerk for assistance.
                </p>
              </div>
            </RevealOnScroll>
          )}

          {/* Results Count */}
          {filteredForms.length > 0 && (
            <p className="mt-6 text-sm text-port-slate text-center">
              Showing {filteredForms.length} of {allForms.length} forms
            </p>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-port-frost">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <h3 className="font-display text-xl font-bold text-port-navy mb-3">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="text-port-slate mb-6 max-w-lg mx-auto">
                Contact the City Clerk&apos;s office for assistance with forms, applications, or general inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:clerk@portlaken.gov"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
                >
                  <FaEnvelope />
                  Email City Clerk
                </a>
                <a
                  href="tel:5552345678"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-port-navy text-port-navy rounded-lg font-medium hover:bg-port-navy/5 transition-colors"
                >
                  <FaPhone />
                  (555) 234-5678
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
