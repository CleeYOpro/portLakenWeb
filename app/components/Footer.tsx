"use client";
import Link from "next/link";
import { Mail, Phone, Instagram, Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-playfair font-bold">Port Laken</h2>
            </Link>
            <p className="text-white/80 text-sm mb-4">
              Community First. Building a sustainable future together since 1847.
            </p>
            <div className="space-y-2 text-sm text-white/80 mb-4">
              <a href="mailto:info@portlaken.gov" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@portlaken.gov
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                123 Main St, Port Laken
              </p>
            </div>
          </div>

          {/* Quick Links / Explore */}
          <div>
            <h4 className="font-bold mb-4 text-white/80 uppercase tracking-widest text-xs">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Port Laken</Link></li>
              <li><Link href="/amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events Calendar</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/resource-directory" className="hover:text-white transition-colors">Resource Directory</Link></li>
            </ul>
          </div>

          {/* Government */}
          <div>
            <h4 className="font-bold mb-4 text-white/80 uppercase tracking-widest text-xs">
              Government
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/city-council" className="hover:text-white transition-colors">City Council</Link></li>
              <li><Link href="/boards" className="hover:text-white transition-colors">Boards & Committees</Link></li>
              <li><Link href="/ordinances" className="hover:text-white transition-colors">Ordinances</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Connect & Weather */}
          <div>
            <h4 className="font-bold mb-4 text-white/80 uppercase tracking-widest text-xs">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li>
                <a href="https://instagram.com/portlaken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/portlaken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.53 0-10 4.47-10 10.02 0 5.06 3.64 9.36 8.55 11.72.55.23 1.21.37 1.86.37.66 0 1.22-.08 1.87-.25 1.05-.17 2.05-.52 2.99-.99 1.04-.47 2.14-1.14 2.99-1.96.85-.81 1.29-1.86 1.29-2.96 0-5.52-4.48-10-10.02-10z" />
                </svg>
                <a href="https://www.facebook.com/portlaken" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.53 0-10 4.47-10 10.02 0 5.06 3.64 9.36 8.55 11.72.55.23 1.21.37 1.86.37.66 0 1.22-.08 1.87-.25 1.05-.17 2.05-.52 2.99-.99 1.04-.47 2.14-1.14 2.99-1.96.85-.81 1.29-1.86 1.29-2.96 0-5.52-4.48-10-10.02-10z" />
                </svg>
                <a href="https://nextdoor.com/city/port-laken-ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Nextdoor
                </a>
              </li>
            </ul>

            <h4 className="font-bold mb-4 text-white/80 uppercase tracking-widest text-xs">
              Weather
            </h4>
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-amber-300" />
              <div>
                <p className="text-xl font-bold">42°F</p>
                <p className="text-xs text-white/70">Partly Cloudy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[4rem] md:text-[6rem] font-display font-bold text-white/5 leading-none select-none mb-4">
            PORT LAKEN
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center text-xs text-white/50 gap-4">
            <p>Made with ❤️ in Port Laken, WA</p>
            <p>© {new Date().getFullYear()} Port Laken. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}