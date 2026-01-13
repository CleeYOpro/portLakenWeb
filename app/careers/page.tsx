import RevealOnScroll from "@/components/RevealOnScroll";

const benefits = [
  { title: "Community Impact", description: "Shape the future through public service.", icon: "public" },
  { title: "Career Growth", description: "Professional development and advancement.", icon: "school" },
  { title: "Diverse & Inclusive", description: "A workforce that reflects our city.", icon: "groups" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-port-navy/70 to-port-navy/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            Build Your <span className="italic">Future.</span>
            <br />
            Serve Your <span className="italic">City.</span>
          </h1>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-port-navy mb-6">
                Work That Matters
              </h2>
              <p className="text-port-slate">
                Join a team dedicated to improving lives in our community.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={benefit.title} className={`delay-${index * 100}`}>
                <div className="bg-white p-10 rounded-2xl shadow-sm text-center card-hover">
                  <div className="w-16 h-16 bg-port-frost rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-port-sky text-3xl">
                      {benefit.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-port-navy mb-4">{benefit.title}</h3>
                  <p className="text-port-slate text-sm">{benefit.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-display text-4xl font-bold text-port-navy mb-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-port-slate mb-10">
              Our HR team is ready to assist with your application.
            </p>
            <button className="btn-primary">
              Contact HR
              <span className="material-symbols-outlined">mail</span>
            </button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}