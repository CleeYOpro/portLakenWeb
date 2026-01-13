import RevealOnScroll from "@/components/RevealOnScroll";

const programs = [
  { title: "Recycling & Waste", description: "Collection schedules and waste reduction goals.", icon: "recycling" },
  { title: "Green Energy", description: "Solar power and renewable energy initiatives.", icon: "bolt" },
  { title: "Water Conservation", description: "Water conservation and stormwater management.", icon: "water_drop" },
  { title: "Community Gardens", description: "Educational workshops and local green initiatives.", icon: "potted_plant" },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
            alt="Forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-port-navy/50 to-port-navy/70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Our Commitment to a Greener Future
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Protecting our environment for generations to come.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32 bg-port-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl font-bold text-port-sky mb-8">Overview</h2>
            <p className="text-lg text-port-slate leading-relaxed">
              Our community is dedicated to fostering a sustainable future through
              proactive environmental stewardship.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-4xl font-bold text-port-sky text-center mb-16">
              Key Programs
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <RevealOnScroll key={program.title} className={`delay-${index * 100}`}>
                <div className="bg-port-frost p-8 rounded-2xl card-hover">
                  <div className="w-14 h-14 bg-port-sky/20 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-port-sky text-3xl">
                      {program.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-port-navy mb-4">{program.title}</h3>
                  <p className="text-port-slate text-sm">{program.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
