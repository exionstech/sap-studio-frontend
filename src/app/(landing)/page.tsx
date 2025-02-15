import { MaxWrapper } from "@/components/shared/max-wrapper";
import React from "react";
import LandingHero from "../(landing)/_components/hero";
import OverView from "./_components/overview";

const LandingPage = () => {
  return (
    <MaxWrapper className="flex flex-col gap-10 mt-[6rem] md:mt-[5rem]">
      <LandingHero />
      <OverView/>
    </MaxWrapper>
  );
};

export default LandingPage;
