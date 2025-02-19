"use client"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const LandingHero = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-screen-2xl 2xl:aspect-[5/2] 2x:items-center 2xl:justify-center mx-auto px-5 md:px-14 flex md:flex-row flex-col gap-5 pt-10">
      <div className="w-full lg:w-[50%] md:w-[60%] flex flex-col gap-10 md:mt-10 2xl:mt-24">
        <h1 className="font-larken-demo text-5xl lg:text-6xl select-none pointer-events-none">
          Decode Nature&apos;s <br /> Secret <span className="text-green3">Symphony</span>
        </h1>
        <div className="flex flex-col gap-5 border-l-[2px] border-green4 pl-3">
          <p className="w-[90%] select-none pointer-events-none">
            Nature has always been singing—we just weren&apos;t listening. At Sap Symphony, we transform plant signals into mesmerizing soundscapes, unveiling the unseen rhythm of life. Step into a world where leaves whisper, roots hum, and the earth composes its own melody.
          </p>
          <Button className="w-fit">Learn More</Button>
        </div>
      </div>
      <div className="w-full lg:w-[50%] md:w-[40%] flex items-end md:pt-[3.5rem] justify-end">
        {showSkeleton ? (
          <>
            <div className="2xl:hidden">
              <Skeleton className="w-[400px] h-[400px] rounded-md animate-pulse bg-green1/20" />
            </div>
            <div className="hidden 2xl:block">
              <Skeleton className="w-[500px] h-[500px] rounded-md animate-pulse bg-green1/20" />
            </div>
          </>
        ) : (
          <>
            <Image
              src="/landing/hero/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="shrink-0 object-cover 2xl:hidden"
              priority
            />
            <Image
              src="/landing/hero/hero.png"
              alt="hero"
              width={600}
              height={600}
              className="shrink-0 object-cover hidden 2xl:flex"
              priority
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LandingHero;