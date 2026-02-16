import DepartmentCard from "@/components/DepartmentCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FaFileAlt, FaBuilding, FaFireExtinguisher, FaShieldAlt, FaHardHat, FaTree, FaChartPie, FaUserFriends, FaRecycle, FaLeaf } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";

const departments = [
  { title: "City Clerk", description: "Official records, elections, and public information.", icon: FaFileAlt, href: "/departments/city-clerk" },
  { title: "Community Development", description: "Planning, zoning, and building permits.", icon: FaBuilding, href: "/departments/community-development" },
  { title: "Fire Department", description: "Emergency response and fire prevention.", icon: FaFireExtinguisher, href: "/departments/fire-department" },
  { title: "Police Department", description: "Ensuring public safety and law enforcement.", icon: FaShieldAlt, href: "/departments/police-department" },
  { title: "Public Works", description: "Infrastructure, streets, and sanitation.", icon: FaHardHat, href: "/departments/public-works" },
  { title: "Recreation & Parks", description: "Managing parks, trails, and programs.", icon: FaTree, href: "/departments/recreation-parks" },
  { title: "Finance", description: "Budgeting and financial services.", icon: FaChartPie, href: "/departments/finance" },
  { title: "Human Resources", description: "City employment and benefits.", icon: FaUserFriends, href: "/departments/human-resources" },
];

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4 animate-fade-in-up">
            City <span className="italic">Departments</span>
          </h1>
          <p className="text-lg text-port-slate max-w-2xl mx-auto animate-fade-in-up delay-100">
            Dedicated to serving our community.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {departments.map((dept, index) => (
              <RevealOnScroll key={dept.title} className={`delay-${(index % 4) * 100}`}>
                <DepartmentCard
                  title={dept.title}
                  description={dept.description}
                  icon={dept.icon}
                  href={dept.href}
                />
              </RevealOnScroll>
            ))}
          </div>

          {/* How We Serve */}
          <RevealOnScroll>
            <h2 className="text-3xl font-display font-bold text-port-navy mb-4">
              How We Serve You
            </h2>
            <p className="text-port-slate mb-10 max-w-2xl">
              Our departments collaborate on key initiatives to enhance quality of life.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <RevealOnScroll>
              <div className="bg-white p-8 rounded-2xl border border-port-mist shadow-sm">
                <FaRecycle className="text-port-sky text-4xl mb-6" />
                <h4 className="text-xl font-bold text-port-navy mb-4">
                  Sustainable Infrastructure
                </h4>
                <p className="text-port-slate leading-relaxed">
                  Public Works and Stormwater partner on green infrastructure projects.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-100">
              <div className="bg-white p-8 rounded-2xl border border-port-mist shadow-sm">
                <HiShieldCheck className="text-port-sky text-4xl mb-6" />
                <h4 className="text-xl font-bold text-port-navy mb-4">
                  Community Safety
                </h4>
                <p className="text-port-slate leading-relaxed">
                  Police and Fire departments work together on safety programs.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="delay-200">
              <div className="bg-white p-8 rounded-2xl border border-port-mist shadow-sm">
                <FaLeaf className="text-port-sky text-4xl mb-6" />
                <h4 className="text-xl font-bold text-port-navy mb-4">
                  Vibrant Public Spaces
                </h4>
                <p className="text-port-slate leading-relaxed">
                  Creating lively, accessible public areas for all residents.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
