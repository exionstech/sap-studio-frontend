import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageContentProps {
        heading: string;
        desc: string;
        imgSrc: string;
        className?: string;
}

const ImageContent = (
        { heading, desc, imgSrc, className }: ImageContentProps
) => {
  return (
    <div className={cn("w-full flex flex-col md:flex-row gap-10 md:aspect-[3/1]", className)}>
      <div className="w-full md:w-[35%] overflow-hidden">
        <Image
                src={imgSrc}
                alt={heading}
                width={500}
                height={500}
                className="object-cover shrink-0"
        />
      </div>
      <div className="w-full md:w-[65%] flex flex-col gap-5 p-5 justify-center">
        <h2 className="text-3xl text-center md:text-start font-medium font-larken-demo text-green2">{heading}</h2>
        <p className="text-center md:text-start">{desc}</p>
      </div>
    </div>
  )
}

export default ImageContent;
