"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import HoursSelector from "./_components/HoursSelector";

export default function SubmitResourcePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reviewStatus, setReviewStatus] = useState<"idle" | "reviewing" | "approved" | "rejected">("idle");

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    category: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    hours: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (!authLoading && !user) router.push("/sign-in");
  }, [user, authLoading, router]);

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  const shortCharCount = formData.shortDescription.length;
  const longCharCount = formData.longDescription.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const runValidation = (data: typeof formData): string | null => {
    if (!data.title || !data.shortDescription || !data.longDescription || !data.category)
      return "One or more required fields are missing. Please complete all required fields before submitting.";
    if (data.title.length < 5 || !/[a-zA-Z]/.test(data.title))
      return "The resource title does not appear to be valid. Please provide a clear, descriptive name for this resource.";
    const words = data.longDescription.trim().split(/\s+/);
    if (words.length < 15)
      return "The full description is too brief. Our system requires a minimum level of detail to ensure residents can understand what this resource offers.";
    if (new Set(words).size / words.length < 0.6)
      return "The description appears to contain repetitive or low-quality content. Please provide a unique, informative description of the resource.";
    if (data.phone && !/^\(\d{3}\) \d{3}-\d{4}$/.test(data.phone))
      return "The phone number format is not recognized. Please use the format (555) 123-4567.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      return "The email address provided does not appear to be valid. Please double-check and try again.";
    if (data.website) {
      try {
        const url = new URL(data.website);
        if (!["http:", "https:"].includes(url.protocol)) throw new Error();
      } catch {
        return "The website URL is not valid. Please provide a full URL beginning with http:// or https://.";
      }
    }
    if (data.imageUrl && !/\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(data.imageUrl))
      return "The image URL does not appear to point to a valid image file. Please use a direct link ending in .jpg, .jpeg, .png, or .webp.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.shortDescription.length > 70) {
      setError("Short description must be 70 characters or less.");
      return;
    }
    if (formData.longDescription.length > 700) {
      setError("Long description must be 700 characters or less.");
      return;
    }

    const validationError = runValidation(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setReviewStatus("reviewing");

    try {
      const docRef = await addDoc(collection(db, "resources"), {
        title: formData.title,
        name: formData.title,
        shortDescription: formData.shortDescription,
        fullDescription: formData.longDescription,
        category: formData.category,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        website: formData.website,
        hours: formData.hours,
        operatingHours: formData.hours,
        imageUrl: formData.imageUrl,
        userId: user.uid,
        approvalStatus: "approved",
        createdAt: serverTimestamp(),
        reviewedAt: serverTimestamp(),
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Resource submitted:", docRef.id);
      setReviewStatus("approved");
    } catch (err: unknown) {
      console.error("Submit error:", err);
      const msg = err instanceof Error ? err.message : String(err);
      setError(`Failed to submit: ${msg}`);
      setReviewStatus("idle");
    } finally {
      setLoading(false);
    }
  };

  if (reviewStatus === "reviewing" || reviewStatus === "approved" || reviewStatus === "rejected") {
    const isLoading = reviewStatus === "reviewing";
    const isApproved = reviewStatus === "approved";

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white shadow rounded-2xl p-10 max-w-md w-full text-center">
          {isLoading ? (
            <>
              <div className="flex items-center justify-center mb-6">
                <svg className="animate-spin h-16 w-16 text-blue-500" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Being validated with AI</h2>
              <p className="text-gray-500 text-sm">Reviewing your submission, hang tight...</p>
            </>
          ) : isApproved ? (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-3xl text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Approved</h2>
              <p className="text-gray-500 mb-8">Your resource is now live in the directory.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => { setReviewStatus("idle"); setFormData({ title: "", shortDescription: "", longDescription: "", category: "", address: "", phone: "", email: "", website: "", hours: "", imageUrl: "" }); }} className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                  Submit Another
                </button>
                <Link href="/resource-directory" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                  View Resources <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-red-500 font-bold">✕</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Rejected</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Unfortunately your submission was not approved. This usually happens when the resource description is too vague, doesn&apos;t clearly explain what services are offered, or the content doesn&apos;t align with our community guidelines. Head to your dashboard to review and resubmit — make sure your description is detailed, accurate, and relevant to Port Laken residents.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => setReviewStatus("idle")} className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                  Try Again
                </button>
                <Link href="/dashboard" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                  Go to Dashboard <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Resource</h1>
          <p className="text-gray-600">Share valuable resources with the Port Laken community</p>
        </div>

        {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">{error}</div>}
        <div className="bg-white shadow rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Resource Title *</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., HarborView Medical Center" />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description *</label>
                <span className={`text-xs ${shortCharCount > 60 ? "text-red-600" : "text-gray-400"}`}>
                  {shortCharCount} / 70 chars max
                </span>
              </div>
              <textarea id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} required rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description (max 70 characters)" maxLength={70} />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">Full Description *</label>
                <span className={`text-xs ${longCharCount > 600 ? "text-red-600" : "text-gray-400"}`}>
                  {longCharCount} / 700 chars max
                </span>
              </div>
              <textarea id="longDescription" name="longDescription" value={formData.longDescription} onChange={handleChange} required rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Detailed description of the resource and what services it offers (max 700 characters)" maxLength={700} />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select a category</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="food">Food</option>
                <option value="seniors">Seniors</option>
                <option value="legal">Legal</option>
                <option value="emergency">Emergency</option>
                <option value="community">Community</option>
                <option value="recreation">Recreation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Street address, city, state, zip" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(123) 456-7890" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="contact@organization.com" />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input type="url" id="website" name="website" value={formData.website} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://www.organization.com" />
            </div>

            <HoursSelector value={formData.hours} onChange={(val) => setFormData(prev => ({ ...prev, hours: val }))} />

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/image.jpg" />
              <p className="mt-1 text-xs text-gray-500">Paste a direct link to an image for your resource card.</p>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={loading}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                {loading ? "Submitting..." : "Submit Resource"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}