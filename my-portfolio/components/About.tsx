// components/AboutSection.tsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="section-container bg-gray-50">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A dedicated software developer with a passion for innovation and
          continuous learning
        </p>
      </div>

      <div className="grid-2 items-center">
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            I am a passionate software developer with a strong foundation in
            computer science and hands-on experience in building web
            applications and digital solutions. My journey in technology has
            been driven by curiosity and a desire to solve real-world problems
            through code.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With expertise spanning multiple programming languages and
            frameworks, I enjoy working on diverse projects that challenge me to
            grow and learn. I believe in writing clean, maintainable code and
            following industry best practices to deliver high-quality solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and sharing knowledge with the
            developer community. I'm always eager to take on new challenges and
            collaborate with teams to build innovative solutions.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="professional-tag primary">Problem Solver</span>
            <span className="professional-tag primary">Team Player</span>
            <span className="professional-tag primary">Quick Learner</span>
            <span className="professional-tag primary">Detail Oriented</span>
          </div>
        </div>

        <div className="professional-card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Core Values
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🎯</span>
              <div>
                <h4 className="font-semibold text-gray-900">Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Striving for the highest quality in every project
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🚀</span>
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Embracing new technologies and creative solutions
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">🤝</span>
              <div>
                <h4 className="font-semibold text-gray-900">Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  Working together to achieve common goals
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">📚</span>
              <div>
                <h4 className="font-semibold text-gray-900">Growth</h4>
                <p className="text-gray-600 text-sm">
                  Continuous learning and professional development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}