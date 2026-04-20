import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ucs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground pt-14 pb-6">
      <div className="container-ucs grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="bg-primary-foreground inline-block p-2 rounded-md mb-4">
            <img src={logo} alt="UCS — Ultimate Construction Solutions" className="h-12 w-auto" />
          </div>
          <p className="text-primary-foreground/75 max-w-md leading-relaxed">
            Ultimate Construction Solutions (UCS) — Chennai's trusted contractor for industrial epoxy, polyurethane (PU) and protective floor coatings. Built for factories, warehouses & commercial spaces.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-accent">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>Industrial Epoxy Flooring</li>
            <li>Polyurethane (PU) Flooring</li>
            <li>Industrial Floor Coatings</li>
            <li>Warehouse Flooring</li>
            <li>Factory Floor Coating</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent" />
              <a href="tel:+919876543210" className="hover:text-accent transition-base">+91 98765 43210</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent" />
              <a href="mailto:info@ucsflooring.com" className="hover:text-accent transition-base">info@ucsflooring.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent" />
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-ucs mt-10 pt-6 border-t border-primary-foreground/15 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Ultimate Construction Solutions. All rights reserved.</p>
        <p>Industrial Flooring Contractor • Chennai • Tamil Nadu</p>
      </div>
    </footer>
  );
};

export default Footer;
