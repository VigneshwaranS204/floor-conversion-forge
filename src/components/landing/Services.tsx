import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import epoxy from "@/assets/service-epoxy.jpg";
import pu from "@/assets/service-pu.jpg";
import coating from "@/assets/service-coating.jpg";

const services = [
  {
    img: epoxy,
    title: "Industrial Epoxy Flooring",
    bestFor: "Factories · Warehouses · Auto",
    desc: "Seamless, high-strength self-levelling systems that protect concrete from chemical attack, abrasion, and heavy impact loads.",
    features: [
      "Self-levelling systems (2–6mm thickness)",
      "Chemical & solvent resistant",
      "ESD / anti-static variants",
      "Broadcast quartz for heavy-duty grip",
      "Return to service in 72 hours",
    ],
    ideal: "Machine shops · Assembly lines · Electronics · Warehouses",
    tag: "Most Popular",
  },
  {
    img: pu,
    title: "Polyurethane (PU) Flooring",
    bestFor: "Pharma · Food · Cold Storage",
    desc: "Gold standard for hygiene-critical and thermal environments. Bonds to substrate even in cold conditions and flexes without cracking.",
    features: [
      "PU mortar systems (6–9mm thickness)",
      "-20°C to +120°C thermal cycling",
      "Seamless coved skirting",
      "Anti-microbial & non-porous",
      "R10–R12 slip resistance certified",
    ],
    ideal: "Pharma plants · Food factories · Cold storage · Breweries",
  },
  {
    img: coating,
    title: "Industrial Floor Coatings",
    bestFor: "Renovation · Logistics · Workshops",
    desc: "Cost-effective protection and rejuvenation for existing concrete floors. Durable, cleanable surface with safety line markings.",
    features: [
      "Single & multi-coat epoxy systems",
      "Safety line marking & zone demarcation",
      "Floor repair & levelling pre-coating",
      "UV-stable topcoats",
      "Renovation of worn industrial floors",
    ],
    ideal: "Logistics hubs · Existing floors · Automotive · Workshops",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-ucs">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow">Core Services</span>
          <h2 className="heading-lg text-primary mt-3 mb-4">
            Three Flooring Systems. One Certified Applicator.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Each system engineered for specific industrial environments — we recommend the right one after a free site assessment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant border border-border transition-base hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} by UCS`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-105 transition-base duration-500"
                />
                {s.tag && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {s.tag}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1.5">
                  Best for: {s.bestFor}
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-3 leading-tight">{s.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {s.features.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                  <span className="font-bold text-primary">Ideal for:</span> {s.ideal}
                </div>
                <Button variant="cta" size="lg" asChild className="w-full">
                  <a href="#contact" className="inline-flex items-center gap-1">
                    Get Free Quote <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
