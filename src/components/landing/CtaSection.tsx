import { Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent)),transparent_50%)]" />
      <div className="container-ucs relative text-center text-white">
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur border border-accent/40 px-4 py-1.5 rounded-full text-xs font-bold mb-5 text-white">
          <Clock className="h-3.5 w-3.5" />
          RESPONSE IN 2 HOURS
        </div>
        <h2 className="heading-lg mb-4 max-w-3xl mx-auto">
          Ready to Fix Your Industrial Floor?
        </h2>
        <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8">
          Free site visit · Expert recommendation · No-obligation quote
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Button variant="cta" size="xl" asChild>
            <a href="tel:+919710403526" className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call +91 97104 03526
            </a>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href="https://wa.me/919710403526"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us Now
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80 max-w-3xl mx-auto">
          {[
            "20+ years experience",
            "5,000+ projects",
            "100% in-house team",
            "Free site assessment",
            "Written warranty",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
