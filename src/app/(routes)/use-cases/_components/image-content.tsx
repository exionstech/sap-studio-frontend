"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageContentProps {
  heading: string;
  desc: string;
  imgSrc: string;
  className?: string;
}

const ImageContent = ({
  heading,
  desc,
  imgSrc,
  className,
}: ImageContentProps) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row gap-10 md:aspect-[3/1] lg:aspect-[4/1]",
        className
      )}
    >
      <div className="w-full md:w-[35%] overflow-hidden flex items-center justify-center rounded-lg">
        {showSkeleton ? (
          <>
            <div className="relative w-full h-full">
              <Skeleton className="w-full h-full animate-pulse bg-green1/30" />
            </div>
          </>
        ) : (
          <>
            <Image
              src={imgSrc}
              alt={heading}
              width={600}
              height={600}
              className="object-cover shrink-0 select-none pointer-events-none"
            />
          </>
        )}
      </div>
      <div className="w-full bg-white md:w-[65%] flex flex-col gap-5 p-5 justify-center rounded-lg">
        <h2 className="text-3xl text-center md:text-start font-medium font-larken-demo text-green4 select-none pointer-events-none">
          {heading}
        </h2>
        <p className="text-center md:text-start text-gray1 select-none pointer-events-none">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ImageContent;
