import React, { useState } from 'react';
import { Download, Eye, Code, Mail, User, Terminal } from 'lucide-react';
import { personalData } from '../data/personalData';
import { handleResumeDownload } from './ResumeModal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenResumeModal }) {
  const [photoError, setPhotoError] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Primary Information */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              <span>Available for Software Development Opportunities</span>
            </div>

            <h1 className="hero-name">KASHISH MISHRA</h1>

            <h2 className="hero-title">FULL STACK DEVELOPER</h2>

            <div className="hero-goal-tag">
              Career Direction: <strong>Software Engineer + AI</strong>
            </div>

            <p className="hero-intro">
              I am a Full Stack Developer focused on building responsive, user-friendly web experiences while continuously learning AI integration and modern technologies.
            </p>

            <div className="hero-cta">
              <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
                <Eye size={18} /> View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Kashish_Mishra_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
              >
                <Code size={20} />
              </a>
              <a
                href={personalData.socials.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="HackerRank Profile"
                title="HackerRank Profile"
              >
                <Terminal size={20} />
              </a>
              <a
                href={personalData.socials.email}
                className="social-btn"
                aria-label="Email Kashish"
                title="Email Kashish"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="hero-avatar-wrapper">
            <div className="avatar-card">
              <div className="avatar-placeholder">
                {!photoError ? (
                  <img
                    src="/profile.jpeg"
                    alt="Kashish Mishra"
                    onError={() => setPhotoError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      transform: 'scale(1.25)',
                      borderRadius: '50%'
                    }}
                  />
                ) : (
                  <User size={64} />
                )}
              </div>

              <div className="avatar-info">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  KASHISH MISHRA
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Full Stack Developer @ Current Affairs 360
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
