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
        aria-label="Chat with us on WhatsApp"
        className="bg-[hsl(142_71%_45%)] text-white h-14 w-14 rounded-full inline-flex items-center justify-center shadow-elegant animate-float-pulse hover:scale-110 transition-base"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${phone}`}
        aria-label="Call UCS now"
        className="bg-accent text-accent-foreground h-14 w-14 rounded-full inline-flex items-center justify-center shadow-cta hover:scale-110 transition-base"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
