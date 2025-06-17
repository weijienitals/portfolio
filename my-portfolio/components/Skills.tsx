import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { 
          name: "Python", 
          description: "Data Analysis, Scripting, AI/ML",
          icon: "🐍",
          color: "#3776ab"
        },
        { 
          name: "JavaScript", 
          description: "ES6+, Node.js, Frontend & Backend",
          icon: "📜",
          color: "#f7df1e"
        },
        { 
          name: "Java", 
          description: "Spring Boot, Maven, OOP",
          icon: "☕",
          color: "#ed8b00"
        },
        { 
          name: "PHP", 
          description: "Web Development, Server-side",
          icon: "🐘",
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
          description: "Semantic Markup, Accessibility",
          icon: "📄",
          color: "#e34f26"
        },
        { 
          name: "CSS", 
          description: "Responsive Design, Modern Styling",
          icon: "🎨",
          color: "#1572b6"
        },
        { 
          name: "Vue.js", 
          description: "Component-based UI Development",
          icon: "💚",
          color: "#4fc08d"
        },
        { 
          name: "React", 
          description: "Frontend Development, SPA",
          icon: "⚛️",
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
          description: "Database Design, Complex Queries",
          icon: "🗄️",
          color: "#336791"
        },
        { 
          name: "NumPy", 
          description: "Numerical Computing, Scientific Computing",
          icon: "🔢",
          color: "#013243"
        },
        { 
          name: "Pandas", 
          description: "Data Manipulation, Analysis",
          icon: "🐼",
          color: "#150458"
        },
        { 
          name: "Excel", 
          description: "Advanced Analytics, Business Intelligence",
          icon: "📈",
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
          description: "Containerization, DevOps",
          icon: "🐳",
          color: "#2496ed"
        },
        { 
          name: "Git", 
          description: "Version Control, Collaboration",
          icon: "📝",
          color: "#f05032"
        },
        { 
          name: "Firebase", 
          description: "Backend Services, Real-time Database",
          icon: "🔥",
          color: "#ffca28"
        },
        { 
          name: "Azure", 
          description: "Cloud Platform, Services",
          icon: "☁️",
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
                <span className="skill-tech-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
              </div>
              <div className="skill-details">
                <h4 className="skill-title">{skill.name}</h4>
                <p className="skill-desc">{skill.description}</p>
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