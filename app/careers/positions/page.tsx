"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaArrowLeft, FaSearch, FaMapMarkerAlt, FaClock, FaDollarSign, FaBriefcase, FaTimes } from "react-icons/fa";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Administrative Assistant",
    department: "City Clerk",
    location: "City Hall",
    type: "Full-time",
    salary: "$42,000 - $52,000",
    posted: "2 days ago",
    description: "Provide administrative support to the City Clerk's office, including managing correspondence, scheduling meetings, and maintaining records.",
    responsibilities: [
      "Manage daily office operations and correspondence",
      "Schedule and coordinate meetings and appointments",
      "Maintain filing systems and official records",
      "Assist with public records requests",
      "Greet visitors and answer phone inquiries"
    ],
    qualifications: [
      "High school diploma or equivalent required",
      "2+ years of administrative experience",
      "Proficiency in Microsoft Office Suite",
      "Excellent communication and organizational skills",
      "Ability to handle confidential information"
    ]
  },
  {
    id: 2,
    title: "Civil Engineer",
    department: "Public Works",
    location: "Public Works Building",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    posted: "1 week ago",
    description: "Design and oversee construction of municipal infrastructure projects including roads, bridges, and water systems.",
    responsibilities: [
      "Design and review infrastructure projects",
      "Prepare cost estimates and project specifications",
      "Oversee construction and ensure compliance with standards",
      "Review and approve contractor work",
      "Coordinate with other departments and agencies"
    ],
    qualifications: [
      "Bachelor's degree in Civil Engineering",
      "PE license required",
      "5+ years of municipal engineering experience",
      "Experience with AutoCAD and GIS software",
      "Strong project management skills"
    ]
  },
  {
    id: 3,
    title: "Recreation Program Coordinator",
    department: "Parks & Recreation",
    location: "Community Center",
    type: "Full-time",
    salary: "$48,000 - $58,000",
    posted: "3 days ago",
    description: "Plan and coordinate recreational programs and activities for residents of all ages.",
    responsibilities: [
      "Develop and implement recreational programs",
      "Supervise part-time staff and volunteers",
      "Manage program budgets and registrations",
      "Coordinate facility reservations and events",
      "Promote programs through various channels"
    ],
    qualifications: [
      "Bachelor's degree in Recreation or related field",
      "3+ years of program coordination experience",
      "CPR and First Aid certification",
      "Experience working with diverse populations",
      "Flexible schedule including evenings and weekends"
    ]
  },
  {
    id: 4,
    title: "Police Officer",
    department: "Police Department",
    location: "Police Station",
    type: "Full-time",
    salary: "$58,000 - $78,000",
    posted: "Ongoing",
    description: "Protect and serve the community through patrol, investigation, and community engagement.",
    responsibilities: [
      "Patrol assigned areas and respond to calls",
      "Investigate crimes and prepare reports",
      "Make arrests and testify in court",
      "Engage with community members",
      "Participate in training and professional development"
    ],
    qualifications: [
      "High school diploma required; degree preferred",
      "Must be 21 years of age",
      "Valid driver's license",
      "Pass background check and physical exam",
      "Complete police academy training"
    ]
  },
  {
    id: 5,
    title: "IT Support Specialist",
    department: "Information Technology",
    location: "City Hall",
    type: "Full-time",
    salary: "$55,000 - $68,000",
    posted: "5 days ago",
    description: "Provide technical support to city employees and maintain IT infrastructure.",
    responsibilities: [
      "Respond to help desk tickets and resolve issues",
      "Install and configure hardware and software",
      "Maintain network and server infrastructure",
      "Train employees on technology systems",
      "Document procedures and maintain inventory"
    ],
    qualifications: [
      "Associate's degree in IT or related field",
      "3+ years of IT support experience",
      "CompTIA A+ or similar certification",
      "Experience with Windows and Microsoft 365",
      "Strong troubleshooting and communication skills"
    ]
  },
  {
    id: 6,
    title: "Library Assistant",
    department: "Library Services",
    location: "Public Library",
    type: "Part-time",
    salary: "$18 - $22 per hour",
    posted: "1 week ago",
    description: "Assist patrons with library services and help maintain library collections.",
    responsibilities: [
      "Assist patrons with finding materials and using resources",
      "Check in/out materials and process holds",
      "Shelve materials and maintain organization",
      "Help with children's programs and events",
      "Provide basic computer assistance"
    ],
    qualifications: [
      "High school diploma required",
      "Customer service experience preferred",
      "Basic computer skills",
      "Ability to lift and shelve books",
      "Flexible schedule including weekends"
    ]
  },
];

const departments = ["All Departments", "City Clerk", "Public Works", "Parks & Recreation", "Police Department", "Information Technology", "Library Services"];
const jobTypes = ["All Types", "Full-time", "Part-time"];

export default function PositionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All Departments" || job.department === selectedDepartment;
    const matchesType = selectedType === "All Types" || job.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const openJobModal = (job: Job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeJobModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* Job Detail Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeJobModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-port-navy">
                  {selectedJob.title}
                </h3>
                <p className="text-port-slate text-sm">{selectedJob.department}</p>
              </div>
              <button
                onClick={closeJobModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Job Meta */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-sm text-port-slate">
                  <FaMapMarkerAlt className="text-port-sky" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-port-slate">
                  <FaClock className="text-port-sky" />
                  {selectedJob.type}
                </div>
                <div className="flex items-center gap-2 text-sm text-port-slate">
                  <FaDollarSign className="text-port-sky" />
                  {selectedJob.salary}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="font-bold text-port-navy mb-2">About This Position</h4>
                <p className="text-port-slate text-sm leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-bold text-port-navy mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-port-slate">
                      <span className="w-1.5 h-1.5 bg-port-sky rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="mb-6">
                <h4 className="font-bold text-port-navy mb-3">Qualifications</h4>
                <ul className="space-y-2">
                  {selectedJob.qualifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-port-slate">
                      <span className="w-1.5 h-1.5 bg-port-sky rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-sm text-port-slate">Posted {selectedJob.posted}</span>
              <button
                className="px-6 py-2 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-port-mist to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-port-slate hover:text-port-navy transition-colors mb-6"
          >
            <FaArrowLeft className="text-sm" />
            Back to Careers
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-port-navy mb-4">
            Open Positions
          </h1>
          <p className="text-port-slate text-lg max-w-2xl">
            Explore current job opportunities with the City of Port Laken. Find a role that matches your skills and start making a difference in your community.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-port-frost border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 bg-port-frost border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 bg-port-frost border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-port-sky/30 focus:border-port-sky transition-colors"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-port-slate mb-6">
            Showing {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"}
          </p>

          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <RevealOnScroll key={job.id} className={`delay-${index * 50}`}>
                <div
                  className="bg-port-frost p-6 rounded-2xl hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openJobModal(job)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-port-navy">{job.title}</h3>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          job.type === "Full-time" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-port-slate">
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-port-sky" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-port-sky" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaDollarSign className="text-port-sky" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-port-slate">{job.posted}</span>
                      <button className="px-4 py-2 bg-port-navy text-white rounded-lg text-sm font-medium hover:bg-port-navy/90 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <FaSearch className="text-4xl text-gray-300 mx-auto mb-4" />
              <h3 className="font-bold text-port-navy mb-2">No Positions Found</h3>
              <p className="text-port-slate">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-port-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-bold text-port-navy mb-4">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-port-slate mb-6 max-w-xl mx-auto">
              New positions are added regularly. Contact our HR team to learn about upcoming opportunities or submit your resume for future consideration.
            </p>
            <Link
              href="/careers/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-port-navy text-white rounded-lg font-medium hover:bg-port-navy/90 transition-colors"
            >
              Contact HR
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
