'use client';
import Image from 'next/image';
import { Eye, Maximize } from 'lucide-react';

interface VirtualWalkthroughProps {
  className?: string;
}

export default function VirtualWalkthrough({ className = "" }: VirtualWalkthroughProps) {
  return (
    <div className={className}>
      <div 
        className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gray-100 cursor-pointer group"
      >
        <Image
          src="/placeholder-photo.png"
          alt="Virtual Walkthrough"
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Start Virtual Tour</span>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="absolute top-2 left-2 bg-money-green text-cream-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Coming Soon
        </div>

        {/* Expand Button */}
        <button className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100">
          <Maximize className="w-4 h-4" />
        </button>
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