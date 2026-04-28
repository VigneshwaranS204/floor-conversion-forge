import { Factory, Warehouse, FlaskConical, UtensilsCrossed, Car, Snowflake, TestTubes } from "lucide-react";

const industries = [
  { icon: Factory, label: "Factories" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: FlaskConical, label: "Pharma Plants" },
  { icon: UtensilsCrossed, label: "Food Units" },
  { icon: Car, label: "Automotive" },
  { icon: Snowflake, label: "Cold Storage" },
  { icon: TestTubes, label: "Chemical Plants" },
];

const IndustryStrip = () => {
  return (
    <section className="bg-accent text-accent-foreground py-4 md:py-5 overflow-hidden">
      <div className="container-ucs flex items-center gap-4 md:gap-6 flex-wrap justify-center">
        <span className="font-extrabold uppercase tracking-wider text-sm md:text-base whitespace-nowrap">
          We serve →
        </span>
        {industries.map((it) => (
          <div key={it.label} className="inline-flex items-center gap-2 font-bold text-sm md:text-base">
            <it.icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.2} />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryStrip;
