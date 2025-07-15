// components/hero.tsx - Typewriter + Fade Combination (Recommended)
"use client";
import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullName = "Chean Wei Jie";

  // Typewriter effect for name
  useEffect(() => {
    if (isVisible && !isTypingComplete) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedText(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      }, 100); // Adjust speed here (100ms per character)

      return () => clearInterval(typingInterval);
    } else if (!isVisible) {
      // Reset typewriter when section leaves viewport
      setDisplayedText("");
      setIsTypingComplete(false);
    }
  }, [isVisible, isTypingComplete]);

  // Intersection Observer for fade effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-container bg-white min-h-screen flex items-center"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <p
            className={`text-xl text-gray-600 mb-4 transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Hello, I'm
          </p>

          {/* Typewriter Name */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 min-h-[1.2em]">
            {displayedText}
            <span
              className={`${isTypingComplete ? "hidden" : "animate-pulse"}`}
            >
              |
            </span>
          </h1>

          {/* Subtitle appears after typing is complete */}
          <h2
            className={`text-2xl md:text-3xl font-semibold text-blue-600 mb-6 transition-all duration-800 ease-out ${
              isTypingComplete
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Fullstack Developer & Data Analytics Enthusiast
          </h2>
        </div>

        {/* Description appears after subtitle */}
        <p
          className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-800 ease-out delay-300 ${
            isTypingComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Information Systems student specializing in Business Analytics and AI,
          passionate about creating innovative solutions that bridge technology
          and business impact.
        </p>

        {/* Buttons appear last */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-800 ease-out delay-600 ${
            isTypingComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
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
              <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={2} />
              <path d="m22 7-10 5L2 7" strokeWidth={2} />
            </svg>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
