'use client';
import { MapPin, School, Car, ShoppingBag, Trees, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Sun, SunHorizon, MoonStars } from 'phosphor-react';

interface TuttleProps {
  className?: string;
}

export default function Tuttle({ className = "" }: TuttleProps) {
  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-space-cadet mb-4" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
            Welcome to <span className="text-money-green">Tuttle</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A premium community with A rated schools, true 1 GB fiber internet, and a wonderful low cost of living. 
            Tuttle combines educational excellence with modern infrastructure while maintaining authentic small-town charm.
          </p>
          
          {/* Tuttle Main Street Image - Framed */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-money-green to-space-cadet rounded-2xl p-1">
              <div className="bg-white rounded-xl p-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photos/Tuttle.jpg"
                    alt="Downtown Tuttle, Oklahoma - Main Street"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-space-cadet">Downtown Tuttle</p>
                  <p className="text-xs text-gray-500">Historic Main Street charm meets modern amenities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-space-cadet mb-2">8,584</div>
            <div className="text-sm text-gray-600">Population (2024)</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-money-green mb-2">A</div>
            <div className="text-sm text-gray-600">School District Rating</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-space-cadet mb-2">95%</div>
            <div className="text-sm text-gray-600">HS Graduation Rate</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-money-green mb-2">32</div>
            <div className="text-sm text-gray-600">Days on Market</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Why Tuttle */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-space-cadet mb-4" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
                Why Choose Tuttle?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-money-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">A Rated Schools</h4>
                    <p className="text-sm text-gray-600">95% graduation rate, 16:1 student-teacher ratio. Ranked #19 out of 328 OK districts for graduation success.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-space-cadet rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">Safe Community</h4>
                    <p className="text-sm text-gray-600">19.3 officers per 10,000 residents (top 45% nationally). More than 80% of residents report feeling &ldquo;pretty safe&rdquo;.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-money-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">Strategic Location</h4>
                    <p className="text-sm text-gray-600">37 minutes to Norman/OU. Perfect commuter community for Oklahoma City metro professionals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-space-cadet rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">Community Stability</h4>
                    <p className="text-sm text-gray-600">High civic engagement with festivals and Chamber events. Active community involvement protects long-term property values.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Local Amenities */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-space-cadet mb-4" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
                Local Amenities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-money-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">True 1 Gbps Fiber Internet</h4>
                    <p className="text-sm text-gray-600">Tuttle Fiber provides one of the only true 1 gigabyte fiber networks in Oklahoma. Perfect for remote work and modern connectivity needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-space-cadet rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trees className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">Community Events</h4>
                    <p className="text-sm text-gray-600">20+ year Tuttle Ice Cream Festival, Annual Easter Egg hunt, and an active homecoming with a parade.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-money-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">Lower Cost of Living</h4>
                    <p className="text-sm text-gray-600">8% below national average. Utilities 8% lower, transportation 14% lower than national rates.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-space-cadet rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-cream-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-cadet mb-1">Top-Tier Utilities</h4>
                    <p className="text-sm text-gray-600">OEC Electric ranks in top 20% nationally for reliability. Cooperative model ensures quality service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* A Day in Tuttle - Lifestyle Story */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-space-cadet mb-4" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
              A Day in <span className="text-money-green">Tuttle</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Imagine waking up in a community where quality of life isn&apos;t just a promise—it&apos;s your daily&nbsp;reality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Morning */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sun className="text-white w-6 h-6" weight="fill" />
                  </div>
                  <h4 className="text-xl font-bold text-space-cadet">Morning</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>7:00 AM:</strong> Start your day on your private 2-acre wooded retreat. Coffee on the porch overlooking mature trees while your kids get ready for Tuttle&apos;s A rated schools.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>8:15 AM:</strong> Drop the kids at school with confidence—95% graduation rate and 16:1 student-teacher ratios mean they&apos;re in excellent hands. Wave to neighbors you actually know.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>9:00 AM:</strong> Fire up your 1 Gbps fiber connection for a seamless work-from-home day. Video calls are crystal clear, uploads instant.
                </p>
              </div>

              {/* Afternoon */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <SunHorizon className="text-white w-6 h-6" weight="fill" />
                  </div>
                  <h4 className="text-xl font-bold text-space-cadet">Afternoon</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>12:30 PM:</strong> Lunch break at Jaime Joe&apos;s with great half price burgers on Mondays. Small-town dining with big-hearted service.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>3:30 PM:</strong> Kids dismissed from school—Tuttle&apos;s 19.3 officers per 10,000 residents (top 45% nationally) means peace of mind is built into your daily routine.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>4:00 PM:</strong> Family time in your spacious main house or let grandparents enjoy independence in the brand-new ADA-accessible guest house.
                </p>
              </div>

              {/* Evening */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <MoonStars className="text-white w-6 h-6" weight="fill" />
                  </div>
                  <h4 className="text-xl font-bold text-space-cadet">Evening</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>6:00 PM:</strong> Dinner at Lupita&apos;s Restaurant for authentic Mexican cuisine, then browse Main Street&apos;s unique shops.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>7:30 PM:</strong> Attend a Tuttle Tigers game—ranked #15 of 398 Oklahoma schools for athletics—where the whole community comes together.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>9:00 PM:</strong> Relax by your fire pit under the stars, knowing tomorrow&apos;s commute to Norman or OKC gives you access to big-city careers while living the good life.
                </p>
              </div>
            </div>

            {/* Bottom Story Conclusion */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 italic">
                &ldquo;This isn&apos;t just where we live—it&apos;s where we thrive. Tuttle gives our family everything: 
                top schools, real community, modern amenities, and the space to breathe. 
                We&apos;re not just residents, we&apos;re <strong>Tuttle</strong> residents—and proud of it.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-2">— A Tuttle Family</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-money-green to-space-cadet rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Midnight Gelactic, Avenir, Avenir Next, sans-serif' }}>
            Ready to Call Tuttle Home?
          </h3>
          <p className="text-cream-white/90 mb-6 max-w-2xl mx-auto">
            Join a community where schools achieve 95% graduation rates and 1 Gbps fiber internet enables modern living. 
            Discover why professionals choose Tuttle for educational excellence and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-space-cadet rounded-lg font-semibold hover:bg-cream-white transition-colors">
              Schedule a Tour
            </button>
            <a 
              href="https://www.tuttleok.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-space-cadet transition-colors inline-block text-center"
            >
              Learn More About Tuttle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}