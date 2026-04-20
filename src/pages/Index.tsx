import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Solutions from "@/components/landing/Solutions";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Projects from "@/components/landing/Projects";
import Process from "@/components/landing/Process";
import CtaSection from "@/components/landing/CtaSection";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import FloatingButtons from "@/components/landing/FloatingButtons";
import PopupForm from "@/components/landing/PopupForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <CtaSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
      <PopupForm />
    </div>
  );
};

export default Index;
