'use client';

import { useState, useEffect, useRef } from 'react';

const featuredResources = [
  {
    id: '1',
    name: 'Harborview Medical Center',
    category: 'Healthcare',
    address: '123 Main St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
  {
    id: '6',
    name: 'Eastlaken Community Center',
    category: 'Family',
    address: '456 Oak Ave, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: '11',
    name: 'Port Laken Food Bank',
    category: 'Food',
    address: '789 Pine St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: '15',
    name: 'Senior Center of Port Laken',
    category: 'Seniors',
    address: '101 Elm St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  },
  {
    id: '20',
    name: 'Legal Aid Society',
    category: 'Legal',
    address: '202 Maple Ave, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  },
  {
    id: '25',
    name: 'Port Laken Emergency Services',
    category: 'Emergency',
    address: '303 Cedar St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
  },
];

export default function MapsTransportPage() {
  const [mapQuery, setMapQuery] = useState('Port Angeles WA');
  const [showCarousel, setShowCarousel] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleResourceClick = (address: string) => {
    setMapQuery(address);
  };

  // Infinite continuous scroll
  useEffect(() => {
    if (!showCarousel || isHovering) return;
    
    let animationFrame: number;
    const speed = 0.8; // px per frame
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += speed;
        const scrollWidth = carouselRef.current.scrollWidth / 2;
        if (carouselRef.current.scrollLeft >= scrollWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [showCarousel, isHovering]);

  return (
    <div className="w-full flex flex-col bg-gray-100">
      {/* Map Section - Full Screen */}
      <div className="w-full h-screen flex items-center justify-center p-4 relative">
        {/* Map Container */}
        <div className="w-full h-full max-w-[98%] bg-white rounded-[40px] overflow-hidden shadow-lg relative">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Carousel Toggle Button and Carousel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] flex flex-col">
          {/* Arrow Toggle Button */}
          <button
            onClick={() => setShowCarousel(!showCarousel)}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary text-white px-4 py-2 rounded-t-lg shadow-lg transition-colors self-center"
            aria-label="Toggle carousel"
          >
            {showCarousel ? '▼ Close' : '▲ Open'}
          </button>

          {/* Mini Carousel Overlay */}
          {showCarousel && (
            <div 
              className="bg-white rounded-b-xl shadow-lg overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                ref={carouselRef}
                className="flex overflow-x-hidden"
                style={{ scrollBehavior: 'auto' }}
              >
                {/* Duplicate the array for infinite loop effect */}
                {[...featuredResources, ...featuredResources].map((resource, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-40 bg-white rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow m-2 hover:-translate-y-1"
                    onClick={() => handleResourceClick(resource.address)}
                  >
                    <img
                      src={resource.image}
                      alt={resource.name}
                      className="w-full h-20 object-cover rounded-t-lg"
                    />
                    <div className="p-2 text-sm">
                      <h3 className="font-semibold text-xs line-clamp-2">{resource.name}</h3>
                      <p className="text-gray-500 text-xs">{resource.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        </div>
      </div>

      {/* How to Use & Disclaimer Section */}
<div className="w-full bg-white px-4 py-16">
  <div className="max-w-4xl mx-auto space-y-12">

    {/* How to Use */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use This Map</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Click any featured resource in the carousel to navigate to that location on the map.</li>
        <li>Use the map controls to zoom in/out and explore specific areas.</li>
        <li>Hover over the carousel to pause the auto-scroll, then click to select a resource.</li>
        <li>Click the Open/Close button to show or hide the resource carousel overlay.</li>
      </ul>
    </div>

    {/* Transportation Routes */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Transportation Routes</h2>
      <p className="text-gray-700 mb-6">
        Discover Port Laken's comprehensive public transportation network, featuring modern bus lines and scenic train routes that connect our vibrant city and surrounding areas.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bus Routes */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            Bus Lines
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-lg text-blue-700">Blue Line Express</h4>
              <p className="text-gray-600">Downtown Loop → Harbor District → Tech Park → University</p>
              <p className="text-sm text-gray-500">Every 15 minutes, 24/7 service</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-lg text-green-700">Green Valley Route</h4>
              <p className="text-gray-600">Central Station → Riverside Park → Valley Heights → Mountain View</p>
              <p className="text-sm text-gray-500">Every 20 minutes, scenic route with park views</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-lg text-red-700">Red River Line</h4>
              <p className="text-gray-600">North End → Riverwalk → Industrial Zone → Airport</p>
              <p className="text-sm text-gray-500">Every 30 minutes, connects to regional flights</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-lg text-purple-700">Purple Peak Connector</h4>
              <p className="text-gray-600">City Center → Arts District → Cultural Center → Peak Summit</p>
              <p className="text-sm text-gray-500">Every 25 minutes, premium service with WiFi</p>
            </div>
          </div>
        </div>

        {/* Train Routes */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-orange-500 rounded-full mr-3"></span>
            Train Routes
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-lg text-orange-700">Coastal Rail</h4>
              <p className="text-gray-600">Port Laken Central → Beachfront → Marina → Coastal Towns</p>
              <p className="text-sm text-gray-500">Every hour, ocean views and dining car</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold text-lg text-teal-700">Mountain Express</h4>
              <p className="text-gray-600">Valley Station → Forest Trail → Summit Lodge → Ski Resort</p>
              <p className="text-sm text-gray-500">Seasonal service, connects to hiking trails</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold text-lg text-indigo-700">Metro Link</h4>
              <p className="text-gray-600">Downtown Hub → Business District → Residential Areas → Suburban Stations</p>
              <p className="text-sm text-gray-500">Every 10 minutes during peak hours</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-lg text-pink-700">Heritage Line</h4>
              <p className="text-gray-600">Historic District → Museum Row → Cultural Sites → Airport Express</p>
              <p className="text-sm text-gray-500">Every 45 minutes, connects to international flights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Route Planning Tips</h4>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• Use our mobile app for real-time tracking and route planning</li>
          <li>• All routes are wheelchair accessible with audio announcements</li>
          <li>• Transfer stations offer covered waiting areas and digital displays</li>
          <li>• Night service available on major routes after midnight</li>
        </ul>
      </div>
    </div>

    {/* Disclaimer */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Notice</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
        <h3 className="font-semibold text-lg text-yellow-800 mb-2">Disclaimer</h3>
        <p className="text-gray-700 leading-relaxed">
          The locations shown on this map are for demonstration purposes only. “Port Laken” is a fictional city, so we’ve used the map of Port Angeles, Washington to illustrate how features like this would work in a real-world scenario. All featured places are mapped to the closest related addresses in Port Angeles to demonstrate navigation and interactive map functionality.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-2">
        This is a concept demonstration; always verify real addresses independently.
      </p>
      <p className="text-gray-700 leading-relaxed">
        For more details on why and how we integrated a fictional city into a real map and the design choices behind this demo, please visit our <a href="/references" className="text-blue-600 hover:underline">References page</a>.
      </p>
    </div>

  </div>
</div>  
    </div>
    
  );
}