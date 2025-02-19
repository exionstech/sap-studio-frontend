"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface UsecaseHeroProps {
  className?: string;
}

const UsecaseHero = ({ className }: UsecaseHeroProps) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      className={cn(
        "w-full max-w-screen-2xl mx-auto px-5 flex md:flex-row flex-col md:px-14 md:aspect-[3/1] gap-10 md:justify-between pt-5",
        className
      )}
    >
      <div className="w-full md:w-[60%] flex flex-col md:justify-center md:items-start items-center gap-10">
        <h1 className="text-4xl lg:text-6xl text-green4 font-larken-demo md:text-start text-center select-none pointer-events-none">
          How Can You Use <br />{" "}
          <span className="text-green3">Sap Symphony in</span>
          <br /> Your Life
        </h1>
        <p className="text-green4 md:text-start text-center select-none pointer-events-none">
          Plant music can amplify many of your daily routines and practices.
          Here are just some that our customers reported profound results with.
        </p>
      </div>
      <div className="w-full md:w-[40%] flex items-center justify-center overflow-hidden rounded-lg">
        {showSkeleton ? (
          <>
            <div className="2xl:hidden">
              <Skeleton className="w-[350px] h-[350px] rounded-md animate-pulse bg-green1/20" />
            </div>
            <div className="hidden 2xl:block">
              <Skeleton className="w-[500px] h-[500px] rounded-md animate-pulse bg-green1/20" />
            </div>
          </>
        ) : (
          <>
            <Image
              src="/use-cases/usecase-hero.png"
              alt="usecase-hero"
              width={400}
              height={400}
              className="object-cover shrink-0 select-none pointer-events-none"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default UsecaseHero;
