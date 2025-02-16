import { MaxWrapper } from "@/components/shared/max-wrapper";
import React from "react";
import LandingHero from "../(landing)/_components/hero";
import OverView from "./_components/overview";
import OurProduct from "./_components/our-product";
import AboutUs from "./_components/about-us";
import HowItWorks from "./_components/how-it-works";
import Technologies from "./_components/technologies";
import { Testimonials } from "@/components/shared/testimonials";
import FaqSection from "@/components/shared/faq";
import ExperienceNow from "./_components/expereience";
import ContactUs from "./_components/contact-us";

const LandingPage = () => {
  return (
    <MaxWrapper className="flex flex-col gap-14 mb-12 mt-[6rem] md:mt-[5rem]">
      <LandingHero />
      <OverView/>
      <OurProduct/>
      <AboutUs/>
      <HowItWorks/>
      <Technologies/>
      <Testimonials/>
      <FaqSection/>
      <ExperienceNow/>
      <ContactUs/>
    </MaxWrapper>
  );
};

export default LandingPage;
