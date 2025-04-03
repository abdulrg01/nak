import AboutSection from "@/components/clara/AboutSection";
import BiographySection from "@/components/clara/BiographySection";
// import Clara from "@/components/clara/Clara";
import ContactSection from "@/components/clara/ContactSection";
import Gallary from "@/components/clara/Gallary";
import HomeHero from "@/components/clara/Hero";
import InitiativesSection from "@/components/clara/InitiativesSection";
import React from "react";

export default function page() {
  return (
    <div>
      <HomeHero />
      {/* <Clara /> */}
      <AboutSection />
      <BiographySection />
      <Gallary />
      <InitiativesSection />
      <ContactSection />
    </div>
  );
}
