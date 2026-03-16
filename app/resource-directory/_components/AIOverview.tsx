"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Resource } from "../resources";

interface AIOverviewProps {
  aiQuery: string;
  contextResources: Resource[];
  aiOverview?: string;
  loading?: boolean;
  error?: string;
}

interface ExternalLink {
  title: string;
  url: string;
}

export default function AIOverview({
  aiQuery,
  contextResources,
  aiOverview = "",
  loading = false,
  error = "",
}: AIOverviewProps) {
  const [summary, setSummary] = useState<string>("");
  const [externalLinks, setExternalLinks] = useState<ExternalLink[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!aiQuery) {
      setSummary("");
      setExternalLinks([]);
      setExpanded(false);
      return;
    }

    if (loading) {
      setSummary("");
      setExternalLinks([]);
      return;
    }

    if (error) {
      setSummary(error);
      setExternalLinks([]);
      setExpanded(false);
      return;
    }

    if (aiOverview) {
      setSummary(aiOverview);
      setExternalLinks([]);
      setExpanded(false);
      return;
    }

    setSummary("");
    setExternalLinks([]);
  }, [aiQuery, aiOverview, loading, error, contextResources]);

  if (!aiQuery) return null;
  if (!loading && !summary) return null;

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

        <div className="flex flex-col md:flex-row gap-6">
          <div
            className={`flex-1 relative ${
              externalLinks.length > 0 ? "md:w-2/3" : "w-full"
            }`}
          >
            {loading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-4/6"></div>
              </div>
            ) : (
              <div className="relative">
                <p
                  className={`text-[15px] leading-relaxed text-port-navy ${
                    !expanded ? "line-clamp-3" : ""
                  }`}
                >
                  {summary}
                </p>

                {!expanded && summary && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-0" />
                )}
              </div>
            )}

            {!loading && summary && summary.length > 0 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 flex items-center gap-1 text-xs font-bold text-port-sky hover:underline"
              >
                {expanded ? "Show Less" : "Read More"}
                {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
            )}
          </div>

          {!loading && externalLinks.length > 0 && (
            <div className="hidden md:flex flex-col gap-2 w-full md:w-1/3 border-l border-port-mist pl-6">
              {externalLinks.slice(0, 2).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-3 border border-port-mist hover:border-port-sky/30 cursor-pointer transition-colors group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-port-navy line-clamp-2 group-hover:text-port-sky transition-colors">
                      {link.title}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-port-slate flex-shrink-0"
                    />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}