'use client';
import { useState } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';

interface MarketCompsProps {
  className?: string;
}

export default function MarketComps({ className = "" }: MarketCompsProps) {
  const [isCompsOpen, setIsCompsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <button 
        onClick={() => setIsCompsOpen(!isCompsOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-space-cadet to-money-green rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-cream-white" />
          </div>
          <div>
            <h3 className="font-bold text-space-cadet group-hover:text-money-green transition-colors text-xl" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>Market Comparables</h3>
            <p className="text-sm text-gray-600">Recent sales analysis & pricing justification</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isCompsOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Content */}
      <div className={`mt-4 transition-all duration-300 overflow-hidden ${isCompsOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t pt-4">
          {/* Price Positioning */}
          <div className="mb-6 p-4 bg-money-green/10 rounded-lg">
            <h4 className="font-bold text-space-cadet mb-2">Why $739,999 is Excellent Value</h4>
            <p className="text-sm text-gray-600 mb-2">
              At <span className="font-semibold text-money-green">$187.29/sq ft</span>, this property offers exceptional value compared to recent sales ($195-$230/sq ft range).
            </p>
            <p className="text-xs text-gray-500">
              Only property offering two complete homes + brand new ADA-accessible guest house
            </p>
          </div>

          {/* Comparables Table */}
          <div className="space-y-3">
            <h4 className="font-semibold text-space-cadet text-sm">Recent Comparable Sales</h4>
            <div className="overflow-x-auto">
              <div className="space-y-2">
                {/* Your Property - Highlighted */}
                <div className="bg-money-green/20 p-3 rounded-lg border-2 border-money-green">
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div>
                      <span className="font-semibold text-space-cadet">319 E Cedar</span>
                      <p className="text-gray-600">5 bed • 4 bath</p>
                    </div>
                    <div>
                      <span className="font-semibold text-money-green">$739,999</span>
                      <p className="text-gray-600">3,951 sq ft</p>
                    </div>
                    <div>
                      <span className="font-semibold text-money-green">$187.29/sf</span>
                      <p className="text-gray-600">2.00 acres</p>
                    </div>
                    <div>
                      <span className="bg-money-green text-cream-white px-2 py-1 rounded text-xs font-medium">LISTING</span>
                      <p className="text-gray-600 mt-1">Two Homes!</p>
                    </div>
                  </div>
                </div>

                {/* Comparable Properties */}
                <div className="space-y-1">
                  {[
                    { address: '7536 Annabell Lane', beds: 5, baths: 3, sqft: 4226, lot: '0.99 AC', price: '$690,000', psf: '$163.27', date: '07/25/25' },
                    { address: '1230 County St 2900', beds: 5, baths: 4, sqft: 3341, lot: '3.9 AC', price: '$685,000', psf: '$205.03', date: '10/30/24' },
                    { address: '1133 Noah Place', beds: 5, baths: 3.5, sqft: 3397, lot: '2.19 AC', price: '$682,000', psf: '$200.77', date: '09/06/22' },
                    { address: '834 County St 2910', beds: 3, baths: 2, sqft: 2766, lot: '2.18 AC', price: '$634,900', psf: '$229.54', date: '07/03/25' }
                  ].map((comp, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div>
                          <span className="font-medium text-gray-800">{comp.address}</span>
                          <p className="text-gray-600">{comp.beds} bed • {comp.baths} bath</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{comp.price}</span>
                          <p className="text-gray-600">{comp.sqft.toLocaleString()} sq ft</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{comp.psf}/sf</span>
                          <p className="text-gray-600">{comp.lot}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">{comp.date}</span>
                          <p className="text-gray-500">Sold</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="mt-4 p-4 bg-space-cadet/10 rounded-lg">
            <h4 className="font-bold text-space-cadet mb-2 text-sm">Unique Advantages Over Comps</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• <span className="font-medium">Two Complete Homes</span> - Only property offering dual residences</li>
              <li>• <span className="font-medium">Brand New Guest House</span> - ADA accessible, finished 2024</li>
              <li>• <span className="font-medium">Recent Updates</span> - New roof, HVAC, flooring, windows (2022-2023)</li>
              <li>• <span className="font-medium">Best Value</span> - Largest total living space at lowest price/sq ft</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}