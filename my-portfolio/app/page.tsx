import React from "react";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact" ;
import Navigation from "@/components/Navigation";




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
