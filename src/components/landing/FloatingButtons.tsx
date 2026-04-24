import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const phone = "+919876543210";
  const wa = "https://wa.me/919876543210?text=Hi%20UCS%2C%20I%20need%20a%20quote%20for%20industrial%20flooring.";

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Expert on WhatsApp"
        className="group inline-flex items-center gap-2 bg-[hsl(142_71%_45%)] text-white pl-4 pr-5 h-14 rounded-full shadow-elegant animate-float-pulse hover:scale-105 transition-base"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-bold text-sm hidden sm:inline">Chat with Expert</span>
      </a>
      <a
        href={`tel:${phone}`}
        aria-label="Call Now"
        className="group inline-flex items-center gap-2 bg-accent text-accent-foreground pl-4 pr-5 h-14 rounded-full shadow-cta hover:scale-105 transition-base"
      >
        <Phone className="h-6 w-6" />
        <span className="font-bold text-sm hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
