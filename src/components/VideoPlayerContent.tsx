'use client';

interface VideoPlayerContentProps {
  className?: string;
}

export default function VideoPlayerContent({ 
  className = ''
}: VideoPlayerContentProps) {

  return (
    <div 
      className={`relative bg-gray-100 rounded-lg overflow-hidden group aspect-[4/3] mb-4 ${className}`}
    >
      {/* Video Embed */}
      <iframe 
        src="https://listings.ewingmedia.co/videos/01999cba-672c-724d-a5f3-090663314d73" 
        className="w-full h-full rounded-lg"
        style={{ border: 0 }} 
        allow="autoplay; fullscreen; picture-in-picture"
        title="Property Video Tour - 319 E Cedar Drive"
      />

      {/* Video Tour Badge */}
      <div className="absolute top-2 left-2 bg-money-green text-cream-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
        <span>Video Tour</span>
      </div>

      {/* Fullscreen Hint */}
      <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs opacity-75">
        <span>Click for fullscreen</span>
      </div>
    </div>
  );
}