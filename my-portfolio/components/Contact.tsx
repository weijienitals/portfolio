export default function Contact() {
    const contactInfo = {
      email: 'Cheanweijie02@gmail.com',
      phone: '+65 8358 2090',
      linkedin: 'http://www.linkedin.com/in/cheanweijie',
      location: 'Singapore'
    };
  
    return (
      <section id="contact" className="section-padding text-white">
        <div className="container-max">
          
          {/* Section Header with Rainbow Text */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 rainbow-text">
              Let's Connect
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-200 mt-8 max-w-2xl mx-auto">
              Ready to create something amazing together? Let's discuss how we can bring your ideas to life!
            </p>
          </div>
  
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Email Card */}
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="vibrant-card p-8 rounded-3xl block hover:neon-blue transition-all group"
            >
              <div className="text-center">
                <div className="glass w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">📧</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Email Me</h3>
                <p className="text-gray-300 break-all">{contactInfo.email}</p>
                <p className="text-gray-400 text-sm mt-2">Click to send an email</p>
              </div>
            </a>
  
            {/* LinkedIn Card */}
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="vibrant-card p-8 rounded-3xl block hover:neon-purple transition-all group"
            >
              <div className="text-center">
                <div className="glass w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">LinkedIn</h3>
                <p className="text-gray-300">Connect professionally</p>
                <p className="text-gray-400 text-sm mt-2">View my professional profile</p>
              </div>
            </a>
  
            {/* Phone Card */}
            <div className="vibrant-card p-8 rounded-3xl hover:neon-pink transition-all group">
              <div className="text-center">
                <div className="glass w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-pink-300 mb-4">Call Me</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
                <p className="text-gray-400 text-sm mt-2">Available in Singapore</p>
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="text-center">
            <div className="vibrant-card p-12 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-6 rainbow-text">Ready to Work Together?</h3>
              <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about creating innovative solutions and always eager to take on new challenges. 
                Whether it's a full-time opportunity, freelance project, or just a conversation about technology, 
                let's discuss how we can work together to bring your ideas to life!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                
                {/* Enhanced Email Button */}
                <div className="animated-border hover:scale-105 transition-transform">
                  <a 
                    href={`mailto:${contactInfo.email}?subject=Let's Work Together!&body=Hi Wei Jie, I'm interested in discussing opportunities with you.`}
                    className="animated-border-inner text-gray-800 font-semibold text-lg block px-8 py-4"
                  >
                    Send Email
                  </a>
                </div>
                
                {/* Neon LinkedIn Button */}
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all text-lg neon-blue hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
  
          {/* Fun Availability Status */}
          <div className="text-center mt-16">
            <div className="glass p-6 rounded-2xl max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">Available for Internships</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">August - December 2025</p>
            </div>
          </div>
        </div>
      </section>
    );
  }