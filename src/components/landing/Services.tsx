import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import epoxy from "@/assets/service-epoxy.jpg";
import pu from "@/assets/service-pu.jpg";
import coating from "@/assets/service-coating.jpg";

const services = [
  {
    img: epoxy,
    title: "Epoxy Flooring",
    desc: "Heavy-duty, seamless, glossy finish — built for high-load factory & warehouse floors.",
    tag: "Most Popular",
  },
  {
    img: pu,
    title: "Polyurethane (PU) Flooring",
    desc: "Flexible & temperature resistant. Ideal for food, pharma & cold-storage facilities.",
  },
  {
    img: coating,
    title: "Industrial Floor Coatings",
    desc: "Protective, anti-dust & chemical-resistant coatings for long-lasting concrete floors.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-ucs">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">What We Do</span>
          <h2 className="heading-lg text-primary mt-2 mb-3">Our Core Flooring Services</h2>
          <p className="text-muted-foreground text-lg">
            Industrial-grade materials, expert application and lasting performance — guaranteed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-elegant border border-border transition-base hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} application by UCS`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-105 transition-base duration-500"
                />
                {s.tag && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-muted-foreground mb-5">{s.desc}</p>
                <Button variant="ghostPrimary" size="sm" asChild>
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
