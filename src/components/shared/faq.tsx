import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import HeadingText from "./heading-text";

interface FaqSectionProps {
  className?: string;
}

const accordionItems = [
        {
          title: "How long does the consulting process take?",
          content: "Audits take 2-4 weeks, with timelines tailored to your project.",
        },
        {
          title: "Sustainability Reporting & Communication",
          content: "We use eco-friendly tech and share reports on sustainability efforts.",
        },
        {
          title: "What industries do you work with?",
          content: "We work with gardens, wellness centers, art spaces, research, and eco-tech companies.",
        },
        {
          title: "What makes SapSymphony different?",
          content: "We create music from plant signals, blending nature, tech, and art.",
        },
      ];
      

const FaqSection = ({ className }: FaqSectionProps) => {
  return (
    <section
      className={cn(
        "w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex flex-col gap-10 items-center",
        className
      )}
    >
      <HeadingText section="FAQ" heading="Your Questions, Answered" />
      <div className="w-full max-w-screen-xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#f2f2f2] data-[state=open]:bg-green2 rounded-lg transition-colors duration-200"
            >
              <AccordionTrigger className="px-4">
                <span className="text-green4 font-medium">{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
