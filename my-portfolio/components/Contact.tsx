// Contact Section Component with Animation (Manual Implementation)
"use client";
import React, { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for fade effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset animation when section leaves viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
      id="contact" 
      className={`section-container bg-white transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`section-header transition-all duration-1000 ease-out delay-200 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to collaborate or discuss opportunities? I'd love to hear from
          you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact Methods */}
        <div className={`grid-3 mb-12 transition-all duration-1000 ease-out delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {/* Email Card */}
          <div className="professional-card text-center">
            <div
              className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: "var(--color-secondary)",
                color: "white",
              }}
            >
              <svg
                className="w-8 h-8"
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
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              Email
            </h3>
            <p
              className="text-sm mb-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Cheanweijie02@gmail.com
            </p>
            <a
              href="mailto:Cheanweijie02@gmail.com?subject=Let's Connect&body=Hi Wei Jie, I'm interested in discussing opportunities with you."
              className="btn-primary text-sm"
            >
              Send Email
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="professional-card text-center">
            <div
              className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: "var(--color-secondary)",
                color: "white",
              }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              LinkedIn
            </h3>
            <p
              className="text-sm mb-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Professional Network
            </p>
            <a
              href="http://www.linkedin.com/in/cheanweijie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Connect
            </a>
          </div>

          {/* Phone Card */}
          <div className="professional-card text-center">
            <div
              className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: "var(--color-primary)",
                color: "white",
              }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3
              className="font-semibold mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              Phone
            </h3>
            <p
              className="text-sm mb-3"
              style={{ color: "var(--color-text-secondary)" }}
            >
              +65 8358 2090
            </p>
            <a href="tel:+6583582090" className="btn-primary text-sm">
              Call Now
            </a>
          </div>
        </div>

        {/* Availability Status */}
        <div
          className={`professional-card text-center transition-all duration-1000 ease-out delay-600 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: "var(--color-surface)",
            border: "2px solid var(--color-accent)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "#27ae60" }}
            ></div>
            <h4
              className="font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Available for Internships
            </h4>
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
             5 Jan 2025 – 30 August 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;