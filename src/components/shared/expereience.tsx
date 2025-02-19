import HeadingText from "@/components/shared/heading-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExperienceNowProps {
  className?: string;
}

const ExperienceNow = (
  { className }: ExperienceNowProps
) => {
  return (
    <section className={cn("w-full max-w-screen-2xl mx-auto px-5 md:px-14", className)}>
      <div className="flex md:flex-row flex-col-reverse gap-6 md:justify-between rounded-xl bg-green6 lg:aspect-[3/1] md:aspect-[5/2] overflow-hidden relative">
        <div className="w-full md:w-[55%] p-16 flex items-start flex-col gap-5">
          <HeadingText
            section={"EXPERIENCE NOW"}
            heading={"Ready to Experience Plant Music?"}
            headingClass="text-white text-start"
            sectionClass="text-white"
            leftlineClass="bg-white"
            rightlineClass="bg-white"
            
          />
          <Link
            href={process.env.NEXT_PUBLIC_PRODUCT_DETAILS_LINK as string}
            target="_blank"
            className="text-grren4 font-medium bg-white rounded-md py-2 px-6 flex w-fit items-center"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-[40%] md:flex justify-end hidden">
          <Image
            src="/landing/experience/mask.png"
            alt="experience-now"
            width={600}
            height={600}
            className="shrink-0 object-cover select-none pointer-events-none"
          />
        </div>
        <div className="w-full flex justify-end md:hidden absolute top-0 ring-0">
          <Image
            src="/landing/experience/mask.png"
            alt="experience-now"
            width={600}
            height={600}
            className="shrink-0 object-cover select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceNow;
