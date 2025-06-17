'use client';

import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { 
          name: "Python", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776ab"
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#f7df1e"
        },
        { 
          name: "Java", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          color: "#ed8b00"
        },
        { 
          name: "PHP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          color: "#777bb4"
        },
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { 
          name: "HTML", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#e34f26"
        },
        { 
          name: "CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572b6"
        },
        { 
          name: "Vue.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          color: "#4fc08d"
        },
        { 
          name: "React", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61dafb"
        },
      ]
    },
    {
      title: "Data & Analytics",
      icon: "📊",
      skills: [
        { 
          name: "SQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#336791"
        },
        { 
          name: "NumPy", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          color: "#013243"
        },
        { 
          name: "Pandas", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          color: "#150458"
        },
        { 
          name: "Excel", 
          icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
          color: "#217346"
        },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { 
          name: "Docker", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "#2496ed"
        },
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#f05032"
        },
        { 
          name: "Firebase", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          color: "#ffca28"
        },
        { 
          name: "Azure", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          color: "#0078d4"
        },
      ]
    }
  ];

  const SkillCard = ({ category }: { category: any }) => {
    return (
      <div className="skill-category-new">
        <div className="skill-category-header-new">
          <div className="category-icon-container">
            <span className="category-main-icon">{category.icon}</span>
          </div>
          <h3 className="category-heading">{category.title}</h3>
        </div>
        
        <div className="skills-list">
          {category.skills.map((skill: any, index: number) => (
            <div key={index} className="skill-item-new">
              <div 
                className="skill-icon-container" 
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`}
                  className="skill-tech-icon"
                  onError={(e) => {
                    // Fallback to a generic programming icon if image fails to load
                    e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                  }}
                />
              </div>
              <div className="skill-details">
                <h4 className="skill-title">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="section-container bg-white">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build innovative solutions and bring ideas to life
        </p>
      </div>
      
      <div className="skills-grid-container">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}