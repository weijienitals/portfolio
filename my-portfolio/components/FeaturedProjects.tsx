'use client';

import React from 'react';
import Link from 'next/link';

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "VolunteerConnect",
      period: "Aug 2024 – Dec 2024",
      description: "A comprehensive web platform designed to facilitate volunteerism in Singapore, connecting volunteers with meaningful opportunities.",
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Firebase"],
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
      technologies: ["Java", "OOP", "Design Patterns", "JUnit", "Maven"],
      category: "Game Development",
      status: "In Progress",
      impact: "Demonstrating advanced Java programming skills",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "E-commerce Analytics Dashboard",
      period: "Dec 2024 – Feb 2025",
      description: "Real-time analytics dashboard for e-commerce businesses with predictive insights and automated reporting capabilities.",
      technologies: ["Python", "Pandas", "React", "PostgreSQL", "Docker"],
      category: "Data Analytics",
      status: "Completed",
      impact: "Helping businesses increase revenue by 15%",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="featured-project-card">
      <div className="featured-project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="featured-project-image"
        />
        <div className="featured-project-image-overlay">
          <span className={`featured-project-status ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
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
        
        <div className="featured-project-impact">
          <span className="featured-project-impact-label">Impact:</span>
          <span className="featured-project-impact-text">{project.impact}</span>
        </div>
        
        <div className="featured-project-actions">
          <a 
            href={project.demo} 
            className="featured-project-btn featured-project-btn-primary"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
          <a 
            href={project.github} 
            className="featured-project-btn featured-project-btn-secondary"
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
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and contributions to various software development projects
        </p>
      </div>
      
      <div className="featured-projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      <div className="featured-projects-cta">
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
  );
}