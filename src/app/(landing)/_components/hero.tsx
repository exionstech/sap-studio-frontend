import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const LandingHero = () => {
  return (
    <div className="w-full max-w-screen-2xl 2xl:min-h-[70vh] 2x:items-center 2xl:justify-center mx-auto px-5 md:px-14 flex md:flex-row flex-col gap-5 pt-10">
      <div className="w-full lg:w-[50%] md:w-[60%] flex flex-col gap-10 mt-10 2xl:mt-24">
        <h1 className="font-larken-demo text-5xl lg:text-6xl select-none pointer-events-none">Decode Nature&apos;s <br /> Secret <span className="text-green3">Symphony</span></h1>
        <div className="flex flex-col gap-5 border-l-[2px] border-green4 pl-3">
          <p className="w-[90%] select-none pointer-events-none">Nature has always been singing—we just weren&apos;t listening. At Sap Symphony, we transform plant signals into mesmerizing soundscapes, unveiling the unseen rhythm of life. Step into a world where leaves whisper, roots hum, and the earth composes its own melody. </p>
          <Button className="w-fit">Learn More</Button>
        </div>
      </div>
      <div className="w-full lg:w-[50%] md:w-[40%] flex items-end md:pt-[3.5rem] justify-end">
          <Image
            src="/landing/hero/hero.png"
            alt="hero"
            width={500}
            height={500}
            className="shrink-0 object-cover 2xl:hidden"
          />
          <Image
            src="/landing/hero/hero.png"
            alt="hero"
            width={600}
            height={600}
            className="shrink-0 object-cover 2xl:flex hidden"
          />
      </div>
    </div>
  );
};

export default LandingHero;
