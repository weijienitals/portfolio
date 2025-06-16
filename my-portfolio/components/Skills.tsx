export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "blue",
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
      color: "purple",
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
      color: "green",
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
      color: "orange",
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        bgLight: "bg-blue-50"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        bgLight: "bg-purple-50"
      },
      green: {
        bg: "from-green-500 to-green-600",
        text: "text-green-600",
        border: "border-green-200",
        bgLight: "bg-green-50"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        bgLight: "bg-orange-50"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const SkillCard = ({ category }: { category: any }) => {
    const colors = getColorClasses(category.color);
    
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
        <div className={`p-6 ${colors.bgLight} rounded-t-2xl border-b ${colors.border}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-xl font-bold ${colors.text} flex items-center`}>
              <span className="text-2xl mr-3">{category.icon}</span>
              {category.title}
            </h3>
            <div className={`w-3 h-3 bg-gradient-to-r ${colors.bg} rounded-full`}></div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {category.skills.map((skill: any, index: number) => (
            <div key={index} className="group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                  <p className="text-sm text-gray-500">{skill.description}</p>
                </div>
                <div className="text-right ml-4">
                  <span className={`text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${colors.bg} h-3 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse relative`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Technical Proficiencies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across programming languages, frameworks, 
            and specialized tools that power my development workflow and enable me to build innovative solutions.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
          
          {/* Additional Skills Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Technical Expertise Overview
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Full Stack Development</h4>
                <p className="text-sm text-gray-600">End-to-end web application development with modern frameworks</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">AI & Data Analytics</h4>
                <p className="text-sm text-gray-600">Business intelligence and machine learning applications</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">🔗</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">API Development</h4>
                <p className="text-sm text-gray-600">RESTful services and microservices architecture</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Data Engineering</h4>
                <p className="text-sm text-gray-600">Web scraping, data processing, and visualization</p>
              </div>
            </div>
          </div>
          
          {/* Learning Journey */}
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              improving existing skills, and staying updated with the latest industry trends and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Kubernetes</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">GraphQL</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">TensorFlow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}