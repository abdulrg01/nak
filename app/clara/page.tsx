// import AboutHer from "@/components/clara/AboutHer";
import AboutSection from "@/components/clara/AboutSection";
import ContactSection from "@/components/clara/ContactSection";
import Footer from "@/components/clara/Footer";
import Gallary from "@/components/clara/Gallary";
import HomeHero from "@/components/clara/Hero";
import BiographySection from "../../components/clara/BiographySection";


export default function page() {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      {/* <AboutHer /> */}
      <BiographySection />
      <Gallary />
      <ContactSection />
      <Footer />
    </div>
  );
}
