// components/About.tsx - With Full Viewport Height
"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="about"
      className={`about-section bg-gray-50 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="about-container">
        <div className={`section-header text-center transition-all duration-1000 ease-out delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A dedicated software developer with a passion for innovation and
            continuous learning
          </p>
        </div>

        <div className="about-grid">
          <div className={`about-content transition-all duration-1000 ease-out delay-400 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate software developer with a strong foundation in
              computer science and hands-on experience in building web
              applications and digital solutions. My journey in technology has
              been driven by curiosity and a desire to solve real-world problems
              through code.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With expertise spanning multiple programming languages and
              frameworks, I enjoy working on diverse projects that challenge me to
              grow and learn. I believe in writing clean, maintainable code and
              following industry best practices to deliver high-quality solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with the
              developer community. I'm always eager to take on new challenges and
              collaborate with teams to build innovative solutions.
            </p>
            
            <div className={`technologies-section transition-all duration-1000 ease-out delay-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="technologies-title">Technologies I work with:</h3>
              <p className="technologies-list">
                JavaScript, TypeScript, React, Next.js, Node.js, Python, Java, Vue.js, Firebase
              </p>
            </div>
          </div>
          
          <div className={`about-image-container transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <img 
              src="/images/halfbody.png" 
              alt="Chean Wei Jie - Full Stack Developer"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}