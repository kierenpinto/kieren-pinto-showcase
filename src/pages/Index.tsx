import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
