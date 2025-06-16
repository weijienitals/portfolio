export default function About() {
  return (
    <section id="about" className="section-padding text-white">
      <div className="container-max">
        
        {/* Section Header with Rainbow Text */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 rainbow-text">
            About Me
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="vibrant-card p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 rainbow-text">
                Hello, I'm Wei Jie! 👋
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                I'm a passionate Information Systems student at Singapore Management University, 
                specializing in Business Analytics with a second major in Artificial Intelligence. 
                My journey combines technical expertise with business acumen to create innovative 
                solutions that drive real impact.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Currently seeking internship opportunities from August to December 2025, 
                I'm excited to bring my skills in fullstack development, data analytics, 
                and AI to help organizations solve complex challenges and achieve their goals.
              </p>
            </div>

            {/* Enhanced Highlights */}
            <div className="vibrant-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold text-cyan-300 mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                Key Highlights
              </h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="glass p-2 rounded-full mr-4 mt-1 group-hover:neon-blue transition-all">
                    <span className="text-blue-400">🎯</span>
                  </div>
                  <div>
                    <span className="font-medium text-cyan-300">Internship Ready:</span>
                    <span className="text-gray-300 ml-2">Available Aug - Dec 2025</span>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="glass p-2 rounded-full mr-4 mt-1 group-hover:neon-purple transition-all">
                    <span className="text-purple-400">💻</span>
                  </div>
                  <div>
                    <span className="font-medium text-purple-300">Technical Expertise:</span>
                    <span className="text-gray-300 ml-2">Java, JavaScript, Python, Vue.js</span>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="glass p-2 rounded-full mr-4 mt-1 group-hover:neon-pink transition-all">
                    <span className="text-pink-400">🏆</span>
                  </div>
                  <div>
                    <span className="font-medium text-pink-300">Leadership:</span>
                    <span className="text-gray-300 ml-2">Events Director, Basketball & Analytics Society</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Highlights */}
          <div className="space-y-6">
            
            {/* Experience Card */}
            <div className="vibrant-card p-8 rounded-3xl">
              <h4 className="text-2xl font-bold text-cyan-300 mb-6">
                Recent Experience
              </h4>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h5 className="font-semibold text-cyan-300 text-lg">Fullstack Engineer</h5>
                  <p className="text-purple-300 font-medium">LedgerNow</p>
                  <p className="text-gray-400 text-sm">May 2025 - Aug 2025</p>
                  <p className="text-gray-300 mt-2">Developed REST APIs with Java Spring, implemented web scraping solutions, and researched Islamic finance tech solutions.</p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-6">
                  <h5 className="font-semibold text-purple-300 text-lg">Teaching Assistant</h5>
                  <p className="text-cyan-300 font-medium">SMU IS112 Data Management</p>
                  <p className="text-gray-400 text-sm">Jan 2025 - Apr 2025</p>
                  <p className="text-gray-300 mt-2">Assisted with course content development and provided one-on-one guidance on SQL and data management principles.</p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="vibrant-card p-8 rounded-3xl">
              <h4 className="text-2xl font-bold text-pink-300 mb-6">
                Technical Arsenal
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <span className="glass px-4 py-3 rounded-xl text-center font-medium hover:neon-blue transition-all cursor-pointer">
                  Java
                </span>
                <span className="glass px-4 py-3 rounded-xl text-center font-medium hover:neon-purple transition-all cursor-pointer">
                  JavaScript
                </span>
                <span className="glass px-4 py-3 rounded-xl text-center font-medium hover:neon-pink transition-all cursor-pointer">
                  Python
                </span>
                <span className="glass px-4 py-3 rounded-xl text-center font-medium hover:neon-blue transition-all cursor-pointer">
                  Vue.js
                </span>
                <span className="glass px-4 py-3 rounded-xl text-center font-medium hover:neon-purple transition-all cursor-pointer">
                  SQL
                </span>
                <span className="glass px-4 py-3 rounded-xl text-center font-medium hover:neon-pink transition-all cursor-pointer">
                  Spring Boot
                </span>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="vibrant-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold text-yellow-300 mb-6 flex items-center">
                <span className="text-2xl mr-3">💡</span>
                Areas of Interest
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-blue-100 px-4 py-3 rounded-xl text-sm font-medium text-center hover:scale-105 transition-transform cursor-pointer">
                  Fullstack Development
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-purple-100 px-4 py-3 rounded-xl text-sm font-medium text-center hover:scale-105 transition-transform cursor-pointer">
                  AI & Analytics
                </span>
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-green-100 px-4 py-3 rounded-xl text-sm font-medium text-center hover:scale-105 transition-transform cursor-pointer">
                  Fintech
                </span>
                <span className="bg-gradient-to-r from-red-600 to-red-700 text-red-100 px-4 py-3 rounded-xl text-sm font-medium text-center hover:scale-105 transition-transform cursor-pointer">
                  Data Science
                </span>
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-yellow-100 px-4 py-3 rounded-xl text-sm font-medium text-center col-span-2 hover:scale-105 transition-transform cursor-pointer">
                  Web Scraping & APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}