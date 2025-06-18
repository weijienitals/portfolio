// components/Navigation.tsx
import React from "react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              Chean Wei Jie
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
