import React from "react";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollSidebar from "@/components/ScrollSidebar"; // Add this import

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
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Add the ScrollSidebar component */}
      <ScrollSidebar />
      
      {/* New Professional Footer */}
      <Footer />
    </div>
  );
}