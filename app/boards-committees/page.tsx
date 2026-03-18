"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaUsers,
  FaCalendarAlt,
  FaArrowRight,
  FaSearch,
  FaTimes,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClipboardList,
} from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

const boards = [
  {
    id: "planning",
    name: "Planning Commission",
    members: 7,
    frequency: "Meets Monthly",
    term: "4 Year Term",
    description:
      "Reviews and recommends policies for the physical development of Port Laken, including zoning regulations, land use planning, and long-term growth strategies for sustainable community development.",
    tags: ["Development", "Policy Advisory"],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    detailedDescription:
      "The Planning Commission plays a key role in shaping the long-term growth of Port Laken. Members review zoning proposals, land development plans, comprehensive planning updates, and major policy recommendations before forwarding guidance to city leadership. The commission helps ensure development aligns with the city's goals for sustainability, housing, transportation, and neighborhood character.",
    responsibilities: [
      "Review zoning and land use proposals",
      "Advise on long-range planning and growth strategy",
      "Evaluate development applications and recommendations",
      "Support sustainable and community-centered planning goals",
    ],
    meetingSchedule: "First Thursday of each month, 6:00 PM",
    location: "City Hall Council Chambers, Port Laken",
    contact: "planning@portlaken.gov",
  },
  {
    id: "civic-arts",
    name: "Civic Arts Commission",
    members: 5,
    frequency: "Meets Quarterly",
    term: "4 Year Term",
    description:
      "Promotes artistic and cultural development by commissioning public art, supporting local artists, and enhancing the cultural vibrancy of our community through various programs and initiatives.",
    tags: ["Civic", "Public Engagement"],
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80",
    detailedDescription:
      "The Civic Arts Commission helps enrich public life in Port Laken by supporting arts programming, public art, and cultural events. Members work with community organizations, schools, and artists to ensure the arts remain a visible and meaningful part of everyday life in the city.",
    responsibilities: [
      "Support public art selection and installation",
      "Advise on cultural programming and creative placemaking",
      "Promote local artist engagement and outreach",
      "Strengthen community identity through arts initiatives",
    ],
    meetingSchedule: "Quarterly on the second Tuesday, 5:30 PM",
    location: "Community Arts Center, Port Laken",
    contact: "arts@portlaken.gov",
  },
  {
    id: "parks-recreation",
    name: "Parks & Recreation Board",
    members: 7,
    frequency: "Meets Monthly",
    term: "3 Year Term",
    description:
      "Oversees the development and maintenance of Port Laken's parks, trails, and recreational facilities, ensuring residents have access to quality green spaces and programming for all ages.",
    tags: ["Parks", "Community"],
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
    detailedDescription:
      "The Parks & Recreation Board advises the city on the planning, development, and stewardship of public parks, open spaces, trails, and recreation programs. The board works to ensure Port Laken's natural assets are preserved and that residents of all ages have access to enriching outdoor and recreational experiences.",
    responsibilities: [
      "Review park development and improvement proposals",
      "Advise on recreational programming and facility needs",
      "Advocate for trail connectivity and open space preservation",
      "Engage the community on parks priorities and feedback",
    ],
    meetingSchedule: "Third Wednesday of each month, 6:00 PM",
    location: "Parks & Recreation Office, Port Laken",
    contact: "parks@portlaken.gov",
  },
  {
    id: "ethics",
    name: "Ethics Commission",
    members: 5,
    frequency: "Meets As Needed",
    term: "4 Year Term",
    description:
      "Upholds the integrity of city government by reviewing ethics complaints, providing guidance on conflicts of interest, and ensuring public officials adhere to Port Laken's code of ethics.",
    tags: ["Governance", "Accountability"],
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    detailedDescription:
      "The Ethics Commission serves as an independent body responsible for interpreting and enforcing Port Laken's ethics ordinance. It reviews complaints against city officials and employees, issues advisory opinions, and promotes a culture of transparency and accountability in local government.",
    responsibilities: [
      "Investigate and adjudicate ethics complaints",
      "Issue advisory opinions on conflicts of interest",
      "Educate city staff and officials on ethics standards",
      "Recommend updates to the city's ethics ordinance",
    ],
    meetingSchedule: "As needed, with notice provided to the public",
    location: "City Hall, Port Laken",
    contact: "ethics@portlaken.gov",
  },
  {
    id: "historic-preservation",
    name: "Historic Preservation Board",
    members: 7,
    frequency: "Meets Monthly",
    term: "4 Year Term",
    description:
      "Identifies, protects, and celebrates Port Laken's historic and cultural landmarks, reviewing development proposals that may affect designated historic properties and districts.",
    tags: ["Heritage", "Policy Advisory"],
    image:
      "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=1200&q=80",
    detailedDescription:
      "The Historic Preservation Board works to safeguard Port Laken's architectural and cultural heritage. Members review applications for alterations to historic landmarks, nominate properties for local and state designation, and advise the city on preservation policy to ensure the community's history remains visible for future generations.",
    responsibilities: [
      "Review alterations to designated historic properties",
      "Nominate landmarks for local and state historic registers",
      "Advise on preservation incentives and policy",
      "Educate the public on Port Laken's historic resources",
    ],
    meetingSchedule: "Second Monday of each month, 5:30 PM",
    location: "City Hall Council Chambers, Port Laken",
    contact: "historic@portlaken.gov",
  },
  {
    id: "youth-advisory",
    name: "Youth Advisory Council",
    members: 12,
    frequency: "Meets Monthly",
    term: "1 Year Term",
    description:
      "Gives young residents ages 14–21 a direct voice in city government, advising the City Council on issues affecting youth and helping shape programs, policies, and community initiatives.",
    tags: ["Youth", "Public Engagement"],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
    detailedDescription:
      "The Youth Advisory Council empowers Port Laken's next generation of civic leaders. Young residents collaborate with city staff and elected officials to identify issues important to youth, develop recommendations, and participate in community events. The council builds civic skills and ensures youth perspectives are represented in city decision-making.",
    responsibilities: [
      "Advise the City Council on youth-related issues",
      "Develop and promote youth-focused programs and events",
      "Represent the interests of Port Laken's young residents",
      "Engage peers in civic participation and community service",
    ],
    meetingSchedule: "First Tuesday of each month, 5:00 PM",
    location: "Community Hub, Port Laken",
    contact: "youth@portlaken.gov",
  },
  {
    id: "environmental-sustainability",
    name: "Environmental Sustainability Commission",
    members: 7,
    frequency: "Meets Monthly",
    term: "4 Year Term",
    description:
      "Advises the city on environmental policy, climate resilience, and sustainability initiatives to protect Port Laken's natural resources and reduce the community's environmental footprint.",
    tags: ["Environment", "Policy Advisory"],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    detailedDescription:
      "The Environmental Sustainability Commission guides Port Laken's efforts to address climate change, protect natural resources, and build a more sustainable community. Members advise on energy efficiency, stormwater management, urban forestry, and green infrastructure, helping the city meet its long-term environmental goals.",
    responsibilities: [
      "Advise on climate action and sustainability planning",
      "Review environmental impacts of city projects",
      "Promote energy efficiency and renewable energy adoption",
      "Support urban forestry, stormwater, and green infrastructure initiatives",
    ],
    meetingSchedule: "Second Thursday of each month, 6:00 PM",
    location: "City Hall, Port Laken",
    contact: "sustainability@portlaken.gov",
  },
  {
    id: "public-safety",
    name: "Public Safety Advisory Board",
    members: 9,
    frequency: "Meets Monthly",
    term: "3 Year Term",
    description:
      "Provides community oversight and advisory input on police, fire, and emergency services, helping build trust between residents and public safety agencies in Port Laken.",
    tags: ["Public Safety", "Community"],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
    detailedDescription:
      "The Public Safety Advisory Board fosters transparency and community trust in Port Laken's police and fire departments. Members review public safety policies, hear community concerns, and make recommendations to improve emergency services, crisis response, and neighborhood safety programs.",
    responsibilities: [
      "Review public safety policies and department reports",
      "Facilitate community dialogue on policing and fire services",
      "Recommend improvements to emergency response programs",
      "Promote community-oriented public safety initiatives",
    ],
    meetingSchedule: "Fourth Tuesday of each month, 6:30 PM",
    location: "Public Safety Building, Port Laken",
    contact: "publicsafety@portlaken.gov",
  },
  {
    id: "housing-community-development",
    name: "Housing & Community Development Committee",
    members: 7,
    frequency: "Meets Monthly",
    term: "4 Year Term",
    description:
      "Addresses housing affordability, neighborhood revitalization, and community development needs, advising on programs that expand access to safe and stable housing for all Port Laken residents.",
    tags: ["Housing", "Development"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    detailedDescription:
      "The Housing & Community Development Committee works to ensure Port Laken remains an inclusive and affordable place to live. Members advise on housing policy, federal community development funding, anti-displacement strategies, and programs that support low- and moderate-income residents.",
    responsibilities: [
      "Advise on affordable housing policy and programs",
      "Review community development block grant allocations",
      "Support anti-displacement and neighborhood stabilization efforts",
      "Engage residents on housing needs and priorities",
    ],
    meetingSchedule: "Third Thursday of each month, 6:00 PM",
    location: "Community Development Office, Port Laken",
    contact: "housing@portlaken.gov",
  },
  {
    id: "library-advisory",
    name: "Library Advisory Board",
    members: 5,
    frequency: "Meets Quarterly",
    term: "3 Year Term",
    description:
      "Supports the Port Laken Public Library by advising on programming, collections, and services that meet the educational and cultural needs of the community.",
    tags: ["Education", "Community"],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
    detailedDescription:
      "The Library Advisory Board champions the Port Laken Public Library as a vital community resource. Members advise on library programming, digital services, collection development, and outreach efforts that ensure the library serves residents of all backgrounds and ages.",
    responsibilities: [
      "Advise on library programs, services, and collections",
      "Advocate for library funding and resources",
      "Support community outreach and digital literacy initiatives",
      "Provide input on library facility needs and improvements",
    ],
    meetingSchedule: "Quarterly on the first Wednesday, 5:00 PM",
    location: "Port Laken Public Library",
    contact: "library@portlaken.gov",
  },
];

export default function BoardsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);

  const filteredBoards = boards.filter((board) => {
    const matchesSearch =
      board.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSearch;
  });

  const selectedBoard =
    boards.find((board) => board.id === selectedBoardId) ?? null;

  useEffect(() => {
    if (selectedBoardId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBoardId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedBoard && (
        <div
          className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedBoardId(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBoardId(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-gray-100 text-[#1e3a5f] flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="grid md:grid-cols-[1.05fr_1.25fr] max-h-[90vh] overflow-y-auto">
              {/* Left image panel */}
              <div className="relative min-h-[300px] md:min-h-[700px] overflow-hidden">
                <Image
                  src={selectedBoard.image}
                  alt={selectedBoard.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/85 via-[#1e3a5f]/35 to-[#d4e4ed]/25" />
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_white,_transparent_40%)]" />

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
                  <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-4">
                    <FaClipboardList className="text-sm" />
                    <span className="font-nunito text-sm font-semibold">
                      Board Details
                    </span>
                  </div>

                  <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-tight mb-3">
                    {selectedBoard.name}
                  </h2>

                  <p className="font-nunito text-white/90 text-sm md:text-base leading-relaxed">
                    Learn how this board supports policy, planning, and public
                    engagement across Port Laken.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedBoard.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/15 text-white text-xs font-nunito font-medium rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="p-8 md:p-10">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                  {selectedBoard.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedBoard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-nunito font-medium rounded-full"
                    >
                      #{tag.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  ))}
                </div>

                <p className="font-nunito text-gray-700 text-base leading-relaxed mb-8">
                  {selectedBoard.detailedDescription}
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-[#1e3a5f] mb-2">
                      <FaUsers className="text-sm" />
                      <span className="font-nunito text-sm font-semibold">
                        Membership
                      </span>
                    </div>
                    <p className="font-playfair text-2xl font-bold text-[#1e3a5f]">
                      {selectedBoard.members}
                    </p>
                    <p className="font-nunito text-sm text-gray-500">Members</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-[#1e3a5f] mb-2">
                      <FaCalendarAlt className="text-sm" />
                      <span className="font-nunito text-sm font-semibold">
                        Meetings
                      </span>
                    </div>
                    <p className="font-playfair text-lg font-bold text-[#1e3a5f]">
                      {selectedBoard.frequency}
                    </p>
                    <p className="font-nunito text-sm text-gray-500">
                      {selectedBoard.meetingSchedule}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-[#1e3a5f] mb-2">
                      <HiOutlineClock className="text-sm" />
                      <span className="font-nunito text-sm font-semibold">
                        Term
                      </span>
                    </div>
                    <p className="font-playfair text-lg font-bold text-[#1e3a5f]">
                      {selectedBoard.term}
                    </p>
                    <p className="font-nunito text-sm text-gray-500">
                      Service period
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-nunito text-sm font-bold tracking-wide text-[#1e3a5f] uppercase mb-4">
                    Responsibilities
                  </h4>
                  <div className="space-y-3">
                    {selectedBoard.responsibilities.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#708AA3] flex-shrink-0" />
                        <p className="font-nunito text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-nunito text-sm font-bold tracking-wide text-[#1e3a5f] uppercase mb-4">
                      Contact
                    </h4>
                    <div className="flex items-center gap-3 text-gray-700 font-nunito">
                      <FaEnvelope className="text-[#708AA3]" />
                      <span>{selectedBoard.contact}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-nunito text-sm font-bold tracking-wide text-[#1e3a5f] uppercase mb-4">
                      Location
                    </h4>
                    <div className="flex items-start gap-3 text-gray-700 font-nunito">
                      <FaMapMarkerAlt className="text-[#708AA3] mt-1" />
                      <span>{selectedBoard.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/boards-committees/apply"
                    className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-full font-nunito font-semibold text-sm transition-all duration-300 hover:bg-[#2d4a6f]"
                  >
                    Submit a Board Application
                    <FaArrowRight className="text-xs" />
                  </Link>

                  <button
                    onClick={() => setSelectedBoardId(null)}
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 text-[#1e3a5f] px-6 py-3 rounded-full font-nunito font-semibold text-sm transition-all duration-300 hover:bg-gray-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#d4e4ed] to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-8">
            Boards and Committees
          </h1>

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

                  <div className="lg:flex-1">
                    <p className="font-nunito text-gray-600 text-sm leading-relaxed mb-4">
                      {board.description}
                    </p>

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
                      <button
                        type="button"
                        onClick={() => setSelectedBoardId(board.id)}
                        className="text-[#1e3a5f] font-nunito font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Learn More
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
