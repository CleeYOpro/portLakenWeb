"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useRouter, useParams } from "next/navigation";
import { validateResource } from "@/lib/validateResource";
import HoursSelector from "@/app/resource-directory/submit/_components/HoursSelector";

export default function EditResourcePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "", description: "", category: "",
    address: "", phone: "", email: "",
    website: "", hours: "", imageUrl: "",
  });

  useEffect(() => {
    if (!authLoading && !user) router.push("/sign-in");
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!id || !user) return;
    async function fetchResource() {
      try {
        const snap = await getDoc(doc(db, "resources", id));
        if (!snap.exists()) { router.push("/dashboard"); return; }
        const d = snap.data();
        if (d.userId !== user!.uid) { router.push("/dashboard"); return; }
        setFormData({
          title: d.title ?? d.name ?? "",
          description: d.description ?? d.shortDescription ?? "",
          category: d.category ?? "",
          address: d.address ?? "",
          phone: d.phone ?? "",
          email: d.email ?? "",
          website: d.website ?? "",
          hours: d.hours ?? d.operatingHours ?? "",
          imageUrl: d.imageUrl ?? "",
        });
      } catch (err) {
        console.error(err);
        setError("Failed to load resource.");
      } finally {
        setFetching(false);
      }
    }
    fetchResource();
  }, [id, user, router]);

  const wordCount = formData.description.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validation = validateResource(formData);
    if (!validation.approved) {
      setError(validation.reason);
      return;
    }

    setLoading(true);
    try {
      await updateDoc(doc(db, "resources", id), {
        title: formData.title,
        name: formData.title,
        description: formData.description,
        shortDescription: formData.description,
        fullDescription: formData.description,
        category: formData.category,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        website: formData.website,
        hours: formData.hours,
        operatingHours: formData.hours,
        imageUrl: formData.imageUrl,
        status: "approved",
        approvalStatus: "approved",
        updatedAt: serverTimestamp(),
        reviewedAt: serverTimestamp(),
      });
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Failed to update resource. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Resource</h1>
          <p className="text-gray-600">Update your submission — changes go live immediately if they pass validation.</p>
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
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description *</label>
                <span className={`text-xs ${wordCount >= 30 ? "text-green-600" : "text-gray-400"}`}>
                  {wordCount} / 30 words min
                </span>
              </div>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the resource and what services it offers..." />
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

            <div className="pt-4 flex gap-3">
              <button type="button" onClick={() => router.push("/dashboard")}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" disabled={loading}
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
