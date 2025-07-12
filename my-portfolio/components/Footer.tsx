// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#1a202c',
        color: 'white',
        padding: '3rem 0',
        marginTop: '2rem'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}
      >
        {/* Main Footer Content */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          
          {/* Left Section - Name & Resume */}
          <div>
            <h3 
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Chean Wei Jie
            </h3>
            <a 
              href="/Chean_Wei_Jie_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Chean_Wei_Jie_Resume.pdf" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#60a5fa',
                textDecoration: 'underline',
                fontSize: '0.9rem'
              }}
            >
              <span>Download My Resume</span>
              <span>↗</span>
            </a>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h3 
              style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Quick Links
            </h3>
            <nav>
              <a 
                href="#"
                style={{
                  display: 'block',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                Home
              </a>
              <a 
                href="#about"
                style={{
                  display: 'block',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                About
              </a>
              <a 
                href="#skills"
                style={{
                  display: 'block',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                Skills
              </a>
              <a 
                href="#projects"
                style={{
                  display: 'block',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                Projects
              </a>
              <a 
                href="#experience"
                style={{
                  display: 'block',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                Experience
              </a>
            </nav>
          </div>

          {/* Right Section - Connect With Me */}
          <div>
            <h3 
              style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Connect With Me
            </h3>
            
            {/* Social Icons */}
            <div 
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              {/* LinkedIn */}
              <a 
                href="http://www.linkedin.com/in/cheanweijie"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '1.5rem'
                }}
              >
                🔗
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/cheanweijie"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '1.5rem'
                }}
              >
                💻
              </a>

              {/* Email */}
              <a 
                href="mailto:Cheanweijie02@gmail.com"
                style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '1.5rem'
                }}
              >
                📧
              </a>
            </div>

            {/* Email Address */}
            <p 
              style={{
                color: '#d1d5db',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              Cheanweijie02@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright & Built With */}
        <div 
          style={{
            borderTop: '1px solid #374151',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Copyright */}
          <p 
            style={{
              color: '#9ca3af',
              fontSize: '0.85rem',
              margin: 0
            }}
          >
            © 2025 Chean Wei Jie. All rights reserved.
          </p>
          
          {/* Built With & Resume Link */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <p 
              style={{
                color: '#9ca3af',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              Built with ❤️ Next.js
            </p>
            <a 
              href="/Chean_Wei_Jie_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#60a5fa',
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}