export type ResourceCategory =
    | "Healthcare"
    | "Family"
    | "Food"
    | "Seniors"
    | "Legal"
    | "Emergency"
    | "Education"
    | "Community"
    | "Recreation"
    | "Religious"
    | "Service Stars";

export interface Resource {
    id: string;
    name: string;
    category: ResourceCategory;
    /** Additional categories this resource belongs to (enables multi-filter matching) */
    categories?: ResourceCategory[];
    shortDescription: string;
    fullDescription: string;
    address: string;
    mapCoordinates: { lat: number; lng: number };
    phone: string;
    website: string;
    email: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
    };
    tags: string[];
    image: string;
    rating: number; // 1-5
}

export const RESOURCES: Resource[] = [
    // Healthcare
    {
        id: "1",
        name: "Harborview Medical Center",
        category: "Healthcare",
        shortDescription: "Comprehensive medical services including emergency care, trauma center, and specialized clinics.",
        fullDescription: "Harborview Medical Center is Port Laken's primary healthcare provider, offering Level I trauma care, burn center services, and comprehensive medical and surgical care. Our dedicated team of specialists is committed to providing high-quality, patient-centered care to all residents.",
        address: "939 Caroline St, Port Angeles, WA 98362",
        // Based on: Olympic Medical Center — 939 Caroline St, Port Angeles
        mapCoordinates: { lat: 48.1154826, lng: -123.4144823 },
        phone: "(206) 744-3000",
        website: "https://www.harborview.org",
        email: "info@harborview.org",
        socialLinks: { facebook: "fb.com/harborview", twitter: "@harborview" },
        tags: ["hospital", "emergency", "trauma", "medical"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        rating: 4.8
    },
    {
        id: "2",
        name: "Port Laken Community Clinic",
        category: "Healthcare",
        shortDescription: "Affordable primary care and walk-in services for families and individuals.",
        fullDescription: "The Community Clinic provides essential primary care services, including routine check-ups, vaccinations, and chronic disease management. We offer a sliding scale fee structure to ensure accessibility for all community members.",
        address: "819 Georgiana St, Port Angeles, WA 98362",
        // Based on: Olympic Peninsula Community Clinic — 819 Georgiana St, Port Angeles
        mapCoordinates: { lat: 48.115317, lng: -123.41765 },
        phone: "(206) 555-0102",
        website: "https://plcommunityclinic.org",
        email: "contact@plclinic.org",
        tags: ["clinic", "primary care", "affordable"],
        image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&q=80",
        rating: 4.5
    },
    {
        id: "3",
        name: "Laken Dental Health",
        category: "Healthcare",
        shortDescription: "Comprehensive dental care for children and adults.",
        fullDescription: "From cleanings to oral surgery, Laken Dental Health provides full-service dental care. We accept most insurance plans and offer emergency dental services.",
        address: "218 S Laurel St, Port Angeles, WA 98362",
        // Based on: Peninsula Dental Clinic — 218 S Laurel St, Port Angeles
        mapCoordinates: { lat: 48.117561, lng: -123.435209 },
        phone: "(206) 555-0123",
        website: "https://lakendental.com",
        email: "appt@lakendental.com",
        tags: ["dentist", "dental", "oral health"],
        image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800&q=80",
        rating: 4.7
    },
    {
        id: "4",
        name: "Vision Plus Eye Care",
        category: "Healthcare",
        shortDescription: "Optometry services and eyewear.",
        fullDescription: "Comprehensive eye exams, contact lens fittings, and a wide selection of frames. Our optometrists are dedicated to preserving and enhancing your vision.",
        address: "1026 E 1st St, Port Angeles, WA 98362",
        // Based on: NOHN Eyecare Services — 1026 E 1st St, Port Angeles
        mapCoordinates: { lat: 48.1114489, lng: -123.4158214 },
        phone: "(206) 555-0199",
        website: "https://visionpluspl.com",
        email: "see@visionpluspl.com",
        tags: ["vision", "optometry", "glasses"],
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        rating: 4.6
    },
    {
        id: "5",
        name: "Port Laken Mental Health Services",
        category: "Healthcare",
        shortDescription: "Counseling and therapy for all ages.",
        fullDescription: "Professional mental health support including individual therapy, couples counseling, and group sessions. We specialize in anxiety, depression, and trauma recovery.",
        address: "118 E 8th St, Port Angeles, WA 98362",
        // Based on: Peninsula Behavioral Health — 118 E 8th St, Port Angeles
        mapCoordinates: { lat: 48.1122743, lng: -123.4381435 },
        phone: "(206) 555-0800",
        website: "https://plmentalhealth.org",
        email: "help@plmentalhealth.org",
        tags: ["mental health", "therapy", "counseling"],
        image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80",
        rating: 4.9
    },

    // Family
    {
        id: "6",
        name: "Eastlaken Community Center",
        category: "Family",
        shortDescription: "Family programs, youth activities, and community events.",
        fullDescription: "A vibrant hub for the Eastlaken neighborhood, offering after-school programs, summer camps, fitness classes, and community meeting spaces. Join us for weekly movie nights and seasonal festivals.",
        address: "308 E 4th St, Port Angeles, WA 98362",
        // Based on: Vern Burton Community Center — 308 E 4th St, Port Angeles
        mapCoordinates: { lat: 48.1143219, lng: -123.4317178 },
        phone: "(206) 555-1234",
        website: "https://eastlakencc.org",
        email: "info@eastlakencc.org",
        socialLinks: { instagram: "@eastlaken_cc" },
        tags: ["community center", "youth", "family", "activities"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        rating: 4.8
    },
    {
        id: "7",
        name: "Little Stars Daycare",
        category: "Family",
        shortDescription: "Licensed childcare and early learning.",
        fullDescription: "Providing a safe, nurturing environment for children aged 6 months to 5 years. Our curriculum focuses on social-emotional development and early literacy.",
        address: "712 E 5th St, Port Angeles, WA 98362",
        // Based on: Curious Critters Early Learning Center — 712 E 5th St, Port Angeles
        mapCoordinates: { lat: 48.1106672, lng: -123.4253774 },
        phone: "(206) 555-2200",
        website: "https://littlestarspl.com",
        email: "enroll@littlestarspl.com",
        tags: ["childcare", "daycare", "preschool"],
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
        rating: 4.7
    },
    {
        id: "8",
        name: "Port Laken Parenting Support",
        category: "Family",
        shortDescription: "Workshops and resources for new parents.",
        fullDescription: "Free workshops on breastfeeding, sleep training, and positive discipline. Connect with other parents in our weekly support groups.",
        address: "325 E 6th St, Port Angeles, WA 98362",
        // Based on: First Step Family Support Center Drop In Center — 325 E 6th St, Port Angeles
        mapCoordinates: { lat: 48.1128825, lng: -123.432413 },
        phone: "(206) 555-2345",
        website: "https://plparenting.org",
        email: "support@plparenting.org",
        tags: ["parenting", "support", "workshops"],
        image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
        rating: 4.6
    },
    {
        id: "9",
        name: "Boys & Girls Club of Port Laken",
        category: "Family",
        shortDescription: "Youth mentorship and recreation programs.",
        fullDescription: "Empowering young people to reach their full potential. We offer sports leagues, homework help, and arts programs for kids and teens.",
        address: "2301 S Francis St, Port Angeles, WA 98362",
        // Based on: Boys & Girls Clubs of the Olympic Peninsula, Turner Unit — 2301 S Francis St, Port Angeles
        mapCoordinates: { lat: 48.1046843, lng: -123.4288303 },
        phone: "(206) 555-8888",
        website: "https://bgcpl.org",
        email: "contact@bgcpl.org",
        tags: ["youth", "mentorship", "recreation"],
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
        rating: 4.9
    },
    {
        id: "10",
        name: "Family First Resource Center",
        category: "Family",
        shortDescription: "Connecting families with essential services.",
        fullDescription: "Your one-stop shop for accessing housing assistance, food benefits, and employment resources. Our case managers are here to advocate for your family.",
        address: "323 E 6th St, Port Angeles, WA 98362",
        // Based on: First Step Family Support Center Administrative Building — 323 E 6th St, Port Angeles
        mapCoordinates: { lat: 48.1129863, lng: -123.432521 },
        phone: "(206) 555-9000",
        website: "https://familyfirstpl.org",
        email: "help@familyfirstpl.org",
        tags: ["resource center", "social services", "advocacy"],
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
        rating: 4.5
    },

    // Food
    {
        id: "11",
        name: "Port Laken Food Bank",
        category: "Food",
        shortDescription: "Food assistance for families in need.",
        fullDescription: "Providing nutritious groceries to individuals and families experiencing food insecurity. No ID required. Open Mondays, Wednesdays, and Fridays.",
        address: "632 N Oakridge Dr, Port Angeles, WA 98362",
        // Based on: Port Angeles Food Bank and The Market — 632 N Oakridge Dr, Port Angeles
        mapCoordinates: { lat: 48.1107438, lng: -123.3660841 },
        phone: "(206) 555-4321",
        website: "https://plfoodbank.org",
        email: "volunteer@plfoodbank.org",
        socialLinks: { facebook: "fb.com/plfoodbank" },
        tags: ["food bank", "groceries", "assistance"],
        image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=800&q=80",
        rating: 4.8
    },
    {
        id: "12",
        name: "Meals on Wheels Port Laken",
        category: "Food",
        shortDescription: "Home-delivered meals for seniors and homebound residents.",
        fullDescription: "Nutritious meals delivered directly to your door. We also conduct safety checks and provide social interaction for our clients.",
        address: "328 E 7th St, Port Angeles, WA 98362",
        // Based on: OlyCAP Senior Nutrition / Port Angeles Senior Services — 328 E 7th St, Port Angeles
        mapCoordinates: { lat: 48.111563, lng: -123.433737 },
        phone: "(206) 555-5555",
        website: "https://mowpl.org",
        email: "signup@mowpl.org",
        tags: ["seniors", "delivery", "nutrition"],
        image: "https://images.unsplash.com/photo-1668838268173-816ee121ad4a?w=800&q=80",
        rating: 4.9
    },
    {
        id: "13",
        name: "Urban Harvest Community Garden",
        category: "Food",
        shortDescription: "Grow your own food and learn about urban farming.",
        fullDescription: "A shared green space where residents can rent plots to grow vegetables and flowers. We offer gardening workshops and donate surplus produce to local food banks.",
        address: "328 E 5th St, Port Angeles, WA 98362",
        // Based on: Fifth Street Community Garden — 328 E 5th St, Port Angeles
        mapCoordinates: { lat: 48.113324, lng: -123.432101 },
        phone: "(206) 555-6789",
        website: "https://urbanharvestpl.org",
        email: "grow@urbanharvestpl.org",
        tags: ["garden", "fresh food", "community"],
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
        rating: 4.7
    },
    {
        id: "14",
        name: "The Soup Kitchen at St. Michael's",
        category: "Food",
        categories: ["Food", "Religious", "Community"],
        shortDescription: "Hot daily meals for anyone hungry, run by St. Michael's Cathedral Parish.",
        fullDescription: "Operated by the parish volunteers of St. Michael's Cathedral, The Soup Kitchen serves hot, nutritious lunches and dinners seven days a week. Everyone is welcome at our table — no questions asked. The ministry is a cornerstone of the Cathedral's outreach mission to serve the poor and vulnerable of Port Laken.",
        address: "123 S Peabody St, Port Angeles, WA 98362",
        // Based on: The Salvation Army Port Angeles Food Pantry — 123 S Peabody St, Port Angeles
        mapCoordinates: { lat: 48.1160388, lng: -123.4283317 },
        phone: "(206) 555-9876",
        website: "https://stmichaelsportlaken.org/soup-kitchen",
        email: "soupkitchen@stmichaelsportlaken.org",
        tags: ["meals", "homeless", "hot food", "catholic", "parish", "outreach"],
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
        rating: 4.6
    },

    // Seniors
    {
        id: "15",
        name: "Golden Years Senior Center",
        category: "Seniors",
        shortDescription: "Activities, classes, and support services for seniors 60+.",
        fullDescription: "Join us for fitness classes, art workshops, technology training, and social events. We also offer caregiver support and resource referrals.",
        address: "328 E 7th St, Port Angeles, WA 98362",
        // Based on: Port Angeles Senior Center — 328 E 7th St, Port Angeles
        mapCoordinates: { lat: 48.111515, lng: -123.43351 },
        phone: "(206) 555-6060",
        website: "https://gyscpl.org",
        email: "programs@gyscpl.org",
        tags: ["seniors", "activities", "social"],
        image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80",
        rating: 4.7
    },
    {
        id: "16",
        name: "Senior Transport Services",
        category: "Seniors",
        shortDescription: "Free transportation for medical appointments and grocery shopping.",
        fullDescription: "Volunteer drivers provide door-to-door transportation for eligible seniors. Advance reservation required.",
        address: "830 W Lauridsen Blvd, Port Angeles, WA 98362",
        // Based on: Clallam Transit System — 830 W Lauridsen Blvd, Port Angeles
        mapCoordinates: { lat: 48.1100914, lng: -123.4625755 },
        phone: "(206) 555-7070",
        website: "https://seniortransportpl.org",
        email: "ride@seniortransportpl.org",
        tags: ["transportation", "seniors", "mobility"],
        image: "https://images.unsplash.com/photo-1745096437279-1cf0f995bb2a?w=800&q=80",
        rating: 4.8
    },
    {
        id: "17",
        name: "StoryPoint Senior Living",
        category: "Seniors",
        shortDescription: "Independent and assisted living community.",
        fullDescription: "Comfortable apartments with dining services, housekeeping, and nursing care available. Enjoy stunning views of the lake and a vibrant social calendar.",
        address: "1133 E Park Ave, Port Angeles, WA 98362",
        // Based on: Laurel Place Assisted Living & Memory Care — 1133 E Park Ave, Port Angeles
        mapCoordinates: { lat: 48.1024284, lng: -123.4191970 },
        phone: "(206) 555-8080",
        website: "https://storypointpl.com",
        email: "welcome@storypointpl.com",
        tags: ["housing", "assisted living", "retirement"],
        image: "https://images.unsplash.com/photo-1647913097155-4859fb131dd6?w=800&q=80",
        rating: 4.5
    },

    // Legal
    {
        id: "18",
        name: "Community Legal Services",
        category: "Legal",
        shortDescription: "Free legal assistance for low-income residents.",
        fullDescription: "Providing legal aid for housing disputes, family law, consumer protection, and immigration issues. We ensure equal access to justice.",
        address: "528 W 8th St, Port Angeles, WA 98362",
        // Based on: Clallam County Pro Bono — 528 W 8th St, Port Angeles
        mapCoordinates: { lat: 48.116492, lng: -123.448530 },
        phone: "(206) 555-9999",
        website: "https://clspl.org",
        email: "intake@clspl.org",
        tags: ["legal aid", "pro bono", "lawyer"],
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80",
        rating: 4.8
    },
    {
        id: "19",
        name: "Tenant Rights Union",
        category: "Legal",
        shortDescription: "Advocacy and education for renters.",
        fullDescription: "Know your rights as a tenant. We offer counseling on eviction prevention, lease agreements, and repair issues.",
        address: "319 S Peabody St, Port Angeles, WA 98362",
        // Based on: United Way of Clallam County — 319 S Peabody St, Port Angeles
        mapCoordinates: { lat: 48.1141211, lng: -123.4299258 },
        phone: "(206) 555-0011",
        website: "https://tenantrightspl.org",
        email: "help@tenantrightspl.org",
        tags: ["housing", "tenants", "legal"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        rating: 4.6
    },

    // Emergency
    {
        id: "20",
        name: "Port Laken Police Department - Central Precinct",
        category: "Emergency",
        shortDescription: "Law enforcement and public safety.",
        fullDescription: "Serving the downtown and central neighborhoods. For emergencies, always dial 911. For non-emergencies, call (206) 625-5011.",
        address: "321 E 5th St, Port Angeles, WA 98362",
        // Based on: Port Angeles Police Department — 321 E 5th St, Port Angeles
        mapCoordinates: { lat: 48.1141983, lng: -123.4320323 },
        phone: "911",
        website: "https://police.portlaken.gov",
        email: "police@portlaken.gov",
        tags: ["police", "safety", "emergency"],
        image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800&q=80",
        rating: 4.2
    },
    {
        id: "21",
        name: "Fire Station 10",
        category: "Emergency",
        shortDescription: "Fire suppression and emergency medical services.",
        fullDescription: "Ready to respond to fires, medical emergencies, and rescue operations. Visit us for free blood pressure checks.",
        address: "102 E 5th St, Port Angeles, WA 98362",
        // Based on: Port Angeles Fire Department — 102 E 5th St, Port Angeles
        mapCoordinates: { lat: 48.1151498, lng: -123.4363536 },
        phone: "911",
        website: "https://fire.portlaken.gov",
        email: "fireinfo@portlaken.gov",
        tags: ["fire", "ems", "emergency"],
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
        rating: 4.8
    },
    {
        id: "22",
        name: "Domestic Violence Hotline",
        category: "Emergency",
        shortDescription: "24/7 confidential support for survivors.",
        fullDescription: "Immediate crisis intervention, safety planning, and shelter referrals. You are not alone.",
        address: "2321 W 18th St, Port Angeles, WA 98363",
        // Based on: Serenity House of Clallam County Adult Shelter — 2321 W 18th St, Port Angeles
        mapCoordinates: { lat: 48.1231935, lng: -123.4920216 },
        phone: "1-800-555-SAFE",
        website: "https://dvhopepl.org",
        email: "safe@dvhopepl.org",
        tags: ["crisis", "support", "hotline"],
        image: "https://images.unsplash.com/photo-1628282928102-9d81b72397d8?w=800&q=80",
        rating: 4.9
    },

    // Education
    {
        id: "23",
        name: "Port Laken Public Library - Central",
        category: "Education",
        shortDescription: "Books, technology, and learning for everyone.",
        fullDescription: "An architectural marvel and a center for knowledge. Access computers, free wifi, job search assistance, and millions of books.",
        address: "2210 S Peabody St, Port Angeles, WA 98362",
        // Based on: North Olympic Library System — 2210 S Peabody St, Port Angeles
        mapCoordinates: { lat: 48.1062041, lng: -123.4391900 },
        phone: "(206) 386-4636",
        website: "https://spl.org",
        email: "librarian@spl.org",
        tags: ["library", "books", "internet"],
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
        rating: 4.9
    },
    {
        id: "24",
        name: "Lakefront High School",
        category: "Education",
        shortDescription: "Public high school serving grades 9-12.",
        fullDescription: "Home of the Lakers. Dedicated to academic excellence and preparing students for college and careers.",
        address: "304 E Park Ave, Port Angeles, WA 98362",
        // Based on: Port Angeles High School — 304 E Park Ave, Port Angeles
        mapCoordinates: { lat: 48.1007549, lng: -123.4383328 },
        phone: "(206) 555-3000",
        website: "https://lakefronths.portlaken.k12.wa.us",
        email: "office@lakefronths.k12.wa.us",
        tags: ["school", "high school", "education"],
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
        rating: 4.4
    },
    {
        id: "25",
        name: "Port Laken Community College",
        category: "Education",
        shortDescription: "Affordable higher education and workforce training.",
        fullDescription: "Offering associate degrees, vocational certificates, and transfer programs. Start your future here.",
        address: "1502 E Lauridsen Blvd, Port Angeles, WA 98362",
        // Based on: Peninsula College — 1502 E Lauridsen Blvd, Port Angeles
        mapCoordinates: { lat: 48.1022666, lng: -123.4124396 },
        phone: "(206) 934-3800",
        website: "https://seattlecentral.edu",
        email: "info@seattlecentral.edu",
        tags: ["college", "education", "training"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
        rating: 4.6
    },
    {
        id: "26",
        name: "Olympic University",
        category: "Education",
        shortDescription: "A top-20 global research university on the Pacific Rim.",
        fullDescription: "Olympic University is a world-leading research institution with global strength in chemistry, molecular biology, law, and international law. Known for Nobel-level scientific research, elite legal scholarship, and strong ties to global policy institutions across the Pacific and Europe.",
        address: "1700 E Lauridsen Blvd, Port Angeles, WA 98362",
        // Based on: Upper campus area east of Peninsula College — Port Angeles
        mapCoordinates: { lat: 48.1018, lng: -123.4089 },
        phone: "(360) 555-2201",
        website: "https://olympicu.edu",
        email: "admissions@olympicu.edu",
        tags: ["university", "research", "top-20", "chemistry", "biology", "law", "international law"],
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
        rating: 4.8
    },
    {
        id: "41",
        name: "Early Learning Center",
        category: "Education",
        shortDescription: "Head Start and ECEAP programs.",
        fullDescription: "Free preschool for income-eligible families. We support the whole child and the whole family.",
        address: "2321 S Francis St, Port Angeles, WA 98362",
        // Based on: Mount Angeles View Headstart — 2321 S Francis St, Port Angeles
        mapCoordinates: { lat: 48.1040634, lng: -123.4286438 },
        phone: "(206) 555-4000",
        website: "https://elcpl.org",
        email: "enroll@elcpl.org",
        tags: ["preschool", "head start", "education"],
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
        rating: 4.8
    },
    {
        id: "27",
        name: "Port Laken Montessori School",
        category: "Education",
        shortDescription: "Child-centered Montessori early learning.",
        fullDescription: "Serving children ages 2.5–6 through accredited Montessori programs that foster independence, curiosity, and confidence in a nurturing classroom environment.",
        address: "105 W 6th St, Port Angeles, WA 98362",
        // Based on: Children's Montessori School — 105 W 6th St, Port Angeles
        mapCoordinates: { lat: 48.1149616, lng: -123.4375226 },
        phone: "(206) 555-4123",
        website: "https://plmontessori.org",
        email: "admissions@plmontessori.org",
        tags: ["montessori", "preschool", "early learning"],
        image: "https://images.unsplash.com/photo-1596066190600-3af9aadaaea1?w=800&q=80",
        rating: 4.7
    },
    {
        id: "29",
        name: "Port Laken KinderCare",
        category: "Education",
        shortDescription: "Early education and child care for infants through pre-K.",
        fullDescription: "Providing licensed child care and early learning programs for infants, toddlers, preschool, and pre-kindergarten. Our curriculum supports social, emotional, and academic development in a safe, structured environment.",
        address: "1010 E Front St, Port Angeles, WA 98362",
        // Based on: Kid's Kampus Preschool & Daycare — 1010 E Front St, Port Angeles
        mapCoordinates: { lat: 48.112691, lng: -123.415959 },
        phone: "(206) 555-4520",
        website: "https://www.kindercare.com",
        email: "portlaken@kindercare.com",
        tags: ["childcare", "early learning", "preschool", "pre-k"],
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80",
        rating: 4.4
    },

    // Community
    {
        id: "42",
        name: "Port Laken City Hall",
        category: "Community",
        shortDescription: "Municipal government services.",
        fullDescription: "Pay utility bills, apply for permits, and attend city council meetings. Your local government at work.",
        address: "321 E 5th St, Port Angeles, WA 98362",
        // Based on: Port Angeles City Hall — 321 E 5th St, Port Angeles
        mapCoordinates: { lat: 48.1142082, lng: -123.4321594 },
        phone: "(206) 684-2489",
        website: "https://portlaken.gov",
        email: "mayor@portlaken.gov",
        tags: ["government", "city", "services"],
        image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80",
        rating: 4.3
    },
    {
        id: "28",
        name: "Downtown Neighborhood Association",
        category: "Community",
        shortDescription: "Advocating for downtown residents.",
        fullDescription: "Promoting a safe, clean, and vibrant downtown neighborhood. Monthly meetings open to all residents.",
        address: "102 E 1st St, Port Angeles, WA 98362",
        // Based on: Port Angeles Waterfront District — 102½ E 1st St, Port Angeles
        mapCoordinates: { lat: 48.1187243, lng: -123.4333791 },
        phone: "(206) 555-9988",
        website: "https://dnapl.org",
        email: "board@dnapl.org",
        tags: ["neighborhood", "community", "advocacy"],
        image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
        rating: 4.5
    },
    {
        id: "43",
        name: "Port Laken Humane Society",
        category: "Community",
        shortDescription: "Animal shelter and adoption center.",
        fullDescription: "Find your new best friend. We offer pet adoptions, low-cost spay/neuter services, and dog training classes.",
        address: "1743 Old Olympic Hwy, Port Angeles, WA 98362",
        // Based on: Olympic Peninsula Humane Society Barkhouse — 1743 Old Olympic Hwy, Port Angeles
        mapCoordinates: { lat: 48.1078206, lng: -123.2710421 },
        phone: "(425) 641-0080",
        website: "https://plhumane.org",
        email: "adopt@plhumane.org",
        tags: ["animals", "pets", "adoption"],
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
        rating: 4.8
    },

    // Recreation
    {
        id: "30",
        name: "Green Lake Park",
        category: "Recreation",
        shortDescription: "Urban park with a lake, trails, and sports fields.",
        fullDescription: "One of Port Laken's most beloved parks. Walk or run the 2.8-mile path around the lake, rent a paddleboat, or play tennis.",
        address: "613 S G St, Port Angeles, WA 98362",
        // Based on: Shane Park — 613 S G St, Port Angeles (large city park with fields, trails, sports)
        mapCoordinates: { lat: 48.1236113, lng: -123.4621725 },
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        rating: 4.9
    },
    {
        id: "31",
        name: "Port Laken Aquarium",
        category: "Recreation",
        shortDescription: "Discover the marine life of the Pacific Northwest.",
        fullDescription: "Explore exhibits featuring sea otters, octopuses, and colorful fish. Great family fun on the waterfront.",
        address: "315 N Lincoln St, Port Angeles, WA 98362",
        // Based on: Feiro Marine Life Center — 315 N Lincoln St, Port Angeles
        mapCoordinates: { lat: 48.1201928, lng: -123.4288923 },
        phone: "(206) 386-4300",
        website: "https://seattleaquarium.org",
        email: "info@seattleaquarium.org",
        tags: ["aquarium", "family", "fun"],
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        rating: 4.6
    },
    {
        id: "32",
        name: "Discovery Park",
        category: "Recreation",
        shortDescription: "Largest city park with beaches and forest trails.",
        fullDescription: "A natural sanctuary in the city. Hike through forests, walk along the sandy beach, and visit the historic West Point Lighthouse.",
        address: "3002 Mt Angeles Rd, Port Angeles, WA 98362",
        // Based on: Olympic National Park visitor center — Port Angeles gateway
        mapCoordinates: { lat: 48.1023814, lng: -123.4303447 },
        phone: "(206) 386-4236",
        website: "https://seattle.gov/parks",
        email: "parks@portlaken.gov",
        tags: ["hiking", "beach", "nature"],
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        rating: 4.9
    },
    {
        id: "33",
        name: "Yoga by the Lake",
        category: "Recreation",
        shortDescription: "Community yoga studio.",
        fullDescription: "Offering Vinyasa, Hatha, and Yin yoga classes for all levels. First class is free.",
        address: "110 W 1st St, Port Angeles, WA 98362",
        // Based on: ONYX MVMNT Studios — 110 W 1st St, Port Angeles
        mapCoordinates: { lat: 48.1191477, lng: -123.4341881 },
        phone: "(206) 555-1080",
        website: "https://yogabylakepl.com",
        email: "namaste@yogabylakepl.com",
        tags: ["yoga", "fitness", "wellness"],
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80",
        rating: 4.8
    },
    {
        id: "34",
        name: "CrossFit Port Laken",
        category: "Recreation",
        shortDescription: "Functional fitness gym.",
        fullDescription: "High-intensity workouts led by certified coaches. Build strength and community.",
        address: "224 E 1st St, Port Angeles, WA 98362",
        // Based on: Storm King Athletic Club (CrossFit) — 224 E 1st St, Port Angeles
        mapCoordinates: { lat: 48.1177, lng: -123.4307041 },
        phone: "(206) 555-9900",
        website: "https://www.crossfit.com/",
        email: "portlaken@crossfit.com",
        tags: ["gym", "fitness", "workout"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        rating: 4.7
    },

    // More Education
    {
        id: "35",
        name: "iCode Port Laken",
        category: "Education",
        shortDescription: "STEM education and coding for kids and teens.",
        fullDescription: "iCode Port Laken offers after-school programs, camps, and competitive coding experiences for students ages 6–18. Courses include coding, robotics, game development, and AI fundamentals in a collaborative, project-based environment.",
        address: "221 N Race St, Port Angeles, WA 98362",
        // Based on: Pacific Northwest Discovery Academy — 221 N Race St, Port Angeles
        mapCoordinates: { lat: 48.1144914, lng: -123.4172736 },
        phone: "(206) 555-4263",
        website: "https://www.icodeschool.com",
        email: "portlaken@icodeschool.com",
        tags: ["coding", "stem", "education"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
        rating: 4.6
    },

    // More Community
    {
        id: "36",
        name: "Port Laken Art Museum",
        category: "Community",
        shortDescription: "Contemporary and classic art exhibits.",
        fullDescription: "Experience world-class art right here in Port Laken. Free admission on first Thursdays.",
        address: "1203 E Lauridsen Blvd, Port Angeles, WA 98362",
        // Based on: Port Angeles Fine Arts Center — 1203 E Lauridsen Blvd, Port Angeles
        mapCoordinates: { lat: 48.1043051, lng: -123.4190275 },
        phone: "(206) 654-3100",
        website: "https://seattleartmuseum.org",
        email: "visit@portlakenart.org",
        tags: ["art", "culture", "museum"],
        image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
        rating: 4.7
    },
    {
        id: "37",
        name: "Volunteer Port Laken",
        category: "Community",
        shortDescription: "Connecting volunteers with non-profits.",
        fullDescription: "Find meaningful volunteer opportunities that match your skills and interests. Give back to your community.",
        address: "1601 E Front St, Port Angeles, WA 98362",
        // Based on: Concerned Citizens of Port Angeles — 1601 E Front St, Port Angeles
        mapCoordinates: { lat: 48.1088386, lng: -123.4050884 },
        phone: "(206) 555-VOLS",
        website: "https://volunteerpl.org",
        email: "helpout@volunteerpl.org",
        tags: ["volunteer", "service", "non-profit"],
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
        rating: 4.8
    },

    // More Food
    {
        id: "38",
        name: "Fresh Market Co-op",
        category: "Food",
        shortDescription: "Community-owned grocery store.",
        fullDescription: "Organic, local, and sustainable food. Open to everyone, members get discounts.",
        address: "200 W 1st St, Port Angeles, WA 98362",
        // Based on: Country Aire Natural Foods — 200 W 1st St, Port Angeles
        mapCoordinates: { lat: 48.1197509, lng: -123.4361024 },
        phone: "(206) 555-FARM",
        website: "https://centralcoop.coop",
        email: "info@centralcoop.coop",
        tags: ["grocery", "organic", "local"],
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
        rating: 4.5
    },

    // More Seniors
    {
        id: "39",
        name: "Silver Sneakers Club",
        category: "Seniors",
        shortDescription: "Fitness program for older adults.",
        fullDescription: "Stay active and healthy with our specialized fitness classes designed for seniors.",
        address: "114 S Lincoln St, Port Angeles, WA 98362",
        // Based on: Fitness West — 114 S Lincoln St, Port Angeles
        mapCoordinates: { lat: 48.117837, lng: -123.432404 },
        phone: "1-888-423-4632",
        website: "https://silversneakers.com",
        email: "support@silversneakers.com",
        tags: ["fitness", "seniors", "health"],
        image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
        rating: 4.6
    },

    // More Housing
    {
        id: "40",
        name: "Port Laken Housing Authority",
        category: "Family",
        shortDescription: "Affordable housing programs.",
        fullDescription: "Providing stable, quality housing for low-income families, seniors, and people with disabilities.",
        address: "727 E 8th St, Port Angeles, WA 98362",
        // Based on: Peninsula Housing Authority — 727 E 8th St, Port Angeles
        mapCoordinates: { lat: 48.10809, lng: -123.4264326 },
        phone: "(206) 615-3300",
        website: "https://seattlehousing.org",
        email: "info@seattlehousing.org",
        tags: ["housing", "affordable", "government"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        rating: 4.4
    },

    // Parks
    {
        id: "44",
        name: "Elm Street Park",
        category: "Recreation",
        shortDescription: "Port Laken's newest green space with walking trails and community pavilion.",
        fullDescription: "Elm Street Park is Port Laken's newest green space, opened January 2026. Built on a former industrial lot, it features walking trails, a native plant garden, and a community pavilion. Benches throughout provide restful spots to enjoy the landscape.",
        address: "207 W Railroad Ave, Port Angeles, WA 98362",
        // Based on: Waterfront Park — 207 W Railroad Ave, Port Angeles
        mapCoordinates: { lat: 48.1210374, lng: -123.4325808 },
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        rating: 4.9
    },
    {
        id: "45",
        name: "Lakeview Waterfront Park",
        category: "Recreation",
        shortDescription: "14-acre waterfront park with boat launch and restored habitat.",
        fullDescription: "A 14-acre waterfront park along the Port Laken shoreline offering picnic areas, a boat launch, and restored wetland habitat. The Wetland Trail provides scenic views and opportunities for bird watching. Fishing is available from the designated pier.",
        address: "Port Angeles Waterfront, Port Angeles, WA 98362",
        // Based on: Waterfront Trail / Olympic Discovery Trail — Port Angeles harbor area
        mapCoordinates: { lat: 48.1237169, lng: -123.4477244 },
        phone: "(206) 684-4075",
        website: "https://seattle.gov/parks",
        email: "parks@portlaken.gov",
        tags: ["park", "waterfront", "boating", "fishing", "picnic"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        rating: 4.8
    },
    {
        id: "46",
        name: "Riverside Community Garden",
        category: "Food",
        shortDescription: "Community garden with 80+ plots and composting facilities.",
        fullDescription: "One of 12 community garden sites in Port Laken, Riverside hosts over 80 active garden plots alongside a composting station. Gardeners enjoy shared tool shed access and attend seasonal workshops on urban farming and sustainable gardening practices.",
        address: "811 Caroline St, Port Angeles, WA 98362",
        // Based on: 9/11 Memorial Waterfront Park area — 811 Caroline St, Port Angeles
        mapCoordinates: { lat: 48.1169026, lng: -123.4175939 },
        image: "https://images.unsplash.com/photo-1631195414013-85b70ff2c180?w=800&q=80",
        rating: 4.7
    },

    // Restaurants
    {
        id: "47",
        name: "Portside Grille",
        category: "Food",
        shortDescription: "Downtown restaurant committed to supporting local food networks.",
        fullDescription: "Portside Grille is a downtown dining destination that partners with the Port Laken Community Food Network to donate surplus food. The restaurant specializes in fresh, locally-sourced ingredients and is deeply invested in community food security initiatives.",
        address: "122 W Lauridsen Blvd, Port Angeles, WA 98362",
        // Based on: Yodelin Broth Company — 122 W Lauridsen Blvd, Port Angeles
        mapCoordinates: { lat: 48.1073436, lng: -123.4464589 },
        phone: "(206) 555-3050",
        website: "https://portside-grille.com",
        email: "info@portside-grille.com",
        tags: ["restaurant", "dining", "local", "food"],
        image: "https://media.istockphoto.com/id/2153912560/photo/modern-coffee-shop-interior-with-tables-coffee-maker-pastries-and-walled-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=r-jKhFS7dZXoFnTkbVx8tzhJNFwTCJpRVjMul6fZ04c=",
        rating: 4.7
    },
    {
        id: "48",
        name: "Canela",
        category: "Food",
        shortDescription: "Community-focused restaurant supporting local food initiatives.",
        fullDescription: "Owned by David Okafor, Canela is a restaurant dedicated to community engagement and food sustainability. As an early partner with the Port Laken Community Food Network, Canela participates in the weekly surplus food program that rescues nutritious meals for families in need.",
        address: "112 W Front St, Port Angeles, WA 98362",
        // Nearby downtown restaurant location — Port Angeles waterfront district
        mapCoordinates: { lat: 48.1191, lng: -123.4355 },
        phone: "(206) 555-3055",
        website: "https://canela-restaurant.com",
        email: "reservations@canela-restaurant.com",
        tags: ["restaurant", "community", "sustainable", "dining"],
        image: "https://images.unsplash.com/photo-1573822028151-731623cb0722?w=800&q=80",
        rating: 4.8
    },
    {
        id: "49",
        name: "The Mariner",
        category: "Food",
        shortDescription: "Waterfront restaurant partnering with community food programs.",
        fullDescription: "The Mariner is a waterfront restaurant committed to reducing food waste and supporting community nutrition programs. As a key partner with the Port Laken Community Food Network, The Mariner participates in initiatives to donate surplus food to families in need.",
        address: "221 N Lincoln St, Port Angeles, WA 98362",
        // Waterfront area near ferry terminal — Port Angeles
        mapCoordinates: { lat: 48.12019, lng: -123.42889 },
        phone: "(206) 555-3060",
        website: "https://the-mariner-restaurant.com",
        email: "info@the-mariner.com",
        tags: ["restaurant", "waterfront", "food", "community"],
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
        rating: 4.6
    },

    // Community Businesses
    {
        id: "50",
        name: "Harbor Brew Coffee",
        category: "Community",
        shortDescription: "Local coffee shop that donates profits to homeless shelters.",
        fullDescription: "Harbor Brew Coffee is a beloved Main Street café committed to making a difference in the community. The coffee shop donates 10% of profits to local homeless shelters and is a gathering place that reflects Port Laken's values of connection and compassion.",
        address: "115 E Railroad Ave, Port Angeles, WA 98362",
        // Based on: Downriggers on the Water area — 115 E Railroad Ave, Port Angeles waterfront
        mapCoordinates: { lat: 48.1210897, lng: -123.4302195 },
        website: "https://harborbrewcoffee.com",
        email: "hello@harborbrewcoffee.com",
        socialLinks: { instagram: "@harborbrewcoffee" },
        tags: ["coffee", "café", "community", "social mission"],
        image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80",
        rating: 4.8
    },
    {
        id: "51",
        name: "Pages & Prose",
        category: "Community",
        shortDescription: "Independent bookstore hosting community reading clubs.",
        fullDescription: "Pages & Prose is a cozy independent bookstore that serves as a cultural hub for Port Laken. The shop hosts weekly reading clubs, author events, and community gatherings, creating a welcoming space for book lovers and lifelong learners.",
        address: "104 E 1st St, Port Angeles, WA 98362",
        // Based on: Port Book and News — 104 E 1st St, Port Angeles
        mapCoordinates: { lat: 48.1187167, lng: -123.4334472 },
        phone: "(206) 555-2700",
        website: "https://pages-and-prose.com",
        email: "info@pagesandprose.com",
        tags: ["bookstore", "reading", "community", "events"],
        image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=800&q=80",
        rating: 4.7
    },
    {
        id: "52",
        name: "Green Thumb Nursery",
        category: "Community",
        shortDescription: "Family-owned nursery specializing in native plants and sustainable landscaping.",
        fullDescription: "Green Thumb Nursery is a three-generation family business specializing in native plants and sustainable landscaping. Located at 789 Cedar Lane, the nursery offers free consultations, native landscaping workshops, and expert advice on creating thriving, environmentally-conscious gardens.",
        address: "826 E 1st St, Port Angeles, WA 98362",
        // Based on: Sprouting Hope Greenhouse — 826 E 1st St, Port Angeles
        mapCoordinates: { lat: 48.113107, lng: -123.4197315 },
        phone: "(206) 555-3200",
        website: "https://greenthumbportlaken.com",
        email: "info@greenthumbportlaken.com",
        tags: ["nursery", "native plants", "gardening", "sustainability"],
        image: "https://media.istockphoto.com/id/2194723896/photo/gardener-center-worker-pushing-a-cart-loaded-with-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=D3lYS9SdO_Pznz7UxAOj09HQ8Gt0yCFdZD89voxNoR8=",
        rating: 4.8
    },

    // Community Centers
    {
        id: "53",
        name: "Harbor Community Center",
        category: "Community",
        shortDescription: "Community gathering space hosting workshops and community events.",
        fullDescription: "Harbor Community Center is a welcoming community gathering space that hosts a variety of programs including cooking classes, food network information sessions, and community events. The center provides meeting rooms and facilities for local organizations and residents.",
        address: "328 E 7th St, Port Angeles, WA 98362",
        // Based on: Port Angeles Community Center — 328 E 7th St, Port Angeles
        mapCoordinates: { lat: 48.1116633, lng: -123.4335472 },
        phone: "(206) 555-4500",
        website: "https://harborcommunitycenter.org",
        email: "info@harborcommunitycenter.org",
        tags: ["community center", "events", "programs", "gathering"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        rating: 4.6
    },
    {
        id: "54",
        name: "Future Forward Port Laken",
        category: "Family",
        shortDescription: "Youth mentorship program providing transformational relationships.",
        fullDescription: "Future Forward Port Laken is a mentorship organization dedicated to supporting young people through meaningful, long-term relationships. Founded by Michael Chen in 2013, the program pairs mentors with mentees for at least two years, with a commitment to reliability, consistency, and positive outcomes. The program has supported over 200 young people with 94% high school graduation rate.",
        address: "826 E 1st St, Port Angeles, WA 98362",
        // Based on: The Answer For Youth — 826 E 1st St, Port Angeles
        mapCoordinates: { lat: 48.1130568, lng: -123.4197728 },
        phone: "(206) 555-7800",
        website: "https://futureforwardportlaken.org",
        email: "info@futureforwardportlaken.org",
        tags: ["mentorship", "youth", "education", "community"],
        image: "https://images.unsplash.com/photo-1758687126375-e2c1683219e9?w=800&q=80",
        rating: 4.9
    },
    {
        id: "55",
        name: "Westside Elementary School",
        category: "Education",
        shortDescription: "Public elementary school serving Port Laken's west side.",
        fullDescription: "Westside Elementary is a public elementary school committed to providing quality education and fostering community connections. The school engages with local organizations and community initiatives, such as partnering with the Port Laken Community Food Network and creating collaborative art projects.",
        address: "2505 S Washington St, Port Angeles, WA 98362",
        // Based on: Franklin Elementary School — 2505 S Washington St, Port Angeles
        mapCoordinates: { lat: 48.1035232, lng: -123.4235992 },
        phone: "(206) 555-3500",
        website: "https://westsideelementary.portlaken.k12.wa.us",
        email: "office@westsideelementary.k12.wa.us",
        tags: ["school", "elementary", "education", "public"],
        image: "https://plus.unsplash.com/premium_photo-1723773874409-8661740a79b6?w=800&q=80",
        rating: 4.5
    },

    // Recreation - Watersports
    {
        id: "56",
        name: "Laken Watersports Co.",
        category: "Recreation",
        shortDescription: "Kayak, paddleboard, and jet ski rentals on the waterfront.",
        fullDescription: "Laken Watersports Co. is Port Laken's premier waterfront adventure hub. Rent kayaks, stand-up paddleboards, canoes, and jet skis by the hour or the day. We also offer guided tours of the harbor, beginner surf lessons, and seasonal whale-watching excursions. All equipment and safety gear included.",
        address: "220 E 1st St, Port Angeles, WA 98362",
        // Based on: Elevate Outdoors — 220 E 1st St, Port Angeles
        mapCoordinates: { lat: 48.1177698, lng: -123.4308502 },
        phone: "(206) 555-7700",
        website: "https://lakenwatersports.com",
        email: "paddle@lakenwatersports.com",
        socialLinks: { instagram: "@lakenwatersports" },
        tags: ["kayak", "paddleboard", "jet ski", "watersports", "beach", "waterfront"],
        image: "https://images.unsplash.com/photo-1581545048011-564bf4a743ab?w=800&q=80",
        rating: 4.8
    },

    // Legal
    {
        id: "57",
        name: "Port Laken Immigration Law Clinic",
        category: "Legal",
        shortDescription: "Free immigration legal services for residents and families.",
        fullDescription: "The Immigration Law Clinic provides free and low-cost legal assistance for visa applications, DACA renewals, asylum cases, naturalization, and family-based petitions. Staffed by licensed immigration attorneys and supervised law students, we serve Port Laken's diverse immigrant community with compassion and expertise.",
        address: "412 E 3rd St, Port Angeles, WA 98362",
        // Based on: nearby legal office area east of downtown — Port Angeles
        mapCoordinates: { lat: 48.1175, lng: -123.4270 },
        website: "https://plimmigrationclinic.org",
        email: "intake@plimmigrationclinic.org",
        tags: ["immigration", "legal aid", "visa", "DACA", "asylum"],
        image: "https://images.unsplash.com/photo-1765020553734-2c050ddb9494?w=800&q=80",
        rating: 4.7
    },

    // Family
    {
        id: "58",
        name: "Port Laken Foster & Adoption Services",
        category: "Family",
        shortDescription: "Support and resources for foster and adoptive families.",
        fullDescription: "Connecting children in need with loving families. We provide training, licensing support, and ongoing case management for foster and adoptive parents. Our team offers 24/7 crisis support and connects families with counseling, respite care, and community networks.",
        address: "1210 E Front St, Port Angeles, WA 98362",
        // Based on: Healthy Families of Clallam County — 1210 E Front St, Port Angeles
        mapCoordinates: { lat: 48.1111715, lng: -123.4123795 },
        phone: "(206) 555-3388",
        website: "https://plfosteradopt.org",
        email: "families@plfosteradopt.org",
        tags: ["foster care", "adoption", "family", "children"],
        image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",
        rating: 4.8
    },
    {
        id: "59",
        name: "Laken Family Counseling Center",
        category: "Family",
        shortDescription: "Affordable family and couples therapy.",
        fullDescription: "The Laken Family Counseling Center offers sliding-scale therapy for families, couples, and individuals navigating life transitions, conflict, grief, and trauma. Our licensed therapists specialize in family systems, child behavioral issues, and co-parenting support.",
        address: "113 S Eunice St, Port Angeles, WA 98362",
        // Based on: Lisa McSweeney Counseling — 113 S Eunice St, Port Angeles
        mapCoordinates: { lat: 48.1139512, lng: -123.4228697 },
        phone: "(206) 555-4411",
        website: "https://lakenfamilycounseling.org",
        email: "appointments@lakenfamilycounseling.org",
        tags: ["counseling", "therapy", "family", "couples"],
        image: "https://images.unsplash.com/photo-1654613698275-b0930ef9570f?w=800&q=80",
        rating: 4.6
    },

    // Service Stars
    {
        id: "60",
        name: "Port Laken Community Food Network",
        category: "Service Stars",
        shortDescription: "Citywide network rescuing surplus food and feeding families in need.",
        fullDescription: "The Port Laken Community Food Network coordinates with local restaurants, grocery stores, and farms to rescue surplus food and redistribute it to families experiencing food insecurity. The network operates weekly distribution events across the city and partners with schools, community centers, and faith organizations to reach those most in need.",
        address: "500 E 4th St, Port Angeles, WA 98362",
        // Based on: East downtown Port Angeles, near Olympic Medical campus
        mapCoordinates: { lat: 48.1168, lng: -123.4260 },
        phone: "(206) 555-6100",
        website: "https://plfoodnetwork.org",
        email: "connect@plfoodnetwork.org",
        socialLinks: { facebook: "fb.com/plfoodnetwork", instagram: "@plfoodnetwork" },
        tags: ["food rescue", "food insecurity", "community", "network"],
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
        rating: 4.9
    },
    {
        id: "61",
        name: "Port Laken Habitat for Humanity",
        category: "Service Stars",
        shortDescription: "Building affordable homes and stronger communities.",
        fullDescription: "Port Laken Habitat for Humanity partners with families and volunteers to build and repair homes for low-income residents. Through sweat equity and community fundraising, we've helped over 150 families achieve stable, affordable homeownership. Volunteer build days are open to everyone.",
        address: "728 E Front St, Port Angeles, WA 98362",
        // Based on: Habitat for Humanity of Clallam County — 728 E Front St, Port Angeles
        mapCoordinates: { lat: 48.1146822, lng: -123.4208432 },
        phone: "(206) 555-4224",
        website: "https://plhabitat.org",
        email: "volunteer@plhabitat.org",
        socialLinks: { facebook: "fb.com/plhabitat" },
        tags: ["housing", "volunteer", "affordable homes", "community"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        rating: 4.9
    },
    {
        id: "62",
        name: "Laken Literacy Project",
        category: "Service Stars",
        shortDescription: "Free adult literacy and ESL tutoring for Port Laken residents.",
        fullDescription: "The Laken Literacy Project provides free one-on-one tutoring and small group classes for adults seeking to improve reading, writing, and English language skills. Our volunteer tutors work with learners at all levels, from basic literacy to GED preparation and professional communication.",
        address: "1116 Eckard Ave, Port Angeles, WA 98362",
        // Based on: Port Angeles Tutoring — 1116 Eckard Ave, Port Angeles
        mapCoordinates: { lat: 48.0954111, lng: -123.4216783 },
        phone: "(206) 555-5252",
        website: "https://lakenliteracy.org",
        email: "learn@lakenliteracy.org",
        tags: ["literacy", "ESL", "education", "tutoring", "adult learning"],
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
        rating: 4.8
    },
    {
        id: "63",
        name: "Port Laken Clean Streets Initiative",
        category: "Service Stars",
        shortDescription: "Community-led neighborhood cleanup and beautification program.",
        fullDescription: "The Clean Streets Initiative organizes monthly neighborhood cleanups, graffiti removal, and beautification projects across Port Laken. Powered entirely by volunteers, the program has removed over 40 tons of litter and planted more than 500 trees since its founding in 2018. Join a cleanup event or adopt a block in your neighborhood.",
        address: "223 E 4th St, Port Angeles, WA 98362",
        // Based on: Port Angeles City Hall annex area — 223 E 4th St, Port Angeles
        mapCoordinates: { lat: 48.117, lng: -123.4288 },
        phone: "(206) 555-7720",
        website: "https://plcleanstreets.org",
        email: "join@plcleanstreets.org",
        socialLinks: { instagram: "@plcleanstreets" },
        tags: ["cleanup", "volunteer", "environment", "beautification"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        rating: 4.7
    },
    {
        id: "64",
        name: "Harbor Hope Homeless Outreach",
        category: "Service Stars",
        shortDescription: "Street outreach, shelter referrals, and wraparound services for unhoused residents.",
        fullDescription: "Harbor Hope provides compassionate street outreach to Port Laken's unhoused population, connecting individuals with emergency shelter, mental health services, substance use treatment, and long-term housing programs. Our outreach workers are on the streets seven days a week, meeting people where they are.",
        address: "410 W 1st St, Port Angeles, WA 98362",
        // Based on: West downtown Port Angeles outreach area
        mapCoordinates: { lat: 48.1190, lng: -123.4430 },
        website: "https://harborhope.org",
        email: "outreach@harborhope.org",
        socialLinks: { facebook: "fb.com/harborhope" },
        tags: ["homeless", "outreach", "shelter", "social services"],
        image: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?w=800&q=80",
        rating: 4.9
    },

    // Grocery Stores
    {
        id: "65",
        name: "Kroger Port Laken",
        category: "Food",
        shortDescription: "Full-service grocery store with pharmacy and fuel center.",
        fullDescription: "Kroger Port Laken offers a wide selection of groceries, fresh produce, deli, bakery, pharmacy services, and a fuel center. The store features Kroger's digital coupons and loyalty rewards program. Open daily.",
        address: "110 E 3rd St, Port Angeles, WA 98362",
        // Based on: Safeway — 110 E 3rd St, Port Angeles
        mapCoordinates: { lat: 48.1159861, lng: -123.4351831 },
        phone: "(206) 555-5600",
        website: "https://www.kroger.com",
        email: "portlaken@kroger.com",
        tags: ["grocery", "supermarket", "pharmacy", "food"],
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80",
        rating: 4.2
    },
    {
        id: "66",
        name: "Walmart Supercenter Port Laken",
        category: "Food",
        shortDescription: "Supercenter with groceries, electronics, clothing, and more.",
        fullDescription: "Port Laken's Walmart Supercenter carries a full grocery department alongside electronics, clothing, home goods, auto care, and a pharmacy. With everyday low prices and extended hours, it's a one-stop shop for the whole family.",
        address: "3411 E Kolonels Way, Port Angeles, WA 98362",
        // Based on: Walmart Supercenter — 3411 E Kolonels Way, Port Angeles
        mapCoordinates: { lat: 48.1109791, lng: -123.3620161 },
        phone: "(206) 555-9200",
        website: "https://www.walmart.com",
        email: "portlaken@walmart.com",
        tags: ["grocery", "supercenter", "retail", "food", "pharmacy"],
        image: "https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?w=800&q=80",
        rating: 3.9
    },
    {
        id: "67",
        name: "Costco Wholesale Port Laken",
        category: "Food",
        shortDescription: "Membership warehouse club with bulk groceries and more.",
        fullDescription: "Costco Port Laken offers bulk groceries, fresh produce, meats, bakery items, electronics, furniture, and a gas station — all at warehouse prices. Membership required. The food court is a local favorite.",
        address: "955 W Washington St, Sequim, WA 98382",
        // Based on: Costco Wholesale — 955 W Washington St, Sequim (nearest Costco to Port Angeles)
        mapCoordinates: { lat: 48.0770765, lng: -123.1262952 },
        phone: "(206) 555-8800",
        website: "https://www.costco.com",
        email: "portlaken@costco.com",
        tags: ["grocery", "bulk", "warehouse", "membership", "food"],
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
        rating: 4.5
    },

    // City Center Landmarks
    {
        id: "69",
        name: "Founders' Statue & Plaza",
        category: "Recreation",
        shortDescription: "Historic bronze statue honoring Port Laken's founding families, set in a public plaza.",
        fullDescription: "Standing at the heart of downtown, the Founders' Statue is a bronze monument dedicated to the families who established Port Laken in the late 19th century. The surrounding plaza features engraved historical plaques, seasonal flower beds, and benches — a popular gathering spot for residents and visitors alike.",
        address: "115 E Railroad Ave, Port Angeles, WA 98362",
        // Based on: Port Angeles Ferry Terminal plaza area — waterfront downtown
        mapCoordinates: { lat: 48.1195, lng: -123.4350 },
        rating: 4.7
    },
    {
        id: "70",
        name: "Port Laken History Museum",
        category: "Community",
        shortDescription: "Explore Port Laken's rich history from its founding to the present day.",
        fullDescription: "The Port Laken History Museum chronicles the city's journey from a small fishing settlement to a thriving Pacific Northwest community. Permanent exhibits cover Indigenous heritage, the logging and fishing industries, immigration waves, and the city's modern growth. Rotating exhibits highlight local artists and community stories. Free admission on Sundays.",
        address: "205 S Lincoln St, Port Angeles, WA 98362",
        // Based on: Elwha Klallam Museum at the Carnegie — 205 S Lincoln St, Port Angeles
        mapCoordinates: { lat: 48.1169918, lng: -123.4323297 },
        phone: "(206) 555-8200",
        website: "https://portlakenhistory.org",
        email: "info@portlakenhistory.org",
        socialLinks: { facebook: "fb.com/portlakenhistory", instagram: "@portlakenhistory" },
        tags: ["museum", "history", "culture", "heritage", "exhibits", "downtown"],
        image: "https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0?w=800&q=80",
        rating: 4.8
    },
    {
        id: "68",
        name: "Laken Market",
        category: "Food",
        shortDescription: "Port Laken's own neighborhood grocery, locally owned since 1987.",
        fullDescription: "Laken Market is Port Laken's beloved homegrown grocery store, family-owned and operated since 1987. Known for its locally sourced produce, fresh-cut meats, house-made deli items, and a curated selection of Pacific Northwest wines and craft beers. The store partners directly with regional farms and is a cornerstone of the community.",
        address: "203 E Front St, Port Angeles, WA 98362",
        // Based on: Kokopelli Grill / downtown Front St block — 203 E Front St, Port Angeles
        mapCoordinates: { lat: 48.1192512, lng: -123.4304809 },
        website: "https://lakenmarket.com",
        email: "hello@lakenmarket.com",
        socialLinks: { facebook: "fb.com/lakenmarket", instagram: "@lakenmarket" },
        tags: ["grocery", "local", "neighborhood", "fresh", "Port Laken"],
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
        rating: 4.8
    },

    // Religious
    {
        id: "71",
        name: "St. Michael's Cathedral",
        category: "Religious",
        categories: ["Religious", "Community"],
        shortDescription: "Port Laken's historic Catholic cathedral, home to vibrant parish life and community outreach.",
        fullDescription: "St. Michael's Cathedral is the heart of Port Laken's Catholic community, serving thousands of parishioners across the city. The cathedral offers daily Mass, sacramental preparation, youth ministry, and a robust outreach program that includes running The Soup Kitchen on S. Peabody St. The stunning Gothic Revival building, built in 1901, is a beloved landmark of downtown Port Laken.",
        address: "209 W 11th St, Port Angeles, WA 98362",
        // Based on: Queen of Angels Catholic Church — 209 W 11th St, Port Angeles
        mapCoordinates: { lat: 48.1117859, lng: -123.4440788 },
        phone: "(206) 555-7200",
        website: "https://stmichaelsportlaken.org",
        email: "parish@stmichaelsportlaken.org",
        socialLinks: { facebook: "fb.com/stmichaelsportlaken" },
        tags: ["catholic", "cathedral", "church", "mass", "parish", "outreach"],
        image: "https://images.unsplash.com/photo-1746475148454-7421974b5a23?w=800&q=80",
        rating: 4.8
    },
    {
        id: "72",
        name: "Laken Community Church",
        category: "Religious",
        categories: ["Religious", "Community"],
        shortDescription: "A welcoming non-denominational community church rooted in Port Laken.",
        fullDescription: "Laken Community Church is a non-denominational congregation committed to being a home for everyone in Port Laken. With Sunday services, small groups, community events, and a strong focus on local service, the church partners with neighborhood organizations to support families and individuals in need.",
        address: "3415 S Peabody St, Port Angeles, WA 98362",
        // Based on: The Revolution Church — 3415 S Peabody St, Port Angeles
        mapCoordinates: { lat: 48.0949594, lng: -123.4369592 },
        phone: "(206) 555-7300",
        website: "https://laken.church",
        email: "hello@laken.church",
        socialLinks: { instagram: "@lakenchurch" },
        tags: ["church", "non-denominational", "community", "worship", "sunday service"],
        image: "https://images.squarespace-cdn.com/content/v1/58bccf9517bffc35906da3c7/1672671764714-YVC0UI40IGLA5QCWCKWU/real-stuff-1500x600.jpg",
        rating: 4.7
    },
    {
        id: "73",
        name: "Port Laken Islamic Center",
        category: "Religious",
        categories: ["Religious", "Community"],
        shortDescription: "Mosque and community center serving Port Laken's Muslim community.",
        fullDescription: "The Port Laken Islamic Center is a welcoming mosque and community hub for Muslims in Port Laken and the surrounding region. The center offers daily prayers, Friday Jumu'ah services, Quran classes, youth programs, and interfaith outreach events. The community kitchen hosts monthly dinners open to all residents.",
        address: "820 E 4th St, Port Angeles, WA 98362",
        // No mosque in Port Angeles — using a nearby central location in Port Angeles
        mapCoordinates: { lat: 48.1165, lng: -123.4200 },
        phone: "(206) 555-7400",
        website: "https://portlakenislamiccenter.org",
        email: "info@portlakenislamiccenter.org",
        socialLinks: { facebook: "fb.com/portlakenislamiccenter" },
        tags: ["mosque", "islam", "muslim", "prayer", "jummah", "community"],
        image: "https://images.unsplash.com/photo-1751529284945-a614109d2899?w=800&q=80",
        rating: 4.8
    },
    {
        id: "74",
        name: "Congregation Beth Shalom",
        category: "Religious",
        categories: ["Religious", "Community"],
        shortDescription: "Port Laken's Jewish synagogue, a center for worship, learning, and community.",
        fullDescription: "Congregation Beth Shalom is Port Laken's Jewish synagogue, serving the local Jewish community with Shabbat and holiday services, Torah study, a Hebrew school for children, and a vibrant social calendar. The congregation is affiliated with the Conservative movement and warmly welcomes Jews of all backgrounds and interfaith families.",
        address: "23 N Orchard Ln, Port Angeles, WA 98362",
        // Based on: Hebraic Assembly of Port Angeles — 23 N Orchard Ln, Port Angeles
        mapCoordinates: { lat: 48.111535, lng: -123.355044 },
        phone: "(206) 555-7500",
        website: "https://bethshalomportlaken.org",
        email: "office@bethshalomportlaken.org",
        socialLinks: { facebook: "fb.com/bethshalomportlaken" },
        tags: ["synagogue", "jewish", "shabbat", "torah", "hebrew school", "conservative"],
        image: "https://images.unsplash.com/photo-1585834372646-5306d75a60ee?w=800&q=80",
        rating: 4.7
    },
];