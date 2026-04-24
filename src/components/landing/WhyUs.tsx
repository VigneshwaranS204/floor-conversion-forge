import { ShieldCheck, Award, Layers, Settings, BadgeCheck, TrendingUp, Wrench, Sparkles } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Increase floor durability significantly under heavy usage" },
  { icon: Wrench, title: "Reduce maintenance and repair costs over time" },
  { icon: ShieldCheck, title: "Improve safety with anti-slip and seamless surfaces" },
  { icon: Sparkles, title: "Enhance operational efficiency with dust-free flooring" },
];

const advantages = [
  { icon: BadgeCheck, title: "Authorized Applicators", desc: "Authorized applicators of high-quality construction chemicals." },
  { icon: Award, title: "Certified Expertise", desc: "Certified application expertise with industry-grade materials." },
  { icon: Layers, title: "Proven Execution", desc: "Proven execution across complex industrial projects." },
  { icon: Settings, title: "Customized Systems", desc: "Customized flooring systems based on site conditions." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strong quality assurance and performance focus." },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="container-ucs relative">
        {/* Performance benefits */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Performance Benefits</span>
          <h2 className="heading-lg mt-2 mb-3">Upgrade Your Industrial Flooring Performance</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/15 rounded-xl p-5 hover:bg-primary-foreground/10 transition-base"
            >
              <div className="bg-accent text-accent-foreground inline-flex p-2.5 rounded-lg mb-3 shadow-accent">
                <b.icon className="h-5 w-5" />
              </div>
              <p className="font-semibold text-sm leading-snug">{b.title}</p>
            </div>
          ))}
        </div>

        {/* Why choose UCS */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Why Choose UCS</span>
          <h2 className="heading-lg mt-2 mb-3">The Ultimate Advantage: Why Industries Choose UCS</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {advantages.map((it) => (
            <div
              key={it.title}
              className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/15 rounded-xl p-6 hover:bg-primary-foreground/10 transition-base"
            >
              <div className="bg-accent text-accent-foreground inline-flex p-3 rounded-lg mb-4 shadow-accent">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1.5">{it.title}</h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
