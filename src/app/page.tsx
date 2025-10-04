'use client';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import FloorPlans from '@/components/FloorPlans';
import MarketComps from '@/components/MarketComps';
import PropertyDetails from '@/components/PropertyDetails';
import Tuttle from '@/components/Tuttle';

export default function Home() {

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
    </div>
  );
}
