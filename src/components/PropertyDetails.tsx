'use client';
import { useState } from 'react';
import { Home, HousePlus, ChevronDown, Zap, Star, Building, Wrench, HouseHeart } from 'lucide-react';

export default function PropertyDetails() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <button 
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full flex items-center justify-between text-left group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-money-green to-space-cadet rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-cream-white" />
            </div>
            <div>
              <h3 className="font-bold text-space-cadet group-hover:text-money-green transition-colors" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>Complete Property Details</h3>
              <p className="text-sm text-gray-600">Features, updates, utilities & investment information</p>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDetailsOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Content */}
        <div className={`mt-6 transition-all duration-300 overflow-hidden ${isDetailsOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t pt-6">
            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Recent Updates */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-money-green rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cream-white" />
                  </div>
                  <h3 className="font-bold text-space-cadet">Recent Updates</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span><strong>New Roof</strong> (2023)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span><strong>HVAC System</strong> (2022)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span><strong>Tile Wood Flooring</strong> (2022)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span><strong>Windows</strong> (2023)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span><strong>Water Heater</strong> (2023)</span>
                  </li>
                </ul>
              </div>

              {/* Property Specs */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-space-cadet rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-cream-white" />
                  </div>
                  <h3 className="font-bold text-space-cadet">Property Details</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Living:</span>
                    <span className="font-medium">3,951 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Main House:</span>
                    <span className="font-medium">2,751 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guest House:</span>
                    <span className="font-medium">1,200 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year Built:</span>
                    <span className="font-medium">1994 (Main)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guest House:</span>
                    <span className="font-medium">2024 (New!)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lot Size:</span>
                    <span className="font-medium">2.00 acres</span>
                  </div>
                </div>
              </div>

              {/* Premium Features */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-money-green to-space-cadet rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-cream-white" />
                  </div>
                  <h3 className="font-bold text-space-cadet">Premium Features</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span>EV Charging Station</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span>RV Hookup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span>ADA Accessible Guest House</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span>Spa-Style Primary Suite</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-money-green rounded-full"></span>
                    <span>Granite Countertops</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Features */}
            <div className="space-y-6">
              {/* Interior Features */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-money-green rounded-lg flex items-center justify-center">
                    <HousePlus className="w-4 h-4 text-cream-white" />
                  </div>
                  <h3 className="font-bold text-space-cadet">Interior Features</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Main House Layout</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Formal dining room</li>
                      <li>• Breakfast nook</li>
                      <li>• Family room with fireplace</li>
                      <li>• Sliding barn doors</li>
                      <li>• Built-in bookcase</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Primary Suite</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Spa-style bathroom</li>
                      <li>• Dual vanity sinks</li>
                      <li>• Garden tub & shower</li>
                      <li>• Walk-in closet</li>
                      <li>• Private access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Kitchen Features</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Granite countertops</li>
                      <li>• Large kitchen island</li>
                      <li>• Stainless appliances</li>
                      <li>• Tile backsplash</li>
                      <li>• Pantry storage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Guest House Features</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• ADA accessible design</li>
                      <li>• Open concept layout</li>
                      <li>• Full kitchen</li>
                      <li>• 2 bedrooms, 1 bath</li>
                      <li>• Separate entrance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Outdoor Living</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Covered back patio</li>
                      <li>• Large front porch</li>
                      <li>• Mature landscaping</li>
                      <li>• 2-acre lot</li>
                      <li>• Storage shed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Modern Conveniences</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• EV charging station</li>
                      <li>• RV hookup</li>
                      <li>• Garage & Carport</li>
                      <li>• Security system ready</li>
                      <li>• High-speed internet ready</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Utilities & Systems */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-space-cadet rounded-lg flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-cream-white" />
                  </div>
                  <h3 className="font-bold text-space-cadet">Utilities & Systems</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Heating & Cooling</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Central HVAC (2022)</li>
                      <li>• Separate guest house unit</li>
                      <li>• Programmable thermostats</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Electrical</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Updated electrical panel</li>
                      <li>• EV charging ready</li>
                      <li>• LED lighting throughout</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Plumbing</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• New water heater (2023)</li>
                      <li>• Updated fixtures</li>
                      <li>• Separate meters available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Internet & Cable</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• High-speed internet ready</li>
                      <li>• Cable/satellite ready</li>
                      <li>• Network wiring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Investment & Lifestyle */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-money-green to-space-cadet rounded-lg flex items-center justify-center">
                    <HouseHeart className="w-4 h-4 text-cream-white" />
                  </div>
                  <h3 className="font-bold text-space-cadet">Investment & Lifestyle Opportunities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Rental Income</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Guest house rental potential</li>
                      <li>• Airbnb/VRBO ready</li>
                      <li>• Separate utilities possible</li>
                      <li>• High demand area</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Multi-Generational</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• ADA accessible guest house</li>
                      <li>• Privacy for all residents</li>
                      <li>• Separate entrances</li>
                      <li>• Independent living spaces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">Investment Potential</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Guest house rental income</li>
                      <li>• Multi-generational living</li>
                      <li>• Airbnb/VRBO potential</li>
                      <li>• Recent updates protect value</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-space-cadet mb-2">School District</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Tuttle Elementary School</li>
                      <li>• Tuttle Middle School</li>
                      <li>• Tuttle High School</li>
                      <li>• Highly rated district</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
