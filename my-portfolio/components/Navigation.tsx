'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#home') {
      scrollToTop();
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass m-4 rounded-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            {/* Logo with Rainbow Text */}
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="rainbow-text">
                CHEAN WEI JIE
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm font-medium transition-all duration-300 hover:text-cyan-300 relative group text-white"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Enhanced Contact Button */}
              <div className="animated-border hover:scale-105 transition-transform">
                <a
                  href="mailto:Cheanweijie02@gmail.com"
                  className="animated-border-inner text-gray-800 font-medium block px-4 py-2"
                >
                  Let's Connect
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden glass p-2 rounded-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden glass rounded-2xl mt-4 p-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-white hover:text-cyan-300 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:Cheanweijie02@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full font-medium transition-all duration-300 text-center hover:scale-105"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}