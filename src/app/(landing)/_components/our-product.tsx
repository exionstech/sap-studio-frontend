import HeadingText from "@/components/shared/heading-text";
// import VideoPlayer from "@/components/shared/video-player";
import React from "react";

const OurProduct = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-14 flex flex-col gap-10">
      <HeadingText
        section={"Our Product"}
        heading={"A glimpse of Sap Symphony"}
      />
      <div className="w-full md:aspect-[3/1] aspect-[4/3] rounded-xl overflow-hidden">
        {/* <VideoPlayer src="/landing/video2.mp4"/> */}
      </div>
    </section>
  );
};

export default OurProduct;
