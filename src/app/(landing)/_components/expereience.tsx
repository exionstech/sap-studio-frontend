import HeadingText from "@/components/shared/heading-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceNow = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14">
      <div className="flex md:flex-row flex-col-reverse gap-6 md:justify-between rounded-xl bg-green2 lg:aspect-[3/1] md:aspect-[5/2] overflow-hidden">
        <div className="w-full md:w-[55%] p-10 lg:p-16 flex justify-center flex-col gap-5">
          <HeadingText
            section={"EXPERIENCE NOW"}
            heading={"Ready to Experience Plant Music?"}
          />
          <Link
            href={"/"}
            className="text-white font-medium bg-green4 rounded-md py-2 px-6 md:flex w-fit items-center hidden"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full md:w-[40%] flex justify-end">
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
