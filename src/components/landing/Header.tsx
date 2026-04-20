import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/ucs-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#solutions", label: "Solutions" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-base ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-ucs flex h-16 md:h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="UCS Home">
          <img src={logo} alt="Ultimate Construction Solutions UCS logo" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-base"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            <Phone className="h-4 w-4" />
            +91 98765 43210
          </a>
          <Button variant="cta" size="sm" asChild className="hidden md:inline-flex">
            <a href="#contact">Free Inspection</a>
          </Button>
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-ucs py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-foreground py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="cta" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Inspection</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
