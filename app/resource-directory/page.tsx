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

const siteContext = {
  siteName: "Port Laken",
  global: {
    footer:
      "The footer appears across the website and includes contact info, weather, and quick links to About, Amenities, Events, and Gallery.",
    topRight:
      "The top right includes a Sign In page for managing resources and bills, plus a search bar that helps users quickly navigate to any page.",
  },
  homePage: {
    quickActions: [
      "Emergency Alerts",
      "Submit Resources",
      "Pay Utilities",
      "Transportation and Maps",
    ],
    bottomSection:
      "The bottom of the home page includes a way for users to stay in the loop and sign up for newsletters.",
  },
  navigation: {
    communityHub: {
      label: "Community Hub",
      pages: {
        resourceDirectory:
          "A Resource Directory page where the AI is located. Users can ask about navigation and find community resources.",
        events:
          "The Events and Calendar page has featured events at the top and a calendar with upcoming events and important holidays. Featured events include Earth Day Cleanup, Farmers Market Opening, Kids Art Camp, Senior Health Fair, Independence Day Celebration, and more.",
        map:
          "The Map page includes a map of Port Laken with important locations highlighted, including parks, facilities, and more.",
        submitResource:
          "The Submit a Resource page allows users to submit items to the city for review or attention and attach files.",
        communityStories:
          "The Community Stories page highlights stories from the community, similar to a newsletter with updates from around town.",
      },
    },
    residents: {
      label: "Residents",
      pages: {
        life: {
          description:
            "The Life page gives a quick overview of Port Laken and lets users navigate through civic and resident services.",
          sections: [
            "Affordable Housing",
            "Schools and Childcare",
            "Parks and Recreation",
            "Local Business and Economy",
            "Public Transit",
            "Community Centers",
            "Waste and Recycling",
            "Public Safety",
            "Health Services",
            "Libraries and Arts",
            "Permits & Licenses",
          ],
          linkedPages: {
            careers:
              "Local Business and Economy leads to a Careers tab with information on jobs and employee benefits.",
            forms:
              "Permits & Licenses leads to a Forms tab with permits and applications that can be downloaded, viewed, or signed and submitted, with details on the processes.",
          },
        },
        formsAndApplications:
          "Forms and Applications is available under Residents and relates to permits, downloadable forms, applications, and submission processes.",
        employment:
          "Employment is available under Residents and relates to jobs and city employment information.",
      },
    },
    departments: {
      label: "Departments",
      description:
        "The Departments dropdown includes City Clerk, Community Department, Fire Department, Police Department, Public Works, Finance, HR, and Recreation and Parks. It also explains how Port Laken serves residents through sustainable infrastructure, community safety, and public spaces.",
    },
    government: {
      label: "Government",
      pages: {
        council:
          "Council introduces the city council and mayor, with information on districts, agendas, and upcoming meetings and hearings.",
        ordinances:
          "Ordinances lets users browse and search city ordinances and regulations with filters. Examples include zoning regulations, parking rules for commercial vehicles, environmental protection standards, and short-term rental regulations.",
        boardsAndCommittees:
          "Boards and Committees allows users to submit a board application and view commissions such as planning and civic arts commissions.",
        environment:
          "Environment highlights Port Laken's dedication to a greener future, with programs like recycling and waste, green energy, water conservation, and community gardens. Featured initiatives include Tree Planting, Clean Harbor Project, and Green Building Standards. A button at the bottom invites users to get started and volunteer today.",
      },
    },
    news: {
      label: "News",
      description:
        "News highlights featured resident stories, local business spotlights, latest news, and newsletters about the city.",
    },
    about: {
      label: "About",
      stats: {
        population: "125,000",
        founded: "1834",
        area: "45 sq miles",
      },
      description:
        "The About page covers the city's heritage, sustainability practices, culture, restaurants, art, innovation, waterfront life, and includes a way for users to stay connected by entering their email.",
      sustainability: [
        "12 MW solar power",
        "40+ hydrogen fuel cell buses",
        "65% renewable energy",
      ],
    },
    references: {
      label: "References",
      description:
        'The References page explains what powers the site, including the code stack, development standards, additional libraries, image credits, resources, a copyright checklist, and a final disclaimer. The disclaimer states: "This website is a demonstration project created for educational purposes. Port Laken is a fictional city, and any resemblance to actual places, organizations, or events is coincidental. All content is created to showcase web development capabilities and municipal website design best practices."',
      stack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    },
    signIn: {
      label: "Sign In",
      description:
        "Users can sign in to manage resources, bills, and account-related items. New users can click Create Account and enter first name, last name, date of birth, email, username, and password.",
    },
  },
};

function buildAiContext(query: string, contextResources: Resource[]) {
  const visibleResources = contextResources.length ? contextResources : RESOURCES;

  const resourceLines = visibleResources
    .map((r) => {
      const pieces = [
        `- ${r.name}: ${r.shortDescription || r.fullDescription || "No description provided."}`,
        `Category: ${r.category}.`,
        r.address ? `Address: ${r.address}.` : "",
        r.phone ? `Phone: ${r.phone}.` : "",
        r.tags?.length ? `Tags: ${r.tags.join(", ")}.` : "",
      ]
        .filter(Boolean)
        .join(" ");

      return pieces;
    })
    .join("\n");

  const communityHub = siteContext.navigation.communityHub.pages;
  const residentsLife = siteContext.navigation.residents.pages.life;
  const government = siteContext.navigation.government.pages;
  const about = siteContext.navigation.about;
  const references = siteContext.navigation.references;
  const signIn = siteContext.navigation.signIn;

  return `
WEBSITE NAME:
${siteContext.siteName}

GLOBAL WEBSITE DETAILS:
- ${siteContext.global.footer}
- ${siteContext.global.topRight}

HOME PAGE:
- Quick action buttons: ${siteContext.homePage.quickActions.join(", ")}.
- ${siteContext.homePage.bottomSection}

TOP NAVIGATION:
- Community Hub
  - Resource Directory: ${communityHub.resourceDirectory}
  - Events: ${communityHub.events}
  - Map: ${communityHub.map}
  - Submit a Resource: ${communityHub.submitResource}
  - Community Stories: ${communityHub.communityStories}

- Residents
  - Life: ${residentsLife.description}
  - Life sections: ${residentsLife.sections.join(", ")}
  - Careers tab: ${residentsLife.linkedPages.careers}
  - Forms tab: ${residentsLife.linkedPages.forms}
  - Forms and Applications: ${siteContext.navigation.residents.pages.formsAndApplications}
  - Employment: ${siteContext.navigation.residents.pages.employment}

- Departments
  - ${siteContext.navigation.departments.description}

- Government
  - Council: ${government.council}
  - Ordinances: ${government.ordinances}
  - Boards and Committees: ${government.boardsAndCommittees}
  - Environment: ${government.environment}

- News
  - ${siteContext.navigation.news.description}

- About
  - Population: ${about.stats.population}
  - Founded: ${about.stats.founded}
  - Area: ${about.stats.area}
  - ${about.description}
  - Sustainability highlights: ${about.sustainability.join(", ")}

- References
  - ${references.description}
  - Code stack: ${references.stack.join(", ")}

- Sign In
  - ${signIn.description}

CURRENT PAGE:
Resource Directory

CURRENT PAGE DETAILS:
- This is the page where the AI assistant appears.
- Users can use the search bar and Ask AI button on this page.
- The page contains a resource grid with these visible resources:
${resourceLines}

USER QUESTION:
"${query}"
`.trim();
}

async function generateOverview(query: string, contextResources: Resource[]) {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY in .env.local");
  }

  const context = buildAiContext(query, contextResources);

  const isNavigationQuery =
    /where|navigate|go to|find|how do i|get to|which page|where can i|where do i/i.test(
      query
    );

  const isResourceQuery =
    /resource|food|legal|health|counseling|senior|community center|medical|doctor|therapy|housing/i.test(
      query
    );

  const callGemini = async (minChars: number) => {
    const prompt = `
You are the built-in AI guide for the Port Laken website.

Your job is to answer based only on the website context provided below.
You must help users navigate Port Laken's website and explain where information or features are located.

${context}

STRICT RULES:
- Answer specifically about the Port Laken website.
- Use only the provided website context.
- Do not invent pages, dropdown items, buttons, forms, laws, events, or features that were not described.
- If the user asks where to find something, name the relevant page, dropdown, section, or tool on the website.
- If the answer is on the current Resource Directory page, say that clearly.
- If the answer belongs on another page, tell the user exactly where to go in the site's navigation.
- If something is not described in the website context, say that clearly instead of guessing.
- Mention the top navigation or top-right search bar when useful.
- Mention the footer only if it is relevant.

${
  isNavigationQuery
    ? `
This is a navigation question.
Prioritize giving step-by-step website guidance, such as which top navigation dropdown to open, which page to select, and what section to look at.
`
    : ""
}

${
  isResourceQuery
    ? `
This may relate to the Resource Directory.
If the answer is available through the visible resource cards, mention the specific resource title and category.
`
    : ""
}

STYLE RULES:
- Write EXACTLY 4 sentences.
- Each sentence should be 25-40 words when possible.
- Target a total response of around 600 characters.
- Be specific and helpful.
- No bullet points.
- No markdown.
- End with a period.
- Sound like an on-site assistant, not a generic chatbot.
- When referencing a specific resource from the directory, write its exact name as it appears in the resource list.
- When referencing a page on the website, write the page name exactly as it appears in the navigation (e.g. "Events", "Map", "Forms & Applications", "Life", "Council", "Ordinances", "Boards & Committees", "Environment", "Careers", "News", "About", "References", "Departments").

Return only the final paragraph text.
`.trim();

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
        apiKey
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1200,
            topP: 0.9,
          },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini error ${res.status}: ${errText}`);
    }

    const data = await res.json();
    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: { text?: string }) => p?.text)
        ?.filter(Boolean)
        ?.join("") ?? "";

    const cleaned = text.trim();
    const finalized =
      cleaned.length && !/[.!?]$/.test(cleaned) ? `${cleaned}.` : cleaned;

    return finalized.length >= minChars ? finalized : "";
  };

  let out = await callGemini(400);
  if (!out) out = await callGemini(320);
  if (!out) out = await callGemini(240);

  return out || "No response generated.";
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

    // Auto-fire AI search when arriving from navbar with ?q=
    if (q && !hasAutoSearched.current) {
      hasAutoSearched.current = true;
      handleAiSearch(q);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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

  const handleAiSearch = async (q: string) => {
    setAiQuery(q);

    const snapshot = filteredResources;
    setAiContextResources(snapshot);

    setLoading(true);
    setError("");
    setAiOverview("");

    try {
      const text = await generateOverview(q, snapshot);
      setAiOverview(text);
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
                  Try adjusting your search or category filters.
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