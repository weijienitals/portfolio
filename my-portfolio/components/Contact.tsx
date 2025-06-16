export default function Contact() {
    const contactInfo = {
      phone: "+65 8358 2090",
      email: "Cheanweijie02@gmail.com",
      linkedin: "http://www.linkedin.com/in/cheanweijie",
      location: "Block 2 Rivervale Link #13-04, Singapore 545040",
      availability: "18 Aug 2025 – 30 December 2025"
    };
  
    const contactMethods = [
      {
        icon: "📧",
        label: "Email",
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
        description: "Best for detailed inquiries and project discussions",
        color: "blue"
      },
      {
        icon: "📱",
        label: "Phone",
        value: contactInfo.phone,
        href: `tel:${contactInfo.phone}`,
        description: "Available for calls and WhatsApp messages",
        color: "green"
      },
      {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/cheanweijie",
        href: contactInfo.linkedin,
        description: "Professional networking and career opportunities",
        color: "purple"
      },
      {
        icon: "📍",
        label: "Location",
        value: "Singapore",
        href: "#",
        description: contactInfo.location,
        color: "orange"
      }
    ];
  
    const quickActions = [
      {
        title: "Hire Me",
        description: "Looking for internship opportunities",
        icon: "💼",
        action: "Email Resume",
        href: `mailto:${contactInfo.email}?subject=Internship Opportunity&body=Hi Wei Jie, I'm interested in discussing internship opportunities with you.`,
        color: "blue"
      },
      {
        title: "Collaborate",
        description: "Let's work on exciting projects together",
        icon: "🤝",
        action: "Start Discussion",
        href: `mailto:${contactInfo.email}?subject=Project Collaboration&body=Hi Wei Jie, I'd like to discuss a potential collaboration opportunity.`,
        color: "purple"
      },
      {
        title: "Connect",
        description: "Professional networking and mentorship",
        icon: "🌐",
        action: "Connect on LinkedIn",
        href: contactInfo.linkedin,
        color: "green"
      }
    ];
  
    const getColorClasses = (color: string) => {
      const colorMap = {
        blue: {
          gradient: "from-blue-500 to-blue-600",
          light: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-600"
        },
        purple: {
          gradient: "from-purple-500 to-purple-600",
          light: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-600"
        },
        green: {
          gradient: "from-green-500 to-green-600",
          light: "bg-green-50",
          border: "border-green-200",
          text: "text-green-600"
        },
        orange: {
          gradient: "from-orange-500 to-orange-600",
          light: "bg-orange-50",
          border: "border-orange-200",
          text: "text-orange-600"
        }
      };
      return colorMap[color as keyof typeof colorMap];
    };
  
    return (
      <section id="contact" className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
              Whether you're looking for an intern, want to collaborate on a project, or just want to connect, 
              I'd love to hear from you!
            </p>
          </div>
  
          <div className="max-w-7xl mx-auto">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {quickActions.map((action, index) => {
                const colors = getColorClasses(action.color);
                return (
                  <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700">
                    <div className={`w-20 h-20 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <span className="text-3xl">{action.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{action.description}</p>
                    <a 
                      href={action.href}
                      target={action.href.includes('linkedin') ? '_blank' : undefined}
                      rel={action.href.includes('linkedin') ? 'noopener noreferrer' : undefined}
                      className={`inline-block bg-gradient-to-r ${colors.gradient} hover:shadow-lg text-white px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105`}
                    >
                      {action.action}
                    </a>
                  </div>
                );
              })}
            </div>
  
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const colors = getColorClasses(method.color);
                    return (
                      <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 group">
                        <div className="flex items-start">
                          <div className={`w-14 h-14 bg-gradient-to-r ${colors.gradient} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <span className="text-2xl">{method.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2 text-white">{method.label}</h4>
                            <a 
                              href={method.href}
                              target={method.href.includes('http') ? '_blank' : undefined}
                              rel={method.href.includes('http') ? 'noopener noreferrer' : undefined}
                              className={`${colors.text} hover:text-white transition-colors duration-300 font-medium text-lg block mb-2`}
                            >
                              {method.value}
                            </a>
                            <p className="text-gray-400 text-sm leading-relaxed">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
  
              {/* Availability & Additional Info */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                  Availability & Info
                </h3>
                
                {/* Availability */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-lg">
                  <h4 className="font-semibold text-xl mb-4 flex items-center">
                    <span className="text-2xl mr-3">🗓️</span>
                    Internship Availability
                  </h4>
                  <p className="text-blue-100 mb-3">Available for internship opportunities:</p>
                  <p className="text-2xl font-bold">{contactInfo.availability}</p>
                  <div className="mt-4 p-4 bg-white/20 rounded-lg">
                    <p className="text-blue-100 text-sm">
                      Ready to contribute to innovative projects and gain hands-on industry experience
                    </p>
                  </div>
                </div>
  
                {/* Response Time */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h4 className="font-semibold text-xl mb-6 flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    Response Time
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                        <span className="text-gray-300">Email</span>
                      </div>
                      <span className="text-white font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                        <span className="text-gray-300">LinkedIn</span>
                      </div>
                      <span className="text-white font-medium">Within 2-3 days</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                        <span className="text-gray-300">Phone</span>
                      </div>
                      <span className="text-white font-medium">Business hours</span>
                    </div>
                  </div>
                </div>
  
                {/* Areas of Interest */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <h4 className="font-semibold text-xl mb-6 flex items-center">
                    <span className="text-2xl mr-3">💡</span>
                    Areas of Interest
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-blue-100 px-4 py-3 rounded-xl text-sm font-medium text-center">
                      Fullstack Development
                    </span>
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-purple-100 px-4 py-3 rounded-xl text-sm font-medium text-center">
                      AI & Analytics
                    </span>
                    <span className="bg-gradient-to-r from-green-600 to-green-700 text-green-100 px-4 py-3 rounded-xl text-sm font-medium text-center">
                      Fintech
                    </span>
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-red-100 px-4 py-3 rounded-xl text-sm font-medium text-center">
                      Data Science
                    </span>
                    <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-yellow-100 px-4 py-3 rounded-xl text-sm font-medium text-center col-span-2">
                      Web Scraping & APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                <h3 className="text-4xl font-bold mb-6">Ready to Work Together?</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  I'm passionate about creating innovative solutions and always eager to take on new challenges. 
                  Whether it's a full-time opportunity, freelance project, or just a conversation about technology, 
                  let's discuss how we can work together to bring your ideas to life!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href={`mailto:${contactInfo.email}?subject=Let's Work Together!&body=Hi Wei Jie, I'm interested in discussing opportunities with you.`}
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  >
                    Send Email
                  </a>
                  <a 
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }