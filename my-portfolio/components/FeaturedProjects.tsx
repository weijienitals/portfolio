'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Close modal when clicking outside or pressing ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const featuredProjects = [
    {
      title: "VolunteerConnect",
      period: "Aug 2024 – Dec 2024",
      description: "A comprehensive web platform designed to facilitate volunteerism in Singapore, connecting volunteers with meaningful opportunities.",
      longDescription: "VolunteerConnect is a full-stack web application that bridges the gap between volunteers and nonprofit organizations in Singapore. The platform features user authentication, advanced search filters, real-time notifications, and an admin dashboard for managing volunteer opportunities.",
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Firebase"],
      category: "Web Development",
      status: "Completed",
      impact: "Connecting 500+ volunteers with local nonprofits",
      github: "#",
      demo: "#",
      image: "/images/volunteer.png",
      features: [
        "User authentication and profile management",
        "Advanced search and filtering system",
        "Real-time messaging between volunteers and organizations",
        "Event scheduling and calendar integration",
        "Volunteer hours tracking and certification",
        "Admin dashboard for organization management"
      ],
      challenges: [
        "Implementing real-time notifications using Firebase",
        "Creating responsive design for mobile users",
        "Optimizing database queries for large datasets"
      ]
    },
    {
      title: "Parade Card Game",
      period: "Jan 2025 – Mar 2025",
      description: "A digital implementation of the classic Parade card game built with Java, showcasing advanced object-oriented programming principles.",
      longDescription: "A comprehensive digital recreation of the popular Parade card game, featuring AI opponents, multiplayer functionality, and an intuitive GUI. The project demonstrates advanced Java concepts including design patterns, unit testing, and clean architecture.",
      technologies: ["Java", "OOP", "Design Patterns", "JUnit", "Maven"],
      category: "Game Development",
      status: "In Progress",
      impact: "Demonstrating advanced Java programming skills",
      github: "#",
      demo: "#",
      image: "images/parade.png",
      features: [
        "Complete game logic implementation",
        "AI opponents with difficulty levels",
        "Multiplayer support for up to 6 players",
        "Score tracking and game statistics",
        "Save/load game functionality",
        "Comprehensive unit test coverage"
      ],
      challenges: [
        "Implementing complex game state management",
        "Creating intelligent AI decision algorithms",
        "Ensuring thread-safe multiplayer functionality"
      ]
    },
    {
      title: "Food Ordering & Management System",
      period: "Dec 2024 – Feb 2025",
      description: "Real-time analytics dashboard for e-commerce businesses with predictive insights and automated reporting capabilities.",
      longDescription: "A comprehensive analytics platform that processes real-time e-commerce data to provide actionable insights for business growth. Features include predictive analytics, automated reporting, and interactive data visualizations.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Charts.js"],
      category: "Data Analytics",
      status: "In Progress",
      impact: "Helping businesses increase revenue by 25%",
      github: "#",
      demo: "#",
      image: "images/foodordering2.png",
      features: [
        "Real-time data processing and visualization",
        "Predictive analytics using machine learning",
        "Automated report generation and scheduling",
        "Interactive dashboards with drill-down capabilities",
        "Integration with popular e-commerce platforms",
        "Mobile-responsive design for on-the-go access"
      ],
      challenges: [
        "Processing large volumes of real-time data",
        "Implementing machine learning algorithms for predictions",
        "Creating responsive and interactive visualizations"
      ]
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div 
      className={`featured-project-card project-card-hover transition-all duration-800 ease-out cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      }`}
      style={{ 
        transitionDelay: `${600 + index * 200}ms` 
      }}
      onClick={() => openModal(project)}
    >
      <div className="featured-project-image-container">
        <img 
          src={project.image} 
          alt={`${project.title} preview`}
          className="featured-project-image"
        />
        {/* Centered hover overlay with eye icon and "View Details" */}
        <div className="project-hover-overlay">
          <div className="project-hover-content">
            <svg 
              className="w-12 h-12 text-white mb-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
              />
            </svg>
            <span className="view-details-text text-white font-semibold text-lg">View Details</span>
          </div>
        </div>
      </div>
      
      <div className="featured-project-content">
        <div className="featured-project-meta">
          <span className="featured-project-category">{project.category}</span>
          <span className="featured-project-period">{project.period}</span>
        </div>
        
        <h3 className="featured-project-title">{project.title}</h3>
        <p className="featured-project-description">{project.description}</p>
        
        <div className="featured-project-technologies">
          {project.technologies.slice(0, 4).map((tech: string, index: number) => (
            <span key={index} className="featured-project-tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="featured-project-tech-more">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const ProjectModal = () => {
    if (!selectedProject || !isModalOpen) return null;

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-header-content">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="modal-project-image"
              />
              <div className="modal-title-section">
                <div className="modal-meta">
                  <span className="modal-category">{selectedProject.category}</span>
                  <span className={`modal-status ${
                    selectedProject.status === 'Completed' ? 'status-completed' : 'status-in-progress'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-period">{selectedProject.period}</p>
              </div>
            </div>
            <button onClick={closeModal} className="modal-close-btn">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="modal-content">
            <div className="modal-description">
              <h3>Project Overview</h3>
              <p>{selectedProject.longDescription}</p>
            </div>

            <div className="modal-technologies">
              <h3>Technologies Used</h3>
              <div className="modal-tech-grid">
                {selectedProject.technologies.map((tech: string, index: number) => (
                  <span key={index} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-features">
              <h3>Key Features</h3>
              <ul className="modal-feature-list">
                {selectedProject.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-challenges">
              <h3>Technical Challenges</h3>
              <ul className="modal-challenge-list">
                {selectedProject.challenges.map((challenge: string, index: number) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="modal-impact">
              <h3>Project Impact</h3>
              <p className="modal-impact-text">{selectedProject.impact}</p>
            </div>

            <div className="modal-actions">
              <a 
                href={selectedProject.demo} 
                className="modal-btn modal-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Demo
              </a>
              <a 
                href={selectedProject.github} 
                className="modal-btn modal-btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className={`section-container bg-gray-50 transition-all duration-1000 ease-out ${
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and contributions to various software development projects
          </p>
        </div>
        
        <div className={`featured-projects-grid transition-all duration-1000 ease-out delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className={`featured-projects-cta transition-all duration-1000 ease-out delay-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/projects" className="view-all-projects-btn">
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="featured-projects-cta-text">
            Explore all my projects with filtering and detailed information
          </p>
        </div>
      </section>

      <ProjectModal />
    </>
  );
}