import { cn } from "@/lib/utils";

interface HeadingTextProps {
  section: string;
  heading: string;
  sectionClass?: string;
  headingClass?: string;
  leftlineClass?: string;
}

const HeadingText = ({
  section,
  heading,
  sectionClass,
  headingClass,
  leftlineClass,
}: HeadingTextProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-3 items-center justify-center md:justify-start">
        <div className={cn("w-10 h-[2px] bg-green4", leftlineClass)} />
        <span className={cn(sectionClass)}>{section}</span>
        <div className="w-10 h-[2px] bg-green4 md:hidden" />
      </div>
      <h1 className={cn("font-larken-demo font-medium text-4xl text-center md:text-start", headingClass)}>
        {heading}
      </h1>
    </div>
  );
};

export default HeadingText;
