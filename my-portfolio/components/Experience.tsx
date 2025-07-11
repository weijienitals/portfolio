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
        "Supported students in mastering tools like SQL through one-on-one guidance during tutorials",
        "Addressed student queries and clarified complex concepts to enhance understanding",
        "Fostered collaborative learning environment and enhanced student engagement"
      ],
      technologies: ["SQL", "Data Management", "Teaching", "Curriculum Development"],
      achievements: [
        "Enhanced student engagement and understanding through personalized guidance",
        "Contributed to improved course delivery and student outcomes",
        "Developed strong communication and mentoring skills"
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
    status: "In Progress",
    experiences: [
      "SMU Lit Hackathon - Participated in innovative literature-technology hackathon",
      "Ellipsis #Code Hackathon - Developed cutting-edge solutions in coding competition"
    ],
    activities: [
      {
        title: "SMU Basketball Events Director",
        organization: "Singapore Management University",
        period: "Aug 2023 – May 2024",
        type: "Leadership Role",
        description: "Led event organization and significantly improved club performance and visibility.",
        achievements: [
          "Spearheaded large-scale events including 3x3 Basketball Tournament",
          "Significantly improved club's class ranking through strategic event planning",
          "Boosted club visibility and reputation, securing additional sponsorship opportunities"
        ]
      },
      {
        title: "Data Science & Analytics Society Events Director",
        organization: "Singapore Management University",
        period: "Aug 2023 – Present",
        type: "Leadership Role",
        description: "Organized educational events and workshops to enhance data science learning opportunities.",
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

  const WorkExperienceTab = () => (
    <div className="space-y-12">
      {workExperiences.map((exp, index) => (
        <div key={index} className="professional-card">
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
          
          <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>{exp.description}</p>
          
          <div className="grid-2 mb-6">
            <div>
              <h5 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>Key Responsibilities</h5>
              <div className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-accent)' }}></span>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>Key Achievements</h5>
              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: '#27ae60' }}></span>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>Technologies Used</h5>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="professional-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const EducationTab = () => (
    <div className="space-y-12">
      {/* Main Education Card */}
      <div className="professional-card">
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

        <div>
          <h5 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>Relevant Experiences</h5>
          <div className="space-y-2">
            {education.experiences.map((exp, i) => (
              <div key={i} className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-accent)' }}></span>
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{exp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h5 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>Technical Proficiencies</h5>
          <div className="space-y-4">
            <div>
              <h6 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-secondary)' }}>Programming Languages</h6>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Python', 'Java', 'JavaScript', 'CSS', 'HTML', 'PHP', 'Vue.js'].map((lang, i) => (
                  <span key={i} className="professional-tag">{lang}</span>
                ))}
              </div>
            </div>
            <div>
              <h6 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-secondary)' }}>Tools & Libraries</h6>
              <div className="flex flex-wrap gap-2">
                {['NumPy', 'Pandas', 'Docker', 'Git', 'Figma', 'Firebase', 'Azure', 'Spring Boot'].map((tool, i) => (
                  <span key={i} className="professional-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities & Leadership */}
      <div className="professional-card">
        <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>Activities & Leadership</h3>
        <div className="space-y-8">
          {education.activities.map((activity, index) => (
            <div key={index} className="border-l-4 pl-6" style={{ borderColor: 'var(--color-accent)' }}>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>{activity.title}</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{activity.organization}</p>
                  <span className="professional-tag completed text-xs">
                    {activity.type}
                  </span>
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>{activity.period}</span>
              </div>
              
              <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>{activity.description}</p>
              
              <div className="space-y-1">
                {activity.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ background: '#27ae60' }}></span>
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
    <div className="space-y-12">
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
        {/* Simple Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-medium ${
                  activeTab === tab.id
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-600'
                }`}
                style={{
                  borderRadius: activeTab === tab.id ? '6px' : '0'
                }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'work' && <WorkExperienceTab />}
          {activeTab === 'education' && <EducationTab />}
          {activeTab === 'certifications' && <CertificationsTab />}
        </div>
      </div>
    </section>
  );
}