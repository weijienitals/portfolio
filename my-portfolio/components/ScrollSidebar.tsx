'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SidebarProps {
  className?: string;
}

export default function ScrollSidebar({ className = '' }: SidebarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);

  // Navigation items matching your current sections
  const navItems = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  // Handle scroll events to show/hide sidebar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolling = Math.abs(currentScrollY - lastScrollYRef.current) > 10;
      
      if (isScrolling && currentScrollY > 200) {
        setIsVisible(true);
        
        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Set new timeout to hide after 2 seconds of no scrolling
        scrollTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className={`scroll-sidebar ${isVisible ? 'scroll-sidebar-visible' : ''} ${className}`}
      role="navigation"
      aria-label="Quick navigation"
    >
      <div className="scroll-sidebar-content">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`scroll-sidebar-item ${
              activeSection === id ? 'scroll-sidebar-item-active' : ''
            }`}
            aria-label={`Navigate to ${label} section`}
            title={label}
          >
            <span className="scroll-sidebar-icon">{icon}</span>
            <span className="scroll-sidebar-label">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}