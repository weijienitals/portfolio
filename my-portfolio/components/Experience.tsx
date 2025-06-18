'use client';

import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '⭐' }
  ];

  const workExperiences = [
    {
      title: "Fullstack Engineer",
      company: "LedgerNow",
      period: "May 2025 – Aug 2025",
      type: "Internship",
      description: "Developed comprehensive full-stack solutions focusing on REST API services and web scraping technologies for Islamic finance applications.",
      responsibilities: [
        "Developed REST API services using Java Spring and Maven for efficient backend operations",
        "Delivered web scraping solutions to obtain e-commerce product listings using Java",
        "Researched and developed impactful technology solutions for Islamic finance practices",
        "Collaborated with cross-functional teams to implement scalable software solutions"
      ],
      technologies: ["Java", "Spring Boot", "Maven", "REST APIs", "Web Scraping"],
      achievements: [
        "Successfully implemented scalable API architecture",
        "Improved data collection efficiency through automated scraping solutions",
        "Contributed to innovative fintech solutions for Islamic finance sector"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Singapore Management University",
      course: "IS112 Data Management",
      period: "Jan 2025 – Apr 2025",
      type: "Academic",
      description: "Assisted in delivering comprehensive data management education while supporting student learning through hands-on guidance and curriculum development.",
      responsibilities: [
        "Assisted course instructor in developing teaching materials and delivering content on data management principles",
        "Supported students in mastering SQL and other data management tools",
        "Provided one-on-one guidance during tutorials, addressing queries and clarifying concepts",
        "Fostered a collaborative learning environment to enhance student engagement and understanding"
      ],
      technologies: ["SQL", "Data Management Systems", "Database Design", "Teaching Tools"],
      achievements: [
        "Enhanced student engagement through interactive learning sessions",
        "Developed supplementary learning materials for complex concepts",
        "Received positive feedback from students and faculty"
      ]
    }
  ];

  const education = {
    university: "Singapore Management University",
    degree: "Bachelor of Information Systems",
    major: "Business Analytics",
    secondMajor: "Artificial Intelligence",
    period: "Aug 2023 – May 2027",
    location: "Singapore",
    status: "Currently Pursuing",
    gpa: "Expected Graduation: May 2027",
    relevantExperiences: [
      {
        name: "SMU Lit Hackathon",
        type: "Competition",
        description: "Participated in literary-themed hackathon developing innovative tech solutions"
      },
      {
        name: "Ellipsis #Code Hackathon",
        type: "Competition", 
        description: "Competed in coding challenges and developed creative software solutions"
      }
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Machine Learning Fundamentals",
      "Business Intelligence & Analytics",
      "Software Engineering Principles",
      "Web Application Development",
      "Artificial Intelligence Applications",
      "Statistical Analysis & Modeling"
    ],
    activities: [
      {
        title: "SMU Basketball Events Director",
        organization: "SMU Basketball Club",
        period: "Aug 2023 – May 2024",
        type: "Leadership Position",
        description: "Led the organization and execution of large-scale basketball events while significantly improving the club's visibility and securing additional funding opportunities.",
        achievements: [
          "Significantly improved club's class ranking through successful event execution",
          "Boosted club's visibility and reputation within the university community",
          "Secured additional sponsorship opportunities and funding for future initiatives"
        ]
      },
      {
        title: "Data Science & Analytics Society Events Director",
        organization: "SMU Data Science & Analytics Society",
        period: "Aug 2023 – Present",
        type: "Leadership Position",
        description: "Organized workshops, seminars, and networking events for the data science community at SMU.",
        achievements: [
          "Increased society membership and engagement through innovative events",
          "Established partnerships with leading tech companies",
          "Enhanced data science learning opportunities for students"
        ]
      },
      {
        title: "SMU Youth Mentors",
        organization: "Singapore Management University",
        period: "Aug 2023 – Present",
        type: "Mentorship Program",
        description: "Provided guidance and support to fellow students in academic and personal development.",
        achievements: [
          "Successfully mentored multiple students to academic improvement",
          "Contributed to positive campus community building",
          "Developed strong interpersonal and communication skills"
        ]
      }
    ]
  };

  const certifications = [
    {
      title: "Coming Soon",
      issuer: "Professional Development",
      period: "2025",
      description: "Currently pursuing additional certifications to enhance technical expertise",
      status: "In Progress"
    }
  ];

  const WorkExperienceTab = () => (
    <div className="space-y-8">
      {workExperiences.map((exp, index) => (
        <div key={index} className="relative">
          {/* Timeline line */}
          {index !== workExperiences.length - 1 && (
            <div className="absolute left-8 top-16 w-0.5 h-full" style={{ background: 'var(--color-border)' }}></div>
          )}
          
          {/* Timeline dot */}
          <div className="absolute left-6 top-6 w-4 h-4 rounded-full z-10" style={{ 
            background: 'var(--color-background)', 
            border: '4px solid var(--color-accent)',
            boxShadow: 'var(--color-shadow)'
          }}></div>
          
          <div className="ml-20">
            <div className="professional-card">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>{exp.title}</h3>
                    <span className="professional-tag primary">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>{exp.company}</h4>
                  {exp.course && (
                    <p className="mb-2 italic" style={{ color: 'var(--color-text-muted)' }}>{exp.course}</p>
                  )}
                </div>
                <div className="lg:text-right mt-2 lg:mt-0">
                  <span className="professional-tag">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{exp.description}</p>
              
              <div className="grid-2 mb-6">
                <div>
                  <h5 className="font-semibold mb-3 flex items-center" style={{ color: 'var(--color-text-primary)' }}>
                    <span className="w-2 h-2 rounded-full mr-2" style={{ background: 'var(--color-accent)' }}></span>
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-text-muted)' }}></span>
                        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3 flex items-center" style={{ color: 'var(--color-text-primary)' }}>
                    <span className="w-2 h-2 rounded-full mr-2" style={{ background: '#27ae60' }}></span>
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: '#27ae60' }}></span>
                        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3 flex items-center" style={{ color: 'var(--color-text-primary)' }}>
                  <span className="w-2 h-2 rounded-full mr-2" style={{ background: 'var(--color-secondary)' }}></span>
                  Technologies & Skills
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string, i: number) => (
                    <span key={i} className="professional-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const EducationTab = () => (
    <div className="space-y-8">
      {/* Main Education Card */}
      <div className="professional-card">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center" style={{ 
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
              boxShadow: 'var(--color-shadow)'
            }}>
              <span className="text-2xl text-white">🎓</span>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{education.university}</h3>
                <h4 className="text-xl font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>{education.degree}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <span className="professional-tag primary">
                    Major: {education.major}
                  </span>
                  <span className="professional-tag primary">
                    2nd Major: {education.secondMajor}
                  </span>
                </div>
              </div>
              <div className="lg:text-right">
                <span className="professional-tag completed mb-2">
                  {education.status}
                </span>
                <p className="font-medium" style={{ color: 'var(--color-text-secondary)' }}>{education.period}</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{education.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Relevant Experiences */}
        <div className="professional-card">
          <h3 className="text-xl font-semibold mb-6 flex items-center" style={{ color: 'var(--color-text-primary)' }}>
            <span className="w-3 h-3 rounded-full mr-3" style={{ background: 'var(--color-accent)' }}></span>
            Relevant Experiences
          </h3>
          <div className="space-y-4">
            {education.relevantExperiences.map((exp, index) => (
              <div key={index} className="border-l-4 pl-4 py-3 rounded-r" style={{ 
                borderColor: 'var(--color-accent)',
                background: 'var(--color-surface)'
              }}>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{exp.name}</h4>
                  <span className="professional-tag">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Coursework */}
        <div className="professional-card">
          <h3 className="text-xl font-semibold mb-6 flex items-center" style={{ color: 'var(--color-text-primary)' }}>
            <span className="w-3 h-3 rounded-full mr-3" style={{ background: 'var(--color-secondary)' }}></span>
            Key Coursework
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {education.coursework.map((course, index) => (
              <div key={index} className="flex items-center py-2 px-3 rounded border" style={{ 
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border-light)'
              }}>
                <span className="w-2 h-2 rounded-full mr-3" style={{ background: 'var(--color-secondary)' }}></span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities & Leadership */}
      <div className="professional-card">
        <h3 className="text-xl font-semibold mb-6 flex items-center" style={{ color: 'var(--color-text-primary)' }}>
          <span className="w-3 h-3 rounded-full mr-3" style={{ background: '#27ae60' }}></span>
          Activities & Leadership
        </h3>
        <div className="grid-3">
          {education.activities.map((activity, index) => (
            <div key={index} className="border rounded p-4 transition-all" style={{ 
              borderColor: 'var(--color-border)',
              background: 'var(--color-background)'
            }}>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>{activity.title}</h4>
                <span className="professional-tag completed">
                  {activity.type}
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>{activity.organization}</p>
              <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>{activity.period}</p>
              <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>{activity.description}</p>
              <div className="space-y-1">
                {activity.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0" style={{ background: '#27ae60' }}></span>
                    <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );

  const CertificationsTab = () => (
    <div className="space-y-8">
      <div className="professional-card text-center">
        <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ 
          background: 'linear-gradient(135deg, #f39c12, #e67e22)',
          boxShadow: 'var(--color-shadow)'
        }}>
          <span className="text-2xl text-white">⭐</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Professional Development</h3>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Currently pursuing additional certifications to enhance technical expertise and professional capabilities.
          Stay tuned for updates on upcoming achievements!
        </p>
        <div className="p-4 rounded border" style={{ 
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border-light)'
        }}>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="font-semibold">Status:</span> Actively working on professional certifications in 2025
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mt-8">
          <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Technical Proficiencies</h4>
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-secondary)' }}>Programming Languages</h5>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Python', 'Java', 'JavaScript', 'CSS', 'HTML', 'PHP', 'Vue.js'].map((lang, i) => (
                  <span key={i} className="professional-tag">{lang}</span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-secondary)' }}>Tools & Libraries</h5>
              <div className="flex flex-wrap gap-2">
                {['NumPy', 'Pandas', 'Docker', 'Git', 'Figma', 'Firebase', 'Azure', 'Spring Boot'].map((tool, i) => (
                  <span key={i} className="professional-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My comprehensive journey through professional work, academic pursuits, and leadership experiences 
          that have shaped my skills and expertise in technology and business.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Tab Navigation */}
        <div className="professional-card mb-8 p-2">
          <div className="flex flex-row justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded font-medium transition-all mx-1 ${
                  activeTab === tab.id
                    ? 'transform scale-105'
                    : 'hover:bg-gray-50'
                }`}
                style={{
                  background: activeTab === tab.id 
                    ? 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))'
                    : 'transparent',
                  color: activeTab === tab.id 
                    ? 'white' 
                    : 'var(--color-text-secondary)',
                  boxShadow: activeTab === tab.id 
                    ? 'var(--color-shadow-hover)' 
                    : 'none'
                }}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Only show the active tab */}
        <div className="min-h-[600px]">
          {activeTab === 'work' && <WorkExperienceTab />}
          {activeTab === 'education' && <EducationTab />}
          {activeTab === 'certifications' && <CertificationsTab />}
        </div>
      </div>
    </section>
  );
}