export default function Education() {
    const education = {
      university: "Singapore Management University",
      degree: "Bachelor of Information Systems",
      major: "Business Analytics",
      secondMajor: "Artificial Intelligence",
      period: "Aug 2023 – May 2027",
      location: "Singapore",
      status: "Currently Pursuing"
    };
  
    const relevantExperiences = [
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
    ];
  
    const activities = [
      {
        name: "SMU Basketball Events Director",
        role: "Leadership Position",
        description: "Led event organization and team management for university basketball activities"
      },
      {
        name: "Data Science & Analytics Society Events Director",
        role: "Leadership Position", 
        description: "Organized workshops, seminars, and networking events for data science community"
      },
      {
        name: "SMU Youth Mentors",
        role: "Mentorship Program",
        description: "Provided guidance and support to fellow students in academic and personal development"
      }
    ];
  
    const coursework = [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Machine Learning Fundamentals",
      "Business Intelligence & Analytics",
      "Software Engineering Principles",
      "Web Application Development",
      "Artificial Intelligence Applications",
      "Statistical Analysis & Modeling"
    ];
  
    return (
      <section id="education" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              My academic journey at Singapore Management University, where I'm developing expertise 
              in business analytics and artificial intelligence while actively participating in various 
              extracurricular activities.
            </p>
          </div>
  
          <div className="max-w-6xl mx-auto">
            {/* Main Education Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">🎓</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{education.university}</h3>
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
  
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Relevant Experiences */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Relevant Experiences
                </h3>
                <div className="space-y-4">
                  {relevantExperiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-800">{exp.name}</h4>
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Key Coursework */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Key Coursework
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {coursework.map((course, index) => (
                    <div key={index} className="flex items-center py-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      <span className="text-gray-700 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Activities & Leadership */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Activities & Leadership Positions
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {activities.map((activity, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">
                        {index === 0 ? '🏀' : index === 1 ? '📊' : '🤝'}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{activity.name}</h4>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {activity.role}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Availability Notice */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mt-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Internship Availability</h3>
              <p className="text-blue-100 text-lg mb-4">
                Available for internship opportunities during:
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
                <p className="text-xl font-semibold">18 August 2025 – 30 December 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }