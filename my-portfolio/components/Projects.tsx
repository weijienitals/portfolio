import React from 'react';

export default function Projects() {
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
      demo: "#"
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
      demo: "#"
    }
  ];

  const upcomingProjects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform with machine learning insights",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "Planning Phase"
    },
    {
      title: "E-commerce Microservices Platform",
      description: "Scalable e-commerce solution with microservices architecture",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      status: "Architecture Design"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Team productivity platform with real-time features",
      technologies: ["Node.js", "Socket.io", "Vue.js", "MongoDB"],
      status: "Research Phase"
    }
  ];

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

          {/* Project Title and Period */}
          <h3 className="project-title">{project.title}</h3>
          <p className="project-period">{project.period}</p>

          {/* Project Description */}
          <p className="project-description">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="project-technologies">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="professional-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {project.features.slice(0, 3).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact */}
          {project.impact && (
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Impact:</span> {project.impact}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="project-actions">
            <a href={project.github} className="btn-secondary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
            <a href={project.demo} className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
        <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech: string, i: number) => (
            <span key={i} className="professional-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <span className="professional-tag in-progress">
          {project.status}
        </span>
      </div>
    );
  };

  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and contributions to various software development projects
        </p>
      </div>
      
      {/* Main Projects */}
      <div className="grid-2 mb-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Upcoming Projects */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Upcoming Projects
        </h3>
        <div className="grid-3">
          {upcomingProjects.map((project, index) => (
            <UpcomingProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}