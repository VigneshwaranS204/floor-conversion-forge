import { Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent)),transparent_50%)]" />
      <div className="container-ucs relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur border border-accent/40 px-4 py-1.5 rounded-full text-xs font-bold mb-5">
              <Clock className="h-3.5 w-3.5" />
              LIMITED SLOTS THIS MONTH
            </div>
            <h2 className="heading-lg mb-4">
              Get Your <span className="text-gradient-accent">Free Site Inspection</span> Today
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-6 max-w-lg">
              Talk to a UCS flooring expert. We'll inspect your site, suggest the right system and share a transparent quote — at no cost.
            </p>

            <ul className="space-y-2.5 mb-7 text-primary-foreground/90">
              {["Free site visit anywhere in Chennai", "No-obligation quote within 24 hours", "Industrial-grade materials only"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {t}
                </li>
              ))}
            </ul>

            <Button variant="cta" size="xl" asChild>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call +91 98765 43210
              </a>
            </Button>
          </div>

          <LeadForm
            variant="compact"
            title="Request Callback"
            subtitle="Quick form. We call you in 30 minutes."
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
