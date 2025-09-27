'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, Map } from 'lucide-react';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import PropertyDetails from '@/components/PropertyDetails';

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
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content - Hero Component */}
            <Hero onOpenFloorPlan={openFloorPlan} />

            {/* Right Content - Photo Carousel */}
            <Carousel />
          </div>
          
          {/* Property Details Component */}
          <PropertyDetails />
        </div>
      </section>

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
