export type ResourceCategory =
    | "Healthcare"
    | "Family"
    | "Food"
    | "Seniors"
    | "Legal"
    | "Emergency"
    | "Education"
    | "Community"
    | "Recreation";

export interface Resource {
    id: string;
    name: string;
    category: ResourceCategory;
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
}

export const RESOURCES: Resource[] = [
    // Healthcare
    {
        id: "1",
        name: "Harborview Medical Center",
        category: "Healthcare",
        shortDescription: "Comprehensive medical services including emergency care, trauma center, and specialized clinics.",
        fullDescription: "Harborview Medical Center is Port Laken's primary healthcare provider, offering Level I trauma care, burn center services, and comprehensive medical and surgical care. Our dedicated team of specialists is committed to providing high-quality, patient-centered care to all residents.",
        address: "325 9th Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6038, lng: -122.3238 },
        phone: "(206) 744-3000",
        website: "https://www.harborview.org",
        email: "info@harborview.org",
        socialLinks: { facebook: "fb.com/harborview", twitter: "@harborview" },
        tags: ["hospital", "emergency", "trauma", "medical"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
    },
    {
        id: "2",
        name: "Port Laken Community Clinic",
        category: "Healthcare",
        shortDescription: "Affordable primary care and walk-in services for families and individuals.",
        fullDescription: "The Community Clinic provides essential primary care services, including routine check-ups, vaccinations, and chronic disease management. We offer a sliding scale fee structure to ensure accessibility for all community members.",
        address: "1200 12th Ave S, Port Laken, WA 98144",
        mapCoordinates: { lat: 47.5912, lng: -122.3164 },
        phone: "(206) 555-0102",
        website: "https://plcommunityclinic.org",
        email: "contact@plclinic.org",
        tags: ["clinic", "primary care", "affordable"],
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81897560?w=800&q=80"
    },
    {
        id: "3",
        name: "Laken Dental Health",
        category: "Healthcare",
        shortDescription: "Comprehensive dental care for children and adults.",
        fullDescription: "From cleanings to oral surgery, Laken Dental Health provides full-service dental care. We accept most insurance plans and offer emergency dental services.",
        address: "456 Oak St, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6101, lng: -122.3421 },
        phone: "(206) 555-0123",
        website: "https://lakendental.com",
        email: "appt@lakendental.com",
        tags: ["dentist", "dental", "oral health"],
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf4722e12?w=800&q=80"
    },
    {
        id: "4",
        name: "Vision Plus Eye Care",
        category: "Healthcare",
        shortDescription: "Optometry services and eyewear.",
        fullDescription: "Comprehensive eye exams, contact lens fittings, and a wide selection of frames. Our optometrists are dedicated to preserving and enhancing your vision.",
        address: "789 Pine St, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6133, lng: -122.3333 },
        phone: "(206) 555-0199",
        website: "https://visionpluspl.com",
        email: "see@visionpluspl.com",
        tags: ["vision", "optometry", "glasses"],
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
    },
    {
        id: "5",
        name: "Port Laken Mental Health Services",
        category: "Healthcare",
        shortDescription: "Counseling and therapy for all ages.",
        fullDescription: "Professional mental health support including individual therapy, couples counseling, and group sessions. We specialize in anxiety, depression, and trauma recovery.",
        address: "101 Broadway, Port Laken, WA 98122",
        mapCoordinates: { lat: 47.6152, lng: -122.3207 },
        phone: "(206) 555-0800",
        website: "https://plmentalhealth.org",
        email: "help@plmentalhealth.org",
        tags: ["mental health", "therapy", "counseling"],
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80"
    },

    // Family
    {
        id: "6",
        name: "Eastlaken Community Center",
        category: "Family",
        shortDescription: "Family programs, youth activities, and community events.",
        fullDescription: "A vibrant hub for the Eastlaken neighborhood, offering after-school programs, summer camps, fitness classes, and community meeting spaces. Join us for weekly movie nights and seasonal festivals.",
        address: "2200 23rd Ave S, Port Laken, WA 98144",
        mapCoordinates: { lat: 47.5835, lng: -122.3023 },
        phone: "(206) 555-1234",
        website: "https://eastlakencc.org",
        email: "info@eastlakencc.org",
        socialLinks: { instagram: "@eastlaken_cc" },
        tags: ["community center", "youth", "family", "activities"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
        id: "7",
        name: "Little Stars Daycare",
        category: "Family",
        shortDescription: "Licensed childcare and early learning.",
        fullDescription: "Providing a safe, nurturing environment for children aged 6 months to 5 years. Our curriculum focuses on social-emotional development and early literacy.",
        address: "555 5th Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6015, lng: -122.3308 },
        phone: "(206) 555-2200",
        website: "https://littlestarspl.com",
        email: "enroll@littlestarspl.com",
        tags: ["childcare", "daycare", "preschool"],
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
    },
    {
        id: "8",
        name: "Port Laken Parenting Support",
        category: "Family",
        shortDescription: "Workshops and resources for new parents.",
        fullDescription: "Free workshops on breastfeeding, sleep training, and positive discipline. Connect with other parents in our weekly support groups.",
        address: "888 8th Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6062, lng: -122.3299 },
        phone: "(206) 555-2345",
        website: "https://plparenting.org",
        email: "support@plparenting.org",
        tags: ["parenting", "support", "workshops"],
        image: "https://images.unsplash.com/photo-1544280596-fddce524fa82?w=800&q=80"
    },
    {
        id: "9",
        name: "Boys & Girls Club of Port Laken",
        category: "Family",
        shortDescription: "Youth mentorship and recreation programs.",
        fullDescription: "Empowering young people to reach their full potential. We offer sports leagues, homework help, and arts programs for kids and teens.",
        address: "123 Youth Way, Port Laken, WA 98108",
        mapCoordinates: { lat: 47.5501, lng: -122.3000 },
        phone: "(206) 555-8888",
        website: "https://bgcpl.org",
        email: "contact@bgcpl.org",
        tags: ["youth", "mentorship", "recreation"],
        image: "https://images.unsplash.com/photo-1529390003875-57486910983d?w=800&q=80"
    },
    {
        id: "10",
        name: "Family First Resource Center",
        category: "Family",
        shortDescription: "Connecting families with essential services.",
        fullDescription: "Your one-stop shop for accessing housing assistance, food benefits, and employment resources. Our case managers are here to advocate for your family.",
        address: "4004 MLK Way S, Port Laken, WA 98108",
        mapCoordinates: { lat: 47.5684, lng: -122.2965 },
        phone: "(206) 555-9000",
        website: "https://familyfirstpl.org",
        email: "help@familyfirstpl.org",
        tags: ["resource center", "social services", "advocacy"],
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
    },

    // Food
    {
        id: "11",
        name: "Port Laken Food Bank",
        category: "Food",
        shortDescription: "Food assistance for families in need.",
        fullDescription: "Providing nutritious groceries to individuals and families experiencing food insecurity. No ID required. Open Mondays, Wednesdays, and Fridays.",
        address: "1400 S Lane St, Port Laken, WA 98144",
        mapCoordinates: { lat: 47.5959, lng: -122.3150 },
        phone: "(206) 555-4321",
        website: "https://plfoodbank.org",
        email: "volunteer@plfoodbank.org",
        socialLinks: { facebook: "fb.com/plfoodbank" },
        tags: ["food bank", "groceries", "assistance"],
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
    },
    {
        id: "12",
        name: "Meals on Wheels Port Laken",
        category: "Food",
        shortDescription: "Home-delivered meals for seniors and homebound residents.",
        fullDescription: "Nutritious meals delivered directly to your door. We also conduct safety checks and provide social interaction for our clients.",
        address: "2020 Airport Way S, Port Laken, WA 98134",
        mapCoordinates: { lat: 47.5855, lng: -122.3255 },
        phone: "(206) 555-5555",
        website: "https://mowpl.org",
        email: "signup@mowpl.org",
        tags: ["seniors", "delivery", "nutrition"],
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80"
    },
    {
        id: "13",
        name: "Urban Harvest Community Garden",
        category: "Food",
        shortDescription: "Grow your own food and learn about urban farming.",
        fullDescription: "A shared green space where residents can rent plots to grow vegetables and flowers. We offer gardening workshops and donate surplus produce to local food banks.",
        address: "3000 Beacon Ave S, Port Laken, WA 98144",
        mapCoordinates: { lat: 47.5758, lng: -122.3088 },
        phone: "(206) 555-6789",
        website: "https://urbanharvestpl.org",
        email: "grow@urbanharvestpl.org",
        tags: ["garden", "fresh food", "community"],
        image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80"
    },
    {
        id: "14",
        name: "The Soup Kitchen",
        category: "Food",
        shortDescription: "Hot daily meals for anyone hungry.",
        fullDescription: "Serving hot, nutritious lunches and dinners seven days a week. Everyone is welcome at our table.",
        address: "77 S Washington St, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6009, lng: -122.3339 },
        phone: "(206) 555-9876",
        website: "https://thesoupkitchenpl.org",
        email: "info@thesoupkitchenpl.org",
        tags: ["meals", "homeless", "hot food"],
        image: "https://images.unsplash.com/photo-1547592180-85f173990054?w=800&q=80"
    },

    // Seniors
    {
        id: "15",
        name: "Golden Years Senior Center",
        category: "Seniors",
        shortDescription: "Activities, classes, and support services for seniors 60+.",
        fullDescription: "Join us for fitness classes, art workshops, technology training, and social events. We also offer caregiver support and resource referrals.",
        address: "4400 42nd Ave SW, Port Laken, WA 98116",
        mapCoordinates: { lat: 47.5645, lng: -122.3871 },
        phone: "(206) 555-6060",
        website: "https://gyscpl.org",
        email: "programs@gyscpl.org",
        tags: ["seniors", "activities", "social"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
        id: "16",
        name: "Senior Transport Services",
        category: "Seniors",
        shortDescription: "Free transportation for medical appointments and grocery shopping.",
        fullDescription: "Volunteer drivers provide door-to-door transportation for eligible seniors. Advance reservation required.",
        address: "1000 4th Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6050, lng: -122.3350 },
        phone: "(206) 555-7070",
        website: "https://seniortransportpl.org",
        email: "ride@seniortransportpl.org",
        tags: ["transportation", "seniors", "mobility"],
        image: "https://images.unsplash.com/photo-1508350176840-08166c30e7fa?w=800&q=80"
    },
    {
        id: "17",
        name: "Lakenview Retirment Home",
        category: "Seniors",
        shortDescription: "Independent and assisted living community.",
        fullDescription: "Comfortable apartments with dining services, housekeeping, and nursing care available. Enjoy stunning views of the lake and a vibrant social calendar.",
        address: "2500 Lakenview Dr, Port Laken, WA 98112",
        mapCoordinates: { lat: 47.6400, lng: -122.2900 },
        phone: "(206) 555-8080",
        website: "https://lakenviewretirement.com",
        email: "welcome@lakenview.com",
        tags: ["housing", "assisted living", "retirement"],
        image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80"
    },

    // Legal
    {
        id: "18",
        name: "Community Legal Services",
        category: "Legal",
        shortDescription: "Free legal assistance for low-income residents.",
        fullDescription: "Providing legal aid for housing disputes, family law, consumer protection, and immigration issues. We ensure equal access to justice.",
        address: "900 4th Ave, Port Laken, WA 98164",
        mapCoordinates: { lat: 47.6065, lng: -122.3320 },
        phone: "(206) 555-9999",
        website: "https://clspl.org",
        email: "intake@clspl.org",
        tags: ["legal aid", "pro bono", "lawyer"],
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80"
    },
    {
        id: "19",
        name: "Tenant Rights Union",
        category: "Legal",
        shortDescription: "Advocacy and education for renters.",
        fullDescription: "Know your rights as a tenant. We offer counseling on eviction prevention, lease agreements, and repair issues.",
        address: "500 Pike St, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6110, lng: -122.3340 },
        phone: "(206) 555-0011",
        website: "https://tenantrightspl.org",
        email: "help@tenantrightspl.org",
        tags: ["housing", "tenants", "legal"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },

    // Emergency
    {
        id: "20",
        name: "Port Laken Police Department - Central Precinct",
        category: "Emergency",
        shortDescription: "Law enforcement and public safety.",
        fullDescription: "Serving the downtown and central neighborhoods. For emergencies, always dial 911. For non-emergencies, call (206) 625-5011.",
        address: "612 1st Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6025, lng: -122.3345 },
        phone: "911",
        website: "https://police.portlaken.gov",
        email: "police@portlaken.gov",
        tags: ["police", "safety", "emergency"],
        image: "https://images.unsplash.com/photo-1596558151525-451bc0489627?w=800&q=80"
    },
    {
        id: "21",
        name: "Fire Station 10",
        category: "Emergency",
        shortDescription: "Fire suppression and emergency medical services.",
        fullDescription: "Ready to respond to fires, medical emergencies, and rescue operations. Visit us for free blood pressure checks.",
        address: "400 S Washington St, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6009, lng: -122.3292 },
        phone: "911",
        website: "https://fire.portlaken.gov",
        email: "fireinfo@portlaken.gov",
        tags: ["fire", "ems", "emergency"],
        image: "https://images.unsplash.com/photo-1550974415-p002c0b561b36?w=800&q=80"
    },
    {
        id: "22",
        name: "Domestic Violence Hotline",
        category: "Emergency",
        shortDescription: "24/7 confidential support for survivors.",
        fullDescription: "Immediate crisis intervention, safety planning, and shelter referrals. You are not alone.",
        address: "Confidential",
        mapCoordinates: { lat: 47.6062, lng: -122.3321 },
        phone: "1-800-555-SAFE",
        website: "https://dvhopepl.org",
        email: "safe@dvhopepl.org",
        tags: ["crisis", "support", "hotline"],
        image: "https://images.unsplash.com/photo-1520315342629-6ea920342047?w=800&q=80"
    },

    // Education
    {
        id: "23",
        name: "Port Laken Public Library - Central",
        category: "Education",
        shortDescription: "Books, technology, and learning for everyone.",
        fullDescription: "An architectural marvel and a center for knowledge. Access computers, free wifi, job search assistance, and millions of books.",
        address: "1000 4th Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6067, lng: -122.3328 },
        phone: "(206) 386-4636",
        website: "https://spl.org",
        email: "librarian@spl.org",
        tags: ["library", "books", "internet"],
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80"
    },
    {
        id: "24",
        name: "Lakefront High School",
        category: "Education",
        shortDescription: "Public high school serving grades 9-12.",
        fullDescription: "Home of the Lakers. Dedicated to academic excellence and preparing students for college and careers.",
        address: "100 Lakefront Blvd, Port Laken, WA 98109",
        mapCoordinates: { lat: 47.6250, lng: -122.3400 },
        phone: "(206) 555-3000",
        website: "https://lakefronths.portlaken.k12.wa.us",
        email: "office@lakefronths.k12.wa.us",
        tags: ["school", "high school", "education"],
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    },
    {
        id: "25",
        name: "Port Laken Community College",
        category: "Education",
        shortDescription: "Affordable higher education and workforce training.",
        fullDescription: "Offering associate degrees, vocational certificates, and transfer programs. Start your future here.",
        address: "1701 Broadway, Port Laken, WA 98122",
        mapCoordinates: { lat: 47.6163, lng: -122.3211 },
        phone: "(206) 934-3800",
        website: "https://seattlecentral.edu",
        email: "info@seattlecentral.edu",
        tags: ["college", "education", "training"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
    },
    {
        id: "26",
        name: "Early Learning Center",
        category: "Education",
        shortDescription: "Head Start and ECEAP programs.",
        fullDescription: "Free preschool for income-eligible families. We support the whole child and the whole family.",
        address: "2000 23rd Ave S, Port Laken, WA 98144",
        mapCoordinates: { lat: 47.5840, lng: -122.3020 },
        phone: "(206) 555-4000",
        website: "https://elcpl.org",
        email: "enroll@elcpl.org",
        tags: ["preschool", "head start", "education"],
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    },

    // Community
    {
        id: "27",
        name: "Port Laken City Hall",
        category: "Community",
        shortDescription: "Municipal government services.",
        fullDescription: "Pay utility bills, apply for permits, and attend city council meetings. Your local government at work.",
        address: "600 4th Ave, Port Laken, WA 98104",
        mapCoordinates: { lat: 47.6033, lng: -122.3303 },
        phone: "(206) 684-2489",
        website: "https://portlaken.gov",
        email: "mayor@portlaken.gov",
        tags: ["government", "city", "services"],
        image: "https://images.unsplash.com/photo-1569949381149-d9dfc448d2a5?w=800&q=80"
    },
    {
        id: "28",
        name: "Downtown Neighborhood Association",
        category: "Community",
        shortDescription: "Advocating for downtown residents.",
        fullDescription: "Promoting a safe, clean, and vibrant downtown neighborhood. Monthly meetings open to all residents.",
        address: "123 Union St, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6090, lng: -122.3350 },
        phone: "(206) 555-9988",
        website: "https://dnapl.org",
        email: "board@dnapl.org",
        tags: ["neighborhood", "community", "advocacy"],
        image: "https://images.unsplash.com/photo-1549487779-7a710207865c?w=800&q=80"
    },
    {
        id: "29",
        name: "Port Laken Humane Society",
        category: "Community",
        shortDescription: "Animal shelter and adoption center.",
        fullDescription: "Find your new best friend. We offer pet adoptions, low-cost spay/neuter services, and dog training classes.",
        address: "13212 SE Eastgate Way, Port Laken, WA 98005",
        mapCoordinates: { lat: 47.5800, lng: -122.1500 },
        phone: "(425) 641-0080",
        website: "https://plhumane.org",
        email: "adopt@plhumane.org",
        tags: ["animals", "pets", "adoption"],
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
    },

    // Recreation
    {
        id: "30",
        name: "Green Lake Park",
        category: "Recreation",
        shortDescription: "Urban park with a lake, trails, and sports fields.",
        fullDescription: "One of Port Laken's most beloved parks. Walk or run the 2.8-mile path around the lake, rent a paddleboat, or play tennis.",
        address: "7201 E Green Lake Dr N, Port Laken, WA 98115",
        mapCoordinates: { lat: 47.6800, lng: -122.3280 },
        phone: "(206) 684-4075",
        website: "https://seattle.gov/parks",
        email: "parks@portlaken.gov",
        tags: ["park", "nature", "sports"],
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
    },
    {
        id: "31",
        name: "Port Laken Aquarium",
        category: "Recreation",
        shortDescription: "Discover the marine life of the Pacific Northwest.",
        fullDescription: "Explore exhibits featuring sea otters, octopuses, and colorful fish. Great family fun on the waterfront.",
        address: "1483 Alaskan Way, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6074, lng: -122.3429 },
        phone: "(206) 386-4300",
        website: "https://seattleaquarium.org",
        email: "info@seattleaquarium.org",
        tags: ["aquarium", "family", "fun"],
        image: "https://images.unsplash.com/photo-1535591273668-578e3118d040?w=800&q=80"
    },
    {
        id: "32",
        name: "Discovery Park",
        category: "Recreation",
        shortDescription: "Largest city park with beaches and forest trails.",
        fullDescription: "A natural sanctuary in the city. Hike through forests, walk along the sandy beach, and visit the historic West Point Lighthouse.",
        address: "3801 Discovery Park Blvd, Port Laken, WA 98199",
        mapCoordinates: { lat: 47.6570, lng: -122.4130 },
        phone: "(206) 386-4236",
        website: "https://seattle.gov/parks",
        email: "parks@portlaken.gov",
        tags: ["hiking", "beach", "nature"],
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    },

    // More Health/Wellness
    {
        id: "33",
        name: "Yoga by the Lake",
        category: "Recreation",
        shortDescription: "Community yoga studio.",
        fullDescription: "Offering Vinyasa, Hatha, and Yin yoga classes for all levels. First class is free.",
        address: "500 Lake St, Port Laken, WA 98109",
        mapCoordinates: { lat: 47.6200, lng: -122.3380 },
        phone: "(206) 555-1080",
        website: "https://yogabylakepl.com",
        email: "namaste@yogabylakepl.com",
        tags: ["yoga", "fitness", "wellness"],
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80"
    },
    {
        id: "34",
        name: "CrossFit Port Laken",
        category: "Recreation",
        shortDescription: "Functional fitness gym.",
        fullDescription: "High-intensity workouts led by certified coaches. Build strength and community.",
        address: "99 Industrial Way, Port Laken, WA 98134",
        mapCoordinates: { lat: 47.5800, lng: -122.3300 },
        phone: "(206) 555-9900",
        website: "https://performcrossfit.com",
        email: "train@performcrossfit.com",
        tags: ["gym", "fitness", "workout"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
    },

    // More Education
    {
        id: "35",
        name: "Code Builders Academy",
        category: "Education",
        shortDescription: "Coding bootcamps and tech training.",
        fullDescription: "Launch your career in tech. Learn web development, data science, and UX design.",
        address: "2020 Tech Pl, Port Laken, WA 98121",
        mapCoordinates: { lat: 47.6150, lng: -122.3400 },
        phone: "(206) 555-CODE",
        website: "https://codebuilderspl.com",
        email: "admissions@codebuilderspl.com",
        tags: ["tech", "coding", "education"],
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
    },

    // More Community
    {
        id: "36",
        name: "Port Laken Art Museum",
        category: "Community",
        shortDescription: "Contemporary and classic art exhibits.",
        fullDescription: "Experience world-class art right here in Port Laken. Free admission on first Thursdays.",
        address: "1300 1st Ave, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6073, lng: -122.3379 },
        phone: "(206) 654-3100",
        website: "https://seattleartmuseum.org",
        email: "visit@portlakenart.org",
        tags: ["art", "culture", "museum"],
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80"
    },
    {
        id: "37",
        name: "Volunteer Port Laken",
        category: "Community",
        shortDescription: "Connecting volunteers with non-profits.",
        fullDescription: "Find meaningful volunteer opportunities that match your skills and interests. Give back to your community.",
        address: "603 Stewart St, Port Laken, WA 98101",
        mapCoordinates: { lat: 47.6130, lng: -122.3360 },
        phone: "(206) 555-VOLS",
        website: "https://volunteerpl.org",
        email: "helpout@volunteerpl.org",
        tags: ["volunteer", "service", "non-profit"],
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
    },

    // More Food
    {
        id: "38",
        name: "Fresh Market Co-op",
        category: "Food",
        shortDescription: "Community-owned grocery store.",
        fullDescription: "Organic, local, and sustainable food. Open to everyone, members get discounts.",
        address: "1600 Madison St, Port Laken, WA 98122",
        mapCoordinates: { lat: 47.6160, lng: -122.3110 },
        phone: "(206) 555-FARM",
        website: "https://centralcoop.coop",
        email: "info@centralcoop.coop",
        tags: ["grocery", "organic", "local"],
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80"
    },

    // More Seniors
    {
        id: "39",
        name: "Silver Sneakers Club",
        category: "Seniors",
        shortDescription: "Fitness program for older adults.",
        fullDescription: "Stay active and healthy with our specialized fitness classes designed for seniors.",
        address: "Various Locations",
        mapCoordinates: { lat: 47.6000, lng: -122.3300 },
        phone: "1-888-423-4632",
        website: "https://silversneakers.com",
        email: "support@silversneakers.com",
        tags: ["fitness", "seniors", "health"],
        image: "https://images.unsplash.com/photo-1552674605-46d99a72010c?w=800&q=80"
    },

    // More Housing
    {
        id: "40",
        name: "Port Laken Housing Authority",
        category: "Family",
        shortDescription: "Affordable housing programs.",
        fullDescription: "Providing stable, quality housing for low-income families, seniors, and people with disabilities.",
        address: "190 Queen Anne Ave N, Port Laken, WA 98109",
        mapCoordinates: { lat: 47.6200, lng: -122.3560 },
        phone: "(206) 615-3300",
        website: "https://seattlehousing.org",
        email: "info@seattlehousing.org",
        tags: ["housing", "affordable", "government"],
        image: "https://images.unsplash.com/photo-1460317442991-0ec2aaefcb88?w=800&q=80"
    }
];
