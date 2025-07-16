'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const allProjects = [
    {
      title: "VolunteerConnect",
      period: "Aug 2024 – Dec 2024",
      description: "A comprehensive web platform designed to facilitate volunteerism in Singapore, connecting volunteers with meaningful opportunities.",
      longDescription: "Developed a full-featured web platform using modern JavaScript frameworks to bridge the gap between volunteers and nonprofit organizations in Singapore. The platform provides a seamless experience for users to discover, engage with, and contribute to various charitable causes.",
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Firebase"],
      category: "Web Development",
      status: "Completed",
      impact: "Connecting 500+ volunteers with local nonprofits",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      title: "Parade Card Game",
      period: "Jan 2025 – Mar 2025",
      description: "A digital implementation of the classic Parade card game built with Java, showcasing advanced object-oriented programming principles.",
      longDescription: "Designed and developed a fully functional digital version of the Parade card game, emphasizing clean code architecture, scalable design patterns, and an intuitive user interface.",
      technologies: ["Java", "OOP", "Design Patterns", "JUnit", "Maven"],
      category: "Game Development",
      status: "In Progress",
      impact: "Demonstrating advanced Java programming skills",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      title: "E-commerce Analytics Dashboard",
      period: "Dec 2024 – Feb 2025",
      description: "Real-time analytics dashboard for e-commerce businesses with predictive insights and automated reporting capabilities.",
      longDescription: "Built a comprehensive analytics platform that processes real-time e-commerce data to provide actionable insights for business growth and optimization.",
      technologies: ["Python", "Pandas", "React", "PostgreSQL", "Docker"],
      category: "Data Analytics",
      status: "Completed",
      impact: "Helping businesses increase revenue by 15%",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      title: "Personal Finance Tracker",
      period: "Sep 2024 – Nov 2024",
      description: "Mobile-first personal finance application with budget tracking, expense categorization, and savings goals.",
      longDescription: "Developed a comprehensive personal finance management application with intelligent categorization, budget alerts, and financial goal tracking.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      category: "Mobile Development",
      status: "Completed",
      impact: "Helping users save 20% more on average",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      title: "University Course Scheduler",
      period: "Jun 2024 – Aug 2024",
      description: "Automated course scheduling system using optimization algorithms to minimize conflicts and maximize preferences.",
      longDescription: "Created an intelligent scheduling system that uses advanced algorithms to automatically generate optimal course schedules based on student preferences and constraints.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      category: "Web Development",
      status: "Completed",
      impact: "Reduced scheduling conflicts by 80%",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      title: "Stock Market Predictor",
      period: "Mar 2024 – May 2024",
      description: "Machine learning model to predict stock prices using historical data and sentiment analysis from news articles.",
      longDescription: "Developed a sophisticated machine learning pipeline that combines technical analysis with natural language processing to predict stock market movements.",
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "API Integration"],
      category: "Data Analytics",
      status: "Completed",
      impact: "Achieved 72% prediction accuracy",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false
    }
  ];

  const categories = ['all', ...new Set(allProjects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Web Development': return '🌐';
      case 'Data Analytics': return '📊';
      case 'Mobile Development': return '📱';
      case 'Game Development': return '🎮';
      default: return '🔧';
    }
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="project-grid-card">
      <div className="project-grid-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-grid-image"
        />
        <div className="project-grid-image-overlay">
          <span className={`project-grid-status ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="project-grid-content">
        <div className="project-grid-meta">
          <span className="project-grid-category">{project.category}</span>
          <span className="project-grid-period">{project.period}</span>
        </div>
        
        <h3 className="project-grid-title">{project.title}</h3>
        <p className="project-grid-description">{project.description}</p>
        
        <div className="project-grid-technologies">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span key={index} className="project-grid-tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="project-grid-tech-more">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="project-grid-impact">
          <span className="project-grid-impact-label">Impact:</span>
          <span className="project-grid-impact-text">{project.impact}</span>
        </div>
        
        <div className="project-grid-actions">
          <a 
            href={project.demo} 
            className="project-grid-btn project-grid-btn-primary"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
          <a 
            href={project.github} 
            className="project-grid-btn project-grid-btn-secondary"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Professional Navigation */}
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

        {/* Projects Grid */}
        <div className="projects-grid-container">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>


      </div>
    </div>
  );
}