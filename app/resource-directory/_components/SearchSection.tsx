"use client";

import { Search, Loader2, X, Sparkles } from "lucide-react";
import { useState, KeyboardEvent, useEffect } from "react";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onQueryChange?: (query: string) => void;
  onClear?: () => void;
  initialValue?: string;
  isLoading?: boolean;
}

export default function SearchSection({
  onSearch,
  onQueryChange,
  onClear,
  initialValue = "",
  isLoading = false,
}: SearchSectionProps) {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = query.trim();
      if (!trimmed) return;
      onSearch(trimmed);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
    if (onQueryChange) onQueryChange(newValue);
  };

  const handleClear = () => {
    setQuery("");
    if (onQueryChange) onQueryChange("");
    if (onClear) onClear();
  };

  const handleAiClick = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <div className="relative group w-full">
      {/* Left icon */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-port-slate transition-colors group-focus-within:text-port-sky">
        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
      </div>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask AI about resources in Port Laken..."
        className="w-full pl-14 pr-36 py-4 bg-white border border-port-mist rounded-full shadow-sm text-base placeholder:text-port-slate/50 outline-none transition-all duration-300 focus:border-port-sky focus:ring-4 focus:ring-port-sky/10"
      />

      {/* Right side: clear or AI button */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {query && (
          <button onClick={handleClear} className="text-port-slate hover:text-port-navy transition-colors">
            <X size={18} />
          </button>
        )}

        {/* AI button — matches site aesthetic */}
        <button
          onClick={handleAiClick}
          disabled={!query.trim() || isLoading}
          title="AI search these resources"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 border-port-sky text-port-sky font-semibold text-sm hover:bg-port-sky hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Sparkles size={15} className="shrink-0" />
          <span>AI</span>
        </button>
      </div>
    </div>
  );
}
