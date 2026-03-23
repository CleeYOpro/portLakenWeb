"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, ChevronUp, ExternalLink, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Resource } from "../resources";
import { PAGE_CONTEXTS, PageImage } from "../page";
import Link from "next/link";
import Image from "next/image";

interface AIOverviewProps {
  aiQuery: string;
  contextResources: Resource[];
  aiOverview?: string;
  loading?: boolean;
  error?: string;
  allResources?: Resource[];
  pageContextKey?: string;
  address?: string;
  onResourceClick?: (resource: Resource) => void;
  onClose?: () => void;
}

const PAGE_ROUTES: Record<string, string> = {
  "Events": "/events",
  "Map": "/maps-transport",
  "Forms & Applications": "/forms",
  "Council": "/mayor-council",
  "Ordinances": "/ordinances",
  "Boards & Committees": "/boards-committees",
  "Environment": "/environmental",
  "Careers": "/careers",
  "News": "/news",
  "About": "/about",
  "References": "/references",
  "Departments": "/departments",
  "Resource Directory": "/resource-directory",
  "Submit a Resource": "/resource-directory/submit",
};

const CATEGORY_COLORS: Record<string, string> = {
  Healthcare: "bg-red-50 text-red-600",
  Family: "bg-pink-50 text-pink-600",
  Food: "bg-orange-50 text-orange-600",
  Seniors: "bg-amber-50 text-amber-600",
  Legal: "bg-purple-50 text-purple-600",
  Emergency: "bg-red-50 text-red-700",
  Education: "bg-blue-50 text-blue-600",
  Community: "bg-teal-50 text-teal-600",
  Recreation: "bg-green-50 text-green-600",
  "Service Stars": "bg-yellow-50 text-yellow-600",
};

type TextSegment =
  | { type: "text"; content: string }
  | { type: "resource"; resource: Resource }
  | { type: "page"; label: string; href: string };

function parseSegments(text: string, resources: Resource[]): TextSegment[] {
  const resourceNames = resources.map((r) => r.name);
  const pageNames = Object.keys(PAGE_ROUTES);
  const allTerms = [...resourceNames, ...pageNames].sort((a, b) => b.length - a.length);
  const escaped = allTerms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(pattern);
  const segments: TextSegment[] = [];

  for (const part of parts) {
    if (!part) continue;
    const resource = resources.find((r) => r.name === part);
    if (resource) { segments.push({ type: "resource", resource }); continue; }
    const href = PAGE_ROUTES[part];
    if (href) { segments.push({ type: "page", label: part, href }); continue; }
    segments.push({ type: "text", content: part });
  }
  return segments;
}

function extractReferencedResources(segments: TextSegment[]): Resource[] {
  const seen = new Set<string>();
  const result: Resource[] = [];
  for (const seg of segments) {
    if (seg.type === "resource" && !seen.has(seg.resource.id)) {
      seen.add(seg.resource.id);
      result.push(seg.resource);
    }
  }
  return result.slice(0, 3);
}

// Skeleton shimmer for loading state
function SkeletonLine({ width }: { width: string }) {
  return (
    <div
      className={`h-4 rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-[shimmer_1.4s_ease-in-out_infinite] ${width}`}
    />
  );
}

function ResourceImageCard({
  resource,
  onClick,
}: {
  resource: Resource;
  onClick: () => void;
}) {
  const colorClass = CATEGORY_COLORS[resource.category] ?? "bg-gray-50 text-gray-600";
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="group w-full text-left rounded-xl overflow-hidden border border-port-mist hover:border-port-sky/40 hover:shadow-md transition-all duration-200 bg-white"
    >
      <div className="relative h-28 w-full overflow-hidden bg-gray-100">
        {resource.image ? (
          <Image
            src={resource.image}
            alt={resource.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="200px"
          />
        ) : (
          <div className="w-full h-full bg-port-frost flex items-center justify-center">
            <Sparkles size={24} className="text-port-slate/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-2.5">
        <p className="text-xs font-bold text-port-navy leading-tight line-clamp-2 group-hover:text-port-sky transition-colors">
          {resource.name}
        </p>
        <span className={`mt-1 inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${colorClass}`}>
          {resource.category}
        </span>
      </div>
    </motion.button>
  );
}

function PageImageCard({ img, href }: { img: PageImage; href: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <Link
        href={href}
        className="group block w-full rounded-xl overflow-hidden border border-port-mist hover:border-port-sky/40 hover:shadow-md transition-all duration-200 bg-white"
      >
        <div className="relative h-28 w-full overflow-hidden bg-gray-100">
          <Image
            src={img.url}
            alt={img.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {img.caption && (
            <p className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-white/90 leading-tight">
              {img.caption}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export default function AIOverview({
  aiQuery,
  contextResources,
  aiOverview = "",
  loading = false,
  error = "",
  allResources = [],
  pageContextKey,
  address,
  onResourceClick,
  onClose,
}: AIOverviewProps) {
  const [summary, setSummary] = useState<string>("");
  const [expanded, setExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!aiQuery) { setSummary(""); setExpanded(false); setActiveImageIndex(0); return; }
    if (loading) { setSummary(""); setActiveImageIndex(0); return; }
    if (error) { setSummary(error); setExpanded(false); return; }
    if (aiOverview) { setSummary(aiOverview); setExpanded(false); return; }
    setSummary("");
  }, [aiQuery, aiOverview, loading, error]);

  const segments = summary ? parseSegments(summary, allResources) : [];
  const referencedResources = extractReferencedResources(segments);

  // Determine images to show: page context images take priority, fall back to resource images
  const pageCtx = pageContextKey ? PAGE_CONTEXTS[pageContextKey] : null;
  const pageImages = pageCtx?.images?.slice(0, 3) ?? [];
  const hasPageImages = pageImages.length > 0;
  const hasResourceImages = referencedResources.length > 0;
  const hasImages = hasPageImages || hasResourceImages;
  const activeImagesCount = hasPageImages ? pageImages.length : referencedResources.length;

  useEffect(() => {
    if (activeImagesCount <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % activeImagesCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeImagesCount, summary]);

  if (!aiQuery) return null;
  if (!loading && !summary) return null;

  // Source chips: resources + pages mentioned in text
  const sourceChips = segments
    .filter((s) => s.type === "resource" || s.type === "page")
    .filter((s, i, arr) => {
      const key = s.type === "resource" ? s.resource.id : s.href;
      return arr.findIndex((x) => (x.type === "resource" ? x.resource.id : x.href) === key) === i;
    })
    .slice(0, 5);

  return (
    <AnimatePresence>
      <motion.div
        key="ai-overview"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="mb-8"
      >
        {/* Google-style gradient left border removed */}

        <div className="bg-white rounded-2xl px-5 pt-5 pb-4 border border-port-mist shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5">
              <Sparkles size={15} className="text-port-sky" />
              <span className="text-xs font-bold uppercase tracking-wider text-port-slate">
                AI Overview
              </span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-xs font-bold uppercase tracking-wider text-port-slate/60 hover:text-port-sky transition-colors"
                aria-label="Close AI Overview"
              >
                Close AI
              </button>
            )}
          </div>

          {loading ? (
            /* Shimmer skeleton */
            <div className="flex gap-6">
              <div className="flex-1 space-y-3">
                <SkeletonLine width="w-full" />
                <SkeletonLine width="w-11/12" />
                <SkeletonLine width="w-4/5" />
                <SkeletonLine width="w-3/4" />
                <div className="pt-2 flex gap-2">
                  <div className="h-6 w-24 rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-[shimmer_1.4s_ease-in-out_infinite]" />
                  <div className="h-6 w-20 rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-[shimmer_1.4s_ease-in-out_infinite]" />
                </div>
              </div>
              <div className="hidden sm:flex flex-col gap-2 w-40 flex-shrink-0">
                <div className="h-28 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-[shimmer_1.4s_ease-in-out_infinite]" />
                <div className="h-28 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:400%_100%] animate-[shimmer_1.4s_ease-in-out_infinite]" />
              </div>
            </div>
          ) : (
            <div className={`flex gap-6 ${hasImages ? "flex-col sm:flex-row" : ""}`}>
              {/* Text column */}
              <div className="flex-1 min-w-0">
                <div className="relative">
                  <p
                    className={`text-[15px] leading-relaxed text-port-navy ${
                      !expanded ? "line-clamp-4" : ""
                    }`}
                  >
                    {segments.map((seg, i) => {
                      if (seg.type === "resource") {
                        return (
                          <button
                            key={i}
                            onClick={() => onResourceClick?.(seg.resource)}
                            className="font-semibold text-port-sky hover:underline underline-offset-2 cursor-pointer"
                          >
                            {seg.resource.name}
                          </button>
                        );
                      }
                      if (seg.type === "page") {
                        return (
                          <Link
                            key={i}
                            href={seg.href}
                            className="font-semibold text-port-sky hover:underline underline-offset-2"
                          >
                            {seg.label}
                          </Link>
                        );
                      }
                      return <span key={i}>{seg.content}</span>;
                    })}
                  </p>
                  {!expanded && summary && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                {/* Show more / less */}
                {summary && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 flex items-center gap-1 text-xs font-semibold text-port-sky hover:underline underline-offset-2"
                  >
                    {expanded ? "Show less" : "Show more"}
                    {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                )}

                {/* Address pill */}
                {address && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-port-slate bg-port-frost border border-port-mist rounded-full px-3 py-1.5 w-fit">
                    <MapPin size={11} className="text-port-sky flex-shrink-0" />
                    <span>{address}</span>
                  </div>
                )}

                {/* Source chips + Go to page */}
                {(sourceChips.length > 0 || pageCtx) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sourceChips.map((chip, i) => {
                      if (chip.type === "resource") {
                        return (
                          <button
                            key={i}
                            onClick={() => onResourceClick?.(chip.resource)}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-port-frost border border-port-mist text-port-navy hover:border-port-sky/50 hover:bg-blue-50 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-port-sky flex-shrink-0" />
                            {chip.resource.name}
                          </button>
                        );
                      }
                      return (
                        <Link
                          key={i}
                          href={chip.href}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-port-frost border border-port-mist text-port-navy hover:border-port-sky/50 hover:bg-blue-50 transition-colors"
                        >
                          <ExternalLink size={10} className="text-port-sky flex-shrink-0" />
                          {chip.label}
                        </Link>
                      );
                    })}
                    {/* Go to [Page] CTA */}
                    {pageCtx && (
                      <Link
                        href={pageCtx.route}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-port-sky/10 border border-port-sky/30 text-port-sky hover:bg-port-sky hover:text-white transition-colors"
                      >
                        <ExternalLink size={10} className="flex-shrink-0" />
                        Go to {pageCtx.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Image panel */}
              {hasImages && activeImagesCount > 0 && (
                <div className="relative flex flex-col sm:w-44 flex-shrink-0">
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
                    >
                      {hasPageImages
                        ? pageImages.map((img, i) => (
                            <div key={i} className="w-full flex-shrink-0">
                              <PageImageCard img={img} href={pageCtx!.route} />
                            </div>
                          ))
                        : referencedResources.map((r) => (
                            <div key={r.id} className="w-full flex-shrink-0">
                              <ResourceImageCard
                                resource={r}
                                onClick={() => onResourceClick?.(r)}
                              />
                            </div>
                          ))
                      }
                    </div>
                  </div>
                  
                  {activeImagesCount > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-3">
                       <button onClick={() => setActiveImageIndex((prev) => (prev - 1 + activeImagesCount) % activeImagesCount)} className="text-port-slate hover:text-port-sky p-1">
                         <ChevronLeft size={16} />
                       </button>
                       <div className="flex gap-1.5">
                         {Array.from({ length: activeImagesCount }).map((_, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeImageIndex ? 'bg-port-sky' : 'bg-port-mist hover:bg-port-sky/50'}`} aria-label={`Go to slide ${i + 1}`} />
                         ))}
                       </div>
                       <button onClick={() => setActiveImageIndex((prev) => (prev + 1) % activeImagesCount)} className="text-port-slate hover:text-port-sky p-1">
                         <ChevronRight size={16} />
                       </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
