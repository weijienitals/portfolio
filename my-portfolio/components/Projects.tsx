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
      demo: "#",
      color: "blue"
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
      color: "purple"
    }
  ];

  const upcomingProjects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Business intelligence platform with machine learning insights",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "Planning Phase",
      color: "green"
    },
    {
      title: "E-commerce Microservices Platform",
      description: "Scalable e-commerce solution with microservices architecture",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      status: "Architecture Design",
      color: "orange"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Team productivity platform with real-time features",
      technologies: ["Node.js", "Socket.io", "Vue.js", "MongoDB"],
      status: "Research Phase",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        tag: "bg-blue-100 text-blue-800"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        tag: "bg-purple-100 text-purple-800"
      },
      green: {
        gradient: "from-green-500 to-green-600",
        light: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        tag: "bg-green-100 text-green-800"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        tag: "bg-orange-100 text-orange-800"
      },
      pink: {
        gradient: "from-pink-500 to-pink-600",
        light: "bg-pink-50",
        border: "border-pink-200",
        text: "text-pink-600",
        tag: "bg-pink-100 text-pink-800"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const colors = getColorClasses(project.color);
    
    return (
      <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden ${
        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
      }`}>
        {/* Project Header */}
        <div className={`h-2 bg-gradient-to-r ${colors.gradient}`}></div>
        
        <div className="p-8">
          {/* Status and Category Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colors.tag}`}>
              {project.category}
            </span>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-orange-100 text-orange-800'
            }`}>
              {project.status}
            </span>
            <span className="ml-auto text-sm text-gray-500 font-medium">{project.period}</span>
          </div>
          
          {/* Project Title and Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className={`w-3 h-3 bg-gradient-to-r ${colors.gradient} rounded-full mr-3`}></span>
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
            <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
          </div>
          
          {/* Impact Badge */}
          <div className={`${colors.light} border ${colors.border} rounded-lg p-4 mb-6`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mr-3`}>
                <span className="text-white text-sm">📈</span>
              </div>
              <div>
                <h4 className={`font-semibold ${colors.text} text-sm`}>Project Impact</h4>
                <p className="text-gray-600 text-sm">{project.impact}</p>
              </div>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-lg mr-2">🔧</span>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <span key={i} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-lg mr-2">✨</span>
                Key Features
              </h4>
              <ul className="space-y-3">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start group">
                    <span className={`w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                    <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-lg mr-2">🎯</span>
                Project Highlights
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((highlight: string, i: number) => (
                  <li key={i} className="flex items-start group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <a 
              href={project.github}
              className={`flex-1 bg-gradient-to-r ${colors.gradient} text-white text-center py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105`}
            >
              View Code
            </a>
            <a 
              href={project.demo}
              className={`flex-1 border-2 ${colors.border} ${colors.text} text-center py-3 rounded-lg hover:bg-gradient-to-r hover:${colors.gradient} hover:text-white transition-all duration-300 font-medium`}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent projects that demonstrate technical expertise, problem-solving abilities, 
            and passion for creating innovative solutions. Each project represents a unique challenge and 
            learning experience in my development journey.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          {/* Upcoming Projects */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Projects</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Exciting projects currently in development that will showcase new technologies and innovative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => {
                const colors = getColorClasses(project.color);
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className={`${colors.tag} px-2 py-1 rounded text-xs font-medium`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`${colors.tag} px-3 py-1 rounded-full text-xs font-semibold`}>
                          {project.status}
                        </span>
                        <span className="text-xs text-gray-500">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and explore innovative technologies. 
                Let's discuss how we can create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:Cheanweijie02@gmail.com?subject=Project Collaboration"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start a Project
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}