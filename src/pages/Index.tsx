import { clientData } from "@/data/businessData";
import SpaHeader from "@/components/SpaHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import SpaFooter from "@/components/SpaFooter";

const Index = () => {
  const data = sampleBusinessData;

  return (
    <div className="min-h-screen bg-background">
      <SpaHeader data={data} />
      <HeroSection data={data} />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection data={data} />
      <ContactSection data={data} />
      <SpaFooter data={data} />
    </div>
  );
};

export default Index;
