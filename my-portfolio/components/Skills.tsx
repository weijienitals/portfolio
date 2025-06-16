import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: 90, description: "Spring Boot, Maven, OOP" },
        { name: "JavaScript", level: 85, description: "ES6+, Node.js, DOM" },
        { name: "Python", level: 80, description: "Data Analysis, Scripting" },
        { name: "SQL", level: 85, description: "Database Design, Queries" },
        { name: "HTML/CSS", level: 90, description: "Responsive Design" },
        { name: "PHP", level: 70, description: "Web Development" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🔧",
      skills: [
        { name: "Vue.js", level: 80, description: "Component-based UI" },
        { name: "Spring Boot", level: 75, description: "REST APIs, Backend" },
        { name: "React", level: 75, description: "Frontend Development" },
        { name: "NumPy", level: 75, description: "Numerical Computing" },
        { name: "Pandas", level: 80, description: "Data Manipulation" },
        { name: "Matplotlib", level: 70, description: "Data Visualization" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, description: "Version Control" },
        { name: "Docker", level: 70, description: "Containerization" },
        { name: "Firebase", level: 80, description: "Backend Services" },
        { name: "Microsoft Azure", level: 65, description: "Cloud Platform" },
        { name: "Figma", level: 75, description: "UI/UX Design" },
        { name: "Microsoft Excel", level: 90, description: "Data Analysis" },
      ]
    },
    {
      title: "Specializations",
      icon: "🎯",
      skills: [
        { name: "Web Scraping", level: 85, description: "Data Extraction" },
        { name: "REST APIs", level: 80, description: "Service Development" },
        { name: "Database Design", level: 75, description: "System Architecture" },
        { name: "Business Analytics", level: 80, description: "Data Insights" },
        { name: "AI Applications", level: 70, description: "Machine Learning" },
        { name: "Project Management", level: 85, description: "Team Leadership" },
      ]
    }
  ];

  const SkillCard = ({ category }: { category: any }) => {
    return (
      <div className="skill-category">
        <div className="skill-category-header">
          <span className="skill-category-icon">{category.icon}</span>
          <h3 className="skill-category-title">{category.title}</h3>
        </div>
        
        <div className="space-y-4">
          {category.skills.map((skill: any, index: number) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
                <div className="progress-container mt-2">
                  <div 
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              <div className="skill-level">
                <div className="skill-percentage">{skill.level}%</div>
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
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical competencies and expertise across various domains
        </p>
      </div>
      
      <div className="grid-2">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}