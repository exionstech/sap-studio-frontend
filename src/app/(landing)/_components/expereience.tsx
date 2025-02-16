import HeadingText from "@/components/shared/heading-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceNow = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14">
      <div className="flex md:flex-row flex-col-reverse gap-6 md:justify-between rounded-xl bg-green2 lg:aspect-[3/1] md:aspect-[5/2] overflow-hidden relative">
        <div className="w-full md:w-[55%] p-16 flex items-center justify-center flex-col gap-5">
          <HeadingText
            section={"EXPERIENCE NOW"}
            heading={"Ready to Experience Plant Music?"}
          />
          <Link
            href={"/"}
            className="text-white font-medium bg-green4 rounded-md py-2 px-6 flex w-fit items-center"
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
            className="shrink-0 object-cover"
          />
        </div>
        <div className="w-full flex justify-end md:hidden absolute top-0 ring-0">
          <Image
            src="/landing/experience/mask.png"
            alt="experience-now"
            width={600}
            height={600}
            className="shrink-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceNow;
