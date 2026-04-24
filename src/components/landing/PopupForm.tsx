import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

const STORAGE_KEY = "ucs_popup_seen";

const PopupForm = () => {
  const [open, setOpen] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const trigger = () => {
      if (triggered.current) return;
      triggered.current = true;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    const timer = window.setTimeout(trigger, 5000);

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Get Expert Flooring Recommendation for Your Industry</DialogTitle>
          <DialogDescription>Speak with our team and get the right flooring solution for your requirement.</DialogDescription>
        </DialogHeader>
        <div className="bg-gradient-primary p-5 text-primary-foreground">
          <div className="text-xs font-bold uppercase tracking-wider text-accent">Free Consultation</div>
          <h3 className="text-xl font-extrabold mt-1">Get Expert Flooring Recommendation for Your Industry</h3>
          <p className="text-sm text-primary-foreground/80 mt-1">
            Speak with our team and get the right flooring solution for your requirement.
          </p>
        </div>
        <div className="p-5">
          <LeadForm
            variant="compact"
            title="Request Free Consultation"
            subtitle="We respond within 30 minutes."
            ctaLabel="Get Free Consultation"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
