import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

const categoryColors: Record<string, string> = {
  "City News": "bg-blue-50 text-blue-700",
  "Community": "bg-teal-50 text-teal-700",
  "Community Spotlight": "bg-purple-50 text-purple-700",
  "Business Spotlight": "bg-amber-50 text-amber-700",
  "Lifestyle": "bg-pink-50 text-pink-700",
  "Events": "bg-orange-50 text-orange-700",
  "Arts & Culture": "bg-indigo-50 text-indigo-700",
  "Community Events": "bg-green-50 text-green-700",
};

const articles: Record<string, Article> = {
  "sarah-martinez": {
    slug: "sarah-martinez",
    title: "Sarah Martinez: A Decade of Feeding Hope",
    subtitle: "How one woman's mission to fight hunger quietly transformed Port Laken's food security landscape — and why she says she's just getting started",
    category: "Community Spotlight",
    author: "Dani Rojas, Port Laken News",
    date: "January 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    content: [
      "It was a Tuesday morning in October 2014 when Sarah Martinez watched a third-grader named Deja quietly close her lunchbox and push it under her chair. The cafeteria around her was loud and full, but Deja sat perfectly still — the kind of stillness that comes from embarrassment, not calm. The box was empty. Had been for weeks.",
      "Martinez was volunteering that day at Westside Elementary as part of a school reading program. She wasn't there to solve hunger. But some things you can't unsee.",
      "\"I went home that night and I couldn't stop thinking about it,\" Martinez says now, leaning back in a folding chair inside the Port Laken Community Food Network's main distribution hub on Harbor Avenue. \"I kept asking myself, what am I actually doing with my time? What matters? And the answer felt very clear.\"",
      "That weekend, Martinez organized her first food collection — a cardboard box outside her parish at St. Augustine's, a handwritten sign, and a prayer that someone would notice. By Sunday evening, the box was full.",
      "Twelve years later, the Port Laken Community Food Network serves more than 2,000 families every month across three distribution sites. It has diverted over 900,000 pounds of surplus food from local restaurants, grocery chains, and catering companies since its founding.",
      "THE DIGNITY MODEL:",
      "Traditional food banks operate on a logistics framework: sort, pack, distribute. Efficiency is the goal. Martinez understood that efficiency and dignity don't have to conflict — but in many programs, they do.",
      "\"When you hand someone a box filled with choices someone else made for them, you're sending a message,\" she explains. \"You're saying, 'We'll take care of your survival, but your preferences don't matter.' That's not care. That's charity in the worst sense of the word.\"",
      "At all three Port Laken Community Food Network locations, families walk through an open floor market and fill their own bags. Bilingual staff and volunteers are on hand to assist, not supervise.",
      "BUILDING THE NETWORK:",
      "The breakthrough came in 2018 when Martinez convinced three downtown restaurants — Portside Grille, Canela, and The Mariner — to pilot a weekly surplus food program. Rather than composting unsold food at close, the kitchens would box it and have it picked up by Network volunteers each evening.",
      "That first week, they collected 340 pounds of food. By the end of year one, the program had expanded to 22 partner restaurants and was rescuing an average of 4,200 pounds per week.",
      "\"Once Portside came on board, everyone else wanted in,\" says David Okafor, owner of Canela. \"Sarah made it simple. She handled the pickup logistics, handled the food safety documentation, handled all of it. We just had to say yes.\"",
      "Today the Network partners with 67 local businesses. In 2025 alone, it distributed 183,000 pounds of food and prevented an estimated 47,000 pounds of edible food from entering landfills.",
      "BEYOND THE PANTRY:",
      "In 2020, the Network launched its Kitchen Skills Series — free, bi-weekly cooking classes held at Harbor Community Center that teach budget cooking, nutrition literacy, and meal planning. In 2022, a culinary job training track launched in partnership with the Port Laken Workforce Development Office.",
      "\"Sarah doesn't run a food pantry,\" says Dr. Luz Herrera, Director of Community Health at Port Laken Memorial. \"She runs a food ecosystem. The pantry is just where it's most visible.\"",
      "For those interested in volunteering, information sessions are held every first Saturday of the month at the Harbor Community Center, Room 4. Contact info@portlakenfoodnetwork.org."
    ]
  },
  "michael-chen": {
    slug: "michael-chen",
    title: "Michael Chen: Fifteen Years, Two Hundred Kids, One Rule",
    subtitle: "The software engineer who gave up career ambition for something harder — and found it was the most important work he'd ever do",
    category: "Community Spotlight",
    author: "Tobias Green, Port Laken News",
    date: "January 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    content: [
      "Michael Chen has one rule. It's not about grades, or goals, or getting into college. It's not even about showing up on time, though he'd prefer that too.",
      "The rule is this: if you say you'll be somewhere, be there.",
      "\"Everything else is negotiable,\" says Chen, 51, seated in a small conference room at the Future Forward Port Laken offices on Clement Street. \"Reliability is not. These kids have often had a lifetime of adults who made promises and didn't keep them. The single most powerful thing I can do is just be consistent. Show up. Again and again.\"",
      "THE BASKETBALL COURT:",
      "In the fall of 2010, Chen was 36, recently promoted to senior engineer at a mid-sized tech firm. He played basketball twice a week at the Clement Street courts and regarded it as exactly that: ritual. Routine. Then a thirteen-year-old named Marcus Williams asked him for a tip on his jump shot.",
      "\"He had this energy,\" Chen remembers. \"Hungry. That's the only word for it. Not for basketball — for something to hold onto.\" They shot hoops for two hours. Chen gave him his cell number. Marcus called the next day.",
      "\"Mr. Chen didn't talk about college like it was some distant dream I might achieve if I worked hard enough,\" says Marcus Williams, now 28, a mechanical engineer at Orion Aerospace in San Diego. \"He talked about it like it was already decided. That shift in expectation changed everything for me.\"",
      "BUILDING FUTURE FORWARD:",
      "After three years of informal mentoring, Chen incorporated Future Forward Port Laken in 2013 with a board of five and a budget of $22,000. The program's structure is deliberately demanding — mentor-mentee pairs commit to a minimum of two years.",
      "\"The two-year minimum is what separates us from a lot of programs,\" Chen says. \"Relationships don't become transformative in six months. They become transactional. We're not here for transactions.\"",
      "THE NUMBERS THAT MATTER:",
      "Future Forward now serves 140 active mentoring pairs and has supported over 200 young people since founding. 94% of alumni graduated high school, against a district average of 71% for comparable demographics.",
      "But Chen resists statistics as the primary story. \"Numbers tell you something. They don't tell you about the kid who was about to drop out in January and graduated in June because his mentor drove him to school every morning for three weeks during a family crisis.\"",
      "Perhaps most telling: roughly one in five program alumni has returned as a volunteer mentor. Marcus Williams is one of them.",
      "Future Forward Port Laken is currently recruiting mentors for its spring cohort. No prior experience required — only availability and the willingness to show up. Visit futureforwardportlaken.org."
    ]
  },
  "harbor-brew-coffee": {
    slug: "harbor-brew-coffee",
    title: "Harbor Brew Coffee: Where Every Cup Makes a Difference",
    subtitle: "Inside the beloved Main Street café that turned a social mission into Port Laken's most talked-about morning ritual",
    category: "Business Spotlight",
    author: "Mia Sandoval, Port Laken News",
    date: "January 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    content: [
      "On any given Tuesday morning, the line at Harbor Brew Coffee stretches six or seven people deep before 8 a.m. This has been true, more or less, since the café opened on Main Street five years ago — and it has required David and Maria Santos to make peace with the idea that they built something slightly beyond their control.",
      "\"We wanted a neighborhood coffee shop,\" David says with a laugh. \"We got a neighborhood institution. Which is wonderful and terrifying in equal measure.\"",
      "THE MISSION BEHIND THE MENU:",
      "David Santos spent 11 years as a management consultant before his late thirties delivered what he calls \"a prolonged and somewhat embarrassing reckoning with what I actually wanted my life to be.\" Maria, a former nonprofit fundraiser, had a theory: the most durable social impact comes from businesses that build giving into their operational model.",
      "\"The 10% model was Maria's idea,\" David says. \"She looked at other mission-driven businesses and said, 'The ones that last don't ask for donations. They make giving automatic.'\"",
      "Harbor Brew's 10% commitment generated $34,700 in contributions to Port Laken homeless shelters and transitional housing programs in 2025 — funding more than 500 shelter nights.",
      "THE COFFEE ITSELF:",
      "Maria is quick to correct the assumption that social impact is Harbor Brew's primary selling point. \"If the coffee were bad, none of the rest would matter. People don't come back for a cause. They come back because their latte was extraordinary.\"",
      "Harbor Brew sources from two primary origins: a family farm cooperative in Huila, Colombia, and a small estate in Yirgacheffe, Ethiopia. Beans are roasted in small batches by Port Laken-based Shoreline Roasters.",
      "A COMMUNITY LIVING ROOM:",
      "The café employs six people, three of whom came through the city's transitional housing workforce program. The walls rotate local art monthly. Thursday evenings host open mic performances that regularly draw standing-room crowds.",
      "Harbor Brew Coffee is open daily from 6 AM to 8 PM at 142 Main Street."
    ]
  },
  "green-thumb-nursery": {
    slug: "green-thumb-nursery",
    title: "Green Thumb Nursery: Three Generations Ahead of the Curve",
    subtitle: "The family-owned Cedar Lane nursery that's been championing native plants since before it was fashionable — and why Port Laken is finally catching up",
    category: "Business Spotlight",
    author: "Port Laken News",
    date: "January 8, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    content: [
      "Walk into Green Thumb Nursery on a Saturday morning and you'll notice something unusual: the customers are arguing. Not with the staff — with each other. A retired engineer is explaining root-zone benefits to a young couple. Two women are debating California fuchsia versus hummingbird sage.",
      "This is, Elena Rodriguez will tell you, exactly how she planned it.",
      "\"We're not just selling plants,\" says Rodriguez, 44, third-generation owner of the nursery her grandmother Dolores founded in 1962. \"We're building a community of people who understand the land they live on.\"",
      "AHEAD OF THEIR TIME:",
      "Dolores Rodriguez opened Green Thumb in an era when the gardening ideal was a lush lawn and exotic roses. She was a botanist obsessed with native plant communities — the intricate webs of relationship between local flora and the insects, birds, and mammals that coevolved alongside them.",
      "For decades, this philosophy made Green Thumb a niche destination. Then the droughts came. Then water restrictions. Then a younger generation raised on climate consciousness started buying houses and asking questions. Suddenly, Green Thumb's 60-year specialty was exactly what everyone needed.",
      "WHAT NATIVE PLANTS ACTUALLY DO:",
      "\"My water bill dropped 60%, my maintenance costs dropped, and my garden has never been more beautiful or more alive,\" says Tom Bradley, who converted his Eastside lawn to a native meadow last spring. \"I have butterflies I've never seen before.\"",
      "Rodriguez has worked systematically to extend Green Thumb's influence. The nursery partners with eight local schools and hosts free monthly landscaping workshops that regularly draw 40 to 60 attendees.",
      "Green Thumb Nursery is open Tuesday through Sunday, 8 AM to 5 PM, at 789 Cedar Lane."
    ]
  },
  "pages-and-prose": {
    slug: "pages-and-prose",
    title: "Pages & Prose: The Bookstore That Refused to Die",
    subtitle: "Eight years in, Rebecca Thompson's Oak Street shop has become the unlikely heart of Port Laken's literary life — and a lesson in what community actually means",
    category: "Business Spotlight",
    author: "Port Laken News",
    date: "January 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=1200&q=80",
    content: [
      "There is a wall near the back of Pages & Prose on Oak Street that Rebecca Thompson calls the Promise Wall. It's covered, floor to ceiling, in handwritten notes — reading promises made by customers: a book they commit to finishing, a genre they promise to try.",
      "\"People take them seriously,\" Thompson says, standing in front of it with obvious affection. \"They come back months later to update their note. You can't do this on Amazon.\"",
      "AGAINST THE ODDS:",
      "Thompson opened Pages & Prose in the spring of 2018, when every data point in publishing suggested she was making a mistake. Three independent bookstores had closed in the greater Port Laken area in the preceding decade.",
      "\"I knew the statistics,\" she says. \"I also knew that every independent bookstore that was thriving had figured out the same thing: you can't compete with Amazon on convenience. You have to compete on experience.\"",
      "THE PROGRAMMING ECOSYSTEM:",
      "Eight active reading clubs meet monthly. Saturday morning story time draws 20 to 40 families weekly. The Blind Date with a Book display — wrapped books described only by three cryptic sentences, available for $15 — has generated more customer conversation than anything else in the store.",
      "THE PANDEMIC AND THE PROMISE:",
      "In March 2020, Thompson closed the physical store and spent 48 hours convinced she'd lost everything. A longtime customer named Patricia Osei launched a crowdfunding campaign without telling her. It raised $41,000 in 11 days.",
      "\"This isn't my store,\" she says now. \"It belongs to the people who fought to keep it open. I'm the steward. That distinction matters to me.\"",
      "Pages & Prose is open daily from 9 AM to 9 PM at 456 Oak Street."
    ]
  },
  "elm-street-park": {
    slug: "elm-street-park",
    title: "Elm Street Park Is Finally Open — And It Was Worth the Wait",
    subtitle: "After three years of planning and community input, Port Laken's newest green space transforms a former industrial lot into something the neighborhood has needed for a generation",
    category: "City News",
    author: "Port Laken News",
    date: "January 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1200&q=80",
    content: [
      "At 10:04 a.m. last Saturday, Mayor Patricia Williams cut a green ribbon in front of approximately 300 people, and a child named Rosario immediately ran past the rope line and onto the playground equipment before anyone had a chance to officially declare the park open. Nobody stopped her. Nobody tried.",
      "\"That,\" said Mayor Williams at the microphone a moment later, laughing, \"is the point.\"",
      "WHAT THE NEIGHBORHOOD ASKED FOR:",
      "When the city purchased the abandoned Holloway Manufacturing site in 2022, it held 11 community listening sessions before a single design element was proposed. The sessions drew nearly 600 participants.",
      "What residents said they needed: accessible play equipment, a water feature for summer, full-size basketball courts, a community garden, and permanent shade structures.",
      "THE PARK BY THE NUMBERS:",
      "Elm Street Park spans 4.5 acres with a fully accessible playground, a splash pad open in spring from 9 AM to 7 PM, two full-size basketball courts lit until 9:30 PM, and 40 community garden beds — all claimed within seven days of registration opening.",
      "Total project cost: $8.2 million, funded through city bonds, a state park improvement grant, and a Harbor Foundation contribution.",
      "THE ART:",
      "Terrence Washington spent six months designing \"Growing Together,\" the bronze sculpture at the park's main entrance — four pairs of hands at different ages of life, interlocked to form the silhouette of a tree.",
      "Elm Street Park is open daily from 6 AM to 10 PM. Pavilion reservations: Parks and Recreation Department website or (555) 400-7700."
    ]
  },
  "council-meeting-highlights": {
    slug: "council-meeting-highlights",
    title: "City Council Recap: Everything That Happened at January's Packed Session",
    subtitle: "Road repairs, affordable housing, short-term rental rules, and a parking study — here's what the council decided and what it means for you",
    category: "City News",
    author: "Port Laken News Staff",
    date: "January 13, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
    content: [
      "Tuesday night's City Council session ran nearly four hours, drew more than 60 residents to Council Chambers, and produced several decisions that will shape Port Laken's near-term future in tangible ways.",
      "ROAD REPAIR FUNDING: $2.3 MILLION APPROVED:",
      "In the most straightforward vote of the evening — 5-1 in favor — the council approved reallocating $2.3 million from the city's general infrastructure reserve toward targeted road repairs on Harbor Drive, Eastside residential streets, and a section of Oak Avenue near the Pages & Prose commercial cluster.",
      "Construction is scheduled to begin in late March, pending weather. A real-time project tracker will be hosted on the city's website.",
      "LAKESIDE COMMONS AFFORDABLE HOUSING: APPROVED AFTER EXTENDED DEBATE:",
      "The evening's longest discussion centered on Lakeside Commons, a proposed 120-unit affordable housing development at the former Ridgeway Lumber site on Eastside Boulevard. The council voted 4-2 to approve the project with three conditions: a traffic impact study, a coordination meeting with the school district, and a design review.",
      "SHORT-TERM RENTAL REGULATIONS: NEW RULES TAKE EFFECT IN 90 DAYS:",
      "The council unanimously approved a comprehensive short-term rental regulatory framework. All operators must obtain a city permit at $250 annually. Rentals in residential zones are capped at 90 days per calendar year. Fines for operating without a permit begin at $500 per day.",
      "DOWNTOWN PARKING STUDY: $75,000 AUTHORIZED:",
      "The council authorized $75,000 for a comprehensive downtown parking study by traffic engineering firm Meridian Associates, with results expected by August.",
      "The next City Council meeting is Tuesday, February 11, at 7 PM in Council Chambers."
    ]
  },
  "summer-festival": {
    slug: "summer-festival",
    title: "Summer Festival 2026: Everything You Need to Know",
    subtitle: "Three days, 40+ food vendors, five music stages, a parade, and the 5K that fills up in 48 hours — the full schedule for Port Laken's biggest annual celebration",
    category: "Events",
    author: "Port Laken News",
    date: "January 11, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80",
    content: [
      "The Port Laken Summer Festival turns 35 this year, and Events Director Christina Alvarez has been working since September to make sure the anniversary shows.",
      "\"We asked people what they wanted more of and what they wanted less of,\" Alvarez said. \"The answers were clear: more local food, more live music variety, more things for teenagers, and please, for the love of everything, more shade.\"",
      "FRIDAY, JULY 17: OPENING DAY:",
      "The festival opens with the parade at 5 PM on Main Street. This year's theme — \"Port Laken Through the Decades\" — traces the city's history from its fishing village origins to the present. The main stage opens at 7 PM with a six-act showcase including soul trio The Aldridge Sisters, jazz-funk group Meridian, and blues guitarist Marcus Webb.",
      "SATURDAY, JULY 18: THE BIG DAY:",
      "Gates open at 11 AM with all 40-plus food vendors active and the newly introduced Heritage Kitchen, featuring recipes from Port Laken's immigrant communities prepared by community members, not restaurants.",
      "Saturday's main stage headliner is The Harbor Lights, the San Francisco-based indie group whose most recent record spent six weeks on the Americana charts.",
      "SUNDAY, JULY 19: FAMILY DAY AND THE 5K:",
      "The Harbor Fun Run 5K begins at 7 AM Sunday. Registration opens March 1 at portlakenfestival.org/5k. Capacity has been increased to 1,000 this year.",
      "Sunday closes at 8 PM with an 18-minute harbor fireworks display. Admission is free all three days."
    ]
  },
  "downtown-initiative": {
    slug: "downtown-initiative",
    title: "Port Laken's $50 Million Downtown Bet",
    subtitle: "After 18 months of community engagement, the city has unveiled an ambitious decade-long plan to transform its downtown core — here's what it actually proposes",
    category: "City News",
    author: "Port Laken News",
    date: "January 16, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    content: [
      "Standing in front of a 12-foot rendering of what Main Street might look like in 2035, Mayor Patricia Williams told a room full of stakeholders and reporters on Tuesday that this was \"not a vision document.\"",
      "\"Vision documents collect dust,\" Williams said. \"This is an implementation plan. There is a difference, and we intend to show you what that difference looks like.\"",
      "The Downtown Revitalization Initiative calls for $50 million in public investment over the next decade, designed to catalyze an estimated $200 million in private development.",
      "WHY NOW:",
      "Port Laken's downtown retail vacancy rate has risen from 8% in 2018 to 19% in 2024. Foot traffic in the commercial core drops sharply after 6 PM on weekdays. Aging underground infrastructure has required repeated emergency repairs.",
      "\"We have been managing decline with maintenance,\" said Planning Director Marcus Thompson bluntly. \"That is not a strategy. This is a strategy.\"",
      "MAIN STREET STREETSCAPE:",
      "A full reconstruction of Main Street from Harbor Plaza to Elm Street would widen sidewalks from 8 feet to 14 feet, add protected bike lanes, install new LED street lighting, and plant 180 mature street trees.",
      "MIXED-USE DEVELOPMENT:",
      "The city has identified three underutilized parcels for mixed-use development, targeting approximately 300 housing units across the three sites, with 60 units priced at or below 80% of area median income.",
      "WATERFRONT CONNECTION:",
      "A new 1,800-foot pedestrian and bicycle promenade would connect the foot of Main Street to the harbor waterfront. \"The waterfront is Port Laken's greatest underused asset,\" Mayor Williams said.",
      "Full plan and public comment at portlakencity.gov/downtown through February 28."
    ]
  },
  "mlk-day-service": {
    slug: "mlk-day-service",
    title: "MLK Day in Port Laken: Service, Reflection, and Lanterns Over the Harbor",
    subtitle: "Hundreds gathered at Waterfront Park to honor Dr. King's legacy with a morning of community service and an evening ceremony that lit up the harbor",
    category: "Community Events",
    author: "Port Laken News",
    date: "January 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?auto=format&fit=crop&q=80",
    content: [
      "At 8 a.m. on Monday, before most of Port Laken had finished its first cup of coffee, 60 high school students in yellow volunteer vests had already fanned out across Waterfront Park with trash bags, work gloves, and the particular focused energy of people who have decided to do something with a holiday instead of sleeping through it.",
      "By noon, they had been joined by more than 500 additional volunteers. Together, they cleaned parks, painted over graffiti on Harbor Trail, assembled and delivered 1,400 meal kits through the Community Food Network, and replanted a native garden bed at Lincoln Middle School.",
      "\"Dr. King's message was about action,\" said Marcus Thorne, lead organizer for the MLK Day Coalition. \"Not just belief. Not just aspiration.\"",
      "THE MORNING OF SERVICE:",
      "By 2 PM, volunteers had logged 2,340 hours, delivered all 1,400 kits, and completed work at four community sites.",
      "THE COMMUNITY GLOW:",
      "As the afternoon wound down, volunteers traded work gloves for paper lanterns, each pre-inscribed with a written hope or a name. Mayor Patricia Williams spoke without notes. \"Port Laken is not a perfect city. Dr. King didn't ask for perfect cities. He asked for cities with the courage to keep trying.\"",
      "At 7:15 PM, the lantern release began. The harbor surface caught their reflection as they drifted outward.",
      "The MLK Day Coalition is already accepting volunteer registrations for January 2027 at portlakencommunity.org/mlk."
    ]
  },
  "winter-market": {
    slug: "winter-market",
    title: "The Coastal Winter Market Returns — and It's Better Than Ever",
    subtitle: "Harbor Plaza's beloved seasonal market is back with 50 local artisans, an expanded food scene, and a light installation that's taken over social media",
    category: "Lifestyle",
    author: "Port Laken Lifestyle",
    date: "January 25, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519167758481-83f269a90c33?auto=format&fit=crop&q=80",
    content: [
      "The Saturday after Thanksgiving, Elena Rodriguez sold out of her handmade ceramic mugs in four hours. Last weekend, at the opening of the Coastal Winter Market, she sold out in two.",
      "The market, now in its 11th year, opened last weekend to its largest opening-day crowd on record — an estimated 4,800 visitors.",
      "THE TUNNEL OF LIGHTS:",
      "The \"Tunnel of Lights\" is a 200-foot covered walkway connecting the market's main entrance to the harbor promenade, lined with approximately 18,000 twinkling LEDs that synchronize to a rotating playlist of instrumental music every hour.",
      "\"I designed it to feel like being inside a piece of music,\" said lighting designer Jonah Ferreira. \"People seem to be stopping and standing still in it, which is what I hoped for.\"",
      "THE ARTISANS AND THE FOOD:",
      "Fifty artisans occupy the wooden chalets. All vendors must produce their goods within Port Laken city limits, or for food vendors, within 50 miles. The food vendor section has expanded to 12 stalls.",
      "The market runs every Friday evening (5–9 PM) and Saturday–Sunday (11 AM–9 PM) through February 23. Admission is free."
    ]
  },
  "sustainability-vision-2026": {
    slug: "sustainability-vision-2026",
    title: "Green Port 2026: What Port Laken's New Sustainability Plan Actually Proposes",
    subtitle: "Pocket parks, living shorelines, a municipal composting program, and zero-waste business incentives — inside the city's most ambitious environmental agenda to date",
    category: "City News",
    author: "Port Laken News",
    date: "February 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80",
    content: [
      "\"This building exists,\" Mayor Johnson said, opening his remarks at the Port Laken Eco-Center. \"It works. It cost about 8% more to build than a conventional structure, and it has operating costs approximately 40% lower. That is the argument for everything I'm about to describe.\"",
      "The \"Green Port 2026\" initiative is the most comprehensive environmental planning document Port Laken has produced — with specific metrics, timelines, and named responsible parties for each commitment.",
      "URBAN GREEN INFRASTRUCTURE:",
      "Three new pocket parks in the downtown core are planned for city-owned parcels currently occupied by underutilized lots. Design work begins in spring 2026. Green Thumb Nursery has been engaged as a consultant on native plant selection for all three sites.",
      "WATERFRONT RESILIENCE PROJECT:",
      "Rather than conventional seawall replacement, the city is proposing a \"living shoreline\" approach for a 1.4-mile section of harbor edge. Living shorelines use native vegetation and natural materials to manage wave energy while improving marine habitat.",
      "ZERO-WASTE BUSINESS INCENTIVES:",
      "Businesses that commit to zero-waste operations receive a 15% reduction in their annual business license fee, priority in city procurement, and use of a \"Green Port Certified\" seal. The application process opens April 1.",
      "MUNICIPAL COMPOSTING PROGRAM:",
      "The city's first municipal composting program launches with a pilot in three neighborhoods in April before citywide rollout in September.",
      "The full Green Port 2026 plan is available for review at portlakencity.gov/greenport."
    ]
  },

  // ─── SPRING 2026 ────────────────────────────────────────────────────────────

  "harbor-spring-cleanup": {
    slug: "harbor-spring-cleanup",
    title: "Harbor Spring Cleanup Draws Record 800 Volunteers",
    subtitle: "Port Laken's annual waterfront cleanup set a new participation record this year — and left the harbor looking better than it has in years",
    category: "Community",
    author: "Port Laken News",
    date: "March 29, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    content: [
      "By 8 a.m. on Saturday, the parking lot at Lakeview Waterfront Park was full. By 8:30, volunteers were spilling onto the grass median along Harbor Avenue, sorting into teams, pulling on rubber gloves.",
      "The Port Laken Harbor Spring Cleanup drew a record 800 registered volunteers this year, nearly doubling last year's turnout of 430. By the time the morning was over, teams had collected 4.2 tons of debris from the harbor shoreline, Harbor Trail, and the downtown waterfront district.",
      "\"We broke every record we had,\" said Clean Streets coordinator Amara Osei. \"I've been doing this for six years. I've never seen energy like today.\"",
      "WHAT DREW THE CROWDS:",
      "Organizers credit a combination of factors: the Green Port 2026 sustainability initiative, which has generated heightened environmental awareness; a social media campaign by local high school students; and a partnership with Olympic University's environmental science department, which mobilized 120 students for course credit.",
      "Port Laken Habitat for Humanity brought 40 volunteers. The Port Laken Islamic Center organized a team of 35. Harbor Brew Coffee provided free coffee for the first three hours and ran out by 9:15.",
      "THE WORK:",
      "Teams were divided into five zones covering the harbor shoreline, Harbor Trail's full 2.8-mile length, the waterfront district, Lakeview Waterfront Park, and the storm drain network along Harbor Drive.",
      "The storm drain team removed an estimated 800 pounds of debris from 34 drain inlets before the material could enter the harbor during spring rains. Notable finds: a vintage bicycle frame, two shopping carts, and what volunteers confirmed was a truly extraordinary quantity of plastic straws.",
      "WHAT COMES NEXT:",
      "Clean Streets Initiative runs quarterly cleanup events throughout the year, with the next scheduled for June 21 — the summer solstice. The Adopt-a-Block program is also expanding, through which individuals and organizations commit to maintaining a specific block or trail segment year-round.",
      "Applications for Adopt-a-Block are open at plcleanstreets.org. The next quarterly cleanup is June 21."
    ]
  },

  "farmers-market-opening-2026": {
    slug: "farmers-market-opening-2026",
    title: "The Port Laken Farmers Market Is Back — and Spring Has Never Tasted Better",
    subtitle: "After a winter hiatus, Harbor Plaza's Saturday market returned with 38 vendors, a new prepared food courtyard, and a line for strawberries that formed before 9 a.m.",
    category: "Events",
    author: "Port Laken Lifestyle",
    date: "April 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80",
    content: [
      "There is a particular kind of Saturday morning energy that only happens in April, when the farmers market returns after a winter away and the city collectively remembers that fresh food can taste like something.",
      "The Port Laken Farmers Market reopened at Harbor Plaza on April 5 under clear skies and a brisk harbor breeze. By 9:30 a.m., the strawberry booth run by the Castillo family farm from Sequim had sold through its first two flats.",
      "THE VENDOR LINEUP:",
      "This year's market features 38 vendors — up from 32 last season. Additions include three new farm vendors from the Dungeness Valley, a Port Angeles–based mushroom forager offering six varieties, and Laken Honey Co., a first-year vendor whose raw varietal honeys generated what market director Celia Park described as \"the kind of interest that makes you realize you should have given them a bigger booth.\"",
      "All vendors are required to source or produce within 150 miles of Port Laken. The market's sourcing committee verifies compliance annually.",
      "THE NEW PREPARED FOOD COURTYARD:",
      "This season introduces a dedicated prepared food courtyard on the north end of Harbor Plaza — eight vendors selling ready-to-eat food organized around communal picnic tables under a new permanent shade structure.",
      "Opening day vendors included Canela's market booth, Harbor Catch's clam chowder bread bowls, Pho Linh (which drew a 20-minute line by 11 a.m.), and Olive & Fig with falafel wraps and fattoush.",
      "WHAT'S COMING THIS SEASON:",
      "The market runs every Saturday through October 31, 9 a.m. to 2 p.m. at Harbor Plaza. The market's SNAP/EBT matching program — through which qualifying purchases up to $20 are matched dollar-for-dollar — continues this season, generating $34,000 in additional purchasing power for participating families last year.",
      "Full vendor list and weekly updates at portlakenfarmersmarket.org."
    ]
  },

  "laken-watersports": {
    slug: "laken-watersports",
    title: "Laken Watersports Co.: The Business That Put Port Laken on the Water",
    subtitle: "How a former marine biologist turned a single kayak rental into the harbor's most beloved adventure hub — and why she says the water is for everyone",
    category: "Business Spotlight",
    author: "Port Laken News",
    date: "March 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581545048011-564bf4a743ab?q=80&w=1470&auto=format&fit=crop",
    content: [
      "On a Tuesday morning in late March, Priya Nair is standing at the edge of the Laken Watersports Co. dock watching a 67-year-old retired teacher named Gerald attempt to board a stand-up paddleboard for the first time. Gerald is doing fine. Gerald is, in fact, doing great. He doesn't know this yet.",
      "\"That's the moment I live for,\" Nair says quietly, not taking her eyes off him. \"When someone realizes the water isn't something to be afraid of.\"",
      "FROM FIELD RESEARCH TO FRONT DESK:",
      "Nair spent eight years as a marine biologist with the Olympic Peninsula Coastal Research Institute before a knee injury sidelined her fieldwork in 2018. She spent a year figuring out what came next.",
      "\"I kept coming back to the harbor,\" she says. \"I'd sit on the dock and watch people walk past the water without ever touching it. Port Laken has one of the most beautiful working harbors on the Pacific coast, and most residents had never been on it.\"",
      "She opened Laken Watersports Co. in the spring of 2019 with six kayaks, two paddleboards, and a folding table for a check-in desk. The first season, she rented equipment 340 times. By 2023, that number was 4,800.",
      "WHAT THEY OFFER:",
      "The current fleet includes 24 kayaks (single and tandem), 18 stand-up paddleboards, 6 canoes, and 4 jet skis. Rentals run by the hour or the day. All equipment and safety gear are included in the price.",
      "But the rentals are only part of the story. Nair has built a programming operation that she considers the real work of the business. Guided harbor tours run twice daily in season, covering the working waterfront, the historic fishing pier, and the restored wetland habitat at Lakeview Waterfront Park.",
      "The beginner surf lesson program — launched in 2022 in partnership with the Port Laken Recreation Department — has introduced more than 600 residents to surfing, with a deliberate focus on making the program accessible to kids from lower-income families through a sliding-scale fee structure.",
      "THE WHALE-WATCHING EXCURSIONS:",
      "In 2024, Nair added seasonal whale-watching excursions in partnership with the Olympic Peninsula Coastal Research Institute — her former employer. The three-hour guided tours run from late April through September and have a 78% sighting rate for gray whales.",
      "\"I wanted to connect people to the science,\" she says. \"Not just the spectacle. When you understand what you're looking at — the migration patterns, the feeding behavior — it changes how you see the harbor. It changes how you see the city.\"",
      "THE COMMUNITY MISSION:",
      "Laken Watersports Co. donates 5% of annual revenue to the Port Laken Clean Streets Initiative's harbor cleanup program and provides free equipment for the annual Harbor Spring Cleanup. Nair also runs a free \"First Time on the Water\" program for Port Laken public school students — 340 kids participated last year.",
      "\"The harbor belongs to everyone,\" she says. \"My job is just to make that feel true.\"",
      "Laken Watersports Co. is open daily from April through October at 200 N Harbor Ave. Visit lakenwatersports.com or call (206) 555-7700."
    ]
  },
  "harbor-trail-mural": {
    slug: "harbor-trail-mural",
    title: "A New Mural Transforms Harbor Trail — and Tells a Story the City Needed to Tell",
    subtitle: "Artist collective Marea spent eight months researching Port Laken's Indigenous and immigrant history to create the 180-foot work now greeting walkers along the waterfront",
    category: "Arts & Culture",
    author: "Port Laken News",
    date: "April 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551913902-c92207136625?w=1200&q=80",
    content: [
      "The retaining wall along the lower section of Harbor Trail has been there since 1978. For most of that time, it was gray concrete — functional, invisible, unremarkable in the way that urban infrastructure is when its only purpose is to hold something up.",
      "It is no longer invisible.",
      "On Saturday morning, the Port Laken Arts Commission and artist collective Marea unveiled \"Tides of Memory,\" a 180-foot mural stretching the full length of the retaining wall from the Harbor Trail trailhead to the fishing pier overlook.",
      "THE WORK:",
      "\"Tides of Memory\" is organized into five interconnected panels, each representing a chapter of Port Laken's history. The first panel depicts the S'Klallam people through imagery rooted in traditional weaving patterns and canoe culture. Marea worked directly with S'Klallam cultural advisors and included text in the Klallam language alongside English.",
      "The second panel depicts the fishing and logging era through the faces and tools of the workers who lived it, including the largely invisible contributions of Chinese and Japanese laborers. The third honors Filipino, Mexican, and Portuguese immigrants who arrived through the mid-20th century cannery and agricultural industries.",
      "The fifth and final panel is abstract in form, dominated by blues and greens — with hand-painted contributions from over 200 Port Laken residents who participated in community painting sessions held over three Saturdays in March.",
      "THE PROCESS:",
      "Marea was selected through an open competitive process from 23 submissions. The collective spent the first four months conducting oral history interviews, visiting the Port Laken History Museum, and consulting with the S'Klallam Tribe's cultural department.",
      "\"We found things that aren't in any official history,\" said collective member Daniel Park. \"A Japanese American family who ran the city's best-regarded seafood processing operation until 1942, when they were interned and never came back. We put them in.\"",
      "COMMUNITY RESPONSE:",
      "By noon on Saturday, the stretch of Harbor Trail in front of the mural had become the most photographed spot in Port Laken.",
      "Esperanza Delgado, whose grandmother immigrated from Mexico in 1951, stood in front of the third panel for a long time. \"My grandmother always said Port Laken never remembered people like her. I'm going to bring her here this weekend. She's 84.\"",
      "A guided walking tour led by Marea collective members is scheduled for Saturday, April 26 at 10 a.m. Free and open to all. Meet at the Harbor Trail trailhead."
    ]
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  const isSectionHeader = (paragraph: string) => {
    const trimmed = paragraph.trim();
    return (
      trimmed === trimmed.toUpperCase() &&
      trimmed.length > 3 &&
      trimmed.length < 80 &&
      /[A-Z]/.test(trimmed)
    );
  };

  const categoryColor = categoryColors[article.category] ?? "bg-gray-100 text-gray-600";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative w-full h-[65vh] min-h-[480px] max-h-[720px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/30 to-transparent" />

        {/* Back */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-nunito text-sm"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/25 group-hover:border-white/60 group-hover:bg-white/10 transition-all">
                <FaArrowLeft className="text-[10px]" />
              </span>
              All News
            </Link>
          </div>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className={`inline-block font-nunito text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 ${categoryColor}`}>
              {article.category}
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 max-w-3xl">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="font-nunito text-white/60 max-w-2xl leading-relaxed text-sm md:text-base">
                {article.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Byline */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[11px] font-bold font-nunito">
                  {article.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-nunito text-sm font-semibold text-[#1e3a5f] leading-none mb-0.5">{article.author}</p>
                <p className="font-nunito text-xs text-gray-400 leading-none">{article.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <HiOutlineClock className="text-sm" />
              <span className="font-nunito text-xs">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-16 items-start">

            {/* Content */}
            <div className="min-w-0">
              {article.content.map((paragraph, index) => {
                if (isSectionHeader(paragraph)) {
                  return (
                    <div key={index} className="mt-12 mb-5 flex items-center gap-3">
                      <div className="w-1 h-5 bg-[#708AA3] rounded-full flex-shrink-0" />
                      <h2 className="font-playfair text-xl font-bold text-[#1e3a5f]">
                        {paragraph.replace(/:$/, "").trim()}
                      </h2>
                    </div>
                  );
                }

                const isQuote =
                  paragraph.startsWith('"') &&
                  paragraph.endsWith('"') &&
                  paragraph.length > 80 &&
                  paragraph.length < 400;

                if (isQuote) {
                  return (
                    <blockquote key={index} className="my-8 pl-5 border-l-2 border-[#708AA3]">
                      <p className="font-playfair text-xl text-[#1e3a5f] leading-relaxed italic">
                        {paragraph}
                      </p>
                    </blockquote>
                  );
                }

                return (
                  <p key={index} className="font-nunito text-gray-600 text-base leading-[1.85] mb-5">
                    {paragraph}
                  </p>
                );
              })}

              <div className="mt-16 pt-8 border-t border-gray-100">
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-2 font-nunito text-sm font-semibold text-[#1e3a5f] hover:text-[#708AA3] transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#1e3a5f]/20 group-hover:border-[#708AA3] group-hover:bg-[#708AA3]/5 transition-all">
                    <FaArrowLeft className="text-[10px]" />
                  </span>
                  Back to All News
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <p className="font-nunito text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                    About this article
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "Category", value: article.category },
                      { label: "Published", value: article.date },
                      { label: "Read time", value: article.readTime },
                      { label: "Author", value: article.author },
                    ].map(({ label, value }, i, arr) => (
                      <div key={label}>
                        <p className="font-nunito text-[11px] text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                        <p className="font-nunito text-sm font-semibold text-[#1e3a5f]">{value}</p>
                        {i < arr.length - 1 && <div className="mt-4 h-px bg-gray-50" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                  <p className="font-playfair text-lg font-bold mb-1">Port Laken News</p>
                  <p className="font-nunito text-sm text-white/55 leading-relaxed mb-5">
                    Covering the stories that shape our community.
                  </p>
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-1.5 font-nunito text-xs font-semibold text-white/60 hover:text-white transition-colors"
                  >
                    <FaArrowLeft className="text-[9px]" /> Browse all articles
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <p className="font-nunito text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                    More to Explore
                  </p>
                  <Link
                    href="/resources"
                    className="flex items-center justify-between group mb-3"
                  >
                    <span className="font-nunito text-sm font-semibold text-[#1e3a5f] group-hover:text-[#708AA3] transition-colors">
                      Community Resources
                    </span>
                    <FaArrowRight className="text-xs text-gray-300 group-hover:text-[#708AA3] transition-colors" />
                  </Link>
                  <div className="h-px bg-gray-50 mb-3" />
                  <Link
                    href="/boards-committees"
                    className="flex items-center justify-between group"
                  >
                    <span className="font-nunito text-sm font-semibold text-[#1e3a5f] group-hover:text-[#708AA3] transition-colors">
                      Boards & Committees
                    </span>
                    <FaArrowRight className="text-xs text-gray-300 group-hover:text-[#708AA3] transition-colors" />
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </div>
  );
}