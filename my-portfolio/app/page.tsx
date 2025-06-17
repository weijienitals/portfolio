import React from "react";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";

// Hero Section Component
const HeroSection = () => {
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

        {/* Professional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">2+</div>
            <div className="text-gray-600">Years at SMU</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-gray-600">Leadership Roles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A dedicated software developer with a passion for innovation and
          continuous learning
        </p>
      </div>

      <div className="grid-2 items-center">
        <div className="space-y-6">
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

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="professional-tag primary">Problem Solver</span>
            <span className="professional-tag primary">Team Player</span>
            <span className="professional-tag primary">Quick Learner</span>
            <span className="professional-tag primary">Detail Oriented</span>
          </div>
        </div>

        <div className="professional-card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Core Values
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🎯</span>
              <div>
                <h4 className="font-semibold text-gray-900">Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Striving for the highest quality in every project
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🚀</span>
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Embracing new technologies and creative solutions
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🤝</span>
              <div>
                <h4 className="font-semibold text-gray-900">Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  Working together to achieve common goals
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">📚</span>
              <div>
                <h4 className="font-semibold text-gray-900">Growth</h4>
                <p className="text-gray-600 text-sm">
                  Continuous learning and professional development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="section-container bg-white">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to collaborate or discuss opportunities? I'd love to hear from
          you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact Methods */}
        <div className="grid-3 mb-12">
          {/* Email Card */}
          <div className="professional-card text-center">
            <div
              className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: "var(--color-accent)",
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
              className="btn-secondary text-sm"
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
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              Available in Singapore
            </p>
          </div>
        </div>

        {/* Availability Status */}
        <div
          className="professional-card text-center"
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
            18 August 2025 – 30 December 2025
          </p>
        </div>
      </div>
    </section>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
      </div>
    </nav>
  );
};

// Main Portfolio Page Component
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <FeaturedProjects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Chean Wei Jie. Built with passion and modern web
              technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
