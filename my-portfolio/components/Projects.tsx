'use client';

import React, { useState } from 'react';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentUpcomingIndex, setCurrentUpcomingIndex] = useState(0);

  const projects = [
    {
      title: "VolunteerConnect",
      period: "Aug 2024 – Dec 2024",
      description: "A comprehensive web platform designed to facilitate volunteerism in Singapore, connecting volunteers with meaningful opportunities.",
      longDescription: "Developed a full-featured web platform using modern JavaScript frameworks to bridge the gap between volunteers and nonprofit organizations in Singapore. The platform provides a seamless experience for users to discover, engage with, and contribute to various charitable causes.",
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Firebase"],
      features: [
        "Integrated Every.org API to display nonprofit organizations",
        "Seamless donation system with secure payment processing",
        "Responsive design optimized for all devices and screen sizes",
        "Real-time data synchronization with Firebase backend",
        "Advanced search and filtering capabilities for volunteer opportunities"
      ],
      highlights: [
        "Enhanced UI/UX for accessibility across different devices",
        "Successfully integrated third-party APIs for nonprofit data",
        "Implemented secure user authentication and authorization system",
        "Achieved 95% user satisfaction in beta testing phase"
      ],
      category: "Web Development",
      status: "Completed",
      impact: "Connecting 500+ volunteers with local nonprofits",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Parade Card Game",
      period: "Jan 2025 – Mar 2025",
      description: "A digital implementation of the classic Parade card game built with Java, showcasing advanced object-oriented programming principles.",
      longDescription: "Designed and developed a fully functional digital version of the Parade card game, emphasizing clean code architecture, scalable design patterns, and an intuitive user interface. The project demonstrates mastery of software engineering principles and game development concepts.",
      technologies: ["Java", "OOP", "Design Patterns", "JUnit", "Maven"],
      features: [
        "Solid Object-Oriented Programming implementation",
        "Complete game logic with accurate scoring mechanics",
        "Interactive player system with AI opponents",
        "Comprehensive unit testing suite with 90%+ coverage",
        "Modular architecture supporting easy feature additions"
      ],
      highlights: [
        "Applied industry best practices for maintainability and scalability",
        "Implemented multiple design patterns including Strategy and Observer",
        "Created intuitive player interaction system with smooth gameplay",
        "Achieved clean code metrics with comprehensive documentation"
      ],
      category: "Game Development",
      status: "In Progress",
      impact: "Demonstrating advanced Java programming skills",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const upcomingProjects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform with machine learning insights",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "Planning Phase",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "E-commerce Microservices Platform",
      description: "Scalable e-commerce solution with microservices architecture",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      status: "Architecture Design",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Team productivity platform with real-time features",
      technologies: ["Node.js", "Socket.io", "Vue.js", "MongoDB"],
      status: "Research Phase",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextUpcoming = () => {
    setCurrentUpcomingIndex((prev) => 
      prev === upcomingProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevUpcoming = () => {
    setCurrentUpcomingIndex((prev) => 
      prev === 0 ? upcomingProjects.length - 1 : prev - 1
    );
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
      <div className="project-card">
        <div className="project-header"></div>
        
        <div className="project-content">
          {/* Project Meta */}
          <div className="project-meta">
            <span className="professional-tag primary">
              {project.category}
            </span>
            <span className={`professional-tag ${
              project.status === 'Completed' 
                ? 'completed' 
                : 'in-progress'
            }`}>
              {project.status}
            </span>
          </div>

          <div className="project-title">{project.title}</div>
          <div className="project-period">{project.period}</div>
          <p className="project-description">{project.description}</p>

          {/* Technologies */}
          <div className="project-technologies">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="professional-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-blue-500 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Impact:</span> {project.impact}
            </p>
          </div>

          {/* Actions */}
          <div className="project-actions">
            <a href={project.github} className="btn-secondary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
            <a href={project.demo} className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    );
  };

  const UpcomingProjectCard = ({ project }: { project: any }) => {
    return (
      <div className="professional-card">
        {/* Project Image */}
        <div className="upcoming-project-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            className="upcoming-project-image"
            loading="lazy"
          />
          <div className="upcoming-project-image-overlay">
            <span className="professional-tag in-progress">
              {project.status}
            </span>
          </div>
        </div>
        
        <div className="upcoming-project-content">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
          <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="professional-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CarouselNavigation = ({ 
    onPrev, 
    onNext, 
    currentIndex, 
    totalItems,
    setIndex
  }: { 
    onPrev: () => void; 
    onNext: () => void; 
    currentIndex: number; 
    totalItems: number; 
    setIndex: (index: number) => void;
  }) => (
    <>
      {/* Left Navigation Button */}
      <button
        onClick={onPrev}
        className="carousel-nav-button carousel-nav-left"
        aria-label="Previous project"
        disabled={currentIndex === 0}
      >
        <svg 
          className="carousel-nav-icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={onNext}
        className="carousel-nav-button carousel-nav-right"
        aria-label="Next project"
        disabled={currentIndex === totalItems - 1}
      >
        <svg 
          className="carousel-nav-icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );

  const CarouselIndicators = ({ 
    currentIndex, 
    totalItems, 
    setIndex 
  }: { 
    currentIndex: number; 
    totalItems: number; 
    setIndex: (index: number) => void; 
  }) => (
    <div className="carousel-indicators-bottom">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => setIndex(index)}
          className={`carousel-indicator ${
            index === currentIndex ? 'active' : ''
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
      <span className="carousel-counter">
        {currentIndex + 1} of {totalItems}
      </span>
    </div>
  );

  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and contributions to various software development projects
        </p>
      </div>
      
      {/* Main Projects Carousel */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="carousel-container">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Side Navigation Buttons */}
          <CarouselNavigation
            onPrev={prevProject}
            onNext={nextProject}
            currentIndex={currentProjectIndex}
            totalItems={projects.length}
            setIndex={setCurrentProjectIndex}
          />
        </div>
        
        {/* Bottom Indicators
        <CarouselIndicators
          currentIndex={currentProjectIndex}
          totalItems={projects.length}
          setIndex={setCurrentProjectIndex}
        /> */}
      </div>
    </section>
  );
}