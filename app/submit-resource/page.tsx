"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

const categories = [
  { value: "", label: "Select a category..." },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "food", label: "Food & Nutrition" },
  { value: "housing", label: "Housing & Shelter" },
  { value: "education", label: "Education & Training" },
  { value: "employment", label: "Employment Services" },
  { value: "family", label: "Family & Children" },
  { value: "seniors", label: "Senior Services" },
  { value: "legal", label: "Legal Aid" },
  { value: "mental-health", label: "Mental Health & Counseling" },
  { value: "disability", label: "Disability Services" },
  { value: "emergency", label: "Emergency Services" },
  { value: "community", label: "Community Programs" },
  { value: "recreation", label: "Recreation & Arts" },
  { value: "transportation", label: "Transportation" },
  { value: "other", label: "Other" },
];

const guidelines = [
  "Resource must be available to Port Laken residents",
  "Non-profit organizations are prioritized",
  "Contact information must be accurate and current",
  "Resources promoting discrimination will not be accepted",
  "Submissions are reviewed within 5-7 business days",
];

interface FormData {
  // Resource Information
  resourceName: string;
  category: string;
  description: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  operatingHours: string;
  servicesOffered: string;
  eligibility: string;
  // Submitter Information
  submitterName: string;
  submitterEmail: string;
  submitterPhone: string;
  submitterRelation: string;
  additionalNotes: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function SubmitResourcePage() {
  const [formData, setFormData] = useState<FormData>({
    resourceName: "",
    category: "",
    description: "",
    address: "",
    city: "Port Laken",
    zipCode: "",
    phone: "",
    email: "",
    website: "",
    operatingHours: "",
    servicesOffered: "",
    eligibility: "",
    submitterName: "",
    submitterEmail: "",
    submitterPhone: "",
    submitterRelation: "",
    additionalNotes: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeSection, setActiveSection] = useState<number>(1);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    if (!formData.resourceName.trim()) {
      newErrors.resourceName = "Resource name is required";
    }
    if (!formData.category) {
      newErrors.category = "Please select a category";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 50) {
      newErrors.description = "Description must be at least 50 characters";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid ZIP code";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Website must start with http:// or https://";
    }
    if (!formData.submitterName.trim()) {
      newErrors.submitterName = "Your name is required";
    }
    if (!formData.submitterEmail.trim()) {
      newErrors.submitterEmail = "Your email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.submitterEmail)) {
      newErrors.submitterEmail = "Please enter a valid email address";
    }
    if (!formData.submitterRelation) {
      newErrors.submitterRelation = "Please select your relation to this resource";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the submission guidelines";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector(".error-field");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, you would send the data to your backend here
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      // Reset form
      setFormData({
        resourceName: "",
        category: "",
        description: "",
        address: "",
        city: "Port Laken",
        zipCode: "",
        phone: "",
        email: "",
        website: "",
        operatingHours: "",
        servicesOffered: "",
        eligibility: "",
        submitterName: "",
        submitterEmail: "",
        submitterPhone: "",
        submitterRelation: "",
        additionalNotes: "",
        agreeToTerms: false,
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      resourceName: "",
      category: "",
      description: "",
      address: "",
      city: "Port Laken",
      zipCode: "",
      phone: "",
      email: "",
      website: "",
      operatingHours: "",
      servicesOffered: "",
      eligibility: "",
      submitterName: "",
      submitterEmail: "",
      submitterPhone: "",
      submitterRelation: "",
      additionalNotes: "",
      agreeToTerms: false,
    });
    setErrors({});
    setSubmitStatus("idle");
  };

  // Success State
  if (submitStatus === "success") {
    return (
      <>
        <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-port-mist to-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-4xl text-green-500" />
                </div>
                <h1 className="font-display text-3xl font-bold text-port-navy mb-4">
                  Submission Received!
                </h1>
                <p className="text-port-slate text-lg mb-8">
                  Thank you for submitting a resource to the Port Laken Community Hub.
                  Our team will review your submission and get back to you within 5-7
                  business days.
                </p>
                <div className="bg-port-frost rounded-xl p-6 mb-8 text-left">
                  <h3 className="font-semibold text-port-navy mb-3">What happens next?</h3>
                  <ul className="space-y-2 text-port-slate text-sm">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Our team will verify the resource information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>We may contact you for additional details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Once approved, the resource will appear in our directory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>You&apos;ll receive a confirmation email</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-port-navy text-white rounded-xl font-semibold hover:bg-port-navy/90 transition-colors"
                  >
                    Submit Another Resource
                  </button>
                  <Link
                    href="/resource-directory"
                    className="px-6 py-3 bg-port-frost text-port-navy rounded-xl font-semibold hover:bg-port-mist transition-colors"
                  >
                    View Resource Directory
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
      <section className="pt-32 pb-12 bg-gradient-to-b from-port-mist to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <Link
              href="/community-hub"
              className="inline-flex items-center gap-2 text-port-slate hover:text-port-navy mb-6 transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              Back to Community Hub
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
              Submit a Resource
            </h1>
            <p className="text-port-slate text-lg max-w-2xl">
              Help us grow our community resource directory by suggesting organizations,
              services, or programs that benefit Port Laken residents.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <RevealOnScroll>
                <div className="sticky top-28">
                  {/* Progress Indicator */}
                  <div className="bg-port-frost rounded-2xl p-6 mb-6">
                    <h3 className="font-semibold text-port-navy mb-4">Form Progress</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setActiveSection(1)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                          activeSection === 1
                            ? "bg-port-navy text-white"
                            : "bg-white text-port-navy hover:bg-port-mist"
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                          1
                        </span>
                        <span className="text-sm font-medium">Resource Information</span>
                      </button>
                      <button
                        onClick={() => setActiveSection(2)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                          activeSection === 2
                            ? "bg-port-navy text-white"
                            : "bg-white text-port-navy hover:bg-port-mist"
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                          2
                        </span>
                        <span className="text-sm font-medium">Contact Details</span>
                      </button>
                      <button
                        onClick={() => setActiveSection(3)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${
                          activeSection === 3
                            ? "bg-port-navy text-white"
                            : "bg-white text-port-navy hover:bg-port-mist"
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                          3
                        </span>
                        <span className="text-sm font-medium">Your Information</span>
                      </button>
                    </div>
                  </div>

                  {/* Guidelines */}
                  <div className="bg-white border border-port-mist rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FaInfoCircle className="text-port-sky" />
                      <h3 className="font-semibold text-port-navy">Submission Guidelines</h3>
                    </div>
                    <ul className="space-y-3">
                      {guidelines.map((guideline, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-port-slate">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <RevealOnScroll className="delay-100">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Error Alert */}
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <FaExclamationCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800">Submission Failed</p>
                        <p className="text-sm text-red-600">
                          There was an error submitting your resource. Please try again.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Section 1: Resource Information */}
                  <div
                    id="section-1"
                    className={`bg-port-frost rounded-2xl p-6 md:p-8 ${
                      activeSection !== 1 ? "opacity-60" : ""
                    }`}
                    onClick={() => setActiveSection(1)}
                  >
                    <h2 className="font-display text-xl font-bold text-port-navy mb-6 flex items-center gap-3">
                      <FaBuilding className="text-port-sky" />
                      Resource Information
                    </h2>

                    <div className="space-y-5">
                      {/* Resource Name */}
                      <div className={errors.resourceName ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Resource Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="resourceName"
                          value={formData.resourceName}
                          onChange={handleChange}
                          placeholder="e.g., Port Laken Community Food Bank"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.resourceName
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.resourceName && (
                          <p className="mt-1 text-sm text-red-500">{errors.resourceName}</p>
                        )}
                      </div>

                      {/* Category */}
                      <div className={errors.category ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.category
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        >
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <p className="mt-1 text-sm text-red-500">{errors.category}</p>
                        )}
                      </div>

                      {/* Description */}
                      <div className={errors.description ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Provide a detailed description of the resource and services offered..."
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.description
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors resize-none`}
                        />
                        <div className="flex justify-between mt-1">
                          {errors.description ? (
                            <p className="text-sm text-red-500">{errors.description}</p>
                          ) : (
                            <span className="text-xs text-port-slate">
                              Minimum 50 characters
                            </span>
                          )}
                          <span className="text-xs text-port-slate">
                            {formData.description.length} characters
                          </span>
                        </div>
                      </div>

                      {/* Services Offered */}
                      <div>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Services Offered
                        </label>
                        <textarea
                          name="servicesOffered"
                          value={formData.servicesOffered}
                          onChange={handleChange}
                          rows={3}
                          placeholder="List the main services or programs offered..."
                          className="w-full px-4 py-3 rounded-xl border border-port-mist bg-white focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Eligibility */}
                      <div>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Eligibility Requirements
                        </label>
                        <input
                          type="text"
                          name="eligibility"
                          value={formData.eligibility}
                          onChange={handleChange}
                          placeholder="e.g., Open to all residents, Income-based, Seniors 60+"
                          className="w-full px-4 py-3 rounded-xl border border-port-mist bg-white focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Contact Details */}
                  <div
                    id="section-2"
                    className={`bg-white border border-port-mist rounded-2xl p-6 md:p-8 ${
                      activeSection !== 2 ? "opacity-60" : ""
                    }`}
                    onClick={() => setActiveSection(2)}
                  >
                    <h2 className="font-display text-xl font-bold text-port-navy mb-6 flex items-center gap-3">
                      <FaMapMarkerAlt className="text-port-sky" />
                      Location & Contact
                    </h2>

                    <div className="space-y-5">
                      {/* Address */}
                      <div className={errors.address ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Street Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main Street"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.address
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.address && (
                          <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                        )}
                      </div>

                      {/* City & ZIP */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-port-navy mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-port-mist bg-port-frost focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors"
                            readOnly
                          />
                        </div>
                        <div className={errors.zipCode ? "error-field" : ""}>
                          <label className="block text-sm font-medium text-port-navy mb-2">
                            ZIP Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="12345"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.zipCode
                                ? "border-red-500 bg-red-50"
                                : "border-port-mist bg-white"
                            } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                          />
                          {errors.zipCode && (
                            <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className={errors.phone ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          <FaPhone className="inline mr-2 text-port-slate" />
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.phone
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className={errors.email ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          <FaEnvelope className="inline mr-2 text-port-slate" />
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@organization.org"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      {/* Website */}
                      <div className={errors.website ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          <FaGlobe className="inline mr-2 text-port-slate" />
                          Website (optional)
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://www.example.org"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.website
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.website && (
                          <p className="mt-1 text-sm text-red-500">{errors.website}</p>
                        )}
                      </div>

                      {/* Operating Hours */}
                      <div>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          <FaClock className="inline mr-2 text-port-slate" />
                          Operating Hours
                        </label>
                        <input
                          type="text"
                          name="operatingHours"
                          value={formData.operatingHours}
                          onChange={handleChange}
                          placeholder="e.g., Mon-Fri 9am-5pm, Sat 10am-2pm"
                          className="w-full px-4 py-3 rounded-xl border border-port-mist bg-white focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Submitter Information */}
                  <div
                    id="section-3"
                    className={`bg-port-frost rounded-2xl p-6 md:p-8 ${
                      activeSection !== 3 ? "opacity-60" : ""
                    }`}
                    onClick={() => setActiveSection(3)}
                  >
                    <h2 className="font-display text-xl font-bold text-port-navy mb-6 flex items-center gap-3">
                      <FaUser className="text-port-sky" />
                      Your Information
                    </h2>

                    <div className="space-y-5">
                      {/* Submitter Name */}
                      <div className={errors.submitterName ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="submitterName"
                          value={formData.submitterName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.submitterName
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.submitterName && (
                          <p className="mt-1 text-sm text-red-500">{errors.submitterName}</p>
                        )}
                      </div>

                      {/* Submitter Email */}
                      <div className={errors.submitterEmail ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="submitterEmail"
                          value={formData.submitterEmail}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.submitterEmail
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        />
                        {errors.submitterEmail && (
                          <p className="mt-1 text-sm text-red-500">{errors.submitterEmail}</p>
                        )}
                      </div>

                      {/* Submitter Phone */}
                      <div>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Your Phone (optional)
                        </label>
                        <input
                          type="tel"
                          name="submitterPhone"
                          value={formData.submitterPhone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 rounded-xl border border-port-mist bg-white focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors"
                        />
                      </div>

                      {/* Relation */}
                      <div className={errors.submitterRelation ? "error-field" : ""}>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Your Relation to Resource <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="submitterRelation"
                          value={formData.submitterRelation}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.submitterRelation
                              ? "border-red-500 bg-red-50"
                              : "border-port-mist bg-white"
                          } focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors`}
                        >
                          <option value="">Select your relation...</option>
                          <option value="employee">Employee/Staff Member</option>
                          <option value="volunteer">Volunteer</option>
                          <option value="beneficiary">Service Beneficiary</option>
                          <option value="community">Community Member</option>
                          <option value="government">Government Representative</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.submitterRelation && (
                          <p className="mt-1 text-sm text-red-500">{errors.submitterRelation}</p>
                        )}
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-sm font-medium text-port-navy mb-2">
                          Additional Notes (optional)
                        </label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Any other information you'd like to share..."
                          className="w-full px-4 py-3 rounded-xl border border-port-mist bg-white focus:border-port-sky focus:ring-2 focus:ring-port-sky/20 outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Agreement Checkbox */}
                      <div className={errors.agreeToTerms ? "error-field" : ""}>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 rounded border-port-mist text-port-sky focus:ring-port-sky"
                          />
                          <span className="text-sm text-port-slate">
                            I confirm that the information provided is accurate and I agree
                            to the{" "}
                            <Link href="/terms" className="text-port-sky hover:underline">
                              submission guidelines
                            </Link>
                            . I understand that submissions are subject to review before
                            being published. <span className="text-red-500">*</span>
                          </span>
                        </label>
                        {errors.agreeToTerms && (
                          <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-port-frost text-port-navy rounded-xl font-semibold hover:bg-port-mist transition-colors"
                    >
                      Clear Form
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-port-navy text-white rounded-xl font-semibold hover:bg-port-sky transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Submit Resource
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
