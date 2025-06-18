// components/HeroSection.tsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="section-container bg-white min-h-screen flex items-center">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xl text-gray-600 mb-4">Hello, I'm</p>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            Chean Wei Jie
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Fullstack Developer & Data Analytics Enthusiast
          </h2>
        </div>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Information Systems student specializing in Business Analytics and AI,
          passionate about creating innovative solutions that bridge technology
          and business impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#projects" className="btn-primary">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}