"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, ChevronDown, ChevronUp, Star, Shield, Users } from "lucide-react";
import { Resource } from "../resources";

interface AIOverviewProps {
    aiQuery: string;
    contextResources: Resource[];
}

interface ExternalLink {
    title: string;
    url: string;
}

export default function AIOverview({ aiQuery, contextResources }: AIOverviewProps) {
    const [summary, setSummary] = useState<string>("");
    const [externalLinks, setExternalLinks] = useState<ExternalLink[]>([]);
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (!aiQuery) {
            setSummary("");
            setExternalLinks([]);
            return;
        }

        const fetchSummary = async () => {
            setLoading(true);
            setSummary("");
            setExternalLinks([]);

            try {
                const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
                const context = contextResources.slice(0, 5).map(r =>
                    `- ${r.name} (${r.category}): ${r.shortDescription}`
                ).join("\n");

                if (!apiKey) {
                    // Mock
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    setSummary(`Here is a summary based on your search for "${aiQuery}". We found several resources including ${contextResources.slice(0, 3).map(r => r.name).join(", ")}. Note: This is a mock response.`);

                    // Mock links occasionally for demonstration (or always if appropriate for testing)
                    if (contextResources.length > 0) {
                        setExternalLinks([
                            { title: "Department of Health", url: "#" },
                            { title: "Community Guidelines", url: "#" }
                        ]);
                    }
                } else {
                    // Real API Call Implementation would go here
                    // Ensure you parse links from the response if the API returns them
                    setSummary("Gemini API Placeholder response for: " + aiQuery);
                }

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSummary();
    }, [aiQuery]); // Only re-run when the trigger query changes

    if (!aiQuery) return null;

    return (
        <AnimatePresence>
            {(loading || summary) && (
                <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="relative"
                >
                    {/* Google-style Container: White, Subtle Border */}
                    <div className="bg-white rounded-2xl p-6 border border-port-mist shadow-sm relative overflow-hidden min-h-[160px]">

                        {/* Header */}
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={16} className="text-port-sky" />
                            <span className="text-xs font-bold uppercase tracking-wider text-port-slate">AI Overview</span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Main Content */}
                            <div className={`flex-1 relative ${externalLinks.length > 0 ? 'md:w-2/3' : 'w-full'}`}>
                                {loading ? (
                                    <div className="space-y-3 animate-pulse">
                                        <div className="h-4 bg-gray-100 rounded w-full"></div>
                                        <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                                        <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <p className={`text-[15px] leading-relaxed text-port-navy ${!expanded ? 'line-clamp-3' : ''}`}>
                                            {summary}
                                        </p>

                                        {/* Read More / Blur */}
                                        {!expanded && (
                                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-0">
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Read More Button */}
                                {!loading && (
                                    <button
                                        onClick={() => setExpanded(!expanded)}
                                        className="mt-2 flex items-center gap-1 text-xs font-bold text-port-sky hover:underline"
                                    >
                                        {expanded ? "Show Less" : "Read More"}
                                        {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                    </button>
                                )}
                            </div>

                            {/* External Links Side Section - Only render if logic exists */}
                            {!loading && externalLinks.length > 0 && (
                                <div className="hidden md:flex flex-col gap-2 w-full md:w-1/3 border-l border-port-mist pl-6">
                                    {externalLinks.slice(0, 2).map((link, i) => (
                                        <div key={i} className="bg-gray-50 rounded-xl p-3 border border-port-mist hover:border-port-sky/30 cursor-pointer transition-colors group">
                                            <div className="flex items-start justify-between gap-2">
                                                <span className="text-xs font-bold text-port-navy line-clamp-2 group-hover:text-port-sky transition-colors">{link.title}</span>
                                                <ArrowUpRight size={14} className="text-port-slate flex-shrink-0" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
