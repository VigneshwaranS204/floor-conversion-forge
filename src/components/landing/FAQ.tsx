import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What factors affect epoxy flooring cost?",
    a: "Area size, thickness, condition of surface, and type of usage are the key factors that determine the final cost of epoxy flooring.",
  },
  {
    q: "Is epoxy suitable for heavy industrial use?",
    a: "Yes, epoxy flooring is designed for heavy-duty industrial environments and can withstand high loads, machinery movement, and chemical exposure.",
  },
  {
    q: "When should I choose PU over epoxy?",
    a: "PU is recommended for temperature-sensitive industries like food and pharma, where thermal shock resistance and flexibility are critical.",
  },
  {
    q: "How long does installation take?",
    a: "Typically between 2–5 days depending on project size, system type, and curing requirements.",
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
