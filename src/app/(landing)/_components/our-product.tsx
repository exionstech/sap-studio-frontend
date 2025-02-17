import HeadingText from "@/components/shared/heading-text";
import VideoSwiper from "@/components/shared/video-swiper";
import React from "react";

const videos = [
  "/landing/video/video1.mp4",
  "/landing/video/video2.mp4",
  "/landing/video/video3.mp4"
];

const OurProduct = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-14 flex flex-col gap-10">
      <HeadingText
        section={"Our Product"}
        heading={"A glimpse of Sap Symphony"}
      />
      <VideoSwiper videos={videos} />
    </section>
  );
};

export default OurProduct;
