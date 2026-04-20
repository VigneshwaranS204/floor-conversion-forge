import { Search, Hammer, Paintbrush, ClipboardCheck, KeyRound } from "lucide-react";

const steps = [
  { icon: Search, title: "Site Inspection", desc: "Free on-site assessment & flooring recommendation." },
  { icon: Hammer, title: "Surface Preparation", desc: "Diamond grinding & priming for perfect adhesion." },
  { icon: Paintbrush, title: "Application", desc: "Expert layered application of epoxy/PU systems." },
  { icon: ClipboardCheck, title: "Quality Check", desc: "Strict QC for finish, thickness & durability." },
  { icon: KeyRound, title: "Handover", desc: "On-time project handover with care guidelines." },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-ucs">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">How We Work</span>
          <h2 className="heading-lg text-primary mt-2 mb-3">Our 5-Step Proven Process</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center relative">
                <div className="relative inline-flex">
                  <div className="bg-gradient-primary text-primary-foreground h-18 w-18 md:h-20 md:w-20 rounded-full inline-flex items-center justify-center shadow-elegant relative z-10" style={{ height: '5rem', width: '5rem' }}>
                    <s.icon className="h-8 w-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground h-7 w-7 rounded-full text-xs font-extrabold inline-flex items-center justify-center z-20 shadow-accent">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-primary mt-4 mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
