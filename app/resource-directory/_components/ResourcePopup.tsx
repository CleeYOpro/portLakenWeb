"use client";

import { Resource } from "../resources";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Globe, Mail, Facebook, Twitter, Instagram, Star } from "lucide-react";
import { useEffect } from "react";
import Image from 'next/image';

interface ResourcePopupProps {
    resource: Resource | null;
    onClose: () => void;
}

export default function ResourcePopup({ resource, onClose }: ResourcePopupProps) {
    // Lock body scroll when popup is open
    useEffect(() => {
        if (resource) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [resource]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {resource && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 1, transition: { duration: 0.3 } }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-port-navy/20 backdrop-blur-sm pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        onClick={onClose}
                    />

                    {/* Draggable Popup */}
                    <motion.div
                        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto relative"
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20, transition: { duration: 0.2 } }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); onClose(); }}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-port-navy transition-all shadow-sm"
                        >
                            <X size={20} />
                        </button>

                        {/* Left Column: Image & Quick Info */}
                        <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-port-mist/10">
                            <Image
                                src={resource.image}
                                alt={resource.name}
                                className="w-full h-full object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-port-navy/60 to-transparent flex items-end p-6 md:p-8">
                                <div className="text-white">
                                    <span className="inline-block px-3 py-1 bg-port-sky/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                        {resource.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar bg-white">
                            <div className="mb-6">
                                <h2 className="font-display text-3xl font-bold text-port-navy mb-2">
                                    {resource.name}
                                </h2>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={`${i < Math.round(resource.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                                            />
                                        ))}
                                        <span className="text-sm font-bold text-port-navy ml-1">{resource.rating}</span>
                                    </div>
                                    <div className="h-4 w-px bg-port-mist" />
                                    <div className="flex flex-wrap gap-2 text-sm text-port-slate">
                                        {resource.tags?.map((tag) => (
                                            <span key={tag} className="bg-port-frost px-2 py-1 rounded text-xs font-medium">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-slate prose-sm text-port-slate mb-8 leading-relaxed">
                                <p>{resource.fullDescription}</p>
                            </div>

                            {/* Contact & Map Grid */}
                            <div className="grid grid-cols-1 gap-6">
                                {/* Contact Info */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-port-navy uppercase tracking-wider flex items-center gap-2">
                                        Contact & Links
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-3 text-port-slate">
                                            <Phone size={16} className="text-port-sky" />
                                            <span>{resource.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-port-slate">
                                            <Mail size={16} className="text-port-sky" />
                                            <a href={`mailto:${resource.email}`} className="hover:text-port-navy hover:underline">{resource.email}</a>
                                        </div>
                                        <div className="flex items-center gap-3 text-port-slate sm:col-span-2">
                                            <Globe size={16} className="text-port-sky" />
                                            <a href={resource.website} target="_blank" rel="noreferrer" className="hover:text-port-navy hover:underline truncate">
                                                {resource.website}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-port-navy uppercase tracking-wider flex items-center gap-2">
                                        Location
                                    </h3>
                                    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-port-mist group">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                                            style={{
                                                backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Port+Orchard,WA&zoom=13&size=600x300&scale=2&format=png&sensor=false')",
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-port-mist/20">
                                            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-sm font-medium text-port-navy">
                                                <MapPin size={16} className="text-port-sky" />
                                                {resource.address}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full bg-port-navy text-white font-medium py-3 rounded-xl hover:bg-port-navy/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
                                        <MapPin size={18} className="text-white" />
                                        Get Directions
                                    </button>
                                </div>
                            </div>

                            {/* Socials */}
                            {resource.socialLinks && (
                                <div className="mt-8 pt-6 border-t border-port-mist flex items-center gap-4">
                                    <span className="text-xs font-bold text-port-slate uppercase">Connect:</span>
                                    {resource.socialLinks.facebook && (
                                        <a href={`https://${resource.socialLinks.facebook}`} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                                            <Facebook size={18} />
                                        </a>
                                    )}
                                    {resource.socialLinks.twitter && (
                                        <a href={`https://twitter.com/${resource.socialLinks.twitter}`} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 transition-colors">
                                            <Twitter size={18} />
                                        </a>
                                    )}
                                    {resource.socialLinks.instagram && (
                                        <a href={`https://instagram.com/${resource.socialLinks.instagram}`} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors">
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                </div>
                            )}

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}