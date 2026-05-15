'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import { navConfig } from '@/data/nav';
import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Removed effect that set state synchronously on pathname change, as per React best practices. (Reset should be handled via explicit handlers on navigation.)


  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (item: NavItem): boolean => {
    if (item.href) return pathname === item.href || pathname.startsWith(item.href + '/');
    if (item.children) return item.children.some((child) => child.href && pathname.startsWith(child.href));
    return false;
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Top Utility Bar - IEEE Style */}
      <div className="bg-[#08283C] text-white/90 border-b border-white/5 relative z-[60]">
        <div className="container-wide flex justify-between items-center h-10">
          {/* Left: Global IEEE Links */}
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <Link href="https://www.ieee.org" className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] hover:text-white hover:bg-[#0C527D] transition-all px-4 h-10 flex items-center">
                IEEE.org
              </Link>
              <div className="w-px h-3 bg-white/10" />
              <Link href="https://www.comsoc.org" className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] hover:text-white hover:bg-[#0C527D] transition-all px-4 h-10 flex items-center">
                IEEE ComSoc
              </Link>
              <div className="w-px h-3 bg-white/10" />
              <Link href="https://dl.ieee.org/Xplore/home.jsp" className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] hover:text-white hover:bg-[#0C527D] transition-all px-4 h-10 flex items-center">
                IEEE Xplore
              </Link>
              <div className="hidden sm:block w-px h-3 bg-white/10" />
              <button className="hidden sm:flex text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] hover:text-white hover:bg-[#0C527D] transition-all px-4 h-10 items-center gap-2">
                More Sites <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
            </div>
          </div>

          {/* Right: Institutional Logos */}
          <div className="flex items-center gap-6 h-full">
            <Link href="https://www.comsoc.org" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/comsoc-logo.png" alt="IEEE ComSoc" className="h-4 w-auto brightness-0 invert" width={100} height={16} />
            </Link>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <Link href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/ieee-logo.png" alt="IEEE" className="h-4 w-auto brightness-0 invert" width={70} height={16} />
            </Link>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-shadow duration-300',
          scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'
        )}
        role="banner"
      >
        <div className="container-wide flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="OAIC 2026 - Home">
            <Image src="/images/logo.png" alt="OAIC 2026 Logo" className="h-12" width={160} height={48} priority />
          </Link>

          <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
            {navConfig.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href || '#'}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors',
                    isActive(item) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-[220px] bg-white border border-gray-200 rounded-md shadow-lg animate-slide-down"
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href!}
                        role="menuitem"
                        className={cn(
                          'block px-4 py-2.5 text-sm transition-colors',
                          pathname === child.href ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-100'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <form className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-primary-600">
                <Search className="w-4 h-4" />
              </button>
            </form>
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
        <div className="relative flex flex-col w-full max-w-xs h-full bg-white shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="OAIC 2026 Logo" className="h-10" width={120} height={400} />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navConfig.map((item) => (
              <MobileNavItem key={item.label} item={item} pathname={pathname} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const isActive = item.children?.some((c) => c.href && pathname.startsWith(c.href)) || (item.href && pathname.startsWith(item.href));

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className={cn(
          'block px-3 py-2 rounded-md text-base font-medium',
          isActive ? 'text-primary-700 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium',
          isActive ? 'text-primary-700 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
        )}
      >
        <span>{item.label}</span>
        <ChevronDown className={cn('w-5 h-5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="mt-1 ml-4 pl-3 border-l-2 border-gray-200 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href!}
              className={cn(
                'block px-3 py-2 rounded-md text-sm',
                pathname === child.href ? 'text-primary-600' : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
