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
      description: "A modern, responsive portfolio website showcasing my full-stack development skills, projects, and professional experience.",
      longDescription: "A comprehensive personal portfolio built with Next.js and TypeScript, featuring an interactive project showcase, skills visualization, and professional experience timeline. The website demonstrates modern web development practices with smooth animations, responsive design, and optimized performance across all devices.",
      technologies: ["JavaScript", "HTML", "CSS", "Next.js", "TypeScript", "React", "Tailwind CSS"],
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/weijienitals/portfolio/tree/main/my-portfolio",
      demo: "https://portfolio-nine-omega-78.vercel.app/#projects",
      image: "/images/portfolio.png",
      features: [
        "Responsive design optimized for all device sizes",
        "Interactive project showcase with detailed modal views",
        "Animated typing effect and smooth scroll animations",
        "Skills categorization with filter functionality",
        "Professional experience timeline and education section",
      ],
      challenges: [
        "Implementing smooth animations while maintaining performance",
        "Creating a responsive design that works across all devices",
        "Optimizing images and assets for fast loading times",
        "Building reusable components with TypeScript",
      ],
      featured: true
    },
    {
      title: "LateMate",
      description: "A comprehensive UI/UX design project focused on solving user pain points through design thinking methodology and iterative prototyping.",
      longDescription: "LateMate is a user-centered design project that applies design thinking principles and empathy mapping to understand and address specific user pain points. Through extensive user research, multiple prototype iterations in Figma, and data-driven A/B testing using R, this project demonstrates the complete UX design process from problem identification to solution validation.",
      technologies: ["Figma", "Design Thinking", "User Research", "A/B Testing", "R Programming", "Prototyping", "Empathy Mapping"],
      category: "UI/UX",
      status: "Completed",
      github: "https://github.com/weijienitals/Parade_Card_Game", // Update if you have a different repo for this project
      demo: "https://www.figma.com/proto/f4mIMmDvcGxxJsWiIVYXes/IDP-G7T3?node-id=307-816&starting-point-node-id=307%3A816&t=RDjux8mOG4TGcNAJ-1",
      image: "/images/latemate.png",
      features: [
        "Comprehensive user research and empathy mapping",
        "Multiple design iterations based on user feedback",
        "Interactive high-fidelity prototypes in Figma",
        "Statistical A/B testing analysis using R",
        "User journey mapping and pain point identification",
        "Accessibility-focused design considerations",
        "Data-driven design decisions and validation"
      ],
      challenges: [
        "Identifying and validating real user pain points through research",
        "Balancing user needs with technical constraints and business goals",
        "Conducting effective A/B testing and interpreting statistical results",
        "Iterating designs based on quantitative and qualitative feedback",
        "Ensuring accessibility and inclusive design principles"
      ],
      featured: true
    },
    {
      title: "Airflow Automation Project",
      period: "Aug 2025 – Nov 2025",
      description: "Making use of airflow to orchestrate a simple data pipeline to retrieve and load financial market data from youtube",
      longDescription: "Making use of airflow to orchestrate a simple data pipeline to retrieve and load financial market data from youtube",
      technologies: ["Python", "MongoDB", "Airflow"],
      category: "Data Engineering",
      status: "Completed",
      github: "https://github.com/weijienitals/apache_airflow_2",
      demo: "https://youtu.be/0HqiXK3186U",
      image: "/images/airflow_overview.png",
      features: [
        "Calling of youtube api to extract financial market data from youtube",
        "Automate extraction of data and loading of data into mongoDB",
      ],
      challenges: [
        "Making use of airflow to orchestrate data flow",
        "Cleaning of retrieved data from youtube",
      ],
      featured: true
    },
    {
      title: "Project Smart Meter London",
      period: "Aug 2025 – Nov 2025",
      description: "Building of efficient and scalable data pipeline using amazon web services to process smart meter data from kaggle",
      longDescription: "Building of efficient and scalable data pipeline using amazon web services to process smart meter data from kaggle",
      technologies: ["Python", "MongoDB", "Airflow","Github Actions","AWS S3","AWS Quicksight","AWS EC2","AWS Athena","AWS EMR"],
      category: "Data Engineering",
      status: "Completed",
      github: "https://github.com/weijienitals/project-smart-meter-london",
      demo: "https://youtu.be/G_Gi6utk91M",
      image: "/images/smart_meter_Pipeline.png",
      features: [
        "CI/CD pipeline using github actions to automate deployment of airflow dags to aws ec2 instance",
        "CI/CD pipeline using github actions to automate deployment of data cleaning scripts to S3 bucket",
        "Airflow to orchestrate data flow from S3 to EMR cluster for data processing",

      ],
      challenges: [
        "Creating Scripts to clean raw smart meter data",
        "Creating of CI/CD pipelines using github actions to automate deployment process",
        "Visualizing processed data using AWS Quicksight to answer business questions",
      ],
      featured: true
    }
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