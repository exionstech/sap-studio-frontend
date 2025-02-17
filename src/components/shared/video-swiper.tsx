"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import VideoPlayer from './video-player';

interface VideoSwiperProps {
  videos: string[];
  className?: string;
}

const VideoSwiper = ({ videos, className }: VideoSwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to get actual display index
  const getDisplayedVideos = () => {
    // Create a circular array of indices
    const indices = [];
    for (let i = -1; i <= videos.length; i++) {
      indices.push((i + videos.length) % videos.length);
    }
    return indices.map(index => videos[index]);
  };

  const displayedVideos = getDisplayedVideos();

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    // Adjust index for circular effect
    if (currentIndex >= videos.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(videos.length - 1);
    }
  }, [currentIndex, videos.length]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  // Touch handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Calculate the transform with circular logic
  const calculateTransform = () => {
    const baseIndex = currentIndex + 1; // Add 1 because we have a clone at the start
    return `translateX(calc(-${baseIndex * 100}% - ${baseIndex * 8}px))`;
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative group touch-pan-y", className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative overflow-hidden rounded-xl px-4">
        <div 
          className="flex transition-transform duration-500 ease-out -mx-4"
          style={{ 
            transform: calculateTransform(),
            gap: '8px',
            transition: isTransitioning ? 'transform 500ms ease-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayedVideos.map((video, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0"
            >
              <VideoPlayer src={video} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-8 w-8 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 opacity-70 hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6 text-green4" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-8 w-8 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 opacity-70 hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-green4" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              (currentIndex + videos.length) % videos.length === index
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSwiper;