import AboutHer from "@/components/ahma/AboutHer";
import AboutSection from "@/components/ahma/AboutSection";
import ContactSection from "@/components/ahma/ContactSection";
import Footer from "@/components/ahma/Footer";
import Gallary from "@/components/ahma/Gallary";
import HomeHero from "@/components/ahma/Hero";


export default function page() {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <AboutHer />
      <Gallary />
      <ContactSection />
      <Footer />
    </div>
  );
}
