'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skillAnimationIndex, setSkillAnimationIndex] = useState(-1);

  // Stable skills data using useMemo
  const skillsData = useMemo(() => [
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
      level: "Advanced"
    },
    { 
      name: "Vue.js", 
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      color: "#4fc08d",
      level: "Intermediate"
    },
    { 
      name: "React", 
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61dafb",
      level: "Intermediate"
    },

    // Data & Analytics
    { 
      name: "NumPy", 
      category: "Data & Analytics",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      color: "#013243",
      level: "Advanced"
    },
    { 
      name: "Pandas", 
      category: "Data & Analytics",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      color: "#150458",
      level: "Advanced"
    },
    { 
      name: "Matplotlib", 
      category: "Data & Analytics",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
      color: "#11557c",
      level: "Intermediate"
    },
    { 
      name: "Excel", 
      category: "Data & Analytics",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
      color: "#217346",
      level: "Advanced"
    },

    // Tools & Platforms
    { 
      name: "Git", 
      category: "Tools & Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#f05032",
      level: "Advanced"
    },
    { 
      name: "Docker", 
      category: "Tools & Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ed",
      level: "Intermediate"
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
      level: "Beginner"
    }
  ], []);

  const categories = useMemo(() => [
    "all",
    "Programming Languages", 
    "Web Development", 
    "Data & Analytics", 
    "Tools & Platforms"
  ], []);

  // Helper function to get category icons
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      "Programming Languages": "💻",
      "Web Development": "🌐", 
      "Data & Analytics": "📊",
      "Tools & Platforms": "🛠️"
    };
    return iconMap[category] || "🔧";
  };

  // Filter skills based on selected category
  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'all') return skillsData;
    return skillsData.filter(skill => skill.category === selectedCategory);
  }, [selectedCategory, skillsData]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              setSkillAnimationIndex(0);
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger animations for skill items
  useEffect(() => {
    if (skillAnimationIndex >= 0 && skillAnimationIndex < filteredSkills.length - 1) {
      const timer = setTimeout(() => {
        setSkillAnimationIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [skillAnimationIndex, filteredSkills.length]);

  // Cloud View Skill Tag Component
  const SkillTagItem = ({ skill, delay = 0 }: { skill: any; delay?: number }) => (
    <div 
      className="skill-tag-item mobile-skill-tag"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="skill-tag-icon-container">
        <img 
          src={skill.icon} 
          alt={`${skill.name} icon`}
          className="skill-tag-icon"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.parentElement?.querySelector('.skill-fallback') as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
              fallback.textContent = skill.name.charAt(0);
            }
          }}
        />
        <div className="skill-fallback" style={{ display: 'none' }}></div>
      </div>
      <span className="skill-tag-name">{skill.name}</span>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className={`skills-section-fullscreen bg-gray-50 transition-all duration-1000 ease-out ${
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
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build innovative solutions and bring ideas to life
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className={`skills-filter-container mobile-filter-container transition-all duration-1000 ease-out delay-400 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`skills-filter-button mobile-filter-button transition-all duration-500 ease-out ${
              selectedCategory === category ? 'skills-filter-active' : ''
            } ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: `${600 + index * 100}ms` 
            }}
          >
            {category === 'all' ? (
              <>
                <span className="skills-filter-icon">🎯</span>
                <span className="filter-text">All Skills</span>
                <span className="skills-filter-count">({skillsData.length})</span>
              </>
            ) : (
              <>
                <span className="skills-filter-icon">{getCategoryIcon(category)}</span>
                <span className="filter-text">{category}</span>
                <span className="skills-filter-count">
                  ({skillsData.filter(skill => skill.category === category).length})
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      {/* Skills Tag Cloud */}
      <div className={`skills-cloud-container mobile-cloud-container transition-all duration-1000 ease-out delay-600 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        {filteredSkills.map((skill, index) => (
          <SkillTagItem
            key={skill.name}
            skill={skill}
            delay={index * 50}
          />
        ))}
      </div>
    </section>
  );
}