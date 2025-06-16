export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      
      {/* Particle Background */}
      <div className="particles">
        {/* JavaScript will generate particles here */}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 float"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container-max text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading with RAINBOW TEXT */}
          <div className="space-y-4">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold rainbow-text animate-fade-in-up">
                CHEAN WEI JIE
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Subtitle with glass effect */}
          <div className="space-y-4">
            <div className="glass p-6 rounded-3xl max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-light mb-4">
                <span className="rainbow-text">Fullstack Developer</span> & 
                <span className="text-cyan-300"> Business Analytics Student</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Passionate about creating innovative solutions that bridge technology and business. 
                Specializing in AI, web development, and data analytics.
              </p>
            </div>
            
            <div className="glass p-4 rounded-2xl max-w-md mx-auto">
              <p className="text-cyan-300 font-semibold">🎯 Available for Internships</p>
              <p className="text-gray-300">August - December 2025</p>
            </div>
          </div>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            {/* Animated Border Button */}
            <div className="animated-border hover:scale-105 transition-transform">
              <a href="#projects" className="animated-border-inner text-gray-800 font-semibold text-lg block">
                View My Work
              </a>
            </div>
            
            {/* Neon Button */}
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 neon-purple text-lg"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 pt-8">
            <a 
              href="http://www.linkedin.com/in/cheanweijie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:neon-blue transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:Cheanweijie02@gmail.com"
              className="glass p-4 rounded-full hover:neon-purple transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
              </svg>
            </a>
            
            <a 
              href="tel:+6583582090"
              className="glass p-4 rounded-full hover:neon-pink transition-all duration-300 transform hover:scale-110"
              aria-label="Phone"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass p-4 rounded-2xl flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-300 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}