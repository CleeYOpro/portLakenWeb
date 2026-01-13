import CouncilMember from "@/components/CouncilMember";
import RevealOnScroll from "@/components/RevealOnScroll";

const councilMembers = [
  { name: "Mayor Sarah Johnson", role: "Mayor", description: "Dedicated to fostering community growth." },
  { name: "David Martinez", role: "District 1", description: "Focused on infrastructure improvements." },
  { name: "Emily Chen", role: "District 2", description: "Championing environmental initiatives." },
  { name: "Michael Thompson", role: "District 3", description: "Advocating for public safety." },
  { name: "Lisa Rodriguez", role: "District 4", description: "Improving educational resources." },
  { name: "James Wilson", role: "At Large", description: "Overseeing fiscal responsibility." },
];

const meetings = [
  { date: "January 15, 2026", title: "Regular City Council Meeting" },
  { date: "January 8, 2026", title: "Special Session on Urban Planning" },
  { date: "December 20, 2025", title: "Public Hearing on Budget Allocation" },
];

export default function CityCouncilPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl font-bold text-port-navy mb-6 animate-fade-in-up">
            Meet Your City Council
          </h1>
          <p className="text-lg text-port-slate max-w-2xl mx-auto animate-fade-in-up delay-100">
            Dedicated leaders working for our community.
          </p>
        </div>
      </section>

      {/* Council Members */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-port-navy text-center mb-16">
              Council Members
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {councilMembers.map((member, index) => (
              <RevealOnScroll key={member.name} className={`delay-${(index % 3) * 100}`}>
                <CouncilMember
                  name={member.name}
                  role={member.role}
                  description={member.description}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Agendas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-port-navy text-center mb-16">
              Meeting Agendas & Minutes
            </h2>
          </RevealOnScroll>

          <div className="space-y-6">
            {meetings.map((meeting, index) => (
              <RevealOnScroll key={meeting.title} className={`delay-${index * 100}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-port-frost rounded-2xl">
                  <div>
                    <p className="text-xs font-medium text-port-sky uppercase tracking-wider mb-1">
                      {meeting.date}
                    </p>
                    <h3 className="font-display text-xl font-bold text-port-navy">
                      {meeting.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-port-navy text-white rounded-lg text-sm font-medium hover:bg-port-slate transition-colors">
                      View Agenda
                    </button>
                    <button className="px-6 py-2.5 bg-port-mist text-port-navy rounded-lg text-sm font-medium hover:bg-port-ice transition-colors">
                      View Minutes
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
