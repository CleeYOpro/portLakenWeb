import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCalendar, FaUser, FaClock } from "react-icons/fa";

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
    subtitle: "How one woman's mission to fight hunger transformed Port Laken's food security landscape",
    category: "Community Spotlight",
    author: "Port Laken News",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    content: [
      "When Sarah Martinez moved to Port Laken twelve years ago, she noticed something that troubled her deeply. Despite the city's prosperity, families in certain neighborhoods were struggling to put food on the table. Rather than look away, she decided to act.",
      "\"I remember seeing kids at the local elementary school who weren't eating lunch because their families couldn't afford it,\" Martinez recalls. \"That image stayed with me. I knew I had to do something.\"",
      "What started as a small weekend food collection at her local church has grown into the Port Laken Community Food Network, an organization that now serves over 2,000 families monthly. The network operates three food pantries across the city and partners with local restaurants to rescue surplus food that would otherwise go to waste.",
      "Martinez's approach is different from traditional food banks. She focuses on dignity and choice, allowing families to select their own groceries rather than receiving pre-packed boxes. \"Everyone deserves to choose what they eat,\" she explains. \"A mother knows what her children will actually consume.\"",
      "The impact has been remarkable. In the past year alone, the network distributed over 180,000 pounds of food and prevented an estimated 45,000 pounds from ending up in landfills. Local schools have reported improved attendance and academic performance among students whose families access the network's services.",
      "Beyond food distribution, Martinez has launched cooking classes that teach budget-friendly nutrition, job training programs for unemployed community members, and a summer lunch program that ensures no child goes hungry when school is out.",
      "\"Sarah doesn't just feed people—she empowers them,\" says Mayor Patricia Williams. \"She's created a model that other cities are now trying to replicate.\"",
      "Martinez deflects the praise with characteristic humility. \"This isn't about me. It's about the hundreds of volunteers who show up every week, the businesses that donate, and the community that believes no one should go hungry. Port Laken takes care of its own.\"",
      "For those interested in supporting or volunteering with the Port Laken Community Food Network, information sessions are held every first Saturday of the month at the Harbor Community Center."
    ]
  },
  "michael-chen": {
    slug: "michael-chen",
    title: "Michael Chen: Mentoring the Next Generation",
    subtitle: "A youth mentor's 15-year journey of transforming lives one conversation at a time",
    category: "Community Spotlight",
    author: "Port Laken News",
    date: "January 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    content: [
      "Michael Chen never planned to become a mentor. Fifteen years ago, he was a software engineer focused on climbing the corporate ladder. A chance encounter at a community basketball court changed everything.",
      "\"I was shooting hoops after work when this kid—couldn't have been more than thirteen—asked if I could teach him,\" Chen remembers. \"We talked while we played, and I learned he was living with his grandmother, struggling in school, and felt like no one believed in him.\"",
      "That kid was Marcus Williams, now a mechanical engineer at a leading aerospace company. He credits Chen with saving his life.",
      "\"Mr. Chen saw something in me I couldn't see in myself,\" Williams says. \"He didn't just help with homework. He showed me what was possible. He took me to his office, introduced me to engineers, helped me apply for scholarships. He made me believe I belonged in spaces I never thought I'd enter.\"",
      "Marcus was the first of over 200 young people Chen has mentored through his organization, Future Forward Port Laken. The program pairs at-risk youth with professional mentors for a minimum two-year commitment, providing academic support, career exposure, and most importantly, consistent adult presence.",
      "The statistics speak for themselves: 94% of Future Forward participants graduate high school, compared to the 71% district average for similar demographics. Over 80% pursue higher education or vocational training. Perhaps most tellingly, many former mentees have become mentors themselves.",
      "Chen, who reduced his corporate role to part-time to focus on the program, emphasizes that mentoring isn't about fixing problems—it's about building relationships.",
      "\"These kids don't need saviors. They need someone who shows up consistently, who listens without judgment, who celebrates their wins and helps them learn from setbacks,\" he explains. \"The transformation happens through trust.\"",
      "The program has gained recognition beyond Port Laken. Chen was recently invited to speak at a national conference on youth development, and several neighboring cities have adopted the Future Forward model.",
      "For Chen, the reward isn't the accolades. It's the texts he receives from former mentees sharing their accomplishments—graduations, first jobs, weddings, babies.",
      "\"Every kid deserves someone in their corner,\" Chen says. \"If you have a few hours a week and a willingness to listen, you can change a life. I've seen it happen hundreds of times.\"",
      "Future Forward Port Laken is currently recruiting mentors for its fall cohort. Training and support are provided. Contact the Parks and Recreation Department for more information."
    ]
  },
  "harbor-brew-coffee": {
    slug: "harbor-brew-coffee",
    title: "Harbor Brew Coffee: Where Every Cup Makes a Difference",
    subtitle: "Local coffee shop's innovative model donates 10% of profits to homeless shelters",
    category: "Business Spotlight",
    author: "Port Laken News",
    date: "January 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    content: [
      "Walking into Harbor Brew Coffee on Main Street, you're immediately struck by the warmth—and not just from the expertly crafted lattes. This cozy establishment has become a community gathering spot where your morning caffeine fix comes with a side of social impact.",
      "Owners David and Maria Santos opened Harbor Brew five years ago with a simple mission: great coffee that does good. Ten percent of every dollar spent goes directly to Port Laken's homeless shelters and transitional housing programs.",
      "\"We wanted to build a business that reflected our values,\" says David, a former corporate consultant who left the rat race to pursue his passion. \"Coffee brings people together. Why not use that to bring our community together around helping those in need?\"",
      "The impact has been substantial. Last year, Harbor Brew's contributions funded over 500 shelter nights and helped three individuals transition into permanent housing. The café also employs people from transitional programs, providing job training and work experience.",
      "But Harbor Brew is about more than charity. The Santos family takes their craft seriously. Beans are sourced from sustainable farms in Colombia and Ethiopia, roasted in small batches locally, and prepared by baristas trained in the art of extraction.",
      "\"We never wanted to be the place people visit out of obligation,\" Maria explains. \"We wanted to be the place with the best coffee in town that also happens to make a difference. Quality and mission aren't mutually exclusive.\"",
      "The community has responded enthusiastically. Harbor Brew has become a beloved institution, hosting local art shows, open mic nights, and community meetings. The walls display work from local artists, with a portion of sales also benefiting community causes.",
      "Regular customer Jennifer Park sums up what many feel: \"I used to grab coffee at the chain drive-through. Now I go out of my way to come here. The coffee is incredible, and I love knowing my money stays in the community and helps people who need it.\"",
      "Harbor Brew Coffee is open daily from 6 AM to 8 PM at 142 Main Street. They also offer catering services for local events and businesses."
    ]
  },
  "green-thumb-nursery": {
    slug: "green-thumb-nursery",
    title: "Green Thumb Nursery: Cultivating Native Beauty",
    subtitle: "Family-owned nursery leads the charge in sustainable, native plant gardening",
    category: "Business Spotlight",
    author: "Port Laken News",
    date: "January 8, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    content: [
      "In an era of climate consciousness, one Port Laken business has been ahead of the curve for three generations. Green Thumb Nursery, tucked away on Cedar Lane, has specialized in native plants since the 1960s—long before \"sustainable gardening\" became a buzzword.",
      "\"My grandmother started this nursery when everyone wanted lawns and exotic flowers,\" says current owner Elena Rodriguez. \"She believed that gardens should work with nature, not against it. It took decades for the world to catch up.\"",
      "Today, Green Thumb is thriving. As water restrictions tighten and homeowners seek drought-resistant alternatives, the nursery's expertise in native California plants has become invaluable. Their selection includes over 200 species of plants that evolved in the local ecosystem.",
      "The benefits of native gardening extend beyond water conservation. Native plants require no pesticides, support local pollinators, and provide habitat for birds and beneficial insects. A single native oak, Rodriguez points out, can support over 500 species of caterpillars—essential food for nesting birds.",
      "\"When you plant native, you're not just decorating your yard. You're restoring habitat,\" she explains. \"Every garden can be a small nature preserve.\"",
      "Green Thumb offers more than plants. The nursery hosts free monthly workshops on native landscaping, partners with local schools for environmental education, and provides consulting services for homeowners ready to transform their yards.",
      "The Rodriguez family has also worked with the city on several public projects, including the native plant gardens at City Hall and the pollinator pathway along Harbor Trail. These demonstration gardens showcase what's possible and inspire residents to make the switch.",
      "Customer Tom Bradley recently converted his water-hungry lawn to a native meadow with Green Thumb's guidance. \"My water bill dropped by 60%, and my yard has never looked more beautiful,\" he says. \"Plus, I've seen butterflies and birds I've never seen before. It's like having a little wildlife sanctuary.\"",
      "Green Thumb Nursery is open Tuesday through Sunday at 789 Cedar Lane. Free consultations are available by appointment."
    ]
  },
  "pages-and-prose": {
    slug: "pages-and-prose",
    title: "Pages & Prose: More Than a Bookstore",
    subtitle: "Independent bookstore builds community through weekly reading clubs and local author events",
    category: "Business Spotlight",
    author: "Port Laken News",
    date: "January 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=1200&q=80",
    content: [
      "In an age of digital downloads and next-day delivery, Pages & Prose shouldn't exist. Yet this independent bookstore on Oak Street isn't just surviving—it's becoming the heart of Port Laken's literary community.",
      "Owner Rebecca Thompson opened the store eight years ago, defying everyone who told her physical bookstores were dead. Her secret? Understanding that people don't just want books. They want connection.",
      "\"Amazon can deliver a book faster than I can,\" Thompson acknowledges with a smile. \"But Amazon can't host a discussion where strangers become friends over their shared love of a novel. Amazon can't introduce you to a local author who signs your book and thanks you for reading. Amazon can't recommend something based on the conversation we had last month.\"",
      "The store hosts an impressive array of programming. There are reading clubs for every taste—literary fiction, mysteries, science fiction, memoirs, young adult. A children's story time draws families every Saturday morning. Monthly author events feature both established writers and debuts.",
      "Perhaps most beloved is the \"Blind Date with a Book\" section, where wrapped books are described only by a few intriguing sentences. Customers take a chance and often discover new favorites they'd never have picked otherwise.",
      "Pages & Prose has also become a launchpad for local writers. Thompson dedicates an entire section to Port Laken authors and hosts release parties that pack the store. Several local writers credit her support with helping them find audiences.",
      "\"Rebecca doesn't just sell our books—she champions them,\" says local novelist James Morrison. \"She hand-sells them to customers she knows will love them. That kind of curation is irreplaceable.\"",
      "The pandemic nearly ended it all. When lockdowns hit, Thompson pivoted to virtual book clubs and curbside pickup. A community fundraiser raised $40,000 in two weeks to keep the doors open.",
      "\"That's when I truly understood what this place means to people,\" Thompson says, emotion in her voice. \"It's not my store. It belongs to the community.\"",
      "Pages & Prose is open daily at 456 Oak Street. Check their website for the current book club schedule and upcoming author events."
    ]
  },
  "elm-street-park": {
    slug: "elm-street-park",
    title: "New Park Opens on Elm Street",
    subtitle: "Community celebrates as long-awaited green space officially opens to the public",
    category: "City News",
    author: "Port Laken News",
    date: "January 14, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1200&q=80",
    content: [
      "After three years of planning and construction, Elm Street Park officially opened its gates last Saturday to the delight of hundreds of Port Laken residents. The 4.5-acre green space transforms a former industrial lot into a vibrant community gathering place.",
      "Mayor Patricia Williams cut the ribbon at a ceremony attended by city council members, project partners, and dozens of families eager to explore the new amenities.",
      "\"This park represents what we can accomplish when we listen to our residents and invest in our neighborhoods,\" Mayor Williams said. \"Every feature here came from community input. This is your park, built by your vision.\"",
      "The park features something for everyone. A state-of-the-art playground includes accessible equipment ensuring children of all abilities can play together. A splash pad provides cooling relief during summer months. Walking trails wind through native plant gardens, connecting to the city's broader trail network.",
      "For sports enthusiasts, the park offers two basketball courts, a volleyball court, and open lawn space for soccer and frisbee. A covered pavilion with picnic tables can be reserved for birthday parties and community events.",
      "Perhaps most striking is the community garden section, where residents can rent raised beds to grow their own vegetables. All 40 plots were claimed within the first week of registration, with a waitlist already forming.",
      "The $8.2 million project was funded through a combination of city bonds, state grants, and private donations. A significant contribution from the Harbor Foundation allowed for the inclusion of public art installations throughout the grounds.",
      "Local artist Terrence Washington's sculpture \"Growing Together\" greets visitors at the main entrance. The piece depicts interlocking hands forming the shape of a tree, symbolizing community growth and connection.",
      "\"I wanted to create something that reflects what this park means—different people coming together to build something beautiful,\" Washington explained at the unveiling.",
      "Park hours are 6 AM to 10 PM daily. Pavilion reservations can be made through the Parks and Recreation Department website."
    ]
  },
  "council-meeting-highlights": {
    slug: "council-meeting-highlights",
    title: "Council Meeting Highlights: Key Decisions from January Session",
    subtitle: "Budget approvals, zoning changes, and infrastructure plans top the agenda",
    category: "City News",
    author: "Port Laken News",
    date: "January 13, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
    content: [
      "The Port Laken City Council convened for its first meeting of 2026 on Tuesday evening, addressing several significant items that will shape the city's direction in the coming year. Here are the key takeaways for residents.",
      "BUDGET AMENDMENT APPROVED: Council voted 5-1 to approve a mid-year budget amendment allocating an additional $2.3 million to road repairs. The funds, sourced from higher-than-expected sales tax revenue, will address deteriorating conditions on Harbor Drive and several residential streets in the Eastside neighborhood. Work is expected to begin in March.",
      "AFFORDABLE HOUSING PROJECT MOVES FORWARD: After months of discussion, council approved the development agreement for Lakeside Commons, a 120-unit affordable housing complex on the former cannery site. The project will include a mix of one, two, and three-bedroom units reserved for households earning 50-80% of area median income. Construction is projected to begin this fall with completion in late 2027.",
      "Councilmember James Foster, who championed the project, called it \"a crucial step toward ensuring Port Laken remains a place where working families can afford to live.\"",
      "DOWNTOWN PARKING STUDY COMMISSIONED: Responding to merchant concerns about parking availability downtown, council authorized a comprehensive parking study. The $75,000 study will analyze current usage patterns, future needs, and potential solutions including a parking structure. Results are expected in six months.",
      "SHORT-TERM RENTAL REGULATIONS TIGHTENED: New regulations require short-term rental operators to obtain a city permit and limit rentals to 90 days per year in residential zones. The rules aim to balance tourism benefits with neighborhood character. Existing operators have 90 days to come into compliance.",
      "PUBLIC COMMENT PERIOD: Residents voiced concerns ranging from traffic calming on Oak Street to the need for additional youth programming. Council directed staff to prepare reports on several issues for future meetings.",
      "The next City Council meeting is scheduled for February 11 at 7 PM in the Council Chambers. Residents can attend in person or watch the livestream on the city website. Public comment can be submitted in advance via email.",
      "Full meeting minutes and video recordings are available on the City Clerk's page within one week of each meeting."
    ]
  },
  "summer-festival": {
    slug: "summer-festival",
    title: "Summer Festival 2026: Schedule and Events Announced",
    subtitle: "Annual celebration returns bigger than ever with three days of music, food, and family fun",
    category: "Events",
    author: "Port Laken News",
    date: "January 11, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80",
    content: [
      "Mark your calendars! The Port Laken Summer Festival returns July 17-19, 2026, with an expanded lineup of entertainment, food vendors, and activities for all ages. Event organizers unveiled this year's schedule at a press conference on Monday.",
      "\"This is our 35th annual festival, and we're pulling out all the stops,\" said Events Director Christina Alvarez. \"We've listened to community feedback and added more family programming, extended hours, and brought in some exciting headliners.\"",
      "MUSICAL PERFORMANCES: The main stage will feature three nights of live music spanning multiple genres. Friday's lineup focuses on local talent, showcasing six Port Laken bands. Saturday brings regional acts including acclaimed indie group The Harbor Lights. Sunday's family concert features beloved children's performer Danny Sunshine.",
      "FOOD FESTIVAL: Over 40 food vendors will line Harbor Street, representing cuisines from around the world. New this year is a dedicated \"Local Eats\" section featuring exclusively Port Laken restaurants and food trucks. A portion of proceeds benefits the Community Food Network.",
      "ACTIVITIES AND ATTRACTIONS: The children's area expands this year with carnival rides, face painting, a petting zoo, and interactive science exhibits. Teen Zone debuts with video game tournaments, a skateboard demonstration, and a DJ dance party Saturday night.",
      "The popular 5K Fun Run returns Sunday morning, with proceeds supporting youth athletics programs. Registration opens March 1 and typically fills quickly.",
      "ART AND CRAFT FAIR: Local artisans will display and sell their work in the Art Pavilion. Live demonstrations include pottery, glassblowing, and woodworking. The Student Art Showcase features work from Port Laken schools.",
      "PARADE: The festival kicks off Friday at 5 PM with the annual parade down Main Street. This year's theme is \"Port Laken Through the Decades,\" celebrating the city's history. Community groups interested in participating can register through the city website.",
      "LOGISTICS: Festival grounds open at 4 PM Friday, 11 AM Saturday and Sunday. Admission is free. A shuttle service will run from Eastside High School parking lot every 15 minutes. Alcohol will be available in designated areas for those 21+ with ID.",
      "For the full schedule, vendor applications, and volunteer opportunities, visit the Summer Festival page on the city website."
    ]
  },
  "downtown-initiative": {
    slug: "downtown-initiative",
    title: "A Bold New Initiative for Our Community's Future",
    subtitle: "City unveils comprehensive plan to revitalize downtown Port Laken",
    category: "City News",
    author: "Port Laken News",
    date: "January 16, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    content: [
      "Port Laken officials unveiled an ambitious plan Tuesday to transform the downtown core over the next decade. The Downtown Revitalization Initiative promises $50 million in public investment designed to attract private development, improve infrastructure, and create a vibrant 18-hour district.",
      "\"This isn't just about buildings and streets,\" said Mayor Patricia Williams at the announcement. \"It's about creating a downtown that reflects who we are as a community—welcoming, walkable, and full of life.\"",
      "The plan addresses several long-standing challenges. Aging infrastructure, limited parking, and vacant storefronts have contributed to a downtown that empties after business hours. The initiative aims to reverse these trends through coordinated investment.",
      "KEY COMPONENTS:",
      "STREETSCAPE IMPROVEMENTS: Main Street will receive a complete overhaul including wider sidewalks, protected bike lanes, improved lighting, and street trees. New pedestrian plazas at key intersections will provide gathering spaces for events and everyday enjoyment.",
      "MIXED-USE DEVELOPMENT: The city will partner with private developers to construct three mixed-use buildings featuring ground-floor retail with apartments above. A total of 300 housing units are planned, with 20% designated as affordable.",
      "PARKING STRUCTURE: A new 500-space parking garage on Harbor Street will address the parking shortage while freeing surface lots for development. The structure will include electric vehicle charging stations and ground-floor retail.",
      "WATERFRONT CONNECTION: A new pedestrian promenade will connect downtown to the harbor, creating a continuous walking path with restaurants, shops, and public art. The long-neglected waterfront area will become a destination rather than an afterthought.",
      "PUBLIC SPACES: A new downtown plaza will serve as a community gathering spot for farmers markets, concerts, and festivals. Design elements will celebrate Port Laken's maritime heritage.",
      "The plan emerged from 18 months of community engagement including town halls, surveys, and design workshops. Over 2,000 residents participated in the process.",
      "\"We heard clearly that people want a downtown where they can live, work, shop, and enjoy themselves—all in one place,\" said Planning Director Marcus Thompson. \"Every element of this plan responds to that vision.\"",
      "Funding will come from multiple sources including city reserves, state and federal grants, tax increment financing, and private investment. The first projects are expected to break ground in late 2026.",
      "A full presentation of the plan is available on the city website. Public comment is welcome through February 28."
    ]
  },
  "mlk-day-service": {
    slug: "mlk-day-service",
    title: "MLK Day Service & Community Glow",
    subtitle: "Port Laken honors the legacy with a special MLK Day event at the waterfront park, featuring community service, live music, and glowing lantern displays.",
    category: "Community Events",
    author: "Port Laken News",
    date: "January 19, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?auto=format&fit=crop&q=80",
    content: [
      "Port Laken came together on Monday to honor the legacy of Dr. Martin Luther King Jr. with a day of service and celebration. The event, held at the Waterfront Park, began with a community cleanup initiated by local high school students.",
      "\"Dr. King's message was about action,\" said organizer Marcus Thorne. \"We wanted to start the day by giving back to the city we love.\" Over 500 volunteers participated in various service projects across the city, from park restoration to packing meals for the food bank.",
      "As the sun set, the tone shifted from work to reflection. The annual 'Community Glow' ceremony illuminated the harbor with thousands of biodegradable lanterns, each bearing a written hope for the future.",
      "Mayor Patricia Williams addressed the crowd, emphasizing the importance of unity in diverse times. \"Port Laken is a tapestry of cultures, and today we celebrate the threads that bind us together,\" she stated.",
      "Live music filled the air as local choirs and jazz bands performed songs of freedom and resilience. The evening concluded with a spectacular light show reflecting off the water, a symbol of the enduring light Dr. King brought to the world."
    ]
  },
  "winter-market": {
    slug: "winter-market",
    title: "Coastal Winter Market Lights Up Harbor",
    subtitle: "The Winter Market returns to Harbor Plaza with local artisans, warm food trucks, craft drinks, and waterfront lights.",
    category: "Lifestyle",
    author: "Port Laken Lifestyle",
    date: "January 25, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519167758481-83f269a90c33?auto=format&fit=crop&q=80",
    content: [
      "The chill in the air didn't keep crowds away from the opening weekend of the Coastal Winter Market at Harbor Plaza. The annual tradition has returned, transforming the waterfront into a cozy village of lights, scents, and flavors.",
      "Over 50 local artisans set up shop in wooden chalets, offering everything from hand-knit scarves to driftwood sculptures. \"It's our best season yet,\" says potter Elena Rodriguez. \"People are really looking for unique, locally made gifts this year.\"",
      "Foodies delighted in the expanded food truck rally, which this year features winter specials like clam chowder in sourdough bread bowls, gourmet hot chocolate with homemade marshmallows, and roasted chestnuts.",
      "The highlight for many was the new 'Tunnel of Lights' installation, a 200-foot walkway adorned with thousands of twinkling LEDs that synchronizes to music every hour. It has already become the season's most Instagrammable spot.",
      "The market runs every weekend through February, providing a warm gathering place for the community during the colder months. Live acoustic music is scheduled for every Saturday evening."
    ]
  },
  "sustainability-vision-2026": {
    slug: "sustainability-vision-2026",
    title: "City Unveils 2026 Sustainability Vision",
    subtitle: "Mayor Johnson outlines new green spaces, waterfront upgrades, and eco-friendly public projects.",
    category: "City News",
    author: "Port Laken News",
    date: "February 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80",
    content: [
      "In a press conference held at the new Eco-Center, Mayor Johnson unveiled the 'Green Port 2026' initiative, a comprehensive sustainability plan aimed at making Port Laken a leader in environmental stewardship.",
      "The ambitious plan includes the creation of three new urban pocket parks in the downtown area, designed to reduce heat islands and provide accessible green space for residents and workers.",
      "\"Sustainability isn't just about solar panels,\" Mayor Johnson explained. \"It's about creating a livable city for future generations. That means cleaner air, more trees, and walkable neighborhoods.\"",
      "A major component of the vision is the Waterfront Resilience Project, which will upgrade the harbor's seawalls with natural 'living shorelines' to combat rising sea levels while improving marine habitat.",
      "The city also announced incentives for businesses to transition to zero-waste practices and a new municipal composting program set to launch in the spring. \"We're asking everyone to pitch in,\" said Environmental Director Dr. Alice Green. \"Small changes, when done by thousands, make a huge impact.\""
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-nunito text-sm"
            >
              <FaArrowLeft className="text-xs" />
              Back to News
            </Link>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-[#708AA3] text-white text-xs font-nunito font-semibold rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="font-nunito text-lg text-white/80 max-w-2xl">
                {article.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-500 font-nunito text-sm">
              <FaUser className="text-[#708AA3]" />
              {article.author}
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-nunito text-sm">
              <FaCalendar className="text-[#708AA3]" />
              {article.date}
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-nunito text-sm">
              <FaClock className="text-[#708AA3]" />
              {article.readTime}
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className={`font-nunito text-gray-700 leading-relaxed mb-6 ${paragraph === paragraph.toUpperCase() && paragraph.includes(':')
                    ? 'font-bold text-[#1e3a5f] text-lg mt-8'
                    : ''
                  }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share / Back */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#708AA3] text-white rounded-lg font-nunito font-medium hover:bg-[#5a7a93] transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              Back to All News
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
