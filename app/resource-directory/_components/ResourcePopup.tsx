"use client";

import { Resource } from "../resources";
import { motion } from "framer-motion";
import { X, MapPin, Phone, Globe, Mail, Facebook, Twitter, Instagram, Clock } from "lucide-react";
import { useEffect } from "react";
import Image from 'next/image';

interface ResourcePopupProps {
    resource: Resource | null;
    onClose: () => void;
}

export default function ResourcePopup({ resource, onClose }: ResourcePopupProps) {
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

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!resource) return null;

    const { lat, lng } = resource.mapCoordinates;

    // Google Maps embed URL using coordinates
    const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=${encodeURIComponent(resource.address)}&center=${lat},${lng}&zoom=15`;

    // Google Maps directions URL
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(resource.address)}`;

    return (
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

            {/* Popup */}
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

                {/* Left Column: Image */}
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
                            {resource.categories && resource.categories.filter(c => c !== resource.category).map(c => (
                                <span key={c} className="inline-block ml-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar bg-white">
                    <div className="mb-6">
                        <h2 className="font-display text-3xl font-bold text-port-navy mb-2">
                            {resource.name}
                        </h2>

                        <div className="flex flex-wrap gap-2 mb-4 text-sm text-port-slate">
                                {resource.tags?.map((tag) => (
                                    <span key={tag} className="bg-port-frost px-2 py-1 rounded text-xs font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                    </div>

                    <div className="prose prose-slate prose-sm text-port-slate mb-8 leading-relaxed">
                        <p>{resource.fullDescription}</p>
                    </div>

                    {/* Contact & Map Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-port-navy uppercase tracking-wider">
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
                                {(resource as any).operatingHours && (
                                    <div className="flex items-center gap-3 text-port-slate sm:col-span-2">
                                        <Clock size={16} className="text-port-sky flex-shrink-0" />
                                        <span>{(resource as any).operatingHours}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Map — real Google Maps embed */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-port-navy uppercase tracking-wider">
                                Location
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-port-slate mb-1">
                                <MapPin size={14} className="text-port-sky flex-shrink-0" />
                                <span>{resource.address}</span>
                            </div>
                            <div className="relative w-full h-52 rounded-xl overflow-hidden border border-port-mist">
                                <iframe
                                    title={`Map of ${resource.name}`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(resource.address)}&z=17&output=embed`}
                                />
                            </div>
                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-port-navy text-white font-medium py-3 rounded-xl hover:bg-port-navy/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
                            >
                                <MapPin size={18} className="text-white" />
                                Get Directions in Google Maps
                            </a>
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
    );
}