import factory from "@/assets/project-factory.jpg";
import pharma from "@/assets/project-pharma.jpg";
import food from "@/assets/project-food.jpg";
import warehouse from "@/assets/project-warehouse.jpg";
import workshop from "@/assets/project-workshop.jpg";
import chemical from "@/assets/project-chemical.jpg";

const projects = [
  { img: factory, tag: "EPOXY FLOORING", title: "Automotive Manufacturing Plant", meta: "Chennai, Tamil Nadu · 28,000 sq ft" },
  { img: pharma, tag: "PU FLOORING — GMP", title: "Pharmaceutical Clean Room", meta: "Chennai, Tamil Nadu · 12,000 sq ft" },
  { img: food, tag: "PU MORTAR — FSSAI", title: "Food Processing Facility", meta: "Chennai, Tamil Nadu · 8,500 sq ft" },
  { img: warehouse, tag: "EPOXY + LINE MARKING", title: "Logistics & Warehouse Hub", meta: "Chennai, Tamil Nadu · 45,000 sq ft" },
  { img: workshop, tag: "ESD EPOXY FLOORING", title: "Electronics Manufacturing Unit", meta: "Chennai, Tamil Nadu · 6,200 sq ft" },
  { img: chemical, tag: "PU FLOORING — THERMAL", title: "Cold Storage Facility", meta: "Chennai, Tamil Nadu · 15,000 sq ft" },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-ucs">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow">Executed Across Industrial Environments</span>
          <h2 className="heading-lg text-primary mt-3 mb-4">
            From Factory Floors to Pharma Clean Rooms
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Real projects. Real industries. Real Chennai facilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant border border-border transition-base hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-105 transition-base duration-500"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] md:text-xs font-extrabold px-2.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-primary text-base md:text-lg mb-1 leading-tight">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">{p.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
