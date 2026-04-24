import { Phone, ShieldCheck, Award, Building2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroImg from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Industrial warehouse with seamless epoxy flooring in Chennai"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container-ucs py-12 md:py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur border border-accent/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              CHENNAI'S TRUSTED INDUSTRIAL FLOORING APPLICATORS
            </div>

            <h1 className="heading-xl mb-4">
              Transform Your Industrial Space with{" "}
              <span className="text-gradient-accent">High-Performance</span>{" "}
              Epoxy Flooring
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-2xl leading-relaxed">
              Engineered Industrial <strong>Epoxy</strong>, <strong>PU</strong> & <strong>Floor Coating</strong> Solutions for Factories, Warehouses & Manufacturing Units in Chennai.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button variant="cta" size="xl" asChild>
                <a href="#contact">Schedule Free Inspection</a>
              </Button>
              <Button variant="outlineLight" size="xl" asChild>
                <a href="tel:+919876543210" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>

            {/* Urgency strip */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-bold mb-7 shadow-accent">
              <AlertTriangle className="h-4 w-4" />
              Limited Slots Available for Site Inspection This Week
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 max-w-xl">
              {[
                { icon: Award, label: "20+ Years", sub: "Experience" },
                { icon: Building2, label: "5000+", sub: "Projects" },
                { icon: ShieldCheck, label: "Trusted", sub: "Applicators" },
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
