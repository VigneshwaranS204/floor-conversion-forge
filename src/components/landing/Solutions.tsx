import { CheckCircle2, Factory, Warehouse, Store, FlaskConical, Wrench, Shield, Droplets, Sparkles } from "lucide-react";
import solutionsBg from "@/assets/solutions-bg.jpg";

const sectors = [
  { icon: Factory, label: "Factories & Manufacturing" },
  { icon: Warehouse, label: "Warehouses & Storage" },
  { icon: Store, label: "Showrooms & Commercial" },
  { icon: FlaskConical, label: "Pharma & Food Processing" },
  { icon: Wrench, label: "Workshops & Service Areas" },
];

const features = [
  { icon: Shield, label: "Strong & durable surface" },
  { icon: Droplets, label: "Chemical & wear resistant" },
  { icon: Sparkles, label: "Long-lasting performance" },
  { icon: CheckCircle2, label: "Anti-slip safe finish" },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary">
      <div className="container-ucs">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1">
            <img
              src={solutionsBg}
              alt="Industrial and commercial flooring solutions across multiple facilities"
              loading="lazy"
              width={1920}
              height={900}
              className="w-full h-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-accent font-bold uppercase text-sm tracking-wider">Our Solutions</span>
            <h2 className="heading-lg text-primary mt-2 mb-4">
              Reliable Flooring for Industrial & Commercial Spaces
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Designed for both heavy-duty industrial use and high-traffic commercial environments.
            </p>

            <div className="space-y-3 mb-8">
              {sectors.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <div className="bg-primary/10 text-primary p-2 rounded-md">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-foreground">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <f.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
