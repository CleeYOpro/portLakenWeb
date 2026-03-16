"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Resource } from "../resources";
import Link from "next/link";

interface AIOverviewProps {
  aiQuery: string;
  contextResources: Resource[];
  aiOverview?: string;
  loading?: boolean;
  error?: string;
  allResources?: Resource[];
  onResourceClick?: (resource: Resource) => void;
}

// Pages the AI might reference, mapped to their routes
const PAGE_ROUTES: Record<string, string> = {
  "Events": "/events",
  "Map": "/maps-transport",
  "Forms & Applications": "/forms",
  "Life": "/living-in-portlaken",
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

type TextSegment =
  | { type: "text"; content: string }
  | { type: "resource"; resource: Resource }
  | { type: "page"; label: string; href: string };

function parseSegments(
  text: string,
  resources: Resource[]
): TextSegment[] {
  // Build a combined pattern: resource names + page names, longest first to avoid partial matches
  const resourceNames = resources.map((r) => r.name);
  const pageNames = Object.keys(PAGE_ROUTES);
  const allTerms = [...resourceNames, ...pageNames].sort(
    (a, b) => b.length - a.length
  );

  // Escape for regex
  const escaped = allTerms.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");

  const parts = text.split(pattern);
  const segments: TextSegment[] = [];

  for (const part of parts) {
    if (!part) continue;
    const resource = resources.find((r) => r.name === part);
    if (resource) {
      segments.push({ type: "resource", resource });
      continue;
    }
    const href = PAGE_ROUTES[part];
    if (href) {
      segments.push({ type: "page", label: part, href });
      continue;
    }
    segments.push({ type: "text", content: part });
  }

  return segments;
}

export default function AIOverview({
  aiQuery,
  contextResources,
  aiOverview = "",
  loading = false,
  error = "",
  allResources = [],
  onResourceClick,
}: AIOverviewProps) {
  const [summary, setSummary] = useState<string>("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!aiQuery) { setSummary(""); setExpanded(false); return; }
    if (loading) { setSummary(""); return; }
    if (error) { setSummary(error); setExpanded(false); return; }
    if (aiOverview) { setSummary(aiOverview); setExpanded(false); return; }
    setSummary("");
  }, [aiQuery, aiOverview, loading, error]);

  if (!aiQuery) return null;
  if (!loading && !summary) return null;

  const segments = summary ? parseSegments(summary, allResources) : [];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
      animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl p-6 border border-port-mist shadow-sm relative overflow-hidden min-h-[160px]">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-port-sky" />
          <span className="text-xs font-bold uppercase tracking-wider text-port-slate">
            AI Overview
          </span>
        </div>

        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-gray-100 rounded w-full" />
            <div className="h-4 bg-gray-100 rounded w-5/6" />
            <div className="h-4 bg-gray-100 rounded w-4/6" />
          </div>
        ) : (
          <div className="relative">
            <p
              className={`text-[15px] leading-relaxed text-port-navy ${
                !expanded ? "line-clamp-3" : ""
              }`}
            >
              {segments.map((seg, i) => {
                if (seg.type === "resource") {
                  return (
                    <button
                      key={i}
                      onClick={() => onResourceClick?.(seg.resource)}
                      className="font-bold text-port-sky hover:underline cursor-pointer"
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
                      className="font-bold text-port-sky hover:underline"
                    >
                      {seg.label}
                    </Link>
                  );
                }
                return <span key={i}>{seg.content}</span>;
              })}
            </p>

            {!expanded && summary && (
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
        )}

        {!loading && summary && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-xs font-bold text-port-sky hover:underline"
          >
            {expanded ? "Show Less" : "Read More"}
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        )}
      </div>
    </motion.div>
  );
}
