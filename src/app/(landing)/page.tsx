import { MaxWrapper } from "@/components/shared/max-wrapper";
import React from "react";
import LandingHero from "../(landing)/_components/hero";

const LandingPage = () => {
  return (
    <MaxWrapper className="flex flex-col gap-10 mt-[6rem] md:mt-[5rem]">
      <LandingHero />
    </MaxWrapper>
  );
};

export default LandingPage;
