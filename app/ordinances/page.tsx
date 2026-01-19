"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaSearch, FaFilePdf, FaChevronDown, FaTimes, FaDownload, FaPrint } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

interface Ordinance {
  id: number;
  title: string;
  description: string;
  number: string;
  date: string;
  year: number;
  status: "Active" | "Repealed";
  category: string;
  summary: string;
  fullText: string;
}

const ordinances: Ordinance[] = [
  {
    id: 1,
    title: "Residential Noise Abatement Ordinance",
    description: "An ordinance establishing limits on noise levels within residential zones to ensure community peace and quiet.",
    number: "ORD-2023-12",
    date: "Oct 15, 2023",
    year: 2023,
    status: "Active",
    category: "Zoning",
    summary: `This ordinance establishes comprehensive noise regulations for residential areas in Port Laken.

Key Provisions:
• Daytime hours (7 AM - 10 PM): Maximum 65 decibels at property line
• Nighttime hours (10 PM - 7 AM): Maximum 55 decibels at property line
• Construction activities limited to 7 AM - 6 PM on weekdays
• No construction on Sundays or federal holidays
• Exemptions for emergency vehicles and city-authorized events

Enforcement:
First violation: Written warning
Second violation: $250 fine
Third violation: $500 fine
Subsequent violations: Up to $1,000 fine`,
    fullText: `ORDINANCE NO. ORD-2023-12

AN ORDINANCE OF THE CITY OF PORT LAKEN ESTABLISHING NOISE LEVEL LIMITS WITHIN RESIDENTIAL ZONES

WHEREAS, the City Council finds that excessive noise is detrimental to the health, safety, and welfare of residents; and

WHEREAS, it is necessary to establish reasonable standards for noise levels in residential areas;

NOW, THEREFORE, THE CITY COUNCIL OF THE CITY OF PORT LAKEN DOES ORDAIN AS FOLLOWS:

SECTION 1. PURPOSE
The purpose of this ordinance is to establish maximum permissible noise levels in residential zones to protect the peace, health, safety, and welfare of residents.

SECTION 2. DEFINITIONS
(a) "Decibel" means a unit of measurement describing the amplitude of sound.
(b) "Residential zone" means any area zoned for residential use under the City's zoning code.
(c) "Property line" means the boundary of the lot or parcel of land.

SECTION 3. NOISE LEVEL LIMITS
(a) Daytime Hours (7:00 AM to 10:00 PM): No person shall create noise exceeding 65 decibels measured at the property line.
(b) Nighttime Hours (10:00 PM to 7:00 AM): No person shall create noise exceeding 55 decibels measured at the property line.

SECTION 4. CONSTRUCTION ACTIVITIES
(a) Construction activities are permitted only between 7:00 AM and 6:00 PM on weekdays.
(b) Construction activities are permitted between 9:00 AM and 5:00 PM on Saturdays.
(c) No construction activities are permitted on Sundays or federal holidays.

SECTION 5. EXEMPTIONS
The following are exempt from this ordinance:
(a) Emergency vehicles and equipment
(b) City-authorized public events
(c) Essential utility repairs
(d) Agricultural activities on properly zoned land

SECTION 6. ENFORCEMENT AND PENALTIES
(a) First violation: Written warning
(b) Second violation: $250 fine
(c) Third violation: $500 fine
(d) Subsequent violations: Up to $1,000 fine

SECTION 7. EFFECTIVE DATE
This ordinance shall take effect thirty (30) days after adoption.

ADOPTED by the City Council of Port Laken on October 15, 2023.`
  },
  {
    id: 2,
    title: "Zoning Regulations Amendment",
    description: "Updates to local zoning laws concerning mixed-use development and building height restrictions.",
    number: "ORD-2023-05",
    date: "Sep 01, 2023",
    year: 2023,
    status: "Active",
    category: "Zoning",
    summary: `This amendment updates Port Laken's zoning regulations to accommodate modern mixed-use development while preserving neighborhood character.

Key Changes:
• New MU-1 (Mixed-Use Light) zone created for neighborhood commercial areas
• Maximum building height increased to 45 feet in designated corridors
• Ground-floor retail required for buildings over 3 stories in commercial zones
• Reduced parking requirements for developments near transit stops
• New design review standards for buildings over 35 feet

Affected Areas:
• Main Street corridor from 1st to 15th Avenue
• Harbor District commercial zone
• Downtown core area`,
    fullText: `ORDINANCE NO. ORD-2023-05

AN ORDINANCE AMENDING TITLE 17 OF THE PORT LAKEN MUNICIPAL CODE RELATING TO ZONING REGULATIONS

THE CITY COUNCIL OF THE CITY OF PORT LAKEN DOES ORDAIN AS FOLLOWS:

SECTION 1. FINDINGS
The City Council finds that:
(a) Current zoning regulations do not adequately address modern mixed-use development needs;
(b) Updated regulations will promote economic development while protecting residential neighborhoods;
(c) These amendments are consistent with the City's General Plan.

SECTION 2. AMENDMENT TO SECTION 17.20 - ZONE CLASSIFICATIONS
A new zone classification "MU-1 Mixed-Use Light" is hereby established with the following characteristics:
(a) Permitted uses: Retail, office, residential above ground floor
(b) Maximum building height: 45 feet
(c) Maximum lot coverage: 75%
(d) Minimum setbacks: Front 10 feet, Side 5 feet, Rear 15 feet

SECTION 3. AMENDMENT TO SECTION 17.35 - HEIGHT LIMITS
(a) Buildings in the MU-1 zone may not exceed 45 feet in height.
(b) Buildings exceeding 35 feet require design review approval.
(c) Height bonuses up to 10 feet may be granted for affordable housing inclusion.

SECTION 4. AMENDMENT TO SECTION 17.40 - PARKING REQUIREMENTS
(a) Developments within 1/4 mile of transit stops: 25% reduction in parking requirements
(b) Mixed-use developments: Shared parking allowed with approved parking study
(c) Bicycle parking required: 1 space per 2,000 sq ft of commercial space

SECTION 5. EFFECTIVE DATE
This ordinance shall take effect thirty (30) days after adoption.

ADOPTED by the City Council of Port Laken on September 1, 2023.`
  },
  {
    id: 3,
    title: "Parking Rules for Commercial Vehicles",
    description: "Defines regulations for the overnight parking of commercial vehicles on public streets.",
    number: "ORD-2022-89",
    date: "Dec 20, 2022",
    year: 2022,
    status: "Repealed",
    category: "Public Safety",
    summary: `NOTE: This ordinance was repealed on March 15, 2023 and replaced by ORD-2023-18.

Original Provisions (No Longer in Effect):
• Commercial vehicles over 10,000 lbs prohibited from overnight street parking
• Overnight defined as 2 AM to 6 AM
• Violations subject to $150 fine and potential towing
• Exemptions for active loading/unloading operations

Reason for Repeal:
The ordinance was found to place undue burden on small business owners and was replaced with more flexible regulations.`,
    fullText: `ORDINANCE NO. ORD-2022-89 [REPEALED]

*** THIS ORDINANCE HAS BEEN REPEALED ***
Repealed by Ordinance ORD-2023-18, effective March 15, 2023

ORIGINAL TEXT (FOR HISTORICAL REFERENCE ONLY):

AN ORDINANCE REGULATING THE PARKING OF COMMERCIAL VEHICLES ON PUBLIC STREETS

SECTION 1. PROHIBITION
No commercial vehicle exceeding 10,000 pounds gross vehicle weight shall be parked on any public street within residential zones between the hours of 2:00 AM and 6:00 AM.

SECTION 2. DEFINITIONS
"Commercial vehicle" means any vehicle used primarily for business purposes, including but not limited to trucks, vans with commercial markings, and trailers.

SECTION 3. EXEMPTIONS
(a) Vehicles actively engaged in loading or unloading
(b) Emergency service vehicles
(c) Vehicles with valid overnight parking permits

SECTION 4. PENALTIES
(a) First violation: $150 fine
(b) Second violation within 12 months: $300 fine
(c) Third violation within 12 months: $500 fine and vehicle subject to towing

*** REPEALED - SEE ORD-2023-18 FOR CURRENT REGULATIONS ***`
  },
  {
    id: 4,
    title: "Environmental Protection Standards",
    description: "Establishes environmental protection requirements for new construction and development projects.",
    number: "ORD-2022-05",
    date: "Sep 01, 2022",
    year: 2022,
    status: "Active",
    category: "Environment",
    summary: `This ordinance establishes comprehensive environmental protection standards for all new construction and major renovation projects in Port Laken.

Requirements:
• Stormwater management plan required for projects over 5,000 sq ft
• Tree preservation: Minimum 30% canopy coverage on residential lots
• Native plant requirements: 50% of landscaping must be native species
• Solar-ready construction required for new residential buildings
• Electric vehicle charging infrastructure required for new commercial buildings

Green Building Standards:
• New buildings over 10,000 sq ft must achieve LEED Silver or equivalent
• Energy efficiency must exceed state code by minimum 10%
• Water-efficient fixtures required in all new construction`,
    fullText: `ORDINANCE NO. ORD-2022-05

AN ORDINANCE ESTABLISHING ENVIRONMENTAL PROTECTION STANDARDS FOR CONSTRUCTION AND DEVELOPMENT

WHEREAS, the City of Port Laken is committed to environmental sustainability; and
WHEREAS, new development should minimize environmental impact;

THE CITY COUNCIL OF PORT LAKEN ORDAINS:

SECTION 1. PURPOSE
To establish minimum environmental standards for construction and development that protect natural resources and promote sustainability.

SECTION 2. APPLICABILITY
This ordinance applies to:
(a) All new construction projects
(b) Renovations exceeding 50% of building value
(c) Subdivisions of land

SECTION 3. STORMWATER MANAGEMENT
(a) Projects disturbing more than 5,000 square feet require a stormwater management plan.
(b) Post-development runoff shall not exceed pre-development levels.
(c) Low-impact development techniques encouraged.

SECTION 4. TREE PRESERVATION
(a) Minimum 30% tree canopy coverage required on residential lots.
(b) Heritage trees (over 24" diameter) may not be removed without permit.
(c) Tree replacement required at 2:1 ratio for any removed trees.

SECTION 5. LANDSCAPING REQUIREMENTS
(a) Minimum 50% of plants must be native species.
(b) Drought-tolerant landscaping required in all new developments.
(c) Irrigation systems must include smart controllers.

SECTION 6. ENERGY REQUIREMENTS
(a) New residential buildings must be solar-ready.
(b) Commercial buildings must include EV charging infrastructure.
(c) All new buildings must exceed state energy code by 10%.

SECTION 7. GREEN BUILDING CERTIFICATION
Buildings over 10,000 square feet must achieve LEED Silver certification or equivalent.

EFFECTIVE DATE: This ordinance takes effect January 1, 2023.

ADOPTED by the City Council on September 1, 2022.`
  },
  {
    id: 5,
    title: "Business Licensing Requirements",
    description: "Establishes licensing requirements and procedures for businesses operating within city limits.",
    number: "ORD-2021-89",
    date: "Dec 20, 2021",
    year: 2021,
    status: "Active",
    category: "Business Licensing",
    summary: `This ordinance establishes the business licensing framework for all commercial operations in Port Laken.

License Types:
• General Business License: Required for all businesses ($150/year)
• Home Occupation Permit: For home-based businesses ($75/year)
• Special Event Permit: For temporary commercial activities ($50/event)
• Mobile Vendor License: For food trucks and mobile retail ($200/year)

Application Process:
1. Submit application with required documentation
2. Zoning compliance verification (5 business days)
3. Health/safety inspection if applicable
4. License issued within 10 business days of complete application

Renewal: All licenses must be renewed annually by December 31.`,
    fullText: `ORDINANCE NO. ORD-2021-89

AN ORDINANCE ESTABLISHING BUSINESS LICENSING REQUIREMENTS

THE CITY COUNCIL OF PORT LAKEN ORDAINS:

SECTION 1. LICENSE REQUIRED
No person shall conduct business within the City of Port Laken without first obtaining a valid business license.

SECTION 2. LICENSE TYPES AND FEES
(a) General Business License: $150 per year
(b) Home Occupation Permit: $75 per year
(c) Special Event Permit: $50 per event
(d) Mobile Vendor License: $200 per year
(e) Contractor License: $175 per year

SECTION 3. APPLICATION REQUIREMENTS
Applications must include:
(a) Completed application form
(b) Proof of identity
(c) Business entity documentation
(d) Proof of insurance
(e) Zoning compliance certification

SECTION 4. PROCESSING TIME
(a) Complete applications processed within 10 business days
(b) Incomplete applications returned within 5 business days
(c) Appeals must be filed within 30 days of denial

SECTION 5. RENEWAL
(a) Licenses expire December 31 annually
(b) Renewal applications due by November 30
(c) Late renewal fee: $50

SECTION 6. ENFORCEMENT
Operating without a valid license subject to:
(a) First offense: $500 fine
(b) Second offense: $1,000 fine
(c) Third offense: $2,500 fine and business closure

ADOPTED by the City Council on December 20, 2021.`
  },
  {
    id: 6,
    title: "Water Conservation Requirements",
    description: "Mandatory water conservation measures for residential and commercial properties during drought conditions.",
    number: "ORD-2023-22",
    date: "Nov 10, 2023",
    year: 2023,
    status: "Active",
    category: "Environment",
    summary: `This ordinance establishes mandatory water conservation measures to ensure sustainable water use in Port Laken.

Permanent Restrictions:
• No watering between 10 AM and 6 PM
• No washing vehicles with hose without shut-off nozzle
• No excessive water runoff onto sidewalks/streets
• Restaurants may only serve water upon request

Drought Level Restrictions:
Level 1: Outdoor watering limited to 3 days per week
Level 2: Outdoor watering limited to 2 days per week
Level 3: No outdoor watering except for food gardens
Level 4: Essential uses only

Rebate Programs:
• $100 rebate for smart irrigation controllers
• $50 rebate for high-efficiency toilets
• Free water audits for commercial properties`,
    fullText: `ORDINANCE NO. ORD-2023-22

AN ORDINANCE ESTABLISHING WATER CONSERVATION REQUIREMENTS

WHEREAS, water is a precious and limited resource; and
WHEREAS, conservation measures are necessary to ensure long-term water availability;

THE CITY COUNCIL ORDAINS:

SECTION 1. PERMANENT WATER USE RESTRICTIONS
The following restrictions apply at all times:
(a) No irrigation between 10:00 AM and 6:00 PM
(b) No washing vehicles without a shut-off nozzle
(c) No excessive runoff from irrigation
(d) Restaurants shall serve water only upon request
(e) Hotels must offer guests option to decline daily linen service

SECTION 2. DROUGHT RESPONSE LEVELS
Level 1 (Mild Drought):
- Outdoor irrigation limited to Monday, Wednesday, Friday (odd addresses) or Tuesday, Thursday, Saturday (even addresses)

Level 2 (Moderate Drought):
- Outdoor irrigation limited to 2 days per week
- No filling of pools or spas

Level 3 (Severe Drought):
- No outdoor irrigation except for food gardens
- No vehicle washing except at commercial facilities

Level 4 (Emergency):
- Essential indoor use only

SECTION 3. PENALTIES
First violation: Warning
Second violation: $100 fine
Third violation: $250 fine
Subsequent: $500 fine and flow restrictor installation

SECTION 4. REBATE PROGRAMS
The City shall offer the following rebates:
(a) Smart irrigation controller: $100
(b) High-efficiency toilet: $50
(c) Turf replacement: $2 per square foot (up to $1,000)

ADOPTED November 10, 2023.`
  },
  {
    id: 7,
    title: "Short-Term Rental Regulations",
    description: "Establishes permit requirements and operating standards for short-term vacation rentals.",
    number: "ORD-2023-08",
    date: "Apr 15, 2023",
    year: 2023,
    status: "Active",
    category: "Business Licensing",
    summary: `This ordinance regulates short-term rentals (less than 30 days) to balance tourism benefits with neighborhood quality of life.

Permit Requirements:
• Annual permit required: $350 fee
• Owner must designate local contact available 24/7
• Maximum occupancy: 2 persons per bedroom plus 2
• Proof of liability insurance ($1 million minimum)
• Transient occupancy tax registration required

Operating Standards:
• Quiet hours: 10 PM to 8 AM
• No outdoor events or parties
• Parking: 1 off-street space per 2 bedrooms
• Trash: Bins must be stored out of sight
• Maximum 3 permits per property owner citywide`,
    fullText: `ORDINANCE NO. ORD-2023-08

AN ORDINANCE REGULATING SHORT-TERM RENTALS

THE CITY COUNCIL ORDAINS:

SECTION 1. DEFINITIONS
"Short-term rental" means the rental of a residential dwelling unit for periods of less than 30 consecutive days.

SECTION 2. PERMIT REQUIRED
(a) No person shall operate a short-term rental without a valid permit.
(b) Annual permit fee: $350
(c) Maximum 3 permits per property owner within City limits.

SECTION 3. APPLICATION REQUIREMENTS
(a) Completed application form
(b) Proof of ownership or authorization from owner
(c) Floor plan showing bedrooms and exits
(d) Proof of liability insurance (minimum $1,000,000)
(e) Designation of local contact person
(f) Transient occupancy tax registration

SECTION 4. OPERATING STANDARDS
(a) Maximum occupancy: 2 persons per bedroom plus 2
(b) Quiet hours: 10:00 PM to 8:00 AM
(c) No outdoor events, parties, or gatherings exceeding occupancy limit
(d) Minimum one off-street parking space per 2 bedrooms
(e) Trash containers stored out of public view

SECTION 5. LOCAL CONTACT REQUIREMENT
(a) Operator must designate a local contact available 24/7
(b) Local contact must be able to respond within 60 minutes
(c) Contact information must be posted inside rental unit

SECTION 6. ENFORCEMENT
(a) Operating without permit: $1,000 fine per day
(b) Violation of operating standards: $500 fine
(c) Three violations within 12 months: Permit revocation

ADOPTED April 15, 2023.`
  },
  {
    id: 8,
    title: "Sidewalk Maintenance Responsibility",
    description: "Assigns responsibility for sidewalk maintenance and repair to adjacent property owners.",
    number: "ORD-2020-45",
    date: "Aug 12, 2020",
    year: 2020,
    status: "Active",
    category: "Public Safety",
    summary: `This ordinance establishes that property owners are responsible for maintaining sidewalks adjacent to their property.

Property Owner Responsibilities:
• Keep sidewalks free of debris, snow, and ice
• Repair cracks exceeding 1/2 inch in width
• Repair vertical displacement exceeding 1/2 inch
• Maintain clear width of at least 4 feet
• Remove overhanging vegetation below 8 feet

City Assistance:
• Free sidewalk inspections upon request
• 50/50 cost-sharing program for major repairs
• Payment plans available for qualifying residents
• City handles repairs for documented hardship cases

Timeline: Property owners have 90 days to complete repairs after receiving notice.`,
    fullText: `ORDINANCE NO. ORD-2020-45

AN ORDINANCE ESTABLISHING SIDEWALK MAINTENANCE RESPONSIBILITIES

THE CITY COUNCIL ORDAINS:

SECTION 1. RESPONSIBILITY
The owner of property adjacent to a public sidewalk shall maintain such sidewalk in safe condition.

SECTION 2. MAINTENANCE STANDARDS
Property owners shall:
(a) Keep sidewalks free of debris, snow, ice, and obstructions
(b) Remove snow within 24 hours after snowfall ends
(c) Repair cracks exceeding 1/2 inch in width
(d) Repair vertical displacement exceeding 1/2 inch
(e) Maintain minimum 4-foot clear passage width
(f) Trim vegetation to maintain 8-foot vertical clearance

SECTION 3. NOTICE AND COMPLIANCE
(a) City shall provide written notice of required repairs
(b) Property owner has 90 days to complete repairs
(c) Extensions may be granted for good cause

SECTION 4. CITY ASSISTANCE PROGRAMS
(a) 50/50 cost-sharing for repairs exceeding $500
(b) Payment plans up to 24 months for qualifying residents
(c) Hardship exemptions for documented financial need

SECTION 5. FAILURE TO COMPLY
If repairs not completed within specified time:
(a) City may complete repairs
(b) Costs assessed to property owner
(c) Unpaid assessments become lien on property

SECTION 6. LIABILITY
Property owner liable for injuries resulting from failure to maintain sidewalk in safe condition.

ADOPTED August 12, 2020.`
  },
  {
    id: 9,
    title: "Accessory Dwelling Unit Standards",
    description: "Permits and regulates accessory dwelling units (ADUs) to increase housing options.",
    number: "ORD-2022-33",
    date: "Jun 28, 2022",
    year: 2022,
    status: "Active",
    category: "Zoning",
    summary: `This ordinance allows accessory dwelling units (ADUs) on residential properties to address housing needs.

ADU Types Permitted:
• Attached ADU: Built onto or within existing home
• Detached ADU: Separate structure on same lot
• Junior ADU: Converted space within existing home (up to 500 sq ft)

Size Limits:
• Attached/Detached ADU: Up to 1,000 sq ft or 50% of main home, whichever is less
• Junior ADU: Maximum 500 sq ft
• Minimum size: 150 sq ft

Key Requirements:
• No additional parking required for ADUs
• One ADU plus one Junior ADU allowed per lot
• Owner occupancy NOT required
• 4-foot side and rear setbacks for detached ADUs
• Streamlined permit process (60-day review)`,
    fullText: `ORDINANCE NO. ORD-2022-33

AN ORDINANCE ESTABLISHING STANDARDS FOR ACCESSORY DWELLING UNITS

WHEREAS, the State of California requires cities to allow ADUs; and
WHEREAS, ADUs provide needed housing opportunities;

THE CITY COUNCIL ORDAINS:

SECTION 1. DEFINITIONS
(a) "Accessory Dwelling Unit (ADU)" means a residential unit that provides independent living facilities on a lot with a primary residence.
(b) "Junior ADU" means a unit no more than 500 sq ft created within an existing residence.

SECTION 2. WHERE PERMITTED
ADUs are permitted on any lot with an existing or proposed single-family or multi-family residence.

SECTION 3. NUMBER OF UNITS
(a) Single-family lots: One ADU plus one Junior ADU
(b) Multi-family lots: Multiple ADUs as specified in state law

SECTION 4. SIZE REQUIREMENTS
(a) Minimum size: 150 square feet
(b) Maximum attached/detached ADU: 1,000 sq ft or 50% of primary dwelling
(c) Maximum Junior ADU: 500 square feet

SECTION 5. SETBACKS
(a) Attached ADU: Same as primary dwelling
(b) Detached ADU: 4 feet from side and rear property lines
(c) No setback required for conversion of existing structure

SECTION 6. PARKING
No additional parking required for ADUs.

SECTION 7. OWNER OCCUPANCY
Owner occupancy is not required for either the primary dwelling or ADU.

SECTION 8. PERMIT PROCESS
(a) Ministerial approval within 60 days
(b) No public hearing required
(c) Permit fee shall not exceed actual cost of processing

ADOPTED June 28, 2022.`
  },
  {
    id: 10,
    title: "Outdoor Dining Permit Program",
    description: "Creates a streamlined permit process for restaurants to offer outdoor dining on sidewalks and parklets.",
    number: "ORD-2021-52",
    date: "May 18, 2021",
    year: 2021,
    status: "Active",
    category: "Business Licensing",
    summary: `This ordinance establishes a permit program allowing restaurants to expand outdoor dining onto sidewalks and into parking spaces (parklets).

Permit Types:
• Sidewalk Dining: $100/year - Tables on public sidewalk
• Parklet Dining: $500/year - Platform in parking space(s)
• Combined Permit: $550/year - Both sidewalk and parklet

Requirements:
• Minimum 5-foot clear pedestrian path on sidewalks
• ADA accessibility compliance required
• No permanent structures without additional approval
• Furniture must be removed or secured after hours
• Liability insurance required ($1 million minimum)

Hours of Operation: Outdoor dining allowed 7 AM to 10 PM (11 PM Fri-Sat)`,
    fullText: `ORDINANCE NO. ORD-2021-52

AN ORDINANCE ESTABLISHING AN OUTDOOR DINING PERMIT PROGRAM

WHEREAS, outdoor dining enhances the vitality of commercial areas; and
WHEREAS, a streamlined permit process benefits local restaurants;

THE CITY COUNCIL ORDAINS:

SECTION 1. PERMIT REQUIRED
Restaurants may apply for permits to provide outdoor dining in the public right-of-way.

SECTION 2. PERMIT TYPES AND FEES
(a) Sidewalk Dining Permit: $100 per year
(b) Parklet Dining Permit: $500 per year
(c) Combined Permit: $550 per year

SECTION 3. SIDEWALK DINING STANDARDS
(a) Minimum 5-foot clear pedestrian path required
(b) Furniture shall not block access to adjacent properties
(c) No attachment to trees, poles, or other fixtures
(d) Furniture must be movable (not permanently affixed)

SECTION 4. PARKLET STANDARDS
(a) Platform must be level and ADA accessible
(b) Wheel stops or barriers required for vehicle protection
(c) Decorative railing or planters required on street side
(d) No permanent structures without separate approval

SECTION 5. HOURS OF OPERATION
(a) Sunday through Thursday: 7:00 AM to 10:00 PM
(b) Friday and Saturday: 7:00 AM to 11:00 PM

SECTION 6. INSURANCE
Permittee must maintain liability insurance with minimum $1,000,000 coverage naming City as additional insured.

SECTION 7. MAINTENANCE
Permittee responsible for keeping outdoor dining area clean and in good repair.

ADOPTED May 18, 2021.`
  }
];

const categories = ["Zoning", "Public Safety", "Environment", "Business Licensing"];
const years = [2024, 2023, 2022, 2021, 2020];
const statuses = ["Active", "Repealed"];

type DropdownType = "year" | "category" | "status" | null;
type ModalType = "summary" | "pdf" | null;

export default function OrdinancesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedOrdinance, setSelectedOrdinance] = useState<Ordinance | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openModal = (ordinance: Ordinance, type: ModalType) => {
    setSelectedOrdinance(ordinance);
    setModalType(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedOrdinance(null);
    setModalType(null);
    document.body.style.overflow = "unset";
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleYear = (year: number) => {
    setSelectedYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedYears([]);
    setSelectedStatuses([]);
    setSearchQuery("");
  };

  const filteredOrdinances = ordinances.filter((ord) => {
    const matchesSearch =
      ord.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.number.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(ord.category);
    const matchesYear = selectedYears.length === 0 || selectedYears.includes(ord.year);
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(ord.status);
    return matchesSearch && matchesCategory && matchesYear && matchesStatus;
  });

  const hasActiveFilters = selectedCategories.length > 0 || selectedYears.length > 0 || selectedStatuses.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedOrdinance && modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 font-nunito mb-1">
                  {modalType === "summary" ? "Summary" : "Full Document"} • {selectedOrdinance.number}
                </p>
                <h3 className="font-playfair text-lg font-bold text-[#1e3a5f]">
                  {selectedOrdinance.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Print"
                >
                  <FaPrint className="text-gray-400" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <span className="text-sm text-gray-500 font-nunito">Date: {selectedOrdinance.date}</span>
                <span className="text-sm text-gray-500 font-nunito">Category: {selectedOrdinance.category}</span>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    selectedOrdinance.status === "Active"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {selectedOrdinance.status}
                </span>
              </div>

              {/* Document Content */}
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-nunito text-gray-700 text-sm leading-relaxed bg-transparent p-0 overflow-visible">
                  {modalType === "summary" ? selectedOrdinance.summary : selectedOrdinance.fullText}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setModalType(modalType === "summary" ? "pdf" : "summary")}
                className="text-[#708AA3] font-nunito text-sm font-medium hover:underline"
              >
                {modalType === "summary" ? "View Full Document" : "View Summary"}
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#1e3a5f] text-white rounded-lg font-nunito text-sm font-medium hover:bg-[#2d4a6f] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl text-[#708AA3] mb-3">
            City Ordinances & Regulations
          </h1>
          <p className="font-nunito text-gray-500 text-sm">
            Search, browse, and download local laws and resolutions.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Try searching: noise policy, zoning laws, parking rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-xl font-nunito text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#708AA3]/30 focus:border-[#708AA3] transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-nunito font-bold text-[#1e3a5f]">Filters</h3>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-[#708AA3] hover:underline font-nunito">
                      Clear all
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-nunito font-semibold text-gray-700 text-sm mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="w-4 h-4 rounded border-gray-300 text-[#708AA3] focus:ring-[#708AA3]/30"
                        />
                        <span className="font-nunito text-sm text-gray-600 group-hover:text-[#1e3a5f] transition-colors">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div className="mb-6">
                  <h4 className="font-nunito font-semibold text-gray-700 text-sm mb-3">Year</h4>
                  <div className="space-y-2">
                    {years.map((year) => (
                      <label key={year} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedYears.includes(year)}
                          onChange={() => toggleYear(year)}
                          className="w-4 h-4 rounded border-gray-300 text-[#708AA3] focus:ring-[#708AA3]/30"
                        />
                        <span className="font-nunito text-sm text-gray-600 group-hover:text-[#1e3a5f] transition-colors">
                          {year}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div className="mb-6">
                  <h4 className="font-nunito font-semibold text-gray-700 text-sm mb-3">Status</h4>
                  <div className="space-y-2">
                    {statuses.map((status) => (
                      <label key={status} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedStatuses.includes(status)}
                          onChange={() => toggleStatus(status)}
                          className="w-4 h-4 rounded border-gray-300 text-[#708AA3] focus:ring-[#708AA3]/30"
                        />
                        <span className="font-nunito text-sm text-gray-600 group-hover:text-[#1e3a5f] transition-colors">
                          {status}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Quick Filter Dropdowns */}
                <div className="pt-6 border-t border-gray-100" ref={dropdownRef}>
                  <div className="flex flex-wrap gap-2">
                    {/* Year Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === "year" ? null : "year")}
                        className={`px-3 py-1.5 rounded-lg font-nunito text-xs transition-colors flex items-center gap-1 ${
                          selectedYears.length > 0 ? "bg-[#708AA3] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        Year {selectedYears.length > 0 && `(${selectedYears.length})`}
                        <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === "year" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "year" && (
                        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[120px] z-10">
                          {years.map((year) => (
                            <button
                              key={year}
                              onClick={() => toggleYear(year)}
                              className={`w-full px-3 py-1.5 text-left text-sm font-nunito hover:bg-gray-50 ${
                                selectedYears.includes(year) ? "text-[#708AA3] font-medium" : "text-gray-600"
                              }`}
                            >
                              {selectedYears.includes(year) && "✓ "}{year}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === "category" ? null : "category")}
                        className={`px-3 py-1.5 rounded-lg font-nunito text-xs transition-colors flex items-center gap-1 ${
                          selectedCategories.length > 0 ? "bg-[#708AA3] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        Category {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                        <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === "category" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "category" && (
                        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[150px] z-10">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => toggleCategory(category)}
                              className={`w-full px-3 py-1.5 text-left text-sm font-nunito hover:bg-gray-50 ${
                                selectedCategories.includes(category) ? "text-[#708AA3] font-medium" : "text-gray-600"
                              }`}
                            >
                              {selectedCategories.includes(category) && "✓ "}{category}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Status Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === "status" ? null : "status")}
                        className={`px-3 py-1.5 rounded-lg font-nunito text-xs transition-colors flex items-center gap-1 ${
                          selectedStatuses.length > 0 ? "bg-[#708AA3] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        Status {selectedStatuses.length > 0 && `(${selectedStatuses.length})`}
                        <FaChevronDown className={`text-[8px] transition-transform ${activeDropdown === "status" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "status" && (
                        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[120px] z-10">
                          {statuses.map((status) => (
                            <button
                              key={status}
                              onClick={() => toggleStatus(status)}
                              className={`w-full px-3 py-1.5 text-left text-sm font-nunito hover:bg-gray-50 ${
                                selectedStatuses.includes(status) ? "text-[#708AA3] font-medium" : "text-gray-600"
                              }`}
                            >
                              {selectedStatuses.includes(status) && "✓ "}{status}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordinances List */}
            <div className="flex-1">
              <p className="font-nunito text-sm text-gray-500 mb-4">
                Showing {filteredOrdinances.length} {filteredOrdinances.length === 1 ? "result" : "results"}
              </p>

              <div className="space-y-4">
                {filteredOrdinances.map((ord) => (
                  <div key={ord.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-playfair text-lg font-bold text-[#1e3a5f] mb-2">{ord.title}</h3>
                    <p className="font-nunito text-gray-500 text-sm leading-relaxed mb-4">{ord.description}</p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs font-nunito text-gray-400">
                      <span>Ordinance #: {ord.number}</span>
                      <span>Date: {ord.date}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-semibold ${
                          ord.status === "Active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                        }`}
                      >
                        {ord.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => openModal(ord, "pdf")}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg font-nunito text-sm text-gray-600 transition-colors"
                      >
                        <FaFilePdf className="text-gray-400" />
                        View Full PDF
                      </button>
                      <button
                        onClick={() => openModal(ord, "summary")}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg font-nunito text-sm text-gray-600 transition-colors"
                      >
                        <HiOutlineDocumentText className="text-gray-400" />
                        Open Summary
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredOrdinances.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSearch className="text-2xl text-gray-400" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#1e3a5f] mb-2">No Ordinances Found</h3>
                  <p className="font-nunito text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                  <button onClick={clearFilters} className="text-[#708AA3] font-nunito font-medium hover:underline">
                    Clear all filters
                  </button>
                </div>
              )}

              <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <p className="font-nunito text-gray-600 text-sm mb-1">Can&apos;t find what you&apos;re looking for?</p>
                <Link href="/contact" className="font-nunito text-[#708AA3] text-sm font-medium hover:underline">
                  Contact the City Clerk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
