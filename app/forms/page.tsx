import RevealOnScroll from "@/components/RevealOnScroll";

const forms = [
  { title: "Residential Building Permit", category: "Building & Zoning" },
  { title: "Special Event Permit", category: "City Clerk" },
  { title: "Park Facility Reservation", category: "Parks & Recreation" },
];

export default function FormsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-port-mist to-port-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-bold text-port-navy mb-4 animate-fade-in-up">
            Forms & Applications
          </h1>
          <p className="text-lg text-port-slate animate-fade-in-up delay-100">
            Find and download all available city forms.
          </p>
        </div>
      </section>

      {/* Featured Form */}
      <section className="py-16 bg-port-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-port-mist mb-12">
              <div className="aspect-[16/7] bg-port-mist flex items-center justify-center">
                <span className="material-symbols-outlined text-port-ice text-[80px]">
                  description
                </span>
              </div>
              <div className="p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl font-bold text-port-navy mb-4">
                  New: 2026 Business License Renewal
                </h2>
                <p className="text-port-slate mb-8">
                  All local businesses must renew by January 31st, 2026.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">Download PDF</button>
                  <button className="btn-secondary">More Info</button>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* All Forms */}
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-port-navy mb-8">
              All Forms
            </h2>
          </RevealOnScroll>

          <div className="space-y-4">
            {forms.map((form, index) => (
              <RevealOnScroll key={form.title} className={`delay-${index * 100}`}>
                <div className="bg-white p-6 rounded-2xl border border-port-mist shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 card-hover">
                  <div>
                    <h3 className="font-display text-xl font-bold text-port-navy mb-1">
                      {form.title}
                    </h3>
                    <p className="text-sm text-port-slate">{form.category}</p>
                  </div>
                  <button className="px-5 py-2.5 bg-port-sky/10 text-port-navy rounded-lg font-semibold flex items-center gap-2 hover:bg-port-sky/20 transition-colors">
                    <span className="material-symbols-outlined">description</span>
                    Download
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}