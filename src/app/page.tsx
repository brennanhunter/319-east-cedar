'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, Map } from 'lucide-react';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import FloorPlans from '@/components/FloorPlans';
import MarketComps from '@/components/MarketComps';
import PropertyDetails from '@/components/PropertyDetails';
import Tuttle from '@/components/Tuttle';

export default function Home() {
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [currentFloorPlan, setCurrentFloorPlan] = useState('');

  const openFloorPlan = (house: string) => {
    setCurrentFloorPlan(`${house} Floor Plan`);
    setIsFloorPlanOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFloorPlan = () => {
    setIsFloorPlanOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-cream-white">
      {/* SEO Content - Hidden visually but crawlable */}
      <div className="sr-only">
        <h1>319 E Cedar Drive Tuttle Oklahoma - Two Homes for Sale on 2 Acres</h1>
        <p>Discover this exceptional Tuttle Oklahoma real estate opportunity featuring two complete homes on 2 wooded acres. The main house offers 2,751 square feet with 3 bedrooms and 2.5 bathrooms, while the brand new ADA-accessible guest house provides 1,200 square feet with 2 bedrooms and 1 bathroom. Perfect for multi-generational living in the highly-rated Tuttle school district.</p>
      </div>
      
      {/* Main Content */}
      <section className="relative">
        <div className="container mx-auto px-6 py-12">
          {/* Mobile Layout: Hero → Carousel → FloorPlans → MarketComps */}
          {/* Desktop Layout: Hero + Carousel side by side, then FloorPlans + MarketComps */}
          
          {/* Main Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-start mb-16">
            {/* Mobile: Sequential Order / Desktop: Left Column */}
            
            {/* Hero Component - Always first */}
            <div className="lg:order-1">
              <Hero />
            </div>

            {/* Carousel - Second on mobile, right column on desktop */}
            <div className="lg:order-2 lg:sticky lg:top-6 lg:row-span-3">
              <Carousel />
            </div>

            {/* Property Details - Third on mobile, back to left column on desktop */}
            <div className="lg:order-3">
              <FloorPlans />
            </div>

            {/* Market Comparables - Fourth on mobile, stays in left column on desktop */}
            <div className="lg:order-4">
              <MarketComps />
            </div>
          </div>
          
          {/* Property Details Component */}
          <PropertyDetails />
        </div>
      </section>

      {/* Tuttle Section */}
      <Tuttle />

      {/* Floor Plan Lightbox Modal */}
      {isFloorPlanOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeFloorPlan}
          />
          
          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[90vh] w-full animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={closeFloorPlan}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Floor Plan */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-space-cadet mb-4">{currentFloorPlan}</h2>
                <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder-photo.png"
                    alt={`${currentFloorPlan} - Coming Soon`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white/90 p-6 rounded-lg text-center">
                      <Map className="w-16 h-16 mx-auto mb-4 text-money-green" />
                      <h3 className="text-lg font-bold text-space-cadet mb-2">Floor Plan Coming Soon</h3>
                      <p className="text-gray-600 text-sm">
                        Detailed {currentFloorPlan.toLowerCase()} will be available shortly.
                        <br />Contact us for more information about the layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  {currentFloorPlan === 'Main House Floor Plan' ? 
                    '2,751 sq ft • 3 Bedrooms • 2.5 Bathrooms • Built 1994 • Recently Updated' :
                    '1,200 sq ft • 2 Bedrooms • 1 Bathroom • Built 2024 • ADA Accessible'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
