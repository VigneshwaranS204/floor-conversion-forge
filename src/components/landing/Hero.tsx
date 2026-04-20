import { Phone, ShieldCheck, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroImg from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Industrial warehouse with seamless epoxy flooring in Chennai"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container-ucs py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur border border-accent/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              CHENNAI'S #1 INDUSTRIAL FLOORING CONTRACTOR
            </div>

            <h1 className="heading-xl mb-4">
              Industrial Flooring{" "}
              <span className="text-gradient-accent">Experts</span>{" "}
              in Chennai
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-7 max-w-2xl leading-relaxed">
              Durable <strong>Epoxy</strong>, <strong>PU</strong> & <strong>Floor Coating</strong> solutions built for factories, warehouses & commercial spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button variant="cta" size="xl" asChild>
                <a href="#contact">Get Free Site Inspection</a>
              </Button>
              <Button variant="outlineLight" size="xl" asChild>
                <a href="tel:+919876543210" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 max-w-xl">
              {[
                { icon: Award, label: "10+ Years", sub: "Experience" },
                { icon: Building2, label: "100+", sub: "Projects" },
                { icon: ShieldCheck, label: "Industrial", sub: "Specialists" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-xl p-3 text-center"
                >
                  <b.icon className="h-5 w-5 mx-auto mb-1 text-accent" />
                  <div className="font-extrabold text-sm md:text-base">{b.label}</div>
                  <div className="text-xs text-primary-foreground/70">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-2 animate-slide-in" id="contact">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
