"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaBuilding,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const categories = [
  { value: "", label: "Select a category" },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "food", label: "Food & Nutrition" },
  { value: "housing", label: "Housing & Shelter" },
  { value: "education", label: "Education & Training" },
  { value: "employment", label: "Employment Services" },
  { value: "family", label: "Family & Children" },
  { value: "seniors", label: "Senior Services" },
  { value: "legal", label: "Legal Aid" },
  { value: "mental-health", label: "Mental Health" },
  { value: "disability", label: "Disability Services" },
  { value: "emergency", label: "Emergency Services" },
  { value: "community", label: "Community Programs" },
  { value: "recreation", label: "Recreation & Arts" },
  { value: "transportation", label: "Transportation" },
  { value: "other", label: "Other" },
];

const topics = [
  { value: "", label: "Select topic" },
  { value: "support", label: "Support Services" },
  { value: "assistance", label: "Financial Assistance" },
  { value: "counseling", label: "Counseling" },
  { value: "education", label: "Education" },
  { value: "outreach", label: "Outreach Programs" },
  { value: "advocacy", label: "Advocacy" },
  { value: "other", label: "Other" },
];

interface FormData {
  resourceTitle: string;
  category: string;
  topic: string;
  tags: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  operatingHours: string;
  submitterName: string;
  submitterEmail: string;
  submitterRelation: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function SubmitResourcePage() {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    resourceTitle: "",
    category: "",
    topic: "",
    tags: "",
    description: "",
    address: "",
    city: "Port Laken",
    state: "CA",
    zipCode: "",
    phone: "",
    email: "",
    website: "",
    operatingHours: "",
    submitterName: "",
    submitterEmail: "",
    submitterRelation: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const totalSteps = 3;

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.resourceTitle.trim()) {
        newErrors.resourceTitle = "Resource title is required";
      }
      if (!formData.category) {
        newErrors.category = "Please select a category";
      }
      if (!formData.description.trim()) {
        newErrors.description = "Description is required";
      } else if (formData.description.length < 50) {
        newErrors.description = "Description must be at least 50 characters";
      }
    }

    if (step === 2) {
      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = "ZIP code is required";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    if (step === 3) {
      if (!formData.submitterName.trim()) {
        newErrors.submitterName = "Your name is required";
      }
      if (!formData.submitterEmail.trim()) {
        newErrors.submitterEmail = "Your email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.submitterEmail)) {
        newErrors.submitterEmail = "Please enter a valid email";
      }
      if (!formData.submitterRelation) {
        newErrors.submitterRelation = "Please select your relation";
      }
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "You must agree to the guidelines";
      }
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

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "resources"), {
        ...formData,
        userId: user ? user.uid : null,
        createdAt: serverTimestamp(),
        status: "pending",
        approvedAt: null,
        approvedBy: null
      });
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error saving resource: ", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      resourceTitle: "",
      category: "",
      topic: "",
      tags: "",
      description: "",
      address: "",
      city: "Port Laken",
      state: "CA",
      zipCode: "",
      phone: "",
      email: "",
      website: "",
      operatingHours: "",
      submitterName: "",
      submitterEmail: "",
      submitterRelation: "",
      agreeToTerms: false,
    });
    setErrors({});
    setCurrentStep(1);
    setSubmitStatus("idle");
  };

  // Success State
  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-port-navy relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-port-sky/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-port-sky/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 text-center border border-white/20 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30">
                <FaCheck className="text-4xl text-white" />
              </div>
              <h1 className="font-display text-4xl font-bold text-white mb-4">
                Submission Received!
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                Thank you for contributing to the Port Laken Community Hub.
                We&apos;ll review your submission within 5-7 business days.
              </p>

              <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left border border-white/10">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <HiSparkles className="text-port-sky" />
                  What happens next?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Our team will verify the resource information",
                    "We may contact you for additional details",
                    "Once approved, it will appear in our directory",
                    "You'll receive a confirmation email",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-port-sky text-white rounded-xl font-semibold hover:bg-port-sky/80 transition-all hover:scale-105"
                >
                  Submit Another
                </button>
                <Link
                  href="/resource-directory"
                  className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  View Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-port-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-port-sky/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-port-sky/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <button
              onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
              className={`text-white/50 hover:text-white transition-colors ${currentStep === 1 ? 'invisible' : ''}`}
            >
              <FaArrowLeft />
            </button>
            <span className="text-white/70 text-sm font-medium tracking-wide">
              Step {currentStep} of {totalSteps}
            </span>
            <button
              onClick={() => currentStep < totalSteps && validateStep(currentStep) && setCurrentStep(currentStep + 1)}
              className={`text-white/50 hover:text-white transition-colors ${currentStep === totalSteps ? 'invisible' : ''}`}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center gap-2 mb-12 animate-fade-in">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step === currentStep
                    ? "w-12 bg-port-sky"
                    : step < currentStep
                    ? "w-8 bg-port-sky/60"
                    : "w-8 bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Step Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {currentStep === 1 && "Resource Information"}
              {currentStep === 2 && "Location & Contact"}
              {currentStep === 3 && "Your Information"}
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              {currentStep === 1 && "This information will appear when a user clicks on your resource."}
              {currentStep === 2 && "Help residents find and contact this resource."}
              {currentStep === 3 && "Tell us about yourself so we can follow up if needed."}
            </p>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white/[0.07] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl animate-slide-up">

              {/* Step 1: Resource Information */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-port-sky/20 rounded-lg flex items-center justify-center">
                        <FaBuilding className="text-port-sky text-sm" />
                      </div>
                      Basic Information
                    </h2>

                    {/* Resource Title */}
                    <div className="mb-6">
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Resource Title <span className="text-port-sky">*</span>
                      </label>
                      <input
                        type="text"
                        name="resourceTitle"
                        value={formData.resourceTitle}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("resourceTitle")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter the resource title"
                        className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all duration-300 ${
                          errors.resourceTitle
                            ? "border-red-500/50 bg-red-500/10"
                            : focusedField === "resourceTitle"
                            ? "border-port-sky bg-white/[0.12] shadow-lg shadow-port-sky/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {errors.resourceTitle && (
                        <p className="mt-2 text-red-400 text-sm">{errors.resourceTitle}</p>
                      )}
                    </div>

                    {/* Category, Topic, Tags Row */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Category <span className="text-port-sky">*</span>
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white outline-none transition-all duration-300 appearance-none cursor-pointer ${
                            errors.category
                              ? "border-red-500/50"
                              : "border-white/10 hover:border-white/20 focus:border-port-sky"
                          }`}
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                        >
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value} className="bg-port-navy">
                              {cat.label}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <p className="mt-2 text-red-400 text-sm">{errors.category}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Topic
                        </label>
                        <select
                          name="topic"
                          value={formData.topic}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/[0.08] border border-white/10 rounded-2xl text-white outline-none transition-all hover:border-white/20 focus:border-port-sky appearance-none cursor-pointer"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                        >
                          {topics.map((t) => (
                            <option key={t.value} value={t.value} className="bg-port-navy">
                              {t.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Tags
                        </label>
                        <input
                          type="text"
                          name="tags"
                          value={formData.tags}
                          onChange={handleChange}
                          placeholder="Free, Accessible, etc."
                          className="w-full px-5 py-4 bg-white/[0.08] border border-white/10 rounded-2xl text-white placeholder-white/40 outline-none transition-all hover:border-white/20 focus:border-port-sky"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Description <span className="text-port-sky">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("description")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        placeholder="Provide a detailed description of the resource..."
                        className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all duration-300 resize-none ${
                          errors.description
                            ? "border-red-500/50 bg-red-500/10"
                            : focusedField === "description"
                            ? "border-port-sky bg-white/[0.12]"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      <div className="flex justify-between mt-2">
                        {errors.description ? (
                          <p className="text-red-400 text-sm">{errors.description}</p>
                        ) : (
                          <span className="text-white/40 text-sm">Minimum 50 characters</span>
                        )}
                        <span className={`text-sm ${formData.description.length >= 50 ? 'text-green-400' : 'text-white/40'}`}>
                          {formData.description.length}/50
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location & Contact */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-port-sky/20 rounded-lg flex items-center justify-center">
                        <FaMapMarkerAlt className="text-port-sky text-sm" />
                      </div>
                      Location Details
                    </h2>

                    {/* Address */}
                    <div className="mb-6">
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Street Address <span className="text-port-sky">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street"
                        className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all ${
                          errors.address
                            ? "border-red-500/50"
                            : "border-white/10 hover:border-white/20 focus:border-port-sky"
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-2 text-red-400 text-sm">{errors.address}</p>
                      )}
                    </div>

                    {/* City, State, ZIP */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          readOnly
                          className="w-full px-5 py-4 bg-white/[0.04] border border-white/5 rounded-2xl text-white/60 outline-none cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          readOnly
                          className="w-full px-5 py-4 bg-white/[0.04] border border-white/5 rounded-2xl text-white/60 outline-none cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          ZIP Code <span className="text-port-sky">*</span>
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="12345"
                          className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all ${
                            errors.zipCode
                              ? "border-red-500/50"
                              : "border-white/10 hover:border-white/20 focus:border-port-sky"
                          }`}
                        />
                        {errors.zipCode && (
                          <p className="mt-2 text-red-400 text-sm">{errors.zipCode}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Phone <span className="text-port-sky">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all ${
                            errors.phone
                              ? "border-red-500/50"
                              : "border-white/10 hover:border-white/20 focus:border-port-sky"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-2 text-red-400 text-sm">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Email <span className="text-port-sky">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@resource.org"
                          className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all ${
                            errors.email
                              ? "border-red-500/50"
                              : "border-white/10 hover:border-white/20 focus:border-port-sky"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://www.example.org"
                          className="w-full px-5 py-4 bg-white/[0.08] border border-white/10 rounded-2xl text-white placeholder-white/40 outline-none transition-all hover:border-white/20 focus:border-port-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Operating Hours
                        </label>
                        <input
                          type="text"
                          name="operatingHours"
                          value={formData.operatingHours}
                          onChange={handleChange}
                          placeholder="Mon-Fri 9am-5pm"
                          className="w-full px-5 py-4 bg-white/[0.08] border border-white/10 rounded-2xl text-white placeholder-white/40 outline-none transition-all hover:border-white/20 focus:border-port-sky"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Your Information */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-port-sky/20 rounded-lg flex items-center justify-center">
                        <FaUser className="text-port-sky text-sm" />
                      </div>
                      About You
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Your Name <span className="text-port-sky">*</span>
                        </label>
                        <input
                          type="text"
                          name="submitterName"
                          value={formData.submitterName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all ${
                            errors.submitterName
                              ? "border-red-500/50"
                              : "border-white/10 hover:border-white/20 focus:border-port-sky"
                          }`}
                        />
                        {errors.submitterName && (
                          <p className="mt-2 text-red-400 text-sm">{errors.submitterName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Your Email <span className="text-port-sky">*</span>
                        </label>
                        <input
                          type="email"
                          name="submitterEmail"
                          value={formData.submitterEmail}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white placeholder-white/40 outline-none transition-all ${
                            errors.submitterEmail
                              ? "border-red-500/50"
                              : "border-white/10 hover:border-white/20 focus:border-port-sky"
                          }`}
                        />
                        {errors.submitterEmail && (
                          <p className="mt-2 text-red-400 text-sm">{errors.submitterEmail}</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Your Relation to Resource <span className="text-port-sky">*</span>
                      </label>
                      <select
                        name="submitterRelation"
                        value={formData.submitterRelation}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-white/[0.08] border rounded-2xl text-white outline-none transition-all appearance-none cursor-pointer ${
                          errors.submitterRelation
                            ? "border-red-500/50"
                            : "border-white/10 hover:border-white/20 focus:border-port-sky"
                        }`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                      >
                        <option value="" className="bg-port-navy">Select your relation...</option>
                        <option value="employee" className="bg-port-navy">Employee/Staff Member</option>
                        <option value="volunteer" className="bg-port-navy">Volunteer</option>
                        <option value="beneficiary" className="bg-port-navy">Service Beneficiary</option>
                        <option value="community" className="bg-port-navy">Community Member</option>
                        <option value="government" className="bg-port-navy">Government Representative</option>
                        <option value="other" className="bg-port-navy">Other</option>
                      </select>
                      {errors.submitterRelation && (
                        <p className="mt-2 text-red-400 text-sm">{errors.submitterRelation}</p>
                      )}
                    </div>

                    {/* Agreement */}
                    <div className={`p-5 rounded-2xl border transition-all ${errors.agreeToTerms ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 bg-white/[0.03]'}`}>
                      <label className="flex items-start gap-4 cursor-pointer">
                        <div className="relative mt-0.5">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className="w-6 h-6 border-2 border-white/30 rounded-lg peer-checked:border-port-sky peer-checked:bg-port-sky transition-all flex items-center justify-center">
                            {formData.agreeToTerms && <FaCheck className="text-white text-xs" />}
                          </div>
                        </div>
                        <span className="text-white/70 text-sm leading-relaxed">
                          I confirm that the information provided is accurate and I agree to the{" "}
                          <Link href="/terms" className="text-port-sky hover:underline">
                            submission guidelines
                          </Link>
                          . I understand that submissions are reviewed before publishing.
                        </span>
                      </label>
                      {errors.agreeToTerms && (
                        <p className="mt-3 text-red-400 text-sm">{errors.agreeToTerms}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/10">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white transition-colors"
                  >
                    <FaArrowLeft className="text-sm" />
                    Back
                  </button>
                ) : (
                  <Link
                    href="/community-hub"
                    className="flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white transition-colors"
                  >
                    <FaArrowLeft className="text-sm" />
                    Cancel
                  </Link>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 px-8 py-4 bg-port-sky text-white rounded-2xl font-semibold hover:bg-port-sky/80 transition-all hover:scale-105 hover:shadow-lg hover:shadow-port-sky/20"
                  >
                    Continue
                    <FaArrowRight className="text-sm" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-port-sky to-blue-500 text-white rounded-2xl font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-port-sky/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
                )}
              </div>
            </div>
          </form>

          {/* Step indicators at bottom */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { step: 1, icon: FaBuilding, label: "Resource Info" },
              { step: 2, icon: FaMapMarkerAlt, label: "Location" },
              { step: 3, icon: FaUser, label: "Your Info" },
            ].map(({ step, icon: Icon, label }) => (
              <button
                key={step}
                onClick={() => step < currentStep && setCurrentStep(step)}
                className={`flex flex-col items-center gap-2 transition-all ${
                  step <= currentStep ? "opacity-100" : "opacity-40"
                } ${step < currentStep ? "cursor-pointer hover:opacity-80" : "cursor-default"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    step === currentStep
                      ? "bg-port-sky text-white scale-110"
                      : step < currentStep
                      ? "bg-port-sky/30 text-port-sky"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {step < currentStep ? (
                    <FaCheck className="text-lg" />
                  ) : (
                    <Icon className="text-lg" />
                  )}
                </div>
                <span className={`text-xs font-medium ${step === currentStep ? "text-white" : "text-white/50"}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
      `}</style>
    </div>
  );
}
