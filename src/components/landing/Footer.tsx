const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/90 py-10">
      <div className="container-ucs text-center space-y-3">
        <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
          ULTIMATE CONSTRUCTION SOLUTIONS
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
