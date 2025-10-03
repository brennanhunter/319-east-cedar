'use client';
import { Map } from 'lucide-react';

interface FloorPlansProps {
  className?: string;
}

export default function FloorPlans({ className = "" }: FloorPlansProps) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-space-cadet mb-2" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
          Property Details
        </h2>
        <p className="text-gray-600">
          Detailed information about both the main house and guest house
        </p>
      </div>

      {/* Floor Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main House Details */}
        <div className="bg-gradient-to-br from-money-green/5 to-space-cadet/5 rounded-xl p-6 border border-gray-100 text-left"
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-money-green to-space-cadet rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-cream-white" />
              </div>
              <div>
                <h3 className="font-bold text-space-cadet group-hover:text-money-green transition-colors text-lg" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
                  Main House
                </h3>
                <p className="text-sm text-gray-600">Updated & Move-In Ready</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 bg-white/70 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-space-cadet">2,751</div>
                <div className="text-xs text-gray-600">Square Feet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-space-cadet">3BR</div>
                <div className="text-xs text-gray-600">2.5 Bathrooms</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="font-semibold text-space-cadet text-sm">Key Features:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Open concept living & dining</li>
                <li>• Updated kitchen with modern appliances</li>
                <li>• Master suite with dual walk-in closet</li>
                <li>• Fireplace in family room</li>
                <li>• Attached 2-car garage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guest House Details */}
        <div className="bg-gradient-to-br from-space-cadet/5 to-money-green/5 rounded-xl p-6 border border-gray-100 text-left"
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-space-cadet to-money-green rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-cream-white" />
              </div>
              <div>
                <h3 className="font-bold text-space-cadet group-hover:text-money-green transition-colors text-lg" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
                  Guest House
                </h3>
                <p className="text-sm text-gray-600">Brand New 2024 Build</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 bg-white/70 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-space-cadet">1,200</div>
                <div className="text-xs text-gray-600">Square Feet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-space-cadet">2BR</div>
                <div className="text-xs text-gray-600">1 Bathroom</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="font-semibold text-space-cadet text-sm">Key Features:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• <span className="font-medium text-money-green">ADA Accessible</span> throughout</li>
                <li>• Open floor plan design</li>
                <li>• Modern kitchen & bathroom</li>
                <li>• Energy-efficient construction</li>
                <li>• Separate entrance & privacy</li>
              </ul>
            </div>

            {/* ADA Badge */}
            <div className="flex justify-end">
              <div className="bg-money-green text-cream-white px-3 py-1 rounded-full text-xs font-medium">
                ADA Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-space-cadet mb-2 text-sm">Total Living Space</h4>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Combined square footage:</span>
          <span className="text-2xl font-bold text-space-cadet">3,951 sq ft</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Perfect for multi-generational living, rental income, or home business
        </p>
      </div>
    </div>
  );
}