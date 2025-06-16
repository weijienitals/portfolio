import React from 'react';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="section-container bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Software Developer
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Passionate about creating efficient, scalable solutions and turning complex problems 
          into elegant code. Specializing in full-stack development with a focus on modern 
          web technologies and best practices.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#projects" className="btn-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>
        
        {/* Professional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A dedicated software developer with a passion for innovation and continuous learning
        </p>
      </div>
      
      <div className="grid-2 items-center">
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            I am a passionate software developer with a strong foundation in computer science and 
            hands-on experience in building web applications and digital solutions. My journey in 
            technology has been driven by curiosity and a desire to solve real-world problems 
            through code.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With expertise spanning multiple programming languages and frameworks, I enjoy working 
            on diverse projects that challenge me to grow and learn. I believe in writing clean, 
            maintainable code and following industry best practices to deliver high-quality solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
            projects, and sharing knowledge with the developer community. I'm always eager to take 
            on new challenges and collaborate with teams to build innovative solutions.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="professional-tag primary">Problem Solver</span>
            <span className="professional-tag primary">Team Player</span>
            <span className="professional-tag primary">Quick Learner</span>
            <span className="professional-tag primary">Detail Oriented</span>
          </div>
        </div>
        
        <div className="professional-card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🎯</span>
              <div>
                <h4 className="font-semibold text-gray-900">Excellence</h4>
                <p className="text-gray-600 text-sm">Striving for the highest quality in every project</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🚀</span>
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-gray-600 text-sm">Embracing new technologies and creative solutions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🤝</span>
              <div>
                <h4 className="font-semibold text-gray-900">Collaboration</h4>
                <p className="text-gray-600 text-sm">Working together to achieve common goals</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">📚</span>
              <div>
                <h4 className="font-semibold text-gray-900">Growth</h4>
                <p className="text-gray-600 text-sm">Continuous learning and professional development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="section-container bg-white">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your project or explore opportunities to work together
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a conversation about technology. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">github.com/yourusername</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">linkedin.com/in/yourprofile</span>
              </div>
            </div>
          </div>
          
          <div className="professional-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main Portfolio Page Component
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Your Name. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}