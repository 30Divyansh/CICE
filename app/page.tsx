import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FAQSection } from "@/components/layout/sections/faq";

import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";

import { ServicesSection } from "@/components/layout/sections/services";
// import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import Gallery from "@/components/layout/sections/gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
     
      <BenefitsSection />
      
      <Gallery />
    
      <ServicesSection />
      <TeamSection />
      {/* <TestimonialSection /> */}
  
      
      <FAQSection />
      {/* <SponsorsSection /> */}
      <FooterSection />
    </>
  );
}
