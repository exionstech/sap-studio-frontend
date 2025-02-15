import CustomIcon from "@/components/shared/custom-icon";

const logos = [
    {
      name: "Sustainability Matters",
    },
    {
      name: "Go Green",
    },
    {
      name: "Planet First",
    },
    {
      name: "Eco Impact",
    },
    {
      name: "Think Forward",
    },
    {
      name: "Eco Friendly",
    },
    {
      name: "Green Goals",
    },
    {
      name: "Future Ready",
    },
];

const OverView = () => {
  return (
    <div className="w-full max-w-screen-2xl relative mx-auto mb-10">
      
      <div className="mx-auto w-full">
      {/* Left smoke effect */}
      <div className="absolute left-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-r from-white via-green1/80 to-transparent z-10" />
      
      {/* Right smoke effect */}
      <div className="absolute right-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-l from-white via-green1/80 to-transparent z-10" />
        <div className="group flex gap-6 overflow-hidden py-2 md:py-4 bg-green1">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud items-center gap-6"
              >
                {logos.map((logo) => (
                  <div key={logo.name} className="flex items-center gap-6 select-none pointer-events-none text-green4">
                    <CustomIcon src={"/landing/star.svg"} size={10}/>
                        <span className="text-lg font-medium">{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;