'use client';
import { useState } from 'react';
import { Camera, Video, Eye } from 'lucide-react';

interface MediaContainerProps {
  children?: React.ReactNode;
  className?: string;
  showMediaToggle?: boolean;
  defaultMediaType?: 'carousel' | 'video' | 'virtual';
  onMediaTypeChange?: (type: 'carousel' | 'video' | 'virtual') => void;
}

export default function MediaContainer({ 
  children,
  className = "",
  showMediaToggle = true,
  defaultMediaType = 'carousel',
  onMediaTypeChange
}: MediaContainerProps) {
  const [currentMediaType, setCurrentMediaType] = useState<'carousel' | 'video' | 'virtual'>(defaultMediaType);

  const handleMediaTypeChange = (type: 'carousel' | 'video' | 'virtual') => {
    setCurrentMediaType(type);
    onMediaTypeChange?.(type);
  };

  return (
    <div className={`relative order-2 lg:order-2 ${className}`}>
      <div className="relative bg-gradient-to-br from-money-green to-space-cadet rounded-2xl p-1">
        <div className="bg-white rounded-xl p-6">
          {/* Media Type Toggle */}
          {showMediaToggle && (
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 rounded-lg p-1 inline-flex">
                <button
                  onClick={() => handleMediaTypeChange('carousel')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentMediaType === 'carousel'
                      ? 'bg-white text-space-cadet shadow-sm'
                      : 'text-gray-600 hover:text-space-cadet'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span>Photos</span>
                </button>
                <button
                  onClick={() => handleMediaTypeChange('video')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentMediaType === 'video'
                      ? 'bg-white text-space-cadet shadow-sm'
                      : 'text-gray-600 hover:text-space-cadet'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>Video Tour</span>
                </button>
                <button
                  onClick={() => handleMediaTypeChange('virtual')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentMediaType === 'virtual'
                      ? 'bg-white text-space-cadet shadow-sm'
                      : 'text-gray-600 hover:text-space-cadet'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Virtual Tour</span>
                </button>
              </div>
            </div>
          )}

          {/* Media Content Area */}
          <div className="media-content">
            {children}
          </div>

          {/* Property Details */}
          <div className="space-y-3 mt-4">
            <h3 className="text-xl font-bold text-space-cadet">
              <span style={{ fontFamily: 'Avenir, Avenir Next, sans-serif' }}>$729,999</span>
            </h3>
            <p className="text-gray-600">5 beds • 4 baths • 3,951 sq ft • 2 acres</p>
            <p className="text-sm text-gray-500">319 E Cedar Dr, Tuttle, OK 73089</p>
          </div>
        </div>
      </div>
      
      {/* Floating Feature Tags */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 md:top-4 md:right-4 md:left-auto md:transform-none md:translate-x-0 flex flex-nowrap gap-1 justify-center md:flex-col md:space-y-2 md:justify-start">
        <div className="bg-money-green text-cream-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
          Two Homes
        </div>
        <div className="bg-space-cadet text-cream-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
          ADA Accessible
        </div>
        <div className="bg-white text-space-cadet px-3 py-1.5 rounded-full text-sm font-medium shadow-lg border whitespace-nowrap">
          New 2024
        </div>
      </div>
      
      {/* Version Badge */}
      <div className="absolute -bottom-4 -right-4 bg-money-green text-cream-white px-4 py-2 rounded-tl-2xl rounded-br-2xl font-bold text-lg shadow-lg">
        Premium
        <br />
        <span className="text-sm font-normal">Listing</span>
      </div>

      {/* Pass current media type to children via context or props */}
      <div className="hidden" data-media-type={currentMediaType} />
    </div>
  );
}

// Hook to get current media type from parent MediaContainer
export function useMediaType() {
  // This would typically use React Context, but for simplicity we'll use a different approach
  return 'carousel';
}
