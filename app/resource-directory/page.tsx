"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { RESOURCES, Resource, ResourceCategory } from "./resources";
import ResourceCard from "./_components/ResourceCard";
import ResourcePopup from "./_components/ResourcePopup";
import SearchSection from "./_components/SearchSection";
import AIOverview from "./_components/AIOverview";
import { FolderOpen, PlusCircle, SlidersHorizontal, MapPin, ChevronRight, ChevronDown, Star, Heart, Shield, GraduationCap, Utensils, Gavel, Users } from "lucide-react";

// Icons mapping for sidebar
// Icons mapping for sidebar (Removed as we switched to chips)
// const CATEGORY_ICONS...

const CATEGORIES: { label: string; value: ResourceCategory | "All" }[] = [
  { label: "All Resources", value: "All" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Family", value: "Family" },
  { label: "Food", value: "Food" },
  { label: "Seniors", value: "Seniors" },
  { label: "Legal", value: "Legal" },
  { label: "Emergency", value: "Emergency" },
  { label: "Education", value: "Education" },
  { label: "Community", value: "Community" },
  { label: "Recreation", value: "Recreation" },
  { label: "Service Stars", value: "Service Stars" },
];

function ResourceDirectoryContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [aiQuery, setAiQuery] = useState("");
  const [aiContextResources, setAiContextResources] = useState<Resource[]>([]);
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "All">("All");
  const [filteredResources, setFilteredResources] = useState<Resource[]>(RESOURCES);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  // Sync query with URL params if they change (optional, but good for back nav)
  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) {
      setQuery(q);
      // Note: We don't auto-trigger AI on URL change unless desired.
    }

    const resourceId = searchParams.get("resourceId");
    if (resourceId) {
      const resource = RESOURCES.find((r) => r.id === resourceId);
      if (resource) {
        setSelectedResource(resource);
      }
    }
  }, [searchParams]);

  // Filter Logic
  useEffect(() => {
    let result = RESOURCES;

    // 1. Filter by Category
    if (activeCategory !== "All") {
      result = result.filter((r) => r.category === activeCategory);
    }

    // 2. Filter by Search Query
    if (query) {
      const lowerQ = query.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(lowerQ) ||
          r.shortDescription.toLowerCase().includes(lowerQ) ||
          r.tags.some((t) => t.toLowerCase().includes(lowerQ))
      );
    }

    setFilteredResources(result);
  }, [query, activeCategory]);

  const handleAiSearch = (q: string) => {
    setAiQuery(q);
    // Snapshot current resources so AI context doesn't change while typing
    setAiContextResources(filteredResources);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Section */}
      <div className="bg-white w-full border-b border-port-mist/50 pt-32 pb-6">
        {/* Centered Content Container */}
        <div className="max-w-[1600px] mx-auto px-6 space-y-6">

          {/* Row 1: Title & Button */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl font-bold text-port-navy mb-2">
                Resource Directory
              </h1>
              <p className="text-lg text-port-slate">
                Find what you need in Port Laken.
              </p>
            </div>

            <button
              onClick={() => window.location.href = '/resource-directory/submit'}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-all duration-300 whitespace-nowrap
  bg-[#708aa3] text-white hover:bg-white/0 hover:text-[#708aa3] hover:shadow-md border-4 border-transparent hover:border-[#708aa3]">
              Submit a Resource
              <span className="flex items-center justify-center w-5 h-5 rounded-full transition-colors">
                <PlusCircle size={14} className="text-white group-hover:text-[#708aa3] transition-colors" />
              </span>
            </button>


          </div>

          {/* Row 2: Search Bar (MAX WIDTH) */}
          <div className="w-full">
            <SearchSection
              onSearch={handleAiSearch}
              onQueryChange={setQuery}
              initialValue={query}
            />
          </div>

        </div>
      </div>


      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Sidebar (Filters) - Hidden on mobile */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-8 sticky top-36 h-fit hidden md:block">
            <div className="bg-white p-6 rounded-3xl border border-port-mist shadow-sm">
              <div className="mb-6 border-b border-port-mist pb-4">
                <h2 className="font-display text-xl font-bold text-port-navy">Filters</h2>
              </div>

              <div className="space-y-8">
                {/* Category Pills */}
                <div>
                  <h3 className="text-xs font-bold text-port-slate uppercase tracking-wider mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.label}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat.value
                          ? "bg-port-navy text-white border-port-navy shadow-md"
                          : "bg-white text-port-slate border-port-mist hover:bg-gray-50 hover:text-port-navy"
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>



                {/* Dropdown Selector */}
                <div>
                  <h3 className="text-xs font-bold text-port-slate uppercase tracking-wider mb-3">Distance</h3>
                  <div className="relative">
                    <select className="w-full appearance-none p-3 pl-4 pr-10 rounded-xl border border-port-mist bg-gray-50 text-sm font-medium text-port-navy outline-none focus:border-port-sky focus:ring-2 focus:ring-port-sky/10 transition-shadow">
                      <option>Any Distance</option>
                      <option>Within 1 mile</option>
                      <option>Within 5 miles</option>
                      <option>Within 10 miles</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-port-slate">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </aside>

          {/* Right Main Content - Full width on mobile, 3 column grid on mobile */}
          <main className="w-full md:w-3/4">
            {/* AI Overview */}
            <div className="mb-8">
              <AIOverview
                aiQuery={aiQuery}
                contextResources={aiContextResources}
              />
            </div>

            {/* Results Header */}
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-port-slate">Showing</span>
              <span className="text-sm font-bold text-port-navy bg-white px-2 py-0.5 rounded-md border border-port-mist">{filteredResources.length}</span>
              <span className="text-sm text-port-slate">resources</span>
            </div>

            {/* Grid - Changed to 1 column on mobile, 3 on desktop */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-3xl"
            >
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="h-full relative z-0 touch-none"
                >
                  <ResourceCard
                    {...resource}
                    onClick={() => setSelectedResource(resource)}
                  />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredResources.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-port-mist/50">
                <div className="inline-block p-4 rounded-full bg-port-frost mb-4">
                  <FolderOpen size={48} className="text-port-slate/50" />
                </div>
                <h3 className="text-xl font-bold text-port-navy mb-2">No resources found</h3>
                <p className="text-port-slate">Try adjusting your search or category filters.</p>
                <button
                  onClick={() => { setQuery(""); setActiveCategory("All"); }}
                  className="mt-6 text-port-sky font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Popup */}
      <ResourcePopup
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </div>
  );
}

export default function ResourceDirectoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-port-cream pt-32 text-center">Loading Directory...</div>}>
      <ResourceDirectoryContent />
    </Suspense>
  )
}