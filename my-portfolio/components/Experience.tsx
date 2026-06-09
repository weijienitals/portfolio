"use client";

import { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  const tabs = [
    { id: "work", label: "Work Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    // { id: 'certifications', label: 'Certifications', icon: '⭐' }
  ];

  const workExperiences = [
 {
      title: "Data Scientist",
      company: "Seagate Technology",
      period: "Jun 2026 – Dec 2026",
      type: "Internship",
      description:
        "To be included closer to the internship's conclusion",
      responsibilities: [
        "Processed and analysed large-scale manufacturing process datasets to identify operational faults and anomalies",
        "Built AI models to automate fault detection across manufacturing processes, improving defect identification accuracy",
      ],
      technologies: [
        "Python",
        "SQL",
        "Hadoop",
      ],
      achievements: [
        "To be included closer to the internship's conclusion",
      ],
    },

    {
      title: "Data Engineer",
      company: "SATS",
      period: "Dec 2025 – May 2026",
      type: "Internship",
      description:
        "Engineered end-to-end data solutions across three high-impact projects spanning real-time equipment tracking, large-scale cloud data migration, and an LLM-powered airport operations knowledge agent.",
      responsibilities: [
        "Collaborated with full-time engineers to build a real-time data pipeline on Python and Azure for ground staff airport equipment tracking",
        "Engineered scalable ETL pipelines on Microsoft Fabric to migrate operational data from a legacy Oracle database",
        "Processed high-volume datasets using PySpark notebooks for distributed data transformation on Fabric",
        "Built an OCR pipeline to convert hardcopy airport manuals into structured Markdown files",
        "Developed a RAG pipeline covering document chunking, embedding generation, and vector database ingestion",
        "Built an MCP server with semantic search, integrated with an LLM agent to handle natural language airport operations queries",
      ],
      technologies: [
        "Python",
        "Azure",
        "Microsoft Fabric",
        "PySpark",
        "ETL Pipelines",
        "Oracle DB",
        "OCR",
        "RAG",
        "Vector Database",
        "MCP Server",
        "LLM",
      ],
      achievements: [
        "Delivered a production-ready equipment tracking pipeline, improving ground staff operational efficiency",
        "Modernised legacy Oracle infrastructure with a scalable cloud migration to Microsoft Fabric using PySpark",
        "Architected a full-stack RAG system enabling an LLM agent to accurately answer airport operations queries",
      ],
    },
    {
      title: "Fullstack Engineer",
      company: "LedgerNow",
      period: "May 2025 – Aug 2025",
      type: "Internship",
      description:
        "Developed comprehensive full-stack solutions focusing on REST API services and web scraping technologies for Islamic finance applications.",
      responsibilities: [
        "Developed REST API services using Java Spring and Maven for efficient backend operations",
        "Delivered web scraping solutions to obtain e-commerce product listings using Java",
        "Created Data pipelines and ETL jobs using amazon S3, glue and spark",
        "Cleaned and processed data using python and created visualizations using tableau",
        "Derived strategies for company’s ecommerce business using processed data",
        "Researched and developed impactful technology solutions for Islamic finance practices",
        "Implemented OCR workflows using Gemini with customized prompts to extract and validate data from uploaded documents.",
        "Collaborated with cross-functional teams to implement scalable software solutions",

       
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Maven",
        "REST APIs",
        "Web Scraping",
        "AWS S3",
        `AWS Glue`,
        "tableau",
      ],
      achievements: [
        "Successfully implemented scalable API architecture",
        "Improved data collection efficiency through automated scraping solutions",
        "Contributed to innovative fintech solutions for Islamic finance sector",
      ],
    },
    {
      title: "Data Management Teaching Assistant",
      company: "Singapore Management University",
      course: "IS112 Data Management",
      period: "Jan 2025 – Apr 2025",
      type: "Academic",
      description:
        "Assisted in delivering comprehensive data management education while supporting student learning through hands-on guidance and curriculum development.",
      responsibilities: [
        "Assisted course instructor in developing teaching materials and delivering content on data management principles",
        "Provided one-on-one guidance during tutorials, addressing student queries and clarifying concepts",
        "Supported students in mastering tools like SQL through hands-on practice sessions",
        "Fostered collaborative learning environment that enhanced student engagement and understanding",
      ],
      technologies: [
        "SQL",
        "Database Management",
        "Teaching",
        "Curriculum Development",
      ],
      achievements: [
        "Enhanced student engagement through personalized guidance",
        "Contributed to improved course completion rates",
        "Developed innovative teaching methods for complex concepts",
      ],
    },
  ];

  const education = {
    university: "Singapore Management University",
    degree: "Bachelor of Information Systems",
    major: "Business Analytics",
    secondMajor: "Artificial Intelligence",
    period: "Aug 2023 – May 2027",
    location: "Singapore",
    status: "Currently Pursuing",
    experiences: [
      "SMU Lit Hackathon - Participated in literary-themed hackathon developing innovative tech solutions",
      "Ellipsis #Code Hackathon - Competed in coding challenges and developed creative software solutions",
    ],
    activities: [
      {
        title: "SMU Basketball Events Director",
        organization: "Singapore Management University",
        type: "Leadership Position",
        period: "Aug 2023 – May 2024",
        description:
          "Led event organization and team management for university basketball activities, significantly improving club performance and visibility.",
        achievements: [
          "Spearheaded organization of large-scale sporting events",
          "Improved club's competitive ranking through strategic initiatives",
          "Secured increased sponsorship opportunities and funding",
        ],
      },
      {
        title: "Data Science & Analytics Society Events Director",
        organization: "Singapore Management University",
        type: "Leadership Position",
        period: "Aug 2023 – May 2024",
        description:
          "Organized workshops, seminars, and networking events for the data science community, fostering learning and professional development.",
        achievements: [
          "Organized technical workshops and industry seminars",
          "Built networking opportunities for students and professionals",
          "Enhanced society's reputation and member engagement",
        ],
      },
      {
        title: "SMU Youth Mentors",
        organization: "Singapore Management University",
        type: "Mentorship Program",
        period: "Aug 2023 – Present",
        description:
          "Provided guidance and support to fellow students in academic and personal development, fostering a collaborative learning environment.",
        achievements: [
          "Mentored multiple students in academic and personal growth",
          "Contributed to improved student retention and satisfaction",
          "Developed strong leadership and communication skills",
        ],
      },
    ],
  };

  const WorkExperienceTab = () => (
    <div className="space-y-8">
      {workExperiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <div className="experience-header">
            <div className="experience-title-section">
              <h3 className="experience-title">{exp.title}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              {exp.course && <p className="experience-course">{exp.course}</p>}
              <span
                className={`experience-type-badge ${exp.type.toLowerCase()}`}
              >
                {exp.type}
              </span>
            </div>
            <div className="experience-period">
              <span>{exp.period}</span>
            </div>
          </div>

          <p className="experience-description">{exp.description}</p>

          <div className="experience-content-grid">
            <div className="experience-section">
              <h5 className="experience-section-title">Key Responsibilities</h5>
              <div className="experience-list">
                {exp.responsibilities.map((responsibility, i) => (
                  <div key={i} className="experience-list-item">
                    <div className="experience-bullet"></div>
                    <span>{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="experience-section">
              <h5 className="experience-section-title">Key Achievements</h5>
              <div className="experience-list">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="experience-list-item achievement">
                    <div className="achievement-bullet"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h5 className="experience-section-title">Technologies Used</h5>
            <div className="experience-tech-tags">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="experience-tech-tag">
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
    <div className="space-y-8">
      {/* Main Education Card */}
      <div className="experience-card">
        <div className="education-header">
          <div className="education-main-info">
            <h3 className="education-university">{education.university}</h3>
            <h4 className="education-degree">{education.degree}</h4>
            <div className="education-majors">
              <span className="education-major-badge primary">
                Major: {education.major}
              </span>
              <span className="education-major-badge secondary">
                2nd Major: {education.secondMajor}
              </span>
            </div>
          </div>
          <div className="education-details">
            <span className="education-status-badge">{education.status}</span>
            <p className="education-period">{education.period}</p>
            <p className="education-location">{education.location}</p>
          </div>
        </div>

        <div className="experience-section">
          <h5 className="experience-section-title">Relevant Experiences</h5>
          <div className="experience-list">
            {education.experiences.map((exp, i) => (
              <div key={i} className="experience-list-item">
                <div className="experience-bullet"></div>
                <span>{exp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="education-technical-section">
          <h5 className="experience-section-title">Technical Proficiencies</h5>
          <div className="technical-categories">
            <div className="technical-category">
              <h6 className="technical-category-title">
                Programming Languages
              </h6>
              <div className="experience-tech-tags">
                {[
                  "SQL",
                  "Python",
                  "Java",
                  "JavaScript",
                  "CSS",
                  "HTML",
                  "PHP",
                  "Vue.js",
                ].map((lang, i) => (
                  <span key={i} className="experience-tech-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="technical-category">
              <h6 className="technical-category-title">Tools & Libraries</h6>
              <div className="experience-tech-tags">
                {[
                  "NumPy",
                  "Pandas",
                  "Docker",
                  "Git",
                  "Figma",
                  "Firebase",
                  "Azure",
                  "Spring Boot",
                ].map((tool, i) => (
                  <span key={i} className="experience-tech-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities & Leadership */}
      <div className="experience-card">
        <h3 className="activities-title">Activities & Leadership</h3>
        <div className="activities-grid">
          {education.activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-header">
                <div>
                  <h4 className="activity-title">{activity.title}</h4>
                  <p className="activity-organization">
                    {activity.organization}
                  </p>
                  <span className="activity-type-badge">{activity.type}</span>
                </div>
                <span className="activity-period">{activity.period}</span>
              </div>

              <p className="activity-description">{activity.description}</p>

              <div className="experience-list">
                {activity.achievements.map((achievement, i) => (
                  <div key={i} className="experience-list-item achievement">
                    <div className="achievement-bullet"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // const CertificationsTab = () => (
  //   <div className="space-y-8">
  //     <div className="experience-card certification-coming-soon">
  //       <div className="certification-icon">
  //         <span>⭐</span>
  //       </div>
  //       <h3 className="certification-title">Professional Development</h3>
  //       <p className="certification-description">
  //         Currently pursuing additional certifications to enhance technical expertise and professional capabilities.
  //         Stay tuned for updates on upcoming achievements!
  //       </p>
  //       <div className="certification-status">
  //         <div className="certification-status-content">
  //           <span className="certification-status-label">Status:</span>
  //           <span className="certification-status-text">Actively working on professional certifications in 2025</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My comprehensive journey through professional work, academic pursuits,
          and leadership experiences that have shaped my skills and expertise in
          technology and business.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Modern Tab Navigation */}
        <div className="tab-navigation">
          <div className="tab-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${
                  activeTab === tab.id ? "tab-active" : ""
                }`}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "work" && <WorkExperienceTab />}
          {activeTab === "education" && <EducationTab />}
          {/* {activeTab === 'certifications' && <CertificationsTab />} */}
        </div>
      </div>
    </section>
  );
}
