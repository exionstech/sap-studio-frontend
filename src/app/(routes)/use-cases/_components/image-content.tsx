import { cn } from "@/lib/utils";
import Image from "next/image";

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
  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row gap-10 md:aspect-[3/1] lg:aspect-[4/1]",
        className
      )}
    >
      <div className="w-full md:w-[35%] overflow-hidden flex items-center justify-center rounded-lg">
        <Image
          src={imgSrc}
          alt={heading}
          width={600}
          height={600}
          className="object-cover shrink-0 select-none pointer-events-none"
        />
      </div>
      <div className="w-full bg-white md:w-[65%] flex flex-col gap-5 p-5 justify-center rounded-lg">
        <h2 className="text-3xl text-center md:text-start font-medium font-larken-demo text-green4 select-none pointer-events-none">
          {heading}
        </h2>
        <p className="text-center md:text-start text-gray1 select-none pointer-events-none">{desc}</p>
      </div>
    </div>
  );
};

export default ImageContent;
