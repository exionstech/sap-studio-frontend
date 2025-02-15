
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
    <div className="w-full max-w-screen-2xl relative mx-auto">
      {/* Left smoke effect
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-72 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      
      {/* Right smoke effect */}
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-72 z-10" />
      
      <div className="mx-auto w-full">
        <div className="group mt-1 md:mt-4 flex gap-6 overflow-hidden py-2 md:py-4 bg-green1">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row items-center gap-6"
              >
                {logos.map((logo) => (
                  <div key={logo.name} className="flex items-center gap-6 select-none pointer-events-none">
                    
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