import { Factory, FlaskConical, UtensilsCrossed, Warehouse } from "lucide-react";

const cards = [
  {
    icon: Factory,
    title: "Factory & Manufacturing",
    desc: "Heavy machinery, oil/coolant spills, vibration impact. Our epoxy mortar withstands point loads up to 500 kg/cm² — without cracking.",
    tags: ["Forklift-rated", "Impact resistant", "Chemical resistant"],
  },
  {
    icon: FlaskConical,
    title: "Pharma & Clean Room",
    desc: "Seamless, coved skirting, zero microbial harbourage. GMP-compliant finish that passes validation audits first time.",
    tags: ["GMP compliant", "Seamless joints", "Coved skirting"],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    desc: "FSSAI-grade PU mortar — thermal shock resistant, non-slip, fully hygienic. Survives steam cleaning and food-acid spills daily.",
    tags: ["FSSAI grade", "Thermal shock", "Non-slip R11"],
  },
  {
    icon: Warehouse,
    title: "Warehouse & Logistics",
    desc: "High-traffic lanes, racking zones, loading bays. Phased application by zone — your operations keep running during installation.",
    tags: ["High-traffic", "Phased install", "Dust-free finish"],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container-ucs">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow">Industrial-Grade. Not Generic.</span>
          <h2 className="heading-lg text-primary mt-3 mb-4">
            Your Floor Handles What Your Operations Demand
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Industrial environments destroy standard floors. We engineer systems that survive forklift traffic, chemical spills & compliance audits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-base p-6 md:p-7"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl flex-shrink-0">
                  <c.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="heading-md text-primary mt-1">{c.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center text-xs font-bold text-primary bg-secondary px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
