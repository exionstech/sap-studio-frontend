import HeadingText from "@/components/shared/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-green2">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 flex flex-col-reverse md:flex-row gap-10 items-stretch py-7 md:p-14">
        <div className="md:w-[30%] w-full relative rounded-xl overflow-hidden">
          <div className="h-full">
            <Image
              src="/landing/about-us/about.png"
              alt="About Us"
              width={500}
              height={500}
              className="shrink-0 object-cover w-full h-full md:block hidden"
            />
            <Image
              src="/landing/about-us/about.png"
              alt="About Us"
              width={500}
              height={300}
              className="shrink-0 object-cover w-full h-full md:hidden block"
            />
          </div>
        </div>
        <div className="md:w-[70%] w-full p-8 rounded-xl bg-white flex flex-col gap-5">
          <HeadingText section={"About Us"} heading={"Giving Nature a Voice"} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-center md:text-start select-none pointer-events-none">
              <h1 className="text-green4 text-xl font-medium">Our Mission</h1>
              <p className="text-gray1">Our mission is to amplify the connection between humans and the natural world. Through the creation of pioneering generative music and art over the last decade, we've developed technology that allows anyone to tune into nature with plant music.</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-start select-none pointer-events-none">
              <h1 className="text-green4 text-xl font-medium">Our Vision</h1>
              <p className="text-gray1">At Sap Symphony, we bridge the gap between nature and technology, transforming plant signals into a symphony you can hear and feel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;