import beforeafter from "@/assets/project-beforeafter.jpg";
import factory from "@/assets/project-factory.jpg";
import warehouse from "@/assets/project-warehouse.jpg";
import food from "@/assets/project-food.jpg";
import showroom from "@/assets/project-showroom.jpg";
import workshop from "@/assets/project-workshop.jpg";

const projects = [
  { img: beforeafter, label: "Factory Floor Restoration", tag: "Before / After", span: "md:col-span-2 md:row-span-2" },
  { img: factory, label: "Automotive Manufacturing Plant" },
  { img: warehouse, label: "Logistics Warehouse" },
  { img: food, label: "Food Processing Facility" },
  { img: showroom, label: "Premium Car Showroom" },
  { img: workshop, label: "Mechanical Workshop" },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-ucs">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Our Work</span>
          <h2 className="heading-lg text-primary mt-2 mb-3">Executed Across Industrial Environments</h2>
          <p className="text-muted-foreground text-lg">
            From factory floors to warehouse surfaces, UCS has delivered reliable and long-lasting flooring systems across Chennai.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {projects.map((p) => (
            <div
              key={p.label}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-elegant transition-base ${p.span ?? ""}`}
            >
              <img
                src={p.img}
                alt={p.label}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover group-hover:scale-105 transition-base duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/20 to-transparent opacity-90 group-hover:opacity-100" />
              {p.tag && (
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
              )}
              <div className="absolute bottom-0 inset-x-0 p-4 text-primary-foreground">
                <h3 className="font-bold text-base md:text-lg leading-tight">{p.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
