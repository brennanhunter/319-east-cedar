'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselContentProps {
  className?: string;
}

export default function CarouselContent({ className = "" }: CarouselContentProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState(0);

  // All property photos (all 50 photos)
  const photos = [
    'house1-front.webp',
    'house2-front.webp', 
    'house1-front-angle.webp',
    'back-of-house-1.webp',
    'house1-porch.webp',
    'back-patio.webp',
    'house1-entry.webp',
    'house1-living-room.webp',
    'house1-living-room-2.webp',
    'house1-family-room.webp',
    'house1-family-room-2.webp',
    'house1-fireplace.webp',
    'house1-dining.webp',
    'house1-dining-table.webp',
    'house1-kitchen.webp',
    'house1-kitchen-2.webp',
    'house1-kitchen-3.webp',
    'house1-kitchen-counter.webp',
    'house1-kitchen-entry.webp',
    'house1-bar-area.webp',
    'house1-bed-1.webp',
    'house1-bed-1-side.webp',
    'house1-girl-bed.webp',
    'house1-room3.webp',
    'house1-room3-2.webp',
    'house1-bathroom.webp',
    'house1-bathroom-sinks.webp',
    'house1-bathroom3.webp',
    'house1-girl-shower.webp',
    'house1-second-bathroom-sinks.webp',
    'house1-hall-laundry.webp',
    'house1-laundry.webp',
    'house-1-game-room.webp',
    'house1-back-stairs.webp',
    'house2-living-room.webp',
    'house2-living-room-2.webp',
    'house2-living-room-entry.webp',
    'house2-living-room-kitchen.webp',
    'house2-dining.webp',
    'house2-kitchen.webp',
    'house2-kitchen-wide.webp',
    'house2-stove.webp',
    'house2-bedroom.webp',
    'house2-room2.webp',
    'house2-hall.webp',
    'house2-bathroom.webp',
    'house2-shower.webp',
    'house2-laundry.webp',
    'garage.webp',
    'shed.webp'
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openLightbox = (index: number) => {
    setLightboxPhoto(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxPhoto = () => {
    setLightboxPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevLightboxPhoto = () => {
    setLightboxPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isLightboxOpen]);

  return (
    <>
      {/* Photo Carousel */}
      <div className={className}>
        <div 
          className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gray-100 cursor-pointer group"
          onClick={() => {
            console.log('Photo clicked, opening lightbox');
            openLightbox(currentPhoto);
          }}
        >
          <Image
            src={`/photos/${photos[currentPhoto]}`}
            alt="Property Photo"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105 pointer-events-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* Click to expand hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              Click to expand
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Photo Counter */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {currentPhoto + 1} / {photos.length}
          </div>
        </div>

        {/* Photo Dots Indicator */}
        <div className="flex justify-center space-x-1">
          {photos.slice(0, 8).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPhoto ? 'bg-money-green' : 'bg-gray-300'
              }`}
            />
          ))}
          {photos.length > 8 && (
            <span className="text-gray-400 text-xs">+{photos.length - 8}</span>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeLightbox}
          />
          
          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={`/photos/${photos[lightboxPhoto]}`}
                alt="Property Photo"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Navigation */}
            <button
              onClick={prevLightboxPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextLightboxPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Info */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">319 E Cedar Dr - {lightboxPhoto + 1} of {photos.length}</p>
              <p className="text-xs text-gray-300">{photos[lightboxPhoto].replace('.webp', '').replace(/-/g, ' ').replace(/house1/g, 'Main House').replace(/house2/g, 'Guest House')}</p>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/70 p-2 rounded-lg max-w-md overflow-x-auto">
              {photos.slice(Math.max(0, lightboxPhoto - 5), lightboxPhoto + 6).map((photo, index) => {
                const actualIndex = Math.max(0, lightboxPhoto - 5) + index;
                return (
                  <button
                    key={actualIndex}
                    onClick={() => setLightboxPhoto(actualIndex)}
                    className={`relative w-12 h-12 rounded overflow-hidden flex-shrink-0 transition-all ${
                      actualIndex === lightboxPhoto ? 'ring-2 ring-money-green scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={`/photos/${photo}`}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}