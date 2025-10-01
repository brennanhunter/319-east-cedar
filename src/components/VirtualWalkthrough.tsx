'use client';
import { Eye, Maximize } from 'lucide-react';

interface VirtualWalkthroughProps {
  className?: string;
}

export default function VirtualWalkthrough({ className = "" }: VirtualWalkthroughProps) {
  return (
    <div className={className}>
      <div 
        className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-100"
      >
        <iframe 
          src="https://www.zillow.com/view-imx/410bbdbd-729f-41de-b048-b559219e9898?wl=true&setAttribution=mls&initialViewType=pano" 
          className="w-full h-full rounded-lg"
          style={{ border: 0 }} 
          allow="fullscreen"
          title="3D Virtual Tour - 319 E Cedar Drive"
        />

        {/* Live Tour Badge */}
        <div className="absolute top-2 left-2 bg-money-green text-cream-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
          <Eye className="w-3 h-3" />
          <span>Live 3D Tour</span>
        </div>

        {/* Fullscreen Hint */}
        <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1 opacity-75">
          <Maximize className="w-3 h-3" />
          <span>Click for fullscreen</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="text-center space-y-2">
        <h4 className="text-lg font-semibold text-space-cadet">3D Virtual Walkthrough</h4>
        <p className="text-sm text-gray-600">Experience the property from anywhere with our immersive virtual tour</p>
        <div className="flex justify-center space-x-4 text-xs text-gray-500">
          <span>• 360° Views</span>
          <span>• Interactive Hotspots</span>
          <span>• Room-by-Room Navigation</span>
        </div>
      </div>
    </div>
  );
}