import RevealOnScroll from "@/components/RevealOnScroll";

const boards = [
  {
    name: "Planning Commission",
    members: 7,
    frequency: "Monthly",
    description: "Reviews and recommends policies for the physical future of Port Laken.",
    tags: ["Development", "Policy"],
    tagColor: "blue",
  },
  {
    name: "Civic Arts Commission",
    members: 5,
    frequency: "Quarterly",
    description: "Promotes artistic and cultural development by commissioning public art.",
    tags: ["Civic", "Public Engagement"],
    tagColor: "indigo",
  },
];

export default function BoardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-bold text-port-navy mb-4 animate-fade-in-up">
            Boards and Committees
          </h1>
          <RevealOnScroll className="delay-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-10 bg-white p-8 rounded-2xl shadow-sm border border-port-mist">
              <div>
                <h2 className="text-2xl font-display font-bold text-port-navy">
                  Get Involved
                </h2>
                <p className="text-port-slate mt-1">
                  Find ways to participate in governance.
                </p>
              </div>
              <button className="btn-primary">
                Submit Application
                <span className="material-symbols-outlined">info</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Boards List */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {boards.map((board, index) => (
            <RevealOnScroll key={board.name} className={`delay-${index * 100}`}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-port-mist grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="font-display text-2xl font-bold text-port-navy mb-2">
                    {board.name}
                  </h3>
                  <p className="text-port-slate mb-4">{board.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {board.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-port-mist text-port-navy text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2 text-port-slate">
                    <span className="material-symbols-outlined text-sm">group</span>
                    {board.members} Members
                  </div>
                  <div className="flex items-center gap-2 text-port-slate">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    Meets {board.frequency}
                  </div>
                  <button className="btn-secondary mt-2">Learn More</button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}