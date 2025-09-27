'use client';
import { MapPin, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="space-y-8 order-1 lg:order-1">
      {/* Main Title */}
      <h1 className="text-5xl lg:text-6xl font-bold text-space-cadet leading-tight" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
        Modern living
        <br />
        <span className="text-money-green">for everyone</span>
      </h1>
      
      {/* Description */}
      <p className="text-lg text-gray-600 max-w-lg">
        Two incredible homes on 2 acres! Beautifully updated main home plus brand new ADA-accessible guest house. Perfect for multi-generational living or investment income.
      </p>
      
      {/* Property Address & Location */}
      <div className="space-y-6 max-w-2xl">
        {/* Large Address Display with Map */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-money-green rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-cream-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-space-cadet mb-1">
                <span style={{ fontFamily: 'Avenir, Avenir Next, sans-serif' }}>319</span>
                <span style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}> East Cedar Drive</span>
              </h2>
              <p className="text-gray-600 mb-2">Tuttle, Oklahoma 73089</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Grady County</span>
                <span>•</span>
                <span>Tuttle School District</span>
                <span>•</span>
                <span>2 Acres</span>
              </div>
            </div>
            <button 
              onClick={() => window.open('https://maps.google.com/?q=319+E+Cedar+Dr+Tuttle+OK+73089', '_blank')}
              className="px-4 py-2 bg-space-cadet text-cream-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium flex items-center space-x-2"
            >
              <span>View Map</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
