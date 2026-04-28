import { Check } from "lucide-react";

const stats = [
  { value: "20+", label: "Years of industrial flooring experience across Tamil Nadu since 2003" },
  { value: "5,000+", label: "Industrial, pharma & warehouse flooring projects completed" },
  { value: "100%", label: "In-house trained applicator team — we never subcontract" },
  { value: "3", label: "Leading manufacturer authorisations — Sika, BASF, Pidilite certified" },
];

const proofs = [
  "Authorized dealer & certified applicator — we control quality end-to-end",
  "Correct surface prep: diamond grinding, shot blasting, moisture testing",
  "Compliance-ready documentation for GMP, FSSAI & ISO audits",
  "Phased installation by zone — your facility keeps operating",
  "Written post-installation warranty with annual maintenance options",
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-ucs">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow">Why Choose UCS</span>
          <h2 className="heading-lg text-primary mt-3 mb-4">
            The Ultimate Advantage: Why Industries Choose UCS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-card border border-border rounded-2xl p-6 shadow-card text-center hover:border-accent/50 hover:shadow-elegant transition-base"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                {s.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-secondary rounded-2xl p-6 md:p-8 border border-border">
          <h3 className="text-lg md:text-xl font-bold text-primary mb-5 text-center">Proof Points</h3>
          <ul className="space-y-3.5">
            {proofs.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <div className="bg-accent text-accent-foreground h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
