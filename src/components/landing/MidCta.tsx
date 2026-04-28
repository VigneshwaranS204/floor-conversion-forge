import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MidCta = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent)),transparent_55%)]" />
      <div className="container-ucs relative text-center text-white">
        <h2 className="heading-lg mb-3">
          Not Sure Which System Fits Your Facility?
        </h2>
        <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8">
          Our floor engineer assesses your site free — no obligation, no pushy sales call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button variant="outlineLight" size="xl" asChild>
            <a href="tel:+919710403526" className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" /> +91 97104 03526
            </a>
          </Button>
          <Button variant="cta" size="xl" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              Book Free Site Visit <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MidCta;
