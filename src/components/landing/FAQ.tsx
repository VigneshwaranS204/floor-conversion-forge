import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the cost of epoxy flooring in Chennai?",
    a: "Industrial epoxy flooring in Chennai typically ranges from ₹65 – ₹250 per sq.ft depending on the system (self-leveling, broadcast, mortar), thickness, and surface condition. UCS provides a free site inspection and a transparent quote — no hidden costs.",
  },
  {
    q: "How long does an epoxy or PU floor last?",
    a: "A properly installed epoxy floor lasts 8–15 years and PU systems can last 10–20 years even in heavy industrial environments, when surface preparation and application are done correctly — which is exactly where UCS specializes.",
  },
  {
    q: "Which is better — Epoxy or PU flooring?",
    a: "Epoxy is harder, more chemical resistant and great for warehouses & manufacturing units. PU is more flexible, UV stable and better suited for food, pharma, cold storage and areas with thermal shock. We help you choose the right system for your facility.",
  },
  {
    q: "How long does installation take?",
    a: "Most projects take 3–7 days depending on area, system type, and curing time. We plan around your operations to minimize downtime and can also work in shifts or weekends.",
  },
  {
    q: "Do you serve all areas in Chennai?",
    a: "Yes — UCS serves the entire Chennai region including Ambattur, Sriperumbudur, Oragadam, Maraimalai Nagar, Guindy, OMR, ECR and surrounding industrial zones in Tamil Nadu.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-ucs max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">FAQ</span>
          <h2 className="heading-lg text-primary mt-2 mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything factory & warehouse owners ask before choosing flooring.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
