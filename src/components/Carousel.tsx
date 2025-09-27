'use client';
import { useState } from 'react';
import MediaContainer from './MediaContainer';
import CarouselContent from './CarouselContent';
import VideoPlayerContent from './VideoPlayerContent';
import VirtualWalkthrough from './VirtualWalkthrough';

interface CarouselProps {
  className?: string;
  showVideoToggle?: boolean;
}

export default function Carousel({ className = "", showVideoToggle = true }: CarouselProps) {
  const [currentMediaType, setCurrentMediaType] = useState<'carousel' | 'video' | 'virtual'>('carousel');

  const handleMediaTypeChange = (type: 'carousel' | 'video' | 'virtual') => {
    setCurrentMediaType(type);
  };

  const renderMediaContent = () => {
    switch (currentMediaType) {
      case 'carousel':
        return <CarouselContent />;
      case 'video':
        return <VideoPlayerContent />;
      case 'virtual':
        return <VirtualWalkthrough />;
      default:
        return <CarouselContent />;
    }
  };

  return (
    <MediaContainer 
      className={className}
      showMediaToggle={showVideoToggle}
      defaultMediaType="carousel"
      onMediaTypeChange={handleMediaTypeChange}
    >
      {renderMediaContent()}
    </MediaContainer>
  );
}
