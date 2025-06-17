'use client';

import React, { useState } from 'react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillsData = [
    // Programming Languages
    { 
      name: "Python", 
      category: "Programming Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776ab",
      level: "Advanced"
    },
    { 
      name: "JavaScript", 
      category: "Programming Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#f7df1e",
      level: "Advanced"
    },
    { 
      name: "Java", 
      category: "Programming Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ed8b00",
      level: "Intermediate"
    },
    { 
      name: "PHP", 
      category: "Programming Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777bb4",
      level: "Intermediate"
    },
    
    // Web Development
    { 
      name: "HTML", 
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#e34f26",
      level: "Expert"
    },
    { 
      name: "CSS", 
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572b6",
      level: "Expert"
    },
    { 
      name: "Vue.js", 
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      color: "#4fc08d",
      level: "Advanced"
    },
    { 
      name: "React", 
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61dafb",
      level: "Advanced"
    },
    
    // Data & Analytics
    { 
      name: "SQL", 
      category: "Data & Analytics",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#336791",
      level: "Advanced"
    },
    { 
      name: "NumPy", 
      category: "Data & Analytics",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      color: "#013243",
      level: "Intermediate"
    },
    { 
      name: "Pandas", 
      category: "Data & Analytics",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      color: "#150458",
      level: "Intermediate"
    },
    { 
      name: "Excel", 
      category: "Data & Analytics",
      icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
      color: "#217346",
      level: "Advanced"
    },
    
    // Tools & Platforms
    { 
      name: "Docker", 
      category: "Tools & Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ed",
      level: "Intermediate"
    },
    { 
      name: "Git", 
      category: "Tools & Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#f05032",
      level: "Advanced"
    },
    { 
      name: "Firebase", 
      category: "Tools & Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "#ffca28",
      level: "Intermediate"
    },
    { 
      name: "Azure", 
      category: "Tools & Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      color: "#0078d4",
      level: "Intermediate"
    },
  ];

  const categories = ['all', ...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Expert': return '#10b981'; // green
      case 'Advanced': return '#3b82f6'; // blue
      case 'Intermediate': return '#f59e0b'; // yellow
      case 'Beginner': return '#6b7280'; // gray
      default: return '#6b7280';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Programming Languages': return '💻';
      case 'Web Development': return '🌐';
      case 'Data & Analytics': return '📊';
      case 'Tools & Platforms': return '🛠️';
      default: return '🔧';
    }
  };

  return (
    <section className="section-container bg-white">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build innovative solutions and bring ideas to life
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="skills-filter-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`skills-filter-button ${
              selectedCategory === category ? 'skills-filter-active' : ''
            }`}
          >
            {category === 'all' ? (
              <>
                <span className="skills-filter-icon">🎯</span>
                <span>All Skills</span>
                <span className="skills-filter-count">({skillsData.length})</span>
              </>
            ) : (
              <>
                <span className="skills-filter-icon">{getCategoryIcon(category)}</span>
                <span>{category}</span>
                <span className="skills-filter-count">
                  ({skillsData.filter(skill => skill.category === category).length})
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      {/* Skills Tag Cloud */}
      <div className="skills-cloud-container">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-tag-item"
            style={{ 
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <div 
              className="skill-tag-icon-container" 
              style={{ backgroundColor: `${skill.color}15` }}
            >
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`}
                className="skill-tag-icon"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                }}
              />
            </div>
            <span className="skill-tag-name">{skill.name}</span>
            <div 
              className="skill-tag-level-indicator"
              style={{ backgroundColor: getLevelColor(skill.level) }}
              title={skill.level}
            ></div>
          </div>
        ))}
      </div>

      
    </section>
  );
}