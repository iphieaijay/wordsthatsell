import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkWithMeSection from "@/components/WorkWithMeSection";
import SocialsSection from "@/components/SocialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkWithMeSection />
      <AboutSection />
      <SocialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
