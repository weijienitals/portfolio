import React from "react";

export default function AboutSection() {
  return (
    <section className="section-container bg-gray-50 min-h-screen flex items-center">
      <div className="w-full">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A dedicated software developer with a passion for innovation and
            continuous learning
          </p>
        </div>

        {/* Simple, clean side-by-side layout */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-row items-center gap-12">
            {/* Text Content - 70% of space */}
            <div className="w-2/3">
              <div className="space-y-6">
                <p className="text-gray-700 leading-8 text-lg">
                  I am a passionate software developer with a strong foundation in
                  computer science and hands-on experience in building web
                  applications and digital solutions. My journey in technology has
                  been driven by curiosity and a desire to solve real-world problems
                  through code.
                </p>
                <p className="text-gray-700 leading-8 text-lg">
                  With expertise spanning multiple programming languages and
                  frameworks, I enjoy working on diverse projects that challenge me to
                  grow and learn. I believe in writing clean, maintainable code and
                  following industry best practices to deliver high-quality solutions.
                </p>
                <p className="text-gray-700 leading-8 text-lg">
                  When I'm not coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and sharing knowledge with the
                  developer community. I'm always eager to take on new challenges and
                  collaborate with teams to build innovative solutions.
                </p>
              </div>
            </div>

            {/* Image - 30% of space with FORCED constraints, bigger and rectangular */}
            <div className="w-1/3 flex justify-center">
              <div className="w-64 h-64 flex-shrink-0">
                <img
                  src="/images/halfbody.png"
                  alt="Chean Wei Jie - Profile Picture"
                  className="w-full h-full object-cover shadow-lg border-4 border-white rounded-lg"
                  style={{
                    width: '256px !important',
                    height: '256px !important',
                    maxWidth: '256px',
                    maxHeight: '256px',
                    minWidth: '256px',
                    minHeight: '256px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}