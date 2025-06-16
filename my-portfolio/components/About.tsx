export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate technologist bridging the gap between business intelligence and innovative software solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Hello! I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Wei Jie</span>
                  </h3>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm a driven Information Systems student at <strong className="text-gray-800">Singapore Management University</strong>, 
                    pursuing a unique combination of Business Analytics and Artificial Intelligence. My academic journey, spanning 
                    from 2023 to 2027, has equipped me with a distinctive perspective on how technology can transform business processes.
                  </p>
                  
                  <p>
                    As a <strong className="text-gray-800">fullstack developer</strong>, I thrive on creating end-to-end solutions 
                    that solve real-world problems. From developing REST APIs and implementing web scraping solutions to building 
                    responsive web platforms, I enjoy every aspect of the development lifecycle.
                  </p>
                  
                  <p>
                    Beyond coding, I'm actively shaping the SMU community through leadership roles. As a 
                    <strong className="text-gray-800"> Basketball Events Director</strong> and 
                    <strong className="text-gray-800"> Data Science & Analytics Society Events Director</strong>, 
                    I've developed strong organizational skills and learned to balance technical expertise with people management.
                  </p>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl text-blue-600 mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Focus Areas</h4>
                  <p className="text-sm text-gray-600">Business Analytics & AI</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl text-purple-600 mb-2">💼</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Role</h4>
                  <p className="text-sm text-gray-600">Fullstack Developer</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl text-green-600 mb-2">🏫</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                  <p className="text-sm text-gray-600">SMU Information Systems</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl text-orange-600 mb-2">📅</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Available</h4>
                  <p className="text-sm text-gray-600">Aug - Dec 2025</p>
                </div>
              </div>
            </div>
            
            {/* Profile Highlights */}
            <div className="space-y-6">
              {/* Key Highlights */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                  Professional Highlights
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs mr-4 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Internship Ready:</span>
                      <span className="text-gray-600 ml-1">Available Aug - Dec 2025</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs mr-4 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Technical Expertise:</span>
                      <span className="text-gray-600 ml-1">Java, JavaScript, Python, Vue.js</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-4 mt-0.5 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Competition Experience:</span>
                      <span className="text-gray-600 ml-1">Multiple hackathons and coding challenges</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs mr-4 mt-0.5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Teaching Experience:</span>
                      <span className="text-gray-600 ml-1">TA for Data Management courses</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Current Learning */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white shadow-lg">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  Currently Exploring
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  Diving deep into advanced AI applications in business analytics, exploring cloud technologies, 
                  and expanding expertise in microservices architecture to build more scalable and efficient solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Cloud Computing</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Microservices</span>
                </div>
              </div>
              
              {/* Interests */}
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-xl mr-3">💡</span>
                  Interests & Passions
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-xl mb-1">🤖</div>
                    <div className="text-sm font-medium text-gray-800">AI Innovation</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="text-xl mb-1">📊</div>
                    <div className="text-sm font-medium text-gray-800">Data Analytics</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-xl mb-1">🌐</div>
                    <div className="text-sm font-medium text-gray-800">Web Development</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="text-xl mb-1">🏀</div>
                    <div className="text-sm font-medium text-gray-800">Sports Leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}