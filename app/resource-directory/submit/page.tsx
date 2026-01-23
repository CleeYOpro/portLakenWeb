"use client";

import { useState } from "react";
import { CloudUpload, ChevronDown } from "lucide-react";
import Link from "next/link";
import InvertButton from "../../../components/ui/InvertButton";

// Categories matching the resource directory
const CATEGORIES = [
    "Healthcare",
    "Family",
    "Food",
    "Seniors",
    "Legal",
    "Emergency",
    "Education",
    "Community",
    "Recreation",
    "Service Stars",
];

const LOCATIONS = [
    "Port Laken Center",
    "North District",
    "South Harbor",
    "West End",
    "East Village",
];

export default function SubmitResourcePage() {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        description: "",
        contact: "",
        website: "",
        image: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to submit would go here
        alert("Resource submitted for review!");
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-10">
                    <h1 className="font-playfair text-4xl font-bold text-port-navy mb-3">
                        Submit a Resource
                    </h1>
                    <p className="text-port-slate/80 text-lg">
                        Help our community grow by sharing a new resource.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Resource Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Resource Name"
                            className="w-full px-5 py-4 rounded-2xl bg-port-frost border border-transparent focus:bg-white focus:border-port-sky/50 focus:ring-4 focus:ring-port-sky/10 outline-none transition-all placeholder:text-port-slate/50 text-port-navy font-medium"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative">
                        <select
                            className={`w-full px-5 py-4 rounded-2xl bg-port-frost border border-transparent focus:bg-white focus:border-port-sky/50 focus:ring-4 focus:ring-port-sky/10 outline-none transition-all appearance-none cursor-pointer font-medium ${formData.category ? "text-port-navy" : "text-port-slate/50"
                                }`}
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            required
                        >
                            <option value="" disabled hidden>
                                Category
                            </option>
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat} className="text-port-navy">
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-port-slate/50 pointer-events-none" size={20} />
                    </div>

                    {/* Location Dropdown */}
                    <div className="relative">
                        <select
                            className={`w-full px-5 py-4 rounded-2xl bg-port-frost border border-transparent focus:bg-white focus:border-port-sky/50 focus:ring-4 focus:ring-port-sky/10 outline-none transition-all appearance-none cursor-pointer font-medium ${formData.location ? "text-port-navy" : "text-port-slate/50"
                                }`}
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            required
                        >
                            <option value="" disabled hidden>
                                Location
                            </option>
                            {LOCATIONS.map((loc) => (
                                <option key={loc} value={loc} className="text-port-navy">
                                    {loc}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-port-slate/50 pointer-events-none" size={20} />
                    </div>

                    {/* Description */}
                    <div>
                        <textarea
                            placeholder="Description"
                            rows={5}
                            className="w-full px-5 py-4 rounded-2xl bg-port-frost border border-transparent focus:bg-white focus:border-port-sky/50 focus:ring-4 focus:ring-port-sky/10 outline-none transition-all placeholder:text-port-slate/50 text-port-navy font-medium resize-none"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                        />
                    </div>

                    {/* Contact Info */}
                    <div>
                        <input
                            type="text"
                            placeholder="Contact Info"
                            className="w-full px-5 py-4 rounded-2xl bg-port-frost border border-transparent focus:bg-white focus:border-port-sky/50 focus:ring-4 focus:ring-port-sky/10 outline-none transition-all placeholder:text-port-slate/50 text-port-navy font-medium"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            required
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <input
                            type="url"
                            placeholder="Website (Optional)"
                            className="w-full px-5 py-4 rounded-2xl bg-port-frost border border-transparent focus:bg-white focus:border-port-sky/50 focus:ring-4 focus:ring-port-sky/10 outline-none transition-all placeholder:text-port-slate/50 text-port-navy font-medium"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-port-navy ml-1">
                            Logo/Image <span className="text-port-slate/60 font-medium">(Optional)</span>
                        </label>
                        <div className="relative border-2 border-dashed border-port-mist rounded-2xl p-10 hover:bg-port-frost/50 transition-colors text-center cursor-pointer group">
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept="image/png, image/jpeg, image/gif"
                                onChange={(e) => setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null })}
                            />
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-port-frost flex items-center justify-center group-hover:bg-white transition-colors">
                                    <CloudUpload className="text-port-slate group-hover:text-port-sky transition-colors" size={24} />
                                </div>
                                <div>
                                    <p className="text-port-sky font-semibold">
                                        Upload a file <span className="text-port-slate font-medium">or drag and drop</span>
                                    </p>
                                    <p className="text-xs text-port-slate/60 mt-1">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                        >
                            Submit Resource
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
