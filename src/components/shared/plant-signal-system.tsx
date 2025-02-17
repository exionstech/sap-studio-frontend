"use client";

import React, { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ColorPalette {
  green1: string;
  green2: string;
  green3: string;
  green4: string;
}

interface AccordionItem {
  title: string;
  content: string;
  image: string;
}

const GREEN_COLORS: ColorPalette = {
  green1: "#D7E4BE",
  green2: "#C0D19E",
  green3: "#536942",
  green4: "#2C3221",
};

const accordionData: AccordionItem[] = [
        {
          title: "Plant Signal Detection",
          content:
            "SapSymphony detects slight electrical variations in a plant via two electrodes placed on the leaves.",
          image: "/landing/plant-signal/accordian1.png",
        },
        {
          title: "Signals to Sound",
          content:
            "These variations are graphed as a wave, which is translated into pitch messages that determine notes played on musical instruments designed by our team.",
          image: "/landing/plant-signal/accordian2.png",
        },
        {
          title: "Dynamic Plant Music",
          content:
            "Other characteristics of the wave related to a plant's activity level change how those instruments are played, including tempo and effects.",
          image: "/landing/plant-signal/accordian3.png",
        },
        {
          title: "Nature's Melody",
          content:
            "The result is a continuous stream of pleasing music that gives you a sonic window into the secret life of plants.",
          image: "/landing/plant-signal/accordian4.png",
        },
        {
          title: "Real-Time Visualization",
          content:
            "Watch as your plant's biorhythms come to life through our interactive display, showing the direct correlation between plant activity and musical output.",
          image: "/landing/plant-signal/accordian5.png",
        },
      ];

interface PlantSignalComponentProps {
  className?: string;
}

const PlantSignalComponent: React.FC<PlantSignalComponentProps> = ({
  className,
}: PlantSignalComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleAccordionClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row gap-8 w-full mx-auto items-stretch",
        className
      )}
    >
      <div className="w-full lg:w-[65%] flex flex-col gap-4 lg:justify-between">
        {accordionData.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "cursor-pointer transition-all border-none duration-200",
              activeIndex === index && "bg-opacity-10 bg-green1"
            )}
            onClick={() => handleAccordionClick(index)}
          >
            <CardContent className="p-4">
              <div className="flex gap-4 items-center">
                <div className="flex-1 space-y-2">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: GREEN_COLORS.green4 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray1">{item.content}</p>
                </div>
                <div
                  className={cn(
                    "text-center rounded-full p-1 bg-green4 text-white",
                    activeIndex === index && "bg-white text-green4"
                  )}
                >
                  <ArrowDownRight
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      activeIndex === index && "rotate-180"
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full lg:w-[35%] relative rounded-lg overflow-hidden">
        <Image
          src={accordionData[activeIndex].image}
          alt={accordionData[activeIndex].title}
          width={300}
          height={300}
          className="object-cover w-full h-full shrink-0 overflow-hidden select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default PlantSignalComponent;
