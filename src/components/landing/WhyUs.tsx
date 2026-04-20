import { Users, Layers, Zap, Wallet, MapPin } from "lucide-react";

const items = [
  { icon: Users, title: "Experienced Team", desc: "Skilled applicators with 10+ years on industrial sites." },
  { icon: Layers, title: "Industrial-Grade Materials", desc: "Premium resins from trusted global brands only." },
  { icon: Zap, title: "Fast Execution", desc: "On-time project handover with minimal facility downtime." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes with no hidden charges." },
  { icon: MapPin, title: "Chennai-Based Service", desc: "Local team, fast response — anywhere in Chennai & TN." },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="container-ucs relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Why Choose UCS</span>
          <h2 className="heading-lg mt-2 mb-3">Built on Trust. Engineered for Performance.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it) => (
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
