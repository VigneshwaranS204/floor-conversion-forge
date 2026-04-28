import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import IndustryStrip from "@/components/landing/IndustryStrip";
import Solutions from "@/components/landing/Solutions";
import Services from "@/components/landing/Services";
import MidCta from "@/components/landing/MidCta";
import WhyUs from "@/components/landing/WhyUs";
import Process from "@/components/landing/Process";
import Projects from "@/components/landing/Projects";
import FAQ from "@/components/landing/FAQ";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import FloatingButtons from "@/components/landing/FloatingButtons";
import PopupForm from "@/components/landing/PopupForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-mobile-bar">
      <Header />
      <main>
        <Hero />
        <IndustryStrip />
        <Solutions />
        <Services />
        <MidCta />
        <WhyUs />
        <Process />
        <Projects />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
      <FloatingButtons />
      <PopupForm />
    </div>
  );
};

export default Index;
