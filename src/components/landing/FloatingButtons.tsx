import { MessageCircle, Phone } from "lucide-react";

const WA_URL = "https://wa.me/919710403526?text=Hi%20UCS%2C%20I%20need%20a%20quote%20for%20industrial%20flooring.";
const PHONE = "+919710403526";

const FloatingButtons = () => {
  return (
    <>
      {/* Desktop / tablet: floating WhatsApp bottom-right */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center justify-center h-14 w-14 rounded-full bg-[hsl(142_71%_42%)] text-white shadow-elegant animate-float-pulse hover:scale-110 transition-base"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Mobile bottom bar — screens below 900px */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] grid grid-cols-2">
        <a
          href={`tel:${PHONE}`}
          aria-label="Call Now"
          className="flex items-center justify-center gap-2 h-14 bg-primary text-white font-bold text-sm active:bg-primary-dark"
        >
          <Phone className="h-5 w-5" /> Call Now
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center justify-center gap-2 h-14 bg-[hsl(142_71%_42%)] text-white font-bold text-sm active:bg-[hsl(142_71%_36%)]"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
