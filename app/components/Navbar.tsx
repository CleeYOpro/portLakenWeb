'use client';

import React, { useState, useEffect } from 'react';
import { GiWaves } from 'react-icons/gi';
import { Search, LogIn, ChevronDown, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
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

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out border border-white/20 backdrop-blur-3xl shadow-md ${scrolled ? 'rounded-b-3xl' : 'rounded-b-3xl'}`}
        style={{
          backgroundColor: 'rgba(241, 245, 249, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-6 max-w-[80rem] mx-auto">
          <div className="flex items-center justify-center h-20 relative">
            {/* Left: Logo */}
            <div className="absolute left-6">
              <Link
                href="/"
                className="flex items-center gap-3 group font-nunito -translate-y-[1px] font-bold"
              >
                <Image
                  src="/Port Laken (6 x 2 in) (6 x 1.6 in) (6 x 6 in).svg"
                  alt="Port Laken"
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.04] -translate-y-[1px]"
                />
                <span className="text-xl font-bold text-deep-navy tracking-tight group-hover:text-primary transition-colors -translate-y-[1px]">
                  Port Laken
                </span>
              </Link>
            </div>



            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <NavLink href="/about" label="About" />
              <NavLink href="/resource-directory" label="Resources" />
              <NavLink href="/events" label="Events" />
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
                <DropdownLink href="/careers" label="Employment" />
              </NavDropdown>
              <NavDropdown
                label="Residents"
                isActive={activeDropdown === 'residents'}
                onMouseEnter={() => handleMouseEnter('residents')}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownLink href="/living-in-portlaken" label="Life" />
                <DropdownLink href="/news" label="News" />
                <DropdownLink href="/forms" label="Forms & Applications" />
                <DropdownLink href="/under-construction" label="Map" />
                <DropdownLink href="/under-construction" label="Community Stories" />
              </NavDropdown>
              <NavLink href="/references" label="References" />
            </div>

            {/* Right: Quick Actions */}
            <div className="absolute right-6 flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-deep-navy hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>

              {user ? (
                // User is logged in - show profile menu
                <div className="relative group">
                  <button
                    className="flex items-center gap-2 px-5 py-2 border-2 border-primary text-primary rounded-full font-nunito font-semibold hover:bg-primary hover:text-white transition-all hover:shadow-lg"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden md:inline">Account</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <Link
                      href="/alerts"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">notifications</span>
                      Alerts Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                // User is not logged in - show sign in button
                <Link
                  href="/sign-in"
                  className="hidden md:flex items-center gap-2 px-5 py-2 border-2 border-primary text-primary rounded-full font-nunito font-semibold hover:bg-primary hover:text-white transition-all hover:shadow-lg"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-deep-navy hover:text-primary transition-colors relative w-10 h-10 flex items-center justify-center"
                aria-label="Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`} />
                  <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        user={user}
        onLogout={handleLogout}
      />

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
              <SearchInput setSearchOpen={setSearchOpen} />
            </div>
            <div className="mt-4 text-sm text-gray-500 font-nunito">
              Start typing and press Enter to search...
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
      <button className="flex items-center gap-1 font-nunito font-semibold text-deep-navy hover:text-primary transition-colors group relative">
        <span className="relative inline-block">
          {label}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180' : ''}`}
        />
      </button>


      {isActive && (
        <div
          className="absolute top-full left-0 mt-8 rounded-2xl border  shadow-sm min-w-[240px] animate-fadeIn"
          style={{
            zIndex: 60,
            backgroundColor: 'rgba(241, 245, 249, 0.7)', // increased transparency for more blur effect
            backdropFilter: 'blur(100px)', // increased blur amount
            WebkitBackdropFilter: 'blur(100px)', // increased blur amount
          }}
        >
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
      className="block px-6 py-2.5 font-nunito font-semibold text-deep-navy hover:bg-primary/10 hover:text-primary transition-colors rounded-lg group"
    >
      <span className="relative inline-block">
        {label}
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
      </span>
    </Link>

  );
}

// Mobile Menu Components
function MobileMenu({ mobileMenuOpen, setMobileMenuOpen, user, onLogout }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void, user: any, onLogout: () => void }) {
  return (
    <div
      className={`fixed inset-0 bg-white/80 backdrop-blur-xl shadow-2xl z-[60] transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
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
          <MobileNavLink href="/about" label="About" setMobileMenuOpen={setMobileMenuOpen} />
          <MobileNavLink href="/resource-directory" label="Resources" setMobileMenuOpen={setMobileMenuOpen} />
          <MobileNavLink href="/events" label="Events" setMobileMenuOpen={setMobileMenuOpen} />
          <MobileDropdown label="Departments" setMobileMenuOpen={setMobileMenuOpen}>
            <MobileLink href="/departments/fire" label="Fire" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/departments/police" label="Police" setMobileMenuOpen={setMobileMenuOpen} />
            {/* More department pages */}
          </MobileDropdown>
          <MobileDropdown label="Government" setMobileMenuOpen={setMobileMenuOpen}>
            <MobileLink href="/mayor-council" label="Council" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/ordinances" label="Ordinances" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/boards-committees" label="Boards & Committees" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/environmental" label="Environment" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/careers" label="Employment" setMobileMenuOpen={setMobileMenuOpen} />
          </MobileDropdown>
          <MobileDropdown label="Residents" setMobileMenuOpen={setMobileMenuOpen}>
            <MobileLink href="/living-in-portlaken" label="Life" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/news" label="News" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/forms" label="Forms & Applications" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/under-construction" label="Map" setMobileMenuOpen={setMobileMenuOpen} />
            <MobileLink href="/under-construction" label="Community Stories" setMobileMenuOpen={setMobileMenuOpen} />
          </MobileDropdown>
          <MobileNavLink href="/references" label="References" setMobileMenuOpen={setMobileMenuOpen} />
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          {user ? (
            <div className="space-y-2">
              <div className="px-4 py-3 font-nunito font-semibold text-deep-navy truncate">
                Signed in as: {user.email}
              </div>
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white rounded-full font-nunito font-semibold hover:bg-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                Dashboard
              </Link>
              <Link
                href="/alerts"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white rounded-full font-nunito font-semibold hover:bg-primary/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-base">notifications</span>
                Alerts Settings
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-red-500 text-white rounded-full font-nunito font-semibold hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white rounded-full font-nunito font-semibold hover:bg-primary/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" />
                Sign In
              </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({ href, label, setMobileMenuOpen }: { href: string; label: string; setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className="block px-4 py-3 font-nunito font-semibold text-deep-navy hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileDropdown({ label, children, setMobileMenuOpen }: { label: string; children: React.ReactNode; setMobileMenuOpen: (open: boolean) => void }) {
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
      {isOpen && <div className="mt-1 ml-4 space-y-1">{children}</div>}
    </div>
  );
}

function MobileLink({ href, label, setMobileMenuOpen }: { href: string; label: string; setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className="block px-4 py-2.5 font-nunito font-semibold text-deep-navy hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );
}

function SearchInput({ setSearchOpen }: { setSearchOpen: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      setSearchOpen(false);
      router.push(`/resource-directory?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search Port Laken..."
      className="flex-1 text-lg font-nunito text-deep-navy outline-none bg-transparent"
      autoFocus
    />
  );
}