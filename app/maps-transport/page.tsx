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
    id: '2',
    name: 'Eastlaken Community Center',
    category: 'Family',
    address: '456 Oak Ave, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: '3',
    name: 'Port Laken Food Bank',
    category: 'Food',
    address: '789 Pine St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  },
  {
    id: '4',
    name: 'Senior Center of Port Laken',
    category: 'Seniors',
    address: '101 Elm St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  },
  {
    id: '5',
    name: 'Legal Aid Society',
    category: 'Legal',
    address: '202 Maple Ave, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  },
  {
    id: '6',
    name: 'Port Laken Emergency Services',
    category: 'Emergency',
    address: '303 Cedar St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
  },
  {
    id: '7',
    name: 'Olympic Peninsula Library',
    category: 'Education',
    address: '414 Lincoln St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
  },
  {
    id: '8',
    name: 'Harbor Transit Center',
    category: 'Transport',
    address: '500 Front St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
  {
    id: '9',
    name: 'Port Laken Youth Services',
    category: 'Youth',
    address: '610 Lauridsen Blvd, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
  },
  {
    id: '10',
    name: 'Clallam County Courthouse',
    category: 'Government',
    address: '223 E 4th St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80',
  },
  {
    id: '11',
    name: 'Port Laken Animal Shelter',
    category: 'Animals',
    address: '1902 W 18th St, Port Angeles, WA 98363',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80',
  },
  {
    id: '12',
    name: 'Waterfront Arts Center',
    category: 'Arts',
    address: '121 E Railroad Ave, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
  },
  {
    id: '13',
    name: 'Port Laken Recreation Park',
    category: 'Recreation',
    address: '301 N Lincoln St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&q=80',
  },
  {
    id: '14',
    name: 'Mental Health & Wellness Clinic',
    category: 'Mental Health',
    address: '118 E 8th St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    id: '15',
    name: 'Port Laken Fire Station 1',
    category: 'Emergency',
    address: '102 E 5th St, Port Angeles, WA 98362',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
];

export default function MapsTransportPage() {
  const [mapQuery, setMapQuery] = useState('Port Angeles WA');
  const [showCarousel, setShowCarousel] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const handleResourceClick = (address: string) => {
    setMapQuery(address);
  };

  // Infinite continuous scroll
  useEffect(() => {
    if (!showCarousel || isHovering || !carouselRef.current) return;
    
    const speed = 0.5; // px per frame for smoother movement
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += speed;

        // When we reach the halfway point of the duplicated items, reset to beginning
        // This creates an infinite loop effect
        const scrollWidth = carouselRef.current.scrollWidth / 2;
        if (carouselRef.current.scrollLeft >= scrollWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showCarousel, isHovering]); // Dependencies are correct - only restart when visibility or hover state changes

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Map Section - Full Screen */}
      <div className="w-full h-screen flex items-center justify-center p-4 relative">
        {/* Map Container */}
        <div className="w-full h-full max-w-[99.5%] max-h-[85%] bg-white rounded-[40px] overflow-hidden shadow-lg relative mt-20">
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
            <span className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mr-3 flex items-center justify-center text-white text-xs font-bold">B</span>
            Bus Lines
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 -ml-4 pl-4 py-3 rounded-r">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg text-blue-700">Route 120</h4>
                  <p className="text-gray-600">Downtown Loop → Harbor District → Tech Park → Olympic University</p>
                  <p className="text-sm text-gray-500">Every 15 minutes, 24/7 service</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 -ml-4 pl-4 py-3 rounded-r">
              <h4 className="font-semibold text-lg text-green-700">Route 240</h4>
              <p className="text-gray-600">Central Station → Riverside Park → Valley Heights → Mountain View</p>
              <p className="text-sm text-gray-500">Every 20 minutes, scenic route with park views</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 -ml-4 pl-4 py-3 rounded-r">
              <h4 className="font-semibold text-lg text-red-700">Route 480</h4>
              <p className="text-gray-600">North End → Riverwalk → Industrial Zone → Airport</p>
              <p className="text-sm text-gray-500">Every 30 minutes, connects to international flights</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 -ml-4 pl-4 py-3 rounded-r">
              <h4 className="font-semibold text-lg text-purple-700">Route 960</h4>
              <p className="text-gray-600">City Center → Arts District → Cultural Center → Peak Summit</p>
              <p className="text-sm text-gray-500">Every 25 minutes, premium express service</p>
            </div>
          </div>
        </div>

        {/* Intercity Train Routes */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mr-3 flex items-center justify-center text-white text-xs font-bold">T</span>
            Intercity Rail
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 -ml-4 pl-4 py-3 rounded-r">
              <h4 className="font-semibold text-lg text-orange-700">West/South Peninsula Line</h4>
              <p className="text-gray-600 text-sm mb-2">Port Laken → Chimacum → Bainbridge Island → Bremerton → Port Orchard → Gig Harbor → Tacoma → Olympia</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">West Peninsula</span>
                <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Kitsap Region</span>
              </div>
              <p className="text-sm text-gray-500">Daily service • Dining & observation cars • 8 major stops</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 bg-teal-50 -ml-4 pl-4 py-3 rounded-r">
              <h4 className="font-semibold text-lg text-teal-700">East/North Sound Line</h4>
              <p className="text-gray-600 text-sm mb-2">Port Laken → Port Townsend → Whidbey Island → Sound Tunnel → Everett → Edmonds → Seattle → Bellevue</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded">East Peninsula</span>
                <span className="text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded">Puget Sound Tunnel</span>
              </div>
              <p className="text-sm text-gray-500">Daily service • Premium seating • 9 major stops • Direct Seattle access</p>
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