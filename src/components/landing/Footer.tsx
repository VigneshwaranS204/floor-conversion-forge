import ucsLogo from "@/assets/ucs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/90 py-10">
      <div className="container-ucs text-center space-y-3">
        <div className="flex justify-center">
          <img src={ucsLogo} alt="Ultimate Construction Solution" className="h-16 md:h-20 w-auto object-contain bg-white/95 rounded-lg px-4 py-2" />
        </div>
        <p className="text-sm text-white/70">
          Industrial Epoxy & PU Flooring · Chennai, Tamil Nadu · Est. 2003
        </p>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} UCS Flooring. All rights reserved. · Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
