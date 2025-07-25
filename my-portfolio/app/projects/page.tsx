'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom function to navigate back and scroll to projects section
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Navigate to main page
    window.location.href = '/#projects';
    
    // Small delay to ensure page loads, then scroll to projects
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

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

  const allProjects = [
    {
      title: "Portfolio Website",
      description: "A comprehensive web platform designed to facilitate volunteerism in Singapore, connecting volunteers with meaningful opportunities.",
      longDescription: "VolunteerConnect is a full-stack web application that bridges the gap between volunteers and nonprofit organizations in Singapore. The platform features user authentication, advanced search filters, real-time notifications, and an admin dashboard for managing volunteer opportunities.",
      technologies: ["JavaScript", "HTML", "CSS", "Next.js", "TypeScript","React","Tailwind CSS"],
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/weijienitals/portfolio/tree/main/my-portfolio",
      demo: "#",
      image: "/images/portfolio.png",
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
      ],
      featured: true
    },
    {
      title: "LateMate",
      description: "A digital implementation of the classic Parade card game built with Java, showcasing advanced object-oriented programming principles.",
      longDescription: "A recreation of the popular Parade card game, featuring Computer opponents, multiplayer functionality, and an intuitive GUI. The project demonstrates essential Java OOP concepts such as encapsulation, inheritance, and modular design.",
      technologies: ["Java", "OOP", "Design Patterns", "JUnit", "Maven"],
      category: "UI/UX",
      status: "Completed",
      github: "https://github.com/weijienitals/Parade_Card_Game",
      demo: "https://www.figma.com/proto/f4mIMmDvcGxxJsWiIVYXes/IDP-G7T3?node-id=307-816&starting-point-node-id=307%3A816&t=RDjux8mOG4TGcNAJ-1",
      image: "/images/latemate.png",
      features: [
        "Complete game logic implementation",
        "Multiplayer support for up to 6 players",
        "Score tracking and game statistics",
        "Intuitive user interface design",
        "Computer AI opponents with different difficulty levels"
      ],
      challenges: [
        "Implementing complex game logic and state management",
        "Writing clean code with OOP principles",
        "Developing intelligent computer opponents"
      ],
      featured: true
    },
    // {
    //   title: "Food Ordering & Management System",
    //   period: "Dec 2024 – Feb 2025",
    //   description: "A comprehensive food ordering and management system enabling multi-vendor ordering, group payment splitting, and vendor order management.",
    //   longDescription: "Full-stack food ordering platform supporting single and multi-vendor orders with integrated group payment splitting functionality and comprehensive vendor management tools.",
    //   technologies: ["Python", "Vue.js", "Flask", "Docker", "Kong"],
    //   category: "Fullstack Development",
    //   status: "Completed",
    //   impact: "Helping businesses increase revenue by 25%",
    //   github: "https://github.com/weijienitals/ESD-PROJ",
    //   demo: "#",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    //   features: [
    //     "Multi-vendor food ordering system",
    //     "Group payment splitting functionality",
    //     "Real-time order tracking and updates",
    //     "Vendor management dashboard",
    //     "Integration with payment gateways",
    //     "Mobile-responsive design"
    //   ],
    //   challenges: [
    //     "Implementing complex payment splitting algorithms",
    //     "Managing multiple vendor integrations",
    //     "Ensuring real-time synchronization across services"
    //   ],
    //   featured: true
    // },
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => 
        project.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  // Get unique categories for filter buttons
  const categories = ['all', ...Array.from(new Set(allProjects.map(p => p.category)))];
  
  const getCategoryCount = (category: string) => {
    return category === 'all' ? allProjects.length : allProjects.filter(p => p.category === category).length;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'Web Development': '🌐',
      'Mobile Development': '📱',
      'Game Development': '🎮',
      'Machine Learning': '🤖',
      'Data Analytics': '📊',
      'IoT Development': '🏠',
      'Fullstack Development': '💻'
    };
    return iconMap[category] || '💻';
  };

  // Modal functions
  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Project Card Component
  const ProjectCard = ({ project }: { project: any }) => (
    <div 
      className="featured-project-card project-card-hover cursor-pointer"
      onClick={() => openModal(project)}
    >
      {/* Image Container - Same as Featured Projects */}
      <div className="featured-project-image-container">
        <img 
          src={project.image} 
          alt={`${project.title} preview`}
          className="featured-project-image"
        />
        
        {/* Hover Overlay */}
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
      
      {/* Content - Same Structure as Featured Projects */}
      <div className="featured-project-content">
        <div className="featured-project-meta">
          <span className="featured-project-category">{project.category}</span>
        </div>
        
        <h3 className="featured-project-title">{project.title}</h3>
        <p className="featured-project-description">{project.description}</p>
        
        {/* Technologies - Same as Featured Projects */}
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

  // Project Modal Component
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

            {/* <div className="modal-impact">
              <h3>Project Impact</h3>
              <p className="modal-impact-text">{selectedProject.impact}</p>
            </div> */}

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
      <div className="min-h-screen bg-gray-50">
        {/* Original Navigation Structure */}
        <nav className="professional-nav">
          <div className="professional-nav-container">
            <button onClick={handleBackToProjects} className="modern-back-btn">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Portfolio</span>
            </button>
            
            <div className="modern-page-title">
              <h1>All Projects</h1>
              <span className="project-count">{allProjects.length} projects</span>
            </div>
            
            <div className="nav-spacer"></div>
          </div>
        </nav>

        <div className="section-container">
          {/* Professional Section Header */}
          <div className="professional-section-header">
            <p className="professional-section-subtitle">
              Explore my complete portfolio of software development projects across various technologies and domains
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="projects-filter-container">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`projects-filter-button ${
                  selectedCategory === category ? 'projects-filter-active' : ''
                }`}
              >
                {category === 'all' ? (
                  <>
                    <span className="projects-filter-icon">🎯</span>
                    <span>All Projects</span>
                    <span className="projects-filter-count">({allProjects.length})</span>
                  </>
                ) : (
                  <>
                    <span className="projects-filter-icon">{getCategoryIcon(category)}</span>
                    <span>{category}</span>
                    <span className="projects-filter-count">
                      ({allProjects.filter(project => project.category === category).length})
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid - Using Featured Projects Styling */}
          <div className="featured-projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal />
    </>
  );
}