"use client";
import Link from "next/link";
import { Mail, Phone, Instagram, Sun } from "lucide-react";

function Footer() {

  return (
    <footer className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-[80rem] mx-auto px-6 md:px-10 pt-12 pb-0 bg-primary backdrop-blur-sm border border-primary/20 rounded-t-3xl flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <h2 className="text-4xl font-playfair font-bold text-white">Port Laken</h2>
            </Link>

            <p className="text-white mt-4 font-nunito">
              <span className="italic">Community First</span> the heart of everything we do.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:info@portlaken.com" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@portlaken.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(555) 123-4567</span>
              </a>
            </div>

            <p className="text-sm text-white/60 mt-6">
              Made with ❤️ in Port Laken, WA.
            </p>
            <p className="text-sm text-white/60 ">
              &copy; {new Date().getFullYear()} Port Laken. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Weather Widget */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-2 text-white">Current Weather</h3>
              <div className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-white" />
                <p className="text-2xl font-bold text-white">72°F</p>
              </div>
              <p className="text-sm text-white mt-2">Sunny</p>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-2 text-white">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white hover:underline transition-all">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/amenities" className="text-white hover:underline transition-all">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white hover:underline transition-all">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white hover:underline transition-all">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl font-semibold mb-2 text-white">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://instagram.com/portlaken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:underline transition-all">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/portlaken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:underline transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X (Twitter)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04c-5.53 0-10 4.47-10 10.02 0 5.06 3.64 9.36 8.55 11.72.55.23 1.21.37 1.86.37.66 0 1.22-.08 1.87-.25 1.05-.17 2.05-.52 2.99-.99 1.04-.47 2.14-1.14 2.99-1.96.85-.81 1.29-1.86 1.29-2.96 0-5.52-4.48-10-10.02-10z"/>
                  </svg>
                  <a href="https://www.facebook.com/portlaken" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04c-5.53 0-10 4.47-10 10.02 0 5.06 3.64 9.36 8.55 11.72.55.23 1.21.37 1.86.37.66 0 1.22-.08 1.87-.25 1.05-.17 2.05-.52 2.99-.99 1.04-.47 2.14-1.14 2.99-1.96.85-.81 1.29-1.86 1.29-2.96 0-5.52-4.48-10-10.02-10z"/>
                  </svg>
                  <a href="https://nextdoor.com/city/port-laken-ca" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">
                    Nextdoor
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        
        {/* Add some space at the top */}
        <div className="h-8 md:h-12" />

        {/* Large Text Banner - Inside container at bottom */}
        <div className="w-full flex justify-center mt-auto">
          <h1 className="text-center text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary-shade to-deep-navy select-none">
            PORT LAKEN
          </h1>
        </div>
      </div>
    </footer>
  );
}
export { Footer };