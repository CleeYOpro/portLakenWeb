"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUsers, FaCalendarAlt, FaArrowRight, FaSearch } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

const boards = [
  {
    id: "planning-1",
    name: "Planning Commission",
    members: 7,
    frequency: "Meets Monthly",
    term: "4 Year Term",
    description: "Reviews and recommends policies for the physical development of Port Laken, including zoning regulations, land use planning, and long-term growth strategies for sustainable community development.",
    tags: ["Development", "Policy Advisory"],
  },
  {
    id: "planning-2",
    name: "Planning Commission",
    members: 7,
    frequency: "Meets Monthly",
    term: "4 Year Term",
    description: "Reviews and recommends policies for the physical development of Port Laken, including zoning regulations, land use planning, and long-term growth strategies for sustainable community development.",
    tags: ["Development", "Policy Advisory"],
  },
  {
    id: "civic-arts-1",
    name: "Civic Arts Commission",
    members: 5,
    frequency: "Meets Quarterly",
    term: "4 Year Term",
    description: "Promotes artistic and cultural development by commissioning public art, supporting local artists, and enhancing the cultural vibrancy of our community through various programs and initiatives.",
    tags: ["Civic", "Public Engagement"],
  },
  {
    id: "civic-arts-2",
    name: "Civic Arts Commission",
    members: 5,
    frequency: "Meets Quarterly",
    term: "4 Year Term",
    description: "Promotes artistic and cultural development by commissioning public art, supporting local artists, and enhancing the cultural vibrancy of our community through various programs and initiatives.",
    tags: ["Civic", "Public Engagement"],
  },
  {
    id: "civic-arts-3",
    name: "Civic Arts Commission",
    members: 5,
    frequency: "Meets Quarterly",
    term: "4 Year Term",
    description: "Promotes artistic and cultural development by commissioning public art, supporting local artists, and enhancing the cultural vibrancy of our community through various programs and initiatives.",
    tags: ["Civic", "Public Engagement"],
  },
];

export default function BoardsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBoards = boards.filter((board) => {
    const matchesSearch =
      board.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#d4e4ed] to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-8">
            Boards and Committees
          </h1>

          {/* Header Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#1e3a5f]">
                  Boards & Committees
                </h2>
                <p className="font-nunito text-gray-500 mt-1">
                  Find ways to get involved in Port Laken.
                </p>
              </div>
              <Link
                href="/boards-committees/apply"
                className="bg-[#1e3a5f] text-white px-6 py-3 rounded-full font-nunito font-semibold text-sm transition-all duration-300 hover:bg-[#2d4a6f] inline-flex items-center gap-2 whitespace-nowrap"
              >
                Submit a Board Application
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="mt-6 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Boards and Committees"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-nunito text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Boards List */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredBoards.map((board) => (
              <div
                key={board.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:gap-8">
                  {/* Left Column - Title and Meta */}
                  <div className="lg:w-1/4 mb-4 lg:mb-0">
                    <h3 className="font-playfair text-xl font-bold text-[#1e3a5f] mb-3">
                      {board.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-500 font-nunito">
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-gray-400" />
                        <span>{board.members} Members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-400" />
                        <span>{board.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineClock className="text-gray-400" />
                        <span>{board.term}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Description and Actions */}
                  <div className="lg:flex-1">
                    <p className="font-nunito text-gray-600 text-sm leading-relaxed mb-4">
                      {board.description}
                    </p>

                    {/* Tags and Learn More */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {board.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-nunito font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/boards-committees/${board.id}`}
                        className="text-[#1e3a5f] font-nunito font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Learn More
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBoards.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl text-gray-400" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1e3a5f] mb-2">
                No Results Found
              </h3>
              <p className="font-nunito text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
