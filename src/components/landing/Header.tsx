import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ucsLogo from "@/assets/ucs-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-base ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/85 backdrop-blur-sm"
      }`}
    >
      <div className="container-ucs flex h-16 md:h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Ultimate Construction Solution Home">
          <img src={ucsLogo} alt="Ultimate Construction Solution" className="h-10 md:h-14 w-auto object-contain" />
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:+919710403526"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-base"
          >
            <Phone className="h-4 w-4" />
            +91 97104 03526
          </a>
          <Button variant="whatsapp" size="sm" asChild className="hidden md:inline-flex">
            <a href="https://wa.me/919710403526" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <Button variant="cta" size="sm" asChild className="hidden md:inline-flex">
            <a href="#contact">Get Free Quote</a>
          </Button>
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="container-ucs py-4 flex flex-col gap-3">
            <a href="tel:+919710403526" className="inline-flex items-center gap-2 text-base font-bold text-primary py-2">
              <Phone className="h-4 w-4" /> +91 97104 03526
            </a>
            <Button variant="whatsapp" asChild>
              <a href="https://wa.me/919710403526" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <Button variant="cta" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
