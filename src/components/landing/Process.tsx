const steps = [
  { n: "01", title: "Site Assessment", desc: "Free moisture, hardness & structural survey of existing slab" },
  { n: "02", title: "System Selection", desc: "We specify the right product, thickness & system for your use case" },
  { n: "03", title: "Surface Prep", desc: "Shot blasting, diamond grinding & crack repair — the critical step most skip" },
  { n: "04", title: "Primer Coat", desc: "Penetrating primer seals porosity and locks in adhesion" },
  { n: "05", title: "System Application", desc: "Precision mixing, controlled pour, squeegee & roller finish" },
  { n: "06", title: "QC & Handover", desc: "Pull-off adhesion test, DFT check, final walkthrough & warranty issue" },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="container-ucs">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow">Our Application Process</span>
          <h2 className="heading-lg text-primary mt-3 mb-4">
            6 Steps. Zero Surprises.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Every project follows the same documented process — no shortcuts, no skipped steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-base"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl md:text-5xl font-extrabold text-accent/30 leading-none">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-extrabold text-primary text-lg mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
