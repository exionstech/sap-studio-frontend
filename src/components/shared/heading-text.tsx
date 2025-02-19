import { cn } from "@/lib/utils";

interface HeadingTextProps {
  section: string;
  heading: string;
  sectionClass?: string;
  headingClass?: string;
  leftlineClass?: string;
  rightlineClass?: string;
}

const HeadingText = ({
  section,
  heading,
  sectionClass,
  headingClass,
  leftlineClass,
  rightlineClass
}: HeadingTextProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-3 items-center justify-center md:justify-start">
        <div className={cn("w-10 h-[2px] bg-green4", leftlineClass)} />
        <span className={cn("select-none pointer-events-none",sectionClass)}>{section}</span>
        <div className={cn("w-10 h-[2px] bg-green4 md:hidden", rightlineClass)} />
      </div>
      <h1 className={cn("font-larken-demo font-medium text-4xl text-center md:text-start select-none pointer-events-none", headingClass)}>
        {heading}
      </h1>
    </div>
  );
};

export default HeadingText;
