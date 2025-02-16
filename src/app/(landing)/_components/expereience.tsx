import HeadingText from "@/components/shared/heading-text";
import Link from "next/link";
import React from "react";

const ExperienceNow = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14">
      <div className="flex md:flex-row flex-col gap-6 rounded-xl bg-green2 aspect-[3/1] overflow-hidden">
        <div className="w-full md:w-[60%] flex items-center gap-5">
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
        <div className="w-full md:w-[40%]"></div>
      </div>
    </section>
  );
};

export default ExperienceNow;
