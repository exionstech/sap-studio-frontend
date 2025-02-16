import HeadingText from '@/components/shared/heading-text';
import VideoPlayer from '@/components/shared/video-player';
import React from 'react'

const HowItWorks = () => {
  return (
    <section className='w-full max-w-screen-2xl mx-auto px-4 md:px-14 flex flex-col gap-10'>
        <HeadingText section={'How it works'} heading={'How to use Sap Symphony?'}/>
        <div className="md:px-5 lg:px-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <VideoPlayer src={'/landing/video/video1.mp4'} className='md:aspect-[2/1]'/>
                <VideoPlayer src={'/landing/video/video3.mp4'} className='md:aspect-[2/1]'/>
                <VideoPlayer src={'/landing/video/video2.mp4'} className='md:aspect-[2/1]'/>
                <VideoPlayer src={'/landing/video/video1.mp4'} className='md:aspect-[2/1]'/>
        </div>
    </section>
  )
}

export default HowItWorks;
