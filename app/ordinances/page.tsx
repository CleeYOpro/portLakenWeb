import RevealOnScroll from "@/components/RevealOnScroll";

const ordinances = [
  {
    title: "Residential Noise Abatement Ordinance",
    description: "Limits on noise levels within residential zones.",
    number: "ORD-2025-112",
    status: "Active",
  },
  {
    title: "Zoning Regulations Amendment",
    description: "Updates to local zoning laws concerning mixed-use development.",
    number: "ORD-2025-105",
    status: "Active",
  },
];

export default function OrdinancesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl font-bold text-port-navy mb-4 animate-fade-in-up">
            City Ordinances & Regulations
          </h1>
          <p className="text-lg text-port-slate animate-fade-in-up delay-100">
            Search, browse, and download local laws.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-port-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-port-slate">
              search
            </span>
            <input
              type="text"
              placeholder="Search ordinances..."
              className="w-full pl-14 pr-6 py-4 rounded-full border border-port-mist bg-white focus:ring-2 focus:ring-port-sky shadow-sm text-lg"
            />
          </div>
        </div>
      </section>

      {/* Ordinances List */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {ordinances.map((ord, index) => (
              <RevealOnScroll key={ord.number} className={`delay-${index * 100}`}>
                <div className="bg-white p-8 rounded-2xl border border-port-mist shadow-sm card-hover">
                  <h3 className="text-xl font-bold text-port-navy mb-2">{ord.title}</h3>
                  <p className="text-port-slate mb-6">{ord.description}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-6 border-b border-port-mist mb-6 text-sm text-port-slate">
                    <div>
                      <span className="font-medium text-port-navy">Ordinance #:</span>{" "}
                      {ord.number}
                    </div>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {ord.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2.5 bg-port-frost hover:bg-port-mist rounded-xl text-sm font-medium flex items-center gap-2 transition-colors">
                      <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                      View PDF
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="mt-16">
            <div className="bg-white p-10 rounded-2xl border border-port-mist text-center shadow-sm">
              <h4 className="text-xl font-medium text-port-navy mb-2">
                Can&apos;t find what you&apos;re looking for?
              </h4>
              <a href="#" className="text-port-sky font-semibold hover:underline">
                Contact the City Clerk
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}