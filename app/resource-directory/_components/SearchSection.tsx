"use client";

import { Search, Loader2, Mic } from "lucide-react";
import { useState, KeyboardEvent, useEffect } from "react";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onQueryChange?: (query: string) => void;
  initialValue?: string;
  isLoading?: boolean;
}

export default function SearchSection({
  onSearch,
  onQueryChange,
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
    if (onQueryChange) {
      onQueryChange(newValue);
    }
  };

  return (
    <div className="relative group w-full">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-port-slate transition-colors group-focus-within:text-port-sky">
        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search Resources... (Press Enter for AI Overview)"
        className="w-full pl-14 pr-14 py-4 bg-white border border-port-mist rounded-full shadow-sm text-base placeholder:text-port-slate/50 outline-none transition-all duration-300 focus:border-port-sky focus:ring-4 focus:ring-port-sky/10"
      />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-port-slate hover:text-port-navy cursor-pointer transition-colors">
        <Mic size={20} />
      </div>
    </div>
  );
}