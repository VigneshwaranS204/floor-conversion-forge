import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, AlertTriangle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroImg from "@/assets/hero-warehouse.jpg";
import factoryImg from "@/assets/project-factory.jpg";
import pharmaImg from "@/assets/project-pharma.jpg";

type Slide = {
  bg: string;
  eyebrow: string;
  headline: React.ReactNode;
  sub: string;
  stats: { value: string; label: string }[];
};

const slides: Slide[] = [
  {
    bg: heroImg,
    eyebrow: "Chennai's Industrial Flooring Specialist",
    headline: (
      <>
        STOP LOSING PRODUCTION TIME TO{" "}
        <span className="text-gradient-accent">FAILING FLOORS</span>
      </>
    ),
    sub: "Certified Epoxy & PU flooring systems for factories, warehouses, pharma & food plants. 20+ years. 100% in-house team. Never subcontracted.",
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "5,000+", label: "Projects Done" },
      { value: "100%", label: "In-House Team" },
    ],
  },
  {
    bg: pharmaImg,
    eyebrow: "GMP · FSSAI · Pharma Grade Certified",
    headline: (
      <>
        FLOORS BUILT FOR PHARMA, FOOD &{" "}
        <span className="text-gradient-accent">CLEAN ROOM</span> STANDARDS
      </>
    ),
    sub: "Seamless PU mortar flooring that passes GMP audits, survives steam cleaning, and eliminates microbial harbourage. Installed by certified applicators.",
    stats: [
      { value: "Pharma", label: "GMP Compliant" },
      { value: "Food", label: "FSSAI Grade" },
      { value: "R11", label: "Slip Resistance" },
    ],
  },
  {
    bg: factoryImg,
    eyebrow: "Heavy Industrial · Forklift Rated · Chennai",
    headline: (
      <>
        HEAVY DUTY EPOXY FLOORS FOR{" "}
        <span className="text-gradient-accent">FACTORIES & WAREHOUSES</span>
      </>
    ),
    sub: "High-strength epoxy systems engineered for forklift traffic, chemical spills, and machine shop loads.",
    stats: [
      { value: "72hr", label: "Return to Service" },
      { value: "6mm", label: "System Thickness" },
      { value: "Zero", label: "Subcontracting" },
    ],
  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const active = slides[idx];
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section className="relative pt-16 md:pt-20 overflow-hidden bg-primary-dark">
      {/* Rotating background images */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.bg}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
      </div>

      <div className="container-ucs py-10 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Left — rotating content */}
          <div className="lg:col-span-3 text-white">
            <div key={idx} className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur border border-accent/40 px-4 py-1.5 rounded-full text-xs font-bold mb-5 text-white">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                {active.eyebrow}
              </div>

              <h1 className="heading-xl mb-4">{active.headline}</h1>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl leading-relaxed">
                {active.sub}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-xl mb-6">
                {active.stats.map((st) => (
                  <div
                    key={st.label}
                    className="bg-white/10 backdrop-blur border border-white/15 rounded-xl p-3 md:p-4 text-center"
                  >
                    <div className="font-extrabold text-lg md:text-2xl text-accent">{st.value}</div>
                    <div className="text-[10px] md:text-xs font-semibold text-white/80 uppercase tracking-wide mt-1">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-base"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === idx ? "w-8 bg-accent" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next slide"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-base"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
                <a href="#contact">Book Free Site Assessment →</a>
              </Button>
              <Button variant="outlineLight" size="xl" asChild className="w-full sm:w-auto">
                <a href="tel:+919710403526" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Fixed form */}
          <div className="lg:col-span-2 animate-fade-slide" id="contact">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs md:text-sm font-bold mb-3 shadow-cta">
              <AlertTriangle className="h-4 w-4" />
              Free site visits available this week in Chennai
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
