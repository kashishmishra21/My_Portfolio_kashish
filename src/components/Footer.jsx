import React from 'react';
import { Code, Terminal, Mail } from 'lucide-react';
import { personalData } from '../data/personalData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <div className="footer-brand">Designed & Built by Kashish Mishra</div>
          <div className="footer-subtitle">Full Stack Developer • AI Enthusiast</div>
        </div>

        <div className="footer-socials">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={personalData.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LeetCode Profile"
          >
            <Code size={18} />
          </a>
          <a
            href={personalData.socials.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="HackerRank Profile"
          >
            <Terminal size={18} />
          </a>
          <a
            href={personalData.socials.email}
            className="social-btn"
            aria-label="Email Kashish"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="footer-copy">
          © {year} Kashish Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
