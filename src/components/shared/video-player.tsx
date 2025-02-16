"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Loader } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
        src: string;
        className?: string;
}

const VideoPlayer = (
        { src, className }: VideoPlayerProps
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Initial loading timer
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    // Using onplay and onpause event listeners instead of addEventListener
    video.onplay = () => {
      setIsPlaying(true);
    };

    video.onpause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.onplay = null;
      video.onpause = null;
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        if (video.ended) {
          video.currentTime = 0;
        }
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error toggling video playback:', error);
      setIsPlaying(false);
    }
  };

  if (isLoading) {
    return (
      <div className={cn("relative w-full md:aspect-[3/1] aspect-[4/3] rounded-xl overflow-hidden", className)}>
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <Loader className="w-10 h-10 text-green3 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full md:aspect-[3/1] aspect-[4/3] rounded-xl overflow-hidden group", className)}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        playsInline
      />
      <button
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          {isPlaying ? (
            <Pause className="w-7 h-7 text-green4" />
          ) : (
            <Play className="w-7 h-7 text-green4 ml-1" />
          )}
        </div>
      </button>
    </div>
  );
};

export default VideoPlayer;