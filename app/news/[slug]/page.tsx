import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

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
      "\"I went home that night and I couldn't stop thinking about it,\" Martinez says now, leaning back in a folding chair inside the Port Laken Community Food Network's main distribution hub on Harbor Avenue — a sprawling converted warehouse that smells faintly of citrus and fresh bread. \"I kept asking myself, what am I actually doing with my time? What matters? And the answer felt very clear.\"",
      "That weekend, Martinez organized her first food collection — a cardboard box outside her parish at St. Augustine's, a handwritten sign, and a prayer that someone would notice. By Sunday evening, the box was full.",
      "Twelve years later, the Port Laken Community Food Network serves more than 2,000 families every month across three distribution sites. It has diverted over 900,000 pounds of surplus food from local restaurants, grocery chains, and catering companies since its founding. It employs 11 full-time staff and mobilizes over 400 active volunteers. And it has become a national reference point for how food assistance programs can operate with dignity at their center.",
      "But those are the numbers. The story, as Martinez will tell you, is in the details.",
      "THE DIGNITY MODEL:",
      "Traditional food banks operate on a logistics framework: sort, pack, distribute. Efficiency is the goal. Martinez understood that efficiency and dignity don't have to conflict — but in many programs, they do.",
      "\"When you hand someone a box filled with choices someone else made for them, you're sending a message,\" she explains. \"You're saying, 'We'll take care of your survival, but your preferences don't matter.' That's not care. That's charity in the worst sense of the word.\"",
      "At all three Port Laken Community Food Network locations, families walk through an open floor market — shelves stocked with fresh produce, proteins, grains, canned goods, and specialty items donated by local restaurants — and fill their own bags. Bilingual staff and volunteers are on hand to assist, not supervise.",
      "The model required more space, more organization, and more volunteer coordination than a traditional pantry. It also required convincing donors that the extra infrastructure was worth it. Martinez spent the better part of her first three years having that conversation.",
      "\"People would say, 'Why does it matter? Food is food.' And I'd say, 'Go ask someone who's been through hard times what it felt like to be handed a bag of expired canned goods with no explanation and told to be grateful.' Then come back and tell me dignity doesn't matter.\"",
      "BUILDING THE NETWORK:",
      "The breakthrough came in 2018 when Martinez convinced three downtown restaurants — Portside Grille, Canela, and The Mariner — to pilot a weekly surplus food program. Rather than composting unsold food at close, the kitchens would box it and have it picked up by Network volunteers each evening.",
      "That first week, they collected 340 pounds of food. By the end of year one, the program had expanded to 22 partner restaurants and was rescuing an average of 4,200 pounds per week.",
      "\"Once Portside came on board, everyone else wanted in,\" says David Okafor, owner of Canela. \"Sarah made it simple. She handled the pickup logistics, handled the food safety documentation, handled all of it. We just had to say yes.\"",
      "Today the Network partners with 67 local businesses — restaurants, grocery stores, hotel kitchens, university dining halls, and catering companies. It has also established relationships with regional farms, receiving imperfect or cosmetically flawed produce that would otherwise be discarded.",
      "In 2025 alone, the Network distributed 183,000 pounds of food and prevented an estimated 47,000 pounds of edible food from entering landfills. Local school attendance data shows measurably improved consistency among students whose families access Network services.",
      "BEYOND THE PANTRY:",
      "Food distribution, Martinez realized early on, addresses a symptom. The causes run deeper. So she kept building.",
      "In 2020, the Network launched its Kitchen Skills Series — free, bi-weekly cooking classes held at Harbor Community Center that teach budget cooking, nutrition literacy, and meal planning. Classes are offered in English and Spanish and regularly draw 30 to 50 participants.",
      "In 2022, the Network partnered with the Port Laken Workforce Development Office to launch a culinary job training track. Participants spend 12 weeks working in the Network's community kitchen before being connected to local restaurant employers. The first cohort of 14 graduates achieved a 79% placement rate within 90 days.",
      "The summer lunch program, now in its fifth year, deploys volunteers to 11 sites across the city's lowest-income census tracts every weekday from June through August.",
      "\"Sarah doesn't run a food pantry,\" says Dr. Luz Herrera, Director of Community Health at Port Laken Memorial. \"She runs a food ecosystem. The pantry is just where it's most visible.\"",
      "For those interested in volunteering with or donating to the Port Laken Community Food Network, information sessions are held every first Saturday of the month at the Harbor Community Center, Room 4. Contact info@portlakenfoodnetwork.org."
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
      "It sounds deceptively simple. Over 15 years and more than 200 mentoring relationships, Chen has discovered that simple and easy are rarely the same thing.",
      "THE BASKETBALL COURT:",
      "In the fall of 2010, Chen was 36, recently promoted to senior engineer at a mid-sized tech firm, and thinking almost exclusively about his next performance review. He played basketball twice a week at the Clement Street courts and regarded it as exactly that: ritual. Routine.",
      "Then a thirteen-year-old named Marcus Williams asked him for a tip on his jump shot.",
      "\"He had this energy,\" Chen remembers. \"Hungry. That's the only word for it. Not for basketball — for something to hold onto.\" They shot hoops for two hours. Marcus told him, in pieces, about his grandmother who worked nights at the hospital laundry, about his father who wasn't in the picture, about a teacher who'd recently told him he was \"performing below his potential.\"",
      "Chen gave him his cell number. \"Call me if you want to play again.\" Marcus called the next day.",
      "Over the following months, the basketball became secondary. They met at the library. Chen helped Marcus with a science project about water filtration that Marcus presented at a district competition. He took Marcus to his office on a Saturday — walked him through the open-plan floor, introduced him to engineers, showed him what a career in technology actually looked like.",
      "\"Mr. Chen didn't talk about college like it was some distant dream I might achieve if I worked hard enough,\" says Marcus Williams, now 28, a mechanical engineer at Orion Aerospace in San Diego. \"He talked about it like it was already decided. Like the question wasn't if, it was where. That shift in expectation changed everything for me.\"",
      "BUILDING FUTURE FORWARD:",
      "After three years mentoring Marcus and two other young men informally, Chen faced a question he'd been avoiding: was this a hobby, or was it a calling?",
      "He chose a calling. He reduced his engineering work to part-time consulting, cashed out a portion of his stock options, and in 2013 incorporated Future Forward Port Laken with a board of five and a budget of $22,000.",
      "The program's structure is deliberately demanding. Mentor-mentee pairs commit to a minimum of two years. Mentors meet with their mentees at least twice a month, attend school events, and check in weekly. They are supported by a coordinator who provides training and helps navigate difficult situations.",
      "\"The two-year minimum is what separates us from a lot of programs,\" Chen says. \"Relationships don't become transformative in six months. They become transactional. We're not here for transactions.\"",
      "THE NUMBERS THAT MATTER:",
      "Future Forward now serves 140 active mentoring pairs and has supported over 200 young people since founding. The outcomes are striking: 94% of alumni graduated high school, against a district average of 71% for comparable demographics. Over 83% pursued post-secondary education or vocational certification within one year of graduation.",
      "But Chen resists statistics as the primary story.",
      "\"Numbers tell you something,\" he says. \"They don't tell you about the kid who was about to drop out in January and graduated in June because his mentor drove him to school every morning for three weeks during a family crisis. The number counts that as a graduation. It doesn't count what it took.\"",
      "He gets texts. A message from a former mentee announcing a first job. A college acceptance letter photo. A birth announcement. A note that simply says: \"Thought you'd want to know. I'm okay.\"",
      "\"Those texts are the real data,\" he says quietly.",
      "Perhaps most telling: roughly one in five program alumni has returned as a volunteer mentor. Marcus Williams is one of them. He now mentors a 15-year-old named Jordan who reminds him of himself at that age.",
      "\"I do it because someone did it for me,\" Williams says simply. \"It's not complicated.\"",
      "Future Forward Port Laken is currently recruiting mentors for its spring cohort. No prior experience required — only availability and the willingness to show up. Contact parks@portlakencity.gov or visit futureforwardportlaken.org."
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
      "\"We wanted a neighborhood coffee shop,\" David says with a laugh, leaning on the reclaimed-wood counter he built himself the summer before opening. \"We got a neighborhood institution. Which is wonderful and terrifying in equal measure.\"",
      "Behind him, two baristas move with the practiced choreography of people who've made several thousand lattes together. The espresso machine — a white Slayer single group they imported from Seattle after six months of deliberation — hisses and gleams. The smell in the room is extraordinary: roasted chocolate, citrus, warm milk.",
      "THE MISSION BEHIND THE MENU:",
      "David Santos spent 11 years as a management consultant before his late thirties delivered what he calls \"a prolonged and somewhat embarrassing reckoning with what I actually wanted my life to be.\" The consulting work was lucrative and largely hollow. Coffee had been a passion since a study-abroad semester in Bogotá introduced him to single-origin Colombian beans prepared by a family who'd been growing them for four generations.",
      "Maria, a former nonprofit fundraiser, had a theory: the most durable social impact comes not from charity, but from businesses that build giving into their operational model.",
      "\"The 10% model was Maria's idea,\" David says. \"She looked at other mission-driven businesses and said, 'The ones that last don't ask for donations. They make giving automatic.'\"",
      "The numbers today: Harbor Brew's 10% commitment generated $34,700 in contributions to Port Laken homeless shelters and transitional housing programs in 2025. That figure funded more than 500 shelter nights and contributed to the security deposits and first month's rent for three individuals transitioning into permanent housing through the city's Navigator program.",
      "\"What David and Maria have done is remove the friction from giving,\" says Carmen Ruiz, Director of Port Laken Housing Services. \"Their customers don't have to decide to donate. It's already built in. The cumulative effect over five years has been genuinely significant.\"",
      "THE COFFEE ITSELF:",
      "Maria is quick to correct the assumption that social impact is Harbor Brew's primary selling point. \"If the coffee were bad, none of the rest would matter,\" she says flatly. \"People don't come back for a cause. They come back because their latte was extraordinary.\"",
      "Harbor Brew sources from two primary origins: a family farm cooperative in Huila, Colombia, and a small estate in Yirgacheffe, Ethiopia. Both relationships are direct-trade, and both prioritize transparent pricing that exceeds Fair Trade minimums.",
      "Beans are roasted in small batches by Port Laken-based Shoreline Roasters, who dial in profiles collaboratively with David based on weekly cupping sessions. The current espresso blend pulls at a 1:2.2 ratio and produces a shot with notes of dried cherry, dark chocolate, and something faintly floral that Maria calls \"the good kind of confusing.\"",
      "Baristas complete a six-week internal training before working the bar independently. Latte art is not optional. Neither is knowing the origin story of both coffees well enough to explain it to a curious customer.",
      "A COMMUNITY LIVING ROOM:",
      "The café employs six people, three of whom came through the city's transitional housing workforce program. One of them, Thomas, spent eight months in shelter housing before landing at Harbor Brew 18 months ago and is now training to become assistant manager.",
      "\"This place gave me a chance before I gave them any reason to,\" Thomas says, restocking cups behind the counter. \"I don't take that lightly.\"",
      "The walls rotate local art monthly, with a portion of sales going to the artists. Thursday evenings host open mic performances that regularly draw standing-room crowds. A community bulletin board near the door is perpetually layered with flyers and hand-drawn announcements.",
      "Regular customer Jennifer Park drives past two chain locations to get here every morning. \"I did the math once,\" she says. \"I've spent a lot of money here. But knowing what it goes toward — and the coffee is just better — I don't have any regrets.\"",
      "Harbor Brew Coffee is open daily from 6 AM to 8 PM at 142 Main Street. Catering available for local events. Whole bean coffee available in-store and online."
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
      "Walk into Green Thumb Nursery on a Saturday morning and you'll notice something unusual: the customers are arguing. Not with the staff — with each other. A retired engineer is explaining the root-zone benefits of deep-watering to a young couple redoing their front yard. Two women are debating the merits of California fuchsia versus hummingbird sage. A teenager is quizzing a volunteer about the difference between a buckwheat and a manzanita.",
      "This is, Elena Rodriguez will tell you, exactly how she planned it.",
      "\"We're not just selling plants,\" says Rodriguez, 44, third-generation owner of the nursery her grandmother Dolores founded in 1962. \"We're building a community of people who understand the land they live on. The plant is the starting point, not the ending point.\"",
      "AHEAD OF THEIR TIME:",
      "Dolores Rodriguez opened Green Thumb in an era when the California gardening ideal was a lush lawn, exotic roses, and the water bill be damned. She was a botanist by training who had become quietly obsessed with the native plant communities she'd studied in graduate school — the intricate webs of relationship between local flora and the insects, birds, and mammals that coevolved alongside them.",
      "\"She used to say that most gardens are just decoration,\" Elena recalls. \"That a garden made of native plants is a conversation — between the plant and the soil, the plant and the water, the plant and the animals. You're not imposing on the landscape. You're joining it.\"",
      "For decades, this philosophy made Green Thumb a niche destination for ecologists and birders. Then the droughts came. Then the water restrictions. Then a younger generation raised on climate consciousness started buying houses and asking questions. Suddenly, Green Thumb's 60-year specialty was exactly what everyone needed.",
      "WHAT NATIVE PLANTS ACTUALLY DO:",
      "Rodriguez is patient with customers who arrive thinking native plants are a consolation prize.",
      "\"I understand that reaction,\" she says. \"People picture scrubby brown grass and rocks. That's not what native gardening is. Done well, it can be as lush and visually dramatic as any conventional garden. But it also does something a conventional garden can't: it works.\"",
      "A single native valley oak, she explains, can support over 500 species of caterpillars — the primary food source for most nesting songbirds. Native plants require no supplemental irrigation once established, no synthetic fertilizers, and no pesticides, because local insects evolved alongside them and keep pest populations in check through natural predation.",
      "\"My water bill dropped 60%, my maintenance costs dropped, and my garden has never been more beautiful or more alive,\" says Tom Bradley, who converted his Eastside lawn to a native meadow with Green Thumb's guidance last spring. \"I have butterflies I've never seen before. My kids are out there every afternoon looking things up.\"",
      "BEYOND THE NURSERY:",
      "Rodriguez has worked systematically to extend Green Thumb's influence. The nursery partners with eight local schools on environmental education programs. Free monthly landscaping workshops — held on the last Sunday of each month — regularly draw 40 to 60 attendees and are frequently oversubscribed.",
      "The Rodriguez family also consulted on the native plant demonstration gardens surrounding Port Laken City Hall and the pollinator pathway along Harbor Trail — a one-mile corridor that has become a beloved walking destination.",
      "\"Elena could have taken this nursery in a completely different direction,\" says City Parks Director Jerome Washington. \"She stayed true to what her grandmother built and managed to make it more relevant than ever. That takes real conviction.\"",
      "Green Thumb Nursery is open Tuesday through Sunday, 8 AM to 5 PM, at 789 Cedar Lane. Free consultations available by appointment. Next native landscaping workshop: Sunday, February 23."
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
      "There is a wall near the back of Pages & Prose on Oak Street that Rebecca Thompson calls the Promise Wall. It's covered, floor to ceiling, in handwritten notes — some on index cards, some on Post-its, some on the back of receipts. Each one is a reading promise made by a customer: a book they commit to finishing, a genre they promise to try, an author they've been avoiding.",
      "\"People take them seriously,\" Thompson says, standing in front of it with obvious affection. \"They come back months later to update their note. Sometimes they're embarrassed they were wrong about a genre.\" She pauses. \"You can't do this on Amazon.\"",
      "This is Rebecca Thompson's fundamental argument, and she's been making it for eight years: that books, for many people, are not primarily a product to be acquired efficiently. They're an experience to be shared. And sharing experiences requires a place.",
      "AGAINST THE ODDS:",
      "Thompson opened Pages & Prose in the spring of 2018, when every data point in publishing suggested she was making a mistake. E-book adoption had plateaued but remained significant. Amazon controlled roughly 50% of print book sales nationally. Three independent bookstores had closed in the greater Port Laken area in the preceding decade.",
      "She had a master's degree in library science, 12 years of experience as a school librarian, and a savings account she'd been quietly accumulating for a purpose she hadn't yet identified. When the Oak Street storefront came available — a narrow, deep space with original hardwood floors and exposed brick — she made what she describes as \"a decision that looked like a leap and felt like arriving.\"",
      "\"I knew the statistics,\" she says. \"I also knew that every independent bookstore that was thriving had figured out the same thing: you can't compete with Amazon on convenience. You have to compete on experience.\"",
      "THE PROGRAMMING ECOSYSTEM:",
      "Thompson's programming calendar reads like a small literary festival that never ends. Eight active reading clubs meet monthly — literary fiction, mystery, science fiction, memoir, translated literature, young adult, picture books, and a new debut-authors-only club launched this fall. Saturday morning story time draws 20 to 40 families weekly. Monthly author events feature both national debuts and local writers.",
      "The Blind Date with a Book display — wrapped books described only by three cryptic sentences, available for $15 — has generated more customer conversation than anything else in the store. \"Someone bought one for their partner as a joke and they ended up joining a book club,\" Thompson says.",
      "The store's local author section occupies an entire wall. Thompson stocks local titles prominently, hand-sells them to customers she thinks will respond to them, and hosts release events that regularly pack the store past comfortable capacity.",
      "\"Rebecca doesn't just put your book on a shelf,\" says James Morrison, whose debut novel set in Port Laken's fishing history was published in 2023. \"She reads it. She forms an opinion about who needs to read it. She introduces your book to those people personally. That's an entirely different relationship than I have with any other retailer.\"",
      "THE PANDEMIC AND THE PROMISE:",
      "In March 2020, Thompson closed the physical store and spent 48 hours convinced she'd lost everything. Then she started calling her book club members.",
      "\"I didn't have a plan. I just knew I needed to talk to people who loved books.\" Those calls became virtual book discussions, then a newsletter, then a curbside pickup system that regulars organized themselves — including delivery runs to elderly and immunocompromised neighbors.",
      "When the financial damage became clear, a longtime customer named Patricia Osei launched a crowdfunding campaign without telling Thompson. It raised $41,000 in 11 days.",
      "\"I found out about it when it had already raised $12,000,\" Thompson says, her voice still carrying the quality of someone who hasn't fully processed being loved that openly. \"I called Patricia crying and she told me to stop being dramatic and get back to work. She was right.\"",
      "\"This isn't my store,\" she says now. \"It belongs to the people who fought to keep it open. I'm the steward. That distinction matters to me.\"",
      "Pages & Prose is open daily from 9 AM to 9 PM at 456 Oak Street. Full book club schedule and upcoming author events available on their website. Gift wrapping available year-round."
    ]
  },
  "elm-street-park": {
    slug: "elm-street-park",
    title: "Elm Street Park Is Finally Open — And It Was Worth the Wait",
    subtitle: "After three years of planning, community input, and construction, Port Laken's newest green space transforms a former industrial lot into something the neighborhood has needed for a generation",
    category: "City News",
    author: "Port Laken News",
    date: "January 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1200&q=80",
    content: [
      "At 10:04 a.m. last Saturday, Mayor Patricia Williams cut a green ribbon in front of approximately 300 people, and a child named Rosario immediately ran past the rope line and onto the playground equipment before anyone had a chance to officially declare the park open.",
      "Nobody stopped her. Nobody tried.",
      "\"That,\" said Mayor Williams at the microphone a moment later, laughing, \"is the point.\"",
      "Elm Street Park officially opened to the public on January 11, 2026, closing a three-year chapter that began with a community survey, passed through a contested environmental remediation process for the former industrial lot, absorbed two rounds of design revisions driven by resident feedback, and ended with one of the most anticipated ribbon cuttings in recent Port Laken memory.",
      "WHAT THE NEIGHBORHOOD ASKED FOR:",
      "When the city purchased the abandoned Holloway Manufacturing site in 2022, it held 11 community listening sessions before a single design element was proposed. The sessions drew nearly 600 participants — a number that surprised even the planning team.",
      "\"We expected maybe 150 people total across all sessions,\" says Marcus Thompson, Director of City Planning. \"When the third session drew 80 people on a Tuesday night in February, we understood we were building something this neighborhood had been waiting for.\"",
      "What residents said they needed: accessible play equipment that worked for children with mobility limitations, a water feature for summer, full-size basketball courts, a community garden with usable plot sizes, and permanent shade structures. What they said they didn't need: a dog park limiting access for children, a skate plaza replacing the basketball courts, and a fee-based parking structure displacing green space. All three were proposed and removed.",
      "THE PARK BY THE NUMBERS:",
      "Elm Street Park spans 4.5 acres. It features a fully accessible playground certified for ages 2 through 12, including wheelchair-accessible climbing structures and sensory play elements. The splash pad opens in spring and runs from 9 AM to 7 PM without a reservation or fee. Two full-size basketball courts are lit for evening use until 9:30 PM.",
      "The community garden contains 40 raised beds, each 4 by 8 feet, available through an annual lottery. All 40 plots were claimed in the first seven days of registration. A waitlist of 23 households has already formed for next year.",
      "Walking trails wind through 1.2 acres of native plant gardens — designed with Green Thumb Nursery — connecting to the city's broader trail network at Harbor Road. The covered pavilion seats 80 and is reservable through the Parks Department website.",
      "Total project cost: $8.2 million, funded through city bonds ($4.1M), a state park improvement grant ($2.8M), and a Harbor Foundation contribution ($1.3M) that funded the public art program.",
      "THE ART:",
      "Terrence Washington spent six months designing \"Growing Together,\" the bronze sculpture at the park's main entrance. It depicts four pairs of hands — a child's, a teenager's, an adult's, and an elder's — interlocked to form the silhouette of a tree.",
      "\"I wanted it to be about time,\" Washington explained at the unveiling. \"The same hands at different points in a life. The park will be used by all of them.\"",
      "Two additional installations line the main walking trail: a mosaic bench created by students from Westside Elementary and Lincoln Middle School, and interpretive panels by illustrator Priya Mehta depicting the ecological history of the land before the manufacturing facility was built.",
      "Rosario, who lives two blocks from the park on Crane Street, had already made her position clear on opening day: \"I'm coming every day.\"",
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
      "Tuesday night's City Council session ran nearly four hours, drew more than 60 residents to Council Chambers, and produced several decisions that will shape Port Laken's near-term future in tangible ways. Here is a detailed breakdown of what was discussed, decided, and deferred.",
      "ROAD REPAIR FUNDING: $2.3 MILLION APPROVED:",
      "In the most straightforward vote of the evening — 5-1 in favor — the council approved reallocating $2.3 million from the city's general infrastructure reserve toward a targeted road repair program covering three priority corridors: Harbor Drive between the waterfront and Route 9, residential streets in the Eastside district between Oak Avenue and Crane Street, and a two-block section of Oak Avenue itself near the Pages & Prose commercial cluster.",
      "Public Works Director Elena Brooks presented pavement condition index scores for each segment, noting that Harbor Drive has not been resurfaced in 23 years and that portions of Eastside's residential grid have deteriorated to a condition that generates significant vehicle damage and liability exposure for the city.",
      "\"These are not cosmetic repairs,\" Brooks said. \"We are at or past the point where deferral costs more than action.\"",
      "The lone dissenting vote came from Councilmember Sandra Wu, who argued that the reallocation should have been preceded by a broader infrastructure prioritization study. \"I support the repairs,\" Wu clarified. \"I want us to get better at how we decide which repairs.\"",
      "Construction is scheduled to begin in late March, pending weather, and will proceed in overlapping phases to minimize traffic disruption. Residents adjacent to work zones will receive advance notice by mail. A real-time project tracker will be hosted on the city's website.",
      "LAKESIDE COMMONS AFFORDABLE HOUSING: APPROVED AFTER EXTENDED DEBATE:",
      "The evening's longest discussion — nearly 90 minutes — centered on Lakeside Commons, a proposed 120-unit affordable housing development at the former Ridgeway Lumber site on Eastside Boulevard.",
      "The project, developed by nonprofit housing provider Beacon Communities in partnership with the city's Housing Authority, would reserve all 120 units for households earning between 50% and 80% of Port Laken's area median income — roughly $48,000 to $76,000 annually for a family of four. Units include a mix of studios, one-bedrooms, and two-bedrooms, with 12 units designated as accessible.",
      "Resident testimony ran 45 minutes and reflected genuine division. Opposition raised concerns about traffic on Eastside Boulevard, school enrollment capacity at Lincoln Middle School, and the architectural compatibility of the proposed four-story building with surrounding two-story residential fabric.",
      "Support voices — which outnumbered opposition in the room — argued that Port Laken's workforce housing deficit has reached a critical point, with median rents having increased 34% over five years while teacher, healthcare worker, and public employee salaries have not kept pace.",
      "\"I have nurses on my staff who live 45 minutes away because they cannot afford to live in the community they serve,\" said Dr. Luz Herrera, Director of Community Health at Port Laken Memorial. \"That is not sustainable for them or for us.\"",
      "The council voted 4-2 to approve the project with three conditions: a traffic impact study before groundbreaking, a coordination meeting with the school district regarding enrollment projections, and a design review requiring facade revisions to better match the surrounding neighborhood.",
      "Councilmember James Foster, who voted yes, called the decision \"necessary for the long-term health of our workforce and our community.\" Councilmembers Sandra Wu and Patricia Osei voted no, citing unresolved traffic and school capacity concerns.",
      "SHORT-TERM RENTAL REGULATIONS: NEW RULES TAKE EFFECT IN 90 DAYS:",
      "Following 18 months of resident complaints and three separate draft ordinances, the council unanimously approved a comprehensive short-term rental regulatory framework taking effect April 12.",
      "Key provisions: all operators must obtain a city permit, renewable annually at $250. Rentals in residential zones are capped at 90 days per calendar year. Operators must designate a local contact person available by phone within one hour during any active rental. Properties with three or more substantiated noise or nuisance complaints within 12 months face permit suspension.",
      "Fines for operating without a permit begin at $500 per day. Repeat violations can result in permanent permit ineligibility. The ordinance explicitly exempts hosted rentals — where the property owner is present — from the 90-day cap, addressing concerns from residents who rely on occasional rental income to offset rising mortgage costs.",
      "Current operators have 90 days to register and comply. The permit application portal will be live at the city website by January 31. Questions: Office of Community Development at (555) 400-4100.",
      "DOWNTOWN PARKING STUDY: $75,000 AUTHORIZED:",
      "The council authorized $75,000 for a comprehensive downtown parking study by traffic engineering firm Meridian Associates. The study will analyze current utilization across all public and private surface lots and on-street spaces, model demand under the Downtown Revitalization Initiative's development program, and evaluate options including a structured parking facility, dynamic pricing, and shared parking agreements with private lot owners.",
      "Results are expected by August, at which point staff will present findings and a recommendation on whether to move forward with structured parking.",
      "PUBLIC COMMENT: WHAT ELSE RESIDENTS RAISED:",
      "Beyond the major agenda items, several concerns were raised and referred to staff for follow-up at the February meeting.",
      "Parents from Lincoln Middle School requested speed humps or additional crosswalk signage on Crane Street during school hours. Public Works will conduct a traffic safety assessment and report back.",
      "Three Cedar Lane residents flagged deferred maintenance in Harborview Park, including a broken swing set reported four times without resolution. Parks Director Jerome Washington acknowledged the complaint and committed to a repair timeline within two weeks.",
      "A coalition of youth sports coaches asked the council to consider dedicated funding for recreation programming in the 2026-27 budget cycle, noting that the current fee structure creates access barriers for lower-income families. Staff will prepare a fee structure analysis for the budget discussion in April.",
      "The next City Council meeting is Tuesday, February 11, at 7 PM in Council Chambers. Meetings are open to the public and streamed live on the city's website. Written comment may be submitted to the city clerk's office by noon on the day of the meeting."
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
      "The Port Laken Summer Festival turns 35 this year, and Events Director Christina Alvarez has been working since September to make sure the anniversary shows. At a press event Monday morning at the Harbor Community Center, Alvarez unveiled the most expansive programming schedule in the festival's history.",
      "\"We asked people what they wanted more of and what they wanted less of,\" Alvarez said. \"The answers were clear: more local food, more live music variety, more things for teenagers who are too old for the kiddie rides and too young to drink, and please, for the love of everything, more shade.\"",
      "New this year: a dedicated canopy tent district, 35 additional shade trees planted in festival grounds over the past two months, and a misting station corridor along the main food vendor row.",
      "FRIDAY, JULY 17: OPENING DAY:",
      "The festival opens with the parade at 5 PM on Main Street. This year's theme — \"Port Laken Through the Decades\" — traces the city's history from its fishing village origins through the industrial era to the present. Vintage vehicles from the Port Laken Auto Club, historical reenactors, local school marching bands, and floats from more than 30 community organizations are confirmed. The route runs from Clement Street to Harbor Plaza and typically draws 4,000 to 6,000 spectators.",
      "Festival grounds open at 4 PM, ahead of the parade. The main stage opens at 7 PM with a six-act showcase of Port Laken musicians, including soul trio The Aldridge Sisters, jazz-funk group Meridian, indie folk singer Rosa Camacho, and blues guitarist Marcus Webb — whose 2024 album was produced by a Grammy-nominated team and whose local shows sell out in under an hour.",
      "SATURDAY, JULY 18: THE BIG DAY:",
      "Gates open at 11 AM with all 40-plus food vendors active and the newly introduced Heritage Kitchen, featuring recipes from Port Laken's immigrant communities prepared by community members, not restaurants.",
      "\"Heritage Kitchen came from a conversation with our neighborhood councils,\" Alvarez said. \"There's extraordinary food knowledge in this city that never makes it onto menus. We wanted to give it a stage.\"",
      "Saturday's main stage headliner is The Harbor Lights, the San Francisco-based indie group whose most recent record spent six weeks on the Americana charts. Organizers have expanded the main stage field by 20% in anticipation of record attendance.",
      "The Teen Zone launches at noon Saturday with programming designed by teenagers: a video game tournament with an open bracket and $500 prize pool, a skateboard and BMX demonstration, a DIY screen printing station, and a DJ dance party from 8 PM to 10:30 PM.",
      "New and already generating conversation: a Midnight Market running 9 PM to 1 AM near the harbor, featuring night-market-style food stalls, ambient live music, and artisan vendors. Open to all ages; alcohol service ends at midnight.",
      "SUNDAY, JULY 19: FAMILY DAY AND THE 5K:",
      "The Harbor Fun Run 5K begins at 7 AM Sunday, starting and finishing at Harbor Plaza. Registration opens March 1 at portlakenfestival.org/5k. Proceeds support the Port Laken Youth Athletics Foundation. Last year's race filled all 800 spots within 51 hours. Capacity has been increased to 1,000 this year.",
      "Sunday's main programming is family-focused: the petting zoo opens at 11 AM, carnival rides run all day, and the Children's Stage hosts continuous performance from 11 AM to 5 PM, including Danny Sunshine at 2 PM. The Student Art Showcase opens in the Art Pavilion at noon.",
      "Sunday closes at 8 PM with an 18-minute harbor fireworks display, donated by the Harbor Foundation and visible from the festival grounds and Harbor Trail.",
      "LOGISTICS:",
      "Admission is free. Shuttles run from Eastside High School overflow parking to Harbor Plaza every 15 minutes throughout the weekend. Street parking near festival grounds is extremely limited. Dogs are welcome on leash in all areas except food vendor rows and the Children's Stage zone. Full schedule and 5K registration at portlakenfestival.org."
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
      "Standing in front of a 12-foot rendering of what Main Street might look like in 2035 — wider sidewalks, protected bike lanes, café tables shaded by mature trees, a new plaza where a surface parking lot currently sits — Mayor Patricia Williams told a room full of stakeholders and reporters on Tuesday that this was \"not a vision document.\"",
      "\"Vision documents collect dust,\" Williams said. \"This is an implementation plan. There is a difference, and we intend to show you what that difference looks like.\"",
      "The Downtown Revitalization Initiative calls for $50 million in public investment over the next decade, designed to catalyze an estimated $200 million in private development and fundamentally alter the character of Port Laken's downtown core.",
      "WHY NOW:",
      "Port Laken's downtown challenges are not new, but they have compounded. A 2024 city-commissioned economic analysis found that downtown's retail vacancy rate has risen from 8% in 2018 to 19% in 2024. Foot traffic in the commercial core drops sharply after 6 PM on weekdays, limiting the viability of evening-oriented businesses. Aging underground infrastructure has required repeated emergency repairs that are both expensive and disruptive.",
      "\"We have been managing decline with maintenance,\" said Planning Director Marcus Thompson bluntly. \"That is not a strategy. This is a strategy.\"",
      "MAIN STREET STREETSCAPE:",
      "A full reconstruction of Main Street from Harbor Plaza to Elm Street — approximately nine blocks — would widen sidewalks from 8 feet to 14 feet, add protected two-way bike lanes, replace aging overhead wiring with underground conduit, install new LED street lighting, and plant 180 mature street trees. Pedestrian plazas at three key intersections would create flexible public spaces for markets, outdoor dining, and everyday gathering.",
      "The streetscape work would also replace all underground infrastructure beneath the work zone — an $11 million investment that represents nearly a quarter of the plan's total public commitment.",
      "MIXED-USE DEVELOPMENT:",
      "The city has identified three underutilized parcels suitable for mixed-use development — two surface parking lots and a city-owned maintenance facility being relocated. Buildings would incorporate ground-floor retail with residential units above. Approximately 300 housing units are targeted across the three sites, with 20% — 60 units — priced at or below 80% of area median income.",
      "\"We are not giving these parcels away,\" Thompson noted. \"We are structuring development agreements so that public investment in site preparation is recovered through ground lease revenues over time. This is a partnership, not a subsidy.\"",
      "PARKING STRUCTURE:",
      "A 500-space structured parking facility is proposed for Harbor Street, replacing an existing surface lot. The structure would include EV charging on every level, ground-floor retail, and a pedestrian connection to Main Street. Relocating parking to a structure frees the existing surface lots for the mixed-use development above.",
      "WATERFRONT CONNECTION:",
      "A new 1,800-foot pedestrian and bicycle promenade would connect the foot of Main Street to the harbor waterfront, passing through underutilized warehouse properties — two of which the city has already acquired. The promenade would feature restaurants, retail, and public art on its edges, with a continuous public pathway along the water.",
      "\"The waterfront is Port Laken's greatest underused asset,\" Mayor Williams said. \"There is no good reason that a city built around a harbor should have a harbor that is functionally invisible from its downtown.\"",
      "DOWNTOWN PLAZA:",
      "A new civic plaza at the intersection of Main and Harbor would be created by closing the Harbor Street approach and rerouting through-traffic one block south. The reclaimed 18,000 square feet would become a permanent public plaza with a performance bandshell, seasonal water feature, public art, and flexible open space.",
      "HOW IT GETS PAID FOR:",
      "The $50 million is a stacked funding structure: city general obligation bonds subject to voter approval in November 2026 ($18M), a pending state infrastructure grant ($12M), federal transportation enhancement funds ($7M), tax increment financing over 15 years ($8M), and private contributions and development fees ($5M).",
      "\"The voter approval component is real and the grant outcome is uncertain,\" the Mayor acknowledged. \"But we have structured this so that projects with the most certain funding move first.\"",
      "The first projects — underground infrastructure replacement and streetscape construction between Main and Oak streets — are anticipated to begin in late 2026. Full plan and public comment at portlakencity.gov/downtown through February 28."
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
      "By noon, they had been joined by more than 500 additional volunteers — families with young children, retirees, members of faith communities, local businesses, and two busloads from the Port Laken Adult Education Center. Together, they cleaned parks, painted over graffiti on Harbor Trail, assembled and delivered 1,400 meal kits through the Community Food Network, and replanted a native garden bed at Lincoln Middle School damaged in November's early storms.",
      "\"Dr. King's message was about action,\" said Marcus Thorne, lead organizer for the MLK Day Coalition. \"Not just belief. Not just aspiration. The speech didn't say 'I have a plan.' It said 'I have a dream' — which means something you feel compelled to build. That's what today is. Building.\"",
      "THE MORNING OF SERVICE:",
      "Port Laken's MLK Day of Service has been organized by the Coalition — a partnership of faith communities, neighborhood associations, the Parks Department, and the Community Food Network — for nine years. This year's goals: 2,000 volunteer hours, 1,500 meal kits delivered, and three community spaces visibly improved.",
      "By 2 PM, volunteers had logged 2,340 hours, delivered all 1,400 kits, and completed work at four community sites — including an unplanned graffiti removal project on a handball court wall at Eastside Community Center that was flagged by a volunteer who happened to be walking by.",
      "\"You plan for what you know is needed,\" said Parks Director Jerome Washington, \"and then people show up with eyes open and find more.\"",
      "THE COMMUNITY GLOW:",
      "As the afternoon service work wound down, the tone shifted. Volunteers traded work gloves for paper lanterns — each pre-inscribed with a written hope, a name, or a short phrase. By 5:30 PM, several hundred people had gathered along the harbor edge where coalition volunteers had set up a stage and sound system.",
      "Mayor Patricia Williams spoke without notes. \"Port Laken is not a perfect city,\" she said. \"Dr. King didn't ask for perfect cities. He asked for cities with the courage to keep trying. I look around tonight and I see that courage.\"",
      "A children's choir from St. Augustine's opened the musical program, followed by jazz quartet The Riverton Four and the Port Laken Community Gospel Ensemble, whose closing arrangement drew most of the crowd into singing along.",
      "At 7:15 PM, the lantern release began. The biodegradable lanterns — sourced from an environmentally verified supplier — were lit one section at a time, and the harbor surface caught their reflection as they drifted outward.",
      "\"I wrote my mom's name on mine,\" said Esperanza Delgado, 16, watching the lanterns spread across the water. \"She would have loved this.\"",
      "A light show synchronized to music closed the evening at 8 PM. The crowd dispersed slowly, in the way people do when they are reluctant to let something end.",
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
      "\"I made 40% more inventory this year,\" she says, laughing, from behind her chalet counter at Harbor Plaza, which is now empty of mugs and occupied by a queue of people asking when she's restocking. \"I thought that would be enough. It was not.\"",
      "Rodriguez has been a fixture at the Winter Market since its third year. So have dozens of others — a community of local artisans for whom the market's six-week run represents significant annual income, but also something harder to quantify: a place where their work gets seen, handled, and chosen by neighbors who live within a few miles of where it was made.",
      "The market, now in its 11th year, opened last weekend to its largest opening-day crowd on record — an estimated 4,800 visitors, driven partly by word-of-mouth about a new installation that has generated unusual attention for something made primarily of LED strips and audio cable.",
      "THE TUNNEL OF LIGHTS:",
      "The \"Tunnel of Lights\" is a 200-foot covered walkway connecting the market's main entrance to the harbor promenade, lined on all sides with approximately 18,000 twinkling LEDs that synchronize to a rotating playlist of instrumental music every hour. At synchronization — which draws a small crowd of people who've heard about it — the lights pulse, wave, and shift color in a sequence programmed by Port Laken lighting designer Jonah Ferreira.",
      "By Saturday afternoon, the hashtag the market had tentatively assigned it had been used in more than 800 posts. By Sunday evening it had crossed 2,000.",
      "\"I designed it to feel like being inside a piece of music,\" Ferreira said at a preview. \"Whether it actually does that, I can't say. But people seem to be stopping and standing still in it, which is what I hoped for.\"",
      "The tunnel is free to enter, runs during all market hours, and requires no ticket or reservation. It remains through February.",
      "THE ARTISANS AND THE FOOD:",
      "Fifty artisans occupy the wooden chalets assembled each season, offering work ranging from functional craft — Rodriguez's ceramics, hand-dyed textiles by Miriam Okeke, cutting boards and small furniture from woodworker Paul Brannigan — to watercolor prints, hand-knit accessories, and driftwood sculpture.",
      "A market policy maintained since its second year: all vendors must produce their goods within Port Laken city limits or, for food vendors, within 50 miles. The policy makes the market more restrictive to participate in and, market director Celia Park argues, significantly more interesting to shop at.",
      "\"Anyone can set up a booth with mass-produced goods dressed up with a local brand,\" Park says. \"We want you to look at something and know that someone who might live on your street made it.\"",
      "The food vendor section has expanded to 12 stalls. The clam chowder in sourdough bread bowls from Harbor Catch — a local fishing family — has a line forming before the market opens on weekends. A new vendor, Cacao & Co., offers house-made hot chocolate in five variants, including a chili-spiced version that has already developed a following. Roasted chestnuts are available at two carts, which feels archaic in the best possible way.",
      "\"It smells exactly like a market should,\" said visitor Tom Bradley, who came with his teenage daughter and stayed three hours. \"Like something warm and real. You can't manufacture that.\"",
      "WHAT'S COMING:",
      "Live acoustic music runs every Saturday evening from 6 PM to 9 PM in the Harbor Pavilion. January 31: folk singer Rosa Camacho. February 7: guitarist duo Salinas & Fox. February 14: jazz pianist William Adler in a Valentine's Day performance that sells the pavilion's 80 seats within hours of announcement each year.",
      "The market runs every Friday evening (5–9 PM) and Saturday–Sunday (11 AM–9 PM) through February 23. Admission is free. Full vendor list and entertainment schedule at portlakencoastalmarket.org."
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
      "The Port Laken Eco-Center on Harborview Drive — constructed with cross-laminated timber, solar panels, and a greywater recycling system — was a deliberate choice as the setting for Tuesday's announcement. Mayor Johnson wanted to make a point before saying a word.",
      "\"This building exists,\" he said, opening his remarks. \"It works. It cost about 8% more to build than a conventional structure of the same size, and it has operating costs approximately 40% lower. That is the argument for everything I'm about to describe. The upfront cost is real. The long-term return is better.\"",
      "The \"Green Port 2026\" initiative, unveiled Tuesday and open for public comment through March 15, is the most comprehensive environmental planning document Port Laken has produced. It covers urban green infrastructure, coastal resilience, solid waste reduction, business sustainability incentives, and air quality — and unlike previous environmental documents, it includes specific metrics, timelines, and named responsible parties for each commitment.",
      "\"Sustainability plans are easy to write and easy to ignore,\" said Environmental Director Dr. Alice Green, who oversaw the 14-month development process. \"We wrote this one with the assumption that it will be graded.\"",
      "URBAN GREEN INFRASTRUCTURE:",
      "The initiative's most immediately visible component is three new pocket parks in the downtown core, targeting city-owned parcels currently occupied by underutilized lots or excess right-of-way.",
      "Pocket parks reduce ambient heat through shade and transpiration cooling, provide accessible outdoor space in neighborhoods where park acreage is scarcest, support pollinators, and absorb stormwater that would otherwise enter the harbor.",
      "The three proposed sites: the surplus right-of-way at Main and Clement, currently used for intermittent parking; a city-owned parcel at Harbor and Second where a demolition project cleared the previous structure in 2023; and the pedestrian alley connecting Oak Street to Harbor Trail, which could be redesigned as a linear green passage.",
      "Design work begins in spring 2026, with construction targeted for completion before year-end. Green Thumb Nursery has been engaged as a consultant on native plant selection for all three sites.",
      "WATERFRONT RESILIENCE PROJECT:",
      "The initiative's most technically ambitious component addresses the harbor's aging seawall infrastructure — much of which dates to the 1950s and was designed without accounting for sea level rise projections now considered standard in coastal engineering.",
      "Rather than conventional seawall replacement, the city is proposing a \"living shoreline\" approach for a 1.4-mile section of harbor edge from the marina to the industrial pier.",
      "Living shorelines use native vegetation, strategically placed natural materials such as oyster shell reefs and rock sills, and minimal hard infrastructure to manage wave energy and erosion while improving marine habitat and water quality.",
      "\"A concrete seawall is a one-time investment with ongoing maintenance costs and essentially zero ecological benefit,\" Dr. Green explained. \"A living shoreline is a self-sustaining system. Once established, the vegetation and reef structure reinforce each other. The shoreline becomes more resilient over time rather than deteriorating.\"",
      "The project is being developed with the California Coastal Conservancy, which is expected to contribute grant funding. An environmental impact assessment is underway; construction is projected to begin in 2027.",
      "ZERO-WASTE BUSINESS INCENTIVES:",
      "A tiered incentive program will reward Port Laken businesses that commit to zero-waste operations — defined as diverting 90% or more of operational waste from landfill through reduction, reuse, composting, or recycling.",
      "Certified businesses receive a 15% reduction in their annual business license fee, priority in city procurement, and use of a \"Green Port Certified\" seal.",
      "\"The seal matters more than you'd think,\" said Maria Santos of Harbor Brew Coffee, who served on the business advisory working group. \"Our customers care about this. Having a verified certification is different from just saying you're sustainable.\"",
      "The application process opens April 1. The Office of Community Development will hold two informational workshops and provide free one-on-one waste audit consultations.",
      "MUNICIPAL COMPOSTING PROGRAM:",
      "The city's first municipal composting program launches with a pilot in three neighborhoods in April before citywide rollout in September. Participating households receive a countertop collection bin and weekly curbside pickup of food scraps, yard waste, and certified compostable packaging. Material is processed at a regional facility in partnership with Sonoma County. Finished compost will be available to residents at no cost through seasonal distribution events.",
      "\"Small changes, when done by thousands, make a real impact,\" Dr. Green said. \"If half of Port Laken households compost their food scraps, we divert an estimated 4,200 tons of organic material from landfill annually. That's a choice the city is making possible.\"",
      "Information on the composting pilot will be posted to the city website by March 1. The full Green Port 2026 plan is available for review and public comment at portlakencity.gov/greenport."
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  const isSectionHeader = (paragraph: string) => {
    const trimmed = paragraph.trim();
    return (
      trimmed === trimmed.toUpperCase() &&
      trimmed.length > 3 &&
      trimmed.length < 80 &&
      /[A-Z]/.test(trimmed)
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">

      {/* HERO */}
      <div className="relative w-full h-[70vh] min-h-[520px] max-h-[780px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        {/* Back button */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-200 font-nunito text-sm"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/30 group-hover:border-white/70 group-hover:bg-white/10 transition-all duration-200">
                <FaArrowLeft className="text-[10px]" />
              </span>
              <span className="tracking-wide">All News</span>
            </Link>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="mb-5">
              <span className="inline-block text-[11px] font-nunito font-bold tracking-[0.18em] uppercase text-white/60 border-b border-white/30 pb-0.5">
                {article.category}
              </span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-4 max-w-3xl">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="font-nunito text-[15px] md:text-base text-white/65 max-w-2xl leading-relaxed">
                {article.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* BYLINE STRIP */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[11px] font-bold font-nunito">
                  {article.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-nunito text-[13px] font-semibold text-gray-800 leading-none mb-0.5">
                  {article.author}
                </p>
                <p className="font-nunito text-[11px] text-gray-400 leading-none">
                  {article.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#708AA3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
              </svg>
              <span className="font-nunito text-[12px] text-gray-400">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">

            {/* Main content */}
            <div className="min-w-0">
              {article.content.map((paragraph, index) => {
                if (isSectionHeader(paragraph)) {
                  const label = paragraph.replace(/:$/, "").trim();
                  return (
                    <div key={index} className="mt-14 mb-6 flex items-center gap-4">
                      <div className="w-1 h-6 bg-[#708AA3] rounded-full flex-shrink-0" />
                      <h2 className="font-playfair text-[1.2rem] font-bold text-[#1e3a5f] tracking-wide leading-snug">
                        {label}
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
                    <blockquote key={index} className="my-10 pl-6 border-l-[3px] border-[#708AA3]">
                      <p className="font-playfair text-xl md:text-2xl text-[#1e3a5f] leading-relaxed italic">
                        {paragraph}
                      </p>
                    </blockquote>
                  );
                }

                return (
                  <p key={index} className="font-nunito text-[17px] text-gray-600 leading-[1.9] mb-6">
                    {paragraph}
                  </p>
                );
              })}

              <div className="mt-20 pt-10 border-t border-gray-100">
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-3 font-nunito text-sm font-semibold text-[#1e3a5f] hover:text-[#708AA3] transition-colors duration-200"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#1e3a5f]/20 group-hover:border-[#708AA3] group-hover:bg-[#708AA3]/5 transition-all duration-200">
                    <FaArrowLeft className="text-[10px]" />
                  </span>
                  Back to All News
                </Link>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <p className="font-nunito text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
                    About this article
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-nunito text-[11px] text-gray-400 uppercase tracking-wide mb-1">Category</p>
                      <p className="font-nunito text-sm font-semibold text-[#1e3a5f]">{article.category}</p>
                    </div>
                    <div className="h-px bg-gray-50" />
                    <div>
                      <p className="font-nunito text-[11px] text-gray-400 uppercase tracking-wide mb-1">Published</p>
                      <p className="font-nunito text-sm font-semibold text-[#1e3a5f]">{article.date}</p>
                    </div>
                    <div className="h-px bg-gray-50" />
                    <div>
                      <p className="font-nunito text-[11px] text-gray-400 uppercase tracking-wide mb-1">Read time</p>
                      <p className="font-nunito text-sm font-semibold text-[#1e3a5f]">{article.readTime}</p>
                    </div>
                    <div className="h-px bg-gray-50" />
                    <div>
                      <p className="font-nunito text-[11px] text-gray-400 uppercase tracking-wide mb-1">Author</p>
                      <p className="font-nunito text-sm font-semibold text-[#1e3a5f]">{article.author}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                  <p className="font-playfair text-lg font-bold mb-2 leading-snug">Port Laken News</p>
                  <p className="font-nunito text-[13px] text-white/60 leading-relaxed">
                    Covering the stories that shape our community.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link href="/news" className="font-nunito text-[12px] text-white/50 hover:text-white/80 transition-colors">
                      ← Browse all articles
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </div>
  );
}