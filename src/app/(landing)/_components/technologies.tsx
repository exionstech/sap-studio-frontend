"use client"
import HeadingText from "@/components/shared/heading-text";
import PlantSignalComponent from "@/components/shared/plant-signal-system";
import React from "react";

const Technologies = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-14 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <HeadingText
          section={"How it works"}
          heading={"From Electrical Signals to Wondrous Music"}
        />
        <p className="text-green3 text-center md:text-start md:w-[70%]">
          Sap SYmphony uses patented sonification technology we built over the
          last decade to turn plants&apos; biorhythms into music. Here&apos;s
          how it works:
        </p>
      </div>
      <div className="w-full">
        <PlantSignalComponent/>
      </div>
    </section>
  );
};

export default Technologies;
