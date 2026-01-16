"use client";

import React, { useState, useEffect } from 'react';
import { GiWaves } from 'react-icons/gi';
import { Search, LogIn, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (item: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setTimeout(() => setActiveDropdown(item), 150);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 200);
    setDropdownTimeout(timeout);
  };

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-4 z-50 transition-all duration-500 ease-in-out rounded-full border border-white/20 ${scrolled
            ? 'backdrop-blur-xl shadow-lg left-1/2 -translate-x-1/2 w-full max-w-[80rem] px-4'
            : 'backdrop-blur-md shadow-md left-4 right-4'
          }`}
        style={{
          backgroundColor: scrolled
            ? 'rgba(242, 246, 250, 0.9)'  // lighter tint when scrolled
            : 'rgba(242, 246, 250, 0.9)',  // slightly lighter when at top
        }}

      >
        <div className={`${scrolled ? 'max-w-full' : 'max-w-[1400px]'} mx-auto px-6 transition-all duration-500 ease-in-out`}>
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <GiWaves className="text-primary text-2xl transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="font-nunito font-bold text-xl text-deep-navy">Port Laken</span>
            </Link>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <NavDropdown
                label="Community Hub"
                isActive={activeDropdown === 'community'}
                onMouseEnter={() => handleMouseEnter('community')}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownLink href="/resource-directory" label="Resource Directory" />
                <DropdownLink href="/events" label="Events" />
                <DropdownLink href="/map" label="Map" />
                <DropdownLink href="/submit-resource" label="Submit a Resource" />
                <DropdownLink href="/community-stories" label="Community Stories" />
              </NavDropdown>

              <NavDropdown
                label="Residents"
                isActive={activeDropdown === 'residents'}
                onMouseEnter={() => handleMouseEnter('residents')}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownLink href="/living-in-portlaken" label="Life" />
                <DropdownLink href="/forms" label="Forms & Applications" />
                <DropdownLink href="/employment" label="Employment" />
              </NavDropdown>

              <NavLink href="/departments" label="Departments" />

              <NavDropdown
                label="Government"
                isActive={activeDropdown === 'government'}
                onMouseEnter={() => handleMouseEnter('government')}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownLink href="/mayor-council" label="Council" />
                <DropdownLink href="/ordinances" label="Ordinances" />
                <DropdownLink href="/boards-committees" label="Boards & Committees" />
                <DropdownLink href="/environmental" label="Environment" />
              </NavDropdown>

              <NavLink href="/news" label="News" />
              <NavLink href="/about" label="About" />
              <NavLink href="/references" label="References" />
            </div>

            {/* Right: Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-deep-navy hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/sign-in"
                className="hidden md:flex items-center gap-2 px-5 py-2 border-2 border-primary text-primary rounded-full font-nunito font-semibold hover:bg-primary hover:text-white transition-all hover:shadow-lg"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-deep-navy hover:text-primary transition-colors relative w-10 h-10 flex items-center justify-center"
                aria-label="Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
                    }`} />
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                  <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
                    }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 bg-white/80 backdrop-blur-xl shadow-2xl z-[60] transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <GiWaves className="text-primary text-2xl" />
              <span className="font-nunito font-bold text-xl text-deep-navy">Port Laken</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-deep-navy hover:text-primary relative w-10 h-10 flex items-center justify-center"
              aria-label="Close Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block h-0.5 w-full bg-current transform rotate-45 translate-y-2" />
                <span className="block h-0.5 w-full bg-current opacity-0" />
                <span className="block h-0.5 w-full bg-current transform -rotate-45 -translate-y-2" />
              </div>
            </button>
          </div>

          <div className="space-y-2">
            <MobileDropdown label="Community Hub">
              <MobileLink href="/resource-directory" label="Resource Directory" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/events" label="Events" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/map" label="Map" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/submit-resource" label="Submit a Resource" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/community-stories" label="Community Stories" onClick={() => setMobileMenuOpen(false)} />
            </MobileDropdown>

            <MobileDropdown label="Residents">
              <MobileLink href="/living-in-portlaken" label="Life" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/forms" label="Forms & Applications" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/employment" label="Employment" onClick={() => setMobileMenuOpen(false)} />
            </MobileDropdown>

            <MobileNavLink href="/departments" label="Departments" onClick={() => setMobileMenuOpen(false)} />

            <MobileDropdown label="Government">
              <MobileLink href="/mayor-council" label="Council" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/ordinances" label="Ordinances" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/boards-committees" label="Boards & Committees" onClick={() => setMobileMenuOpen(false)} />
              <MobileLink href="/environmental" label="Environment" onClick={() => setMobileMenuOpen(false)} />
            </MobileDropdown>

            <MobileNavLink href="/news" label="News" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/about" label="About" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/references" label="References" onClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/sign-in"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white rounded-full font-nunito font-semibold hover:bg-primary/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[55] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xl z-[70] flex items-start justify-center pt-32"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl mx-4 p-6 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b-2 border-primary pb-3">
              <Search className="w-6 h-6 text-primary" />
              <input
                type="text"
                placeholder="Search Port Laken..."
                className="flex-1 text-lg font-nunito text-deep-navy outline-none bg-transparent"
                autoFocus
              />
            </div>
            <div className="mt-4 text-sm text-gray-500 font-nunito">
              Start typing to search...
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// NavLink Component
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative font-nunito font-semibold text-deep-navy hover:text-primary transition-colors group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

// NavDropdown Component
function NavDropdown({
  label,
  children,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  label: string;
  children: React.ReactNode;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center gap-1 font-nunito font-semibold text-deep-navy hover:text-primary transition-colors group">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-6 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-lg border border-white/20 py-3 min-w-[240px] animate-fadeIn">
          {children}
        </div>
      )}

    </div>
  );
}
function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-6 py-2.5 font-nunito text-deep-navy hover:bg-primary/10 hover:text-primary transition-colors rounded-lg"
    >
      {label}
    </Link>
  );
}

// Mobile Components
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 font-nunito font-semibold text-deep-navy hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 font-nunito font-semibold text-deep-navy hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-1 ml-4 space-y-1 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2.5 font-nunito text-sm text-deep-navy hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );
}
