import { CheckCircle2, Factory, Warehouse, FlaskConical, Car, Shield, Droplets, Sparkles } from "lucide-react";
import solutionsBg from "@/assets/solutions-bg.jpg";

const sectors = [
  { icon: Factory, label: "Manufacturing & Production Units" },
  { icon: Warehouse, label: "Warehouses & Logistics Hubs" },
  { icon: FlaskConical, label: "Pharma & Food Processing Plants" },
  { icon: Car, label: "Automobile & Engineering Facilities" },
];

const features = [
  { icon: Shield, label: "Handles heavy machinery & load traffic" },
  { icon: Droplets, label: "Resistant to chemicals, oil & abrasion" },
  { icon: Sparkles, label: "Reduces dust & maintenance issues" },
  { icon: CheckCircle2, label: "Improves workplace safety standards" },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary">
      <div className="container-ucs">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={solutionsBg}
                alt="Industrial flooring solutions across factories and warehouses in Chennai"
                loading="lazy"
                width={1920}
                height={1440}
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-accent font-bold uppercase text-sm tracking-wider">Our Solutions</span>
            <h2 className="heading-lg text-primary mt-2 mb-4">
              Industrial Flooring Solutions Built for Performance, Not Just Finish
            </h2>
            <div className="space-y-3 text-muted-foreground mb-6">
              <p>
                With a particular focus on factories, warehouses, and manufacturing facilities, <strong className="text-foreground">Ultimate Construction Solutions (UCS)</strong> is an expert in industrial epoxy flooring solutions in Chennai.
              </p>
              <p>
                Our flooring systems offer strong adhesion, a flawless surface, and high resistance to chemicals, load, and wear — designed for heavy-duty industrial application.
              </p>
              <p>
                Using premium materials and exacting on-site methods, we provide long-lasting, adaptable flooring solutions that meet your industrial needs.
              </p>
            </div>

            <h3 className="font-bold text-primary mb-3">Industries We Work With:</h3>
            <div className="space-y-2.5 mb-6">
              {sectors.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                  <div className="bg-primary/10 text-primary p-2 rounded-md">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-foreground">{s.label}</span>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-primary mb-3">Core Performance Benefits:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-2">
                  <f.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
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
