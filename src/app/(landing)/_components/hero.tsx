import { Button } from "@/components/ui/button";
import React from "react";

const LandingHero = () => {
  return (
    <div className="w-full max-w-screen-2xl min-h-screen mx-auto px-5 md:px-14 flex md:flex-row flex-col items-center gap-5">
      <div className="w-full md:w-[50%] flex flex-col gap-10">
        <h1></h1>
        <div className="flex flex-col gap-5 border-l-[2px] pl-3">
          <p></p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
