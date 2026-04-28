import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is your flooring GMP and FSSAI compliant?",
    a: "Yes. Our PU mortar systems are designed for pharmaceutical GMP and food-grade environments — seamless, coved, non-porous finishes that pass regulatory audits. We provide compliance documentation on request.",
  },
  {
    q: "Do you subcontract the application work?",
    a: "Never. Our 100% in-house trained team handles every project from site prep to final handover. This is the only way we can guarantee consistent quality and application standards.",
  },
  {
    q: "How long before we can use the floor after installation?",
    a: "Light foot traffic in 24 hours. Full operational load — forklifts, heavy machinery — in 3–7 days depending on the system. We give exact timelines before work begins so you can plan your operations.",
  },
  {
    q: "What is the difference between epoxy and PU flooring?",
    a: "Epoxy excels at chemical resistance and heavy mechanical loads. PU is superior for thermal cycling, hygiene-critical environments, and where floor flexibility is needed under temperature change. We'll advise the right system after a free site assessment.",
  },
  {
    q: "How long does installation take for a 10,000 sq ft facility?",
    a: "Typically 3–5 working days including surface prep and curing. We can phase work by zones to avoid halting operations — this is standard practice for our factory and warehouse projects.",
  },
  {
    q: "What minimum project size do you work on?",
    a: "We work on projects from 500 sq ft to 200,000+ sq ft. Whether it's a single clean room or an entire manufacturing plant — we size our team and schedule to suit your project.",
  },
  {
    q: "Do you provide a warranty on the flooring?",
    a: "Yes. All projects come with a written post-installation warranty covering material and application defects. Duration varies by system — typically 2–5 years. Annual maintenance plans are also available.",
  },
  {
    q: "Which floor system is right for my facility?",
    a: "It depends on your load type, chemical exposure, hygiene requirements and budget. The fastest way to find out: book a free site assessment. Our engineer visits, surveys the existing floor, and recommends the optimal system — no charge, no commitment.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-ucs max-w-3xl">
        <div className="text-center mb-10 md:mb-12">
          <span className="eyebrow">Common Questions</span>
          <h2 className="heading-lg text-primary mt-3 mb-3">Answers Before You Call.</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-5 md:px-6 shadow-card"
            >
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline py-5 text-base md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
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
