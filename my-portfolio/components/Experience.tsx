'use client';

import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'activities', label: 'Activities & Leadership', icon: '🏆' }
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
    ]
  };

  const activities = [
    {
      title: "SMU Basketball Events Director",
      organization: "SMU Basketball Club",
      period: "Aug 2023 – May 2024",
      type: "Leadership Position",
      description: "Led the organization and execution of large-scale basketball events while significantly improving the club's visibility and securing additional funding opportunities.",
      responsibilities: [
        "Spearheaded the organization of large-scale events, including the 3x3 Basketball Tournament",
        "Managed event logistics, coordination, and execution from planning to completion",
        "Developed strategic partnerships with sponsors and stakeholders",
        "Led team initiatives that significantly improved the club's class ranking"
      ],
      achievements: [
        "Significantly improved club's class ranking through successful event execution",
        "Boosted club's visibility and reputation within the university community",
        "Secured additional sponsorship opportunities and funding for future initiatives",
        "Enhanced leadership and organizational skills through hands-on management experience"
      ]
    },
    {
      title: "Data Science & Analytics Society Events Director",
      organization: "SMU Data Science & Analytics Society",
      period: "Aug 2023 – Present",
      type: "Leadership Position",
      description: "Organized workshops, seminars, and networking events for the data science community at SMU.",
      responsibilities: [
        "Organized data science workshops and technical seminars",
        "Coordinated networking events with industry professionals",
        "Managed society events and member engagement activities",
        "Collaborated with faculty and external partners for educational initiatives"
      ],
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
      responsibilities: [
        "Mentored junior students in academic and career guidance",
        "Organized peer support sessions and study groups",
        "Facilitated workshops on academic success strategies",
        "Supported students in personal and professional development"
      ],
      achievements: [
        "Successfully mentored multiple students to academic improvement",
        "Contributed to positive campus community building",
        "Developed strong interpersonal and communication skills"
      ]
    }
  ];

  const WorkExperienceTab = () => (
    <div className="space-y-8">
      {workExperiences.map((exp, index) => (
        <div key={index} className="relative">
          {/* Timeline line */}
          {index !== workExperiences.length - 1 && (
            <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          )}
          
          {/* Timeline dot */}
          <div className="absolute left-6 top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>
          
          <div className="ml-20">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">{exp.company}</h4>
                  {exp.course && (
                    <p className="text-gray-600 mb-2 italic">{exp.course}</p>
                  )}
                </div>
                <div className="lg:text-right mt-2 lg:mt-0">
                  <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Technologies & Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string, i: number) => (
                    <span key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-3 py-1 rounded-full text-sm border border-blue-100">
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
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl text-white">🎓</span>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{education.university}</h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-1">{education.degree}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Major: {education.major}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    2nd Major: {education.secondMajor}
                  </span>
                </div>
              </div>
              <div className="lg:text-right">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                  {education.status}
                </span>
                <p className="text-gray-600 font-medium">{education.period}</p>
                <p className="text-gray-500 text-sm">{education.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Relevant Experiences */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            Relevant Experiences
          </h3>
          <div className="space-y-4">
            {education.relevantExperiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4 py-3 bg-blue-50 rounded-r-lg">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800">{exp.name}</h4>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    {exp.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Coursework */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Key Coursework
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {education.coursework.map((course, index) => (
              <div key={index} className="flex items-center py-2 px-3 bg-purple-50 rounded-lg border border-purple-100">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-gray-700 text-sm font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Availability Notice */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-4">Internship Availability</h3>
        <p className="text-blue-100 mb-4">
          Available for internship opportunities during:
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
          <p className="text-lg font-semibold">18 August 2025 – 30 December 2025</p>
        </div>
      </div>
    </div>
  );

  const ActivitiesTab = () => (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                  {activity.type}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-1">{activity.organization}</h4>
            </div>
            <div className="lg:text-right mt-2 lg:mt-0">
              <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {activity.period}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Key Responsibilities
              </h5>
              <ul className="space-y-2">
                {activity.responsibilities.map((resp: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Key Achievements
              </h5>
              <ul className="space-y-2">
                {activity.achievements.map((achievement: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My comprehensive journey through professional work, academic pursuits, and leadership experiences 
            that have shaped my skills and expertise in technology and business.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-lg mb-8 p-2 border border-gray-100">
            <div className="flex flex-col sm:flex-row">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'work' && <WorkExperienceTab />}
            {activeTab === 'education' && <EducationTab />}
            {activeTab === 'activities' && <ActivitiesTab />}
          </div>
        </div>
      </div>
    </section>
  );
}