'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/blogs', label: 'مقاله' },
    { href: '/projects', label: 'نمونه کار ها' },
    { href: '/about', label: 'درباره ما' },
    { href: '/contact', label: 'تماس با ما' },
  ];
    
const MenuIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DashboardIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h7v7H3V3zm11 0h7v4h-7V3zM3 14h7v7H3v-7zm11 3h7v4h-7v-4z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAdmin(authStatus === 'true');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={` px-5 md:px-0 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="edu-container flex items-center justify-between container mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-edu-text text-emerald-600">آلبا<span className="text-edu-purple"></span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map(({ href, label }) => (
            href=="/contact"? <Link key={href} href={href} className="ml-4 px-5 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200">{label}</Link>:  <Link
            key={href}
            href={href}
            className={`hover:text-emerald-600 transition-colors duration-200 nav-link py-2 ${isActive(href) ? 'text-edu-purple' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {label}
          </Link>
))}
        
          {isAdmin && (
            <Link href="/dashboard" className="ml-2 flex items-center gap-1 px-4 py-2 bg-edu-purple text-white rounded-full hover:bg-edu-purple/90 transition-colors duration-200">
              <DashboardIcon />
              <span>داشبورد</span>
            </Link>
          )}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-edu-text focus:outline-none" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <div className="edu-container flex flex-col items-center space-y-4">
          {navLinks.map(({ href, label }) => (
  <Link
    key={href}
    href={href}
    className={`nav-link py-2 ${isActive(href) ? 'text-edu-purple' : ''}`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    {label}
  </Link>
))}
            {isAdmin && (
              <Link href="/dashboard" className="flex items-center gap-1 py-2 text-edu-purple" onClick={() => setIsMobileMenuOpen(false)}>
                <DashboardIcon />
                <span>داشبورد</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
