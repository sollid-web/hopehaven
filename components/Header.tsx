'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/children', label: 'Children' },
  { href: '/events', label: 'Events' },
  { href: '/programs', label: 'Programs' },
  { href: '/partners', label: 'Partners' },
  { href: '/adoptions', label: 'Adoptions' },
  { href: '/caregivers', label: 'Caregivers' },
  { href: '/donations', label: 'Donations' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/visit', label: 'Visit' },
  { href: '/policies', label: 'Policies' },
  { href: '/transparency', label: 'Transparency' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-narrow">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Hope Haven</span>
          </Link>

          <ul className="hidden md:flex md:space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-gray-300'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="text-gray-300 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 bg-background/95">
          <nav className="container-narrow py-2">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-2 py-3 text-sm font-medium transition-colors hover:text-primary',
                      pathname === link.href ? 'text-primary' : 'text-gray-300'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
