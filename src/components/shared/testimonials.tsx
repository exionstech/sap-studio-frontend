"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { testimonials } from "@/constants/testimonials";
import HeadingText from "./heading-text";

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(3, 5);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name }) => (
              <div
                className="p-5 bg-green5 rounded-md max-w-sm w-full"
                key={name}
              >
                <div className="text-white/80 tracking-wide text-[14px] select-none pointer-events-none">
                  {text}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full select-none pointer-events-none"
                  />
                  <div className="flex flex-col">
                    <div className="text-white/80 tracking-tight leading-5 nunito select-none pointer-events-none">
                      {name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="w-full bg-green6">
      <div
        id="testimonials"
        className="w-full max-w-screen-2xl h-auto px-5 md:px-14 flex items-center flex-col mx-auto gap-10 py-10"
      >
        <HeadingText section={"Success Stories"} heading={"Trusted by Industry Leaders"} sectionClass="text-white" headingClass="text-white" leftlineClass="bg-white"/>
        <div className="flex justify-center my-5 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
