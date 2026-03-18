"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { RESOURCES, Resource, ResourceCategory } from "./resources";
import ResourceCard from "./_components/ResourceCard";
import ResourcePopup from "./_components/ResourcePopup";
import SearchSection from "./_components/SearchSection";
import AIOverview from "./_components/AIOverview";
import { FolderOpen, PlusCircle, ChevronDown } from "lucide-react";

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

// ─── Rich site-wide context for AI ───────────────────────────────────────────

export interface PageImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface PageContext {
  route: string;
  label: string;
  images?: PageImage[];
  address?: string;
  description?: string;
}

// Images and structured data extracted from each page
export const PAGE_CONTEXTS: Record<string, PageContext> = {
  about: {
    route: "/about",
    label: "About",
    description: "Port Laken was founded in 1834. Population ~85,000. 45 sq miles. 19 parks (50+ total green spaces). 1,500+ local businesses. 98% resident satisfaction. Located along northern Washington shores between the San Juan Strait and Olympic Mountains. Tagline: 'Rooted in Place. Rising Forward.' The city has a vibrant culinary scene, waterfront life, a thriving arts and education sector, and a strong sense of community. Key landmarks include the Founders' Statue & Plaza (downtown), Port Laken History Museum, Port Laken Art Museum, and the waterfront pier.",
    images: [
      { url: "https://outdoor-society.com/wp-content/uploads/2018/04/MP7A1677-1.jpg", alt: "Port Laken aerial view", caption: "Port Laken" },
      { url: "https://olympicpeninsula.org/wp-content/uploads/2024/09/port-angeles-wa-city-pier-hdr-e1727213387696.jpg", alt: "Waterfront Life", caption: "Waterfront" },
      { url: "https://images.trvl-media.com/place/6219551/4ada606a-cc8f-4451-9010-293cace04a6b.jpg", alt: "City Center", caption: "City Center" },
      { url: "https://www.smartmeetings.com/wp-content/uploads/2015/11/washington-cover-dukes-chowder-house-1.jpg", alt: "Culinary Scene", caption: "Culinary Scene" },
    ],
  },
  events: {
    route: "/events",
    label: "Events",
    description: "Upcoming events: Spring Food Drive (March 15, 2026, Community Center, 9AM-4PM), Summer Concert Series (April 22, 2026, Lakeside Park, 6-10PM), Job Skills Workshop (May 8, 2026, Public Library, 10AM-2PM), Earth Day Cleanup (April 22, 2026, Various Locations, 8AM-12PM), Farmers Market Opening (May 1, 2026, Town Square, 7AM-1PM), Kids Art Camp (June 15-19, 2026, Arts Center, 9AM-3PM), Senior Health Fair (May 20, 2026, Senior Center, 10AM-3PM), Independence Day Celebration (July 4, 2026, Harbor Park, 4-10PM), Summer Festival (annual, multiple venues).",
    images: [
      { url: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?w=600&q=80", alt: "Spring Food Drive", caption: "Spring Food Drive" },
      { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80", alt: "Summer Concert Series", caption: "Summer Concert" },
      { url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80", alt: "Earth Day Cleanup", caption: "Earth Day Cleanup" },
      { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", alt: "Independence Day", caption: "July 4th Celebration" },
      { url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80", alt: "Farmers Market", caption: "Farmers Market" },
    ],
  },
  maps: {
    route: "/maps-transport",
    label: "Map",
    description: "Interactive map of Port Laken with key locations. Bus routes: Route 120 (Downtown Loop, every 15 min), Route 240 (Riverside Park, every 20 min), Route 480 (Airport, every 30 min), Route 960 (Arts District, every 25 min). Intercity rail: West/South Peninsula Line to Tacoma/Olympia, East/North Sound Line to Seattle/Bellevue. Port Laken is approximately a 2-hour drive from Seattle.",
    images: [
      { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", alt: "Harborview Medical Center", caption: "Harborview Medical" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Eastlaken Community Center", caption: "Community Center" },
    ],
  },
  forms: {
    route: "/forms",
    label: "Forms & Applications",
    description: "Available forms: Residential Building Permit Application (Building & Zoning, planning@portlaken.gov), Special Event Permit Application (City Clerk), Park Facility Reservation Form (Parks & Recreation), Business License Application (Finance, $150/year), Zoning Variance Request, Water Service Connection Application (Public Works), Street Closure Permit, Dog License Application, Garage Sale Permit, Public Records Request, Commercial Sign Permit, Sidewalk Cafe Permit ($100/year). Featured: 2025 Business License Renewal (deadline Jan 31), Property Tax Assessment Appeal (deadline Mar 15), Summer Recreation Program Registration.",
    images: [
      { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", alt: "Business License Renewal", caption: "Business License" },
      { url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", alt: "Property Tax Appeal", caption: "Property Tax" },
      { url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80", alt: "Recreation Registration", caption: "Recreation Programs" },
    ],
  },
  council: {
    route: "/mayor-council",
    label: "Council",
    description: "City Council members: Mayor Sarah Johnson, David Martinez (District 1, infrastructure), Emily Chen (District 2, environment), Michael Thompson (District 3, public safety), Lisa Rodriguez (District 4, education), James Wilson (At Large, fiscal). Upcoming meetings: Regular City Council Meeting (Jan 15, 2026), Special Session on Urban Planning (Jan 8, 2026), Public Hearing on Budget Allocation (Dec 20, 2025). Council meetings are open to the public.",
    images: [],
  },
  ordinances: {
    route: "/ordinances",
    label: "Ordinances",
    description: "Active ordinances: Residential Noise Abatement (ORD-2023-12, max 65dB daytime/55dB nighttime), Zoning Regulations Amendment (ORD-2023-05, new MU-1 mixed-use zone, 45ft height limit), Environmental Protection Standards (ORD-2022-05, LEED Silver required for 10k+ sqft buildings), Business Licensing Requirements (ORD-2021-89, general license $150/year), Water Conservation Requirements (ORD-2023-22, no outdoor watering 10AM-6PM), Short-Term Rental Regulations (ORD-2023-08, $350/year permit), Accessory Dwelling Unit Standards (ORD-2022-33), Outdoor Dining Permit Program (ORD-2021-52, sidewalk dining $100/year).",
    images: [],
  },
  boardsCommittees: {
    route: "/boards-committees",
    label: "Boards & Committees",
    description: "Residents can apply to serve on city boards and commissions including the Planning Commission and Civic Arts Commission. An online application form is available on the Boards & Committees page.",
    images: [],
  },
  environment: {
    route: "/environmental",
    label: "Environment",
    description: "Port Laken environmental programs: Recycling & Waste (curbside pickup Tuesdays, 40% landfill diversion goal by 2026), Green Energy (100% renewable by 2030, $3,000 solar rebate available, 75% clean energy now), Water Conservation (2M gallons saved, usage down 30%, smart irrigation rebates up to $200), Community Gardens (12 sites citywide, 400+ plots, 10,000 lbs donated to food banks annually). Parks: Elm Street Park (opened Jan 2026, walking trails, native plant garden, community pavilion), Lakeview Waterfront Park (14 acres, boat launch, wetland trail, fishing pier), Riverside Community Garden (80+ plots, composting station). Initiatives: Tree Planting (5,000+ trees planted), Clean Harbor Project, Green Building Standards (LEED Silver required for large buildings).",
    images: [
      { url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80", alt: "Olympic National Forest", caption: "Port Laken Environment" },
      { url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80", alt: "Community Gardens", caption: "Community Gardens" },
      { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", alt: "Solar Energy", caption: "Solar Initiative" },
      { url: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80", alt: "Water Conservation", caption: "Water Conservation" },
    ],
  },
  news: {
    route: "/news",
    label: "News",
    description: "Latest news: Green Port 2026 sustainability plan (Feb 10, 2026), $50M Downtown Revitalization Initiative (Jan 16, 2026), Elm Street Park opening (Jan 11, 2026), New Park Opens on Elm Street, Council Meeting Highlights, Summer Festival Schedule. Featured resident stories: Sarah Martinez (community volunteer, leads food drive initiatives), Michael Chen (youth mentor, 15 years mentoring at-risk youth, founded Future Forward Port Laken in 2013). Business spotlights: Harbor Brew Coffee, Green Thumb Nursery, Pages & Prose.",
    images: [],
  },
  departments: {
    route: "/departments",
    label: "Departments",
    description: "City departments: City Clerk (records, elections), Community Development (planning, zoning, permits), Fire Department (fire suppression, EMS), Police Department (law enforcement, public safety), Public Works (infrastructure, roads, utilities), Finance (budget, taxes, billing), Human Resources (city employment), Recreation and Parks (parks, trails, recreation programs).",
    images: [],
  },
  careers: {
    route: "/careers",
    label: "Careers",
    description: "Port Laken city employment opportunities. Benefits include comprehensive health, dental & vision coverage, generous retirement & pension plans, paid time off & holidays, and long-term job stability. The city values community impact, career growth, and stability. Job listings are posted on Indeed. Roles include civil engineers, recreation coordinators, IT support specialists, and more. The Careers page links to the full Benefits Guide.",
    images: [],
  },
  life: {
    route: "/living-in-portlaken",
    label: "Life",
    description: "Living in Port Laken: Affordable Housing (programs for buyers and renters, forms available), Schools & Childcare (25 public schools, A+ safety rating, childcare resources in Resource Directory), Parks & Recreation (50+ parks, 100 miles of trails, award-winning park system), Local Business & Economy (1,500+ local businesses, support for entrepreneurs), Public Transit (bus routes and intercity rail, ~2hr from Seattle), Community Centers (Eastlaken Community Center, Harbor Community Center), Waste & Recycling (curbside Tuesdays, green initiatives), Public Safety (police, fire, emergency services), Health Services (clinics, hospitals, wellness programs in Resource Directory), Libraries & Arts (Port Laken Public Library, Port Laken Art Museum, Port Laken History Museum), Permits & Licenses (forms page).",
    images: [],
  },
};

const siteContext = {
  siteName: "Port Laken",
  global: {
    footer: "The footer includes contact info, weather, and quick links to About, Amenities, Events, and Gallery.",
    topRight: "The top right includes a Sign In page and a search bar for quick navigation.",
  },
  homePage: {
    quickActions: ["Emergency Alerts", "Submit Resources", "Pay Utilities", "Transportation and Maps"],
    bottomSection: "The bottom of the home page includes a newsletter sign-up.",
  },
  navigation: {
    communityHub: {
      pages: {
        resourceDirectory: "Resource Directory — AI assistant and community resource listings covering Healthcare, Family, Food, Seniors, Legal, Emergency, Education, Community, Recreation, and Service Stars categories.",
        events: "Events & Calendar — featured events, calendar with upcoming events.",
        map: "Map — interactive map of Port Laken with key locations and transit routes.",
        submitResource: "Submit a Resource — submit items to the city for review.",
        communityStories: "Community Stories — community newsletter and updates.",
      },
    },
    residents: {
      pages: {
        life: PAGE_CONTEXTS.life.description,
        formsAndApplications: PAGE_CONTEXTS.forms.description,
        employment: "Employment — city jobs and employment information. Benefits: health/dental/vision, pension, PTO. Apply via Indeed.",
      },
    },
    departments: { description: PAGE_CONTEXTS.departments.description },
    government: {
      pages: {
        council: PAGE_CONTEXTS.council.description,
        ordinances: PAGE_CONTEXTS.ordinances.description,
        boardsAndCommittees: PAGE_CONTEXTS.boardsCommittees.description,
        environment: PAGE_CONTEXTS.environment.description,
      },
    },
    news: { description: PAGE_CONTEXTS.news.description },
    about: {
      stats: { population: "85,000", founded: "1834", area: "45 sq miles", parks: "50+", trails: "100 miles", schools: "25 public", safetyRating: "A+" },
      description: PAGE_CONTEXTS.about.description,
    },
    references: {
      description: "References page explains the code stack and includes a disclaimer that Port Laken is a fictional city for educational purposes.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    },
    signIn: { description: "Sign In to manage resources, bills, and account items. New users can create an account." },
  },
};

function buildAiContext(query: string, contextResources: Resource[]) {
  const allResources = contextResources.length ? contextResources : RESOURCES;

  // Score resources by keyword relevance to avoid overflowing the prompt
  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(/\s+/).filter((w) => w.length > 2);
  const scored = allResources.map((r) => {
    const blob = [r.name, r.shortDescription, r.fullDescription, r.category, ...r.tags]
      .join(" ")
      .toLowerCase();
    const score = queryWords.reduce((acc, w) => acc + (blob.includes(w) ? 1 : 0), 0);
    return { r, score };
  });
  scored.sort((a, b) => b.score - a.score);
  // Always include top matches + a broad sample so the AI has enough context
  const topMatches = scored.filter((s) => s.score > 0).slice(0, 30).map((s) => s.r);
  const fallback = scored.slice(0, 30).map((s) => s.r);
  const visibleResources = topMatches.length >= 5 ? topMatches : fallback;

  const resourceLines = visibleResources
    .map((r) => {
      return [
        `- ${r.name}: ${r.shortDescription || r.fullDescription || "No description."}`,
        `Category: ${r.category}.`,
        r.address ? `Address: ${r.address}.` : "",
        r.phone ? `Phone: ${r.phone}.` : "",
        r.tags?.length ? `Tags: ${r.tags.join(", ")}.` : "",
      ].filter(Boolean).join(" ");
    })
    .join("\n");

  const nav = siteContext.navigation;

  return `
WEBSITE: ${siteContext.siteName}
GLOBAL: ${siteContext.global.footer} ${siteContext.global.topRight}
HOME PAGE QUICK ACTIONS: ${siteContext.homePage.quickActions.join(", ")}

PAGES & CONTENT:
- About: ${nav.about.description} Stats: population ${nav.about.stats.population}, founded ${nav.about.stats.founded}, area ${nav.about.stats.area}.
- Events: ${nav.communityHub.pages.events}
- Map: ${nav.communityHub.pages.map}
- Forms & Applications: ${nav.residents.pages.formsAndApplications}
- Council: ${nav.government.pages.council}
- Ordinances: ${nav.government.pages.ordinances}
- Boards & Committees: ${nav.government.pages.boardsAndCommittees}
- Environment: ${nav.government.pages.environment}
- News: ${nav.news.description}
- Departments: ${nav.departments.description}
- Careers: ${nav.residents.pages.employment}
- Life: ${nav.residents.pages.life}
- References: ${nav.references.description}
- Sign In: ${nav.signIn.description}
- Resource Directory (current page): Community resource listings with AI assistant.

RESOURCE DIRECTORY LISTINGS:
${resourceLines}

USER QUESTION: "${query}"
`.trim();
}

export interface AIResult {
  text: string;
  pageContextKey?: string; // key into PAGE_CONTEXTS
  address?: string;        // if question is about a location
}

async function generateOverview(query: string, contextResources: Resource[]): Promise<AIResult> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY in .env.local");

  const context = buildAiContext(query, contextResources);

  const pageKeys = Object.keys(PAGE_CONTEXTS).join(", ");

  const prompt = `
You are the built-in AI guide for the Port Laken city website.

Answer based ONLY on the website context below. Do not invent anything not described.
IMPORTANT: Always check the RESOURCE DIRECTORY LISTINGS section first. If the answer exists there, use those resources — do not say something is unavailable if it appears in the listings.

${context}

RESPONSE FORMAT — return ONLY valid JSON, no markdown, no code fences:
{
  "text": "Your 4-sentence answer here.",
  "pageContextKey": "one of: ${pageKeys} — or null if no specific page applies",
  "address": "a specific address string if the question is about a physical location, otherwise null"
}

RULES FOR text:
- Exactly 3 sentences, 20-30 words each, ~250 chars total.
- No bullet points, no markdown.
- End with a period.
- Sound like an on-site assistant.
- ALWAYS check the RESOURCE DIRECTORY LISTINGS first. If relevant resources exist there, name them by their exact name. Never say something is "not listed" if it appears in the listings.
- When referencing a resource, use its exact name from the listings.
- When referencing a page, use its exact navigation name (Events, Map, Forms & Applications, Life, Council, Ordinances, Boards & Committees, Environment, Careers, News, About, Departments).

RULES FOR pageContextKey:
- Set to the most relevant page key if the question is primarily about that page's content.
- about → questions about city history, age, population, founding, stats, culture, waterfront. NOT for food/restaurant questions if resources exist.
- events → questions about events, activities, calendar, things to do, upcoming happenings.
- maps → questions about locations, getting around, transit, bus routes, directions.
- forms → questions about permits, applications, licenses, forms, paperwork.
- council → questions about city council, mayor, meetings, government leadership.
- ordinances → questions about laws, rules, regulations, ordinances, noise, zoning, parking.
- boardsCommittees → questions about boards, commissions, committees, applying to serve.
- environment → questions about recycling, solar, green energy, water conservation, parks, gardens, sustainability.
- news → questions about news, announcements, stories, updates.
- departments → questions about city departments, fire, police, public works, finance.
- careers → questions about jobs, employment, working for the city.
- null → if the answer is primarily from the Resource Directory listings on this page.

RULES FOR address:
- Only set if the question asks where something is physically located.
- Use the exact address from the resource listings or page context.
- null otherwise.

Return ONLY the JSON object.
`.trim();

  const callGemini = async (): Promise<AIResult> => {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 2048, topP: 0.9, responseMimeType: "application/json" },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini error ${res.status}: ${errText}`);
    }

    const data = await res.json();
    console.log("[Gemini] full response:", JSON.stringify(data, null, 2));

    const candidate = data?.candidates?.[0];
    const finishReason = candidate?.finishReason;
    console.log("[Gemini] finishReason:", finishReason);

    const raw = candidate?.content?.parts
      ?.map((p: { text?: string }) => p?.text)
      ?.filter(Boolean)
      ?.join("") ?? "";

    console.log("[Gemini] raw text:", raw);

    // Strip markdown fences
    const cleaned = raw.trim()
      .replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();

    // Try full JSON parse first
    try {
      const parsed = JSON.parse(cleaned);
      const text = (parsed.text ?? "").trim();
      const finalized = text && !/[.!?]$/.test(text) ? `${text}.` : text;
      return {
        text: finalized || "No response generated.",
        pageContextKey: parsed.pageContextKey && parsed.pageContextKey !== "null" ? parsed.pageContextKey : undefined,
        address: parsed.address && parsed.address !== "null" ? parsed.address : undefined,
      };
    } catch (parseErr) {
      console.log("[Gemini] JSON parse failed:", parseErr, "cleaned:", cleaned);
      // Regex fallback — extract "text" field value even from malformed JSON
      const textMatch = cleaned.match(/"text"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (textMatch) {
        const extracted = textMatch[1].replace(/\\n/g, " ").replace(/\\"/g, '"').trim();
        const finalized = extracted && !/[.!?]$/.test(extracted) ? `${extracted}.` : extracted;
        const pageMatch = cleaned.match(/"pageContextKey"\s*:\s*"([^"]+)"/);
        const addrMatch = cleaned.match(/"address"\s*:\s*"([^"]+)"/);
        return {
          text: finalized || "No response generated.",
          pageContextKey: pageMatch?.[1] && pageMatch[1] !== "null" ? pageMatch[1] : undefined,
          address: addrMatch?.[1] && addrMatch[1] !== "null" ? addrMatch[1] : undefined,
        };
      }
      // Last resort: if it looks like raw JSON leaked, return empty
      if (cleaned.startsWith("{") || cleaned.startsWith('"text"')) {
        return { text: "No response generated." };
      }
      const finalized = cleaned && !/[.!?]$/.test(cleaned) ? `${cleaned}.` : cleaned;
      return { text: finalized || "No response generated." };
    }
  };

  return callGemini();
}

function ResourceDirectoryContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [aiQuery, setAiQuery] = useState("");
  const [aiContextResources, setAiContextResources] = useState<Resource[]>([]);
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "All">("All");
  const [filteredResources, setFilteredResources] = useState<Resource[]>(RESOURCES);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const [aiOverview, setAiOverview] = useState("");
  const [aiPageContextKey, setAiPageContextKey] = useState<string | undefined>();
  const [aiAddress, setAiAddress] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasAutoSearched = useRef(false);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) {
      setQuery(q);
    }

    const resourceId = searchParams.get("resourceId");
    if (resourceId) {
      const resource = RESOURCES.find((r) => r.id === resourceId);
      if (resource) {
        setSelectedResource(resource);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Auto-fire AI search once on mount if ?q= is present
  useEffect(() => {
    const q = searchParams.get("q");
    if (q && !hasAutoSearched.current) {
      hasAutoSearched.current = true;
      console.log("[AutoSearch] firing for query:", q);
      handleAiSearch(q, RESOURCES);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let result = RESOURCES;

    if (activeCategory !== "All") {
      result = result.filter((r) => r.category === activeCategory);
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter((r) => {
        const searchableText = [
          r.name,
          r.shortDescription,
          r.fullDescription,
          r.address,
          r.phone,
          ...r.tags,
        ].join(" ").toLowerCase();

        return searchableText.includes(lowerQuery);
      });
    }

    setFilteredResources(result);
  }, [query, activeCategory]);

  const handleAiSearch = async (q: string, resourcesOverride?: Resource[]) => {
    setAiQuery(q);
    // Always give the AI the full resource list so it can reason over everything,
    // regardless of what the UI filter currently shows.
    const snapshot = resourcesOverride ?? RESOURCES;
    setAiContextResources(snapshot);
    setLoading(true);
    setError("");
    setAiOverview("");
    setAiPageContextKey(undefined);
    setAiAddress(undefined);

    try {
      const result = await generateOverview(q, snapshot);
      setAiOverview(result.text);
      setAiPageContextKey(result.pageContextKey);
      setAiAddress(result.address);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Gemini failed.";
      setError(message);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white w-full border-b border-port-mist/50 pt-32 pb-6">
        <div className="max-w-[1600px] mx-auto px-6 space-y-6">
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
              onClick={() => (window.location.href = "/resource-directory/submit")}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-all duration-300 whitespace-nowrap bg-[#708aa3] text-white hover:bg-white/0 hover:text-[#708aa3] hover:shadow-md border-4 border-transparent hover:border-[#708aa3]"
            >
              Submit a Resource
              <span className="flex items-center justify-center w-5 h-5 rounded-full transition-colors">
                <PlusCircle
                  size={14}
                  className="text-white group-hover:text-[#708aa3] transition-colors"
                />
              </span>
            </button>
          </div>

          <div className="w-full">
            <SearchSection
              onSearch={handleAiSearch}
              onQueryChange={setQuery}
              onClear={() => { setQuery(""); setAiOverview(""); setAiQuery(""); }}
              initialValue={query}
              isLoading={loading}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-8 sticky top-36 h-fit hidden md:block">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 leading-relaxed">
              <span className="font-bold">Disclaimer: </span>
              The resource locations listed in this directory are not real. Port Laken is a fictional city inspired by the real city of Port Angeles in Washington State. Some listings may reference similar types of locations found in Port Angeles, while others point to random nearby areas. These resources are for demonstration purposes only and should not be used for real-world navigation or services.
            </div>

            <div className="bg-white p-6 rounded-3xl border border-port-mist shadow-sm">
              <div className="mb-6 border-b border-port-mist pb-4">
                <h2 className="font-display text-xl font-bold text-port-navy">
                  Filters
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-port-slate uppercase tracking-wider mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.label}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                          activeCategory === cat.value
                            ? "bg-port-navy text-white border-port-navy shadow-md"
                            : "bg-white text-port-slate border-port-mist hover:bg-gray-50 hover:text-port-navy"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-port-slate uppercase tracking-wider mb-3">
                    Distance
                  </h3>
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

          <main className="w-full md:w-3/4">
            <div className="mb-8">
              <AIOverview
                aiQuery={aiQuery}
                contextResources={aiContextResources}
                aiOverview={aiOverview}
                loading={loading}
                error={error}
                allResources={RESOURCES}
                pageContextKey={aiPageContextKey}
                address={aiAddress}
                onResourceClick={(r) => setSelectedResource(r)}
              />
            </div>

            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-port-slate">Showing</span>
              <span className="text-sm font-bold text-port-navy bg-white px-2 py-0.5 rounded-md border border-port-mist">
                {filteredResources.length}
              </span>
              <span className="text-sm text-port-slate">resources</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-3xl">
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

            {filteredResources.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-port-mist/50">
                <div className="inline-block p-4 rounded-full bg-port-frost mb-4">
                  <FolderOpen size={48} className="text-port-slate/50" />
                </div>
                <h3 className="text-xl font-bold text-port-navy mb-2">
                  No resources found
                </h3>
                <p className="text-port-slate">
                  If you are using AI driven search, press enter to continue.
                </p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 text-port-sky font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <ResourcePopup
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </div>
  );
}

const ResourceDirectoryPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResourceDirectoryContent />
  </Suspense>
);

export default ResourceDirectoryPage;